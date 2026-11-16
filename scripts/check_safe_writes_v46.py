from pathlib import Path
p=Path('src/lib/progress.ts').read_text(encoding='utf-8')
a=Path('src/AppRoot.tsx').read_text(encoding='utf-8')
assert "answers: Object.create(null) as Progress['answers']" in p
assert "days: Object.create(null) as Progress['days']" in p
assert 'answers:Object.assign(Object.create(null),p.answers,{[id]:' in a
assert a.count('days:Object.assign(Object.create(null),p.days,{[d]:')==2
assert 'v1.0.44（試作版）' in a
print('5/5 safe-write invariants passed')
