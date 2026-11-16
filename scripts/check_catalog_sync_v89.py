"""Check that the published review catalog mirrors the canonical draft bank."""
import csv
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def audit(questions, rows):
    issues = []
    if len(questions) != len(rows):
        issues.append(f'row count: bank={len(questions)} catalog={len(rows)}')
    bank_ids = [q['id'] for q in questions]
    catalog_ids = [r.get('ID', '') for r in rows]
    if len(set(catalog_ids)) != len(catalog_ids):
        issues.append('duplicate catalog IDs')
    if bank_ids != catalog_ids:
        issues.append('catalog ID order or membership differs from bank')
    for i, (q, row) in enumerate(zip(questions, rows), 1):
        expected = {
            'ID': q['id'], '級': str(q['grade']), '分野': q['category'],
            '形式': q['kind'], '問題文': q['prompt'],
            '正答（番号）': str(q['answer'] + 1) if q['kind'] == 'choice' else '',
            '出典': q['source'], '校正状況': q['reviewStatus'],
        }
        for key, value in expected.items():
            if row.get(key) != value:
                issues.append(f'row {i} ({q["id"]}) {key}: expected {value!r}, got {row.get(key)!r}')
    return issues


def main():
    source = (ROOT / 'src/data/questions.ts').read_text(encoding='utf-8')
    questions = json.loads(source[source.index('= [') + 2:source.rindex('];') + 1])
    with (ROOT / 'QUESTION_CATALOG.csv').open(encoding='utf-8-sig', newline='') as f:
        rows = list(csv.DictReader(f))
    issues = audit(questions, rows)
    print(f'Catalog sync: bank={len(questions)}, catalog={len(rows)}, errors={len(issues)}')
    for issue in issues[:30]:
        print('ERROR:', issue)
    return 1 if issues else 0


if __name__ == '__main__':
    raise SystemExit(main())
