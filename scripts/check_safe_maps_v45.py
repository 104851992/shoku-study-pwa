from pathlib import Path
import re
p=Path('src/lib/progress.ts').read_text(encoding='utf-8')
assert re.search(r"const answers:Progress\['answers'\]=Object\.create\(null\)",p)
assert re.search(r"const days:Progress\['days'\]=Object\.create\(null\)",p)
assert 'answers[id]=r as AnswerRecord' in p
assert 'days[date]=d as DayRecord' in p
assert "@shoku_study/progress_v1" in p and "@shoku_study/session_draft_v1" in p
print('5/5 safe map invariants passed')
