const fs=require('fs'),path=require('path'),vm=require('vm'),assert=require('assert');
const ts=(()=>{try{return require('typescript')}catch{const {execFileSync}=require('child_process');return require(path.join(execFileSync('npm',['root','-g'],{encoding:'utf8'}).trim(),'typescript'));}})();
function load(rel,mocks){const js=ts.transpileModule(fs.readFileSync(path.join(__dirname,'..',rel),'utf8'),{compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2020}}).outputText;const m={exports:{}};vm.runInNewContext('(function(require,module,exports){'+js+'\n})',{Date,Map,Set,Number,JSON,Object,Array,String,RegExp,Error,Promise,console})(id=>mocks[id],m,m.exports);return m.exports;}
const questions=load('src/data/questions.ts',{}).questions;
const P='@shoku_study/progress_v1',D='@shoku_study/session_draft_v1';
const q=questions.find(q=>q.kind==='choice');
const draft=JSON.stringify({ids:[q.id],index:0,grade:q.grade,mode:'practice',correct:0,answered:0,began:1794528000000,responses:[]});
const base={format:'shoku-study-backup',version:1,exportedAt:'2026-11-14T00:00:00.000Z',progressRaw:null,draftRaw:draft};
(async()=>{let n=0;const check=async(label,fn)=>{await fn();console.log('PASS '+label);n++};
const data=new Map([[P,'{"dailyGoal":10}'],[D,'{"old":true}']]);let reads=0,writes=0,failRead=false;
const storage={multiGet:async keys=>{reads++;if(failRead)throw Error('read failed');return keys.map(k=>[k,data.get(k)??null])},setItem:async(k,v)=>{writes++;data.set(k,v)},removeItem:async k=>{writes++;data.delete(k)}};
const b=load('src/lib/backup.ts',{'@react-native-async-storage/async-storage':{default:storage},'../data/questions':{questions}});
await check('draft-only backup removes prior progress and restores draft',async()=>{await b.restoreBackupAfterConfirmation(base);assert.equal(data.has(P),false);assert.equal(data.get(D),draft)});
await check('invalid empty backup performs no writes',async()=>{const count=writes;await assert.rejects(()=>b.restoreBackupAfterConfirmation({...base,draftRaw:null}));assert.equal(writes,count)});
await check('initial read failure performs no writes',async()=>{failRead=true;const count=writes;await assert.rejects(()=>b.restoreBackupAfterConfirmation(base),/read failed/);assert.equal(writes,count);failRead=false});
await check('restoring same backup twice remains stable',async()=>{await b.restoreBackupAfterConfirmation(base);await b.restoreBackupAfterConfirmation(base);assert.equal(data.has(P),false);assert.equal(data.get(D),draft)});
console.log('Restore edge regression: '+n+'/'+n+' passed');
})().catch(e=>{console.error(e);process.exitCode=1});
