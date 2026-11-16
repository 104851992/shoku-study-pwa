// Production safe-clear fault injection: read failures must never report success.
const fs=require('node:fs'),path=require('node:path'),vm=require('node:vm'),assert=require('node:assert/strict');
const ts=(()=>{try{return require('typescript')}catch{const {execFileSync}=require('node:child_process');return require(path.join(execFileSync('npm',['root','-g'],{encoding:'utf8'}).trim(),'typescript'))}})();
const root=path.resolve(__dirname,'..');
function load(rel,mocks){const js=ts.transpileModule(fs.readFileSync(path.join(root,rel),'utf8'),{compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2020}}).outputText;const m={exports:{}};vm.runInNewContext('(function(require,module,exports){'+js+'\n})',{Date,Map,Set,Number,JSON,Object,Array,String,RegExp,Error,Promise,console})(id=>{if(!(id in mocks))throw Error('unexpected import '+id);return mocks[id]},m,m.exports);return m.exports}
const questions=load('src/data/questions.ts',{}).questions;
const P='@shoku_study/progress_v1',D='@shoku_study/session_draft_v1';
function setup(mode){const state=new Map([[P,'old-progress'],[D,'old-draft']]);let reads=0,deletes=0;const storage={multiGet:async keys=>{reads++;if((mode==='initial-read'&&reads===1)||(mode==='verify-read'&&reads===2)||(mode==='rollback-read'&&reads===3))throw Error('storage read failure');return keys.map(k=>[k,state.get(k)??null])},setItem:async(k,v)=>{state.set(k,v)},removeItem:async k=>{deletes++;if(mode==='first-delete'&&deletes===1)throw Error('first delete failure');state.delete(k)}};const api=load('src/lib/backup.ts',{'@react-native-async-storage/async-storage':{default:storage},'../data/questions':{questions}});return {state,api,counts:()=>({reads,deletes})}}
(async()=>{
 {const {state,api,counts}=setup('initial-read');await assert.rejects(api.clearAllLearningDataSafely(),/storage read failure/);assert.equal(counts().deletes,0);assert.equal(state.get(P),'old-progress');assert.equal(state.get(D),'old-draft');console.log('PASS initial read fails without deleting')}
 {const {state,api}=setup('first-delete');await assert.rejects(api.clearAllLearningDataSafely(),/first delete failure/);assert.equal(state.get(P),'old-progress');assert.equal(state.get(D),'old-draft');console.log('PASS first delete failure restores both records')}
 {const {state,api}=setup('verify-read');await assert.rejects(api.clearAllLearningDataSafely(),/storage read failure/);assert.equal(state.get(P),'old-progress');assert.equal(state.get(D),'old-draft');console.log('PASS verification read failure rolls back both records')}
 {const {api}=setup('rollback-read'); // trigger rollback via second-stage read error, then third-stage rollback read error
  // This mode only fails on third read, so successful clear needs only two reads: no failure expected.
  await api.clearAllLearningDataSafely();console.log('PASS no unnecessary rollback read on successful clear')}
 console.log('Safe clear read fault regression: 4/4 passed')
})().catch(e=>{console.error(e);process.exitCode=1});
