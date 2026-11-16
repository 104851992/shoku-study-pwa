"""Structural audit only: does not establish nutritional/medical correctness."""
import collections,json,pathlib,re,sys
root=pathlib.Path(__file__).resolve().parents[1]
s=(root/'src/data/questions.ts').read_text(encoding='utf-8')
items=json.loads(s[s.index('= [')+2:s.rindex('];')+1])
errors=[]; warnings=[]; ids=set(); prompts=set(); counts=collections.Counter()
exp_cats={3:{'体を育もう','知を育もう','徳を育もう','才を育もう'},
2:{'ウエルネス上手になろう','もてなし上手になろう','買い物上手になろう','段取り上手になろう','生き方上手になろう','やりくり上手になろう'},
1:{'栄養と健康','食文化と食習慣','食品学','衛生管理','食マーケット','社会生活'}}
for q in items:
 qid=q.get('id','')
 if qid in ids:errors.append(f'{qid}: duplicated id')
 ids.add(qid)
 g=q.get('grade');kind=q.get('kind');counts[(g,kind)]+=1
 if g not in exp_cats or q.get('category') not in exp_cats[g]:errors.append(f'{qid}: invalid grade/category')
 prompt=re.sub(r'\s+','',q.get('prompt',''))
 if not prompt:errors.append(f'{qid}: empty prompt')
 if (g,prompt) in prompts:errors.append(f'{qid}: duplicate prompt in grade')
 prompts.add((g,prompt))
 if q.get('source')!='original':errors.append(f'{qid}: unexpected source (official must be separately authorized)')
 if q.get('reviewStatus')!='draft_review':warnings.append(f'{qid}: missing draft review flag')
 if kind=='choice':
  ops=q.get('options',[])
  if len(ops)!=(5 if g==3 else 6):errors.append(f'{qid}: wrong options count')
  if any(not isinstance(op,str) or not op.strip() for op in ops):errors.append(f'{qid}: blank/non-text option')
  if all(isinstance(op,str) for op in ops) and len(ops)!=len(set(re.sub(r'\s+','',op) for op in ops)):errors.append(f'{qid}: repeated option after whitespace normalization')
  if type(q.get('answer')) is not int or not 0<=q['answer']<len(ops):errors.append(f'{qid}: invalid answer index')
  if not isinstance(q.get('explanation'),str) or not q['explanation'].strip():errors.append(f'{qid}: missing explanation')
 elif kind=='written':
  if g!=1:errors.append(f'{qid}: written question not grade1')
  if not isinstance(q.get('sample'),str) or not q['sample'].strip() or not q.get('keywords'):errors.append(f'{qid}: empty sample or keywords')
 else:errors.append(f'{qid}: invalid kind {kind}')
print('TOTAL',len(items))
for g in (3,2,1):print(f'GRADE {g}:',sum(n for (grade,_),n in counts.items() if grade==g),'(choice',counts[(g,'choice')],'/ written',counts[(g,'written')],')')
print('ERRORS',len(errors),'WARNINGS',len(warnings))
for e in errors[:50]:print('ERROR:',e)
for w in warnings[:15]:print('WARN:',w)
print('NOTE: Structural checks only; all questions remain draft_review and require subject-matter review before public release.')
sys.exit(1 if errors else 0)
