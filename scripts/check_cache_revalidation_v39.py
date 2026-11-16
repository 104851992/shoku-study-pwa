from pathlib import Path
import re
s = Path('public/sw.js').read_text(encoding='utf-8')
m = re.search(r'const SENSITIVE_CACHE_CONTROL = /(.*?)/i;', s)
assert m, 'Cache-Control protection missing'
p = re.compile(m.group(1), re.I)
blocked = ['no-cache', 'public, no-cache', 'no-cache="Set-Cookie"', 'no-cache = "Authorization"', 'private', 'no-store', 'public, max-age=120, no-cache', 'must-revalidate']
allowed = ['public, max-age=120', 'immutable', 'max-age=0', 'x-no-cache-test=1']
for x in blocked: assert p.search(x), f'not blocked: {x}'
for x in allowed: assert not p.search(x), f'false positive: {x}'
assert 'shoku-manabi-offline-v19' in s
print(f'Cache revalidation policy: {len(blocked)+len(allowed)} cases passed')
