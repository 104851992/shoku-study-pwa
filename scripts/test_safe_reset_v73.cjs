const fs=require('fs'),path=require('path'),vm=require('vm'),assert=require('assert');
const ts=(()=>{try{return require('typescript')}catch{const {execFileSync}=require('child_process');return require(path.join(execFileSync('npm',['root','-g'],{encoding:'utf8'}).trim(),'typescript'));}})();
const base=path.join(__dirname,'..');
function load(rel,mocks){const js=ts.transpileModule(fs.readFileSync(path.join(base,rel),'utf8'),{compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2020}}).outputText;const m={exports:{}};vm.runInNewContext('(function(require,module,exports){'+js+'\n})',{Date,Map,Set,Number,JSON,Object,Array,String,RegExp,Error,Promise,console})(id=>mocks[id],m,m.exports);return m.exports;}
const questions=load('src/data/questions.ts',{}).questions;
const P='@shoku_study/progress_v1',D='@shoku_study/session_draft_v1';
const data=new Map();let failDelete=null,silentDelete=null,failRollback=false;
const storage={multiGet:async keys=>keys.map(k=>[k,data.get(k)??null]),setItem:async(k,v)=>{if(failRollback)throw Error('rollback failed');data.set(k,v)},removeItem:async k=>{if(k===failDelete)throw Error('delete failed');if(k!==silentDelete)data.delete(k)}};
const b=load('src/lib/backup.ts',{'@react-native-async-storage/async-storage':{default:storage},'../data/questions':{questions}});
function seed(){data.clear();data.set(P,'{"dailyGoal":10}');data.set(D,'{"ids":[]}');failDelete=null;silentDelete=null;failRollback=false;}
(async()=>{let n=0;const check=async(name,fn)=>{seed();await fn();n++;console.log('PASS '+name)};
await check('both keys deleted',async()=>{await b.clearAllLearningDataSafely();assert.equal(data.size,0)});
await check('second key failure restores both',async()=>{failDelete=D;await assert.rejects(()=>b.clearAllLearningDataSafely());assert.equal(data.get(P),'{"dailyGoal":10}');assert.equal(data.get(D),'{"ids":[]}')});
await check('silent failure detected and rolled back',async()=>{silentDelete=D;await assert.rejects(()=>b.clearAllLearningDataSafely());assert.equal(data.get(P),'{"dailyGoal":10}');assert.equal(data.get(D),'{"ids":[]}')});
await check('rollback failure explicitly reported',async()=>{failDelete=D;failRollback=true;await assert.rejects(()=>b.clearAllLearningDataSafely(),/rollback could not be verified/)});
console.log('Safe reset regression: '+n+'/'+n+' passed');})().catch(e=>{console.error(e);process.exitCode=1});
