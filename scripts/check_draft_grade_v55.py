from pathlib import Path
root=Path(__file__).resolve().parents[1]
app=(root/'src/AppRoot.tsx').read_text(encoding='utf-8')
assert 'x.ids.every(id=>questions.some(q=>q.id===id && q.grade===x.grade))' in app
assert 'draftReadOk.current=false;setSaveError(true)' in app
assert 'setSavedSession(x as Session)' in app
print('3/3 draft grade resume guards passed')
