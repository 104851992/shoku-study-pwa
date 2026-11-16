const fs=require('fs'),vm=require('vm'),assert=require('assert');
const code=fs.readFileSync('public/sw.js','utf8');
async function run(){
 const handlers={},stored=new Map(),calls=[];
 const html='<script src="/_expo/static/js/web.js"></script><link href="/_expo/static/css/web.css" rel="stylesheet"><script src="https://evil.test/assets/bad.js"></script><script src="/api/private.js"></script>';
 const headers=(type)=>({get:k=>k==='content-type'?type:null,has:()=>false});
 const response=(type,body)=>({ok:true,status:200,redirected:false,type:'basic',headers:headers(type),text:async()=>body,clone(){return this}});
 const cache={put:async(p,r)=>stored.set(typeof p==='string'?p:p.url,r),match:async p=>stored.get(p)};
 const fetch=async req=>{calls.push(req.url);const p=req.url;return p==='/'?response('text/html',html):p.endsWith('.js')?response('application/javascript',''):p.endsWith('.css')?response('text/css',''):p.endsWith('webmanifest')?response('application/manifest+json',''):response('image/png','')};
 const self={location:{origin:'https://example.com'},addEventListener:(n,f)=>handlers[n]=f,skipWaiting:async()=>{}};
 vm.runInNewContext(code,{self,caches:{open:async()=>cache},fetch,Request:class{constructor(url){this.url=url}},URL,Promise});
 let task;handlers.install({waitUntil:p=>task=p});await task;
 assert(stored.has('/_expo/static/js/web.js'));assert(stored.has('/_expo/static/css/web.css'));
 assert(!calls.some(x=>x.includes('evil.test')||x.includes('/api/private')));
 assert(stored.has('/'));console.log('Install asset discovery: 4/4 passed');
}
run().catch(e=>{console.error(e);process.exitCode=1});
