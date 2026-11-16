// Guard against accidental removal of Web restore UI or misleading disabled-UI claims.
const fs=require('fs'),path=require('path'),assert=require('assert');
const root=path.resolve(__dirname,'..');
const ui=fs.readFileSync(path.join(root,'src/AppRoot.tsx'),'utf8');
const service=fs.readFileSync(path.join(root,'src/lib/backup.ts'),'utf8');
const tests=[
 ['Web restore action exists',()=>assert.match(ui,/function restoreBackupOnWeb\(\)/)],
 ['Restore action is reachable in settings',()=>assert.match(ui,/<BigButton title="バックアップJSONから復元（上書き・Web版）" secondary onPress=\{restoreBackupOnWeb\}\/>/)],
 ['Explicit confirmation precedes destructive call',()=>{const start=ui.indexOf('function restoreBackupOnWeb()');const end=ui.indexOf('function discardDraft()',start);const code=ui.slice(start,end);assert(start>=0&&end>start);assert(code.indexOf('window.confirm(')>=0);assert(code.indexOf('window.confirm(')<code.indexOf('await restoreBackupAfterConfirmation(data)'));}],
 ['Autosaves locked and drained before restore',()=>{const code=ui.slice(ui.indexOf('function restoreBackupOnWeb()'),ui.indexOf('function discardDraft()'));assert(code.indexOf('restoreLocked.current=true')<code.indexOf('await Promise.all([saveChain.current,draftChain.current])'));assert(code.indexOf('await Promise.all([saveChain.current,draftChain.current])')<code.indexOf('await restoreBackupAfterConfirmation(data)'));}],
 ['Service provides validated restore',()=>{assert.match(service,/export async function restoreBackupAfterConfirmation/);assert.match(service,/if\(!validateBackupEnvelope\(data\)\)throw/)}],
 ['No obsolete disabled UI comment',()=>assert.doesNotMatch(service,/UI restore remains disabled/)]
];
for(const [name,run] of tests){run();console.log('PASS '+name)}
console.log('Restore UI wiring: '+tests.length+'/'+tests.length+' passed');
