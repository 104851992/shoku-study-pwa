from pathlib import Path
p=(Path(__file__).resolve().parents[1]/'src/lib/progress.ts').read_text(encoding='utf-8')
assert 'if (raw === null) return freshProgress();' in p
assert 'if(raw===null)return null;' in p
assert 'if (!raw) return freshProgress();' not in p
assert 'if(!raw)return null;' not in p
assert "throw new Error('Invalid saved progress JSON; original data preserved')" in p
assert "throw new Error('Invalid saved session draft; original data preserved')" in p
print('PASS: missing keys accepted, empty-string stored records rejected')
