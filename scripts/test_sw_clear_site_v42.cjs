const fs=require('fs'),vm=require('vm'),assert=require('assert');
const code=fs.readFileSync('public/sw.js','utf8');
async function install(headers={}) {
 const listeners={},stored=[];
 const response=path=>({status:200,ok:true,redirected:false,type:'basic',headers:{get:k=>headers[k]||({'content-type':path==='/'?'text/html':path.endsWith('webmanifest')?'application/manifest+json':'image/png'}[k]||null),has:k=>Object.prototype.hasOwnProperty.call(headers,k)}});
 const context={self:{addEventListener:(n,f)=>listeners[n]=f,skipWaiting:()=>{}},caches:{open:async()=>({put:async path=>stored.push(path)})},fetch:async req=>response(req.url),Request:class{constructor(url){this.url=url}},Promise,URL};
 vm.runInNewContext(code,context);let job;listeners.install({waitUntil:p=>job=p});await job;return stored;
}
(async()=>{
 assert.equal((await install()).length,4);
 for(const value of ['"cache"','"cookies"','"storage"','"*"']) {
  const got=await install({'clear-site-data':value});assert.equal(got.length,0);
 }
 console.log('Clear-Site-Data precache tests: 5/5 passed');
})().catch(e=>{console.error(e);process.exit(1)});
