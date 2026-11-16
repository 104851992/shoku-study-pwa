const fs=require('fs'),vm=require('vm'),assert=require('assert');
const src=fs.readFileSync('public/sw.js','utf8');
const handlers={};
const shell={name:'cached-shell'};
const cache={match:async key=>key==='/'?shell:undefined,put:async()=>{},keys:async()=>[]};
let status=503,cacheAvailable=true;
const context={URL,Request,console,Promise,self:{location:{origin:'https://example.test'},addEventListener:(name,fn)=>handlers[name]=fn},caches:{open:async()=>{if(!cacheAvailable)throw Error('denied');return cache;}},fetch:async()=>({status,ok:false,headers:{get:()=> 'text/html'},redirected:false,type:'basic'})};
vm.runInNewContext(src,context);
async function check(){
 const request={method:'GET',url:'https://example.test/',mode:'navigate',headers:{has:()=>false},cache:'default'};
 const event={request,respondWith(p){this.result=p}};
 handlers.fetch(event);return event.result;
}
(async()=>{
 status=503;assert.strictEqual(await check(),shell);
 status=500;assert.strictEqual(await check(),shell);
 status=404;assert.strictEqual((await check()).status,404);
 status=503;cacheAvailable=false;assert.strictEqual((await check()).status,503);
 console.log('Navigation 5xx fallback: 4/4 passed');
})().catch(e=>{console.error(e);process.exitCode=1});
