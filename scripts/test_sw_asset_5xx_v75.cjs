const fs = require('fs'), vm = require('vm'), assert = require('assert');
const source = fs.readFileSync('public/sw.js', 'utf8');
async function run(path, status, cached, expected) {
  const listeners = {};
  const request = {method:'GET',url:'https://example.com'+path,mode:'same-origin',headers:{has:()=>false},cache:'default'};
  const network = {status,ok:status===200,redirected:false,type:'basic',headers:{get:()=> 'application/javascript',has:()=>false},clone(){return this}};
  const prior = {tag:'cached',status:200};
  const cache = {match:async()=>cached?prior:undefined,put:async()=>{},keys:async()=>[]};
  const self = {addEventListener:(name,cb)=>listeners[name]=cb,location:{origin:'https://example.com'}};
  vm.runInNewContext(source,{self,caches:{open:async()=>cache,keys:async()=>[]},fetch:async()=>network,URL,Request,Promise});
  let task;
  listeners.fetch({request,respondWith:p=>task=p});
  await task;
  assert.equal((await task).tag||'network',expected,`${path} ${status} cached=${cached}`);
}
(async()=>{
  await run('/_expo/static/js/app.js',503,true,'cached');
  await run('/_expo/static/js/app.js',503,false,'network');
  await run('/_expo/static/js/app.js',404,true,'network');
  await run('/_expo/static/js/app.js',200,true,'network');
  console.log('SW static 5xx fallback: 4/4 passed');
})().catch(e=>{console.error(e);process.exitCode=1});
