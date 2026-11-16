const fs=require('fs'),vm=require('vm'),assert=require('assert');
const code=fs.readFileSync('public/sw.js','utf8');
async function scenario(newShell){
 const handlers={};const deleted=[];const current='shoku-manabi-offline-v23',old='shoku-manabi-offline-v19';
 const shell={status:200,source:'previous shell'};
 const stores={[current]:newShell?{'/':{status:200,source:'new shell'}}:{},[old]:{'/':shell}};
 const caches={keys:async()=>Object.keys(stores),open:async name=>({match:async path=>stores[name]?.[path],put:async()=>{}}),delete:async key=>{deleted.push(key);delete stores[key];return true}};
 const self={location:{origin:'https://example.com'},clients:{claim:async()=>{}},addEventListener:(name,fn)=>handlers[name]=fn};
 vm.runInNewContext(code,{self,caches,URL,Request:class {},Promise,fetch:async()=>({status:503,headers:{get:()=>''}})});
 let promise;handlers.activate({waitUntil:p=>promise=p});await promise;
 assert.equal(deleted.includes(old),false,'retain previous deployment assets even when new shell exists');
 let response;handlers.fetch({request:{method:'GET',url:'https://example.com/',mode:'navigate',headers:{has:()=>false},cache:'default'},respondWith:p=>response=p});
 const result=await response;
 assert.equal(result.source,newShell?'new shell':'previous shell');
 console.log('PASS upgrade fallback newShell='+newShell);
}
(async()=>{await scenario(false);await scenario(true)})().catch(e=>{console.error(e);process.exitCode=1});
