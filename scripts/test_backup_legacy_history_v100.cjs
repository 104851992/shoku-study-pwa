// Compatibility regression: retired question IDs in history are retained, not discarded.
const fs=require('node:fs'),path=require('node:path'),vm=require('node:vm'),assert=require('node:assert/strict');
const ts=(()=>{try{return require('typescript')}catch{const {execFileSync}=require('node:child_process');return require(path.join(execFileSync('npm',['root','-g'],{encoding:'utf8'}).trim(),'typescript'))}})();
const root=path.resolve(__dirname,'..');
function load(rel,mocks){const js=ts.transpileModule(fs.readFileSync(path.join(root,rel),'utf8'),{compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2020}}).outputText;const m={exports:{}};vm.runInNewContext('(function(require,module,exports){'+js+'\n})',{Date,Map,Set,Number,JSON,Object,Array,String,RegExp,Error,Promise,console})(id=>{if(!(id in mocks))throw Error('unexpected import '+id);return mocks[id]},m,m.exports);return m.exports}
const questions=load('src/data/questions.ts',{}).questions;
const known=questions.find(q=>q.kind==='choice'&&q.grade===3);assert(known);
const old='retired-question-id-not-in-current-bank';assert(!questions.some(q=>q.id===old));
let reads=0,writes=0;const storage={multiGet:async()=>{reads++;return []},setItem:async()=>{writes++},removeItem:async()=>{writes++}};
const api=load('src/lib/backup.ts',{'@react-native-async-storage/async-storage':{default:storage},'../data/questions':{questions}});
const at='2026-11-15T00:00:00.000Z';
const envelope=progress=>({format:'shoku-study-backup',version:1,exportedAt:at,progressRaw:JSON.stringify(progress),draftRaw:null});
const entry=(id,selected,correct)=>({id,selected,correct});
const history=answers=>({id:'historical-session',at,grade:3,mode:'practice',total:answers.length,correct:answers.filter(a=>a.correct).length,seconds:30,answers});
const cases=[
 ['retired correct choice accepted',envelope({history:[history([entry(old,0,true)])]}),true],
 ['retired unanswered choice accepted',envelope({history:[history([entry(old,null,false)])]}),true],
 ['retired malformed selection rejected',envelope({history:[history([entry(old,-1,false)])]}),false],
 ['retired duplicate history IDs rejected',envelope({history:[history([entry(old,0,true),entry(old,1,false)])]}),false],
 ['known choice incorrect truth rejected',envelope({history:[history([entry(known.id,known.answer,false)])]}),false],
 ['known choice correct truth accepted',envelope({history:[history([entry(known.id,known.answer,true)])]}),true]
];
(async()=>{for(const [name,payload,expected] of cases){assert.equal(api.validateBackupEnvelope(payload),expected,name);if(!expected){await assert.rejects(api.restoreBackupAfterConfirmation(payload),/Invalid backup/,name);assert.equal(reads,0,name);assert.equal(writes,0,name)}console.log('PASS '+name)}console.log('Legacy history compatibility: '+cases.length+'/'+cases.length+' passed')})().catch(e=>{console.error(e);process.exitCode=1});
