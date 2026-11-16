/** v126 deploy gate. Do not publish a failed or structurally inconsistent question bank. */
'use strict';
const {spawnSync} = require('node:child_process');
const fs = require('node:fs');
const path = require('node:path');
const root = path.resolve(__dirname, '..');
process.chdir(root);
const fail = message => { console.error('RELEASE BLOCKED: '+message); process.exit(1); };
function run(executable, args) {
  console.log(`\n> ${executable} ${args.join(' ')}`);
  const p = spawnSync(executable, args, {cwd:root, stdio:'inherit', shell:false});
  if (p.error || p.status !== 0) fail(p.error ? p.error.message : `Command exited ${p.status}`);
}
function pythonExecutable() {
  const candidates = process.platform === 'win32' ? [['py',['-3']],['python',[]],['python3',[]]] : [['python3',[]],['python',[]]];
  for(const [name,prefix] of candidates){
    const x=spawnSync(name,[...prefix,'--version'],{stdio:'ignore',shell:false});
    if(!x.error && x.status===0) return [name,prefix];
  }
  fail('Python 3 not available; cannot verify question bank');
}
const [python, prefix] = pythonExecutable();
for(const s of ['validate_bank.py','test_catalog_sync_v115.py','check_grade3_500_v124.py','check_grade3_hard_v125.py','check_grade3_deep_v126.py']) {
  run(python,[...prefix, 'scripts/'+s]);
}
const suites = fs.readdirSync('scripts').filter(x=>/^test_.*\.cjs$/.test(x)).sort();
if(suites.length < 61) fail(`Expected at least 61 regression suites, found ${suites.length}`);
for(const filename of suites) run(process.execPath,[path.join('scripts',filename)]);
run(process.execPath,['--check','public/sw.js']);
console.log(`\nRELEASE GATE PASS: 5 bank checks, ${suites.length} Node suites and Service Worker syntax`);
