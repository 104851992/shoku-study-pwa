// Fault injection for production Web backup download resource cleanup.
const assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path'),vm=require('node:vm');
const ts=(()=>{try{return require('typescript')}catch{const {execFileSync}=require('node:child_process');return require(path.join(execFileSync('npm',['root','-g'],{encoding:'utf8'}).trim(),'typescript'))}})();
const root=path.resolve(__dirname,'..');
function load(rel,mocks,globals={}){const js=ts.transpileModule(fs.readFileSync(path.join(root,rel),'utf8'),{compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2020}}).outputText;const m={exports:{}};vm.runInNewContext('(function(require,module,exports){'+js+'\n})',{Date,Map,Set,Number,JSON,Object,Array,String,RegExp,Error,Promise,console,...globals})(id=>{if(!(id in mocks))throw Error('Unexpected import '+id);return mocks[id]},m,m.exports);return m.exports;}
const questions=load('src/data/questions.ts',{}).questions;
const valid={format:'shoku-study-backup',version:1,exportedAt:'2026-11-15T00:00:00.000Z',progressRaw:JSON.stringify({dailyGoal:8}),draftRaw:null};
function scenario(failure){const events=[];class BlobMock{constructor(parts){this.size=Buffer.byteLength(parts.join(''));}}
const URL={createObjectURL(){events.push('create');return 'blob:test'},revokeObjectURL(){events.push('revoke')}};
const document={body:{appendChild(){events.push('append');if(failure==='append')throw Error('append failure')}},createElement(){events.push('element');return {click(){events.push('click');if(failure==='click')throw Error('click failure')},remove(){events.push('remove')}}}};
const api=load('src/lib/backup.ts',{'@react-native-async-storage/async-storage':{default:{}},'../data/questions':{questions}},{URL,document,Blob:BlobMock,setTimeout:fn=>{events.push('timer');fn()}});return {api,events};}
let count=0;
for(const failure of ['click','append']){const {api,events}=scenario(failure);assert.throws(()=>api.downloadBackupOnWeb(valid),new RegExp(failure+' failure'));assert.equal(events.filter(x=>x==='revoke').length,1,'object URL must be released after '+failure+' failure');if(failure==='click')assert.ok(events.includes('remove'),'anchor must be removed after failed click');console.log('PASS '+failure+' failure releases object URL');count++;}
const {api,events}=scenario('none');api.downloadBackupOnWeb(valid);assert.ok(events.includes('remove')&&events.includes('revoke'));console.log('PASS successful download cleanup remains intact');count++;
console.log('Backup download fault regression: '+count+'/'+count+' passed');
