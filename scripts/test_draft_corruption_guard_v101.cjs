// Verify the actual TypeScript draft loader never silently overwrites damaged drafts.
const fs=require('node:fs'),path=require('node:path'),vm=require('node:vm'),assert=require('node:assert/strict');
const ts=(()=>{try{return require('typescript')}catch{const {execFileSync}=require('node:child_process');return require(path.join(execFileSync('npm',['root','-g'],{encoding:'utf8'}).trim(),'typescript'))}})();
const root=path.resolve(__dirname,'..');
function load(rel,mocks){const js=ts.transpileModule(fs.readFileSync(path.join(root,rel),'utf8'),{compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2020}}).outputText;const m={exports:{}};vm.runInNewContext('(function(require,module,exports){'+js+'\n})',{Date,Map,Set,Number,JSON,Object,Array,String,RegExp,Error,Promise,console})(id=>{if(!(id in mocks))throw Error('unexpected import '+id);return mocks[id]},m,m.exports);return m.exports}
const questions=load('src/data/questions.ts',{}).questions;
const q=questions.find(x=>x.kind==='choice');assert(q);
const KEY='@shoku_study/session_draft_v1';let raw=null,writes=0,reads=0,failRead=false;
const storage={getItem:async k=>{assert.equal(k,KEY);reads++;if(failRead)throw Error('storage unavailable');return raw},setItem:async()=>{writes++},removeItem:async()=>{writes++}};
const api=load('src/lib/progress.ts',{'@react-native-async-storage/async-storage':{default:storage},'../data/questions':{questions}});
const base={ids:[q.id],index:0,grade:q.grade,mode:'practice',correct:0,answered:0,began:1794528000000,responses:[]};
const tests=[
 ['malformed JSON','{broken'],
 ['null draft','null'],
 ['duplicate IDs',JSON.stringify({...base,ids:[q.id,q.id]})],
 ['impossible index',JSON.stringify({...base,index:1})],
 ['counter mismatch',JSON.stringify({...base,answered:1})],
 ['boolean counter',JSON.stringify({...base,correct:true})],
 ['invalid response truth',JSON.stringify({...base,answered:1,correct:1,responses:[{id:q.id,selected:q.answer,correct:false}]})],
 ['future unknown question',JSON.stringify({...base,ids:['missing-retired-question']})]
];
(async()=>{for(const [label,value] of tests){raw=value;const before=writes;await assert.rejects(()=>api.loadDraft(),/Invalid saved session draft/,label);assert.equal(raw,value,label);assert.equal(writes,before,label);console.log('PASS '+label)}raw=JSON.stringify(base);assert.equal((await api.loadDraft()).ids[0],q.id);console.log('PASS valid draft');failRead=true;const before=writes;await assert.rejects(()=>api.loadDraft(),/storage unavailable/);assert.equal(writes,before);console.log('PASS storage read error');console.log('Draft corruption guard: 10/10 passed')})().catch(e=>{console.error(e);process.exitCode=1});
