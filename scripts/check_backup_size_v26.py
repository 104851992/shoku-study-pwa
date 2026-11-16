from pathlib import Path
root=Path(__file__).resolve().parents[1]
b=(root/'src/lib/backup.ts').read_text(encoding='utf-8')
a=(root/'src/AppRoot.tsx').read_text(encoding='utf-8')
checks={
 'export checks serialized UTF-8 blob size':'if(blob.size>5*1024*1024)' in b,
 'export checks before object URL creation':b.index('if(blob.size>5*1024*1024)')<b.index('URL.createObjectURL(blob)'),
 'inspector enforces matching size':'if(file.size>5*1024*1024)' in a,
 'backup validates envelope':'if(!validateBackupEnvelope(data))' in b,
 'storage keys preserved':"'@shoku_study/progress_v1'" in b and "'@shoku_study/session_draft_v1'" in b,
}
for name,ok in checks.items(): print(('PASS' if ok else 'FAIL')+' '+name)
assert all(checks.values())
