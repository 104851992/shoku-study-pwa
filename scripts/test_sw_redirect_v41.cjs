const fs=require('fs'),vm=require('vm'),assert=require('assert');
const code=fs.readFileSync('public/sw.js','utf8');
async function run(redirected){
 const listeners={};let puts=0;
 const response={status:200,ok:true,redirected,type:'basic',headers:{get:k=>k==='content-type'?'text/html':null,has:()=>false},clone(){return this}};
 const self={addEventListener:(k,fn)=>listeners[k]=fn,location:{origin:'https://example.test'}};
 const caches={open:async()=>({put:async()=>{puts++},keys:async()=>[]})};
 vm.runInNewContext(code,{self,caches,fetch:async()=>response,URL,Promise});
 let promise;listeners.fetch({request:{method:'GET',url:'https://example.test/',mode:'navigate',headers:{has:()=>false},cache:'default'},respondWith:p=>promise=p});
 assert.strictEqual(await promise,response);return puts;
}
(async()=>{assert.equal(await run(false),1);assert.equal(await run(true),0);console.log('Runtime redirect cache tests: 2/2 passed')})().catch(e=>{console.error(e);process.exit(1)});
