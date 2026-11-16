from pathlib import Path
p=Path('src/lib/progress.ts').read_text(encoding='utf-8')
b=Path('src/lib/backup.ts').read_text(encoding='utf-8')
a=Path('src/AppRoot.tsx').read_text(encoding='utf-8')
assert 'x.responses.some((r:ExamAnswer,i:number)=>r.id!==x.ids[i])' in p
assert '(x.index!==x.answered&&x.index!==x.answered-1)' in p
assert 'responses.some((item,i)=>(item as Record<string,unknown>).id!==d.ids[i])' in b
assert '(d.index!==d.answered&&d.index!==(d.answered as number)-1)' in b
assert 'v1.0.44（試作版）' in a
print('5/5 draft sequence static checks passed')
