// Export is read-only and must reject malformed or unavailable persisted data.
const fs=require('node:fs'),path=require('node:path'),vm=require('node:vm'),assert=require('node:assert/strict');
const ts=(()=>{try{return require('typescript')}catch{const {execFileSync}=require('node:child_process');return require(path.join(execFileSync('npm',['root','-g'],{encoding:'utf8'}).trim(),'typescript'))}})();
const root=path.resolve(__dirname,'..');
function load(rel,mocks){const js=ts.transpileModule(fs.readFileSync(path.join(root,rel),'utf8'),{compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2020}}).outputText;const m={exports:{}};vm.runInNewContext('(function(require,module,exports){'+js+'\n})',{Date,Map,Set,Number,JSON,Object,Array,String,RegExp,Error,Promise,console,Blob})(id=>{if(!(id in mocks))throw Error('unexpected import '+id);return mocks[id]},m,m.exports);return m.exports;}
const questions=load('src/data/questions.ts',{}).questions;
const P='@shoku_study/progress_v1',D='@shoku_study/session_draft_v1';
function setup(progress,draft,fail=false){let writes=0;const storage={multiGet:async keys=>{if(fail)throw Error('read failure');return keys.map(k=>[k,k===P?progress:draft])},setItem:async()=>{writes++},removeItem:async()=>{writes++}};const api=load('src/lib/backup.ts',{'@react-native-async-storage/async-storage':{default:storage},'../data/questions':{questions}});return {api,writes:()=>writes};}
(async()=>{
 let n=0;
 async function reject(label,p,d,fail,pattern){const x=setup(p,d,fail);await assert.rejects(x.api.createBackup(),pattern);assert.equal(x.writes(),0);console.log('PASS '+label);n++;}
 await reject('storage read failure',null,null,true,/read failure/);
 await reject('empty storage',null,null,false,/malformed/);
 await reject('invalid progress JSON','{',null,false,/malformed/);
 await reject('invalid draft JSON',null,'{',false,/malformed/);
 await reject('invalid progress structure',JSON.stringify({answers:{x:{attempts:-1}}}),null,false,/malformed/);
 {const x=setup(JSON.stringify({answers:{},days:{},favorites:[],history:[]}),null);const backup=await x.api.createBackup();assert.equal(backup.format,'shoku-study-backup');assert.equal(backup.version,1);assert.equal(backup.draftRaw,null);assert.equal(x.writes(),0);console.log('PASS valid progress-only backup');n++;}
 console.log('Backup export read safety: '+n+'/'+n+' passed');
})().catch(e=>{console.error(e);process.exitCode=1});
