from pathlib import Path
s=Path('public/sw.js').read_text(encoding='utf-8')
checks={
 'cache namespace rotated': "shoku-manabi-offline-v19" in s,
 'network response outside cache write try': 'const response = await fetch(request);' in s and 'try {\n          const cache = await caches.open(CACHE);\n          await cache.put(request, response.clone());' in s,
 'cache write failure caught': 'catch (cacheError)' in s,
 'successful network response preserved': 'return response;\n    } catch (error)' in s,
 'cache eviction protected': 'optional.slice(0, excess)' in s,
 'sensitive vary guard preserved': 'SENSITIVE_VARY.test' in s,
 'offline fallback preserved': "offlineShellFallback()" in s,
}
for k,v in checks.items():print(('PASS' if v else 'FAIL'),k)
assert all(checks.values())
