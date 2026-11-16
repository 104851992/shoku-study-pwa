"""Ensure v124 count and compatibility; no claim of factual correctness."""
import json,pathlib,collections
p=pathlib.Path(__file__).resolve().parents[1]/'src/data/questions.ts'
s=p.read_text(encoding='utf-8'); q=json.loads(s[s.index('= [')+2:s.rindex('];')+1]);
ct=collections.Counter(x['grade'] for x in q)
assert ct=={3:500,2:137,1:102},ct
assert len(q)==739 and len({x['id'] for x in q})==739
assert len([x for x in q if x['id'].startswith('EXT-3-')])==233
assert all(x['source']=='original' and x['reviewStatus']=='draft_review' for x in q)
print('GRADE3_500: PASS | 3級 500, 2級 137, 1級 102; all draft_review')
