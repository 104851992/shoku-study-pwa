import json
import shutil
import tempfile
import unittest
from pathlib import Path
from check_manifest_assets_v90 import ROOT, audit

class ManifestAuditTests(unittest.TestCase):
    def setUp(self):
        self.tmp = tempfile.TemporaryDirectory()
        self.root = Path(self.tmp.name)
        shutil.copytree(ROOT / 'public', self.root / 'public')

    def tearDown(self):
        self.tmp.cleanup()

    def test_current(self):
        self.assertEqual(audit(self.root), [])

    def test_wrong_dimensions(self):
        path = self.root / 'public/manifest.webmanifest'
        m = json.loads(path.read_text(encoding='utf-8'))
        m['icons'][0]['sizes'] = '256x256'
        path.write_text(json.dumps(m), encoding='utf-8')
        self.assertTrue(any('mismatch' in e for e in audit(self.root)))

    def test_missing_icon(self):
        (self.root / 'public/icon-512.png').unlink()
        self.assertTrue(any('missing icon' in e for e in audit(self.root)))

    def test_bad_png(self):
        (self.root / 'public/icon-192.png').write_bytes(b'bad')
        self.assertTrue(any('PNG header' in e for e in audit(self.root)))

    def test_unsafe_path(self):
        path = self.root / 'public/manifest.webmanifest'
        m = json.loads(path.read_text(encoding='utf-8'))
        m['icons'][0]['src'] = '/../secret.png'
        path.write_text(json.dumps(m), encoding='utf-8')
        self.assertTrue(any('unsafe icon path' in e for e in audit(self.root)))

if __name__ == '__main__':
    unittest.main()
