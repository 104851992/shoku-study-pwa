const fs = require('fs');
const vm = require('vm');
const assert = require('assert');
const source = fs.readFileSync('public/sw.js', 'utf8');
async function scenario({path, mode, online, shell, asset, priorShell, expected}) {
  const listeners = {};
  const request = {method:'GET',url:'https://example.com'+path,mode,headers:{has:()=>false},cache:'default'};
  const shellResponse = {tag:'shell'};
  const assetResponse = {tag:'asset'};
  const oldShellResponse = {tag:'prior-shell'};
  const current = {match:async key => (typeof key==='string' && key==='/' ? (shell? shellResponse:undefined) : (asset ? assetResponse:undefined))};
  const previous = {match:async key => (typeof key==='string' && key==='/' ? (priorShell?oldShellResponse:undefined):undefined)};
  const self = {addEventListener:(name,fn)=>listeners[name]=fn,location:{origin:'https://example.com'}};
  const caches = {open:async name=>name.endsWith('v23')?current:previous,keys:async()=>priorShell?['shoku-manabi-offline-v19']:[]};
  const fetch = async()=>{if(!online) throw new Error('offline'); return {status:200,ok:true,redirected:false,type:'basic',headers:{get:()=>mode==='navigate'?'text/html':'application/javascript',has:()=>false},clone(){return this}}};
  vm.runInNewContext(source,{self,caches,fetch,URL,Request,Promise});
  let result;
  listeners.fetch({request,respondWith:p=>result=p});
  if (expected==='reject') await assert.rejects(result,/offline/);
  else assert.equal((await result).tag,expected);
}
(async()=>{
  await scenario({path:'/lesson/1',mode:'navigate',online:false,shell:true,expected:'shell'});
  await scenario({path:'/lesson/1',mode:'navigate',online:false,shell:false,priorShell:true,expected:'prior-shell'});
  await scenario({path:'/_expo/static/js/main.js',mode:'same-origin',online:false,asset:true,expected:'asset'});
  await scenario({path:'/_expo/static/js/main.js',mode:'same-origin',online:false,asset:false,expected:'reject'});
  console.log('SW offline routes and assets: 4/4 passed');
})().catch(e=>{console.error(e);process.exitCode=1});
