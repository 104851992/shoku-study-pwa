"""Backward-compatible test entrypoint: v125 mix superseded by v126."""
import pathlib,runpy
runpy.run_path(str(pathlib.Path(__file__).with_name('check_grade3_deep_v126.py')),run_name='__main__')
