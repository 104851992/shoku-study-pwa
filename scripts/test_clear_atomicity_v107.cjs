// Fault injection for production safe-clear transaction. No real storage is touched.
const fs=require('node:fs'),path=require('node:path'),vm=require('node:vm'),assert=require('node:assert/strict');
const ts=(()=>{try{return require('typescript')}catch{const {execFileSync}=require('node:child_process');return require(path.join(execFileSync('npm',['root','-g'],{encoding:'utf8'}).trim(),'typescript'))}})();
const root=path.resolve(__dirname,'..');
function load(rel,mocks){const js=ts.transpileModule(fs.readFileSync(path.join(root,rel),'utf8'),{compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2020}}).outputText;const m={exports:{}};vm.runInNewContext('(function(require,module,exports){'+js+'\n})',{Date,Map,Set,Number,JSON,Object,Array,String,RegExp,Error,Promise,console})(id=>{if(!(id in mocks))throw Error('unexpected import '+id);return mocks[id]},m,m.exports);return m.exports}
const questions=load('src/data/questions.ts',{}).questions;
const P='@shoku_study/progress_v1',D='@shoku_study/session_draft_v1';
function setup(mode){const state=new Map([[P,'old-progress'],[D,'old-draft']]);let deletes=0;let writes=0;const storage={multiGet:async keys=>keys.map(k=>[k,state.get(k)??null]),setItem:async(k,v)=>{writes++;if(mode==='rollback-fails'&&writes===1)throw Error('rollback failure');state.set(k,v)},removeItem:async k=>{deletes++;if((mode==='throw-second'||mode==='rollback-fails')&&deletes===2)throw Error('delete failure');if(mode==='silent-second'&&deletes===2)return;state.delete(k)}};const api=load('src/lib/backup.ts',{'@react-native-async-storage/async-storage':{default:storage},'../data/questions':{questions}});return {state,api}}
(async()=>{
 for(const mode of ['throw-second','silent-second']){const {state,api}=setup(mode);await assert.rejects(api.clearAllLearningDataSafely());assert.equal(state.get(P),'old-progress');assert.equal(state.get(D),'old-draft');console.log('PASS clear rollback after '+mode)}
 {const {api}=setup('rollback-fails');await assert.rejects(api.clearAllLearningDataSafely(),/rollback could not be verified/);console.log('PASS unsafe clear rollback explicitly reported')}
 {const {state,api}=setup('normal');await api.clearAllLearningDataSafely();assert.equal(state.has(P),false);assert.equal(state.has(D),false);console.log('PASS normal clear')}
 console.log('Safe clear atomicity regression: 4/4 passed')
})().catch(e=>{console.error(e);process.exitCode=1});
