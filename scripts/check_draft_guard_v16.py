from pathlib import Path
root=Path(__file__).resolve().parents[1]
p=(root/'src/lib/progress.ts').read_text(encoding='utf-8')
a=(root/'src/AppRoot.tsx').read_text(encoding='utf-8')
assert "if(raw===null)return null" in p  # Empty stored strings are corrupt, not absent.
assert "throw new Error('Invalid saved session draft; original data preserved')" in p
assert 'const draftReadOk=useRef(false)' in a
assert "if(d.status==='fulfilled')draftReadOk.current=true" in a
assert '!draftReadOk.current' in a
assert "if(d.status==='fulfilled' && d.value)" in a
print('PASS: invalid draft cannot trigger autosave deletion (static checks)')
