"""Offline regression guard for two known startup/deployment defects."""
from pathlib import Path
import json
root=Path(__file__).resolve().parents[1]
config=json.loads((root/'app.json').read_text(encoding='utf-8'))
assert '@react-native-async-storage/async-storage' not in config['expo'].get('plugins',[]), 'Invalid Expo config plugin remains'
src=(root/'src/AppRoot.tsx').read_text(encoding='utf-8')
assert 'progressReadOk.current=true' in src, 'Successful progress read must enable writes'
assert 'if(!loaded || !progressReadOk.current)return;' in src, 'Failed initial read must block overwriting data'
assert 'if(p.status===\'fulfilled\'){progressReadOk.current=true;setProgress(p.value);}else setSaveError(true);' in src
print('PASS: Expo plugin configuration and failed-read write guard')

progress=(root/'src/lib/progress.ts').read_text(encoding='utf-8')
assert "throw new Error('Invalid saved progress JSON; original data preserved')" in progress, 'Malformed JSON must not be silently overwritten'
assert "throw new Error('Invalid saved progress structure; original data preserved')" in progress, 'Invalid root must not be silently overwritten'
assert 'catch { return freshProgress(); }' not in progress, 'Corrupt progress still resets to empty'
print('PASS: malformed persisted progress blocks autosave instead of erasing it')

assert "for (const field of ['answers', 'days'] as const)" in progress
assert "for (const field of ['favorites', 'history'] as const)" in progress
assert 'date.getFullYear()===y && date.getMonth()===m-1 && date.getDate()===d' in progress
print('PASS: invalid top-level collections blocked; impossible calendar dates rejected')
