// Web download regression against the production TypeScript backup module.
const fs=require('node:fs'),path=require('node:path'),vm=require('node:vm'),assert=require('node:assert/strict');
const ts=(()=>{try{return require('typescript')}catch{const {execFileSync}=require('node:child_process');return require(path.join(execFileSync('npm',['root','-g'],{encoding:'utf8'}).trim(),'typescript'))}})();
const root=path.resolve(__dirname,'..');
function load(rel,mocks,globals={}){const js=ts.transpileModule(fs.readFileSync(path.join(root,rel),'utf8'),{compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2020}}).outputText;const m={exports:{}};const context={Date,Map,Set,Number,JSON,Object,Array,String,RegExp,Error,Promise,console,...globals};vm.runInNewContext('(function(require,module,exports){'+js+'\n})',context)(id=>{if(!(id in mocks))throw Error('unexpected import '+id);return mocks[id]},m,m.exports);return m.exports}
const questions=load('src/data/questions.ts',{}).questions;
const valid={format:'shoku-study-backup',version:1,exportedAt:'2026-11-15T00:00:00.000Z',progressRaw:JSON.stringify({dailyGoal:8}),draftRaw:null};
function browser(){let clicked=0,appended=0,removed=0,created=0,revoked=0,timers=0,blob;
 class FakeBlob{constructor(parts,opts){this.text=parts.join('');this.size=Buffer.byteLength(this.text);this.type=opts.type;blob=this;}}
 const url={createObjectURL:()=>{created++;return 'blob:local'},revokeObjectURL:u=>{assert.equal(u,'blob:local');revoked++}};
 const document={body:{appendChild:()=>{appended++}},createElement:tag=>{assert.equal(tag,'a');return {click(){clicked++},remove(){removed++}}}};
 const api=load('src/lib/backup.ts',{'@react-native-async-storage/async-storage':{default:{}},'../data/questions':{questions}},{document,URL:url,Blob:FakeBlob,setTimeout:fn=>{timers++;fn()}});
 return {api,stats:()=>({clicked,appended,removed,created,revoked,timers}),blob:()=>blob};}
const x=browser();x.api.downloadBackupOnWeb(valid);assert.deepEqual(x.stats(),{clicked:1,appended:1,removed:1,created:1,revoked:1,timers:1});assert.equal(x.blob().type,'application/json;charset=utf-8');assert.equal(JSON.parse(x.blob().text).progressRaw,valid.progressRaw);console.log('PASS valid download serializes backup and cleans up URL');
const y=browser();assert.throws(()=>y.api.downloadBackupOnWeb({...valid,version:2}),/Invalid backup/);assert.equal(y.stats().created,0);console.log('PASS invalid envelope cannot trigger download');
const z=browser();assert.throws(()=>z.api.downloadBackupOnWeb({...valid,progressRaw:JSON.stringify({notes:'あ'.repeat(2*1024*1024)})}),/5 MiB/);assert.equal(z.stats().created,0);console.log('PASS oversized UTF-8 backup rejected before URL allocation');
console.log('Web backup download regression: 3/3 passed');
