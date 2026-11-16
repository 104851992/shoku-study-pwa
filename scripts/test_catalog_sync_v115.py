"""Prevent stale public question catalog metadata; no content correctness claim."""
import csv, json, pathlib, sys
root=pathlib.Path(__file__).resolve().parents[1]
s=(root/'src/data/questions.ts').read_text(encoding='utf-8')
questions=json.loads(s[s.index('= [')+2:s.rindex('];')+1])
with (root/'QUESTION_CATALOG.csv').open(encoding='utf-8-sig',newline='') as f:
    rows=list(csv.DictReader(f))
errors=[]
if len(rows)!=len(questions): errors.append(f'row count {len(rows)} != question count {len(questions)}')
by_id={q['id']:q for q in questions}
seen=set()
for row in rows:
    id=row['ID']
    if id in seen: errors.append(f'duplicate catalog ID {id}')
    seen.add(id)
    q=by_id.get(id)
    if q is None: errors.append(f'unknown catalog ID {id}');continue
    fields={'級':str(q['grade']),'分野':q['category'],'形式':q['kind'],'問題文':q['prompt'],
            '正答（番号）':str(q['answer']+1) if q['kind']=='choice' else '',
            '出典':q['source'],'校正状況':q['reviewStatus']}
    for key,expected in fields.items():
        if row.get(key)!=expected: errors.append(f'{id}: {key} mismatch')
for id in by_id.keys()-seen: errors.append(f'missing catalog ID {id}')
print(f'CATALOG SYNC: {len(questions)} source questions, {len(rows)} CSV rows; {len(errors)} errors')
for error in errors[:30]:print('ERROR',error)
sys.exit(bool(errors))
