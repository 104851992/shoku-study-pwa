// Real execution of the TypeScript backup validator without installing Expo.
const fs=require('fs'),path=require('path'),vm=require('vm'),assert=require('assert');
const ts=(()=>{try{return require('typescript')}catch{const {execFileSync}=require('child_process');const globalRoot=execFileSync('npm',['root','-g'],{encoding:'utf8'}).trim();return require(path.join(globalRoot,'typescript'));}})();
const root=path.resolve(__dirname,'..');
function load(rel,mocks){
 const js=ts.transpileModule(fs.readFileSync(path.join(root,rel),'utf8'),{compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2020}}).outputText;
 const module={exports:{}};
 vm.runInNewContext('(function(require,module,exports){'+js+'\n})',{Date,Map,Set,Number,JSON,Object,Array,String,RegExp,Error,Promise,console})(id=>{if(!(id in mocks))throw Error('unexpected import '+id);return mocks[id]},module,module.exports);
 return module.exports;
}
const questions=load('src/data/questions.ts',{}).questions;
const {validateBackupEnvelope}=load('src/lib/backup.ts',{'@react-native-async-storage/async-storage':{default:{}},'../data/questions':{questions}});
const q=questions.find(x=>x.kind==='choice');
const now='2026-11-13T00:00:00.000Z';
const row=(id,selected,correct)=>({id,selected,correct});
const history=(answer)=>({id:'old-exam',at:now,grade:q.grade,mode:'practice',total:1,correct:Number(answer.correct),seconds:10,answers:[answer]});
const envelope=(h)=>({format:'shoku-study-backup',version:1,exportedAt:now,progressRaw:JSON.stringify({history:[h]}),draftRaw:null});
let n=0;
function check(label,value,expected){assert.strictEqual(validateBackupEnvelope(value),expected,label);n++;}
check('valid answer',envelope(history(row(q.id,q.answer,true))),true);
check('wrong scoring',envelope(history(row(q.id,q.answer,false))),false);
check('out of range',envelope(history(row(q.id,q.options.length,false))),false);
check('retired question history',envelope(history(row('RETIRED-OLD-ID',0,true))),true);
const other=questions.find(x=>x.grade!==q.grade);
check('grade mismatch',envelope(history(row(other.id,0,false))),false);
check('invalid timestamp',{...envelope(history(row(q.id,q.answer,true))),exportedAt:'2026-02-30T00:00:00.000Z'},false);
const draft={ids:[q.id],index:0,grade:q.grade,mode:'practice',correct:0,answered:0,began:1794528000000,responses:[]};
check('valid draft',{format:'shoku-study-backup',version:1,exportedAt:now,progressRaw:null,draftRaw:JSON.stringify(draft)},true);
check('draft wrong grade',{format:'shoku-study-backup',version:1,exportedAt:now,progressRaw:null,draftRaw:JSON.stringify({...draft,grade:other.grade})},false);
check('draft invalid answer',{format:'shoku-study-backup',version:1,exportedAt:now,progressRaw:null,draftRaw:JSON.stringify({...draft,answered:1,correct:1,responses:[row(q.id,q.answer,false)]})},false);
check('empty export',{...envelope(history(row(q.id,q.answer,true))),progressRaw:null},false);

check('duplicate history answer IDs',envelope({...history(row(q.id,q.answer,true)),total:2,correct:2,answers:[row(q.id,q.answer,true),row(q.id,q.answer,true)]}),false);
check('history wrong grade',envelope({...history(row(q.id,q.answer,true)),grade:other.grade}),false);
check('history inconsistent correct count',envelope({...history(row(q.id,q.answer,true)),correct:0}),false);
check('history negative duration',envelope({...history(row(q.id,q.answer,true)),seconds:-1}),false);
check('history noninteger duration',envelope({...history(row(q.id,q.answer,true)),seconds:1.5}),false);
check('draft duplicate IDs',{format:'shoku-study-backup',version:1,exportedAt:now,progressRaw:null,draftRaw:JSON.stringify({...draft,ids:[q.id,q.id]})},false);
check('draft index out of range',{format:'shoku-study-backup',version:1,exportedAt:now,progressRaw:null,draftRaw:JSON.stringify({...draft,index:1})},false);
check('malformed progress JSON',{...envelope(history(row(q.id,q.answer,true))),progressRaw:'{bad'},false);

console.log('Backup runtime regression: '+n+'/'+n+' passed');
