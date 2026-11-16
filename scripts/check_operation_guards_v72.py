from pathlib import Path
s=Path('src/AppRoot.tsx').read_text(encoding='utf-8')
checks={
 'progress queued write blocked during reset':'generation!==saveGeneration.current || restoreLocked.current || resetLocked.current' in s,
 'draft queued write blocked during reset':'generation!==draftGeneration.current || restoreLocked.current || resetLocked.current' in s,
 'discard draft guarded during export/reset':'function discardDraft(){\n    if(restoreLocked.current)return;\n    if(resetLocked.current || exportLocked.current)return;' in s,
 'restore file picker guarded during export/reset':'function restoreBackupOnWeb(){' in s and 'if(restoreLocked.current || resetLocked.current || exportLocked.current)return;' in s,
 'reset generation invalidation preserved':'saveGeneration.current+=1;draftGeneration.current+=1;' in s,
}
for k,v in checks.items(): print(('PASS' if v else 'FAIL')+' '+k)
if not all(checks.values()): raise SystemExit(1)
