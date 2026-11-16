from pathlib import Path
s=Path('src/AppRoot.tsx').read_text(encoding='utf-8')
checks={
 'export blocked during restore': "async function exportBackup(){\n    if(restoreLocked.current)" in s,
 'draft deletion blocked during restore': 'function discardDraft(){\n    if(restoreLocked.current)return;' in s,
 'reset blocked before dialog': 'function reset() {if(restoreLocked.current)return;' in s,
 'reset blocked after dialog confirmation': "'すべて削除',async()=>{\n      if(restoreLocked.current)return;" in s,
 'restore locks before draining writes': s.index('restoreLocked.current=true;') < s.index('await Promise.all([saveChain.current,draftChain.current]);'),
 'autosave guarded': 'if(!loaded || !progressReadOk.current || restoreLocked.current)return;' in s,
 'draft autosave guarded': 'if(!draftReady || !draftReadOk.current || restoreLocked.current' in s,
}
for name,ok in checks.items():print(('PASS' if ok else 'FAIL'),name)
assert all(checks.values())
print(f'{sum(checks.values())}/{len(checks)} static checks passed')
