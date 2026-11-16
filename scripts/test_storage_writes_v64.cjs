// Exercise actual TypeScript save/clear/load functions against a fault-injectable AsyncStorage mock.
const fs=require('fs'),path=require('path'),vm=require('vm'),assert=require('assert');
const ts=(()=>{try{return require('typescript')}catch{const {execFileSync}=require('child_process');return require(path.join(execFileSync('npm',['root','-g'],{encoding:'utf8'}).trim(),'typescript'));}})();
const root=path.resolve(__dirname,'..');
function load(rel,mocks){const js=ts.transpileModule(fs.readFileSync(path.join(root,rel),'utf8'),{compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2020}}).outputText;const module={exports:{}};vm.runInNewContext('(function(require,module,exports){'+js+'\n})',{Date,Map,Set,Number,JSON,Object,Array,String,RegExp,Error,Promise,console})(id=>{if(!(id in mocks))throw Error('unexpected import '+id);return mocks[id]},module,module.exports);return module.exports;}
const questions=load('src/data/questions.ts',{}).questions;
const data=new Map();let failSet=false,failRemove=false;
const storage={getItem:async k=>data.get(k)??null,setItem:async(k,v)=>{if(failSet)throw Error('disk write failure');data.set(k,v)},removeItem:async k=>{if(failRemove)throw Error('disk remove failure');data.delete(k)}};
const p=load('src/lib/progress.ts',{'@react-native-async-storage/async-storage':{default:storage},'../data/questions':{questions}});
const P='@shoku_study/progress_v1',D='@shoku_study/session_draft_v1';
const q=questions.find(q=>q.kind==='choice');
const draft={ids:[q.id],index:0,grade:q.grade,mode:'practice',correct:0,answered:0,began:1794528000000,responses:[]};
let n=0;async function check(name,fn){await fn();n++;console.log('PASS '+name)}
(async()=>{
 await check('progress save/load roundtrip',async()=>{const v=await p.loadProgress();v.dailyGoal=23;await p.saveProgress(v);assert.equal((await p.loadProgress()).dailyGoal,23)});
 await check('draft save/load roundtrip',async()=>{await p.saveDraft(draft);assert.equal((await p.loadDraft()).ids[0],q.id)});
 await check('progress save does not overwrite draft',async()=>{const before=data.get(D);await p.saveProgress(await p.loadProgress());assert.equal(data.get(D),before)});
 await check('draft save does not overwrite progress',async()=>{const before=data.get(P);await p.saveDraft(draft);assert.equal(data.get(P),before)});
 await check('failed progress write preserves old bytes',async()=>{const before=data.get(P);const updated={...await p.loadProgress(),dailyGoal:40};failSet=true;await assert.rejects(()=>p.saveProgress(updated));failSet=false;assert.equal(data.get(P),before)});
 await check('failed draft write preserves old bytes',async()=>{const before=data.get(D);failSet=true;await assert.rejects(()=>p.saveDraft(draft));failSet=false;assert.equal(data.get(D),before)});
 await check('failed clear preserves both records',async()=>{const a=data.get(P),b=data.get(D);failRemove=true;await assert.rejects(()=>p.clearProgress());await assert.rejects(()=>p.clearDraft());failRemove=false;assert.equal(data.get(P),a);assert.equal(data.get(D),b)});
 await check('clear draft does not clear progress',async()=>{const before=data.get(P);await p.clearDraft();assert.equal(await p.loadDraft(),null);assert.equal(data.get(P),before)});
 await check('clear progress does not clear draft',async()=>{await p.saveDraft(draft);await p.clearProgress();assert.equal(data.get(P),undefined);assert.equal((await p.loadDraft()).ids[0],q.id)});
 console.log('Storage write runtime regression: '+n+'/'+n+' passed');
})().catch(e=>{console.error(e);process.exitCode=1});
