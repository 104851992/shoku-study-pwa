import unittest
from audit_japanese_text_v88 import inspect
class AuditTests(unittest.TestCase):
 def test_normal_japanese(self):self.assertEqual(inspect('食品衛生と栄養。','test'),[])
 def test_replacement_character(self):self.assertTrue(inspect('食品�生','test'))
 def test_zero_width_space(self):self.assertTrue(inspect('食品\u200b衛生','test'))
 def test_control_character(self):self.assertTrue(inspect('食品\x00衛生','test'))
 def test_bom(self):self.assertTrue(inspect('\ufeff食品衛生','test'))
if __name__=='__main__':unittest.main()
