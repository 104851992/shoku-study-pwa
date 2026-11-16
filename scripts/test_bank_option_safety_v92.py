"""Mutation tests for the real bank validator; no production question is modified."""
import json,pathlib,re,subprocess,sys,tempfile
root=pathlib.Path(__file__).resolve().parents[1]
source=(root/'src/data/questions.ts').read_text(encoding='utf-8')
start=source.index('= [')+2; end=source.rindex('];')+1
items=json.loads(source[start:end]); choice=next(i for i,q in enumerate(items) if q['kind']=='choice')
validator=(root/'scripts/validate_bank.py').read_text(encoding='utf-8')
scenarios=[
 ('blank option',lambda q:q['options'].__setitem__(0,'  '),'blank/non-text option'),
 ('whitespace duplicate',lambda q:q['options'].__setitem__(1,' '.join(q['options'][0])),'repeated option after whitespace normalization'),
 ('boolean answer',lambda q:q.__setitem__('answer',True),'invalid answer index'),
 ('blank explanation',lambda q:q.__setitem__('explanation',' \t '),'missing explanation'),
]
with tempfile.TemporaryDirectory() as temp:
 base=pathlib.Path(temp); (base/'scripts').mkdir();(base/'src/data').mkdir(parents=True)
 (base/'scripts/validate_bank.py').write_text(validator,encoding='utf-8')
 for name,mutate,expected in scenarios:
  clone=json.loads(json.dumps(items,ensure_ascii=False));mutate(clone[choice]);
  (base/'src/data/questions.ts').write_text(source[:start]+json.dumps(clone,ensure_ascii=False)+source[end:],encoding='utf-8')
  result=subprocess.run([sys.executable,str(base/'scripts/validate_bank.py')],capture_output=True,text=True)
  assert result.returncode!=0 and expected in result.stdout,(name,result.stdout,result.stderr)
  print('PASS',name)
print('PASS 4/4 validator mutation scenarios')
