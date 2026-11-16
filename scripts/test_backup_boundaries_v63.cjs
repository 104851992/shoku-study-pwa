// Execute the real TypeScript backup validator against malformed and boundary payloads.
const fs=require('fs'),path=require('path'),vm=require('vm'),assert=require('assert');
const ts=(()=>{try{return require('typescript')}catch{const {execFileSync}=require('child_process');return require(path.join(execFileSync('npm',['root','-g'],{encoding:'utf8'}).trim(),'typescript'))}})();
function load(rel,mocks){const js=ts.transpileModule(fs.readFileSync(path.join(__dirname,'..',rel),'utf8'),{compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2020}}).outputText;const mod={exports:{}};vm.runInNewContext('(function(require,module,exports){'+js+'\n})',{Date,Map,Set,Number,JSON,Object,Array,String,RegExp,Error,Promise,console})(id=>{if(!(id in mocks))throw Error('unexpected import '+id);return mocks[id]},mod,mod.exports);return mod.exports}
const questions=load('src/data/questions.ts',{}).questions;
const {validateBackupEnvelope}=load('src/lib/backup.ts',{'@react-native-async-storage/async-storage':{default:{}},'../data/questions':{questions}});
const date='2026-11-13T00:00:00.000Z';
const env=(progress)=>({format:'shoku-study-backup',version:1,exportedAt:date,progressRaw:JSON.stringify(progress),draftRaw:null});
const q=questions.find(x=>x.kind==='choice');
const hist=(id=q.id)=>({id:'h',at:date,grade:q.grade,mode:'practice',total:1,correct:0,seconds:0,answers:[{id,selected:0,correct:false}]});
const cases=[
 ['retired question history remains exportable',env({history:[hist('RETIRED-OLD-ID')]}),true],
 ['unknown grade is rejected',env({history:[{...hist(),grade:4}]}),false],
 ['negative daily attempts rejected',env({answers:{[q.id]:{attempts:-1,correct:0,lastCorrect:false,lastAt:''}}}),false],
 ['daily correct greater than answered rejected',env({days:{'2026-11-13':{answered:1,correct:2,seconds:0}}}),false],
 ['invalid leap date rejected',env({days:{'2026-02-29':{answered:1,correct:1,seconds:0}}}),false],
 ['valid leap date accepted',env({days:{'2024-02-29':{answered:1,correct:1,seconds:0}}}),true],
 ['fractional attempts rejected',env({answers:{[q.id]:{attempts:1.5,correct:0,lastCorrect:false,lastAt:''}}}),false],
 ['invalid lastAt rejected',env({answers:{[q.id]:{attempts:1,correct:0,lastCorrect:false,lastAt:'yesterday'}}}),false],
 ['empty favorites allowed',env({favorites:[]}),true],
 ['duplicate favorites preserved for legacy compatibility',env({favorites:[q.id,q.id]}),true],
];
for(const [name,input,expected] of cases)assert.strictEqual(validateBackupEnvelope(input),expected,name);
console.log('Backup boundary runtime: '+cases.length+'/'+cases.length+' passed');
