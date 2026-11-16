"""Static PWA release gate; not a browser/offline functional test."""
import json, pathlib, re, struct, sys
root=pathlib.Path(__file__).resolve().parents[1]
errors=[]
def check(condition,message):
    if not condition: errors.append(message)
manifest=json.loads((root/'public/manifest.webmanifest').read_text(encoding='utf-8'))
check(manifest.get('name')=='食のまなびノート','unexpected app name')
check(manifest.get('display')=='standalone','display not standalone')
check(manifest.get('start_url')=='/','start_url changed')
check(manifest.get('scope')=='/','scope changed')
icons=manifest.get('icons',[])
check(isinstance(icons,list) and len(icons)>=2,'missing icons')
for icon in icons:
    path=icon.get('src','')
    check(path.startswith('/') and '..' not in path,'unsafe icon path: '+path)
    file=root/'public'/path.lstrip('/')
    check(file.is_file(),'missing icon: '+path)
    if file.is_file():
        raw=file.read_bytes()
        check(raw[:8]==b'\x89PNG\r\n\x1a\n','invalid PNG: '+path)
        if len(raw)>=24 and raw[:8]==b'\x89PNG\r\n\x1a\n':
            width,height=struct.unpack('>II',raw[16:24]);expected=icon.get('sizes','')
            check(expected==f'{width}x{height}',f'icon dimensions mismatch: {path} actual {width}x{height}')
        check(icon.get('type')=='image/png','unexpected icon MIME: '+path)
sw=(root/'public/sw.js').read_text(encoding='utf-8')
check("'/manifest.webmanifest'" in sw,'manifest missing from offline shell')
for icon in icons: check(repr(icon['src']) in sw,'icon not referenced by offline shell: '+icon['src'])
check("await self.skipWaiting()" in sw and "await self.clients.claim()" in sw,'SW lifecycle hook missing')
app=(root/'src/AppRoot.tsx').read_text(encoding='utf-8')
check("serviceWorker.register('/sw.js')" in app,'SW registration missing')
for relative in ('src/data/questions.ts','src/lib/backup.ts','src/AppRoot.tsx','public/sw.js','public/manifest.webmanifest'):
    content=(root/relative).read_text(encoding='utf-8')
    check('\ufffd' not in content,'Unicode replacement character in '+relative)
print('PWA release static gate:', 'PASS' if not errors else 'FAIL')
for e in errors: print('ERROR:',e)
print('Checks: manifest, PNG signatures/dimensions, offline shell references, SW registration, UTF-8 text')
print('Limit: does not prove offline availability or installation on a real device')
sys.exit(bool(errors))
