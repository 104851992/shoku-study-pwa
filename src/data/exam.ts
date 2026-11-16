import type { Grade } from './questions';

export const GRADE_INFO: Record<Grade, { name: string; color: string; categoryNames: string[]; questions: string; passing: string; format: string }> = {
  3: {
    name: '3級', color: '#25704A',
    categoryNames: ['体を育もう','知を育もう','徳を育もう','才を育もう'],
    questions: '45問 / 90分', passing: '27問以上', format: '五肢択一',
  },
  2: {
    name: '2級', color: '#8D4F1C',
    categoryNames: ['ウエルネス上手になろう','もてなし上手になろう','買い物上手になろう','段取り上手になろう','生き方上手になろう','やりくり上手になろう'],
    questions: '50問 / 90分', passing: '31問以上', format: '六肢択一',
  },
  1: {
    name: '1級', color: '#684495',
    categoryNames: ['栄養と健康','食文化と食習慣','食品学','衛生管理','食マーケット','社会生活'],
    questions: '選択42問＋記述13問 / 90分', passing: '選択28問以上＋記述8問以上、合計36問以上', format: '六肢択一＋記述',
  },
};

export const OFFICIAL_LINKS = [
  {label: '公式試験概要・日程', url: 'https://flanet.jp/juken/index.html'},
  {label: '公式カリキュラム', url: 'https://flanet.jp/juken/curriculum.html'},
  {label: '3級 公式チャレンジ問題', url: 'https://flanet.jp/juken/mogi3.html'},
  {label: '2級 公式チャレンジ問題', url: 'https://flanet.jp/juken/mogi2.html'},
  {label: '公式対策問題集', url: 'https://flanet.jp/shoseki/past.html'},
  {label: '1級検定 公式案内', url: 'https://shoku-ad.jp/kentei1/'},
];
