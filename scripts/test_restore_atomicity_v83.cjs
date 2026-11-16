// Regression: real backup.ts restore against failing and silently dropping storage writes.
const fs=require('fs'),path=require('path'),vm=require('vm'),assert=require('assert');
const ts=(()=>{try{return require('typescript')}catch{const {execFileSync}=require('child_process');return require(path.join(execFileSync('npm',['root','-g'],{encoding:'utf8'}).trim(),'typescript'))}})();
const root=path.resolve(__dirname,'..');
function load(rel,mocks){const js=ts.transpileModule(fs.readFileSync(path.join(root,rel),'utf8'),{compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2020}}).outputText;const m={exports:{}};vm.runInNewContext('(function(require,module,exports){'+js+'\n})',{Date,Map,Set,Number,JSON,Object,Array,String,RegExp,Error,Promise,console})(id=>{if(!(id in mocks))throw Error('unexpected import '+id);return mocks[id]},m,m.exports);return m.exports}
const questions=load('src/data/questions.ts',{}).questions;
const P='@shoku_study/progress_v1',D='@shoku_study/session_draft_v1';
const envelope={format:'shoku-study-backup',version:1,exportedAt:'2026-11-14T00:00:00.000Z',progressRaw:JSON.stringify({favorites:[questions[0].id]}),draftRaw:null};
async function run(kind){const original=new Map([[P,'{"dailyGoal":5}'],[D,'{"old":"draft"}']]);const state=new Map(original);let failed=false;
 const storage={multiGet:async keys=>keys.map(k=>[k,state.get(k)??null]),setItem:async(k,v)=>{if(kind==='throw'&&k===P&&!failed){failed=true;throw Error('injected write failure')}if(kind==='silent'&&k===P&&!failed){failed=true;return}state.set(k,v)},removeItem:async k=>{state.delete(k)}};
 const {restoreBackupAfterConfirmation}=load('src/lib/backup.ts',{'@react-native-async-storage/async-storage':{default:storage},'../data/questions':{questions}});
 if(kind==='success'){await restoreBackupAfterConfirmation(envelope);assert.strictEqual(state.get(P),envelope.progressRaw);assert.strictEqual(state.has(D),false)}
 else{await assert.rejects(restoreBackupAfterConfirmation(envelope));assert.deepStrictEqual([...state], [...original],kind+' rollback must preserve both raw values')}
}
(async()=>{for(const kind of ['success','throw','silent'])await run(kind);console.log('Restore atomicity regression: 3/3 passed')})().catch(e=>{console.error(e);process.exitCode=1});
