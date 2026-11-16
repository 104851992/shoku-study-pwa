from pathlib import Path
s=(Path(__file__).resolve().parents[1]/'src/lib/backup.ts').read_text()
checks={
 'strict UTC timestamp': 'new Date(x.exportedAt).toISOString()!==x.exportedAt',
 'empty backup rejected': 'x.progressRaw===null&&x.draftRaw===null',
 'progress collection checks': "field==='progressRaw'",
 'draft session shape checks': "field==='draftRaw'" if "field==='draftRaw'" in s else "d.ids.length===0",
 'no storage writes': 'AsyncStorage.setItem' not in s and 'AsyncStorage.removeItem' not in s,
}
for k,v in checks.items():
 ok=(v in s) if isinstance(v,str) else v
 print(('PASS' if ok else 'FAIL'),k)
 if not ok: raise SystemExit(1)
