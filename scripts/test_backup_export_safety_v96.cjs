// Read-only backup export safety regression against actual TypeScript implementation.
const fs=require('node:fs'),path=require('node:path'),vm=require('node:vm'),assert=require('node:assert/strict');
const ts=(()=>{try{return require('typescript')}catch{const {execFileSync}=require('node:child_process');return require(path.join(execFileSync('npm',['root','-g'],{encoding:'utf8'}).trim(),'typescript'))}})();
const root=path.resolve(__dirname,'..');
function load(rel,mocks){const js=ts.transpileModule(fs.readFileSync(path.join(root,rel),'utf8'),{compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2020}}).outputText;const m={exports:{}};vm.runInNewContext('(function(require,module,exports){'+js+'\n})',{Date,Map,Set,Number,JSON,Object,Array,String,RegExp,Error,Promise,console})(id=>{if(!(id in mocks))throw Error('unexpected import '+id);return mocks[id]},m,m.exports);return m.exports}
const questions=load('src/data/questions.ts',{}).questions;
const P='@shoku_study/progress_v1',D='@shoku_study/session_draft_v1';
function setup(records,readFault=false){const state=new Map(records),before=JSON.stringify([...state]);let writes=0;const storage={multiGet:async keys=>{if(readFault)throw Error('storage read failed');return keys.map(k=>[k,state.get(k)??null])},setItem:async()=>{writes++},removeItem:async()=>{writes++}};return {api:load('src/lib/backup.ts',{'@react-native-async-storage/async-storage':{default:storage},'../data/questions':{questions}}),unchanged:()=>assert.equal(JSON.stringify([...state]),before),writes:()=>writes}}
(async()=>{
 {const x=setup([[P,JSON.stringify({dailyGoal:8})]]);const b=await x.api.createBackup();assert.equal(b.format,'shoku-study-backup');assert.equal(b.version,1);assert.equal(b.draftRaw,null);assert.equal(b.progressRaw,JSON.stringify({dailyGoal:8}));x.unchanged();assert.equal(x.writes(),0);console.log('PASS valid progress-only export is read-only');}
 {const x=setup([[D,JSON.stringify({ids:[questions[0].id],index:0,grade:questions[0].grade,mode:'practice',began:1700000000000,responses:[],answered:0,correct:0})]]);const b=await x.api.createBackup();assert.equal(b.progressRaw,null);assert.ok(b.draftRaw);x.unchanged();assert.equal(x.writes(),0);console.log('PASS valid draft-only export is read-only');}
 {const x=setup([]);await assert.rejects(x.api.createBackup(),/malformed/);x.unchanged();console.log('PASS empty export rejected');}
 {const x=setup([[P,'{bad json']]);await assert.rejects(x.api.createBackup(),/malformed/);x.unchanged();console.log('PASS corrupted stored JSON rejected');}
 {const x=setup([[P,JSON.stringify({dailyGoal:8})]],true);await assert.rejects(x.api.createBackup(),/storage read failed/);x.unchanged();console.log('PASS storage read failure propagated');}
 console.log('Backup export safety regression: 5/5 passed');
})().catch(e=>{console.error(e);process.exitCode=1});
