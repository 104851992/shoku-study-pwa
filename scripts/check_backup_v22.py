from pathlib import Path
s=Path('src/lib/backup.ts').read_text(encoding='utf-8')
checks={
 'draft unique question IDs':'new Set(d.ids).size!==d.ids.length',
 'draft grade and mode':'[1,2,3].includes(d.grade as number)',
 'draft timestamp':'Number.isSafeInteger(d.began)',
 'draft answer count':'d.answered!==d.responses.length',
 'draft duplicate responses':'new Set(responses.map(',
 'draft response validity':'typeof r.correct===\'boolean\'',
 'progress answer counters':'a.correct>a.attempts',
 'progress day counters':'(d.correct as number)>(d.answered as number)',
 'progress goal bounds':'(p.dailyGoal as number)>100',
 'no import mutation':'AsyncStorage.multiSet' not in s and 'AsyncStorage.setItem' not in s,
}
for k,v in checks.items():
 ok=v if isinstance(v,bool) else v in s
 print(('PASS' if ok else 'FAIL')+': '+k)
 if not ok: raise SystemExit(1)
