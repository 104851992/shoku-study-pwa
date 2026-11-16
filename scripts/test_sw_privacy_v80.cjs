const assert=require('node:assert/strict');
const fs=require('node:fs');
const vm=require('node:vm');
const code=fs.readFileSync('public/sw.js','utf8');
const origin='https://example.test';
function headers(values={}) { const data=Object.fromEntries(Object.entries(values).map(([k,v])=>[k.toLowerCase(),v]));return {get:k=>data[k.toLowerCase()]??null,has:k=>Object.hasOwn(data,k.toLowerCase())}; }
async function check({path='/assets/main.js',requestHeaders={},responseHeaders={},cache='default',expectIntercept=true,expectWrites=0}) {
 const handlers={};let writes=0,fetches=0,responded=false;
 const self={location:{origin},addEventListener:(name,fn)=>handlers[name]=fn};
 const store={put:async()=>{writes++},keys:async()=>[],match:async()=>undefined};
 const caches={open:async()=>store,keys:async()=>[]};
 const fetch=async()=>{fetches++;return {status:200,ok:true,redirected:false,type:'basic',headers:headers({'content-type':'application/javascript',...responseHeaders}),clone(){return this}}};
 vm.runInNewContext(code,{self,caches,fetch,URL,Request:class{},Promise});
 let pending;
 handlers.fetch({request:{url:origin+path,method:'GET',mode:'same-origin',headers:headers(requestHeaders),cache},respondWith:p=>{responded=true;pending=p}});
 assert.equal(responded,expectIntercept,`interception: ${path}`);
 if(responded){const result=await pending;assert.equal(result.status,200)}
 assert.equal(writes,expectWrites,`cache writes: ${path}`);
 return fetches;
}
(async()=>{
 await check({path:'/assets/main.js?token=secret',expectIntercept:false});
 await check({requestHeaders:{authorization:'Bearer secret'},expectIntercept:false});
 await check({requestHeaders:{range:'bytes=0-99'},expectIntercept:false});
 await check({cache:'no-store',expectIntercept:false});
 await check({path:'/.netlify/functions/profile.js',expectIntercept:false});
 await check({path:'/assets/profile.json',expectIntercept:false});
 await check({responseHeaders:{'set-cookie':'session=secret'}});
 await check({responseHeaders:{vary:'Accept-Encoding, Cookie'}});
 await check({responseHeaders:{'cache-control':'private, max-age=3600'}});
 await check({responseHeaders:{'clear-site-data':'"cache"'}});
 await check({expectWrites:1});
 console.log('SW privacy regression: 11/11 passed');
})().catch(e=>{console.error(e);process.exitCode=1});
