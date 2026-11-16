const assert=require('assert');
const fs=require('fs');
const vm=require('vm');
const code=fs.readFileSync('public/sw.js','utf8');
async function check(path,type,expected){
  const handlers={};const saved=[];
  const response={status:200,ok:true,redirected:false,type:'basic',headers:{get:k=>k==='content-type'?type:null,has:()=>false},clone(){return this}};
  const cache={put:async(k)=>saved.push(k),keys:async()=>[],match:async()=>undefined};
  const self={location:{origin:'https://example.com'},addEventListener:(k,fn)=>handlers[k]=fn};
  const caches={open:async()=>cache,keys:async()=>[]};
  vm.runInNewContext(code,{self,caches,fetch:async()=>response,URL,Promise});
  let task;
  handlers.fetch({request:{url:'https://example.com'+path,method:'GET',mode:'same-origin',headers:{has:()=>false},cache:'default'},respondWith:p=>task=p});
  assert(task,'fetch intercepted');await task;
  assert.equal(saved.length>0,expected,`${path} ${type}`);
}
(async()=>{
 await check('/assets/app.js','image/png',false);
 await check('/assets/app.css','text/html',false);
 await check('/assets/app.js','application/javascript; charset=utf-8',true);
 await check('/assets/app.css','text/css; charset=utf-8',true);
 await check('/assets/icon.png','image/png',true);
 console.log('SW asset MIME: 5/5 passed');
})().catch(e=>{console.error(e);process.exitCode=1});
