from pathlib import Path
root=Path(__file__).resolve().parents[1]
p=(root/'src/lib/progress.ts').read_text(encoding='utf-8')
b=(root/'src/lib/backup.ts').read_text(encoding='utf-8')
checks={
 'history loader checks grade': 'if(q.grade!==h.grade)return false;' in p,
 'backup inspector checks grade': 'if(q.grade!==h.grade)return true;' in b,
 'history loader checks choice bounds': 'a.selected<q.options.length' in p,
 'backup inspector checks choice bounds': '(a.selected as number)>=q.options.length' in b,
 'history loader checks keyed scoring': 'a.correct===(a.selected===q.answer)' in p,
 'backup inspector checks keyed scoring': 'a.correct!==(a.selected===q.answer)' in b,
 'history loader checks written null': ': a.selected===null;' in p,
 'backup inspector checks written null': ': a.selected!==null;' in b,
 'retired question compatibility': 'if(!q)return true;' in p and 'if(!q)return false;' in b,
}
for k,v in checks.items():print(('PASS' if v else 'FAIL'),k)
assert all(checks.values())
print(f'{len(checks)} static assertions passed; not runtime tests')
