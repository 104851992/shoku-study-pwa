// Ensure nested exam history corruption cannot silently replace persisted study data.
const fs=require('node:fs'),path=require('node:path'),vm=require('node:vm'),assert=require('node:assert/strict');
const ts=(()=>{try{return require('typescript')}catch{const {execFileSync}=require('node:child_process');return require(path.join(execFileSync('npm',['root','-g'],{encoding:'utf8'}).trim(),'typescript'))}})();
const root=path.resolve(__dirname,'..');
function load(rel,mocks){const js=ts.transpileModule(fs.readFileSync(path.join(root,rel),'utf8'),{compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2020}}).outputText;const m={exports:{}};vm.runInNewContext('(function(require,module,exports){'+js+'\n})',{Date,Map,Set,Number,JSON,Object,Array,String,RegExp,Error,Promise,console})(id=>{if(!(id in mocks))throw Error('unexpected import '+id);return mocks[id]},m,m.exports);return m.exports;}
const questions=load('src/data/questions.ts',{}).questions;
const q=questions.find(x=>x.kind==='choice');assert(q);
const KEY='@shoku_study/progress_v1';let raw=null,writes=0;
const storage={getItem:async k=>{assert.equal(k,KEY);return raw},setItem:async()=>{writes++},removeItem:async()=>{writes++}};
const api=load('src/lib/progress.ts',{'@react-native-async-storage/async-storage':{default:storage},'../data/questions':{questions}});
const answer={id:q.id,selected:q.answer,correct:true};
const history={id:'exam-1',at:'2026-11-15T12:00:00.000Z',grade:q.grade,mode:'practice',total:1,correct:1,seconds:30,answers:[answer]};
const tests=[
 ['duplicate response IDs',{...history,total:2,correct:2,answers:[answer,answer]}],
 ['correct count mismatch',{...history,correct:0}],
 ['invalid answer index',{...history,answers:[{...answer,selected:q.options.length}]}],
 ['invalid answer truth',{...history,answers:[{...answer,correct:false}]}],
 ['invalid exam timestamp',{...history,at:'2026-02-30T12:00:00.000Z'}],
 ['wrong grade',{...history,grade:q.grade===1?2:1}],
 ['negative duration',{...history,seconds:-1}],
 ['invalid answer row',{...history,answers:[null]}],
 ['missing history fields',{id:'exam-1'}]
];
(async()=>{let count=0;for(const [name,h] of tests){raw=JSON.stringify({history:[h]});const before=writes;await assert.rejects(api.loadProgress(),/Invalid exam history/,name);assert.equal(writes,before,name);count++;console.log('PASS '+name)}raw=JSON.stringify({history:[history]});const p=await api.loadProgress();assert.equal(p.history.length,1);assert.equal(p.history[0].answers[0].id,q.id);count++;console.log('PASS valid exam history');console.log(`Progress history integrity: ${count}/${count} passed`);})().catch(e=>{console.error(e);process.exitCode=1});
