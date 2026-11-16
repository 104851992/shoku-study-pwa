const fs = require('fs'), vm = require('vm'), assert = require('assert');
const source = fs.readFileSync('public/sw.js','utf8');
async function scenario(header, expectedWrites) {
 const listeners={}; let writes=0;
 const headers={get:n=>n==='content-type'?'text/html':n==='cache-control'?header:null,has:()=>false};
 const response={status:200,ok:true,redirected:false,type:'basic',headers,clone(){return this}};
 const cache={put:async()=>{writes++},keys:async()=>[]};
 const self={addEventListener:(n,f)=>listeners[n]=f,location:{origin:'https://example.com'}};
 vm.runInNewContext(source,{self,caches:{open:async()=>cache},fetch:async()=>response,URL,Request,Promise});
 let task;
 listeners.fetch({request:{method:'GET',url:'https://example.com/',mode:'navigate',headers:{has:()=>false},cache:'default'},respondWith:p=>task=p});
 await task;
 assert.equal(writes,expectedWrites,`${header} writes`);
}
(async()=>{
 for(const header of ['must-revalidate','public, must-revalidate','MUST-REVALIDATE','must-revalidate, max-age=0','no-cache','private'])await scenario(header,0);
 for(const header of ['public, max-age=600','max-age=3600'])await scenario(header,1);
 console.log('SW revalidation caching checks: 8/8 passed');
})().catch(e=>{console.error(e);process.exit(1)});
