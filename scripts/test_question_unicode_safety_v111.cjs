// Detect visually deceptive question text without changing existing IDs or data.
const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');
const source = fs.readFileSync(path.join(__dirname, '../src/data/questions.ts'), 'utf8');
const bank = JSON.parse(source.slice(source.indexOf('= [') + 2, source.lastIndexOf('];') + 1));
const invisible = /[\u200B-\u200F\u202A-\u202E\u2060-\u206F\uFEFF]/u;
const normalize = value => value.normalize('NFKC').replace(/\s/gu, '').toLocaleLowerCase('ja-JP');
function check(q) {
  const fields = [q.prompt, q.explanation, q.sample, ...(q.options || []), ...(q.keywords || [])];
  for (const value of fields) {
    if (typeof value !== 'string') continue;
    if (invisible.test(value)) throw Error(`${q.id}: invisible or directional control`);
    if (/[\u0000-\u001F\u007F]/u.test(value)) throw Error(`${q.id}: control character`);
  }
  if (q.kind === 'choice') {
    const keys = q.options.map(normalize);
    if (new Set(keys).size !== keys.length) throw Error(`${q.id}: visually equivalent choices`);
  }
}
let selfChecks = 0;
for (const q of [
  {id:'fixture',kind:'choice',prompt:'a',options:['ＡＢＣ','ABC']},
  {id:'fixture',kind:'choice',prompt:'a\u200b',options:['A','B']},
  {id:'fixture',kind:'choice',prompt:'a',options:['A\u202e','B']},
  {id:'fixture',kind:'choice',prompt:'a',options:['a\n','B']},
]) { assert.throws(() => check(q)); selfChecks++; }
check({id:'fixture',kind:'choice',prompt:'食生活',options:['ご飯','パン','麺']}); selfChecks++;
for (const q of bank) check(q);
assert.equal(bank.length,506,'unexpected question count; review baseline before updating guard');
console.log(`Question Unicode safety: ${selfChecks} self-checks and ${bank.length} questions passed`);
