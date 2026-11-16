from pathlib import Path
p=Path('src/lib/progress.ts').read_text(encoding='utf-8')
b=Path('src/lib/backup.ts').read_text(encoding='utf-8')
a=Path('src/AppRoot.tsx').read_text(encoding='utf-8')
assert '!Number.isSafeInteger(x.began)||x.began<=0' in p
assert "typeof d.began!=='number'||!Number.isSafeInteger(d.began)||d.began<=0" in b
assert '@shoku_study/progress_v1' in p and '@shoku_study/session_draft_v1' in p
assert 'v1.0.44（試作版）' in a
print('4/4 draft timestamp and compatibility checks passed')
