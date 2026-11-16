// Regression: special legacy question IDs must not mutate object prototypes or be lost.
const fs=require('node:fs'),path=require('node:path'),vm=require('node:vm'),assert=require('node:assert/strict');
const ts=(()=>{try{return require('typescript')}catch{const {execFileSync}=require('node:child_process');return require(path.join(execFileSync('npm',['root','-g'],{encoding:'utf8'}).trim(),'typescript'))}})();
const root=path.resolve(__dirname,'..');
function load(rel,mocks){const js=ts.transpileModule(fs.readFileSync(path.join(root,rel),'utf8'),{compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2020}}).outputText;const m={exports:{}};vm.runInNewContext('(function(require,module,exports){'+js+'\n})',{Date,Map,Set,Number,JSON,Object,Array,String,RegExp,Error,Promise,console})(id=>{if(!(id in mocks))throw Error('unexpected import '+id);return mocks[id]},m,m.exports);return m.exports}
const questions=load('src/data/questions.ts',{}).questions;
let raw=null,saved=null,writes=0;
const storage={getItem:async()=>raw,setItem:async(k,v)=>{saved=v;writes++},removeItem:async()=>{writes++}};
const api=load('src/lib/progress.ts',{'@react-native-async-storage/async-storage':{default:storage},'../data/questions':{questions}});
const rec={attempts:2,correct:1,lastCorrect:false,lastAt:''};
const base={firstDate:'2026-11-15',dailyGoal:10,answers:JSON.parse('{"__proto__":{"attempts":2,"correct":1,"lastCorrect":false,"lastAt":""},"constructor":{"attempts":2,"correct":1,"lastCorrect":false,"lastAt":""},"toString":{"attempts":2,"correct":1,"lastCorrect":false,"lastAt":""}}'),days:{},favorites:[],history:[]};
(async()=>{
 raw=JSON.stringify(base);let p=await api.loadProgress();assert.equal(Object.getPrototypeOf(p.answers),null);assert.deepEqual(Object.keys(p.answers).sort(),['__proto__','constructor','toString'].sort());console.log('PASS special IDs preserved with null prototype');
 assert.equal(({}).polluted,undefined);assert.equal(Object.prototype.attempts,undefined);console.log('PASS no prototype pollution');
 await api.saveProgress(p);assert.equal(writes,1);const decoded=JSON.parse(saved);assert.deepEqual(Object.keys(decoded.answers).sort(),['__proto__','constructor','toString'].sort());console.log('PASS JSON roundtrip preserves special IDs');
 raw=saved;p=await api.loadProgress();assert.equal(p.answers['__proto__'].attempts,2);console.log('PASS reloading roundtrip');
 raw=JSON.stringify({answers:{},days:{}});p=await api.loadProgress();assert.equal(p.dailyGoal,10);assert.equal(p.favorites.length,0);assert.equal(p.history.length,0);console.log('PASS legacy missing optional fields');
 raw=JSON.stringify({...base,answers:{a:{attempts:1,correct:1,lastCorrect:true,lastAt:''}},favorites:['a','a']});p=await api.loadProgress();assert.equal(JSON.stringify(p.favorites),'["a"]');console.log('PASS duplicate favorites normalized');
 console.log('Progress special ID regression: 6/6 passed');
})().catch(e=>{console.error(e);process.exitCode=1});
