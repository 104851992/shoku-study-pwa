// Execute production createBackup with an in-memory storage mock; no user data is touched.
const fs=require('fs'),path=require('path'),vm=require('vm'),assert=require('assert');
const ts=(()=>{try{return require('typescript')}catch{const {execFileSync}=require('child_process');return require(path.join(execFileSync('npm',['root','-g'],{encoding:'utf8'}).trim(),'typescript'));}})();
const root=path.resolve(__dirname,'..');
function load(rel,mocks){const js=ts.transpileModule(fs.readFileSync(path.join(root,rel),'utf8'),{compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2020}}).outputText;const module={exports:{}};vm.runInNewContext('(function(require,module,exports){'+js+'\n})',{Date,Map,Set,Number,JSON,Object,Array,String,RegExp,Error,Promise,console})(id=>{if(!(id in mocks))throw Error('unexpected import '+id);return mocks[id]},module,module.exports);return module.exports;}
const questions=load('src/data/questions.ts',{}).questions;
const P='@shoku_study/progress_v1',D='@shoku_study/session_draft_v1';
const q=questions.find(x=>x.kind==='choice');
const validProgress=JSON.stringify({history:[{id:'exam',at:'2026-11-13T00:00:00.000Z',grade:q.grade,mode:'practice',total:1,correct:1,seconds:1,answers:[{id:q.id,selected:q.answer,correct:true}]}]});
const draft=JSON.stringify({ids:[q.id],index:0,grade:q.grade,mode:'practice',correct:0,answered:0,began:1794528000000,responses:[]});
const values=new Map();let reads=0,writes=0,failRead=false;
const storage={multiGet:async keys=>{reads++;if(failRead)throw Error('storage read failed');return keys.map(k=>[k,values.get(k)??null]);},setItem:async()=>{writes++},removeItem:async()=>{writes++}};
const {createBackup,validateBackupEnvelope}=load('src/lib/backup.ts',{'@react-native-async-storage/async-storage':{default:storage},'../data/questions':{questions}});
let n=0;async function check(label,fn){await fn();n++;}
(async()=>{
 await check('progress-only export',async()=>{values.clear();values.set(P,validProgress);const b=await createBackup();assert.strictEqual(b.progressRaw,validProgress);assert.strictEqual(b.draftRaw,null);assert.strictEqual(validateBackupEnvelope(b),true)});
 await check('draft-only export',async()=>{values.clear();values.set(D,draft);const b=await createBackup();assert.strictEqual(b.draftRaw,draft);assert.strictEqual(b.progressRaw,null)});
 await check('combined export preserves raw bytes',async()=>{values.set(P,validProgress);const b=await createBackup();assert.strictEqual(b.progressRaw,validProgress);assert.strictEqual(b.draftRaw,draft)});
 await check('empty storage refuses export',async()=>{values.clear();await assert.rejects(()=>createBackup(),/malformed/)});
 await check('malformed progress refuses export',async()=>{values.set(P,'{broken');await assert.rejects(()=>createBackup(),/malformed/)});
 await check('malformed draft refuses export',async()=>{values.set(P,validProgress);values.set(D,'{broken');await assert.rejects(()=>createBackup(),/malformed/)});
 await check('storage read failure propagates',async()=>{failRead=true;await assert.rejects(()=>createBackup(),/storage read failed/);failRead=false});
 assert.strictEqual(writes,0,'export must never write or delete storage');assert.strictEqual(reads,7);console.log('Backup export runtime regression: '+n+'/'+n+' passed; 0 storage writes');
})().catch(e=>{console.error(e);process.exitCode=1});
