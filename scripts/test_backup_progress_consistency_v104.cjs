// A backup accepted by the export validator must also load without corruption errors.
const fs=require('node:fs'),path=require('node:path'),vm=require('node:vm'),assert=require('node:assert/strict');
const ts=(()=>{try{return require('typescript')}catch{const {execFileSync}=require('node:child_process');return require(path.join(execFileSync('npm',['root','-g'],{encoding:'utf8'}).trim(),'typescript'))}})();
const root=path.resolve(__dirname,'..');
function load(rel,mocks){const js=ts.transpileModule(fs.readFileSync(path.join(root,rel),'utf8'),{compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2020}}).outputText;const m={exports:{}};vm.runInNewContext('(function(require,module,exports){'+js+'\n})',{Date,Map,Set,Number,JSON,Object,Array,String,RegExp,Error,Promise,console})(id=>{if(!(id in mocks))throw Error('unexpected import '+id);return mocks[id]},m,m.exports);return m.exports}
const questions=load('src/data/questions.ts',{}).questions;
let raw;
const storage={getItem:async()=>raw};
const progress=load('src/lib/progress.ts',{'@react-native-async-storage/async-storage':{default:storage},'../data/questions':{questions}});
const backup=load('src/lib/backup.ts',{'@react-native-async-storage/async-storage':{default:storage},'../data/questions':{questions}});
const at='2026-11-15T00:00:00.000Z';
const env=p=>({format:'shoku-study-backup',version:1,exportedAt:at,progressRaw:JSON.stringify(p),draftRaw:null});
const cases=[
 ['minimal legacy',{}],
 ['empty current',{firstDate:'2026-11-15',dailyGoal:10,answers:{},days:{},favorites:[],history:[]}],
 ['valid counters',{answers:{a:{attempts:2,correct:1,lastCorrect:false,lastAt:''}},days:{'2026-11-15':{answered:2,correct:1,seconds:12}}}],
 ['special legacy ID',{answers:JSON.parse('{"__proto__":{"attempts":1,"correct":1,"lastCorrect":true,"lastAt":""}}')}],
 ['retired history',{history:[{id:'old',at,grade:3,mode:'practice',total:1,correct:1,seconds:1,answers:[{id:'retired-id-xyz',selected:0,correct:true}]}]}],
 ['invalid date',{firstDate:'2026-02-30'}],
 ['invalid counter',{answers:{a:{attempts:1,correct:2,lastCorrect:true,lastAt:''}}}],
 ['invalid favorites',{favorites:[3]}],
 ['invalid daily',{days:{'2026-11-15':{answered:1,correct:2,seconds:1}}}],
 ['invalid history',{history:[{id:'x',at,grade:3,mode:'practice',total:1,correct:1,seconds:1,answers:[]}]}]
];
(async()=>{for(const [name,p] of cases){raw=JSON.stringify(p);const accepted=backup.validateBackupEnvelope(env(p));let loaded=true;try{await progress.loadProgress()}catch{loaded=false}assert.equal(accepted,loaded,'validator mismatch: '+name);console.log('PASS '+name)}console.log('Backup/progress validator consistency: '+cases.length+'/'+cases.length+' passed')})().catch(e=>{console.error(e);process.exitCode=1});
