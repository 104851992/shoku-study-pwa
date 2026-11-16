// Regression for actual progress persistence functions, including legacy records.
const fs=require('node:fs'),path=require('node:path'),vm=require('node:vm'),assert=require('node:assert/strict');
const ts=(()=>{try{return require('typescript')}catch{const {execFileSync}=require('node:child_process');return require(path.join(execFileSync('npm',['root','-g'],{encoding:'utf8'}).trim(),'typescript'))}})();
const root=path.resolve(__dirname,'..');
function load(rel,mocks){const js=ts.transpileModule(fs.readFileSync(path.join(root,rel),'utf8'),{compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2020}}).outputText;const m={exports:{}};vm.runInNewContext('(function(require,module,exports){'+js+'\n})',{Date,Map,Set,Number,JSON,Object,Array,String,RegExp,Error,Promise,console})(id=>{if(!(id in mocks))throw Error('unexpected import '+id);return mocks[id]},m,m.exports);return m.exports;}
const questions=load('src/data/questions.ts',{}).questions;
const key='@shoku_study/progress_v1';const data=new Map();let failRead=false,failWrite=false,failRemove=false;
const storage={getItem:async k=>{assert.equal(k,key);if(failRead)throw Error('read failure');return data.has(k)?data.get(k):null},setItem:async(k,v)=>{assert.equal(k,key);if(failWrite)throw Error('write failure');data.set(k,v)},removeItem:async k=>{assert.equal(k,key);if(failRemove)throw Error('remove failure');data.delete(k)}};
const api=load('src/lib/progress.ts',{'@react-native-async-storage/async-storage':{default:storage},'../data/questions':{questions}});
(async()=>{let n=0;let p=await api.loadProgress();assert.equal(p.dailyGoal,10);n++;
p.dailyGoal=12;p.answers['legacy-question']={attempts:2,correct:1,lastCorrect:false,lastAt:''};p.favorites=['legacy-question'];await api.saveProgress(p);assert.equal(JSON.parse(data.get(key)).dailyGoal,12);n++;
let loaded=await api.loadProgress();assert.equal(loaded.answers['legacy-question'].attempts,2);assert.equal(loaded.favorites[0],'legacy-question');n++;
failWrite=true;await assert.rejects(api.saveProgress({...p,dailyGoal:15}),/write failure/);failWrite=false;assert.equal(JSON.parse(data.get(key)).dailyGoal,12);n++;
failRead=true;await assert.rejects(api.loadProgress(),/read failure/);failRead=false;assert.equal((await api.loadProgress()).dailyGoal,12);n++;
failRemove=true;await assert.rejects(api.clearProgress(),/remove failure/);failRemove=false;assert.ok(data.has(key));n++;
data.set(key,'{broken');await assert.rejects(api.loadProgress(),/Invalid saved progress JSON/);assert.equal(data.get(key),'{broken');n++;
data.set(key,JSON.stringify({answers:{},days:{},favorites:[],history:[]}));loaded=await api.loadProgress();assert.equal(loaded.dailyGoal,10);n++;
await api.clearProgress();assert.equal((await api.loadProgress()).dailyGoal,10);assert.equal(data.has(key),false);n++;
console.log(`Progress storage roundtrip: ${n}/${n} passed`);
})().catch(e=>{console.error(e);process.exitCode=1});
