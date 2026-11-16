from pathlib import Path
s=Path('src/AppRoot.tsx').read_text(encoding='utf-8')
export=s.split('async function exportBackup(){',1)[1].split('function inspectBackupOnWeb()',1)[0]
restore=s.split('function restoreBackupOnWeb(){',1)[1].split('function discardDraft()',1)[0]
reset=s.split('function reset() {',1)[1].split('function openOfficial(',1)[0]
checks={
 'reset lock declared':'const resetLocked=useRef(false)' in s,
 'export checks reset before storage read':export.index('if(resetLocked.current)')<export.index('const backup=await createBackup()'),
 'restore checks reset before locking':restore.index('if(resetLocked.current)')<restore.index('restoreLocked.current=true'),
 'reset checks export before dialog':reset.index('if(exportLocked.current||resetLocked.current)')<reset.index('confirmAction('),
 'reset rechecks export after dialog':reset.count('if(exportLocked.current||resetLocked.current)')>=2,
 'reset locks before first await':reset.index('resetLocked.current=true')<reset.index('await saveChain.current'),
 'reset releases lock in finally':'finally{resetLocked.current=false;}' in reset,
}
for k,v in checks.items():print(('PASS' if v else 'FAIL'),k)
assert all(checks.values())
print(f'{len(checks)}/{len(checks)} passed')
