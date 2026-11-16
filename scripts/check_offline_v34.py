from pathlib import Path
s=Path('public/sw.js').read_text(encoding='utf-8')
checks={
 'cache namespace rotated': 'shoku-manabi-offline-v19' in s,
 'guarded precache attempted': 'await fetch(new Request(path' in s,
 'partial precache fallback': 'Promise.allSettled(SHELL.map(path => precacheShellEntry(cache, path)))' in s,
 'precache rejection isolated': 'Promise.allSettled(SHELL.map(path => precacheShellEntry(cache, path)))' in s,
 'storage denial caught during install': 'catch (storageError)' in s,
 'network still prioritized': s.index('const response = await fetch(request);') < s.index('const cache = await caches.open(CACHE);',s.index("self.addEventListener('fetch'")),
}
for name,ok in checks.items(): print(('PASS' if ok else 'FAIL'),name)
assert all(checks.values())
