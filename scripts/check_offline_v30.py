"""Static regression guard for offline shell eviction; not browser E2E."""
from pathlib import Path
s=(Path(__file__).resolve().parents[1]/'public/sw.js').read_text(encoding='utf-8')
checks={
 'cache namespace bumped': "shoku-manabi-offline-v19" in s,
 'shell assets protected': 'SHELL.includes(new URL(key.url).pathname)' in s,
 'eviction only optional entries': 'optional.slice(0, excess)' in s,
 'root offline fallback retained': "offlineShellFallback()" in s,
 'maximum cache entries retained': 'keys.length > MAX_ENTRIES' in s,
 'no-store response guard retained': 'private|no-store' in s,
 'navigation scope retained': "navigation && url.pathname === '/'" in s,
}
for name,ok in checks.items(): print(('PASS' if ok else 'FAIL'),name)
assert all(checks.values())
