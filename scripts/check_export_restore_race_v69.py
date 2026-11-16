from pathlib import Path
s=Path('src/AppRoot.tsx').read_text(encoding='utf-8')
export=s[s.index('  async function exportBackup()'):s.index('  // Read-only backup inspection:')]
restore=s[s.index('  function restoreBackupOnWeb()'):s.index('  function discardDraft()')]
assert 'const exportLocked=useRef(false)' in s
assert export.index('exportLocked.current=true') < export.index('await saveChain.current')
assert export.index('await draftChain.current') < export.rindex('if(restoreLocked.current)') < export.index('const backup=await createBackup()')
assert 'finally{exportLocked.current=false;}' in export
assert restore.index('if(exportLocked.current)') < restore.index('restoreLocked.current=true')
assert restore.index('if(restoreLocked.current)return;',restore.index('if(exportLocked.current)')) < restore.index('restoreLocked.current=true')
print('PASS: export and restore mutually exclude concurrent storage operations (static control-flow assertions)')
