// Regression: storage read errors and damaged progress must never trigger implicit writes.
const fs=require('node:fs'),path=require('node:path'),vm=require('node:vm'),assert=require('node:assert/strict');
const ts=require('/opt/nvm/versions/node/v22.16.0/lib/node_modules/typescript');
const root=path.resolve(__dirname,'..');
function load(rel,mocks){const js=ts.transpileModule(fs.readFileSync(path.join(root,rel),'utf8'),{compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2020}}).outputText;const m={exports:{}};vm.runInNewContext('(function(require,module,exports){'+js+'\n})',{Date,Map,Set,Number,JSON,Object,Array,String,RegExp,Error,Promise,console})(id=>{if(!(id in mocks))throw Error('unexpected import '+id);return mocks[id]},m,m.exports);return m.exports;}
const questions=load('src/data/questions.ts',{}).questions;
const KEY='@shoku_study/progress_v1';
function setup(raw,fail=false){let writes=0;const store={getItem:async k=>{assert.equal(k,KEY);if(fail)throw Error('storage unavailable');return raw},setItem:async()=>{writes++},removeItem:async()=>{writes++}};return {api:load('src/lib/progress.ts',{'@react-native-async-storage/async-storage':{default:store},'../data/questions':{questions}}),writes:()=>writes};}
(async()=>{let count=0;async function bad(label,raw,pattern,fail=false){const x=setup(raw,fail);await assert.rejects(x.api.loadProgress(),pattern);assert.equal(x.writes(),0);console.log('PASS '+label);count++;}
await bad('storage unavailable',null,/storage unavailable/,true);
await bad('malformed JSON','{',/Invalid saved progress JSON/);
await bad('invalid top-level array','[]',/Invalid saved progress structure/);
await bad('invalid counters',JSON.stringify({answers:{a:{attempts:1,correct:2,lastCorrect:true,lastAt:''}}}),/Invalid answer counters/);
await bad('invalid calendar date',JSON.stringify({days:{'2026-02-30':{answered:1,correct:1,seconds:1}}}),/Invalid daily record/);
await bad('invalid favorites',JSON.stringify({favorites:[4]}),/Invalid favorites/);
await bad('invalid goal',JSON.stringify({dailyGoal:0}),/Invalid daily goal/);
{const x=setup(null);const p=await x.api.loadProgress();assert.equal(p.dailyGoal,10);assert.equal(x.writes(),0);count++;console.log('PASS empty storage');}
{const x=setup(JSON.stringify({firstDate:'2026-11-15',answers:{},days:{},favorites:['a','a'],history:[]}));const p=await x.api.loadProgress();assert.equal(p.favorites.length,1);assert.equal(p.firstDate,'2026-11-15');assert.equal(x.writes(),0);count++;console.log('PASS valid legacy progress');}
console.log('Progress read safety: '+count+'/'+count+' passed');})().catch(e=>{console.error(e);process.exitCode=1});
