"""UTF-8 and Unicode hygiene audit; not a factual review of question content."""
from pathlib import Path
import json, re, sys, unicodedata
ROOT = Path(__file__).resolve().parents[1]
TARGETS = [ROOT/'src/data/questions.ts', ROOT/'src/AppRoot.tsx', ROOT/'src/lib/backup.ts', ROOT/'public/manifest.webmanifest']
BAD = {'\ufffd':'replacement character', '\ufeff':'BOM in content', '\u200b':'zero-width space', '\u200c':'zero-width non-joiner', '\u200d':'zero-width joiner'}

def inspect(text, name):
    problems=[]
    if text.startswith('\ufeff'): problems.append(f'{name}: UTF-8 BOM')
    for char, label in BAD.items():
        if char in text: problems.append(f'{name}: {label} ({text.count(char)})')
    for idx,line in enumerate(text.splitlines(),1):
        for char in line:
            cat=unicodedata.category(char)
            if cat=='Cc' and char not in '\t\r\n': problems.append(f'{name}:{idx}: control U+{ord(char):04X}')
    return problems

def audit_question_fields(text):
    items=json.loads(text[text.index('= [')+2:text.rindex('];')+1]); problems=[]
    for q in items:
        fields=['category','prompt','explanation'] if q['kind']=='choice' else ['category','prompt','sample']
        fields += ['options'] if q['kind']=='choice' else ['keywords']
        for field in fields:
            val=q[field]
            for i,s in enumerate(val if isinstance(val,list) else [val]):
                problems.extend(inspect(s, f"{q['id']}.{field}[{i}]"))
                if not s.strip(): problems.append(f"{q['id']}.{field}[{i}]: blank")
    return len(items),problems

def main():
    problems=[]
    for path in TARGETS:
        try: text=path.read_bytes().decode('utf-8',errors='strict')
        except (UnicodeDecodeError,OSError) as exc:
            problems.append(f'{path.relative_to(ROOT)}: cannot read strict UTF-8: {exc}');continue
        problems.extend(inspect(text,str(path.relative_to(ROOT))))
        if path.name=='questions.ts':
            try: count, extra=audit_question_fields(text);problems.extend(extra)
            except (ValueError,KeyError,TypeError) as exc: problems.append(f'question parsing failed: {exc}')
    print(f'UTF-8/Unicode audit: {len(TARGETS)} files; question entries: {locals().get("count", "unknown")}; issues: {len(problems)}')
    for p in problems[:40]: print('ERROR:',p)
    print('Scope: encoding/invisible characters only, not subject-matter correctness.')
    return int(bool(problems))
if __name__=='__main__':sys.exit(main())
