from pathlib import Path
root=Path(__file__).resolve().parents[1]
progress=(root/'src/lib/progress.ts').read_text(encoding='utf-8')
app=(root/'src/AppRoot.tsx').read_text(encoding='utf-8')
assert 'history:history.slice(0,20)' not in progress, 'Loading truncates saved history'
assert 'history:[result,...p.history].slice(0,20)' not in app, 'Finishing an exam truncates history'
assert 'history:history}' in progress, 'Loading should retain history'
assert 'history:[result,...p.history]' in app, 'Finishing should retain history'
assert 'else {draftReadOk.current=false;setSaveError(true);}' in app, 'Unknown question IDs must block draft autosave'
print('PASS: full history retained; invalid question IDs cannot trigger draft deletion (static checks)')
