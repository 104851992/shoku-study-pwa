// Fault-injection regression against the real TypeScript restore service.
const fs=require('node:fs'),path=require('node:path'),vm=require('node:vm'),assert=require('node:assert/strict');
const ts=(()=>{try{return require('typescript')}catch{const {execFileSync}=require('node:child_process');return require(path.join(execFileSync('npm',['root','-g'],{encoding:'utf8'}).trim(),'typescript'))}})();
const root=path.resolve(__dirname,'..');
function load(rel,mocks){const js=ts.transpileModule(fs.readFileSync(path.join(root,rel),'utf8'),{compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2020}}).outputText;const m={exports:{}};vm.runInNewContext('(function(require,module,exports){'+js+'\n})',{Date,Map,Set,Number,JSON,Object,Array,String,RegExp,Error,Promise,console})(id=>{if(!(id in mocks))throw Error('unexpected import '+id);return mocks[id]},m,m.exports);return m.exports}
const questions=load('src/data/questions.ts',{}).questions;
const P='@shoku_study/progress_v1',D='@shoku_study/session_draft_v1';
const oldP=JSON.stringify({dailyGoal:8}),oldD=JSON.stringify({ids:[questions[0].id],index:0,grade:questions[0].grade,mode:'practice',began:1700000000000,responses:[],answered:0,correct:0});
const target={format:'shoku-study-backup',version:1,exportedAt:'2026-11-15T00:00:00.000Z',progressRaw:JSON.stringify({dailyGoal:15}),draftRaw:null};
function setup(fault){const state=new Map([[P,oldP],[D,oldD]]);let writes=0;const storage={multiGet:async keys=>keys.map(k=>[k,state.get(k)??null]),setItem:async(k,v)=>{writes++;if((fault==='throw-on-second'||fault==='rollback-fails')&&writes===2)throw Error('injected write failure');if(fault==='silent-first'&&writes===1)return;if(fault==='rollback-fails'&&writes>=3)throw Error('rollback unavailable');state.set(k,v)},removeItem:async k=>{writes++;if((fault==='throw-on-second'||fault==='rollback-fails')&&writes===2)throw Error('injected remove failure');if(fault==='rollback-fails'&&writes>=3)throw Error('rollback unavailable');state.delete(k)}};return {state,api:load('src/lib/backup.ts',{'@react-native-async-storage/async-storage':{default:storage},'../data/questions':{questions}})}}
(async()=>{
  {const {state,api}=setup('throw-on-second');await assert.rejects(api.restoreBackupAfterConfirmation(target),/injected remove failure/);assert.equal(state.get(P),oldP);assert.equal(state.get(D),oldD);console.log('PASS second write fails, originals restored');}
  {const {state,api}=setup('silent-first');await assert.rejects(api.restoreBackupAfterConfirmation(target),/Restore verification failed/);assert.equal(state.get(P),oldP);assert.equal(state.get(D),oldD);console.log('PASS silent first write detected and rolled back');}
  {const {state,api}=setup('rollback-fails');await assert.rejects(api.restoreBackupAfterConfirmation(target),/rollback could not be verified/);assert.notEqual(state.get(P),oldP);console.log('PASS unrecoverable rollback explicitly reported');}
  console.log('Restore failure rollback regression: 3/3 passed');
})().catch(e=>{console.error(e);process.exitCode=1});
