// Fault-injection checks for the actual clearAllLearningDataSafely implementation.
const fs=require('node:fs'),path=require('node:path'),vm=require('node:vm'),assert=require('node:assert/strict');
const ts=(()=>{try{return require('typescript')}catch{const {execFileSync}=require('node:child_process');return require(path.join(execFileSync('npm',['root','-g'],{encoding:'utf8'}).trim(),'typescript'))}})();
const root=path.resolve(__dirname,'..');
function load(rel,mocks){const js=ts.transpileModule(fs.readFileSync(path.join(root,rel),'utf8'),{compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2020}}).outputText;const m={exports:{}};vm.runInNewContext('(function(require,module,exports){'+js+'\n})',{Date,Map,Set,Number,JSON,Object,Array,String,RegExp,Error,Promise,console})(id=>{if(!(id in mocks))throw Error('unexpected import '+id);return mocks[id]},m,m.exports);return m.exports}
const questions=load('src/data/questions.ts',{}).questions;
const P='@shoku_study/progress_v1',D='@shoku_study/session_draft_v1';
const originalP=JSON.stringify({dailyGoal:8});const originalD=JSON.stringify({ids:[questions[0].id],index:0,grade:questions[0].grade,mode:'practice',began:1700000000000,responses:[],answered:0,correct:0});
function setup(fault){const state=new Map([[P,originalP],[D,originalD]]);let operations=0;const storage={multiGet:async keys=>keys.map(k=>[k,state.get(k)??null]),setItem:async(k,v)=>{operations++;if(fault==='rollback-fails')throw Error('rollback write failed');state.set(k,v)},removeItem:async k=>{operations++;if(fault==='second-remove-throws'&&operations===2)throw Error('second remove failed');if(fault==='rollback-fails'&&operations===2)throw Error('second remove failed');if(fault==='silent-first-remove'&&operations===1)return;state.delete(k)}};return {state,api:load('src/lib/backup.ts',{'@react-native-async-storage/async-storage':{default:storage},'../data/questions':{questions}})}}
(async()=>{
 {const {state,api}=setup('normal');await api.clearAllLearningDataSafely();assert.equal(state.has(P),false);assert.equal(state.has(D),false);console.log('PASS successful clear');}
 {const {state,api}=setup('second-remove-throws');await assert.rejects(api.clearAllLearningDataSafely(),/second remove failed/);assert.equal(state.get(P),originalP);assert.equal(state.get(D),originalD);console.log('PASS second remove failure rolls back');}
 {const {state,api}=setup('silent-first-remove');await assert.rejects(api.clearAllLearningDataSafely(),/Delete verification failed/);assert.equal(state.get(P),originalP);assert.equal(state.get(D),originalD);console.log('PASS silent deletion detected and rolled back');}
 {const {state,api}=setup('rollback-fails');await assert.rejects(api.clearAllLearningDataSafely(),/rollback could not be verified/);assert.equal(state.has(P),false);console.log('PASS unrecoverable rollback warns');}
 console.log('Clear data fault regression: 4/4 passed');
})().catch(e=>{console.error(e);process.exitCode=1});
