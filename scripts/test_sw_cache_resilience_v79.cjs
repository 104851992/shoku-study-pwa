const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const code = fs.readFileSync('public/sw.js', 'utf8');
const origin = 'https://example.test';
function response() { return {status:200,ok:true,redirected:false,type:'basic',headers:{get:k=>k==='content-type'?'application/javascript':null,has:()=>false},clone(){return this}}; }
async function run({failOpen=false,failPut=false,overflow=false}={}) {
  const handlers={}; const removed=[]; let saved=0;
  const shell=['/','/manifest.webmanifest','/icon-192.png','/icon-512.png'];
  const urls=[...shell,...Array.from({length:overflow?117:0},(_,i)=>`/assets/old${i}.js`)];
  const cache={put:async()=>{if(failPut)throw Error('quota');saved++},match:async()=>undefined,keys:async()=>urls.map(path=>({url:origin+path})),delete:async key=>{removed.push(new URL(key.url).pathname);return true}};
  const caches={open:async()=>{if(failOpen)throw Error('denied');return cache},keys:async()=>[]};
  const self={location:{origin},addEventListener:(name,fn)=>handlers[name]=fn};
  vm.runInNewContext(code,{self,caches,fetch:async()=>response(),URL,Promise});
  let pending;
  handlers.fetch({request:{url:origin+'/assets/new.js',method:'GET',mode:'same-origin',headers:{has:()=>false},cache:'default'},respondWith:p=>pending=p});
  const result=await pending;
  assert.equal(result.status,200,'network success survives storage failure');
  return {removed,saved};
}
(async()=>{
  await run({failOpen:true});
  await run({failPut:true});
  const {removed,saved}=await run({overflow:true});
  assert.equal(saved,1);
  assert.equal(removed.length,1);
  assert.equal(removed[0],'/assets/old0.js');
  assert(!removed.some(p=>['/','/manifest.webmanifest','/icon-192.png','/icon-512.png'].includes(p)));
  console.log('SW cache resilience: 3/3 passed');
})().catch(err=>{console.error(err);process.exitCode=1});
