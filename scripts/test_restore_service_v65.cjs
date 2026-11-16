const fs=require('fs'),path=require('path'),vm=require('vm'),assert=require('assert');
const ts=(()=>{try{return require('typescript')}catch{const {execFileSync}=require('child_process');return require(path.join(execFileSync('npm',['root','-g'],{encoding:'utf8'}).trim(),'typescript'));}})();
function load(rel,mocks){const js=ts.transpileModule(fs.readFileSync(path.join(__dirname,'..',rel),'utf8'),{compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2020}}).outputText;const m={exports:{}};vm.runInNewContext('(function(require,module,exports){'+js+'\n})',{Date,Map,Set,Number,JSON,Object,Array,String,RegExp,Error,Promise,console})(id=>mocks[id],m,m.exports);return m.exports;}
const questions=load('src/data/questions.ts',{}).questions;
const P='@shoku_study/progress_v1',D='@shoku_study/session_draft_v1';
const data=new Map([[P,'{"dailyGoal":10}'],[D,'{"legacy":true}']]);let failKey=null;
const storage={multiGet:async keys=>keys.map(k=>[k,data.get(k)??null]),setItem:async(k,v)=>{if(k===failKey)throw Error('injected');data.set(k,v)},removeItem:async k=>{if(k===failKey)throw Error('injected');data.delete(k)}};
const b=load('src/lib/backup.ts',{'@react-native-async-storage/async-storage':{default:storage},'../data/questions':{questions}});
const envelope={format:'shoku-study-backup',version:1,exportedAt:'2026-11-14T00:00:00.000Z',progressRaw:'{"dailyGoal":20}',draftRaw:null};
(async()=>{
 let n=0;const check=async(name,fn)=>{await fn();n++;console.log('PASS '+name)};
 await check('invalid payload makes no writes',async()=>{await assert.rejects(()=>b.restoreBackupAfterConfirmation({...envelope,version:2}));assert.equal(data.get(P),'{"dailyGoal":10}')});
 await check('successful restore verifies both keys',async()=>{await b.restoreBackupAfterConfirmation(envelope);assert.equal(data.get(P),envelope.progressRaw);assert.equal(data.has(D),false)});
 await check('failed second write rolls back original values',async()=>{data.set(P,'{"dailyGoal":10}');data.set(D,'{"legacy":true}');failKey=D;const q=questions.find(q=>q.kind==='choice');const draft={ids:[q.id],index:0,grade:q.grade,mode:'practice',correct:0,answered:0,began:1794528000000,responses:[]};await assert.rejects(()=>b.restoreBackupAfterConfirmation({...envelope,draftRaw:JSON.stringify(draft)}));failKey=null;assert.equal(data.get(P),'{"dailyGoal":10}');assert.equal(data.get(D),'{"legacy":true}')});
 console.log('Restore service regression: '+n+'/'+n+' passed');
})().catch(e=>{console.error(e);process.exitCode=1});
