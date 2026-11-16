// Regression: valid partially answered drafts resume, malformed ones remain untouched.
const fs=require('node:fs'),path=require('node:path'),vm=require('node:vm'),assert=require('node:assert/strict');
const ts=(()=>{try{return require('typescript')}catch{const {execFileSync}=require('node:child_process');return require(path.join(execFileSync('npm',['root','-g'],{encoding:'utf8'}).trim(),'typescript'))}})();
const root=path.resolve(__dirname,'..');
function load(rel,mocks){const js=ts.transpileModule(fs.readFileSync(path.join(root,rel),'utf8'),{compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2020}}).outputText;const m={exports:{}};vm.runInNewContext('(function(require,module,exports){'+js+'\n})',{Date,Map,Set,Number,JSON,Object,Array,String,RegExp,Error,Promise,console})(id=>{if(!(id in mocks))throw Error('unexpected import '+id);return mocks[id]},m,m.exports);return m.exports;}
const questions=load('src/data/questions.ts',{}).questions;
const pair=questions.filter(q=>q.kind==='choice'&&q.grade===3).slice(0,2);assert.equal(pair.length,2);
const [a,b]=pair,KEY='@shoku_study/session_draft_v1';let raw=null,writes=0;
const storage={getItem:async k=>{assert.equal(k,KEY);return raw},setItem:async()=>{writes++},removeItem:async()=>{writes++}};
const api=load('src/lib/progress.ts',{'@react-native-async-storage/async-storage':{default:storage},'../data/questions':{questions}});
const answer={id:a.id,selected:a.answer,correct:true};
const base={ids:[a.id,b.id],index:1,grade:3,mode:'practice',correct:1,answered:1,began:1794528000000,responses:[answer]};
const cases=[
 ['response from later question',{...base,responses:[{...answer,id:b.id}]}],
 ['response out of sequence',{...base,responses:[{...answer,id:b.id},answer],answered:2,correct:2}],
 ['response index exceeds options',{...base,responses:[{...answer,selected:a.options.length}]}],
 ['response marked incorrect for correct selection',{...base,responses:[{...answer,correct:false}],correct:0}],
 ['wrong grade',{...base,grade:2}],
 ['negative began',{...base,began:-1}],
 ['noninteger began',{...base,began:1.5}],
 ['answered beyond question count',{...base,answered:3}],
 ['duplicate responses',{...base,answered:2,correct:2,responses:[answer,answer]}],
 ['index not aligned to answered',{...base,index:1,answered:0,responses:[],correct:0}]
];
(async()=>{let passed=0;for(const [label,value] of cases){raw=JSON.stringify(value);const before=writes;await assert.rejects(api.loadDraft(),/Invalid saved session draft/,label);assert.equal(writes,before,label);passed++;}for(const [label,value] of [['valid partially answered',base],['valid not started',{...base,index:0,correct:0,answered:0,responses:[]}],['valid answered awaiting advance',{...base,index:0}]]){raw=JSON.stringify(value);const p=await api.loadDraft();assert.equal(p.answered,value.answered,label);passed++;}raw=null;assert.equal(await api.loadDraft(),null);passed++;console.log(`Draft resume boundaries: ${passed}/${passed} passed`);})().catch(e=>{console.error(e);process.exitCode=1});
