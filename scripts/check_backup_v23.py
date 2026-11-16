from pathlib import Path
s=Path('src/lib/backup.ts').read_text(encoding='utf-8')
checks={
 'calendar-valid day keys':'if(!validDate(day))return false;',
 'first study date validation':'p.firstDate!==undefined&&!validDate(p.firstDate)',
 'history object validation':'for(const item of p.history as unknown[])',
 'history answer validation':'h.answers.every(validAnswer)',
 'history duplicate answer guard':'new Set(h.answers.map(',
 'history total and correct bounds':'(h.correct as number)>(h.total as number)',
 'history grade and mode':'[1,2,3].includes(h.grade as number)',
 'history date validation':'!validTimestamp(h.at)',
 'no restore writes':'AsyncStorage.setItem' not in s and 'AsyncStorage.multiSet' not in s,
}
for label,needle in checks.items():
 ok=needle if isinstance(needle,bool) else needle in s
 print(('PASS' if ok else 'FAIL')+': '+label)
 if not ok:raise SystemExit(1)
