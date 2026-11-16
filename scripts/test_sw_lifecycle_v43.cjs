const fs = require('fs'), vm = require('vm'), assert = require('assert');
const code = fs.readFileSync('public/sw.js', 'utf8');
(async () => {
  const listeners = {};
  let releaseSkip;
  let skipCalled = false;
  const skipGate = new Promise(resolve => { releaseSkip = resolve; });
  const self = { addEventListener: (name, fn) => listeners[name] = fn,
    skipWaiting: () => { skipCalled = true; return skipGate; },
    location: {origin:'https://example.com'} };
  const response = (url) => ({ok:true,redirected:false,type:'basic',headers:{
    get: name => name === 'content-type' ? (url === '/' ? 'text/html' : url.endsWith('.webmanifest') ? 'application/manifest+json' : 'image/png') : null,
    has: () => false }});
  vm.runInNewContext(code, {self, Request: class {constructor(url){this.url=url}},
    caches: {open: async () => ({put: async () => {}})},
    fetch: async req => response(req.url), Promise, URL});
  let installPromise;
  listeners.install({waitUntil: promise => {installPromise = promise;}});
  await new Promise(resolve => setImmediate(resolve));
  assert(skipCalled, 'skipWaiting should be requested after precaching');
  let completed = false;
  installPromise.then(() => completed = true);
  await new Promise(resolve => setImmediate(resolve));
  assert(!completed, 'install must wait for skipWaiting to settle');
  releaseSkip();
  await installPromise;
  assert(completed, 'install should settle after skipWaiting');
  console.log('Service Worker lifecycle checks: 3/3 passed');
})().catch(err => {console.error(err); process.exit(1)});
