// Strict UTF-8 and corruption sentinels for shipped Japanese source and learning content.
const fs=require('node:fs');
const path=require('node:path');
const assert=require('node:assert/strict');
const root=path.resolve(__dirname,'..');
const files=['src/AppRoot.tsx','src/data/questions.ts','src/data/exam.ts','src/lib/backup.ts','src/lib/progress.ts','App.tsx','QUESTION_CATALOG.csv','public/manifest.webmanifest','public/sw.js'];
const decoder=new TextDecoder('utf-8',{fatal:true});
function validate(bytes,name){
  const text=decoder.decode(bytes);
  if(text.includes('\uFFFD'))throw Error(`${name}: replacement character U+FFFD`);
  if(/[\u0000-\u0008\u000B\u000C\u000E-\u001F]/u.test(text))throw Error(`${name}: unexpected control character`);
  // Common sequences from UTF-8 Japanese accidentally decoded as Shift-JIS.
  if(/(?:縺[\u3040-\u30FF]|繧[\u3040-\u30FF]){2,}/u.test(text))throw Error(`${name}: suspected mojibake`);
  return text;
}
let checks=0;
for(const [label,bytes] of [
  ['malformed UTF-8',Buffer.from([0xe3,0x81])],
  ['replacement character',Buffer.from('食\uFFFD生活')],
  ['control character',Buffer.from('食\u0001生活')],
  ['mojibake',Buffer.from('縺あ繧い縺う繧え')]
]){assert.throws(()=>validate(bytes,label));checks++;}
assert.equal(validate(Buffer.from('食生活アドバイザー：栄養と健康。'),'valid Japanese'),'食生活アドバイザー：栄養と健康。');checks++;
for(const rel of files){const full=path.join(root,rel);assert.ok(fs.statSync(full).isFile());validate(fs.readFileSync(full),rel);checks++;}
const bank=validate(fs.readFileSync(path.join(root,'src/data/questions.ts')),'question bank');
assert.match(bank,/栄養|食品|食生活/u);checks++;
console.log(`Japanese text integrity: ${checks}/${checks} checks passed (${files.length} shipped text files)`);
