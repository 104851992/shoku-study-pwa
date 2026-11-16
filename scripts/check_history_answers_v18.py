from pathlib import Path
p=Path(__file__).resolve().parents[1]/'src/lib/progress.ts'
s=p.read_text(encoding='utf-8')
checks={
 'nested answer validator':'const validExamAnswer=' in s,
 'answer id':'a.id.length>0' in s,
 'selected index':'nonnegative(a.selected)' in s,
 'answer correctness':'typeof a.correct' in s,
 'writing type':'typeof a.writing' in s,
 'all answer rows checked':'h.answers.every(validExamAnswer)' in s,
 'duplicate answers blocked':'new Set(h.answers.map(a=>a.id)).size===h.answers.length' in s,
 'history exceeds total blocked':'h.answers.length<=(h.total as number)' in s,
 'invalid history rejected':'history.length!==x.history.length' in s,
}
for name,ok in checks.items():print(('PASS' if ok else 'FAIL')+': '+name)
if not all(checks.values()):raise SystemExit(1)
print('NOTE: static source checks only, not runtime tests')
