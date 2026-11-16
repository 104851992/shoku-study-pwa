"""Static regression checks for offline caching safety; browser testing still required."""
from pathlib import Path
root=Path(__file__).resolve().parents[1]
sw=(root/'public/sw.js').read_text(encoding='utf-8')
checks={
 'new cache namespace':"shoku-manabi-offline-v19" in sw,
 'no query-string caching':"if (url.search" in sw,
 'no authorization caching':"request.headers.has('authorization')" in sw,
 'no range caching':"request.headers.has('range')" in sw,
 'only navigation and static assets':"if (!navigation && !staticAsset) return" in sw,
 'no private cache-control':"private|no-store" in sw,
 'no set-cookie responses':"!response.headers.has('set-cookie')" in sw,
 'no external or netlify endpoints':"url.origin !== self.location.origin" in sw and "url.pathname.startsWith('/.netlify/')" in sw,
 'no json endpoints':"url.pathname.endsWith('.json')" in sw,
 'fallback to app shell':"offlineShellFallback()" in sw,
 'bounded entries':"MAX_ENTRIES = 120" in sw,
 'old cache removal':"caches.delete(key)" in sw,
}
for name,ok in checks.items():print(('PASS' if ok else 'FAIL'),name)
assert all(checks.values())
