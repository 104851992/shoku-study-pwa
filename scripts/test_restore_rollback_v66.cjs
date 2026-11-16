const fs=require('fs'),path=require('path'),vm=require('vm'),assert=require('assert');
const ts=(()=>{try{return require('typescript')}catch{const {execFileSync}=require('child_process');return require(path.join(execFileSync('npm',['root','-g'],{encoding:'utf8'}).trim(),'typescript'));}})();
function load(rel,mocks){const js=ts.transpileModule(fs.readFileSync(path.join(__dirname,'..',rel),'utf8'),{compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2020}}).outputText;const m={exports:{}};vm.runInNewContext('(function(require,module,exports){'+js+'\n})',{Date,Map,Set,Number,JSON,Object,Array,String,RegExp,Error,Promise,console})(id=>mocks[id],m,m.exports);return m.exports;}
const questions=load('src/data/questions.ts',{}).questions;
const P='@shoku_study/progress_v1',D='@shoku_study/session_draft_v1';
const initialP='{"dailyGoal":10}', initialD='{"legacy":true}';
const envelope={format:'shoku-study-backup',version:1,exportedAt:'2026-11-14T00:00:00.000Z',progressRaw:'{"dailyGoal":20}',draftRaw:null};
(async()=>{
let count=0;
async function scenario(label,behavior,expectMessage){
 const data=new Map([[P,initialP],[D,initialD]]);let writes=0;
 const storage={multiGet:async keys=>keys.map(k=>[k,data.get(k)??null]),setItem:async(k,v)=>{writes++;if(behavior(k,v,writes))return;data.set(k,v)},removeItem:async k=>{writes++;if(behavior(k,null,writes))return;data.delete(k)}};
 const b=load('src/lib/backup.ts',{'@react-native-async-storage/async-storage':{default:storage},'../data/questions':{questions}});
 await assert.rejects(()=>b.restoreBackupAfterConfirmation(envelope),e=>{assert.ok(e.message.includes(expectMessage),e.message);return true});
 count++;console.log('PASS '+label);
 return data;
}
const a=await scenario('silent restore write failure is rolled back',(k,v,n)=>n===1,'Restore verification failed');assert.equal(a.get(P),initialP);assert.equal(a.get(D),initialD);
const b=await scenario('silent rollback write failure is detected',(k,v,n)=>n===2||n===3,'rollback could not be verified');assert.notEqual(b.get(P),initialP);
console.log('Rollback regression: '+count+'/'+count+' passed');
})().catch(e=>{console.error(e);process.exitCode=1});
