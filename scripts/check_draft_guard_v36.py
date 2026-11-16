from pathlib import Path
p=Path('src/lib/progress.ts').read_text(encoding='utf-8')
b=Path('src/lib/backup.ts').read_text(encoding='utf-8')
checks={
 'draft IDs nonempty': "typeof id==='string'&&id.length>0" in p,
 'draft response object check': "typeof r==='object'&&!Array.isArray(r)" in p,
 'draft writing optional string': "r.writing===undefined||typeof r.writing==='string'" in p,
 'draft selected safe integer': 'Number.isSafeInteger(r.selected)' in p,
 'draft counters safe integer': 'Number.isSafeInteger(x.correct)' in p and 'Number.isSafeInteger(x.answered)' in p,
 'storage keys unchanged': "'@shoku_study/progress_v1'" in p and "'@shoku_study/session_draft_v1'" in p,
 'backup envelope unchanged': "version:1" in b,
}
for k,v in checks.items(): print(('PASS' if v else 'FAIL'),k)
assert all(checks.values())
