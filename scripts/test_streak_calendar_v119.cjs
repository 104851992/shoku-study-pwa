// Calendar/streak regression across midnight, year boundary and leap days.
const assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path'),vm=require('node:vm'),cp=require('node:child_process');
const ts=require('typescript');
const root=path.resolve(__dirname,'..');
const source=ts.transpileModule(fs.readFileSync(path.join(root,'src/lib/progress.ts'),'utf8'),{compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2020}}).outputText;
const script=`const vm=require('node:vm'),assert=require('node:assert/strict');const source=${JSON.stringify(source)};const real=Date;class Clock extends real {constructor(...args){super(...(args.length?args:[process.env.TEST_NOW]));}static now(){return new real(process.env.TEST_NOW).valueOf();}}const mod={exports:{}};vm.runInNewContext('(function(require,module,exports){'+source+'\\n})',{Date:Clock,Map,Set,Number,JSON,Object,Array,String,RegExp,Error,Promise,console})(id=>id==='../data/questions'?{questions:[]}: {default:{getItem:async()=>null}},mod,mod.exports);const {todayKey,streak}=mod.exports;const days=JSON.parse(process.env.TEST_DAYS);assert.equal(todayKey(),process.env.TEST_TODAY);assert.equal(streak(days),Number(process.env.TEST_EXPECT));`;
const cases=[
 ['today counts','2026-11-16T06:00:00+09:00',{'2026-11-16':{answered:1}},'2026-11-16',1],
 ['yesterday grace','2026-11-16T06:00:00+09:00',{'2026-11-15':{answered:2}},'2026-11-16',1],
 ['today and yesterday','2026-11-16T06:00:00+09:00',{'2026-11-16':{answered:1},'2026-11-15':{answered:2}},'2026-11-16',2],
 ['gap ends streak','2026-11-16T06:00:00+09:00',{'2026-11-14':{answered:1}},'2026-11-16',0],
 ['year rollover','2027-01-01T06:00:00+09:00',{'2026-12-31':{answered:1},'2026-12-30':{answered:1}},'2027-01-01',2],
 ['leap day','2024-03-01T06:00:00+09:00',{'2024-02-29':{answered:1},'2024-02-28':{answered:1}},'2024-03-01',2],
 ['zero answered','2026-11-16T06:00:00+09:00',{'2026-11-16':{answered:0},'2026-11-15':{answered:1}},'2026-11-16',1],
 ['Tokyo near midnight','2026-11-16T23:59:00+09:00',{'2026-11-16':{answered:1}},'2026-11-16',1],
 ['New York DST transition','2026-03-09T12:00:00-04:00',{'2026-03-08':{answered:1},'2026-03-07':{answered:1}},'2026-03-09',2]
];
for(const [name,now,days,today,expect] of cases){const tz=name.includes('New York')?'America/New_York':'Asia/Tokyo';const p=cp.spawnSync(process.execPath,['-e',script],{env:{...process.env,TZ:tz,TEST_NOW:now,TEST_DAYS:JSON.stringify(days),TEST_TODAY:today,TEST_EXPECT:String(expect)},encoding:'utf8'});assert.equal(p.status,0,`${name}: ${p.stderr}`);console.log('PASS '+name)}
console.log(`Streak calendar: ${cases.length}/${cases.length} passed`);
