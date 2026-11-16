from pathlib import Path
s=Path('public/sw.js').read_text(encoding='utf-8')
a=s.split("self.addEventListener('activate', event => {",1)[1].split("self.addEventListener('fetch'",1)[0]
checks={
 'new cache namespace': "shoku-manabi-offline-v19" in s,
 'activation catches cache storage denial': 'const keys = await caches.keys();' in a and 'catch (storageError)' in a,
 'failed individual deletions tolerated': 'Promise.allSettled(' in a,
 'client claim after cleanup attempt': a.index('await self.clients.claim()') > a.index('catch (storageError)'),
 'install partial precache preserved': 'Promise.allSettled(SHELL.map(path => precacheShellEntry(cache, path)))' in s,
 'network-first fetch preserved': s.index('const response = await fetch(request);') < s.index('const cache = await caches.open(CACHE);',s.index("self.addEventListener('fetch'")),
}
for k,v in checks.items():print(('PASS' if v else 'FAIL'),k)
assert all(checks.values())
