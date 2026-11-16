// Exercise the production TypeScript progress loader with corrupted persisted data.
const fs=require('node:fs'),path=require('node:path'),vm=require('node:vm'),assert=require('node:assert/strict');
const ts=(()=>{try{return require('typescript')}catch{const {execFileSync}=require('node:child_process');return require(path.join(execFileSync('npm',['root','-g'],{encoding:'utf8'}).trim(),'typescript'))}})();
const root=path.resolve(__dirname,'..');
function load(rel,mocks){const js=ts.transpileModule(fs.readFileSync(path.join(root,rel),'utf8'),{compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2020}}).outputText;const m={exports:{}};vm.runInNewContext('(function(require,module,exports){'+js+'\n})',{Date,Map,Set,Number,JSON,Object,Array,String,RegExp,Error,Promise,console})(id=>{if(!(id in mocks))throw Error('unexpected import '+id);return mocks[id]},m,m.exports);return m.exports}
const questions=load('src/data/questions.ts',{}).questions;
const KEY='@shoku_study/progress_v1';let raw=null,writes=0,failRead=false;
const storage={getItem:async k=>{assert.equal(k,KEY);if(failRead)throw Error('storage read failed');return raw},setItem:async()=>{writes++},removeItem:async()=>{writes++}};
const api=load('src/lib/progress.ts',{'@react-native-async-storage/async-storage':{default:storage},'../data/questions':{questions}});
const base={firstDate:'2026-11-15',dailyGoal:10,answers:{},days:{},favorites:[],history:[]};
const invalid=[
 ['malformed JSON','{oops'],['null','null'],['array','[]'],
 ['bad answer collection',JSON.stringify({...base,answers:[]})],
 ['bad answer counters',JSON.stringify({...base,answers:{q:{attempts:1,correct:2,lastCorrect:true,lastAt:''}}})],
 ['invalid daily date',JSON.stringify({...base,days:{'2026-02-30':{answered:1,correct:1,seconds:20}}})],
 ['invalid day counters',JSON.stringify({...base,days:{'2026-11-15':{answered:1,correct:2,seconds:20}}})],
 ['bad favorites',JSON.stringify({...base,favorites:['']})],
 ['invalid history envelope',JSON.stringify({...base,history:[{id:'x'}]})],
 ['invalid goal',JSON.stringify({...base,dailyGoal:0})],
 ['invalid first date',JSON.stringify({...base,firstDate:'2026-13-01'})]
];
(async()=>{for(const [name,payload] of invalid){raw=payload;const before=writes;await assert.rejects(()=>api.loadProgress(),/Invalid|invalid/,name);assert.equal(writes,before,name);assert.equal(raw,payload,name);console.log('PASS '+name)}raw=JSON.stringify(base);const p=await api.loadProgress();assert.equal(p.dailyGoal,10);assert.equal(writes,0);console.log('PASS valid progress');raw=null;assert.equal((await api.loadProgress()).dailyGoal,10);console.log('PASS absent progress');failRead=true;await assert.rejects(()=>api.loadProgress(),/storage read failed/);console.log('PASS read failure');console.log('Progress corruption guard: 14/14 passed')})().catch(e=>{console.error(e);process.exitCode=1});
