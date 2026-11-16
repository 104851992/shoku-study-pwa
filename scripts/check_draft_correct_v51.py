from pathlib import Path
p=Path('src/lib/progress.ts').read_text(encoding='utf-8')
b=Path('src/lib/backup.ts').read_text(encoding='utf-8')
a=Path('src/AppRoot.tsx').read_text(encoding='utf-8')
assert 'x.responses.filter((r:ExamAnswer)=>r.correct).length!==x.correct' in p
assert 'responses.filter(item=>(item as Record<string,unknown>).correct===true).length!==d.correct' in b
assert 'v1.0.44' in a
assert "@shoku_study/progress_v1" in p and "@shoku_study/session_draft_v1" in p
print('draft correctness counter guards: 4/4 checks passed')
