// Fault injection against production restore transaction; no real user storage touched.
const fs=require('node:fs'),path=require('node:path'),vm=require('node:vm'),assert=require('node:assert/strict');
const ts=(()=>{try{return require('typescript')}catch{const {execFileSync}=require('node:child_process');return require(path.join(execFileSync('npm',['root','-g'],{encoding:'utf8'}).trim(),'typescript'))}})();
const root=path.resolve(__dirname,'..');
function load(rel,mocks){const js=ts.transpileModule(fs.readFileSync(path.join(root,rel),'utf8'),{compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2020}}).outputText;const m={exports:{}};vm.runInNewContext('(function(require,module,exports){'+js+'\n})',{Date,Map,Set,Number,JSON,Object,Array,String,RegExp,Error,Promise,console})(id=>{if(!(id in mocks))throw Error('unexpected import '+id);return mocks[id]},m,m.exports);return m.exports}
const questions=load('src/data/questions.ts',{}).questions;
const P='@shoku_study/progress_v1',D='@shoku_study/session_draft_v1';
const q=questions[0];const draft=JSON.stringify({ids:[q.id],index:0,grade:q.grade,mode:'practice',correct:0,answered:0,began:1700000000000,responses:[]});
const envelope={format:'shoku-study-backup',version:1,exportedAt:'2026-11-15T00:00:00.000Z',progressRaw:'{"dailyGoal":15}',draftRaw:draft};
function setup(mode){const state=new Map([[P,'{"dailyGoal":7}'],[D,draft.replace('1700000000000','1700000000001')]]);let writes=0;const storage={multiGet:async keys=>keys.map(k=>[k,state.get(k)??null]),setItem:async(k,v)=>{writes++;if((mode==='throw-second'||mode==='rollback-fails')&&writes===2)throw Error('injected write failure');if(mode==='silent-second'&&writes===2)return;if(mode==='rollback-fails'&&writes>=3)throw Error('rollback unavailable');state.set(k,v)},removeItem:async k=>{state.delete(k)}};const api=load('src/lib/backup.ts',{'@react-native-async-storage/async-storage':{default:storage},'../data/questions':{questions}});return {state,api}}
(async()=>{
 for(const mode of ['throw-second','silent-second']){const {state,api}=setup(mode);const before=[state.get(P),state.get(D)];await assert.rejects(api.restoreBackupAfterConfirmation(envelope));assert.deepEqual([state.get(P),state.get(D)],before);console.log('PASS rollback after '+mode)}
 {const {state,api}=setup('rollback-fails');await assert.rejects(api.restoreBackupAfterConfirmation(envelope),/rollback could not be verified/);console.log('PASS explicit unsafe rollback error')}
 {const {state,api}=setup('normal');await api.restoreBackupAfterConfirmation(envelope);assert.equal(state.get(P),envelope.progressRaw);assert.equal(state.get(D),envelope.draftRaw);console.log('PASS normal restore')}
 console.log('Restore atomicity regression: 4/4 passed')
})().catch(e=>{console.error(e);process.exitCode=1});
