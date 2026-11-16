const assert=require('node:assert/strict');
const fs=require('node:fs');
const vm=require('node:vm');
const code=fs.readFileSync('public/sw.js','utf8');
const origin='https://example.test';
const headers=values=>({get:k=>values[k.toLowerCase()]??null,has:k=>Object.hasOwn(values,k.toLowerCase())});
async function run(status,mode='same-origin',path='/assets/main.js') {
  let writes=0;const handlers={};
  const response={status,ok:status>=200&&status<300,redirected:false,type:'basic',headers:headers({'content-type':path.endsWith('.js')?'application/javascript':'text/html'}),clone(){return this}};
  const cache={put:async()=>{writes++},keys:async()=>[],match:async()=>undefined};
  vm.runInNewContext(code,{self:{location:{origin},addEventListener:(k,v)=>handlers[k]=v},caches:{open:async()=>cache,keys:async()=>[]},fetch:async()=>response,URL,Request:class{},Promise});
  let pending;handlers.fetch({request:{url:origin+path,method:'GET',mode,headers:headers({}),cache:'default'},respondWith:p=>pending=p});
  assert.ok(pending);const result=await pending;assert.equal(result.status,status);return writes;
}
(async()=>{
  assert.equal(await run(206),0,'Partial Content must not poison full asset cache');
  assert.equal(await run(204),0,'No Content must not replace cached asset');
  assert.equal(await run(200),1,'Complete script remains cacheable');
  assert.equal(await run(206,'navigate','/'),0,'Partial HTML shell must not be cached');
  assert.equal(await run(200,'navigate','/'),1,'Complete HTML shell remains cacheable');
  console.log('SW partial response regression: 5/5 passed');
})().catch(e=>{console.error(e);process.exitCode=1});
