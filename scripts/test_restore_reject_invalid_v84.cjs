// Reject malformed backup envelopes before any AsyncStorage access or mutation.
const fs=require('fs'),path=require('path'),vm=require('vm'),assert=require('assert');
const ts=(()=>{try{return require('typescript')}catch{const {execFileSync}=require('child_process');return require(path.join(execFileSync('npm',['root','-g'],{encoding:'utf8'}).trim(),'typescript'))}})();
const root=path.resolve(__dirname,'..');
function load(rel,mocks){const js=ts.transpileModule(fs.readFileSync(path.join(root,rel),'utf8'),{compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2020}}).outputText;const m={exports:{}};vm.runInNewContext('(function(require,module,exports){'+js+'\n})',{Date,Map,Set,Number,JSON,Object,Array,String,RegExp,Error,Promise,console})(id=>{if(!(id in mocks))throw Error('unexpected import '+id);return mocks[id]},m,m.exports);return m.exports}
const questions=load('src/data/questions.ts',{}).questions;
const base={format:'shoku-study-backup',version:1,exportedAt:'2026-11-14T00:00:00.000Z',progressRaw:JSON.stringify({favorites:[questions[0].id]}),draftRaw:null};
const bad=[
 ['invalid version',{...base,version:2}],
 ['invalid timestamp',{...base,exportedAt:'2026-02-30T00:00:00.000Z'}],
 ['empty records',{...base,progressRaw:null}],
 ['malformed json',{...base,progressRaw:'{'}],
 ['negative goal',{...base,progressRaw:'{"dailyGoal":-1}'}],
 ['invalid favorite',{...base,progressRaw:'{"favorites":[42]}'}],
 ['invalid draft',{...base,draftRaw:'{"ids":[]}'}],
 ['non-object progress',{...base,progressRaw:'[]'}],
];
(async()=>{for(const [label,data] of bad){let calls=0;const storage={multiGet:async()=>{calls++;throw Error('must not read storage')},setItem:async()=>{calls++;},removeItem:async()=>{calls++;}};const api=load('src/lib/backup.ts',{'@react-native-async-storage/async-storage':{default:storage},'../data/questions':{questions}});assert.strictEqual(api.validateBackupEnvelope(data),false,label);await assert.rejects(api.restoreBackupAfterConfirmation(data),/Invalid backup/,label);assert.strictEqual(calls,0,label+' accessed storage');}console.log('Invalid restore preflight: '+bad.length+'/'+bad.length+' passed')})().catch(e=>{console.error(e);process.exitCode=1});
