// Storage boundary regression: real saveDraft/loadDraft/clearDraft TypeScript functions.
const fs=require('node:fs'),path=require('node:path'),vm=require('node:vm'),assert=require('node:assert/strict');
const ts=(()=>{try{return require('typescript')}catch{const {execFileSync}=require('node:child_process');return require(path.join(execFileSync('npm',['root','-g'],{encoding:'utf8'}).trim(),'typescript'))}})();
const root=path.resolve(__dirname,'..');
function load(rel,mocks){const js=ts.transpileModule(fs.readFileSync(path.join(root,rel),'utf8'),{compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2020}}).outputText;const m={exports:{}};vm.runInNewContext('(function(require,module,exports){'+js+'\n})',{Date,Map,Set,Number,JSON,Object,Array,String,RegExp,Error,Promise,console})(id=>{if(!(id in mocks))throw Error('unexpected import '+id);return mocks[id]},m,m.exports);return m.exports;}
const questions=load('src/data/questions.ts',{}).questions;
const q=questions.find(q=>q.grade===3&&q.kind==='choice');assert.ok(q);
const key='@shoku_study/session_draft_v1';let data=new Map(),failRead=false,failWrite=false,failRemove=false;
const storage={getItem:async k=>{assert.equal(k,key);if(failRead)throw Error('storage read failed');return data.has(k)?data.get(k):null},setItem:async(k,v)=>{assert.equal(k,key);if(failWrite)throw Error('storage write failed');data.set(k,v)},removeItem:async k=>{assert.equal(k,key);if(failRemove)throw Error('storage remove failed');data.delete(k)}};
const api=load('src/lib/progress.ts',{'@react-native-async-storage/async-storage':{default:storage},'../data/questions':{questions}});
const draft={ids:[q.id],index:0,grade:3,mode:'practice',correct:0,answered:0,began:1794528000000,responses:[]};
(async()=>{let passed=0;
assert.equal(await api.loadDraft(),null);passed++;
await api.saveDraft(draft);assert.deepEqual(JSON.parse(data.get(key)),draft);passed++;
assert.equal((await api.loadDraft()).ids[0],q.id);passed++;
failWrite=true;await assert.rejects(api.saveDraft({...draft,began:1794528000001}),/storage write failed/);assert.equal(JSON.parse(data.get(key)).began,draft.began);failWrite=false;passed++;
failRead=true;await assert.rejects(api.loadDraft(),/storage read failed/);failRead=false;assert.equal((await api.loadDraft()).began,draft.began);passed++;
failRemove=true;await assert.rejects(api.clearDraft(),/storage remove failed/);failRemove=false;assert.ok(data.has(key));passed++;
await api.clearDraft();assert.equal(await api.loadDraft(),null);passed++;
// Invalid JSON must be rejected without erasing evidence of the damaged record.
data.set(key,'{invalid');await assert.rejects(api.loadDraft(),/Invalid saved session draft/);assert.equal(data.get(key),'{invalid');passed++;
console.log(`Draft storage roundtrip: ${passed}/${passed} passed`);
})().catch(e=>{console.error(e);process.exitCode=1});
