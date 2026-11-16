import copy
import unittest
from check_catalog_sync_v89 import audit

Q = {'id':'ORI-3-001','grade':3,'category':'体を育もう','kind':'choice','prompt':'テスト問題', 'answer':4,'source':'original','reviewStatus':'draft_review'}
R = {'ID':'ORI-3-001','級':'3','分野':'体を育もう','形式':'choice','問題文':'テスト問題','正答（番号）':'5','出典':'original','校正状況':'draft_review'}

class CatalogSyncTests(unittest.TestCase):
    def test_valid(self): self.assertEqual(audit([Q],[R]), [])
    def test_answer_drift(self):
        r=copy.copy(R);r['正答（番号）']='4'
        self.assertTrue(audit([Q],[r]))
    def test_provenance_drift(self):
        r=copy.copy(R);r['出典']='official'
        self.assertTrue(audit([Q],[r]))
    def test_missing_row(self): self.assertTrue(audit([Q],[]))
    def test_prompt_drift(self):
        r=copy.copy(R);r['問題文']='別の問題'
        self.assertTrue(audit([Q],[r]))

if __name__=='__main__': unittest.main()
