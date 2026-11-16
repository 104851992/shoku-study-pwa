from pathlib import Path
s=Path('src/AppRoot.tsx').read_text(encoding='utf-8')
checks={
 'read only inspection': 'function inspectBackupOnWeb()' in s,
 'validates envelope': 'validateBackupEnvelope(parsed)' in s,
 'file size bound': '5*1024*1024' in s,
 'does not restore': '復元・書き込みは行っていません' in s,
 'file input': "picker.type='file'" in s,
 'visible button': 'バックアップJSONを確認（復元なし・Web版）' in s,
 'no storage write inside inspector': 'AsyncStorage' not in s.split('function inspectBackupOnWeb(){',1)[1].split('  function discardDraft()',1)[0],
}
for name,ok in checks.items(): print(('PASS' if ok else 'FAIL'),name)
assert all(checks.values())
