const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const code = fs.readFileSync('public/sw.js', 'utf8');
const origin = 'https://example.test';
const html = `<html><script src="/_expo/static/js/web/app-a.js"></script><link href='/assets/site.css' rel='stylesheet'><script src='https://outside.test/evil.js'></script><script src='/api/private.js'></script><script src='/assets/query.js?token=1'></script><script src='/assets/notjs.txt'></script><script src='/assets/blocked.js'></script><script src='/assets/fail.js'></script></html>`;
function response(path) {
  const type = path === '/' ? 'text/html' : path.endsWith('.webmanifest') ? 'application/manifest+json' : path.endsWith('.png') ? 'image/png' : path.endsWith('.css') ? 'text/css' : 'application/javascript';
  return {status: path === '/assets/fail.js' ? 503 : 200, redirected:false, type:'basic', headers:{get:k=> k==='content-type'?type:k==='cache-control' && path==='/assets/blocked.js'?'private':null,has:()=>false}, text:async()=>html};
}
async function run() {
  const handlers={};const stored=new Map();const fetched=[];
  const cache={put:async(p,r)=>stored.set(typeof p==='string'?p:p.url,r),match:async p=>stored.get(p)};
  const self={location:{origin},addEventListener:(n,fn)=>handlers[n]=fn,skipWaiting:async()=>{}};
  class Request {constructor(url){this.url=url;}}
  vm.runInNewContext(code,{self,caches:{open:async()=>cache},fetch:async r=>{fetched.push(r.url);return response(r.url)},Request,URL,Promise});
  let promise;handlers.install({waitUntil:p=>promise=p});await promise;
  return {stored:[...stored.keys()],fetched};
}
(async()=>{
  const {stored,fetched}=await run();
  for(const p of ['/', '/manifest.webmanifest', '/icon-192.png', '/icon-512.png','/_expo/static/js/web/app-a.js','/assets/site.css']) assert(stored.includes(p),`missing ${p}`);
  assert(!stored.includes('/assets/blocked.js'),'private asset must not be cached');
  assert(!stored.includes('/assets/fail.js'),'failed asset must not be cached');
  for(const p of ['https://outside.test/evil.js','/api/private.js','/assets/query.js?token=1','/assets/notjs.txt']) assert(!fetched.includes(p),`unsafe fetch ${p}`);
  console.log('SW HTML asset discovery regression: 4/4 passed');
})().catch(e=>{console.error(e);process.exitCode=1});
