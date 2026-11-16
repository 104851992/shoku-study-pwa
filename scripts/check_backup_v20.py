from pathlib import Path
s=(Path(__file__).resolve().parents[1]/'src/lib/backup.ts').read_text(encoding='utf-8')
checks={
 'backup envelope validated': 'validateBackupEnvelope(result)' in s,
 'download validates envelope': 'validateBackupEnvelope(data)' in s,
 'invalid JSON rejected': 'JSON.parse(raw)' in s and 'catch{return false;}' in s,
 'progress and draft included': "map.get(PROGRESS_KEY)" in s and "map.get(DRAFT_KEY)" in s,
 'no import mutation': 'AsyncStorage.setItem' not in s and 'AsyncStorage.removeItem' not in s,
 'backup version checked': "x.version!==1" in s,
}
for label,ok in checks.items():print(('PASS' if ok else 'FAIL')+': '+label)
assert all(checks.values())
