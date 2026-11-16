from pathlib import Path
s=Path('src/AppRoot.tsx').read_text(encoding='utf-8')
checks={
 'restore service imported':'restoreBackupAfterConfirmation, validateBackupEnvelope' in s,
 'web-only picker':"picker.type='file';picker.accept='.json,application/json'" in s,
 'payload validated':'if(!validateBackupEnvelope(data))throw' in s,
 'user confirmation':"const approved=window.confirm(" in s,
 'autosave lock': 'restoreLocked.current=true;' in s,
 'generation invalidation':'saveGeneration.current++;draftGeneration.current++;' in s,
 'pending writes drained':'await Promise.all([saveChain.current,draftChain.current]);' in s,
 'restore called':'await restoreBackupAfterConfirmation(data);' in s,
 'hard reload':'window.location.reload();' in s,
 'settings action':'onPress={restoreBackupOnWeb}' in s,
 'save effects guarded':'!progressReadOk.current || restoreLocked.current' in s and '!draftReadOk.current || restoreLocked.current' in s,
}
for k,v in checks.items(): print(('PASS' if v else 'FAIL'),k)
assert all(checks.values())
print(f'UI static guards: {sum(checks.values())}/{len(checks)} passed')
