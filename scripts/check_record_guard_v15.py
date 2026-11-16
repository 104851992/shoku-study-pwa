from pathlib import Path
s=(Path(__file__).resolve().parents[1]/'src/lib/progress.ts').read_text(encoding='utf-8')
checks={
 'invalid answer record rejected':'Invalid answer record; original data preserved',
 'invalid answer counters rejected':'Invalid answer counters; original data preserved',
 'invalid day record rejected':'Invalid daily record; original data preserved',
 'invalid day counters rejected':'Invalid daily counters; original data preserved',
 'invalid favorites rejected':'Invalid favorites; original data preserved',
 'invalid history rejected':'Invalid exam history; original data preserved',
 'invalid first date rejected':'Invalid first date; original data preserved',
 'invalid goal rejected':'Invalid daily goal; original data preserved',
 'history preserved on load':'history:history}',
 'storage key unchanged':"'@shoku_study/progress_v1'",
}
for label,needle in checks.items():
 assert needle in s, f'MISSING: {label}'
print('PASS:',len(checks),'static guard checks (not runtime tests)')
