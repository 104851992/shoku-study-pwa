"""Regression: 500 Grade-3 items, preserved base, 3級 depth mix and answer positions."""
import json,hashlib,collections,pathlib
p=pathlib.Path(__file__).resolve().parents[1]/'src/data/questions.ts'
s=p.read_text('utf8');q=json.loads(s[s.index('= [')+2:s.rindex('];')+1]);
sha=lambda x:hashlib.sha256(json.dumps(x,ensure_ascii=False,sort_keys=True,separators=(',',':')).encode('utf8')).hexdigest()
assert len(q)==739 and len({x['id'] for x in q})==739
assert collections.Counter(x['grade'] for x in q)=={3:500,2:137,1:102}
base=[x for x in q if not x['id'].startswith('EXT-3-')]
new=[x for x in q if x['id'].startswith('EXT-3-')]
assert len(base)==506 and len(new)==233
assert sha(base)=="2c1c36c5170682504d9dd9d5e030b356decf4bc88cbd2283393b4ceacc87138f"
assert sha([(x['id'],x['answer']) for x in new])=="bd958f0eed9068112a1e1d415fc7a6405fd1f4a88cac132f2f2a94acdcc2444c"
assert len([x for x in new if x['prompt'].startswith('【深掘り・')])==94
assert len([x for x in new if x['prompt'].startswith(('【応用・組合せ】','【応用・誤り発見】'))])==107
assert len([x for x in new if x['prompt'].startswith('【応用・') and not x['prompt'].startswith(('【応用・組合せ】','【応用・誤り発見】'))])==32
assert all(x['reviewStatus']=='draft_review' and x['source']=='original' for x in new)
assert all(len(x['options'])==5 and len(set(x['options']))==5 and 0<=x['answer']<5 for x in new)
assert all(len(x['explanation'])>=55 for x in new)
assert all(len(x['explanation'])>=150 for x in new if x['prompt'].startswith('【応用・'))
print('PASS: v126 500 Grade-3; 94 new case analyses + 32 retained applied cases + 107 expanded comparisons; 506 base preserved')
