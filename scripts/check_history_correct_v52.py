from pathlib import Path
p=Path('src/lib/progress.ts').read_text(encoding='utf-8')
b=Path('src/lib/backup.ts').read_text(encoding='utf-8')
assert 'h.answers.filter(a=>a.correct===true).length===h.correct' in p
assert 'h.answers.filter((a:Record<string,unknown>)=>a.correct===true).length!==h.correct' in b
assert "@shoku_study/progress_v1" in p and "@shoku_study/session_draft_v1" in p
print('4/4 history consistency/static compatibility assertions passed')
