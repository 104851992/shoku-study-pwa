"""Regression assertions for app-shell-only navigation caching (static, not browser E2E)."""
from pathlib import Path
sw=(Path(__file__).resolve().parents[1]/'public/sw.js').read_text(encoding='utf-8')
checks={
 'new cache version': "shoku-manabi-offline-v19" in sw,
 'only root navigation cacheable': "const cacheableNavigation = navigation && url.pathname === '/'" in sw,
 'cache condition applies navigation restriction': '(!navigation || cacheableNavigation)' in sw,
 'no-store response blocked': 'private|no-store' in sw,
 'no-store request blocked': "request.cache === 'no-store'" in sw,
 'fallback still available': "offlineShellFallback()" in sw,
 'storage untouched': 'AsyncStorage' in sw,
}
for name,ok in checks.items(): print(('PASS' if ok else 'FAIL'),name)
assert all(checks.values())
