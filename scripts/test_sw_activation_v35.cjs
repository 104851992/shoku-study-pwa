const fs = require('fs');
const vm = require('vm');
const assert = require('assert');
const sw = fs.readFileSync('public/sw.js', 'utf8');
async function run(mode) {
  const handlers = {};
  let claimed = false;
  const caches = {
    keys: async () => { if (mode === 'keys-denied') throw new Error('storage denied'); return ['shoku-manabi-offline-v8', 'shoku-manabi-offline-v9', 'other-app']; },
    delete: async (key) => { if (mode === 'delete-denied') throw new Error('delete denied'); return true; }
  };
  const self = {addEventListener: (name, fn) => handlers[name] = fn, clients: {claim: async () => { claimed = true; }}, location: {origin: 'https://example.com'}};
  vm.runInNewContext(sw, {self, caches, URL, Promise});
  let activation;
  handlers.activate({waitUntil: promise => activation = promise});
  await activation;
  assert(claimed, `clients.claim not reached for ${mode}`);
  console.log(`PASS activation ${mode}`);
}
(async () => { for (const mode of ['normal', 'keys-denied', 'delete-denied']) await run(mode); })().catch(e => {console.error(e);process.exitCode=1;});
