#!/usr/bin/env python3
"""Validate install metadata and actual PNG icon dimensions without dependencies."""
import json
import struct
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def audit(root=ROOT):
    public = root / 'public'
    manifest = json.loads((public / 'manifest.webmanifest').read_text(encoding='utf-8'))
    errors = []
    if manifest.get('start_url') != '/' or manifest.get('scope') != '/':
        errors.append('start_url/scope must remain root for the current SW shell')
    if manifest.get('display') not in ('standalone', 'fullscreen', 'minimal-ui'):
        errors.append('manifest display is not install-oriented')
    seen = set()
    for icon in manifest.get('icons', []):
        src = icon.get('src', '')
        if not src.startswith('/') or '..' in src or not src.endswith('.png'):
            errors.append(f'unsafe icon path: {src!r}')
            continue
        file = public / src.lstrip('/')
        if not file.is_file():
            errors.append(f'missing icon: {src}')
            continue
        data = file.read_bytes()
        if len(data) < 24 or data[:8] != b'\x89PNG\r\n\x1a\n' or data[12:16] != b'IHDR':
            errors.append(f'not a valid PNG header: {src}')
            continue
        w, h = struct.unpack('>II', data[16:24])
        if icon.get('sizes') != f'{w}x{h}' or icon.get('type') != 'image/png':
            errors.append(f'icon metadata mismatch: {src}: actual {w}x{h}')
        seen.add((w, h))
    if not {(192, 192), (512, 512)}.issubset(seen):
        errors.append('missing required 192x192 or 512x512 icon')
    sw = (public / 'sw.js').read_text(encoding='utf-8')
    for asset in ('/manifest.webmanifest', '/icon-192.png', '/icon-512.png'):
        if asset not in sw:
            errors.append(f'install shell does not reference {asset}')
    return errors


if __name__ == '__main__':
    issues = audit()
    for issue in issues:
        print('ERROR:', issue)
    print(f'Manifest and PNG asset audit: {len(issues)} errors')
    raise SystemExit(bool(issues))
