'use strict';
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const root = path.resolve(__dirname, '..');
function check(manifest, readFile, expo, sw) {
  assert.equal(manifest.display, 'standalone');
  assert.equal(manifest.start_url, '/');
  assert.equal(manifest.scope, '/');
  assert.equal(manifest.name, expo.name);
  assert.equal(manifest.short_name, expo.web.shortName);
  assert.equal(manifest.theme_color.toLowerCase(), expo.web.themeColor.toLowerCase());
  assert.equal(manifest.background_color.toLowerCase(), expo.web.backgroundColor.toLowerCase());
  assert.ok(Array.isArray(manifest.icons));
  for (const size of [192, 512]) {
    const icon = manifest.icons.find(i => i.sizes === `${size}x${size}` && i.type === 'image/png');
    assert.ok(icon, `missing ${size}x${size} PNG`);
    assert.match(icon.src, /^\/[a-zA-Z0-9._/-]+\.png$/);
    assert.ok(!icon.src.includes('..'));
    const bytes = readFile(path.join('public', icon.src.slice(1)));
    assert.equal(bytes.subarray(0, 8).toString('hex'), '89504e470d0a1a0a');
    assert.equal(bytes.readUInt32BE(16), size, 'PNG width');
    assert.equal(bytes.readUInt32BE(20), size, 'PNG height');
    assert.ok(sw.includes(`'${icon.src}'`), `offline shell missing ${icon.src}`);
  }
  assert.ok(sw.includes("'/manifest.webmanifest'"));
  assert.ok(sw.includes("'/'"));
}
const read = p => fs.readFileSync(path.join(root, p));
const manifest = JSON.parse(read('public/manifest.webmanifest').toString('utf8'));
const expo = JSON.parse(read('app.json').toString('utf8')).expo;
const sw = read('public/sw.js').toString('utf8');
let count = 0;
function test(name, fn) { fn(); count++; console.log(`PASS ${name}`); }
test('shipped manifest, icon dimensions and offline shell', () => check(manifest, read, expo, sw));
test('missing required icon rejected', () => assert.throws(() => check({...manifest, icons: manifest.icons.filter(i => i.sizes !== '512x512')}, read, expo, sw)));
test('inconsistent scope rejected', () => assert.throws(() => check({...manifest, scope: '/other/'}, read, expo, sw)));
test('inconsistent theme rejected', () => assert.throws(() => check({...manifest, theme_color: '#000000'}, read, expo, sw)));
test('corrupt PNG rejected', () => assert.throws(() => check(manifest, p => p.endsWith('icon-192.png') ? Buffer.alloc(32) : read(p), expo, sw)));
test('missing precache icon rejected', () => assert.throws(() => check(manifest, read, expo, sw.replace("'/icon-512.png'", "'/not-cached.png'"))));
console.log(`${count}/${count} PWA manifest checks passed`);
