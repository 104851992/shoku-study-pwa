"""Read-only audit of answer-position bias; not a content accuracy review."""
import collections, json, pathlib
root=pathlib.Path(__file__).resolve().parents[1]
s=(root/'src/data/questions.ts').read_text(encoding='utf-8')
items=json.loads(s[s.index('= [')+2:s.rindex('];')+1])
report=['# Answer-position audit v116', '', 'Read-only diagnostic; no question answers or IDs were modified.']
for grade in (3,2,1):
    rows=[q for q in items if q['grade']==grade and q['kind']=='choice']
    n_options=5 if grade==3 else 6
    counts=collections.Counter(q['answer']+1 for q in rows)
    expected=len(rows)/n_options
    report += ['',f'## {grade}級 — {len(rows)} choice questions',
               '| Answer position | Count | Share |', '|---|---:|---:|']
    for pos in range(1,n_options+1):
        report.append(f'| {pos} | {counts[pos]} | {counts[pos]/len(rows):.1%} |')
    low=[pos for pos in range(1,n_options+1) if counts[pos]<expected/2]
    if low:
        report.append(f'**Review priority:** position(s) {low} occur less than half the uniform expectation ({expected:.1f}).')
    else: report.append('No position falls below half the uniform expectation.')
report+=['','This is a statistical warning, not evidence that any keyed answer is wrong. Do not reassign correct answers just to balance counts. If needed, shuffle displayed options and update the keyed index together, after regression tests and compatibility review.']
out=root/'ANSWER_DISTRIBUTION_AUDIT_v116.md'
out.write_text('\n'.join(report)+'\n',encoding='utf-8')
print('ANSWER DISTRIBUTION AUDIT: 493 choice questions, 13 written; report:',out.name)
