from pathlib import Path
import re
root=Path(__file__).resolve().parents[1]
sw=(root/'public/sw.js').read_text(encoding='utf-8')
app=(root/'src/AppRoot.tsx').read_text(encoding='utf-8')
manifest=(root/'public/manifest.webmanifest').read_text(encoding='utf-8')
checks={
 'service worker registered on web only':"Platform.OS!=='web'" in app and "serviceWorker.register('/sw.js')" in app,
 'install precaches entry and manifest':"SHELL = ['/', '/manifest.webmanifest'" in sw and "precacheShellEntry(cache, path)" in sw,
 'offline fallback uses cache':'offlineCachedResponse(request)' in sw and "offlineShellFallback()" in sw,
 'cache only GET same-origin':"request.method !== 'GET'" in sw and 'url.origin !== self.location.origin' in sw,
 'avoid caching JSON and Netlify endpoints':"url.pathname.endsWith('.json')" in sw and "url.pathname.startsWith('/.netlify/')" in sw,
 'old offline caches cleaned':'caches.delete(key)' in sw,
 'cache bounded':'MAX_ENTRIES = 120' in sw,
 'manifest standalone':'"display": "standalone"' in manifest,
}
for label,passed in checks.items():print(('PASS' if passed else 'FAIL')+' '+label)
assert all(checks.values())
