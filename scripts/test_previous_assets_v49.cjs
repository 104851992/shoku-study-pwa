const fs=require('fs'),vm=require('vm'),assert=require('assert');
const code=fs.readFileSync('public/sw.js','utf8');
async function scenario(){
 const handlers={};const deleted=[];
 const names=['shoku-manabi-offline-v18','shoku-manabi-offline-v19','shoku-manabi-offline-v23'];
 const assetUrl='https://example.com/_expo/static/js/web/oldhash.js';
 const stores={
  [names[0]]:{'/':{source:'oldest'}},
  [names[1]]:{'/':{source:'previous'},[assetUrl]:{source:'previous asset'}},
  [names[2]]:{'/':{source:'current'}}
 };
 const caches={keys:async()=>Object.keys(stores),open:async name=>({match:async req=>stores[name]?.[typeof req==='string'?req:req.url],put:async()=>{},keys:async()=>[]}),delete:async key=>{deleted.push(key);delete stores[key];return true}};
 const self={location:{origin:'https://example.com'},clients:{claim:async()=>{}},addEventListener:(name,fn)=>handlers[name]=fn};
 const Request=class {};
 vm.runInNewContext(code,{self,caches,URL,Request,Promise,fetch:async()=>{throw new Error('offline')}});
 let pending;handlers.activate({waitUntil:p=>pending=p});await pending;
 assert(deleted.includes(names[0]));assert(!deleted.includes(names[1]));
 let response;handlers.fetch({request:{method:'GET',url:assetUrl,mode:'no-cors',headers:{has:()=>false},cache:'default'},respondWith:p=>response=p});
 assert.equal((await response).source,'previous asset');
 console.log('PASS previous hashed asset available offline; two-version retention bounded');
}
scenario().catch(e=>{console.error(e);process.exitCode=1});
