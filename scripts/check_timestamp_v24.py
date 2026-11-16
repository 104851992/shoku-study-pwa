from pathlib import Path
p=Path('src/lib/progress.ts').read_text(encoding='utf-8')
b=Path('src/lib/backup.ts').read_text(encoding='utf-8')
checks={
 'progress strict timestamp helper': 'const validTimestamp=' in p and 'new Date(v).toISOString()===v' in p,
 'backup strict timestamp helper': 'const validTimestamp=' in b and 'new Date(v).toISOString()===v' in b,
 'history load rejects malformed time': 'validTimestamp(h.at)' in p,
 'history backup rejects malformed time': '!validTimestamp(h.at)' in b,
 'answer load rejects malformed time': "r.lastAt===''||validTimestamp(r.lastAt)" in p,
 'answer backup rejects malformed time': "a.lastAt===''||validTimestamp(a.lastAt)" in b,
 'old empty lastAt supported': "lastAt===''" in p and "lastAt===''" in b,
 'no restore writes': 'AsyncStorage.setItem' not in b and 'AsyncStorage.multiSet' not in b,
}
for label,ok in checks.items():
 print(('PASS' if ok else 'FAIL')+': '+label)
 if not ok:raise SystemExit(1)
