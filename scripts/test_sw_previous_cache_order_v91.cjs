const assert=require('node:assert/strict');
const fs=require('node:fs');
const vm=require('node:vm');
const source=fs.readFileSync('public/sw.js','utf8');
const origin='https://example.test';
async function run(keys, expected){
 const listeners={};const opened=[];
 const caches={keys:async()=>keys,open:async name=>{opened.push(name);return {match:async()=>name===expected?{source:name}:undefined}}};
 vm.runInNewContext(source,{self:{location:{origin},addEventListener:(name,fn)=>listeners[name]=fn},caches,fetch:async()=>{throw Error('offline')},URL,Promise});
 let promise;listeners.fetch({request:{url:origin+'/assets/app.js',method:'GET',mode:'same-origin',headers:{has:()=>false},cache:'default'},respondWith:p=>promise=p});
 const result=await promise;assert.equal(result.source,expected);return opened;
}
(async()=>{
 const a=await run(['shoku-manabi-offline-v4','shoku-manabi-offline-v21','shoku-manabi-offline-v12'],'shoku-manabi-offline-v21');
 assert.deepEqual(a.slice(0,2),['shoku-manabi-offline-v23','shoku-manabi-offline-v21']);
 const b=await run(['shoku-manabi-offline-v999','shoku-manabi-offline-v22','shoku-manabi-offline-vx'],'shoku-manabi-offline-v22');
 assert.deepEqual(b.slice(0,2),['shoku-manabi-offline-v23','shoku-manabi-offline-v22']);
 console.log('SW prior-cache fallback ordering: 2/2 passed');
})().catch(e=>{console.error(e);process.exitCode=1});
