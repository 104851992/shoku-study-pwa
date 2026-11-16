// Regression: invalid restore payloads must not read or mutate existing storage.
const fs=require('node:fs'),path=require('node:path'),vm=require('node:vm'),assert=require('node:assert/strict');
const ts=(()=>{try{return require('typescript')}catch{const {execFileSync}=require('node:child_process');return require(path.join(execFileSync('npm',['root','-g'],{encoding:'utf8'}).trim(),'typescript'))}})();
const root=path.resolve(__dirname,'..');
function load(rel,mocks){const js=ts.transpileModule(fs.readFileSync(path.join(root,rel),'utf8'),{compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2020}}).outputText;const m={exports:{}};vm.runInNewContext('(function(require,module,exports){'+js+'\n})',{Date,Map,Set,Number,JSON,Object,Array,String,RegExp,Error,Promise,console})(id=>{if(!(id in mocks))throw Error('unexpected import '+id);return mocks[id]},m,m.exports);return m.exports}
const questions=load('src/data/questions.ts',{}).questions;
let reads=0,writes=0;const storage={multiGet:async()=>{reads++;return []},setItem:async()=>{writes++},removeItem:async()=>{writes++}};
const api=load('src/lib/backup.ts',{'@react-native-async-storage/async-storage':{default:storage},'../data/questions':{questions}});
const base={format:'shoku-study-backup',version:1,exportedAt:'2026-11-15T00:00:00.000Z',progressRaw:JSON.stringify({dailyGoal:8}),draftRaw:null};
const invalid=[
 ['null',null],['empty backup',{...base,progressRaw:null}],['wrong version',{...base,version:2}],
 ['invalid date',{...base,exportedAt:'2026-02-30T00:00:00.000Z'}],
 ['malformed JSON',{...base,progressRaw:'{broken'}],
 ['negative goal',{...base,progressRaw:JSON.stringify({dailyGoal:-1})}],
 ['impossible day',{...base,progressRaw:JSON.stringify({days:{'2026-02-30':{answered:1,correct:1,seconds:10}}})}],
 ['invalid answer counts',{...base,progressRaw:JSON.stringify({answers:{q1:{attempts:1,correct:2,lastCorrect:true,lastAt:''}}})}],
 ['duplicate draft IDs',{...base,draftRaw:JSON.stringify({ids:[questions[0].id,questions[0].id],index:0,grade:questions[0].grade,mode:'practice',began:1700000000000,responses:[],answered:0,correct:0})}],
 ['invalid history timestamp',{...base,progressRaw:JSON.stringify({history:[{id:'h1',at:'bad',grade:3,mode:'practice',total:0,correct:0,seconds:0,answers:[]}]})}]
];
(async()=>{for(const [name,payload] of invalid){assert.equal(api.validateBackupEnvelope(payload),false,name);await assert.rejects(api.restoreBackupAfterConfirmation(payload),/Invalid backup/,name);assert.equal(reads,0,name);assert.equal(writes,0,name);console.log('PASS '+name)}console.log('Invalid restore input regression: '+invalid.length+'/'+invalid.length+' passed')})().catch(e=>{console.error(e);process.exitCode=1});
