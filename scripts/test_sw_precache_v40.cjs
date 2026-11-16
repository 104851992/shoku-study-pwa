const fs = require('fs');
const vm = require('vm');
const assert = require('assert');
const code = fs.readFileSync('public/sw.js','utf8');
async function run(overrides={}) {
 const listeners={}; const stored=[];
 const response=(path)=>{
   const opts=overrides[path]||{};
   const headers=new Map(Object.entries({'content-type':path==='/'?'text/html':path.endsWith('webmanifest')?'application/manifest+json':'image/png',...opts.headers}));
   return {status:opts.ok===false?500:200,ok:opts.ok!==false,type:opts.type||'basic',redirected:!!opts.redirected,headers:{get:k=>headers.get(k)||null,has:k=>headers.has(k)}};
 };
 const context={self:{addEventListener:(n,fn)=>listeners[n]=fn,skipWaiting:()=>{},location:{origin:'https://example.com'}},caches:{open:async()=>({put:async(path)=>stored.push(path)})},fetch:async req=>response(req.url),Request:class{constructor(url){this.url=url}},Promise,URL};
 vm.runInNewContext(code,context);
 let job;listeners.install({waitUntil:p=>job=p});await job;
 return stored;
}
(async()=>{
 const baseline=await run();assert.equal(baseline.length,4);
 const cases=[
  {'/':{headers:{'cache-control':'private="Set-Cookie"'}}},
  {'/':{headers:{'cache-control':'no-cache'}}},
  {'/':{headers:{'vary':'Cookie'}}},
  {'/':{headers:{'set-cookie':'token=abc'}}},
  {'/':{headers:{'content-type':'application/json'}}},
  {'/':{ok:false}},
  {'/':{type:'opaque'}},
  {'/':{redirected:true}}
 ];
 for(const c of cases){const got=await run(c);assert(!got.includes('/'));assert.equal(got.length,3)}
 console.log('Service Worker install behavioral tests: 9/9 passed');
})().catch(e=>{console.error(e);process.exit(1)});
