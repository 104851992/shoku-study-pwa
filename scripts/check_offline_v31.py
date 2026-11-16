"""Static guard for Vary-aware offline cache policy; not a browser test."""
from pathlib import Path
s=(Path(__file__).resolve().parents[1]/'public/sw.js').read_text(encoding='utf-8')
checks={
 'cache version rotated': "shoku-manabi-offline-v19" in s,
 'vary wildcard excluded': 'cookie|authorization' in s and r'\*' in s,
 'vary header evaluated before cache put': s.index("response.headers.get('vary')") < s.index('await cache.put(request'),
 'private and no-store retained': 'private|no-store' in s,
 'navigation scope retained': "navigation && url.pathname === '/'" in s,
 'shell retention retained': 'SHELL.includes(new URL(key.url).pathname)' in s,
}
for name,ok in checks.items(): print(('PASS' if ok else 'FAIL'),name)
assert all(checks.values())
