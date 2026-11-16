// Execute real TypeScript storage loaders with an in-memory AsyncStorage mock.
const fs=require('fs'),path=require('path'),vm=require('vm'),assert=require('assert');
const ts=(()=>{try{return require('typescript')}catch{const {execFileSync}=require('child_process');return require(path.join(execFileSync('npm',['root','-g'],{encoding:'utf8'}).trim(),'typescript'));}})();
const root=path.resolve(__dirname,'..');
function load(rel,mocks){const js=ts.transpileModule(fs.readFileSync(path.join(root,rel),'utf8'),{compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2020}}).outputText;const module={exports:{}};vm.runInNewContext('(function(require,module,exports){'+js+'\n})',{Date,Map,Set,Number,JSON,Object,Array,String,RegExp,Error,Promise,console})(id=>{if(!(id in mocks))throw Error('unexpected import '+id);return mocks[id]},module,module.exports);return module.exports;}
const questions=load('src/data/questions.ts',{}).questions;
const values=new Map();let writes=0;
const storage={getItem:async k=>values.has(k)?values.get(k):null,setItem:async(k,v)=>{writes++;values.set(k,v)},removeItem:async k=>{writes++;values.delete(k)}};
const p=load('src/lib/progress.ts',{'@react-native-async-storage/async-storage':{default:storage},'../data/questions':{questions}});
const P='@shoku_study/progress_v1',D='@shoku_study/session_draft_v1';
const q=questions.find(q=>q.kind==='choice'),other=questions.find(x=>x.grade!==q.grade);
const at='2026-11-13T00:00:00.000Z';
const history=(id,grade=q.grade)=>({id:'h',at,grade,mode:'practice',total:1,correct:1,seconds:10,answers:[{id,selected:q.answer,correct:true}]});
const draft={ids:[q.id],index:0,grade:q.grade,mode:'practice',correct:0,answered:0,began:1794528000000,responses:[]};
let n=0;
async function pass(label,fn){await fn();n++;}
async function rejectsWithoutWrite(key,value,fn){values.set(key,JSON.stringify(value));const before=values.get(key),count=writes;await assert.rejects(fn);assert.strictEqual(values.get(key),before);assert.strictEqual(writes,count);}
(async()=>{
 await pass('fresh progress',async()=>{values.clear();const x=await p.loadProgress();assert.strictEqual(x.dailyGoal,10)});
 await pass('legacy missing fields',async()=>{values.set(P,'{}');const x=await p.loadProgress();assert.strictEqual(x.dailyGoal,10);assert.strictEqual(x.history.length,0)});
 await pass('retired history',async()=>{values.set(P,JSON.stringify({history:[history('RETIRED-OLD-ID')]}));assert.strictEqual((await p.loadProgress()).history.length,1)});
 await pass('bad history grade',()=>rejectsWithoutWrite(P,{history:[history(q.id,other.grade)]},()=>p.loadProgress()));
 await pass('bad history score',()=>rejectsWithoutWrite(P,{history:[{...history(q.id),correct:0}]},()=>p.loadProgress()));
 await pass('invalid JSON',async()=>{values.set(P,'{bad');const before=writes;await assert.rejects(()=>p.loadProgress());assert.strictEqual(values.get(P),'{bad');assert.strictEqual(writes,before)});
 await pass('valid draft',async()=>{values.set(D,JSON.stringify(draft));assert.strictEqual((await p.loadDraft()).ids[0],q.id)});
 await pass('wrong draft grade',()=>rejectsWithoutWrite(D,{...draft,grade:other.grade},()=>p.loadDraft()));
 await pass('bad draft selection',()=>rejectsWithoutWrite(D,{...draft,answered:1,correct:1,responses:[{id:q.id,selected:q.options.length,correct:true}]},()=>p.loadDraft()));
 await pass('draft answer order',()=>{const q2=questions.find(x=>x.grade===q.grade&&x.id!==q.id);return rejectsWithoutWrite(D,{...draft,ids:[q.id,q2.id],index:1,answered:1,correct:0,responses:[{id:q2.id,selected:null,correct:false}]},()=>p.loadDraft())});
 console.log('Storage runtime regression: '+n+'/'+n+' passed');
})().catch(e=>{console.error(e);process.exitCode=1});
