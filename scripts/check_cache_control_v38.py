from pathlib import Path
import re
sw=Path('public/sw.js').read_text(encoding='utf-8')
assert "shoku-manabi-offline-v19" in sw
assert 'SENSITIVE_CACHE_CONTROL.test(response.headers.get' in sw
m=re.search(r'const SENSITIVE_CACHE_CONTROL = /(.*?)/i;',sw)
assert m, 'Cache-Control guard absent'
# Equivalent Python regex applied to representative HTTP directives.
p=re.compile(m.group(1),re.I)
for value in ['private', 'no-store', 'public, private', 'max-age=0, private="Set-Cookie"', 'public, no-store', 'private = "Authorization"', 'max-age=300, must-revalidate']:
    assert p.search(value), value
for value in ['public, max-age=300', 'immutable', 'max-age=300, stale-while-revalidate=30']:
    assert not p.search(value), value
print('Cache-Control directive checks: 11/11 passed')
