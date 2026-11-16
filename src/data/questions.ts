export type Grade = 1 | 2 | 3;
export type ChoiceQuestion = { id:string; grade:Grade; category:string; kind:"choice"; prompt:string; options:string[]; answer:number; explanation:string; source:"original"; reviewStatus:"draft_review" };
export type WrittenQuestion = { id:string; grade:1; category:string; kind:"written"; prompt:string; sample:string; keywords:string[]; source:"original"; reviewStatus:"draft_review" };
export type Question = ChoiceQuestion | WrittenQuestion;
export const questions: Question[] = [
  {
    "id": "ORI-3-001",
    "grade": 3,
    "category": "体を育もう",
    "kind": "choice",
    "prompt": "主食として一般的に分類される食品はどれか。",
    "options": [
      "ほうれん草のおひたし",
      "ヨーグルト",
      "冷ややっこ",
      "焼き魚",
      "ご飯"
    ],
    "answer": 4,
    "explanation": "ご飯やパン、麺類は主に炭水化物を供給する主食です。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "ORI-3-002",
    "grade": 3,
    "category": "体を育もう",
    "kind": "choice",
    "prompt": "主菜の例として最も適切な料理はどれか。",
    "options": [
      "野菜サラダ",
      "わかめの味噌汁",
      "ご飯",
      "果物",
      "焼き魚"
    ],
    "answer": 4,
    "explanation": "主菜は魚・肉・卵・大豆製品などを中心とした料理です。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "ORI-3-003",
    "grade": 3,
    "category": "体を育もう",
    "kind": "choice",
    "prompt": "副菜の役割について適切なものはどれか。",
    "options": [
      "水分摂取を不要にする",
      "野菜などからビタミンや食物繊維を補う",
      "たんぱく質の摂取をすべて置き換える",
      "主食を必ず抜く",
      "エネルギー源を糖質だけに限定する"
    ],
    "answer": 1,
    "explanation": "副菜は野菜、海藻、きのこなどを取り入れ、食事のバランスを助けます。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "ORI-3-004",
    "grade": 3,
    "category": "体を育もう",
    "kind": "choice",
    "prompt": "骨や歯の形成に重要なミネラルはどれか。",
    "options": [
      "亜鉛",
      "ヨウ素",
      "鉄",
      "カルシウム",
      "ナトリウム"
    ],
    "answer": 3,
    "explanation": "カルシウムは骨と歯の主要な構成成分です。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "ORI-3-005",
    "grade": 3,
    "category": "体を育もう",
    "kind": "choice",
    "prompt": "カルシウムの吸収を助ける栄養素はどれか。",
    "options": [
      "ビタミンC",
      "ビタミンKだけ",
      "ナイアシン",
      "ビタミンD",
      "ビタミンB1"
    ],
    "answer": 3,
    "explanation": "ビタミンDは小腸でのカルシウム吸収を促進します。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "ORI-3-006",
    "grade": 3,
    "category": "体を育もう",
    "kind": "choice",
    "prompt": "赤血球のヘモグロビンの材料となるミネラルはどれか。",
    "options": [
      "フッ素",
      "カルシウム",
      "ヨウ素",
      "鉄",
      "カリウム"
    ],
    "answer": 3,
    "explanation": "鉄はヘモグロビンの構成成分で、酸素の運搬に関わります。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "ORI-3-007",
    "grade": 3,
    "category": "体を育もう",
    "kind": "choice",
    "prompt": "食物繊維について適切な説明はどれか。",
    "options": [
      "エネルギー源として脂質と同じ働きだけをする",
      "排便を整える働きなどがある",
      "食事から完全に除くべきである",
      "すべて小腸で消化される",
      "水分を一切含まない"
    ],
    "answer": 1,
    "explanation": "食物繊維には便通の改善や食後血糖の上昇を緩やかにする働きなどがあります。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "ORI-3-008",
    "grade": 3,
    "category": "体を育もう",
    "kind": "choice",
    "prompt": "運動時の水分補給として適切な行動はどれか。",
    "options": [
      "水分は一日一回だけ飲む",
      "気温が高くても水分は不要である",
      "汗をかいた後も水分を控える",
      "運動前後は必ず食事を抜く",
      "のどの渇きに加えて活動量や気温も考慮して補給する"
    ],
    "answer": 4,
    "explanation": "発汗量や環境に応じたこまめな水分補給が大切です。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "ORI-3-009",
    "grade": 3,
    "category": "体を育もう",
    "kind": "choice",
    "prompt": "健康づくりの基本として適切な組合せはどれか。",
    "options": [
      "絶食・過労・睡眠不足",
      "運動・脱水・喫煙",
      "栄養・喫煙・徹夜",
      "栄養・運動・休養",
      "休養・暴飲・暴食"
    ],
    "answer": 3,
    "explanation": "食生活だけでなく、適度な運動と十分な休養も健康維持に重要です。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "ORI-3-010",
    "grade": 3,
    "category": "体を育もう",
    "kind": "choice",
    "prompt": "脂質1gが供給するエネルギーの概数はどれか。",
    "options": [
      "6kcal",
      "4kcal",
      "9kcal",
      "2kcal",
      "1kcal"
    ],
    "answer": 2,
    "explanation": "脂質は約9kcal/g、たんぱく質と糖質は約4kcal/gです。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "ORI-3-011",
    "grade": 3,
    "category": "体を育もう",
    "kind": "choice",
    "prompt": "たんぱく質1gが供給するエネルギーの概数はどれか。",
    "options": [
      "9kcal",
      "0kcal",
      "4kcal",
      "2kcal",
      "7kcal"
    ],
    "answer": 2,
    "explanation": "たんぱく質は約4kcal/gとしてエネルギー計算に使われます。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "ORI-3-012",
    "grade": 3,
    "category": "体を育もう",
    "kind": "choice",
    "prompt": "十分な睡眠が健康づくりに役立つ理由として適切なものはどれか。",
    "options": [
      "運動と食事が一切不要になる",
      "食中毒を完全に防ぐ",
      "心身の回復や生活リズムの維持に関係する",
      "睡眠不足の影響が必ずなくなる",
      "栄養素を体内で全く必要としなくなる"
    ],
    "answer": 2,
    "explanation": "睡眠は身体と心の健康に関係する重要な生活習慣です。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "ORI-3-013",
    "grade": 3,
    "category": "知を育もう",
    "kind": "choice",
    "prompt": "端午の節句の行事食としてよく知られるものはどれか。",
    "options": [
      "年越しそば",
      "おせち料理",
      "月見団子",
      "七草粥",
      "柏餅"
    ],
    "answer": 4,
    "explanation": "柏餅は端午の節句に親しまれている行事食です。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "ORI-3-014",
    "grade": 3,
    "category": "知を育もう",
    "kind": "choice",
    "prompt": "一般に1月7日に食べる行事食はどれか。",
    "options": [
      "ぼたもち",
      "七草粥",
      "雑煮",
      "柏餅",
      "ちらし寿司"
    ],
    "answer": 1,
    "explanation": "七草粥は人日の節句に食べる習慣があります。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "ORI-3-015",
    "grade": 3,
    "category": "知を育もう",
    "kind": "choice",
    "prompt": "日本の食文化における「一汁三菜」の説明で適切なものはどれか。",
    "options": [
      "肉料理だけ4品",
      "甘味1品と飲み物3品",
      "主食1品と汁物3品だけ",
      "汁物1品とおかず3品の組合せ",
      "汁物3品とおかず1品"
    ],
    "answer": 3,
    "explanation": "一汁三菜は主食に加えて汁物1品と主菜・副菜など3品を組み合わせる基本形です。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "ORI-3-016",
    "grade": 3,
    "category": "知を育もう",
    "kind": "choice",
    "prompt": "「地産地消」の説明で適切なものはどれか。",
    "options": [
      "食品を必ず長距離輸送する",
      "旬に関係なく同じものだけ食べる",
      "すべての食材を海外から輸入する",
      "家庭での調理をすべて外部に任せる",
      "地域で生産されたものを地域で消費する"
    ],
    "answer": 4,
    "explanation": "地域の食材を地域で活用する取組を地産地消といいます。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "ORI-3-017",
    "grade": 3,
    "category": "知を育もう",
    "kind": "choice",
    "prompt": "食材の「旬」に関する説明として適切なものはどれか。",
    "options": [
      "必ず輸入される季節",
      "その食材が季節的に出回りやすくなる時期",
      "加工食品だけの販売期間",
      "すべての食品の消費期限",
      "食後30分のこと"
    ],
    "answer": 1,
    "explanation": "旬には季節感や地域の食文化が表れます。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "ORI-3-018",
    "grade": 3,
    "category": "知を育もう",
    "kind": "choice",
    "prompt": "昆布のうま味に関わる代表的な成分はどれか。",
    "options": [
      "カフェイン",
      "グルタミン酸",
      "乳糖",
      "ショ糖",
      "食塩だけ"
    ],
    "answer": 1,
    "explanation": "昆布だしのうま味にはグルタミン酸が大きく関わります。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "ORI-3-019",
    "grade": 3,
    "category": "知を育もう",
    "kind": "choice",
    "prompt": "かつお節のうま味に関わる代表的な成分はどれか。",
    "options": [
      "乳糖",
      "フルクトース",
      "クエン酸",
      "イノシン酸",
      "カゼイン"
    ],
    "answer": 3,
    "explanation": "かつお節にはイノシン酸などのうま味成分が含まれます。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "ORI-3-020",
    "grade": 3,
    "category": "知を育もう",
    "kind": "choice",
    "prompt": "和食の箸づかいで一般に避ける作法はどれか。",
    "options": [
      "器を丁寧に扱う",
      "箸置きを使う",
      "正しい持ち方を心掛ける",
      "箸から箸へ食べ物を渡す",
      "食事前に箸をそろえる"
    ],
    "answer": 3,
    "explanation": "箸渡しは葬送儀礼を連想させるため、食事のマナーとして避けられます。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "ORI-3-021",
    "grade": 3,
    "category": "知を育もう",
    "kind": "choice",
    "prompt": "食べ物のおいしさを感じる要素として適切なものはどれか。",
    "options": [
      "栄養成分表の数値だけ",
      "カロリーだけ",
      "価格だけ",
      "色だけ",
      "味・香り・見た目・食感・経験など"
    ],
    "answer": 4,
    "explanation": "おいしさは五感や経験、食習慣など多様な要因に左右されます。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "ORI-3-022",
    "grade": 3,
    "category": "知を育もう",
    "kind": "choice",
    "prompt": "祝い事でよく用いられる料理はどれか。",
    "options": [
      "七草粥だけ",
      "離乳食だけ",
      "病人食だけ",
      "保存食だけ",
      "赤飯"
    ],
    "answer": 4,
    "explanation": "赤飯は慶事の行事食として広く親しまれています。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "ORI-3-023",
    "grade": 3,
    "category": "知を育もう",
    "kind": "choice",
    "prompt": "食事の盛りつけで見た目を整える工夫はどれか。",
    "options": [
      "器の大きさを一切考えない",
      "すべての料理を同じ色にする",
      "彩りや器とのバランスを考える",
      "食品を机に直接置く",
      "盛りつけを常に山盛りにする"
    ],
    "answer": 2,
    "explanation": "色、形、余白なども食事の楽しさに関わります。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "ORI-3-024",
    "grade": 3,
    "category": "知を育もう",
    "kind": "choice",
    "prompt": "正月に食べる伝統的な料理はどれか。",
    "options": [
      "ひなあられだけ",
      "柏餅だけ",
      "月見団子だけ",
      "おせち料理",
      "七草粥だけ"
    ],
    "answer": 3,
    "explanation": "おせち料理は正月を祝う伝統料理です。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "ORI-3-025",
    "grade": 3,
    "category": "徳を育もう",
    "kind": "choice",
    "prompt": "食品の「消費期限」が意味するものとして適切なのはどれか。",
    "options": [
      "おいしさだけの目安",
      "必ず腐敗臭がする日",
      "表示された保存方法で保存した未開封品を安全に食べられる期限の目安",
      "開封後も無期限に安全な日",
      "製造開始日"
    ],
    "answer": 2,
    "explanation": "消費期限は傷みやすい食品に表示される安全性に関係した期限です。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "ORI-3-026",
    "grade": 3,
    "category": "徳を育もう",
    "kind": "choice",
    "prompt": "食品の「賞味期限」が意味するものとして適切なのはどれか。",
    "options": [
      "未開封で適切に保存した際においしく食べられる期限の目安",
      "どの食品にも消費期限より短く付ける",
      "開封後も必ず同じ期限になる",
      "法律上販売できない日だけを示す",
      "その日に必ず食中毒になる"
    ],
    "answer": 0,
    "explanation": "賞味期限は品質が保たれ、おいしく食べられる目安です。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "ORI-3-027",
    "grade": 3,
    "category": "徳を育もう",
    "kind": "choice",
    "prompt": "一般的な加工食品の原材料名表示の順番について適切なのはどれか。",
    "options": [
      "アルファベット順だけ",
      "産地が近い順",
      "栄養価が高い順",
      "色が濃い順",
      "原則として使用した重量の多い順"
    ],
    "answer": 4,
    "explanation": "原材料名は原則として重量の割合の高いものから表示します。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "ORI-3-028",
    "grade": 3,
    "category": "徳を育もう",
    "kind": "choice",
    "prompt": "食物アレルギーのある人が食品を選ぶ際に重視すべき情報はどれか。",
    "options": [
      "写真だけ",
      "メーカー名だけ",
      "原材料とアレルゲンの表示",
      "値段だけ",
      "パッケージの色だけ"
    ],
    "answer": 2,
    "explanation": "特定原材料等の表示や注意書きを確認することが安全な選択につながります。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "ORI-3-029",
    "grade": 3,
    "category": "徳を育もう",
    "kind": "choice",
    "prompt": "栄養成分表示に一般に記載される項目はどれか。",
    "options": [
      "店舗の来客数",
      "購入者の年齢",
      "生産者の星座",
      "食塩相当量",
      "調理者の身長"
    ],
    "answer": 3,
    "explanation": "食品の栄養成分表示にはエネルギーや主要栄養素、食塩相当量などが記載されます。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "ORI-3-030",
    "grade": 3,
    "category": "徳を育もう",
    "kind": "choice",
    "prompt": "有機JASマークについて適切な説明はどれか。",
    "options": [
      "定められた有機JASの基準に適合した商品に付けられる",
      "すべての国産食品に必須である",
      "輸入食品には絶対に付かない",
      "味の良さを数値で保証する",
      "賞味期限が長いことだけを示す"
    ],
    "answer": 0,
    "explanation": "有機JASマークは認証を受けた有機農産物などで使われます。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "ORI-3-031",
    "grade": 3,
    "category": "徳を育もう",
    "kind": "choice",
    "prompt": "食品表示の大切な役割として適切なものはどれか。",
    "options": [
      "すべての食品の味を同じにする",
      "消費期限を延長する",
      "商品価格を必ず下げる",
      "消費者が内容や安全性を判断する手助けになる",
      "調理を一切不要にする"
    ],
    "answer": 3,
    "explanation": "食品表示は購入や利用時に必要な情報を消費者に提供します。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "ORI-3-032",
    "grade": 3,
    "category": "徳を育もう",
    "kind": "choice",
    "prompt": "アレルゲン表示を確認するときの適切な行動はどれか。",
    "options": [
      "パッケージだけで判断する",
      "原材料の変更を気にしない",
      "アレルギーがあっても他人の経験だけで判断する",
      "以前食べられた商品は必ず表示不要",
      "購入のたびに最新の表示を確かめる"
    ],
    "answer": 4,
    "explanation": "配合の変更があり得るため、毎回表示を確認することが重要です。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "ORI-3-033",
    "grade": 3,
    "category": "徳を育もう",
    "kind": "choice",
    "prompt": "食品を選ぶ際の「原産地」情報とはどのようなものか。",
    "options": [
      "食品の温度だけ",
      "食品や原料が生産された場所などに関する情報",
      "販売店の営業時間",
      "商品を買った曜日",
      "栄養素の総量だけ"
    ],
    "answer": 1,
    "explanation": "原産地は食品や原材料がどこで生産されたかを示す情報です。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "ORI-3-034",
    "grade": 3,
    "category": "徳を育もう",
    "kind": "choice",
    "prompt": "商品に書かれた宣伝文句を理解する際に望ましい姿勢はどれか。",
    "options": [
      "宣伝文句はすべて法的な保証とみなす",
      "原材料を見ない",
      "高価な商品は必ず健康に良いと判断する",
      "写真だけで食品安全性を判断する",
      "公的な表示と広告表現を区別して確認する"
    ],
    "answer": 4,
    "explanation": "「天然」「厳選」などの宣伝表現だけで安全性や品質を決めつけないことが大切です。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "ORI-3-035",
    "grade": 3,
    "category": "徳を育もう",
    "kind": "choice",
    "prompt": "未開封の状態を前提とする期限表示を活用するとき、開封後はどうするべきか。",
    "options": [
      "表示を読み直す必要はない",
      "常温放置してよい",
      "匂いだけで完全に安全を判断できる",
      "表示された期限にかかわらず早めに消費する",
      "開封後も必ず同じ日まで保存できる"
    ],
    "answer": 3,
    "explanation": "開封後は品質が変化するため、保存条件に注意して早めに使い切ります。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "ORI-3-036",
    "grade": 3,
    "category": "徳を育もう",
    "kind": "choice",
    "prompt": "食品表示で「内容量」が示すものはどれか。",
    "options": [
      "店員の人数",
      "店舗の面積",
      "商品の中身の量",
      "調理時間の上限",
      "輸送に使った燃料の量"
    ],
    "answer": 2,
    "explanation": "内容量は正味の量など商品の中身の数量を示します。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "ORI-3-037",
    "grade": 3,
    "category": "才を育もう",
    "kind": "choice",
    "prompt": "食中毒予防の三原則として正しい組合せはどれか。",
    "options": [
      "冷やさない・洗わない・残す",
      "増やす・保管する・触る",
      "開封する・放置する・再利用する",
      "つけない・増やさない・やっつける",
      "買う・温めない・食べる"
    ],
    "answer": 3,
    "explanation": "細菌を食品に付けず、増殖を抑え、加熱などで減らすことが基本です。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "ORI-3-038",
    "grade": 3,
    "category": "才を育もう",
    "kind": "choice",
    "prompt": "調理前に行う衛生行動として適切なのはどれか。",
    "options": [
      "石けんを使って手を洗う",
      "手指の傷を放置する",
      "生肉を触った手でサラダを作る",
      "手が乾いていれば洗わない",
      "汚れたタオルで拭くだけ"
    ],
    "answer": 0,
    "explanation": "手洗いは食品への病原体の付着を減らす基本です。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "ORI-3-039",
    "grade": 3,
    "category": "才を育もう",
    "kind": "choice",
    "prompt": "ノロウイルス対策として特に重要なものはどれか。",
    "options": [
      "十分な手洗いと適切な衛生管理",
      "調理後の長時間常温放置",
      "食器を共有して消毒を省く",
      "感染症状があっても通常どおり調理する",
      "水だけでの短いすすぎのみ"
    ],
    "answer": 0,
    "explanation": "ノロウイルスは感染力が高く、手洗いや汚染物の適切な処理が重要です。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "ORI-3-040",
    "grade": 3,
    "category": "才を育もう",
    "kind": "choice",
    "prompt": "生肉を切った後に生で食べる野菜を切るとき、適切な対応はどれか。",
    "options": [
      "器具を洗浄・消毒するか専用のものを使う",
      "肉汁を野菜にかける",
      "まな板の色だけを確認する",
      "洗わずに紙で拭くだけ",
      "同じまな板をそのまま使う"
    ],
    "answer": 0,
    "explanation": "二次汚染を防ぐため器具の使い分けや洗浄・消毒が必要です。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "ORI-3-041",
    "grade": 3,
    "category": "才を育もう",
    "kind": "choice",
    "prompt": "冷蔵が必要な食品を保存するときに適切な行動はどれか。",
    "options": [
      "必ず常温で一晩置く",
      "冷蔵庫のドアを開けたままにする",
      "保存温度を気にしない",
      "長時間車内に放置する",
      "購入後は速やかに適切な温度で保存する"
    ],
    "answer": 4,
    "explanation": "低温保存が必要な食品は時間と温度の管理が重要です。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "ORI-3-042",
    "grade": 3,
    "category": "才を育もう",
    "kind": "choice",
    "prompt": "食品ロスを減らす行動として適切なのはどれか。",
    "options": [
      "食べ残しを増やす",
      "保存方法を確認しない",
      "毎回食材を多めに捨てる",
      "期限を確認せずまとめ買いする",
      "必要な量を考えて買い、食材を使い切る"
    ],
    "answer": 4,
    "explanation": "献立計画や適量購入は食品ロス削減につながります。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "ORI-3-043",
    "grade": 3,
    "category": "才を育もう",
    "kind": "choice",
    "prompt": "3Rの「Reduce」に該当するものはどれか。",
    "options": [
      "ごみの発生そのものを減らす",
      "容器を必ず新品に替える",
      "同じ商品を多く買う",
      "分別せずに捨てる",
      "使い終わったものを燃やすだけ"
    ],
    "answer": 0,
    "explanation": "Reduceはごみの発生抑制、Reuseは再使用、Recycleは再資源化です。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "ORI-3-044",
    "grade": 3,
    "category": "才を育もう",
    "kind": "choice",
    "prompt": "食品の冷凍保存に関する説明として適切なのはどれか。",
    "options": [
      "加熱の代わりに必ずなる",
      "解凍後も無制限に保存できる",
      "食品の品質変化が一切ない",
      "微生物の増殖を抑えられるが、すべてが死滅するとは限らない",
      "食中毒菌が必ずすべて死滅する"
    ],
    "answer": 3,
    "explanation": "冷凍は増殖を抑える方法ですが、すべての病原体を死滅させる方法ではありません。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "ORI-3-045",
    "grade": 3,
    "category": "才を育もう",
    "kind": "choice",
    "prompt": "食料自給率に関する説明として適切なのはどれか。",
    "options": [
      "小売店の数を示す",
      "輸入食品の価格だけを示す",
      "家庭の食費総額を示す",
      "廃棄物の重さだけを示す",
      "国内で消費する食料を国内生産でどれだけ賄うかを表す指標"
    ],
    "answer": 4,
    "explanation": "食料自給率は供給熱量ベースや生産額ベースなどで示されます。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "ORI-3-046",
    "grade": 3,
    "category": "才を育もう",
    "kind": "choice",
    "prompt": "食品の酸化が起こる要因の一つはどれか。",
    "options": [
      "空気中の酸素と接触すること",
      "食品の名前が変わること",
      "必ず食品を冷凍すること",
      "器が丸いこと",
      "食品を産地で買うこと"
    ],
    "answer": 0,
    "explanation": "油脂などは酸素や光、熱によって酸化が進むことがあります。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "ORI-3-047",
    "grade": 3,
    "category": "才を育もう",
    "kind": "choice",
    "prompt": "食品を安全に解凍する方法として一般的に適切なのはどれか。",
    "options": [
      "生肉を温かい場所に出しっぱなしにする",
      "真夏の室内で一晩放置する",
      "直射日光下で長時間放置する",
      "温度管理をしない",
      "冷蔵庫内で計画的に解凍する"
    ],
    "answer": 4,
    "explanation": "冷蔵庫内などで温度管理して解凍すると微生物増殖のリスクを抑えやすくなります。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "ORI-3-048",
    "grade": 3,
    "category": "才を育もう",
    "kind": "choice",
    "prompt": "食べ残しを再加熱するときに適切なのはどれか。",
    "options": [
      "表面だけ温めれば必ず安全",
      "常温保存を続けてから軽く温める",
      "中心部まで十分に加熱し、長期保存は避ける",
      "食べ残しの保存条件を気にしない",
      "再加熱すれば何日でも安全"
    ],
    "answer": 2,
    "explanation": "適切な保存と十分な再加熱が大切ですが、再加熱だけで全ての危険がなくなるわけではありません。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "ORI-2-049",
    "grade": 2,
    "category": "ウエルネス上手になろう",
    "kind": "choice",
    "prompt": "BMIの求め方として正しい式はどれか。",
    "options": [
      "体重(kg)＋身長(m)",
      "身長(m)÷体重(kg)",
      "体重(kg)÷身長(m)の2乗",
      "体重(kg)×身長(m)",
      "体重(kg)×身長(m)の2乗",
      "体重(kg)÷身長(cm)"
    ],
    "answer": 2,
    "explanation": "BMIは体重(kg)を身長(m)の2乗で割って算出します。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "ORI-2-050",
    "grade": 2,
    "category": "ウエルネス上手になろう",
    "kind": "choice",
    "prompt": "基礎代謝に関する説明として適切なのはどれか。",
    "options": [
      "年齢や体格とは無関係に一定",
      "安静時でも生命維持のために必要なエネルギー消費を含む",
      "運動中のエネルギーだけを指す",
      "睡眠中は必ずゼロになる",
      "食後の消化だけを指す",
      "飲水量と同じ単位で表す"
    ],
    "answer": 1,
    "explanation": "基礎代謝は呼吸や体温維持など生命維持に必要なエネルギーです。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "ORI-2-051",
    "grade": 2,
    "category": "ウエルネス上手になろう",
    "kind": "choice",
    "prompt": "たんぱく質の栄養学的な役割として適切なのはどれか。",
    "options": [
      "水分だけで代替できる",
      "食物繊維と完全に同じ役割を持つ",
      "骨の構成にしか関与しない",
      "酸素と同じ働きだけを持つ",
      "熱量を全く持たない",
      "筋肉や酵素など体の構成材料となる"
    ],
    "answer": 5,
    "explanation": "たんぱく質は体の構成や代謝調節に関わります。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "ORI-2-052",
    "grade": 2,
    "category": "ウエルネス上手になろう",
    "kind": "choice",
    "prompt": "生活習慣の改善支援として適切なのはどれか。",
    "options": [
      "短期間で必ず結果が出ると断言する",
      "一度失敗したら中止する",
      "全員に同じ極端な食事制限を勧める",
      "食事記録を一切見直さない",
      "休養を取らずに運動を増やす",
      "本人が続けられる小さな目標を設定する"
    ],
    "answer": 5,
    "explanation": "無理のない具体的な行動目標を本人と考えることが継続の助けになります。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "ORI-2-053",
    "grade": 2,
    "category": "ウエルネス上手になろう",
    "kind": "choice",
    "prompt": "脂溶性ビタミンの組合せとして適切なのはどれか。",
    "options": [
      "ビタミンB1・B2・C・B6",
      "ビタミンB2・B6・葉酸・C",
      "ビタミンA・D・E・K",
      "ビタミンC・B12・K・B1",
      "ビタミンB1・B6・D・C",
      "ビタミンC・E・B2・ナイアシン"
    ],
    "answer": 2,
    "explanation": "脂溶性ビタミンはA・D・E・Kです。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "ORI-2-054",
    "grade": 2,
    "category": "もてなし上手になろう",
    "kind": "choice",
    "prompt": "日本の伝統行事で「重陽の節句」に関係が深い花はどれか。",
    "options": [
      "紫陽花",
      "蓮",
      "菊",
      "椿",
      "桜",
      "梅"
    ],
    "answer": 2,
    "explanation": "重陽の節句は9月9日で、菊の節句ともいわれます。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "ORI-2-055",
    "grade": 2,
    "category": "もてなし上手になろう",
    "kind": "choice",
    "prompt": "料理の香りとうま味を引き立てる工夫として適切なのはどれか。",
    "options": [
      "温度を無視して提供する",
      "必ず塩分を過剰にする",
      "だしや香味野菜を活用して味に奥行きを出す",
      "すべての食材を同じ切り方にする",
      "食材の鮮度を一切見ない",
      "香りと味覚に関係はないと考える"
    ],
    "answer": 2,
    "explanation": "だしのうま味や香味野菜を組み合わせることで風味に変化を出せます。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "ORI-2-056",
    "grade": 2,
    "category": "もてなし上手になろう",
    "kind": "choice",
    "prompt": "食物アレルギーのある来客へのもてなしとして適切なのはどれか。",
    "options": [
      "加熱すればすべてのアレルゲンがなくなると説明する",
      "原材料を伝えない",
      "少量なら必ず安全と説明する",
      "配膳後に初めて確認する",
      "使用食材と調理時の交差接触の可能性を事前に確認する",
      "苦手なだけと判断して提供する"
    ],
    "answer": 4,
    "explanation": "アレルゲンと交差接触の確認が大切で、自己判断で安全を保証しないことが重要です。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "ORI-2-057",
    "grade": 2,
    "category": "もてなし上手になろう",
    "kind": "choice",
    "prompt": "「郷土料理」の特徴を説明したものとして適切なのはどれか。",
    "options": [
      "外食店でしか食べられない料理",
      "季節との関係を持たない料理",
      "必ず輸入食材だけを使う料理",
      "すべて全国で同一の料理",
      "地域の食材や風土、歴史に根ざして受け継がれてきた料理",
      "工場でのみ作られる料理"
    ],
    "answer": 4,
    "explanation": "郷土料理には地域の暮らしや気候、文化が反映されます。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "ORI-2-058",
    "grade": 2,
    "category": "もてなし上手になろう",
    "kind": "choice",
    "prompt": "食事の温度に関するもてなしとして適切なのはどれか。",
    "options": [
      "保温を気にしない",
      "食品衛生より見た目だけを優先する",
      "料理の特徴に合わせ適温で提供する",
      "すべての料理を同じ温度にする",
      "冷製料理も必ず熱くする",
      "盛りつけから長時間放置する"
    ],
    "answer": 2,
    "explanation": "料理の適温はおいしさと衛生の双方に関わります。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "ORI-2-059",
    "grade": 2,
    "category": "買い物上手になろう",
    "kind": "choice",
    "prompt": "特定保健用食品（トクホ）の説明として適切なのはどれか。",
    "options": [
      "食品添加物が絶対にゼロである証明",
      "すべての食品に自動的に付く表示",
      "生産地だけを証明する制度",
      "国の審査を経て許可された保健用途を表示できる食品",
      "価格を保証するマーク",
      "疾病の治療を目的とする医薬品"
    ],
    "answer": 3,
    "explanation": "特定保健用食品は所定の審査・許可に基づき保健の用途を表示します。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "ORI-2-060",
    "grade": 2,
    "category": "買い物上手になろう",
    "kind": "choice",
    "prompt": "機能性表示食品制度の説明として適切なのはどれか。",
    "options": [
      "事業者の責任で科学的根拠等を届け出て機能性を表示する制度",
      "食べれば病気が治ることを保証する制度",
      "すべて国が個別に効果を審査・許可する制度",
      "食品安全基準を免除する制度",
      "すべて医薬品である",
      "栄養成分表示を不要にする制度"
    ],
    "answer": 0,
    "explanation": "機能性表示食品は事業者責任の届出制度で、トクホとは異なります。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "ORI-2-061",
    "grade": 2,
    "category": "買い物上手になろう",
    "kind": "choice",
    "prompt": "「要冷蔵」と表示された商品を購入した後の対応として適切なのはどれか。",
    "options": [
      "なるべく早く持ち帰り適切な冷蔵温度で保存する",
      "外箱を捨てれば温度管理は不要",
      "保存方法を無視する",
      "必ず冷凍して品質を同一に保つ",
      "長時間高温の車内に置く",
      "開封して常温に置き続ける"
    ],
    "answer": 0,
    "explanation": "要冷蔵品は保存温度を守ることが大切です。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "ORI-2-062",
    "grade": 2,
    "category": "買い物上手になろう",
    "kind": "choice",
    "prompt": "製品の原材料表示を比較する目的として適切なのはどれか。",
    "options": [
      "価格を自動的に統一する",
      "商品の味を保証する",
      "消費期限を延ばす",
      "購入者の人数を示す",
      "内容量を必ず倍にする",
      "使用食材やアレルゲンなどを確認する"
    ],
    "answer": 5,
    "explanation": "原材料表示は食材の選択やアレルゲンの確認に役立ちます。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "ORI-2-063",
    "grade": 2,
    "category": "買い物上手になろう",
    "kind": "choice",
    "prompt": "中食（なかしょく）に分類されるものはどれか。",
    "options": [
      "購入した弁当を自宅で食べる",
      "飲食店の席で料理を食べる",
      "自宅の畑で野菜を育てる",
      "工場で食品を製造する",
      "食品の輸出手続きをする",
      "食材を購入しすべて自宅で調理する"
    ],
    "answer": 0,
    "explanation": "中食は惣菜や弁当など調理済み食品を持ち帰り等で食べるスタイルです。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "ORI-2-064",
    "grade": 2,
    "category": "段取り上手になろう",
    "kind": "choice",
    "prompt": "HACCPの考え方として最も適切なのはどれか。",
    "options": [
      "原材料を一切確認しない",
      "完成品の見た目だけを確認する",
      "常温放置を基本とする",
      "製造記録を作らない",
      "危害要因を分析し重要な工程を継続的に管理する",
      "調理者の経験だけに任せる"
    ],
    "answer": 4,
    "explanation": "HACCPは危害要因分析と重要管理点の管理を中心にした衛生管理手法です。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "ORI-2-065",
    "grade": 2,
    "category": "段取り上手になろう",
    "kind": "choice",
    "prompt": "交差汚染を防ぐ方法として適切なのはどれか。",
    "options": [
      "生肉と加熱後の食品を同じ容器に重ねる",
      "生肉の汁をサラダにかける",
      "生肉用と生食用の器具を分け、洗浄・消毒する",
      "調理台の清掃を省略する",
      "器具を水ですすぐだけで必ず十分とする",
      "手袋をつけたら交換せず使い続ける"
    ],
    "answer": 2,
    "explanation": "生の食材から加熱済み食品などへの病原体の移動を防ぐ必要があります。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "ORI-2-066",
    "grade": 2,
    "category": "段取り上手になろう",
    "kind": "choice",
    "prompt": "魚介類に関係する寄生虫アニサキスへの対策として適切なものはどれか。",
    "options": [
      "適切な加熱または冷凍処理を行う",
      "見た目が新鮮なら必ずいない",
      "しょうゆに浸せば必ず安全",
      "酢に短時間漬ければ必ず死滅する",
      "表面を水洗いすれば必ず安全",
      "塩をかければ必ず死滅する"
    ],
    "answer": 0,
    "explanation": "アニサキスは酢やしょうゆでは死滅せず、適切な加熱・冷凍が予防に有効です。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "ORI-2-067",
    "grade": 2,
    "category": "段取り上手になろう",
    "kind": "choice",
    "prompt": "加熱調理の安全確認で重視すべきものはどれか。",
    "options": [
      "外側の色だけ",
      "調理時刻だけ",
      "皿の形だけ",
      "購入した店名だけ",
      "調理器具のブランドだけ",
      "食品の中心部まで必要な加熱ができたか"
    ],
    "answer": 5,
    "explanation": "食品の中心温度や加熱時間などが安全確認に重要です。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "ORI-2-068",
    "grade": 2,
    "category": "段取り上手になろう",
    "kind": "choice",
    "prompt": "衛生管理の「洗浄」と「消毒」の関係として適切なのはどれか。",
    "options": [
      "汚れを落としてから適切に消毒することが重要",
      "洗剤はすべての病原体を必ず死滅させる",
      "洗浄と消毒はいつでも同じ意味",
      "器具は乾いていれば必ず清潔",
      "手洗いは一切不要",
      "汚れが多いほど消毒効果は必ず上がる"
    ],
    "answer": 0,
    "explanation": "汚れが残ると消毒の効果が下がることがあり、洗浄と消毒の両方が重要です。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "ORI-2-069",
    "grade": 2,
    "category": "生き方上手になろう",
    "kind": "choice",
    "prompt": "小売業の説明として最も適切なものはどれか。",
    "options": [
      "食品検査だけをする事業",
      "原料を鉱山で採掘するだけ",
      "商品を主に最終消費者に販売する事業",
      "買い物客の消費を禁止する事業",
      "国内の貨幣を発行する事業",
      "商品を必ず海外へ輸送するだけ"
    ],
    "answer": 2,
    "explanation": "小売は消費者に商品を販売する流通段階です。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "ORI-2-070",
    "grade": 2,
    "category": "生き方上手になろう",
    "kind": "choice",
    "prompt": "POSシステムの役割として適切なのはどれか。",
    "options": [
      "賞味期限を自動的に無期限にする",
      "販売時点の取引情報を集計し販売分析などに活用する",
      "税金をすべて免除する",
      "食品の味を測定するだけ",
      "店舗を必ず無人にする",
      "すべての原料を栽培する"
    ],
    "answer": 1,
    "explanation": "POSデータは売れ筋分析や在庫管理に活用できます。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "ORI-2-071",
    "grade": 2,
    "category": "生き方上手になろう",
    "kind": "choice",
    "prompt": "プライベートブランド（PB）商品の特徴として適切なのはどれか。",
    "options": [
      "すべて輸入禁止の商品",
      "販売量が常にゼロの商品",
      "小売企業などが企画・展開する独自ブランドの商品",
      "必ず生鮮食品だけの商品",
      "企業の名前を表示できない商品",
      "必ず国が製造する商品"
    ],
    "answer": 2,
    "explanation": "PBは小売業などが独自に企画・販売するブランドです。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "ORI-2-072",
    "grade": 2,
    "category": "生き方上手になろう",
    "kind": "choice",
    "prompt": "サプライチェーンに含まれる活動はどれか。",
    "options": [
      "店舗のBGMだけ",
      "食器の配置だけ",
      "商品の色だけ",
      "家庭の味付けだけ",
      "消費者の睡眠時間だけ",
      "原材料調達から製造・物流・販売までの一連の流れ"
    ],
    "answer": 5,
    "explanation": "サプライチェーンは調達から消費者に届くまでの供給活動を指します。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "ORI-2-073",
    "grade": 2,
    "category": "生き方上手になろう",
    "kind": "choice",
    "prompt": "食マーケットで需要予測を行う主な理由として適切なのはどれか。",
    "options": [
      "販売価格を無制限に上げる",
      "購入者の好みを完全に固定する",
      "需要に関係なく大量に廃棄する",
      "来店客数を必ずゼロにする",
      "食品衛生を不要にする",
      "欠品と売れ残りを抑え、在庫を適正化する"
    ],
    "answer": 5,
    "explanation": "需要予測を活用すると売り切れや廃棄のリスクを軽減しやすくなります。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "ORI-2-074",
    "grade": 2,
    "category": "やりくり上手になろう",
    "kind": "choice",
    "prompt": "一般に円安が輸入食品の円建て価格へ与える影響として適切なのはどれか。",
    "options": [
      "他条件が同じなら円建ての仕入価格が上がりやすい",
      "商品重量が必ず減る",
      "円建て価格が必ず下がる",
      "外国通貨が不要になる",
      "輸入が法律で必ず禁止される",
      "輸入価格が必ずゼロになる"
    ],
    "answer": 0,
    "explanation": "円安は同じ外貨価格の商品を購入するためにより多くの円が必要となることを意味します。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "ORI-2-075",
    "grade": 2,
    "category": "やりくり上手になろう",
    "kind": "choice",
    "prompt": "食品ロス削減の取組として適切なのはどれか。",
    "options": [
      "余剰在庫を把握しない",
      "売れ残りを見込んで毎回大量生産する",
      "品質管理をやめる",
      "期限表示を確認しない",
      "返品食品をすべて無条件に販売する",
      "需要予測に基づいて製造・発注量を調整する"
    ],
    "answer": 5,
    "explanation": "発注・販売の適正化は食品ロスの削減につながります。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "ORI-2-076",
    "grade": 2,
    "category": "やりくり上手になろう",
    "kind": "choice",
    "prompt": "エシカル消費について適切な説明はどれか。",
    "options": [
      "消費者の選択肢を減らすこと",
      "すべての食品を廃棄すること",
      "過剰包装を必ず選ぶこと",
      "人や社会、地域、環境への影響を考慮して商品を選ぶ",
      "値段が高いものだけ買うこと",
      "産地情報を意図的に隠すこと"
    ],
    "answer": 3,
    "explanation": "エシカル消費は社会・環境などに配慮した消費行動です。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "ORI-2-077",
    "grade": 2,
    "category": "やりくり上手になろう",
    "kind": "choice",
    "prompt": "食品表示を活用した家計管理に役立つ方法はどれか。",
    "options": [
      "比較する際に単位を考えない",
      "パッケージの色だけで選ぶ",
      "内容量と価格を比較して単位当たりの価格を確認する",
      "内容量を必ず無視する",
      "食べきれる量か確認しない",
      "必要数を考えず大量購入する"
    ],
    "answer": 2,
    "explanation": "単位価格比較と必要量の見積もりは合理的な買い物に役立ちます。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "ORI-2-078",
    "grade": 2,
    "category": "やりくり上手になろう",
    "kind": "choice",
    "prompt": "循環型社会の実現に向けた行動として適切なのはどれか。",
    "options": [
      "食品容器を自治体のルールに従って分別する",
      "ごみをすべて混合して捨てる",
      "食品残さを必ず河川に流す",
      "再使用可能な容器を毎回捨てる",
      "リサイクル可能なものを必ず焼却する",
      "商品購入時に包装を考慮しない"
    ],
    "answer": 0,
    "explanation": "地域のルールに沿った分別は資源の循環に役立ちます。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "ORI-1-079",
    "grade": 1,
    "category": "栄養と健康",
    "kind": "choice",
    "prompt": "生活習慣改善の助言で科学的な根拠を示す際、最も適切な姿勢はどれか。",
    "options": [
      "広告に書かれた結果を無条件で採用する",
      "情報の発表年を一切確認しない",
      "複数の質の高い根拠と本人の状況を踏まえて判断する",
      "体験談一例だけで万人への効果を保証する",
      "リスクを必ずゼロと断言する",
      "個人差が存在しないと説明する"
    ],
    "answer": 2,
    "explanation": "根拠の質と適用対象、本人の価値観を合わせて考えることが重要です。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "ORI-1-080",
    "grade": 1,
    "category": "栄養と健康",
    "kind": "choice",
    "prompt": "食事指導の初期評価で確認する項目として適切なのはどれか。",
    "options": [
      "好物だけを聞き食事歴を聞かない",
      "全員に同じ献立を渡す",
      "食事内容・生活状況・本人の目標や困りごと",
      "食事以外の生活条件を無視する",
      "質問をしないまま結論を出す",
      "体重のみで疾患を診断する"
    ],
    "answer": 2,
    "explanation": "食事状況や生活背景、本人の希望を確認して支援の方向性を考えます。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "ORI-1-081",
    "grade": 1,
    "category": "栄養と健康",
    "kind": "choice",
    "prompt": "特定の食品に病気を治す効果があるというSNS投稿への対応で最も適切なのはどれか。",
    "options": [
      "誰にでも同じ摂取量を勧める",
      "体験談を臨床試験より必ず優先する",
      "根拠となる研究と公的情報を確認し、治療の代わりとしない",
      "投稿者のフォロワー数だけで効果を判断する",
      "すぐに治療を中断するよう勧める",
      "副作用の可能性を検討しない"
    ],
    "answer": 2,
    "explanation": "健康情報は一次資料や公的機関の情報を参照し、医療の代替として断定しないことが大切です。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "ORI-1-082",
    "grade": 1,
    "category": "食文化と食習慣",
    "kind": "choice",
    "prompt": "外国からの来客の食事対応で最も適切なのはどれか。",
    "options": [
      "食材名を隠して提供する",
      "出身国だけで食習慣を断定する",
      "一品だけ食べられれば十分とする",
      "誰もが同じ食習慣だと決めつける",
      "宗教・文化・アレルギー・嗜好を事前に本人へ確認する",
      "本人への確認は不要とする"
    ],
    "answer": 4,
    "explanation": "文化的背景には個人差があるため、直接確認することが最も確実です。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "ORI-1-083",
    "grade": 1,
    "category": "食文化と食習慣",
    "kind": "choice",
    "prompt": "和食文化の継承に関する説明で適切なのはどれか。",
    "options": [
      "他文化の食習慣を必ず否定する",
      "地域の食材や行事食を生活に合わせて次世代へ伝える",
      "伝統料理の作り方を秘匿して伝えない",
      "地域の歴史を考慮しない",
      "すべての地域の料理を同一にする",
      "季節に関する情報を一切扱わない"
    ],
    "answer": 1,
    "explanation": "食文化の継承には地域性と生活の変化を踏まえた工夫が必要です。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "ORI-1-084",
    "grade": 1,
    "category": "食文化と食習慣",
    "kind": "choice",
    "prompt": "献立設計において配慮すべき条件として最も適切なのはどれか。",
    "options": [
      "調理できる設備を確認しない",
      "栄養・安全・嗜好・費用・調理環境などを総合する",
      "価格だけを見てアレルギーを無視する",
      "食材の入手可能性を考えない",
      "すべての献立を一律に固定する",
      "栄養だけを見て衛生を無視する"
    ],
    "answer": 1,
    "explanation": "実際の献立は健康面と嗜好、費用、設備、食材調達などの制約を総合して考えます。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "ORI-1-085",
    "grade": 1,
    "category": "食品学",
    "kind": "choice",
    "prompt": "食品の酸化による品質低下を抑える対策として適切なのはどれか。",
    "options": [
      "常に直射日光にさらす",
      "遮光・適温保存・酸素との接触抑制などを組み合わせる",
      "一度酸化した油を繰り返し使用する",
      "高温で長時間放置する",
      "賞味期限を必ず無期限にする",
      "容器を常時開放する"
    ],
    "answer": 1,
    "explanation": "油脂などは光、熱、酸素により酸化が進むため保存条件が大切です。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "ORI-1-086",
    "grade": 1,
    "category": "食品学",
    "kind": "choice",
    "prompt": "トレーサビリティの役割として適切なのはどれか。",
    "options": [
      "店内BGMを管理する",
      "消費者の健康を必ず保証する",
      "食品の風味を測定するだけ",
      "原料の調達や製造・流通の履歴を追跡可能にする",
      "食品の価格を国が固定する",
      "すべてのアレルゲンを除去する"
    ],
    "answer": 3,
    "explanation": "トレーサビリティは食品事故時の原因究明や回収などに役立ちます。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "ORI-1-087",
    "grade": 1,
    "category": "食品学",
    "kind": "choice",
    "prompt": "食品の加工による栄養変化を説明する際に最も適切なのはどれか。",
    "options": [
      "栄養素ごとに加工条件や水への溶出の影響が異なる",
      "調理時間は一切関係しない",
      "すべての栄養素が必ず倍増する",
      "食品加工は必ず栄養をゼロにする",
      "水溶性と脂溶性の性質は完全に同じ",
      "加熱で栄養素が一切変化しない"
    ],
    "answer": 0,
    "explanation": "水溶性ビタミンの溶出など、食品と条件により影響が異なります。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "ORI-1-088",
    "grade": 1,
    "category": "衛生管理",
    "kind": "choice",
    "prompt": "食品工場におけるHACCPの運用で重要なのはどれか。",
    "options": [
      "危害要因を一切洗い出さない",
      "納入業者の情報を確認しない",
      "不適合が発生しても放置する",
      "記録を残さず経験だけで判断する",
      "重要管理点の監視・逸脱時対応・記録を継続する",
      "計画を立てた後は確認しない"
    ],
    "answer": 4,
    "explanation": "監視・是正・検証・記録を運用して初めて衛生管理が機能します。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "ORI-1-089",
    "grade": 1,
    "category": "衛生管理",
    "kind": "choice",
    "prompt": "食品安全のリスク評価とリスク管理の関係として適切なのはどれか。",
    "options": [
      "科学的な評価結果などを踏まえて管理措置を選ぶ",
      "リスクはすべてゼロとみなす",
      "評価と管理を区別する必要がない",
      "危害要因の確認は不要",
      "基準を超えても記録しない",
      "管理措置は広告表現で決める"
    ],
    "answer": 0,
    "explanation": "リスク評価とリスク管理は関係しつつ役割が異なります。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "ORI-1-090",
    "grade": 1,
    "category": "衛生管理",
    "kind": "choice",
    "prompt": "食中毒疑いの苦情発生時の初期対応として最も適切なのはどれか。",
    "options": [
      "関連記録と対象ロットを保全し、所定の報告・対応手順に従う",
      "原因を調べず安全と公表する",
      "苦情を無条件に無視する",
      "同じ工程を無条件に続ける",
      "記録を廃棄する",
      "対象商品の所在を確認しない"
    ],
    "answer": 0,
    "explanation": "迅速な情報保全・連絡・原因調査と必要な措置が重要です。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "ORI-1-091",
    "grade": 1,
    "category": "食マーケット",
    "kind": "choice",
    "prompt": "需要予測の誤差が大きい生鮮食品の販売で有効な改善策はどれか。",
    "options": [
      "販売データと廃棄量を分析して発注を調整する",
      "季節要因を無視する",
      "売れ残りを分析しない",
      "品質管理を省く",
      "販売数量の記録をやめる",
      "常に同じ数量だけ大量発注する"
    ],
    "answer": 0,
    "explanation": "生鮮食品では需要変動と賞味期間を踏まえた発注管理が重要です。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "ORI-1-092",
    "grade": 1,
    "category": "食マーケット",
    "kind": "choice",
    "prompt": "食料品の配送で環境負荷低減につながりやすい取組はどれか。",
    "options": [
      "小口配送を無計画に繰り返す",
      "空車走行を増やす",
      "必要以上の包装を採用する",
      "輸送距離を必ず最大化する",
      "燃料使用量を記録しない",
      "積載効率向上と配送ルート最適化"
    ],
    "answer": 5,
    "explanation": "ルートや積載の工夫は燃料消費や排出負荷の軽減につながります。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "ORI-1-093",
    "grade": 1,
    "category": "食マーケット",
    "kind": "choice",
    "prompt": "新しい食品サービスを企画する際に重要な調査はどれか。",
    "options": [
      "実際の費用を計算しない",
      "顧客ニーズ・価格・安全性・販売環境を把握する",
      "競合や代替サービスを調べない",
      "顧客の意見を一切収集しない",
      "安全上の要件を後回しにする",
      "販売数を無条件に固定する"
    ],
    "answer": 1,
    "explanation": "商品企画には顧客理解に加え採算・安全・運用条件の検討が必要です。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "ORI-1-094",
    "grade": 1,
    "category": "社会生活",
    "kind": "choice",
    "prompt": "食に関する情報をSNSで発信する際に最も適切なのはどれか。",
    "options": [
      "古い制度を確認せず引用する",
      "単一の体験談を万人の結論にする",
      "根拠の出典と限界を示し誤解を招く断定を避ける",
      "不確かな数値を確定情報として載せる",
      "広告と事実を混同する",
      "情報の出所を隠す"
    ],
    "answer": 2,
    "explanation": "出典やデータの範囲を示し、変化する制度や統計は最新情報を確認します。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "ORI-1-095",
    "grade": 1,
    "category": "社会生活",
    "kind": "choice",
    "prompt": "食支援におけるアクセシビリティの観点として適切なのはどれか。",
    "options": [
      "食材の入手方法を考えない",
      "支援の必要性を本人に確認しない",
      "高齢者や障害のある人の買い物・調理上の困難を考慮する",
      "案内表示を読みにくくする",
      "全員に同じ支援方法だけを強制する",
      "利用者の困難を無視する"
    ],
    "answer": 2,
    "explanation": "食へのアクセスには移動・情報・調理能力など複数の要因が関わります。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "ORI-1-096",
    "grade": 1,
    "category": "社会生活",
    "kind": "choice",
    "prompt": "食品サービスで顧客情報を扱う際に適切なのはどれか。",
    "options": [
      "漏えいへの対策を行わない",
      "本人への説明を常に不要とする",
      "公開の場で個人情報を共有する",
      "保管期限やアクセス権を考えない",
      "目的外利用を無制限に行う",
      "利用目的を明確にし必要な範囲で安全に取り扱う"
    ],
    "answer": 5,
    "explanation": "個人情報は適切な目的と安全管理の下で扱う必要があります。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "ORI-1-W097",
    "grade": 1,
    "category": "栄養と健康",
    "kind": "written",
    "prompt": "日常的に朝食を抜く人への支援で、本人に確認したいことを二つ挙げ、助言の方向性を簡潔に述べなさい。",
    "sample": "生活リズムや朝の食欲・時間的制約を確認し、無理のない量と準備方法から改善を相談する。",
    "keywords": [
      "生活背景の確認",
      "実行可能な提案"
    ],
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "ORI-1-W098",
    "grade": 1,
    "category": "食文化と食習慣",
    "kind": "written",
    "prompt": "食物アレルギーのある来客に会食を提供するときの注意点を二つ述べなさい。",
    "sample": "使用食材とアレルゲンを事前確認し、調理器具や配膳での交差接触を防ぐ。",
    "keywords": [
      "食材確認",
      "交差接触防止"
    ],
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "ORI-1-W099",
    "grade": 1,
    "category": "食品学",
    "kind": "written",
    "prompt": "期限表示と保存方法の関係を、未開封と開封後の違いを含めて説明しなさい。",
    "sample": "表示期限は未開封で指定条件を守った場合の目安。開封後は品質が変化するため早めに消費する。",
    "keywords": [
      "未開封の条件",
      "開封後の扱い"
    ],
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "ORI-1-W100",
    "grade": 1,
    "category": "衛生管理",
    "kind": "written",
    "prompt": "HACCPで危害要因分析を行う目的と、重要管理点を監視する理由を述べなさい。",
    "sample": "食品工程に潜む危害を洗い出し、重要な工程を監視して安全上の逸脱を早期に発見・是正するため。",
    "keywords": [
      "危害の把握",
      "監視と是正"
    ],
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "ORI-1-W101",
    "grade": 1,
    "category": "食マーケット",
    "kind": "written",
    "prompt": "食品小売店が食品ロスを減らすために使えるデータと、その活用方法を例示しなさい。",
    "sample": "時間帯別販売数量と廃棄量を集計し、曜日や季節に応じた発注量と値引き時期を調整する。",
    "keywords": [
      "販売/廃棄データ",
      "発注調整"
    ],
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "ORI-1-W102",
    "grade": 1,
    "category": "社会生活",
    "kind": "written",
    "prompt": "健康情報の信頼性を判断する際の確認事項を二つ挙げなさい。",
    "sample": "出典となる研究・公的資料の有無と情報の公表時期や対象集団を確認する。",
    "keywords": [
      "情報の出典",
      "最新性または適用範囲"
    ],
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "ORI-3-103",
    "grade": 3,
    "category": "体を育もう",
    "kind": "choice",
    "prompt": "永久歯の一般的な本数（親知らずを含む）は何本か。",
    "options": [
      "32本",
      "36本",
      "28本",
      "20本",
      "24本"
    ],
    "answer": 0,
    "explanation": "永久歯は親知らず4本を含めると通常32本です。親知らずが生えない人もいます。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "ORI-3-104",
    "grade": 3,
    "category": "体を育もう",
    "kind": "choice",
    "prompt": "乳歯の本数として適切なものはどれか。",
    "options": [
      "28本",
      "32本",
      "16本",
      "20本",
      "24本"
    ],
    "answer": 3,
    "explanation": "乳歯は上下合わせて20本です。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "ORI-3-105",
    "grade": 3,
    "category": "体を育もう",
    "kind": "choice",
    "prompt": "前歯（切歯）が主に担う働きはどれか。",
    "options": [
      "味を感じる",
      "食物をすりつぶす",
      "胃酸を分泌する",
      "食物を噛み切る",
      "唾液を分泌する"
    ],
    "answer": 3,
    "explanation": "切歯は食べ物を噛み切る役割を持ちます。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "ORI-3-106",
    "grade": 3,
    "category": "体を育もう",
    "kind": "choice",
    "prompt": "奥歯（臼歯）が主に担う働きはどれか。",
    "options": [
      "食物の甘味を判定する",
      "食物をかみ砕き、すりつぶす",
      "食物を引き裂くだけ",
      "舌の動きを止める",
      "消化酵素を作る"
    ],
    "answer": 1,
    "explanation": "臼歯は咀嚼で食べ物を細かくし、飲み込みやすくします。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "ORI-3-107",
    "grade": 3,
    "category": "体を育もう",
    "kind": "choice",
    "prompt": "「五大栄養素」に含まれないものはどれか。",
    "options": [
      "ビタミン",
      "脂質",
      "食物繊維",
      "たんぱく質",
      "炭水化物"
    ],
    "answer": 2,
    "explanation": "五大栄養素は炭水化物・脂質・たんぱく質・ビタミン・ミネラルです。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "ORI-3-108",
    "grade": 3,
    "category": "体を育もう",
    "kind": "choice",
    "prompt": "三大栄養素として適切な組合せはどれか。",
    "options": [
      "炭水化物・脂質・たんぱく質",
      "たんぱく質・ミネラル・食物繊維",
      "脂質・ビタミン・水",
      "ビタミン・食物繊維・水",
      "炭水化物・ビタミン・ミネラル"
    ],
    "answer": 0,
    "explanation": "三大栄養素とはエネルギー源になる炭水化物・脂質・たんぱく質です。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "ORI-3-109",
    "grade": 3,
    "category": "体を育もう",
    "kind": "choice",
    "prompt": "炭水化物1gのエネルギー換算の目安はどれか。",
    "options": [
      "約9kcal",
      "約6kcal",
      "約2kcal",
      "約7kcal",
      "約4kcal"
    ],
    "answer": 4,
    "explanation": "一般的な栄養計算では炭水化物を約4kcal/gとして扱います。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "ORI-3-110",
    "grade": 3,
    "category": "体を育もう",
    "kind": "choice",
    "prompt": "脂質10gから得られるエネルギーの目安はどれか。",
    "options": [
      "約60kcal",
      "約70kcal",
      "約120kcal",
      "約90kcal",
      "約40kcal"
    ],
    "answer": 3,
    "explanation": "脂質は約9kcal/gなので、10gはおよそ90kcalです。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "ORI-3-111",
    "grade": 3,
    "category": "体を育もう",
    "kind": "choice",
    "prompt": "脂質20gとたんぱく質10gのエネルギー合計の目安はどれか。",
    "options": [
      "約220kcal",
      "約300kcal",
      "約120kcal",
      "約160kcal",
      "約240kcal"
    ],
    "answer": 0,
    "explanation": "脂質20×9＝180kcal、たんぱく質10×4＝40kcal、合計220kcalです。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "ORI-3-112",
    "grade": 3,
    "category": "体を育もう",
    "kind": "choice",
    "prompt": "炭水化物15gとたんぱく質10gのエネルギー合計の目安はどれか。",
    "options": [
      "約150kcal",
      "約135kcal",
      "約100kcal",
      "約60kcal",
      "約80kcal"
    ],
    "answer": 2,
    "explanation": "炭水化物15×4＝60kcal、たんぱく質10×4＝40kcalで合計100kcalです。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "ORI-3-113",
    "grade": 3,
    "category": "体を育もう",
    "kind": "choice",
    "prompt": "「脂溶性ビタミン」に該当するものはどれか。",
    "options": [
      "ビタミンB1",
      "ビタミンE",
      "ビタミンC",
      "葉酸",
      "ビタミンB2"
    ],
    "answer": 1,
    "explanation": "ビタミンA・D・E・Kは脂溶性です。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "ORI-3-114",
    "grade": 3,
    "category": "体を育もう",
    "kind": "choice",
    "prompt": "「水溶性ビタミン」に該当するものはどれか。",
    "options": [
      "ビタミンE",
      "ビタミンK",
      "ビタミンC",
      "ビタミンA",
      "ビタミンD"
    ],
    "answer": 2,
    "explanation": "ビタミンCとビタミンB群は水溶性ビタミンに分類されます。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "ORI-3-115",
    "grade": 3,
    "category": "体を育もう",
    "kind": "choice",
    "prompt": "ビタミンCの特徴として適切なものはどれか。",
    "options": [
      "脂質だけから構成される",
      "食品中にしか水を作れない",
      "血液中の酸素を運ぶ主成分である",
      "コラーゲンの形成に関係する",
      "カルシウムそのものである"
    ],
    "answer": 3,
    "explanation": "ビタミンCはコラーゲンの形成や抗酸化作用などに関係します。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "ORI-3-116",
    "grade": 3,
    "category": "体を育もう",
    "kind": "choice",
    "prompt": "ビタミンDが不足すると起こり得る影響はどれか。",
    "options": [
      "骨の健康に悪影響が出る",
      "嗅覚が完全に消失する",
      "食欲が必ずなくなる",
      "血液中の脂質が必ずゼロになる",
      "たんぱく質が体内で作れなくなる"
    ],
    "answer": 0,
    "explanation": "ビタミンDはカルシウム利用や骨の健康に重要です。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "ORI-3-117",
    "grade": 3,
    "category": "体を育もう",
    "kind": "choice",
    "prompt": "鉄の吸収に関係する栄養素として知られるものはどれか。",
    "options": [
      "ビタミンC",
      "食塩だけ",
      "ビタミンKだけ",
      "脂質だけ",
      "ビタミンDだけ"
    ],
    "answer": 0,
    "explanation": "ビタミンCは非ヘム鉄の吸収を助ける働きがあります。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "ORI-3-118",
    "grade": 3,
    "category": "体を育もう",
    "kind": "choice",
    "prompt": "赤血球中で酸素運搬に関わるものはどれか。",
    "options": [
      "アミラーゼ",
      "胆汁酸",
      "インスリン",
      "ヘモグロビン",
      "ペプシン"
    ],
    "answer": 3,
    "explanation": "ヘモグロビンは鉄を含むたんぱく質で酸素運搬に関わります。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "ORI-3-119",
    "grade": 3,
    "category": "体を育もう",
    "kind": "choice",
    "prompt": "食塩に多く含まれる主要なミネラルはどれか。",
    "options": [
      "ナトリウム",
      "亜鉛",
      "カルシウム",
      "鉄",
      "ヨウ素"
    ],
    "answer": 0,
    "explanation": "食塩は主として塩化ナトリウムで、ナトリウムの摂取源です。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "ORI-3-120",
    "grade": 3,
    "category": "体を育もう",
    "kind": "choice",
    "prompt": "カリウムを比較的多く含む食品の組合せはどれか。",
    "options": [
      "食用油・バターだけ",
      "清涼飲料水だけ",
      "野菜・いも・果物",
      "精製された砂糖・水",
      "食塩・砂糖・油"
    ],
    "answer": 2,
    "explanation": "カリウムは野菜・いも・果物などに幅広く含まれます。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "ORI-3-121",
    "grade": 3,
    "category": "体を育もう",
    "kind": "choice",
    "prompt": "食事バランスガイドの料理区分に含まれるものはどれか。",
    "options": [
      "香辛料だけ",
      "食用油だけ",
      "調味料だけ",
      "アルコール類だけ",
      "牛乳・乳製品"
    ],
    "answer": 4,
    "explanation": "料理区分は主食・副菜・主菜・牛乳乳製品・果物の五つです。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "ORI-3-122",
    "grade": 3,
    "category": "体を育もう",
    "kind": "choice",
    "prompt": "食事バランスガイドで「主菜」に分類される料理はどれか。",
    "options": [
      "食パン",
      "ご飯",
      "みかん",
      "野菜のおひたし",
      "卵焼き"
    ],
    "answer": 4,
    "explanation": "主菜は魚・肉・卵・大豆製品などを中心とする料理です。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "ORI-3-123",
    "grade": 3,
    "category": "体を育もう",
    "kind": "choice",
    "prompt": "食事バランスガイドで「副菜」に分類されるものはどれか。",
    "options": [
      "食パン",
      "きのこの和え物",
      "焼き魚",
      "ハンバーグ",
      "牛乳"
    ],
    "answer": 1,
    "explanation": "副菜は野菜・いも・きのこ・海藻などを中心にした料理です。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "ORI-3-124",
    "grade": 3,
    "category": "体を育もう",
    "kind": "choice",
    "prompt": "牛乳やヨーグルトが主に分類される料理グループはどれか。",
    "options": [
      "主食",
      "牛乳・乳製品",
      "主菜",
      "副菜",
      "果物"
    ],
    "answer": 1,
    "explanation": "食事バランスガイドでは牛乳とヨーグルトを牛乳・乳製品に分類します。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "ORI-3-125",
    "grade": 3,
    "category": "体を育もう",
    "kind": "choice",
    "prompt": "成人のBMIを計算する式として適切なものはどれか。",
    "options": [
      "体重(kg)×身長(m)",
      "体重(kg)÷身長(m)÷身長(m)",
      "身長(m)÷体重(kg)",
      "体重(kg)＋身長(m)",
      "体重(kg)÷身長(cm)"
    ],
    "answer": 1,
    "explanation": "BMIは体重を身長(m)の2乗で割ります。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "ORI-3-126",
    "grade": 3,
    "category": "体を育もう",
    "kind": "choice",
    "prompt": "身長1.60m、体重64kgの人のBMIはおよそいくつか。",
    "options": [
      "30.0",
      "27.5",
      "25.0",
      "20.0",
      "22.5"
    ],
    "answer": 2,
    "explanation": "64÷(1.6×1.6)＝25.0です。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "ORI-3-127",
    "grade": 3,
    "category": "体を育もう",
    "kind": "choice",
    "prompt": "身長1.50m、体重45kgの人のBMIはおよそいくつか。",
    "options": [
      "18.0",
      "22.0",
      "24.0",
      "25.0",
      "20.0"
    ],
    "answer": 4,
    "explanation": "45÷(1.5×1.5)＝20.0です。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "ORI-3-128",
    "grade": 3,
    "category": "体を育もう",
    "kind": "choice",
    "prompt": "エネルギー消費に含まれる「基礎代謝」について適切なのはどれか。",
    "options": [
      "安静時に生命を維持するための消費",
      "飲水量を示す値",
      "食後の消化だけに使われる消費",
      "激しい運動時に限る消費",
      "食物を購入する活動だけの消費"
    ],
    "answer": 0,
    "explanation": "基礎代謝は安静にしていても呼吸や体温維持などに使われるエネルギーです。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "ORI-3-129",
    "grade": 3,
    "category": "体を育もう",
    "kind": "choice",
    "prompt": "「生活習慣病」予防の基本として適切なのはどれか。",
    "options": [
      "食事・運動・睡眠などを総合的に見直す",
      "毎日必ず絶食する",
      "特定の食品だけを食べ続ける",
      "睡眠時間を極端に削る",
      "運動を完全にやめる"
    ],
    "answer": 0,
    "explanation": "生活習慣の改善は一つの食品だけではなく日常の行動全体を考えます。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "ORI-3-130",
    "grade": 3,
    "category": "体を育もう",
    "kind": "choice",
    "prompt": "過度な食事制限で起こり得る問題として適切なのはどれか。",
    "options": [
      "全員の体調が必ず改善する",
      "必要な栄養素の不足を招くことがある",
      "筋肉量は絶対に減らない",
      "栄養素の不足は起こり得ない",
      "水分補給が不要になる"
    ],
    "answer": 1,
    "explanation": "極端な制限は栄養不足や体調不良につながり得ます。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "ORI-3-131",
    "grade": 3,
    "category": "体を育もう",
    "kind": "choice",
    "prompt": "体内の水分に関する説明として適切なものはどれか。",
    "options": [
      "成人の体は水分を含まない",
      "運動中だけ必要である",
      "体温調節などに重要である",
      "体内では栄養素の運搬に無関係である",
      "食事からの水分摂取はゼロである"
    ],
    "answer": 2,
    "explanation": "水は体温調節、栄養素の運搬、老廃物の排出などに関係します。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "ORI-3-132",
    "grade": 3,
    "category": "体を育もう",
    "kind": "choice",
    "prompt": "運動後の健康管理として最も適切なのはどれか。",
    "options": [
      "睡眠を短くする",
      "体調にかかわらず同じ運動を続ける",
      "発汗量に応じた水分補給と休養を考える",
      "高温環境で水分を控える",
      "必ず食事を抜く"
    ],
    "answer": 2,
    "explanation": "活動量や気象条件、体調を踏まえて水分と休養を確保します。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "ORI-3-133",
    "grade": 3,
    "category": "体を育もう",
    "kind": "choice",
    "prompt": "よく噛んで食べる利点として適切なのはどれか。",
    "options": [
      "食品のアレルゲンを消す",
      "消化器官を一切使わなくなる",
      "食べ物を細かくし、消化を助ける",
      "口の中の唾液が必ずなくなる",
      "すべての栄養素の必要量がなくなる"
    ],
    "answer": 2,
    "explanation": "咀嚼は食物を細かくして唾液と混ぜ、飲み込みや消化を助けます。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "ORI-3-134",
    "grade": 3,
    "category": "体を育もう",
    "kind": "choice",
    "prompt": "唾液に含まれ、でんぷんの消化に関わる酵素はどれか。",
    "options": [
      "アミラーゼ",
      "リパーゼのみ",
      "ペプシン",
      "ラクターゼのみ",
      "トリプシン"
    ],
    "answer": 0,
    "explanation": "唾液アミラーゼはでんぷんの分解を始める酵素です。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "ORI-3-135",
    "grade": 3,
    "category": "体を育もう",
    "kind": "choice",
    "prompt": "胃でたんぱく質の消化に関わる代表的な酵素はどれか。",
    "options": [
      "アミラーゼ",
      "セルラーゼ",
      "マルターゼ",
      "ペプシン",
      "ラクターゼ"
    ],
    "answer": 3,
    "explanation": "胃液のペプシンはたんぱく質の消化に関係します。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "ORI-3-136",
    "grade": 3,
    "category": "体を育もう",
    "kind": "choice",
    "prompt": "主要な栄養素の吸収が行われる場所として適切なのはどれか。",
    "options": [
      "咽頭",
      "小腸",
      "食道",
      "大腸のみ",
      "口腔のみ"
    ],
    "answer": 1,
    "explanation": "消化された栄養素の多くは小腸から吸収されます。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "ORI-3-137",
    "grade": 3,
    "category": "体を育もう",
    "kind": "choice",
    "prompt": "大腸の主な働きの一つはどれか。",
    "options": [
      "唾液を作る",
      "胆汁を作る",
      "胃酸を分泌する",
      "酸素を肺へ運ぶ",
      "水分の吸収"
    ],
    "answer": 4,
    "explanation": "大腸では残りの水分などが吸収され、便が形成されます。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "ORI-3-138",
    "grade": 3,
    "category": "体を育もう",
    "kind": "choice",
    "prompt": "生活リズムを整えるための一般的な工夫として適切なのはどれか。",
    "options": [
      "毎日就寝時刻を大幅に変える",
      "休憩を一切取らない",
      "空腹感を完全に無視する",
      "起床と就寝の時刻をなるべく一定にする",
      "昼夜を逆転させ続ける"
    ],
    "answer": 3,
    "explanation": "規則的な生活リズムは睡眠や体調の管理に役立ちます。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "ORI-3-139",
    "grade": 3,
    "category": "体を育もう",
    "kind": "choice",
    "prompt": "体重だけでは栄養状態を十分に判断できない理由として適切なのはどれか。",
    "options": [
      "BMIだけで病気を確定診断できる",
      "体格や筋肉量、生活状況なども関係する",
      "食事内容は体重と全く関係ない",
      "体重が同じなら全員の栄養状態も同じ",
      "体重には水分量が一切影響しない"
    ],
    "answer": 1,
    "explanation": "栄養状態の評価には複数の情報が必要です。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "ORI-3-140",
    "grade": 3,
    "category": "体を育もう",
    "kind": "choice",
    "prompt": "食事からのエネルギー摂取が消費を長期間上回る場合、起こりやすい変化はどれか。",
    "options": [
      "水分が体から完全になくなる",
      "体脂肪が蓄積しやすくなる",
      "骨格が必ず短くなる",
      "必ず体脂肪が減る",
      "食事量は体重に影響しない"
    ],
    "answer": 1,
    "explanation": "エネルギー収支が継続的にプラスになると体脂肪が増えやすくなります。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "ORI-3-141",
    "grade": 3,
    "category": "体を育もう",
    "kind": "choice",
    "prompt": "栄養素の摂取について最も適切な姿勢はどれか。",
    "options": [
      "一種類の食品のみで常に十分と考える",
      "広告の体験談を優先する",
      "栄養素が多いほど無制限に摂る",
      "量とバランスを考え多様な食品を組み合わせる",
      "食品の安全性を考えない"
    ],
    "answer": 3,
    "explanation": "必要量には個人差があり、偏らない食事が基本です。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "ORI-3-142",
    "grade": 3,
    "category": "知を育もう",
    "kind": "choice",
    "prompt": "五節句の「人日」は何月何日か。",
    "options": [
      "3月3日",
      "1月7日",
      "9月9日",
      "5月5日",
      "7月7日"
    ],
    "answer": 1,
    "explanation": "人日の節句は1月7日で七草粥が行事食として知られます。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "ORI-3-143",
    "grade": 3,
    "category": "知を育もう",
    "kind": "choice",
    "prompt": "五節句の「上巳」は何月何日か。",
    "options": [
      "7月7日",
      "1月7日",
      "9月9日",
      "5月5日",
      "3月3日"
    ],
    "answer": 4,
    "explanation": "上巳の節句は3月3日で、桃の節句とも呼ばれます。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "ORI-3-144",
    "grade": 3,
    "category": "知を育もう",
    "kind": "choice",
    "prompt": "五節句の「端午」は何月何日か。",
    "options": [
      "5月5日",
      "9月9日",
      "7月7日",
      "1月7日",
      "3月3日"
    ],
    "answer": 0,
    "explanation": "端午の節句は5月5日です。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "ORI-3-145",
    "grade": 3,
    "category": "知を育もう",
    "kind": "choice",
    "prompt": "五節句の「七夕」は何月何日か。",
    "options": [
      "9月9日",
      "7月7日",
      "3月3日",
      "5月5日",
      "1月7日"
    ],
    "answer": 1,
    "explanation": "七夕の節句は7月7日です。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "ORI-3-146",
    "grade": 3,
    "category": "知を育もう",
    "kind": "choice",
    "prompt": "五節句の「重陽」は何月何日か。",
    "options": [
      "5月5日",
      "3月3日",
      "1月7日",
      "9月9日",
      "7月7日"
    ],
    "answer": 3,
    "explanation": "重陽の節句は9月9日で菊の節句とも呼ばれます。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "ORI-3-147",
    "grade": 3,
    "category": "知を育もう",
    "kind": "choice",
    "prompt": "七草粥を食べる行事と時期の組合せとして適切なのはどれか。",
    "options": [
      "七夕・7月7日",
      "端午・5月5日",
      "人日・1月7日",
      "上巳・3月3日",
      "重陽・9月9日"
    ],
    "answer": 2,
    "explanation": "七草粥は人日の節句の行事食です。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "ORI-3-148",
    "grade": 3,
    "category": "知を育もう",
    "kind": "choice",
    "prompt": "ひな祭りに関係が深い料理として適切なのはどれか。",
    "options": [
      "七草粥",
      "年越しそば",
      "柏餅",
      "月見団子",
      "ちらし寿司"
    ],
    "answer": 4,
    "explanation": "ちらし寿司やはまぐりの吸い物は桃の節句に親しまれています。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "ORI-3-149",
    "grade": 3,
    "category": "知を育もう",
    "kind": "choice",
    "prompt": "端午の節句の行事食として適切なものはどれか。",
    "options": [
      "ひなあられ",
      "お月見団子",
      "七草粥",
      "ちまき",
      "年越しそば"
    ],
    "answer": 3,
    "explanation": "端午には柏餅やちまきが食べられます。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "ORI-3-150",
    "grade": 3,
    "category": "知を育もう",
    "kind": "choice",
    "prompt": "重陽の節句と関係の深い花はどれか。",
    "options": [
      "桃",
      "菊",
      "梅",
      "菖蒲",
      "桜"
    ],
    "answer": 1,
    "explanation": "9月9日の重陽は菊の節句と呼ばれます。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "ORI-3-151",
    "grade": 3,
    "category": "知を育もう",
    "kind": "choice",
    "prompt": "大みそかに食べる習慣がある料理はどれか。",
    "options": [
      "年越しそば",
      "七草粥",
      "ひなあられ",
      "月見団子",
      "柏餅"
    ],
    "answer": 0,
    "explanation": "年越しそばは年末の行事食の一つです。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "ORI-3-152",
    "grade": 3,
    "category": "知を育もう",
    "kind": "choice",
    "prompt": "秋の月見の時期に親しまれる行事食はどれか。",
    "options": [
      "柏餅",
      "月見団子",
      "おせち料理",
      "七草粥",
      "ちまき"
    ],
    "answer": 1,
    "explanation": "十五夜などの月見では団子を供える風習があります。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "ORI-3-153",
    "grade": 3,
    "category": "知を育もう",
    "kind": "choice",
    "prompt": "「ハレ」と「ケ」の説明として適切なのはどれか。",
    "options": [
      "ハレは食事、ケは飲み物を指す",
      "どちらも節分だけを指す",
      "ハレは日常、ケは祝いの日を表す",
      "ハレは祭りなど特別な日、ケは日常を表す",
      "どちらも季節の野菜名を指す"
    ],
    "answer": 3,
    "explanation": "ハレは非日常的な祝祭、ケは日常の生活を指す言葉です。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "ORI-3-154",
    "grade": 3,
    "category": "知を育もう",
    "kind": "choice",
    "prompt": "和食の「だし」で昆布に多く含まれるうま味成分はどれか。",
    "options": [
      "乳酸",
      "クエン酸",
      "イノシン酸",
      "グアニル酸",
      "グルタミン酸"
    ],
    "answer": 4,
    "explanation": "昆布の代表的なうま味成分はグルタミン酸です。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "ORI-3-155",
    "grade": 3,
    "category": "知を育もう",
    "kind": "choice",
    "prompt": "干ししいたけに多く含まれるうま味成分として適切なのはどれか。",
    "options": [
      "リンゴ酸",
      "乳糖",
      "クエン酸",
      "グアニル酸",
      "イノシン酸"
    ],
    "answer": 3,
    "explanation": "干ししいたけにはグアニル酸が含まれ、うま味を生みます。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "ORI-3-156",
    "grade": 3,
    "category": "知を育もう",
    "kind": "choice",
    "prompt": "かつお節の主なうま味成分はどれか。",
    "options": [
      "グアニル酸",
      "クエン酸",
      "イノシン酸",
      "リンゴ酸",
      "乳糖"
    ],
    "answer": 2,
    "explanation": "かつお節の代表的なうま味成分はイノシン酸です。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "ORI-3-157",
    "grade": 3,
    "category": "知を育もう",
    "kind": "choice",
    "prompt": "異なるうま味成分を組み合わせると味が強く感じられる現象はどれか。",
    "options": [
      "酸化防止",
      "うま味の相乗効果",
      "浸透圧",
      "加熱殺菌",
      "乳化"
    ],
    "answer": 1,
    "explanation": "グルタミン酸とイノシン酸などの組合せでうま味が強まることがあります。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "ORI-3-158",
    "grade": 3,
    "category": "知を育もう",
    "kind": "choice",
    "prompt": "和食の基本的な配膳で、ご飯を置く位置として一般的なのはどれか。",
    "options": [
      "料理の上",
      "食べる人から見て手前の左側",
      "奥の中央",
      "手前の右側",
      "奥の右側"
    ],
    "answer": 1,
    "explanation": "和食の一般的な配膳ではご飯を左手前、汁物を右手前に置きます。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "ORI-3-159",
    "grade": 3,
    "category": "知を育もう",
    "kind": "choice",
    "prompt": "和食の基本的な配膳で、汁物を置く位置として一般的なのはどれか。",
    "options": [
      "主菜の上",
      "手前の左側",
      "奥の中央",
      "奥の左側",
      "食べる人から見て手前の右側"
    ],
    "answer": 4,
    "explanation": "一般的にはご飯が左手前、汁物が右手前です。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "ORI-3-160",
    "grade": 3,
    "category": "知を育もう",
    "kind": "choice",
    "prompt": "箸を食べ物に突き刺す「刺し箸」について適切なのはどれか。",
    "options": [
      "祝い事では必須である",
      "ご飯だけに推奨される",
      "食事のマナーとして避ける",
      "洋食の作法である",
      "配膳の正式手順である"
    ],
    "answer": 2,
    "explanation": "刺し箸は一般に避けたい箸づかいです。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "ORI-3-161",
    "grade": 3,
    "category": "知を育もう",
    "kind": "choice",
    "prompt": "器を箸先で引き寄せる「寄せ箸」について適切なのはどれか。",
    "options": [
      "汁椀にのみ推奨される",
      "行事食に限って許される",
      "正式な配膳方法である",
      "食事のマナーとして避ける",
      "魚料理では必ず行う"
    ],
    "answer": 3,
    "explanation": "食器を箸で引き寄せることはマナーとして避けます。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "ORI-3-162",
    "grade": 3,
    "category": "知を育もう",
    "kind": "choice",
    "prompt": "日本料理で季節感を表す工夫として適切なのはどれか。",
    "options": [
      "年間を通じて旬を無視する",
      "料理の色を必ず一色にする",
      "器の素材を使い分けない",
      "料理の温度を考えない",
      "旬の食材や器、盛りつけを工夫する"
    ],
    "answer": 4,
    "explanation": "日本料理では食材に加え器やあしらいでも季節を表します。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "ORI-3-163",
    "grade": 3,
    "category": "知を育もう",
    "kind": "choice",
    "prompt": "「旬」について最も適切な説明はどれか。",
    "options": [
      "全食品の消費期限を指す",
      "栄養表示の単位を指す",
      "食品の産地表示を指す",
      "食材が季節的に出回りやすい時期を指す",
      "輸送の距離を指す"
    ],
    "answer": 3,
    "explanation": "旬は地域や栽培方法などによっても時期が異なります。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "ORI-3-164",
    "grade": 3,
    "category": "知を育もう",
    "kind": "choice",
    "prompt": "日本の伝統的な発酵食品の組合せはどれか。",
    "options": [
      "白米・食パン・砂糖",
      "油・酢・水",
      "味噌・納豆・しょうゆ",
      "食塩・砂糖・水",
      "生野菜・果物・水"
    ],
    "answer": 2,
    "explanation": "味噌、納豆、しょうゆなどは微生物の働きを活用する発酵食品です。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "ORI-3-165",
    "grade": 3,
    "category": "知を育もう",
    "kind": "choice",
    "prompt": "味噌づくりで利用される代表的な微生物はどれか。",
    "options": [
      "ボツリヌス菌",
      "ノロウイルス",
      "腸管出血性大腸菌",
      "麹菌",
      "サルモネラ菌"
    ],
    "answer": 3,
    "explanation": "味噌は米・麦・大豆などを麹菌で発酵させて製造されます。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "ORI-3-166",
    "grade": 3,
    "category": "知を育もう",
    "kind": "choice",
    "prompt": "納豆の製造に主に利用されるものはどれか。",
    "options": [
      "酵母のみ",
      "酢酸菌",
      "乳酸菌のみ",
      "麹菌のみ",
      "納豆菌"
    ],
    "answer": 4,
    "explanation": "納豆は納豆菌による発酵を利用します。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "ORI-3-167",
    "grade": 3,
    "category": "知を育もう",
    "kind": "choice",
    "prompt": "ヨーグルトづくりに主に利用されるものはどれか。",
    "options": [
      "納豆菌",
      "乳酸菌",
      "アニサキス",
      "カンピロバクター",
      "ノロウイルス"
    ],
    "answer": 1,
    "explanation": "ヨーグルトは乳酸菌などの発酵によって作られます。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "ORI-3-168",
    "grade": 3,
    "category": "知を育もう",
    "kind": "choice",
    "prompt": "郷土料理に関する説明としてもっとも適切なのはどれか。",
    "options": [
      "全国の調理法を必ず一つに統一する料理",
      "季節とのつながりが一切ない料理",
      "地域の気候や歴史、食材などに根ざして受け継がれた料理",
      "輸入食材だけを使う料理",
      "外食店でしか提供されない料理"
    ],
    "answer": 2,
    "explanation": "郷土料理には地域の自然環境や暮らしの知恵が反映されています。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "ORI-3-169",
    "grade": 3,
    "category": "知を育もう",
    "kind": "choice",
    "prompt": "沖縄の郷土料理として知られるものはどれか。",
    "options": [
      "ほうとう",
      "ひつまぶし",
      "きりたんぽ鍋",
      "ゴーヤーチャンプルー",
      "深川めし"
    ],
    "answer": 3,
    "explanation": "ゴーヤーチャンプルーは沖縄で親しまれている料理です。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "ORI-3-170",
    "grade": 3,
    "category": "知を育もう",
    "kind": "choice",
    "prompt": "秋田の郷土料理として知られるものはどれか。",
    "options": [
      "深川めし",
      "ゴーヤーチャンプルー",
      "沖縄そば",
      "きりたんぽ鍋",
      "ほうとう"
    ],
    "answer": 3,
    "explanation": "きりたんぽ鍋は秋田県の郷土料理です。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "ORI-3-171",
    "grade": 3,
    "category": "知を育もう",
    "kind": "choice",
    "prompt": "山梨の郷土料理として知られるものはどれか。",
    "options": [
      "沖縄そば",
      "ひつまぶし",
      "きりたんぽ鍋",
      "深川めし",
      "ほうとう"
    ],
    "answer": 4,
    "explanation": "ほうとうは山梨県の郷土料理として知られます。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "ORI-3-172",
    "grade": 3,
    "category": "知を育もう",
    "kind": "choice",
    "prompt": "日本の「いただきます」に込められた考えとして適切なのはどれか。",
    "options": [
      "料理を批評するだけの言葉",
      "食材の品質表示を確認する合図",
      "食事の終了を必ず知らせる言葉",
      "調理温度を測定する宣言",
      "食材の命や食事を用意した人への感謝"
    ],
    "answer": 4,
    "explanation": "食事前の「いただきます」には食材や作り手への感謝の意味があります。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "ORI-3-173",
    "grade": 3,
    "category": "知を育もう",
    "kind": "choice",
    "prompt": "食事の「ごちそうさま」に関係の深い意味はどれか。",
    "options": [
      "新しい料理の注文",
      "食器の消毒",
      "食事を用意した人への感謝",
      "食品表示の確認",
      "献立のカロリー計算"
    ],
    "answer": 2,
    "explanation": "「ごちそうさま」は食後の感謝を表します。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "ORI-3-174",
    "grade": 3,
    "category": "知を育もう",
    "kind": "choice",
    "prompt": "おせち料理の「黒豆」に込められる願いとして知られるものはどれか。",
    "options": [
      "魚が豊漁になる",
      "雪が多く降る",
      "まめに働き、健康に暮らす",
      "長寿の米を収穫する",
      "必ず大金持ちになる"
    ],
    "answer": 2,
    "explanation": "「まめ」という言葉にかけて健康や勤勉を願う意味が込められます。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "ORI-3-175",
    "grade": 3,
    "category": "知を育もう",
    "kind": "choice",
    "prompt": "おせち料理の「数の子」に込められる願いとして知られるものはどれか。",
    "options": [
      "豊漁だけ",
      "商売繁盛だけ",
      "五穀豊穣だけ",
      "子孫繁栄",
      "無病息災だけ"
    ],
    "answer": 3,
    "explanation": "数の子には子孫繁栄を願う意味があります。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "ORI-3-176",
    "grade": 3,
    "category": "知を育もう",
    "kind": "choice",
    "prompt": "おせち料理の「田作り」に関係の深い願いはどれか。",
    "options": [
      "交通安全だけ",
      "子孫繁栄だけ",
      "五穀豊穣",
      "良縁だけ",
      "学業成就だけ"
    ],
    "answer": 2,
    "explanation": "田作りは田畑の肥料に魚を用いた歴史にちなみ豊作を願います。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "ORI-3-177",
    "grade": 3,
    "category": "知を育もう",
    "kind": "choice",
    "prompt": "味覚に分類されるものの組合せとして適切なのはどれか。",
    "options": [
      "うま味・色味・温味・苦味・渋味",
      "甘味・辛味・渋味・香味・温味",
      "酸味・苦味・香味・冷味・色味",
      "塩味・香味・食感・甘味・辛味",
      "甘味・酸味・塩味・苦味・うま味"
    ],
    "answer": 4,
    "explanation": "基本味は甘味、酸味、塩味、苦味、うま味の五つです。辛味は痛覚に近い感覚とされます。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "ORI-3-178",
    "grade": 3,
    "category": "知を育もう",
    "kind": "choice",
    "prompt": "食事のおいしさに影響するものとしてもっとも適切なのはどれか。",
    "options": [
      "食べる時間帯だけ",
      "食材の価格のみ",
      "味・香り・食感・温度・経験・環境など",
      "器の大きさのみ",
      "味覚のみで香りは無関係"
    ],
    "answer": 2,
    "explanation": "おいしさは五感や経験、食事環境など多様な要因で感じられます。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "ORI-3-179",
    "grade": 3,
    "category": "知を育もう",
    "kind": "choice",
    "prompt": "行事食や郷土料理を学ぶ目的として適切なのはどれか。",
    "options": [
      "伝統を必ず変えないことだけを重視する",
      "地域の歴史や生活文化への理解を深める",
      "旬の食材を避ける",
      "家庭の調理を禁止する",
      "すべての献立を全国で統一する"
    ],
    "answer": 1,
    "explanation": "伝統食は地域ごとの知恵や生活文化を伝えるきっかけになります。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "ORI-3-180",
    "grade": 3,
    "category": "徳を育もう",
    "kind": "choice",
    "prompt": "期限表示のうち「安全に食べられる期限」に関係するのはどれか。",
    "options": [
      "栄養成分表",
      "賞味期限",
      "内容量",
      "消費期限",
      "製造番号"
    ],
    "answer": 3,
    "explanation": "消費期限は定められた方法で保存された未開封品を安全に食べられる期限です。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "ORI-3-181",
    "grade": 3,
    "category": "徳を育もう",
    "kind": "choice",
    "prompt": "期限表示のうち「おいしく食べられる期限の目安」はどれか。",
    "options": [
      "消費期限",
      "製造番号",
      "内容量",
      "産地名",
      "賞味期限"
    ],
    "answer": 4,
    "explanation": "賞味期限は定められた保存条件を守った未開封品の品質の目安です。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "ORI-3-182",
    "grade": 3,
    "category": "徳を育もう",
    "kind": "choice",
    "prompt": "消費期限が表示されやすい食品はどれか。",
    "options": [
      "乾燥パスタ",
      "乾物の昆布",
      "乾燥した米",
      "未開封の長期保存用缶詰",
      "弁当やサンドイッチなど傷みやすい食品"
    ],
    "answer": 4,
    "explanation": "比較的傷みやすい食品には通常消費期限が表示されます。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "ORI-3-183",
    "grade": 3,
    "category": "徳を育もう",
    "kind": "choice",
    "prompt": "賞味期限が表示されやすい食品はどれか。",
    "options": [
      "未開封の缶詰や乾麺など比較的日持ちする食品",
      "当日調理のサンドイッチ",
      "調理したての弁当",
      "その場で調理した惣菜",
      "生クリームを使った当日販売の洋菓子"
    ],
    "answer": 0,
    "explanation": "比較的品質が保たれやすい食品は賞味期限で表示されることがあります。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "ORI-3-184",
    "grade": 3,
    "category": "徳を育もう",
    "kind": "choice",
    "prompt": "開封した加工食品の取り扱いとして適切なのはどれか。",
    "options": [
      "期限を一切確認しない",
      "開封後も未開封と同じ保存条件でよい",
      "賞味期限まで常温で必ず安全",
      "保存方法を守り、期限表示にかかわらず早めに使い切る",
      "匂いがなければ無期限に保存できる"
    ],
    "answer": 3,
    "explanation": "消費期限・賞味期限は原則として未開封の状態が前提です。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "ORI-3-185",
    "grade": 3,
    "category": "徳を育もう",
    "kind": "choice",
    "prompt": "一般に「原材料名」はどのような順番で表示されるか。",
    "options": [
      "使用した重量割合が多い順",
      "産地が遠い順",
      "五十音順",
      "価格が高い順",
      "色が濃い順"
    ],
    "answer": 0,
    "explanation": "加工食品の原材料名は原則として重量の割合が多い順に表示されます。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "ORI-3-186",
    "grade": 3,
    "category": "徳を育もう",
    "kind": "choice",
    "prompt": "食品の栄養成分表示の基本項目に含まれるものはどれか。",
    "options": [
      "担当者の名前",
      "製造機械の型式",
      "販売店の面積",
      "輸送トラックの台数",
      "たんぱく質"
    ],
    "answer": 4,
    "explanation": "基本項目にはエネルギー、たんぱく質、脂質、炭水化物、食塩相当量があります。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "ORI-3-187",
    "grade": 3,
    "category": "徳を育もう",
    "kind": "choice",
    "prompt": "食塩相当量が示すものとして適切なのはどれか。",
    "options": [
      "たんぱく質の量",
      "食品添加物の総種類数",
      "食物繊維の量",
      "ナトリウム量を食塩の量に換算した値",
      "食品に含まれる糖類の量"
    ],
    "answer": 3,
    "explanation": "食塩相当量はナトリウム量を食塩として換算して示した値です。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "ORI-3-188",
    "grade": 3,
    "category": "徳を育もう",
    "kind": "choice",
    "prompt": "ナトリウム1gを食塩相当量に換算すると概ねいくらか。",
    "options": [
      "約0.4g",
      "約10g",
      "約1g",
      "約2.54g",
      "約4g"
    ],
    "answer": 3,
    "explanation": "食塩相当量(g)＝ナトリウム(g)×約2.54で求めます。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "ORI-3-189",
    "grade": 3,
    "category": "徳を育もう",
    "kind": "choice",
    "prompt": "ナトリウム0.5gの食塩相当量はおよそいくらか。",
    "options": [
      "約5.0g",
      "約1.3g",
      "約0.2g",
      "約2.5g",
      "約0.5g"
    ],
    "answer": 1,
    "explanation": "0.5×2.54＝1.27gで、およそ1.3gです。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "ORI-3-190",
    "grade": 3,
    "category": "徳を育もう",
    "kind": "choice",
    "prompt": "栄養成分表の「100g当たり」と「1食当たり」を比較するときに重要なのはどれか。",
    "options": [
      "たんぱく質の欄だけを見る",
      "表示の基準量が異なることに注意する",
      "価格だけを基準にする",
      "数値が同じなら量は常に同じと考える",
      "表示の単位は必ず無視する"
    ],
    "answer": 1,
    "explanation": "表示が100g当たりか1食当たりかで摂取量の計算が変わります。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "ORI-3-191",
    "grade": 3,
    "category": "徳を育もう",
    "kind": "choice",
    "prompt": "100g当たり250kcalの食品を80g食べた場合のエネルギーはどれか。",
    "options": [
      "312.5kcal",
      "150kcal",
      "250kcal",
      "180kcal",
      "200kcal"
    ],
    "answer": 4,
    "explanation": "250×80÷100＝200kcalです。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "ORI-3-192",
    "grade": 3,
    "category": "徳を育もう",
    "kind": "choice",
    "prompt": "内容量200gの商品で「100g当たり200kcal」と表示されている。全量のエネルギーはどれか。",
    "options": [
      "200kcal",
      "500kcal",
      "300kcal",
      "100kcal",
      "400kcal"
    ],
    "answer": 4,
    "explanation": "100g当たり200kcalなので、200gでは400kcalです。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "ORI-3-193",
    "grade": 3,
    "category": "徳を育もう",
    "kind": "choice",
    "prompt": "食品アレルギーのある人が購入前に確認すべきものはどれか。",
    "options": [
      "原材料とアレルゲン表示",
      "宣伝写真だけ",
      "パッケージの色だけ",
      "価格だけ",
      "商品名だけ"
    ],
    "answer": 0,
    "explanation": "食品表示はアレルゲンを確認する重要な情報源です。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "ORI-3-194",
    "grade": 3,
    "category": "徳を育もう",
    "kind": "choice",
    "prompt": "同じ商品を繰り返し買うときのアレルゲン確認として適切なのはどれか。",
    "options": [
      "原材料変更に備えて毎回表示を確認する",
      "調理すれば必ずアレルゲンがなくなる",
      "値段が同じなら内容も必ず同じ",
      "一度食べられれば表示を見なくてよい",
      "パッケージの色で決める"
    ],
    "answer": 0,
    "explanation": "原材料や製造条件が変更される場合があるため、購入の都度確認します。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "ORI-3-195",
    "grade": 3,
    "category": "徳を育もう",
    "kind": "choice",
    "prompt": "食品の交差接触（コンタミネーション）を防ぐ行動として適切なのはどれか。",
    "options": [
      "少量なら全員に安全と決めつける",
      "アレルゲンを含む食材と調理器具を適切に分けて管理する",
      "一度加熱すれば必ず安全と考える",
      "使った調理器具を洗わず共有する",
      "アレルゲンを隠して提供する"
    ],
    "answer": 1,
    "explanation": "アレルギー対応では原材料だけでなく調理中の交差接触にも注意します。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "ORI-3-196",
    "grade": 3,
    "category": "徳を育もう",
    "kind": "choice",
    "prompt": "有機JASマークの説明として適切なのはどれか。",
    "options": [
      "農薬使用が完全にゼロであることを無条件に保証する",
      "国産食品すべてに自動的に付く",
      "賞味期限を延長する",
      "有機JASの基準に適合し認証された食品等に付けられる",
      "食品の味の優劣を保証する"
    ],
    "answer": 3,
    "explanation": "有機JASマークは基準に沿った生産と認証に関するマークです。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "ORI-3-197",
    "grade": 3,
    "category": "徳を育もう",
    "kind": "choice",
    "prompt": "「有機」の表示について最も適切な姿勢はどれか。",
    "options": [
      "緑色の包装なら有機と考える",
      "有機JASの認証や表示を確認する",
      "高価なら必ず有機と考える",
      "国内産なら必ず有機と考える",
      "農産物はすべて自動的に有機とみなす"
    ],
    "answer": 1,
    "explanation": "有機農産物などの表示には制度上の基準と認証があります。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "ORI-3-198",
    "grade": 3,
    "category": "徳を育もう",
    "kind": "choice",
    "prompt": "食品の原産地表示を確認する意義として適切なのはどれか。",
    "options": [
      "食品の賞味期限を知る",
      "食品の安全性を一律保証する",
      "販売利益を正確に知る",
      "生産日だけを必ず把握できる",
      "生産された場所などを把握し選択に役立てる"
    ],
    "answer": 4,
    "explanation": "原産地表示は食品や原材料の産地に関する情報を提供します。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "ORI-3-199",
    "grade": 3,
    "category": "徳を育もう",
    "kind": "choice",
    "prompt": "食品表示における「内容量」とは何か。",
    "options": [
      "包装のデザイン費",
      "販売された個数の累計",
      "食品に含まれるビタミンの種類数",
      "商品の正味の中身の量",
      "調理に使った時間"
    ],
    "answer": 3,
    "explanation": "内容量は食品の重量や体積、数量などを示します。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "ORI-3-200",
    "grade": 3,
    "category": "徳を育もう",
    "kind": "choice",
    "prompt": "加工食品の表示で「保存方法」を見る理由として適切なのはどれか。",
    "options": [
      "生産者の人数を知る",
      "食材の旬を保証する",
      "品質や安全性を保つ条件を確認する",
      "販売価格を知る",
      "調理方法を必ず一つに決める"
    ],
    "answer": 2,
    "explanation": "期限表示は通常、指定された保存条件が守られることを前提にしています。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "ORI-3-201",
    "grade": 3,
    "category": "徳を育もう",
    "kind": "choice",
    "prompt": "「栄養強調表示」の内容を理解するうえで適切なのはどれか。",
    "options": [
      "有機JASマークと同じ制度と考える",
      "「ゼロ」はあらゆる意味で完全な無含有と断定する",
      "表示の基準と栄養成分の量を確認する",
      "広告の印象だけで判断する",
      "食品の味を示すだけと考える"
    ],
    "answer": 2,
    "explanation": "「低糖」「ゼロ」などの表現には所定の表示基準があり、表示の読み取りが必要です。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "ORI-3-202",
    "grade": 3,
    "category": "徳を育もう",
    "kind": "choice",
    "prompt": "食品添加物に関する説明で適切なのはどれか。",
    "options": [
      "食品添加物は必ず食品の主材料である",
      "用途や使用基準などに基づき使用されるものがある",
      "どんな量でも安全性を考えず使用できる",
      "食品添加物はすべて使用禁止である",
      "表示の対象にならないと決まっている"
    ],
    "answer": 1,
    "explanation": "食品添加物には保存料や着色料などがあり、用途や基準が定められています。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "ORI-3-203",
    "grade": 3,
    "category": "徳を育もう",
    "kind": "choice",
    "prompt": "「保存料」の主な使用目的として適切なのはどれか。",
    "options": [
      "微生物による変敗を抑える",
      "食品の原産地を表示する",
      "食品の塩分を必ずゼロにする",
      "食品のカロリーを必ず増やす",
      "すべてのアレルゲンをなくす"
    ],
    "answer": 0,
    "explanation": "保存料は食品の保存性を高める目的で使用されます。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "ORI-3-204",
    "grade": 3,
    "category": "徳を育もう",
    "kind": "choice",
    "prompt": "「着色料」の主な使用目的として適切なのはどれか。",
    "options": [
      "栄養価を必ず高める",
      "食品に色を付けたり色調を整える",
      "調理器具を消毒する",
      "食品の塩分を減らす",
      "消費期限を延ばす"
    ],
    "answer": 1,
    "explanation": "着色料は食品の色を調整する添加物です。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "ORI-3-205",
    "grade": 3,
    "category": "徳を育もう",
    "kind": "choice",
    "prompt": "加工食品の「乳化剤」の役割として一般に適切なのはどれか。",
    "options": [
      "食品の産地を測定する",
      "食品の水分を完全に除去する",
      "食品を必ず凍結させる",
      "食品の味覚をなくす",
      "混ざりにくい油と水を均一に分散させる"
    ],
    "answer": 4,
    "explanation": "乳化剤は油と水の分散などに使用されます。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "ORI-3-206",
    "grade": 3,
    "category": "徳を育もう",
    "kind": "choice",
    "prompt": "「遺伝子組換え食品」の表示を考えるとき適切なのはどれか。",
    "options": [
      "すべての食品に必ず同じ表示がある",
      "対象となる食品や原材料に応じた制度と基準がある",
      "表示は製造者の好みだけで決まる",
      "遺伝子組換えと有機JASは同一制度である",
      "輸入食品は表示制度の対象外と決まっている"
    ],
    "answer": 1,
    "explanation": "遺伝子組換え食品の表示は対象原材料や流通条件などの制度に基づきます。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "ORI-3-207",
    "grade": 3,
    "category": "徳を育もう",
    "kind": "choice",
    "prompt": "「生鮮三品」の組合せとして適切なのはどれか。",
    "options": [
      "農産物・水産物・畜産物",
      "常温品・冷蔵品・冷凍品",
      "穀物・調味料・飲料",
      "主食・主菜・副菜",
      "弁当・菓子・冷凍食品"
    ],
    "answer": 0,
    "explanation": "生鮮三品は農産物、水産物、畜産物を指します。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "ORI-3-208",
    "grade": 3,
    "category": "徳を育もう",
    "kind": "choice",
    "prompt": "「農産物」の例として適切なのはどれか。",
    "options": [
      "あじ",
      "まぐろ",
      "牛肉",
      "鶏卵",
      "キャベツ"
    ],
    "answer": 4,
    "explanation": "キャベツなどの野菜は農産物に分類されます。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "ORI-3-209",
    "grade": 3,
    "category": "徳を育もう",
    "kind": "choice",
    "prompt": "「水産物」の例として適切なのはどれか。",
    "options": [
      "あじ",
      "牛乳",
      "じゃがいも",
      "鶏卵",
      "豚肉"
    ],
    "answer": 0,
    "explanation": "あじなどの魚介類は水産物に分類されます。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "ORI-3-210",
    "grade": 3,
    "category": "徳を育もう",
    "kind": "choice",
    "prompt": "「畜産物」の例として適切なのはどれか。",
    "options": [
      "まぐろ",
      "鶏卵",
      "大根",
      "白菜",
      "昆布"
    ],
    "answer": 1,
    "explanation": "鶏卵や牛乳、食肉などは畜産物に分類されます。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "ORI-3-211",
    "grade": 3,
    "category": "徳を育もう",
    "kind": "choice",
    "prompt": "加工食品の「冷凍食品」を買った後に望ましい行動はどれか。",
    "options": [
      "表示された保存温度を守って速やかに保管する",
      "常温の車内に長時間放置する",
      "解凍と再冷凍を無計画に繰り返す",
      "包装があれば温度管理は不要",
      "表示を無視して直射日光下に置く"
    ],
    "answer": 0,
    "explanation": "冷凍食品は適切な温度管理によって品質を保ちます。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "ORI-3-212",
    "grade": 3,
    "category": "徳を育もう",
    "kind": "choice",
    "prompt": "食品を買う際に「単位価格」を比較する方法として適切なのはどれか。",
    "options": [
      "賞味期限だけで価格を決める",
      "商品の総価格だけで必ず判断する",
      "包装の大きさを重量とみなす",
      "100g当たりなど同じ単位で価格を比べる",
      "内容量を無視する"
    ],
    "answer": 3,
    "explanation": "内容量が異なる商品は単位価格に換算すると比較しやすくなります。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "ORI-3-213",
    "grade": 3,
    "category": "徳を育もう",
    "kind": "choice",
    "prompt": "200gで300円と300gで420円の同種食品がある。100g当たりが安いのはどちらか。",
    "options": [
      "200gで300円の商品",
      "300gで420円の商品",
      "どちらも100円で同額",
      "どちらも150円で同額",
      "内容量が違うと比較できない"
    ],
    "answer": 1,
    "explanation": "200gで300円は100g当たり150円、300gで420円は140円です。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "ORI-3-214",
    "grade": 3,
    "category": "徳を育もう",
    "kind": "choice",
    "prompt": "食品の選択で「価格以外」の情報として適切な組合せはどれか。",
    "options": [
      "原材料・期限表示・保存方法",
      "商品の愛称・店員の服装・照明",
      "広告の色・販売店のBGM・天気",
      "購入者の人数・レジの列・客層",
      "陳列棚の高さ・店舗面積・床の色"
    ],
    "answer": 0,
    "explanation": "食品選択には原材料、保存方法、期限などの表示が役立ちます。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "ORI-3-215",
    "grade": 3,
    "category": "徳を育もう",
    "kind": "choice",
    "prompt": "健康食品の宣伝文句を受け取る際の判断として適切なのはどれか。",
    "options": [
      "体験談だけで全員に効果を保証する",
      "価格が高いほど効果を保証する",
      "他の食品をすべてやめる",
      "広告であれば医薬品と同じと考える",
      "公的情報や根拠を確認し、病気が治ると断定しない"
    ],
    "answer": 4,
    "explanation": "健康効果の宣伝は根拠や制度上の位置づけを確認する必要があります。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "ORI-3-216",
    "grade": 3,
    "category": "徳を育もう",
    "kind": "choice",
    "prompt": "食品マークを読む際に大切なことはどれか。",
    "options": [
      "表示条件を確認しない",
      "包装に印刷されていれば全て国が認証したと考える",
      "似た色のマークはすべて同じと考える",
      "マークがあれば全ての安全性が保証される",
      "各マークの意味と認証主体を確認する"
    ],
    "answer": 4,
    "explanation": "認証マークやリサイクル識別表示などは目的と意味がそれぞれ異なります。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "ORI-3-217",
    "grade": 3,
    "category": "徳を育もう",
    "kind": "choice",
    "prompt": "食品を選ぶ「トレーサビリティ」の考え方として適切なのはどれか。",
    "options": [
      "原材料を味だけで判定すること",
      "賞味期限を無期限にすること",
      "生産から流通までの履歴をたどれること",
      "必ず輸入品だけを選ぶこと",
      "原料を一切記録しないこと"
    ],
    "answer": 2,
    "explanation": "トレーサビリティは生産・加工・流通の履歴を把握する仕組みです。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "ORI-3-218",
    "grade": 3,
    "category": "才を育もう",
    "kind": "choice",
    "prompt": "食中毒予防の基本として最も適切な組合せはどれか。",
    "options": [
      "混ぜる・放置する・再利用する",
      "買う・運ぶ・販売する",
      "つけない・増やさない・やっつける",
      "増やす・加熱しない・保存する",
      "洗わない・冷やさない・残す"
    ],
    "answer": 2,
    "explanation": "食中毒予防では病原体をつけず、増やさず、必要に応じて減らすことが基本です。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "ORI-3-219",
    "grade": 3,
    "category": "才を育もう",
    "kind": "choice",
    "prompt": "細菌性食中毒を防ぐための冷蔵保存の主な目的はどれか。",
    "options": [
      "食品のカロリーをなくす",
      "食品中の毒素を必ず無害化する",
      "アレルゲンを除去する",
      "細菌を必ずすべて死滅させる",
      "細菌の増殖を遅くする"
    ],
    "answer": 4,
    "explanation": "冷蔵は多くの細菌の増殖を抑えますが、完全な殺菌ではありません。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "ORI-3-220",
    "grade": 3,
    "category": "才を育もう",
    "kind": "choice",
    "prompt": "「冷凍すればすべての食中毒菌が死滅する」という考え方について適切なのはどれか。",
    "options": [
      "食品の水分が完全になくなる",
      "解凍後も安全性が無条件に保証される",
      "すべての細菌と毒素が必ず消える",
      "微生物の増殖を抑えるが、すべて死滅するわけではない",
      "いつまでも品質が変化しない"
    ],
    "answer": 3,
    "explanation": "冷凍保存は増殖を抑える手段で、すべての危害をなくすわけではありません。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "ORI-3-221",
    "grade": 3,
    "category": "才を育もう",
    "kind": "choice",
    "prompt": "生肉を扱った手でサラダを調理する前に必要なのはどれか。",
    "options": [
      "手洗いと器具の洗浄・消毒",
      "同じ手袋をそのまま使う",
      "水ですすがず調理を続ける",
      "調理済み食品に触れて確認する",
      "生肉の汁を野菜にかける"
    ],
    "answer": 0,
    "explanation": "交差汚染を防ぐには手洗いと適切な器具管理が大切です。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "ORI-3-222",
    "grade": 3,
    "category": "才を育もう",
    "kind": "choice",
    "prompt": "中心部までの加熱を確認する目的として適切なのはどれか。",
    "options": [
      "冷凍食品の栄養素をゼロにする",
      "すべての食品を同じ味にする",
      "食品のアレルゲンを必ず消す",
      "食品中の全毒素を必ず消す",
      "食中毒の原因となる微生物を減らす"
    ],
    "answer": 4,
    "explanation": "必要な温度と時間の加熱は多くの微生物を減らすのに役立ちます。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "ORI-3-223",
    "grade": 3,
    "category": "才を育もう",
    "kind": "choice",
    "prompt": "ノロウイルスに関する説明として適切なのはどれか。",
    "options": [
      "アルコール消毒だけで常に十分である",
      "細菌の一種である",
      "少量でも感染し得るため手洗いや衛生管理が重要",
      "必ず加熱済み食品からのみ感染する",
      "冷蔵するとすべて死滅する"
    ],
    "answer": 2,
    "explanation": "ノロウイルスはウイルスで、手指や食品を介して広がることがあります。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "ORI-3-224",
    "grade": 3,
    "category": "才を育もう",
    "kind": "choice",
    "prompt": "調理従事者が嘔吐や下痢の症状を示している場合の対応として適切なのはどれか。",
    "options": [
      "業務後だけ手洗いすればよい",
      "責任者に報告し、食品を直接扱う作業を控える",
      "症状があっても加熱しない料理を担当する",
      "いつもどおり調理し報告しない",
      "手袋をすれば症状は無関係"
    ],
    "answer": 1,
    "explanation": "感染症が疑われる症状があるときは食品を直接扱わない等の対策が重要です。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "ORI-3-225",
    "grade": 3,
    "category": "才を育もう",
    "kind": "choice",
    "prompt": "カンピロバクターによる食中毒との関係が深いものはどれか。",
    "options": [
      "開封していない飲料水だけ",
      "密封された砂糖",
      "適切に加熱された乾燥パスタ",
      "加熱不十分な鶏肉",
      "加熱後にすぐ提供された白飯"
    ],
    "answer": 3,
    "explanation": "鶏肉の生食・加熱不足などはカンピロバクター食中毒の原因となります。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "ORI-3-226",
    "grade": 3,
    "category": "才を育もう",
    "kind": "choice",
    "prompt": "サルモネラ属菌の汚染源の一つとして知られるものはどれか。",
    "options": [
      "食用油だけ",
      "乾燥した精製砂糖だけ",
      "塩化ナトリウムだけ",
      "ミネラルウォーターの容器だけ",
      "鶏卵や食肉"
    ],
    "answer": 4,
    "explanation": "鶏卵や食肉などはサルモネラ属菌の汚染源となることがあります。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "ORI-3-227",
    "grade": 3,
    "category": "才を育もう",
    "kind": "choice",
    "prompt": "黄色ブドウ球菌による食中毒の予防として適切なのはどれか。",
    "options": [
      "手指の傷の管理や食品への汚染防止を徹底する",
      "手洗いは行わない",
      "食品を常温に長時間放置する",
      "加熱すれば毒素を必ず完全除去できると考える",
      "調理器具を洗わず使い回す"
    ],
    "answer": 0,
    "explanation": "黄色ブドウ球菌は人の手指などから食品に付着することがあります。産生毒素には熱に強いものがあります。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "ORI-3-228",
    "grade": 3,
    "category": "才を育もう",
    "kind": "choice",
    "prompt": "セレウス菌による食中毒を防ぐうえで適切な行動はどれか。",
    "options": [
      "再加熱すれば保存条件は一切関係ない",
      "調理後の米飯や麺類を常温で長時間放置しない",
      "調理器具を洗わない",
      "炊いたご飯を室温で一晩放置する",
      "冷却せずに大量調理品を置き続ける"
    ],
    "answer": 1,
    "explanation": "セレウス菌は米飯や麺などの不適切な温度管理で増殖することがあります。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "ORI-3-229",
    "grade": 3,
    "category": "才を育もう",
    "kind": "choice",
    "prompt": "腸管出血性大腸菌への対策として適切なのはどれか。",
    "options": [
      "食肉を十分に加熱し、交差汚染を防ぐ",
      "冷蔵すれば必ず菌が死ぬと考える",
      "食肉は外側の色だけ確認する",
      "食肉の保存温度を気にしない",
      "生肉に触れた器具を洗わず生野菜に使う"
    ],
    "answer": 0,
    "explanation": "O157などへの対策には加熱と交差汚染防止などが重要です。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "ORI-3-230",
    "grade": 3,
    "category": "才を育もう",
    "kind": "choice",
    "prompt": "ボツリヌス菌に関する説明として適切なのはどれか。",
    "options": [
      "酸素の少ない条件で増殖できる菌で、毒素に注意が必要",
      "どの保存温度でも増殖しない",
      "ウイルスの一種である",
      "家庭内で絶対に発生しない",
      "毒素は食品に関係がない"
    ],
    "answer": 0,
    "explanation": "ボツリヌス菌は嫌気性の細菌で、保存条件や加熱等の管理が重要です。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "ORI-3-231",
    "grade": 3,
    "category": "才を育もう",
    "kind": "choice",
    "prompt": "アニサキスによる食中毒の原因として適切なのはどれか。",
    "options": [
      "米の精米",
      "魚介類にいる寄生虫を生きたまま摂取すること",
      "穀物の発芽",
      "野菜の水分不足",
      "砂糖の食べ過ぎ"
    ],
    "answer": 1,
    "explanation": "アニサキスは魚介類に寄生する線虫で、生きた幼虫の摂取が問題になります。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "ORI-3-232",
    "grade": 3,
    "category": "才を育もう",
    "kind": "choice",
    "prompt": "アニサキス対策として適切なのはどれか。",
    "options": [
      "しょうゆに浸せば必ず安全",
      "わさびだけで確実に防げる",
      "酢に短く漬ければ必ず死滅",
      "食材の産地だけで安全性を保証",
      "適切な冷凍または加熱"
    ],
    "answer": 4,
    "explanation": "アニサキスは一般的な酢やしょうゆで死滅しないため、適切な冷凍・加熱などが有効です。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "ORI-3-233",
    "grade": 3,
    "category": "才を育もう",
    "kind": "choice",
    "prompt": "食中毒の原因として知られる「フグ毒」はどれか。",
    "options": [
      "テトロドトキシン",
      "アコニチン",
      "ヒスタミン",
      "ソラニン",
      "アフラトキシン"
    ],
    "answer": 0,
    "explanation": "フグに関係する代表的な毒はテトロドトキシンです。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "ORI-3-234",
    "grade": 3,
    "category": "才を育もう",
    "kind": "choice",
    "prompt": "ジャガイモの芽や緑化した部分などに含まれる天然毒素はどれか。",
    "options": [
      "アフラトキシン",
      "ヒスタミン",
      "テトロドトキシン",
      "アコニチン",
      "ソラニン類"
    ],
    "answer": 4,
    "explanation": "ジャガイモの芽や緑化部分にはソラニンやチャコニンなどが含まれます。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "ORI-3-235",
    "grade": 3,
    "category": "才を育もう",
    "kind": "choice",
    "prompt": "サバなどで発生することがある「ヒスタミン食中毒」と関係が深いのはどれか。",
    "options": [
      "食品の乾燥だけ",
      "加熱すると必ず原因物質が完全消失",
      "砂糖の結晶化",
      "必ず生魚の寄生虫だけが原因",
      "不適切な温度管理によるヒスタミンの蓄積"
    ],
    "answer": 4,
    "explanation": "ヒスタミンは不適切な温度管理で増えることがあり、一般的な加熱で分解されにくい物質です。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "ORI-3-236",
    "grade": 3,
    "category": "才を育もう",
    "kind": "choice",
    "prompt": "毒キノコによる食中毒への対応として適切なのはどれか。",
    "options": [
      "虫が食べたキノコは必ず安全",
      "色が鮮やかでなければ安全",
      "長時間煮れば全て無害になる",
      "食用と確実に判定できない野生キノコは食べない",
      "少量ならすべて安全と判断する"
    ],
    "answer": 3,
    "explanation": "毒キノコの見分けは難しく、安易な自己判断を避けます。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "ORI-3-237",
    "grade": 3,
    "category": "才を育もう",
    "kind": "choice",
    "prompt": "食品の「腐敗」と「発酵」の関係として適切なのはどれか。",
    "options": [
      "発酵には微生物が全く関与しない",
      "腐敗はすべて有益である",
      "腐敗と発酵は完全に同じ意味で使う",
      "微生物の働きでも、人にとって有益な変化と有害な変化を区別する",
      "発酵食品には必ず食中毒菌がいる"
    ],
    "answer": 3,
    "explanation": "微生物による変化のうち、人に有益なものを発酵、有害なものを腐敗と呼びます。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "ORI-3-238",
    "grade": 3,
    "category": "才を育もう",
    "kind": "choice",
    "prompt": "油脂の酸化を進めやすい条件はどれか。",
    "options": [
      "光・熱・酸素との接触",
      "適切な冷暗所での保存",
      "空気を遮断した包装",
      "低温・遮光・密封",
      "短時間での使用"
    ],
    "answer": 0,
    "explanation": "光・熱・酸素などは油脂の酸化を促進します。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "ORI-3-239",
    "grade": 3,
    "category": "才を育もう",
    "kind": "choice",
    "prompt": "油脂の酸化を抑える保存方法として適切なのはどれか。",
    "options": [
      "高温で長期間加熱し続ける",
      "保存条件を気にしない",
      "容器を開け放す",
      "光や高温、空気との接触をなるべく避ける",
      "直射日光の当たる場所に置く"
    ],
    "answer": 3,
    "explanation": "油脂の保存では遮光・温度管理・酸素との接触低減が重要です。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "ORI-3-240",
    "grade": 3,
    "category": "才を育もう",
    "kind": "choice",
    "prompt": "洗浄と消毒の違いについて適切なのはどれか。",
    "options": [
      "洗浄は加熱だけを指す",
      "消毒は汚れを増やす操作",
      "消毒は食品表示の確認を指す",
      "洗浄は汚れを落とし、消毒は微生物を減らす操作",
      "洗浄と消毒は常に同じ意味"
    ],
    "answer": 3,
    "explanation": "汚れの除去と微生物数の低減は異なる目的を持ちます。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "ORI-3-241",
    "grade": 3,
    "category": "才を育もう",
    "kind": "choice",
    "prompt": "包丁やまな板の衛生管理として適切なのはどれか。",
    "options": [
      "生肉用器具で直ちにサラダを作る",
      "洗浄後に用途に応じた消毒と乾燥を行う",
      "一度洗えば一生消毒は不要",
      "洗わず次の食品へ使う",
      "濡れたまま汚れと接触させる"
    ],
    "answer": 1,
    "explanation": "器具は使用後に適切に洗浄し、必要に応じて消毒・乾燥します。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "ORI-3-242",
    "grade": 3,
    "category": "才を育もう",
    "kind": "choice",
    "prompt": "調理した食品を室温に長時間放置しない主な理由はどれか。",
    "options": [
      "アレルゲンが必ず増えるため",
      "食品の重量が必ず倍になるため",
      "包装の色が変わるため",
      "微生物が増殖しやすくなるため",
      "塩分が必ずゼロになるため"
    ],
    "answer": 3,
    "explanation": "温度と時間の管理が食品の衛生に重要です。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "ORI-3-243",
    "grade": 3,
    "category": "才を育もう",
    "kind": "choice",
    "prompt": "冷却が必要な大量調理食品の取り扱いとして適切なのはどれか。",
    "options": [
      "小分けにするなどして速やかに冷却する",
      "大きな容器で室温のまま長時間放置する",
      "必要な記録を残さない",
      "温度計を一切使わない",
      "密閉したまま高温に保つ"
    ],
    "answer": 0,
    "explanation": "大量の食品は中心まで冷めにくいため、適切に小分けして冷却する工夫があります。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "ORI-3-244",
    "grade": 3,
    "category": "才を育もう",
    "kind": "choice",
    "prompt": "「食品ロス」に含まれるものとして適切なのはどれか。",
    "options": [
      "調理で取り除く土だけ",
      "空の容器だけ",
      "食べられない卵の殻だけ",
      "本来食べられるのに捨てられた食品",
      "通常食用にしない魚の骨だけ"
    ],
    "answer": 3,
    "explanation": "食品ロスはまだ食べられるにもかかわらず廃棄される食品を指します。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "ORI-3-245",
    "grade": 3,
    "category": "才を育もう",
    "kind": "choice",
    "prompt": "家庭で食品ロスを減らすための工夫として適切なのはどれか。",
    "options": [
      "食べきれない量を常に調理する",
      "余った料理を無条件に捨てる",
      "期限が近い食品を必ず放置する",
      "在庫を見ずに毎回買い込む",
      "冷蔵庫の在庫を確認して必要量を購入する"
    ],
    "answer": 4,
    "explanation": "在庫確認や適量購入、適切な保存は家庭の食品ロス削減につながります。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "ORI-3-246",
    "grade": 3,
    "category": "才を育もう",
    "kind": "choice",
    "prompt": "食品ロスを減らす「手前取り」とはどのような行動か。",
    "options": [
      "食品を陳列から取り除く",
      "必ず一番奥の商品だけを買う",
      "購入後すべて冷凍する",
      "賞味期限の長い商品しか買わない",
      "すぐ使う食品は棚の手前の商品から選ぶ"
    ],
    "answer": 4,
    "explanation": "すぐに食べるなら販売期限が近い手前の商品を選ぶ行動です。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "ORI-3-247",
    "grade": 3,
    "category": "才を育もう",
    "kind": "choice",
    "prompt": "食品のリサイクルで「飼料化」と呼ばれるものはどれか。",
    "options": [
      "食品残さなどを家畜の飼料として利用すること",
      "食品から水分だけ除くこと",
      "食品を必ず埋め立てること",
      "包装をすべて新品にすること",
      "食品をすべて焼却すること"
    ],
    "answer": 0,
    "explanation": "飼料化は食品残さ等を家畜の飼料として活用する方法です。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "ORI-3-248",
    "grade": 3,
    "category": "才を育もう",
    "kind": "choice",
    "prompt": "食品残さの「堆肥化」とはどのような取組か。",
    "options": [
      "すべての食品を冷凍する",
      "食品包装を燃料にするだけ",
      "有機物を分解して土づくりに役立てる",
      "食品を新鮮なまま販売する",
      "食品を必ずそのまま海へ流す"
    ],
    "answer": 2,
    "explanation": "堆肥化は有機性資源を分解・熟成して肥料等として利用する取組です。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "ORI-3-249",
    "grade": 3,
    "category": "才を育もう",
    "kind": "choice",
    "prompt": "食料自給率のうち「カロリーベース」は何を基準に計算するか。",
    "options": [
      "食事回数だけ",
      "食品の種類数だけ",
      "農地の面積だけ",
      "供給される食料の熱量",
      "食品の販売価格だけ"
    ],
    "answer": 3,
    "explanation": "カロリーベースの食料自給率は供給熱量から算定します。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "ORI-3-250",
    "grade": 3,
    "category": "才を育もう",
    "kind": "choice",
    "prompt": "食料自給率のうち「生産額ベース」は何を基準に計算するか。",
    "options": [
      "輸送距離だけ",
      "国内の食料生産と供給の金額",
      "食品のカロリーだけ",
      "家庭の食費だけ",
      "食品の重さだけ"
    ],
    "answer": 1,
    "explanation": "生産額ベースは生産額・供給額に着目する指標です。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "ORI-3-251",
    "grade": 3,
    "category": "才を育もう",
    "kind": "choice",
    "prompt": "地産地消が食品流通で期待される利点の一つはどれか。",
    "options": [
      "食品の輸送距離が必ずゼロになる",
      "すべての輸入を禁止する",
      "食品ロスを必ずゼロにする",
      "地域の生産者と消費者のつながりを強める",
      "全食品を通年同じ価格にする"
    ],
    "answer": 3,
    "explanation": "地域の食を知る機会や生産者とのつながりを促すことがあります。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "ORI-3-252",
    "grade": 3,
    "category": "才を育もう",
    "kind": "choice",
    "prompt": "フードマイレージという考え方に関係が深いものはどれか。",
    "options": [
      "1日の食事回数",
      "料理の塩分と糖分",
      "食料の輸送量と輸送距離",
      "食品の販売価格だけ",
      "食材の色と香り"
    ],
    "answer": 2,
    "explanation": "フードマイレージは食料輸送の量と距離を組み合わせて考える指標です。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "ORI-3-253",
    "grade": 3,
    "category": "才を育もう",
    "kind": "choice",
    "prompt": "食品の保存における「先入れ先出し」の考え方として適切なのはどれか。",
    "options": [
      "新しい食品だけを使い古いものを放置する",
      "先に仕入れた食品を原則として先に使用する",
      "冷蔵庫の温度を上げる",
      "保存場所を記録しない",
      "食品の期限を無視する"
    ],
    "answer": 1,
    "explanation": "先入れ先出しは在庫の古いものから適切に使用する管理方法です。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "ORI-3-254",
    "grade": 3,
    "category": "才を育もう",
    "kind": "choice",
    "prompt": "調理食品の衛生管理で記録を残す利点として適切なのはどれか。",
    "options": [
      "温度管理や作業の状況を後から確認できる",
      "調理者の経験が一切不要になる",
      "食中毒の原因を必ずゼロにする",
      "保存期限を必ず延長する",
      "衛生上の確認がすべて不要になる"
    ],
    "answer": 0,
    "explanation": "衛生記録は確認や改善、問題発生時の調査に役立ちます。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "NEW-3-001",
    "grade": 3,
    "category": "体を育もう",
    "kind": "choice",
    "prompt": "「咀嚼」の説明として、最も適切なものはどれか。",
    "options": [
      "主食・副菜・主菜などの組合せと量の目安を示す資料",
      "短時間で強い力を発揮する活動",
      "食べ物を歯でかみ砕き、飲み込みや消化を助ける働き",
      "口内を湿らせ、でんぷんの消化を始める成分を含む液体",
      "消化された栄養成分などが腸管から体内に取り込まれること"
    ],
    "answer": 2,
    "explanation": "咀嚼：食べ物を歯でかみ砕き、飲み込みや消化を助ける働き。他の選択肢は別の用語を説明しています。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "NEW-3-002",
    "grade": 3,
    "category": "体を育もう",
    "kind": "choice",
    "prompt": "「唾液」の説明として、最も適切なものはどれか。",
    "options": [
      "ビタミンB群やCなど水に溶けやすいビタミン",
      "口内を湿らせ、でんぷんの消化を始める成分を含む液体",
      "体液の浸透圧調節などに関わるミネラル",
      "安静時にも呼吸や循環などを維持するために使われるエネルギー",
      "体内で十分に合成できず食事から取る必要があるアミノ酸"
    ],
    "answer": 1,
    "explanation": "唾液：口内を湿らせ、でんぷんの消化を始める成分を含む液体。他の選択肢は別の用語を説明しています。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "NEW-3-003",
    "grade": 3,
    "category": "体を育もう",
    "kind": "choice",
    "prompt": "「消化」の説明として、最も適切なものはどれか。",
    "options": [
      "安静時にも呼吸や循環などを維持するために使われるエネルギー",
      "ビタミンA・D・E・Kなど脂質に溶けやすいビタミン",
      "体液の浸透圧調節などに関わるミネラル",
      "食物の成分を体に吸収しやすい形へ分解する過程",
      "消化された栄養成分などが腸管から体内に取り込まれること"
    ],
    "answer": 3,
    "explanation": "消化：食物の成分を体に吸収しやすい形へ分解する過程。他の選択肢は別の用語を説明しています。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "NEW-3-004",
    "grade": 3,
    "category": "体を育もう",
    "kind": "choice",
    "prompt": "「吸収」の説明として、最も適切なものはどれか。",
    "options": [
      "消化された栄養成分などが腸管から体内に取り込まれること",
      "歩行など酸素を利用し持続的に行う活動",
      "栄養素の吸収が主に行われる消化管の部分",
      "体内で十分に合成できず食事から取る必要があるアミノ酸",
      "食物の成分を体に吸収しやすい形へ分解する過程"
    ],
    "answer": 0,
    "explanation": "吸収：消化された栄養成分などが腸管から体内に取り込まれること。他の選択肢は別の用語を説明しています。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "NEW-3-005",
    "grade": 3,
    "category": "体を育もう",
    "kind": "choice",
    "prompt": "「小腸」の説明として、最も適切なものはどれか。",
    "options": [
      "睡眠に適した生活習慣や環境を整える考え方",
      "栄養素の吸収が主に行われる消化管の部分",
      "ビタミンA・D・E・Kなど脂質に溶けやすいビタミン",
      "ビタミンB群やCなど水に溶けやすいビタミン",
      "食べ物を歯でかみ砕き、飲み込みや消化を助ける働き"
    ],
    "answer": 1,
    "explanation": "小腸：栄養素の吸収が主に行われる消化管の部分。他の選択肢は別の用語を説明しています。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "NEW-3-006",
    "grade": 3,
    "category": "体を育もう",
    "kind": "choice",
    "prompt": "「大腸」の説明として、最も適切なものはどれか。",
    "options": [
      "水分や電解質の吸収および便の形成に関わる部分",
      "栄養素の吸収が主に行われる消化管の部分",
      "ビタミンB群やCなど水に溶けやすいビタミン",
      "体液の浸透圧調節などに関わるミネラル",
      "糖質と食物繊維などを含む栄養成分の総称"
    ],
    "answer": 0,
    "explanation": "大腸：水分や電解質の吸収および便の形成に関わる部分。他の選択肢は別の用語を説明しています。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "NEW-3-007",
    "grade": 3,
    "category": "体を育もう",
    "kind": "choice",
    "prompt": "「基礎代謝」の説明として、最も適切なものはどれか。",
    "options": [
      "短時間で強い力を発揮する活動",
      "体内の水分バランスや神経・筋肉の働きに関わるミネラル",
      "食べ物を歯でかみ砕き、飲み込みや消化を助ける働き",
      "安静時にも呼吸や循環などを維持するために使われるエネルギー",
      "消化された栄養成分などが腸管から体内に取り込まれること"
    ],
    "answer": 3,
    "explanation": "基礎代謝：安静時にも呼吸や循環などを維持するために使われるエネルギー。他の選択肢は別の用語を説明しています。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "NEW-3-008",
    "grade": 3,
    "category": "体を育もう",
    "kind": "choice",
    "prompt": "「身体活動量」の説明として、最も適切なものはどれか。",
    "options": [
      "ビタミンA・D・E・Kなど脂質に溶けやすいビタミン",
      "ビタミンB群やCなど水に溶けやすいビタミン",
      "体液の浸透圧調節などに関わるミネラル",
      "栄養素の吸収が主に行われる消化管の部分",
      "仕事や運動など体を動かす活動の程度"
    ],
    "answer": 4,
    "explanation": "身体活動量：仕事や運動など体を動かす活動の程度。他の選択肢は別の用語を説明しています。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "NEW-3-009",
    "grade": 3,
    "category": "体を育もう",
    "kind": "choice",
    "prompt": "「炭水化物」の説明として、最も適切なものはどれか。",
    "options": [
      "体液の浸透圧調節などに関わるミネラル",
      "糖質と食物繊維などを含む栄養成分の総称",
      "食べ物を歯でかみ砕き、飲み込みや消化を助ける働き",
      "短時間で強い力を発揮する活動",
      "睡眠に適した生活習慣や環境を整える考え方"
    ],
    "answer": 1,
    "explanation": "炭水化物：糖質と食物繊維などを含む栄養成分の総称。他の選択肢は別の用語を説明しています。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "NEW-3-010",
    "grade": 3,
    "category": "体を育もう",
    "kind": "choice",
    "prompt": "「必須アミノ酸」の説明として、最も適切なものはどれか。",
    "options": [
      "消化された栄養成分などが腸管から体内に取り込まれること",
      "睡眠に適した生活習慣や環境を整える考え方",
      "ビタミンA・D・E・Kなど脂質に溶けやすいビタミン",
      "歩行など酸素を利用し持続的に行う活動",
      "体内で十分に合成できず食事から取る必要があるアミノ酸"
    ],
    "answer": 4,
    "explanation": "必須アミノ酸：体内で十分に合成できず食事から取る必要があるアミノ酸。他の選択肢は別の用語を説明しています。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "NEW-3-011",
    "grade": 3,
    "category": "体を育もう",
    "kind": "choice",
    "prompt": "「脂溶性ビタミン」の説明として、最も適切なものはどれか。",
    "options": [
      "糖質と食物繊維などを含む栄養成分の総称",
      "短時間で強い力を発揮する活動",
      "消化された栄養成分などが腸管から体内に取り込まれること",
      "体液の浸透圧調節などに関わるミネラル",
      "ビタミンA・D・E・Kなど脂質に溶けやすいビタミン"
    ],
    "answer": 4,
    "explanation": "脂溶性ビタミン：ビタミンA・D・E・Kなど脂質に溶けやすいビタミン。他の選択肢は別の用語を説明しています。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "NEW-3-012",
    "grade": 3,
    "category": "体を育もう",
    "kind": "choice",
    "prompt": "「水溶性ビタミン」の説明として、最も適切なものはどれか。",
    "options": [
      "歩行など酸素を利用し持続的に行う活動",
      "ビタミンB群やCなど水に溶けやすいビタミン",
      "糖質と食物繊維などを含む栄養成分の総称",
      "食べ物を歯でかみ砕き、飲み込みや消化を助ける働き",
      "体内の水分バランスや神経・筋肉の働きに関わるミネラル"
    ],
    "answer": 1,
    "explanation": "水溶性ビタミン：ビタミンB群やCなど水に溶けやすいビタミン。他の選択肢は別の用語を説明しています。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "NEW-3-013",
    "grade": 3,
    "category": "体を育もう",
    "kind": "choice",
    "prompt": "「ナトリウム」の説明として、最も適切なものはどれか。",
    "options": [
      "糖質と食物繊維などを含む栄養成分の総称",
      "体内で十分に合成できず食事から取る必要があるアミノ酸",
      "体液の浸透圧調節などに関わるミネラル",
      "水分や電解質の吸収および便の形成に関わる部分",
      "短時間で強い力を発揮する活動"
    ],
    "answer": 2,
    "explanation": "ナトリウム：体液の浸透圧調節などに関わるミネラル。他の選択肢は別の用語を説明しています。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "NEW-3-014",
    "grade": 3,
    "category": "体を育もう",
    "kind": "choice",
    "prompt": "「カリウム」の説明として、最も適切なものはどれか。",
    "options": [
      "ビタミンB群やCなど水に溶けやすいビタミン",
      "安静時にも呼吸や循環などを維持するために使われるエネルギー",
      "体内の水分バランスや神経・筋肉の働きに関わるミネラル",
      "ビタミンA・D・E・Kなど脂質に溶けやすいビタミン",
      "仕事や運動など体を動かす活動の程度"
    ],
    "answer": 2,
    "explanation": "カリウム：体内の水分バランスや神経・筋肉の働きに関わるミネラル。他の選択肢は別の用語を説明しています。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "NEW-3-015",
    "grade": 3,
    "category": "体を育もう",
    "kind": "choice",
    "prompt": "「食事バランスガイド」の説明として、最も適切なものはどれか。",
    "options": [
      "安静時にも呼吸や循環などを維持するために使われるエネルギー",
      "主食・副菜・主菜などの組合せと量の目安を示す資料",
      "体内の水分バランスや神経・筋肉の働きに関わるミネラル",
      "糖質と食物繊維などを含む栄養成分の総称",
      "ビタミンB群やCなど水に溶けやすいビタミン"
    ],
    "answer": 1,
    "explanation": "食事バランスガイド：主食・副菜・主菜などの組合せと量の目安を示す資料。他の選択肢は別の用語を説明しています。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "NEW-3-016",
    "grade": 3,
    "category": "体を育もう",
    "kind": "choice",
    "prompt": "「有酸素運動」の説明として、最も適切なものはどれか。",
    "options": [
      "栄養素の吸収が主に行われる消化管の部分",
      "睡眠に適した生活習慣や環境を整える考え方",
      "歩行など酸素を利用し持続的に行う活動",
      "仕事や運動など体を動かす活動の程度",
      "短時間で強い力を発揮する活動"
    ],
    "answer": 2,
    "explanation": "有酸素運動：歩行など酸素を利用し持続的に行う活動。他の選択肢は別の用語を説明しています。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "NEW-3-017",
    "grade": 3,
    "category": "体を育もう",
    "kind": "choice",
    "prompt": "「無酸素運動」の説明として、最も適切なものはどれか。",
    "options": [
      "短時間で強い力を発揮する活動",
      "ビタミンA・D・E・Kなど脂質に溶けやすいビタミン",
      "歩行など酸素を利用し持続的に行う活動",
      "食物の成分を体に吸収しやすい形へ分解する過程",
      "主食・副菜・主菜などの組合せと量の目安を示す資料"
    ],
    "answer": 0,
    "explanation": "無酸素運動：短時間で強い力を発揮する活動。他の選択肢は別の用語を説明しています。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "NEW-3-018",
    "grade": 3,
    "category": "知を育もう",
    "kind": "choice",
    "prompt": "「五味」の説明として、最も適切なものはどれか。",
    "options": [
      "地元で生産された食材を地域で消費する取組",
      "料理や食器を食卓に並べること",
      "グルタミン酸とイノシン酸などの組合せでうま味が強まること",
      "家族など複数人で食卓を囲み一緒に食事をすること",
      "甘味・塩味・酸味・苦味・うま味という基本的な味の分類"
    ],
    "answer": 4,
    "explanation": "五味：甘味・塩味・酸味・苦味・うま味という基本的な味の分類。他の選択肢は別の用語を説明しています。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "NEW-3-019",
    "grade": 3,
    "category": "知を育もう",
    "kind": "choice",
    "prompt": "「うま味の相乗効果」の説明として、最も適切なものはどれか。",
    "options": [
      "地域の風土や暮らしの中で受け継がれてきた料理",
      "家族など複数人で食卓を囲み一緒に食事をすること",
      "食材が季節に応じて多く出回り、おいしく食べられる時期",
      "グルタミン酸とイノシン酸などの組合せでうま味が強まること",
      "季節や人生の節目の行事に結び付いた食べ物"
    ],
    "answer": 3,
    "explanation": "うま味の相乗効果：グルタミン酸とイノシン酸などの組合せでうま味が強まること。他の選択肢は別の用語を説明しています。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "NEW-3-020",
    "grade": 3,
    "category": "知を育もう",
    "kind": "choice",
    "prompt": "「香り」の説明として、最も適切なものはどれか。",
    "options": [
      "汁物一品とおかず三品を組み合わせる献立形式",
      "一人で食事をすること",
      "正月に食べられる縁起を担いだ料理の総称",
      "甘味・塩味・酸味・苦味・うま味という基本的な味の分類",
      "食べ物の風味に嗅覚を通じて影響する要素"
    ],
    "answer": 4,
    "explanation": "香り：食べ物の風味に嗅覚を通じて影響する要素。他の選択肢は別の用語を説明しています。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "NEW-3-021",
    "grade": 3,
    "category": "知を育もう",
    "kind": "choice",
    "prompt": "「テクスチャー」の説明として、最も適切なものはどれか。",
    "options": [
      "グルタミン酸とイノシン酸などの組合せでうま味が強まること",
      "季節や人生の節目の行事に結び付いた食べ物",
      "食べ物の硬さ・粘り・歯ごたえなどの性質",
      "本来食べられるのに廃棄される食品",
      "地域の風土や暮らしの中で受け継がれてきた料理"
    ],
    "answer": 2,
    "explanation": "テクスチャー：食べ物の硬さ・粘り・歯ごたえなどの性質。他の選択肢は別の用語を説明しています。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "NEW-3-022",
    "grade": 3,
    "category": "知を育もう",
    "kind": "choice",
    "prompt": "「旬」の説明として、最も適切なものはどれか。",
    "options": [
      "本来食べられるのに廃棄される食品",
      "食材が季節に応じて多く出回り、おいしく食べられる時期",
      "一人で食事をすること",
      "季節の変わり目の土用期間内に巡る丑の日",
      "家族など複数人で食卓を囲み一緒に食事をすること"
    ],
    "answer": 1,
    "explanation": "旬：食材が季節に応じて多く出回り、おいしく食べられる時期。他の選択肢は別の用語を説明しています。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "NEW-3-023",
    "grade": 3,
    "category": "知を育もう",
    "kind": "choice",
    "prompt": "「地産地消」の説明として、最も適切なものはどれか。",
    "options": [
      "地元で生産された食材を地域で消費する取組",
      "本来食べられるのに廃棄される食品",
      "グルタミン酸とイノシン酸などの組合せでうま味が強まること",
      "一人で食事をすること",
      "季節や人生の節目の行事に結び付いた食べ物"
    ],
    "answer": 0,
    "explanation": "地産地消：地元で生産された食材を地域で消費する取組。他の選択肢は別の用語を説明しています。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "NEW-3-024",
    "grade": 3,
    "category": "知を育もう",
    "kind": "choice",
    "prompt": "「郷土料理」の説明として、最も適切なものはどれか。",
    "options": [
      "地域の風土や暮らしの中で受け継がれてきた料理",
      "グルタミン酸とイノシン酸などの組合せでうま味が強まること",
      "食べ物の硬さ・粘り・歯ごたえなどの性質",
      "特別な日と日常を区別する日本の生活文化の考え方",
      "正月に食べられる縁起を担いだ料理の総称"
    ],
    "answer": 0,
    "explanation": "郷土料理：地域の風土や暮らしの中で受け継がれてきた料理。他の選択肢は別の用語を説明しています。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "NEW-3-025",
    "grade": 3,
    "category": "知を育もう",
    "kind": "choice",
    "prompt": "「行事食」の説明として、最も適切なものはどれか。",
    "options": [
      "家族など複数人で食卓を囲み一緒に食事をすること",
      "一般に1月7日に春の七草を入れて食べる粥",
      "正月に食べられる縁起を担いだ料理の総称",
      "季節や人生の節目の行事に結び付いた食べ物",
      "グルタミン酸とイノシン酸などの組合せでうま味が強まること"
    ],
    "answer": 3,
    "explanation": "行事食：季節や人生の節目の行事に結び付いた食べ物。他の選択肢は別の用語を説明しています。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "NEW-3-026",
    "grade": 3,
    "category": "知を育もう",
    "kind": "choice",
    "prompt": "「おせち料理」の説明として、最も適切なものはどれか。",
    "options": [
      "地域の風土や暮らしの中で受け継がれてきた料理",
      "グルタミン酸とイノシン酸などの組合せでうま味が強まること",
      "地元で生産された食材を地域で消費する取組",
      "季節の変わり目の土用期間内に巡る丑の日",
      "正月に食べられる縁起を担いだ料理の総称"
    ],
    "answer": 4,
    "explanation": "おせち料理：正月に食べられる縁起を担いだ料理の総称。他の選択肢は別の用語を説明しています。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "NEW-3-027",
    "grade": 3,
    "category": "知を育もう",
    "kind": "choice",
    "prompt": "「七草がゆ」の説明として、最も適切なものはどれか。",
    "options": [
      "食材が季節に応じて多く出回り、おいしく食べられる時期",
      "地域の風土や暮らしの中で受け継がれてきた料理",
      "正月に食べられる縁起を担いだ料理の総称",
      "一般に1月7日に春の七草を入れて食べる粥",
      "食べ物の硬さ・粘り・歯ごたえなどの性質"
    ],
    "answer": 3,
    "explanation": "七草がゆ：一般に1月7日に春の七草を入れて食べる粥。他の選択肢は別の用語を説明しています。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "NEW-3-028",
    "grade": 3,
    "category": "知を育もう",
    "kind": "choice",
    "prompt": "「土用の丑の日」の説明として、最も適切なものはどれか。",
    "options": [
      "家族など複数人で食卓を囲み一緒に食事をすること",
      "季節の変わり目の土用期間内に巡る丑の日",
      "地域の風土や暮らしの中で受け継がれてきた料理",
      "料理や食器を食卓に並べること",
      "食べ物の風味に嗅覚を通じて影響する要素"
    ],
    "answer": 1,
    "explanation": "土用の丑の日：季節の変わり目の土用期間内に巡る丑の日。他の選択肢は別の用語を説明しています。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "NEW-3-029",
    "grade": 3,
    "category": "知を育もう",
    "kind": "choice",
    "prompt": "「ハレとケ」の説明として、最も適切なものはどれか。",
    "options": [
      "食べ物の風味に嗅覚を通じて影響する要素",
      "一般に1月7日に春の七草を入れて食べる粥",
      "正月に食べられる縁起を担いだ料理の総称",
      "特別な日と日常を区別する日本の生活文化の考え方",
      "地域の風土や暮らしの中で受け継がれてきた料理"
    ],
    "answer": 3,
    "explanation": "ハレとケ：特別な日と日常を区別する日本の生活文化の考え方。他の選択肢は別の用語を説明しています。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "NEW-3-030",
    "grade": 3,
    "category": "知を育もう",
    "kind": "choice",
    "prompt": "「一汁三菜」の説明として、最も適切なものはどれか。",
    "options": [
      "季節や人生の節目の行事に結び付いた食べ物",
      "一般に1月7日に春の七草を入れて食べる粥",
      "箸の先を卓上に直接触れさせないために使う道具",
      "食べ物の硬さ・粘り・歯ごたえなどの性質",
      "汁物一品とおかず三品を組み合わせる献立形式"
    ],
    "answer": 4,
    "explanation": "一汁三菜：汁物一品とおかず三品を組み合わせる献立形式。他の選択肢は別の用語を説明しています。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "NEW-3-031",
    "grade": 3,
    "category": "知を育もう",
    "kind": "choice",
    "prompt": "「配膳」の説明として、最も適切なものはどれか。",
    "options": [
      "正月に食べられる縁起を担いだ料理の総称",
      "地域の風土や暮らしの中で受け継がれてきた料理",
      "家族など複数人で食卓を囲み一緒に食事をすること",
      "料理や食器を食卓に並べること",
      "季節や人生の節目の行事に結び付いた食べ物"
    ],
    "answer": 3,
    "explanation": "配膳：料理や食器を食卓に並べること。他の選択肢は別の用語を説明しています。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "NEW-3-032",
    "grade": 3,
    "category": "知を育もう",
    "kind": "choice",
    "prompt": "「箸置き」の説明として、最も適切なものはどれか。",
    "options": [
      "季節や人生の節目の行事に結び付いた食べ物",
      "特別な日と日常を区別する日本の生活文化の考え方",
      "箸の先を卓上に直接触れさせないために使う道具",
      "一般に1月7日に春の七草を入れて食べる粥",
      "地元で生産された食材を地域で消費する取組"
    ],
    "answer": 2,
    "explanation": "箸置き：箸の先を卓上に直接触れさせないために使う道具。他の選択肢は別の用語を説明しています。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "NEW-3-033",
    "grade": 3,
    "category": "知を育もう",
    "kind": "choice",
    "prompt": "「共食」の説明として、最も適切なものはどれか。",
    "options": [
      "地域の風土や暮らしの中で受け継がれてきた料理",
      "料理や食器を食卓に並べること",
      "一般に1月7日に春の七草を入れて食べる粥",
      "家族など複数人で食卓を囲み一緒に食事をすること",
      "季節の変わり目の土用期間内に巡る丑の日"
    ],
    "answer": 3,
    "explanation": "共食：家族など複数人で食卓を囲み一緒に食事をすること。他の選択肢は別の用語を説明しています。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "NEW-3-034",
    "grade": 3,
    "category": "徳を育もう",
    "kind": "choice",
    "prompt": "「食品表示」の説明として、最も適切なものはどれか。",
    "options": [
      "食品の製造に使われた材料を示す欄",
      "農産物などが生産された場所",
      "食品の内容や安全性などを消費者に伝える表示",
      "野菜・肉・魚など基本的に加工の程度が小さい食品",
      "水と油のように混ざりにくい成分を安定させる添加物"
    ],
    "answer": 2,
    "explanation": "食品表示：食品の内容や安全性などを消費者に伝える表示。他の選択肢は別の用語を説明しています。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "NEW-3-035",
    "grade": 3,
    "category": "徳を育もう",
    "kind": "choice",
    "prompt": "「栄養成分表示」の説明として、最も適切なものはどれか。",
    "options": [
      "食品の内容や安全性などを消費者に伝える表示",
      "食品に加熱・調味などの加工を施したもの",
      "アレルギーの原因となる特定の原材料を知らせる表示",
      "定められた条件で保存した未開封品を安全に食べられる期限の目安",
      "熱量やたんぱく質・脂質・炭水化物・食塩相当量などの表示"
    ],
    "answer": 4,
    "explanation": "栄養成分表示：熱量やたんぱく質・脂質・炭水化物・食塩相当量などの表示。他の選択肢は別の用語を説明しています。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "NEW-3-036",
    "grade": 3,
    "category": "徳を育もう",
    "kind": "choice",
    "prompt": "「原材料名」の説明として、最も適切なものはどれか。",
    "options": [
      "有機食品の日本農林規格に適合することを示すマーク",
      "野菜・肉・魚など基本的に加工の程度が小さい食品",
      "水と油のように混ざりにくい成分を安定させる添加物",
      "食品中の微生物の増殖を抑えるためなどに用いる添加物",
      "食品の製造に使われた材料を示す欄"
    ],
    "answer": 4,
    "explanation": "原材料名：食品の製造に使われた材料を示す欄。他の選択肢は別の用語を説明しています。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "NEW-3-037",
    "grade": 3,
    "category": "徳を育もう",
    "kind": "choice",
    "prompt": "「アレルゲン表示」の説明として、最も適切なものはどれか。",
    "options": [
      "アレルギーの原因となる特定の原材料を知らせる表示",
      "食品の内容や安全性などを消費者に伝える表示",
      "食品に加熱・調味などの加工を施したもの",
      "熱量やたんぱく質・脂質・炭水化物・食塩相当量などの表示",
      "定められた条件で保存した未開封品を安全に食べられる期限の目安"
    ],
    "answer": 0,
    "explanation": "アレルゲン表示：アレルギーの原因となる特定の原材料を知らせる表示。他の選択肢は別の用語を説明しています。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "NEW-3-038",
    "grade": 3,
    "category": "徳を育もう",
    "kind": "choice",
    "prompt": "「消費期限」の説明として、最も適切なものはどれか。",
    "options": [
      "食品中の微生物の増殖を抑えるためなどに用いる添加物",
      "野菜・肉・魚など基本的に加工の程度が小さい食品",
      "定められた条件で保存した未開封品をおいしく食べられる期限の目安",
      "食品に加熱・調味などの加工を施したもの",
      "定められた条件で保存した未開封品を安全に食べられる期限の目安"
    ],
    "answer": 4,
    "explanation": "消費期限：定められた条件で保存した未開封品を安全に食べられる期限の目安。他の選択肢は別の用語を説明しています。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "NEW-3-039",
    "grade": 3,
    "category": "徳を育もう",
    "kind": "choice",
    "prompt": "「賞味期限」の説明として、最も適切なものはどれか。",
    "options": [
      "食品中の微生物の増殖を抑えるためなどに用いる添加物",
      "アレルギーの原因となる特定の原材料を知らせる表示",
      "野菜・肉・魚など基本的に加工の程度が小さい食品",
      "定められた条件で保存した未開封品を安全に食べられる期限の目安",
      "定められた条件で保存した未開封品をおいしく食べられる期限の目安"
    ],
    "answer": 4,
    "explanation": "賞味期限：定められた条件で保存した未開封品をおいしく食べられる期限の目安。他の選択肢は別の用語を説明しています。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "NEW-3-040",
    "grade": 3,
    "category": "徳を育もう",
    "kind": "choice",
    "prompt": "「食塩相当量」の説明として、最も適切なものはどれか。",
    "options": [
      "農産物などが生産された場所",
      "食品中の微生物の増殖を抑えるためなどに用いる添加物",
      "食品の製造に使われた材料を示す欄",
      "食品の内容や安全性などを消費者に伝える表示",
      "食品中のナトリウム量を食塩の量に換算して示した値"
    ],
    "answer": 4,
    "explanation": "食塩相当量：食品中のナトリウム量を食塩の量に換算して示した値。他の選択肢は別の用語を説明しています。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "NEW-3-041",
    "grade": 3,
    "category": "徳を育もう",
    "kind": "choice",
    "prompt": "「内容量」の説明として、最も適切なものはどれか。",
    "options": [
      "水と油のように混ざりにくい成分を安定させる添加物",
      "容器包装内に入っている食品の量",
      "食品の内容や安全性などを消費者に伝える表示",
      "アレルギーの原因となる特定の原材料を知らせる表示",
      "食品に加熱・調味などの加工を施したもの"
    ],
    "answer": 1,
    "explanation": "内容量：容器包装内に入っている食品の量。他の選択肢は別の用語を説明しています。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "NEW-3-042",
    "grade": 3,
    "category": "徳を育もう",
    "kind": "choice",
    "prompt": "「原産地」の説明として、最も適切なものはどれか。",
    "options": [
      "熱量やたんぱく質・脂質・炭水化物・食塩相当量などの表示",
      "食品に加熱・調味などの加工を施したもの",
      "定められた条件で保存した未開封品を安全に食べられる期限の目安",
      "食品中のナトリウム量を食塩の量に換算して示した値",
      "農産物などが生産された場所"
    ],
    "answer": 4,
    "explanation": "原産地：農産物などが生産された場所。他の選択肢は別の用語を説明しています。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "NEW-3-043",
    "grade": 3,
    "category": "徳を育もう",
    "kind": "choice",
    "prompt": "「製造所」の説明として、最も適切なものはどれか。",
    "options": [
      "熱量やたんぱく質・脂質・炭水化物・食塩相当量などの表示",
      "農産物などが生産された場所",
      "アレルギーの原因となる特定の原材料を知らせる表示",
      "水と油のように混ざりにくい成分を安定させる添加物",
      "食品の製造が行われた施設"
    ],
    "answer": 4,
    "explanation": "製造所：食品の製造が行われた施設。他の選択肢は別の用語を説明しています。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "NEW-3-044",
    "grade": 3,
    "category": "徳を育もう",
    "kind": "choice",
    "prompt": "「有機JASマーク」の説明として、最も適切なものはどれか。",
    "options": [
      "農産物などが生産された場所",
      "容器包装内に入っている食品の量",
      "食品に色をつけたり整えたりするために用いる添加物",
      "定められた条件で保存した未開封品をおいしく食べられる期限の目安",
      "有機食品の日本農林規格に適合することを示すマーク"
    ],
    "answer": 4,
    "explanation": "有機JASマーク：有機食品の日本農林規格に適合することを示すマーク。他の選択肢は別の用語を説明しています。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "NEW-3-045",
    "grade": 3,
    "category": "徳を育もう",
    "kind": "choice",
    "prompt": "「JAS規格」の説明として、最も適切なものはどれか。",
    "options": [
      "食品中のナトリウム量を食塩の量に換算して示した値",
      "食品に色をつけたり整えたりするために用いる添加物",
      "容器包装内に入っている食品の量",
      "農林水産分野の品質などの基準を定める日本の規格",
      "熱量やたんぱく質・脂質・炭水化物・食塩相当量などの表示"
    ],
    "answer": 3,
    "explanation": "JAS規格：農林水産分野の品質などの基準を定める日本の規格。他の選択肢は別の用語を説明しています。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "NEW-3-046",
    "grade": 3,
    "category": "徳を育もう",
    "kind": "choice",
    "prompt": "「食品添加物」の説明として、最も適切なものはどれか。",
    "options": [
      "食品の製造に使われた材料を示す欄",
      "農産物などが生産された場所",
      "食品の内容や安全性などを消費者に伝える表示",
      "食品の製造・加工・保存などの目的で使用する物質",
      "定められた条件で保存した未開封品を安全に食べられる期限の目安"
    ],
    "answer": 3,
    "explanation": "食品添加物：食品の製造・加工・保存などの目的で使用する物質。他の選択肢は別の用語を説明しています。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "NEW-3-047",
    "grade": 3,
    "category": "徳を育もう",
    "kind": "choice",
    "prompt": "「着色料」の説明として、最も適切なものはどれか。",
    "options": [
      "食品の製造が行われた施設",
      "容器包装内に入っている食品の量",
      "農産物などが生産された場所",
      "食品中のナトリウム量を食塩の量に換算して示した値",
      "食品に色をつけたり整えたりするために用いる添加物"
    ],
    "answer": 4,
    "explanation": "着色料：食品に色をつけたり整えたりするために用いる添加物。他の選択肢は別の用語を説明しています。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "NEW-3-048",
    "grade": 3,
    "category": "徳を育もう",
    "kind": "choice",
    "prompt": "「保存料」の説明として、最も適切なものはどれか。",
    "options": [
      "アレルギーの原因となる特定の原材料を知らせる表示",
      "定められた条件で保存した未開封品を安全に食べられる期限の目安",
      "食品中の微生物の増殖を抑えるためなどに用いる添加物",
      "農林水産分野の品質などの基準を定める日本の規格",
      "水と油のように混ざりにくい成分を安定させる添加物"
    ],
    "answer": 2,
    "explanation": "保存料：食品中の微生物の増殖を抑えるためなどに用いる添加物。他の選択肢は別の用語を説明しています。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "NEW-3-049",
    "grade": 3,
    "category": "徳を育もう",
    "kind": "choice",
    "prompt": "「乳化剤」の説明として、最も適切なものはどれか。",
    "options": [
      "農林水産分野の品質などの基準を定める日本の規格",
      "食品の製造に使われた材料を示す欄",
      "定められた条件で保存した未開封品をおいしく食べられる期限の目安",
      "水と油のように混ざりにくい成分を安定させる添加物",
      "有機食品の日本農林規格に適合することを示すマーク"
    ],
    "answer": 3,
    "explanation": "乳化剤：水と油のように混ざりにくい成分を安定させる添加物。他の選択肢は別の用語を説明しています。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "NEW-3-050",
    "grade": 3,
    "category": "才を育もう",
    "kind": "choice",
    "prompt": "「手洗い」の説明として、最も適切なものはどれか。",
    "options": [
      "卵や食肉などの取扱いに関連する細菌性食中毒原因菌",
      "リデュース・リユース・リサイクルによる資源循環の考え方",
      "整理・整頓・清掃・清潔・しつけによる職場環境改善",
      "凍結した食品を調理・利用できる状態に戻すこと",
      "食品への病原体の持ち込みを減らす基本行動"
    ],
    "answer": 4,
    "explanation": "手洗い：食品への病原体の持ち込みを減らす基本行動。他の選択肢は別の用語を説明しています。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "NEW-3-051",
    "grade": 3,
    "category": "才を育もう",
    "kind": "choice",
    "prompt": "「交差汚染」の説明として、最も適切なものはどれか。",
    "options": [
      "加熱不十分な鶏肉などに関連する食中毒原因菌",
      "魚介類に寄生し適切な加熱・冷凍が予防に有効な寄生虫",
      "飲食物に由来する微生物や有害物質などによる健康被害",
      "食品の製造・販売・消費過程で発生する廃棄物",
      "生の食品や調理器具などから別の食品へ微生物が移ること"
    ],
    "answer": 4,
    "explanation": "交差汚染：生の食品や調理器具などから別の食品へ微生物が移ること。他の選択肢は別の用語を説明しています。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "NEW-3-052",
    "grade": 3,
    "category": "才を育もう",
    "kind": "choice",
    "prompt": "「加熱殺菌」の説明として、最も適切なものはどれか。",
    "options": [
      "熱を利用して微生物を減らす処理",
      "凍結した食品を調理・利用できる状態に戻すこと",
      "食品中で産生された毒素が食中毒の原因となることがある細菌",
      "低温を保って微生物の増殖などを抑える保存法",
      "生の食品や調理器具などから別の食品へ微生物が移ること"
    ],
    "answer": 0,
    "explanation": "加熱殺菌：熱を利用して微生物を減らす処理。他の選択肢は別の用語を説明しています。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "NEW-3-053",
    "grade": 3,
    "category": "才を育もう",
    "kind": "choice",
    "prompt": "「冷蔵保存」の説明として、最も適切なものはどれか。",
    "options": [
      "魚介類に寄生し適切な加熱・冷凍が予防に有効な寄生虫",
      "整理・整頓・清掃・清潔・しつけによる職場環境改善",
      "低温を保って微生物の増殖などを抑える保存法",
      "資源の消費と廃棄物の発生を抑え資源を循環させる社会",
      "卵や食肉などの取扱いに関連する細菌性食中毒原因菌"
    ],
    "answer": 2,
    "explanation": "冷蔵保存：低温を保って微生物の増殖などを抑える保存法。他の選択肢は別の用語を説明しています。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "NEW-3-054",
    "grade": 3,
    "category": "才を育もう",
    "kind": "choice",
    "prompt": "「冷凍保存」の説明として、最も適切なものはどれか。",
    "options": [
      "リデュース・リユース・リサイクルによる資源循環の考え方",
      "食品への病原体の持ち込みを減らす基本行動",
      "食品中で産生された毒素が食中毒の原因となることがある細菌",
      "食品を凍結して品質変化を遅くする保存法",
      "凍結した食品を調理・利用できる状態に戻すこと"
    ],
    "answer": 3,
    "explanation": "冷凍保存：食品を凍結して品質変化を遅くする保存法。他の選択肢は別の用語を説明しています。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "NEW-3-055",
    "grade": 3,
    "category": "才を育もう",
    "kind": "choice",
    "prompt": "「解凍」の説明として、最も適切なものはどれか。",
    "options": [
      "凍結した食品を調理・利用できる状態に戻すこと",
      "卵や食肉などの取扱いに関連する細菌性食中毒原因菌",
      "魚介類に寄生し適切な加熱・冷凍が予防に有効な寄生虫",
      "整理・整頓・清掃・清潔・しつけによる職場環境改善",
      "低温を保って微生物の増殖などを抑える保存法"
    ],
    "answer": 0,
    "explanation": "解凍：凍結した食品を調理・利用できる状態に戻すこと。他の選択肢は別の用語を説明しています。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "NEW-3-056",
    "grade": 3,
    "category": "才を育もう",
    "kind": "choice",
    "prompt": "「食中毒」の説明として、最も適切なものはどれか。",
    "options": [
      "凍結した食品を調理・利用できる状態に戻すこと",
      "食品を凍結して品質変化を遅くする保存法",
      "卵や食肉などの取扱いに関連する細菌性食中毒原因菌",
      "飲食物に由来する微生物や有害物質などによる健康被害",
      "食料の輸送量と輸送距離に基づく指標"
    ],
    "answer": 3,
    "explanation": "食中毒：飲食物に由来する微生物や有害物質などによる健康被害。他の選択肢は別の用語を説明しています。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "NEW-3-057",
    "grade": 3,
    "category": "才を育もう",
    "kind": "choice",
    "prompt": "「ノロウイルス」の説明として、最も適切なものはどれか。",
    "options": [
      "飲食物に由来する微生物や有害物質などによる健康被害",
      "低温を保って微生物の増殖などを抑える保存法",
      "凍結した食品を調理・利用できる状態に戻すこと",
      "卵や食肉などの取扱いに関連する細菌性食中毒原因菌",
      "冬季にも流行し嘔吐や下痢を引き起こすことがあるウイルス"
    ],
    "answer": 4,
    "explanation": "ノロウイルス：冬季にも流行し嘔吐や下痢を引き起こすことがあるウイルス。他の選択肢は別の用語を説明しています。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "NEW-3-058",
    "grade": 3,
    "category": "才を育もう",
    "kind": "choice",
    "prompt": "「サルモネラ属菌」の説明として、最も適切なものはどれか。",
    "options": [
      "食品の製造・販売・消費過程で発生する廃棄物",
      "資源の消費と廃棄物の発生を抑え資源を循環させる社会",
      "卵や食肉などの取扱いに関連する細菌性食中毒原因菌",
      "食品の生産・流通などの履歴を追跡できる仕組み",
      "熱を利用して微生物を減らす処理"
    ],
    "answer": 2,
    "explanation": "サルモネラ属菌：卵や食肉などの取扱いに関連する細菌性食中毒原因菌。他の選択肢は別の用語を説明しています。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "NEW-3-059",
    "grade": 3,
    "category": "才を育もう",
    "kind": "choice",
    "prompt": "「カンピロバクター」の説明として、最も適切なものはどれか。",
    "options": [
      "熱を利用して微生物を減らす処理",
      "整理・整頓・清掃・清潔・しつけによる職場環境改善",
      "加熱不十分な鶏肉などに関連する食中毒原因菌",
      "リデュース・リユース・リサイクルによる資源循環の考え方",
      "凍結した食品を調理・利用できる状態に戻すこと"
    ],
    "answer": 2,
    "explanation": "カンピロバクター：加熱不十分な鶏肉などに関連する食中毒原因菌。他の選択肢は別の用語を説明しています。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "NEW-3-060",
    "grade": 3,
    "category": "才を育もう",
    "kind": "choice",
    "prompt": "「黄色ブドウ球菌」の説明として、最も適切なものはどれか。",
    "options": [
      "食品の製造・販売・消費過程で発生する廃棄物",
      "食品中で産生された毒素が食中毒の原因となることがある細菌",
      "食料の輸送量と輸送距離に基づく指標",
      "飲食物に由来する微生物や有害物質などによる健康被害",
      "整理・整頓・清掃・清潔・しつけによる職場環境改善"
    ],
    "answer": 1,
    "explanation": "黄色ブドウ球菌：食品中で産生された毒素が食中毒の原因となることがある細菌。他の選択肢は別の用語を説明しています。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "NEW-3-061",
    "grade": 3,
    "category": "才を育もう",
    "kind": "choice",
    "prompt": "「アニサキス」の説明として、最も適切なものはどれか。",
    "options": [
      "食品を凍結して品質変化を遅くする保存法",
      "熱を利用して微生物を減らす処理",
      "食品の生産・流通などの履歴を追跡できる仕組み",
      "魚介類に寄生し適切な加熱・冷凍が予防に有効な寄生虫",
      "卵や食肉などの取扱いに関連する細菌性食中毒原因菌"
    ],
    "answer": 3,
    "explanation": "アニサキス：魚介類に寄生し適切な加熱・冷凍が予防に有効な寄生虫。他の選択肢は別の用語を説明しています。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "NEW-3-062",
    "grade": 3,
    "category": "才を育もう",
    "kind": "choice",
    "prompt": "「5S活動」の説明として、最も適切なものはどれか。",
    "options": [
      "加熱不十分な鶏肉などに関連する食中毒原因菌",
      "食品の製造・販売・消費過程で発生する廃棄物",
      "食品中で産生された毒素が食中毒の原因となることがある細菌",
      "整理・整頓・清掃・清潔・しつけによる職場環境改善",
      "熱を利用して微生物を減らす処理"
    ],
    "answer": 3,
    "explanation": "5S活動：整理・整頓・清掃・清潔・しつけによる職場環境改善。他の選択肢は別の用語を説明しています。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "NEW-3-063",
    "grade": 3,
    "category": "才を育もう",
    "kind": "choice",
    "prompt": "「食品廃棄物」の説明として、最も適切なものはどれか。",
    "options": [
      "飲食物に由来する微生物や有害物質などによる健康被害",
      "食品への病原体の持ち込みを減らす基本行動",
      "生の食品や調理器具などから別の食品へ微生物が移ること",
      "凍結した食品を調理・利用できる状態に戻すこと",
      "食品の製造・販売・消費過程で発生する廃棄物"
    ],
    "answer": 4,
    "explanation": "食品廃棄物：食品の製造・販売・消費過程で発生する廃棄物。他の選択肢は別の用語を説明しています。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "NEW-3-064",
    "grade": 3,
    "category": "才を育もう",
    "kind": "choice",
    "prompt": "「フードマイレージ」の説明として、最も適切なものはどれか。",
    "options": [
      "食品を凍結して品質変化を遅くする保存法",
      "冬季にも流行し嘔吐や下痢を引き起こすことがあるウイルス",
      "加熱不十分な鶏肉などに関連する食中毒原因菌",
      "リデュース・リユース・リサイクルによる資源循環の考え方",
      "食料の輸送量と輸送距離に基づく指標"
    ],
    "answer": 4,
    "explanation": "フードマイレージ：食料の輸送量と輸送距離に基づく指標。他の選択肢は別の用語を説明しています。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "NEW-3-065",
    "grade": 3,
    "category": "才を育もう",
    "kind": "choice",
    "prompt": "「食品トレーサビリティ」の説明として、最も適切なものはどれか。",
    "options": [
      "食品を凍結して品質変化を遅くする保存法",
      "食品の生産・流通などの履歴を追跡できる仕組み",
      "冬季にも流行し嘔吐や下痢を引き起こすことがあるウイルス",
      "熱を利用して微生物を減らす処理",
      "食品の製造・販売・消費過程で発生する廃棄物"
    ],
    "answer": 1,
    "explanation": "食品トレーサビリティ：食品の生産・流通などの履歴を追跡できる仕組み。他の選択肢は別の用語を説明しています。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "NEW-2-001",
    "grade": 2,
    "category": "ウエルネス上手になろう",
    "kind": "choice",
    "prompt": "「推定エネルギー必要量」の説明として、最も適切なものはどれか。",
    "options": [
      "鉄が不足してヘモグロビン合成に支障が生じる貧血",
      "肝臓や筋肉に蓄えられる糖の貯蔵形態",
      "血液中でコレステロールを末梢組織へ運ぶリポたんぱく質の一種",
      "日常生活でどの程度体を動かしているかを表す区分",
      "身体活動量などを踏まえて必要エネルギーの目安を示す指標",
      "炭素間に二重結合を持つ脂肪酸"
    ],
    "answer": 4,
    "explanation": "推定エネルギー必要量：身体活動量などを踏まえて必要エネルギーの目安を示す指標。他の選択肢は別の用語を説明しています。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "NEW-2-002",
    "grade": 2,
    "category": "ウエルネス上手になろう",
    "kind": "choice",
    "prompt": "「身体活動レベル」の説明として、最も適切なものはどれか。",
    "options": [
      "日常生活でどの程度体を動かしているかを表す区分",
      "血液中でコレステロールを末梢組織へ運ぶリポたんぱく質の一種",
      "血糖値を上げる方向に働く膵臓由来のホルモン",
      "加齢に伴い心身の予備能力が低下した状態",
      "筋肉に負荷をかけ筋力向上を目指す運動",
      "骨の量や質の低下により骨折しやすくなる状態"
    ],
    "answer": 0,
    "explanation": "身体活動レベル：日常生活でどの程度体を動かしているかを表す区分。他の選択肢は別の用語を説明しています。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "NEW-2-003",
    "grade": 2,
    "category": "ウエルネス上手になろう",
    "kind": "choice",
    "prompt": "「BMI」の説明として、最も適切なものはどれか。",
    "options": [
      "骨の量や質の低下により骨折しやすくなる状態",
      "体重kgを身長mの二乗で割った体格指数",
      "加齢に伴い心身の予備能力が低下した状態",
      "血液中でコレステロールを末梢組織へ運ぶリポたんぱく質の一種",
      "血糖値を上げる方向に働く膵臓由来のホルモン",
      "疲労回復や心身の健康維持のために必要な活動・時間"
    ],
    "answer": 1,
    "explanation": "BMI：体重kgを身長mの二乗で割った体格指数。他の選択肢は別の用語を説明しています。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "NEW-2-004",
    "grade": 2,
    "category": "ウエルネス上手になろう",
    "kind": "choice",
    "prompt": "「エネルギー収支」の説明として、最も適切なものはどれか。",
    "options": [
      "末梢組織からコレステロールを回収する方向に働くリポたんぱく質の一種",
      "筋肉に負荷をかけ筋力向上を目指す運動",
      "肝臓や筋肉に蓄えられる糖の貯蔵形態",
      "鉄が不足してヘモグロビン合成に支障が生じる貧血",
      "炭素間に二重結合を持つ脂肪酸",
      "摂取エネルギーと消費エネルギーの差"
    ],
    "answer": 5,
    "explanation": "エネルギー収支：摂取エネルギーと消費エネルギーの差。他の選択肢は別の用語を説明しています。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "NEW-2-005",
    "grade": 2,
    "category": "ウエルネス上手になろう",
    "kind": "choice",
    "prompt": "「インスリン」の説明として、最も適切なものはどれか。",
    "options": [
      "運動器の障害により移動機能が低下した状態",
      "肝臓や筋肉に蓄えられる糖の貯蔵形態",
      "血糖値の調整に関わる膵臓由来のホルモン",
      "疲労回復や心身の健康維持のために必要な活動・時間",
      "末梢組織からコレステロールを回収する方向に働くリポたんぱく質の一種",
      "日常生活でどの程度体を動かしているかを表す区分"
    ],
    "answer": 2,
    "explanation": "インスリン：血糖値の調整に関わる膵臓由来のホルモン。他の選択肢は別の用語を説明しています。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "NEW-2-006",
    "grade": 2,
    "category": "ウエルネス上手になろう",
    "kind": "choice",
    "prompt": "「グルカゴン」の説明として、最も適切なものはどれか。",
    "options": [
      "血糖値を上げる方向に働く膵臓由来のホルモン",
      "加齢に伴い心身の予備能力が低下した状態",
      "筋肉に負荷をかけ筋力向上を目指す運動",
      "末梢組織からコレステロールを回収する方向に働くリポたんぱく質の一種",
      "摂取エネルギーと消費エネルギーの差",
      "鉄が不足してヘモグロビン合成に支障が生じる貧血"
    ],
    "answer": 0,
    "explanation": "グルカゴン：血糖値を上げる方向に働く膵臓由来のホルモン。他の選択肢は別の用語を説明しています。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "NEW-2-007",
    "grade": 2,
    "category": "ウエルネス上手になろう",
    "kind": "choice",
    "prompt": "「グリコーゲン」の説明として、最も適切なものはどれか。",
    "options": [
      "鉄が不足してヘモグロビン合成に支障が生じる貧血",
      "血液中でコレステロールを末梢組織へ運ぶリポたんぱく質の一種",
      "肝臓や筋肉に蓄えられる糖の貯蔵形態",
      "骨の量や質の低下により骨折しやすくなる状態",
      "摂取エネルギーと消費エネルギーの差",
      "疲労回復や心身の健康維持のために必要な活動・時間"
    ],
    "answer": 2,
    "explanation": "グリコーゲン：肝臓や筋肉に蓄えられる糖の貯蔵形態。他の選択肢は別の用語を説明しています。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "NEW-2-008",
    "grade": 2,
    "category": "ウエルネス上手になろう",
    "kind": "choice",
    "prompt": "「中性脂肪」の説明として、最も適切なものはどれか。",
    "options": [
      "摂取エネルギーと消費エネルギーの差",
      "筋肉に負荷をかけ筋力向上を目指す運動",
      "加齢に伴い心身の予備能力が低下した状態",
      "体内の重要なエネルギー貯蔵に使われる脂質",
      "末梢組織からコレステロールを回収する方向に働くリポたんぱく質の一種",
      "血糖値を上げる方向に働く膵臓由来のホルモン"
    ],
    "answer": 3,
    "explanation": "中性脂肪：体内の重要なエネルギー貯蔵に使われる脂質。他の選択肢は別の用語を説明しています。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "NEW-2-009",
    "grade": 2,
    "category": "ウエルネス上手になろう",
    "kind": "choice",
    "prompt": "「LDLコレステロール」の説明として、最も適切なものはどれか。",
    "options": [
      "摂取エネルギーと消費エネルギーの差",
      "日常生活でどの程度体を動かしているかを表す区分",
      "疲労回復や心身の健康維持のために必要な活動・時間",
      "身体活動量などを踏まえて必要エネルギーの目安を示す指標",
      "血液中でコレステロールを末梢組織へ運ぶリポたんぱく質の一種",
      "血糖値を上げる方向に働く膵臓由来のホルモン"
    ],
    "answer": 4,
    "explanation": "LDLコレステロール：血液中でコレステロールを末梢組織へ運ぶリポたんぱく質の一種。他の選択肢は別の用語を説明しています。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "NEW-2-010",
    "grade": 2,
    "category": "ウエルネス上手になろう",
    "kind": "choice",
    "prompt": "「HDLコレステロール」の説明として、最も適切なものはどれか。",
    "options": [
      "炭素間に二重結合を持たない脂肪酸",
      "血糖値を上げる方向に働く膵臓由来のホルモン",
      "炭素間に二重結合を持つ脂肪酸",
      "末梢組織からコレステロールを回収する方向に働くリポたんぱく質の一種",
      "運動器の障害により移動機能が低下した状態",
      "筋肉に負荷をかけ筋力向上を目指す運動"
    ],
    "answer": 3,
    "explanation": "HDLコレステロール：末梢組織からコレステロールを回収する方向に働くリポたんぱく質の一種。他の選択肢は別の用語を説明しています。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "NEW-2-011",
    "grade": 2,
    "category": "ウエルネス上手になろう",
    "kind": "choice",
    "prompt": "「不飽和脂肪酸」の説明として、最も適切なものはどれか。",
    "options": [
      "炭素間に二重結合を持つ脂肪酸",
      "身体活動量などを踏まえて必要エネルギーの目安を示す指標",
      "運動器の障害により移動機能が低下した状態",
      "加齢に伴い心身の予備能力が低下した状態",
      "摂取エネルギーと消費エネルギーの差",
      "血糖値を上げる方向に働く膵臓由来のホルモン"
    ],
    "answer": 0,
    "explanation": "不飽和脂肪酸：炭素間に二重結合を持つ脂肪酸。他の選択肢は別の用語を説明しています。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "NEW-2-012",
    "grade": 2,
    "category": "ウエルネス上手になろう",
    "kind": "choice",
    "prompt": "「飽和脂肪酸」の説明として、最も適切なものはどれか。",
    "options": [
      "血液中でコレステロールを末梢組織へ運ぶリポたんぱく質の一種",
      "鉄が不足してヘモグロビン合成に支障が生じる貧血",
      "体内の重要なエネルギー貯蔵に使われる脂質",
      "肝臓や筋肉に蓄えられる糖の貯蔵形態",
      "炭素間に二重結合を持たない脂肪酸",
      "加齢に伴い心身の予備能力が低下した状態"
    ],
    "answer": 4,
    "explanation": "飽和脂肪酸：炭素間に二重結合を持たない脂肪酸。他の選択肢は別の用語を説明しています。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "NEW-2-013",
    "grade": 2,
    "category": "ウエルネス上手になろう",
    "kind": "choice",
    "prompt": "「鉄欠乏性貧血」の説明として、最も適切なものはどれか。",
    "options": [
      "血糖値を上げる方向に働く膵臓由来のホルモン",
      "血糖値の調整に関わる膵臓由来のホルモン",
      "鉄が不足してヘモグロビン合成に支障が生じる貧血",
      "肝臓や筋肉に蓄えられる糖の貯蔵形態",
      "血液中でコレステロールを末梢組織へ運ぶリポたんぱく質の一種",
      "筋肉に負荷をかけ筋力向上を目指す運動"
    ],
    "answer": 2,
    "explanation": "鉄欠乏性貧血：鉄が不足してヘモグロビン合成に支障が生じる貧血。他の選択肢は別の用語を説明しています。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "NEW-2-014",
    "grade": 2,
    "category": "ウエルネス上手になろう",
    "kind": "choice",
    "prompt": "「骨粗しょう症」の説明として、最も適切なものはどれか。",
    "options": [
      "疲労回復や心身の健康維持のために必要な活動・時間",
      "摂取エネルギーと消費エネルギーの差",
      "身体活動量などを踏まえて必要エネルギーの目安を示す指標",
      "体重kgを身長mの二乗で割った体格指数",
      "鉄が不足してヘモグロビン合成に支障が生じる貧血",
      "骨の量や質の低下により骨折しやすくなる状態"
    ],
    "answer": 5,
    "explanation": "骨粗しょう症：骨の量や質の低下により骨折しやすくなる状態。他の選択肢は別の用語を説明しています。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "NEW-2-015",
    "grade": 2,
    "category": "ウエルネス上手になろう",
    "kind": "choice",
    "prompt": "「ロコモティブシンドローム」の説明として、最も適切なものはどれか。",
    "options": [
      "運動器の障害により移動機能が低下した状態",
      "日常生活でどの程度体を動かしているかを表す区分",
      "炭素間に二重結合を持つ脂肪酸",
      "疲労回復や心身の健康維持のために必要な活動・時間",
      "摂取エネルギーと消費エネルギーの差",
      "血糖値を上げる方向に働く膵臓由来のホルモン"
    ],
    "answer": 0,
    "explanation": "ロコモティブシンドローム：運動器の障害により移動機能が低下した状態。他の選択肢は別の用語を説明しています。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "NEW-2-016",
    "grade": 2,
    "category": "ウエルネス上手になろう",
    "kind": "choice",
    "prompt": "「フレイル」の説明として、最も適切なものはどれか。",
    "options": [
      "筋肉に負荷をかけ筋力向上を目指す運動",
      "加齢に伴い心身の予備能力が低下した状態",
      "末梢組織からコレステロールを回収する方向に働くリポたんぱく質の一種",
      "血液中でコレステロールを末梢組織へ運ぶリポたんぱく質の一種",
      "日常生活でどの程度体を動かしているかを表す区分",
      "炭素間に二重結合を持つ脂肪酸"
    ],
    "answer": 1,
    "explanation": "フレイル：加齢に伴い心身の予備能力が低下した状態。他の選択肢は別の用語を説明しています。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "NEW-2-017",
    "grade": 2,
    "category": "ウエルネス上手になろう",
    "kind": "choice",
    "prompt": "「レジスタンス運動」の説明として、最も適切なものはどれか。",
    "options": [
      "骨の量や質の低下により骨折しやすくなる状態",
      "体重kgを身長mの二乗で割った体格指数",
      "筋肉に負荷をかけ筋力向上を目指す運動",
      "日常生活でどの程度体を動かしているかを表す区分",
      "末梢組織からコレステロールを回収する方向に働くリポたんぱく質の一種",
      "運動器の障害により移動機能が低下した状態"
    ],
    "answer": 2,
    "explanation": "レジスタンス運動：筋肉に負荷をかけ筋力向上を目指す運動。他の選択肢は別の用語を説明しています。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "NEW-2-018",
    "grade": 2,
    "category": "ウエルネス上手になろう",
    "kind": "choice",
    "prompt": "「休養」の説明として、最も適切なものはどれか。",
    "options": [
      "疲労回復や心身の健康維持のために必要な活動・時間",
      "加齢に伴い心身の予備能力が低下した状態",
      "炭素間に二重結合を持つ脂肪酸",
      "運動器の障害により移動機能が低下した状態",
      "摂取エネルギーと消費エネルギーの差",
      "筋肉に負荷をかけ筋力向上を目指す運動"
    ],
    "answer": 0,
    "explanation": "休養：疲労回復や心身の健康維持のために必要な活動・時間。他の選択肢は別の用語を説明しています。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "NEW-2-019",
    "grade": 2,
    "category": "もてなし上手になろう",
    "kind": "choice",
    "prompt": "「官能評価」の説明として、最も適切なものはどれか。",
    "options": [
      "料理を運び提供する際の移動経路",
      "特定の地域・民族の食文化に根差した料理",
      "味・香り・食感などを人の感覚で評価する方法",
      "食材や器などを通じて季節を感じさせる要素",
      "手でつまんで食べられる小さな料理",
      "茶事において濃茶の前に供される料理"
    ],
    "answer": 2,
    "explanation": "官能評価：味・香り・食感などを人の感覚で評価する方法。他の選択肢は別の用語を説明しています。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "NEW-2-020",
    "grade": 2,
    "category": "もてなし上手になろう",
    "kind": "choice",
    "prompt": "「味覚」の説明として、最も適切なものはどれか。",
    "options": [
      "食材や料理を組み合わせること",
      "特定の地域・民族の食文化に根差した料理",
      "舌などの受容器で味を感知する感覚",
      "食材や器などを通じて季節を感じさせる要素",
      "生・煮る・焼く・蒸す・揚げるという調理法の分類",
      "手でつまんで食べられる小さな料理"
    ],
    "answer": 2,
    "explanation": "味覚：舌などの受容器で味を感知する感覚。他の選択肢は別の用語を説明しています。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "NEW-2-021",
    "grade": 2,
    "category": "もてなし上手になろう",
    "kind": "choice",
    "prompt": "「嗅覚」の説明として、最も適切なものはどれか。",
    "options": [
      "生・煮る・焼く・蒸す・揚げるという調理法の分類",
      "味・香り・食感などを人の感覚で評価する方法",
      "茶事において濃茶の前に供される料理",
      "相手への配慮や心のこもった対応",
      "異なる食文化の調理法や食材を組み合わせた料理",
      "鼻の受容器でにおいを感知する感覚"
    ],
    "answer": 5,
    "explanation": "嗅覚：鼻の受容器でにおいを感知する感覚。他の選択肢は別の用語を説明しています。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "NEW-2-022",
    "grade": 2,
    "category": "もてなし上手になろう",
    "kind": "choice",
    "prompt": "「風味」の説明として、最も適切なものはどれか。",
    "options": [
      "原材料の確認や交差接触防止などを行うこと",
      "鼻の受容器でにおいを感知する感覚",
      "食事で提供する料理の組合せや計画",
      "味や香りなどが組み合わさって生じる食品の特性",
      "茶事において濃茶の前に供される料理",
      "手でつまんで食べられる小さな料理"
    ],
    "answer": 3,
    "explanation": "風味：味や香りなどが組み合わさって生じる食品の特性。他の選択肢は別の用語を説明しています。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "NEW-2-023",
    "grade": 2,
    "category": "もてなし上手になろう",
    "kind": "choice",
    "prompt": "「盛り付け」の説明として、最も適切なものはどれか。",
    "options": [
      "食器に料理を美しく食べやすく配置すること",
      "茶事において濃茶の前に供される料理",
      "手でつまんで食べられる小さな料理",
      "食に関する知識と選択する力を育む取組",
      "食事で提供する料理の組合せや計画",
      "味・香り・食感などを人の感覚で評価する方法"
    ],
    "answer": 0,
    "explanation": "盛り付け：食器に料理を美しく食べやすく配置すること。他の選択肢は別の用語を説明しています。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "NEW-2-024",
    "grade": 2,
    "category": "もてなし上手になろう",
    "kind": "choice",
    "prompt": "「献立」の説明として、最も適切なものはどれか。",
    "options": [
      "鼻の受容器でにおいを感知する感覚",
      "食事で提供する料理の組合せや計画",
      "味や香りなどが組み合わさって生じる食品の特性",
      "原材料の確認や交差接触防止などを行うこと",
      "舌などの受容器で味を感知する感覚",
      "食材や料理を組み合わせること"
    ],
    "answer": 1,
    "explanation": "献立：食事で提供する料理の組合せや計画。他の選択肢は別の用語を説明しています。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "NEW-2-025",
    "grade": 2,
    "category": "もてなし上手になろう",
    "kind": "choice",
    "prompt": "「季節感」の説明として、最も適切なものはどれか。",
    "options": [
      "食材や器などを通じて季節を感じさせる要素",
      "相手への配慮や心のこもった対応",
      "鼻の受容器でにおいを感知する感覚",
      "茶事において濃茶の前に供される料理",
      "味・香り・食感などを人の感覚で評価する方法",
      "原材料の確認や交差接触防止などを行うこと"
    ],
    "answer": 0,
    "explanation": "季節感：食材や器などを通じて季節を感じさせる要素。他の選択肢は別の用語を説明しています。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "NEW-2-026",
    "grade": 2,
    "category": "もてなし上手になろう",
    "kind": "choice",
    "prompt": "「ホスピタリティ」の説明として、最も適切なものはどれか。",
    "options": [
      "茶事において濃茶の前に供される料理",
      "味や香りなどが組み合わさって生じる食品の特性",
      "相手への配慮や心のこもった対応",
      "食に関する知識と選択する力を育む取組",
      "手でつまんで食べられる小さな料理",
      "味・香り・食感などを人の感覚で評価する方法"
    ],
    "answer": 2,
    "explanation": "ホスピタリティ：相手への配慮や心のこもった対応。他の選択肢は別の用語を説明しています。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "NEW-2-027",
    "grade": 2,
    "category": "もてなし上手になろう",
    "kind": "choice",
    "prompt": "「食物アレルギー対応」の説明として、最も適切なものはどれか。",
    "options": [
      "鼻の受容器でにおいを感知する感覚",
      "食材や料理を組み合わせること",
      "特定の地域・民族の食文化に根差した料理",
      "味・香り・食感などを人の感覚で評価する方法",
      "食事で提供する料理の組合せや計画",
      "原材料の確認や交差接触防止などを行うこと"
    ],
    "answer": 5,
    "explanation": "食物アレルギー対応：原材料の確認や交差接触防止などを行うこと。他の選択肢は別の用語を説明しています。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "NEW-2-028",
    "grade": 2,
    "category": "もてなし上手になろう",
    "kind": "choice",
    "prompt": "「配膳動線」の説明として、最も適切なものはどれか。",
    "options": [
      "特定の地域・民族の食文化に根差した料理",
      "異なる食文化の調理法や食材を組み合わせた料理",
      "舌などの受容器で味を感知する感覚",
      "食事で提供する料理の組合せや計画",
      "料理を運び提供する際の移動経路",
      "酒席や会食などで供される料理の形式"
    ],
    "answer": 4,
    "explanation": "配膳動線：料理を運び提供する際の移動経路。他の選択肢は別の用語を説明しています。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "NEW-2-029",
    "grade": 2,
    "category": "もてなし上手になろう",
    "kind": "choice",
    "prompt": "「日本料理の五法」の説明として、最も適切なものはどれか。",
    "options": [
      "食事で提供する料理の組合せや計画",
      "鼻の受容器でにおいを感知する感覚",
      "原材料の確認や交差接触防止などを行うこと",
      "生・煮る・焼く・蒸す・揚げるという調理法の分類",
      "酒席や会食などで供される料理の形式",
      "特定の地域・民族の食文化に根差した料理"
    ],
    "answer": 3,
    "explanation": "日本料理の五法：生・煮る・焼く・蒸す・揚げるという調理法の分類。他の選択肢は別の用語を説明しています。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "NEW-2-030",
    "grade": 2,
    "category": "もてなし上手になろう",
    "kind": "choice",
    "prompt": "「会席料理」の説明として、最も適切なものはどれか。",
    "options": [
      "味や香りなどが組み合わさって生じる食品の特性",
      "食事で提供する料理の組合せや計画",
      "酒席や会食などで供される料理の形式",
      "鼻の受容器でにおいを感知する感覚",
      "異なる食文化の調理法や食材を組み合わせた料理",
      "舌などの受容器で味を感知する感覚"
    ],
    "answer": 2,
    "explanation": "会席料理：酒席や会食などで供される料理の形式。他の選択肢は別の用語を説明しています。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "NEW-2-031",
    "grade": 2,
    "category": "もてなし上手になろう",
    "kind": "choice",
    "prompt": "「懐石料理」の説明として、最も適切なものはどれか。",
    "options": [
      "異なる食文化の調理法や食材を組み合わせた料理",
      "食器に料理を美しく食べやすく配置すること",
      "生・煮る・焼く・蒸す・揚げるという調理法の分類",
      "食材や器などを通じて季節を感じさせる要素",
      "特定の地域・民族の食文化に根差した料理",
      "茶事において濃茶の前に供される料理"
    ],
    "answer": 5,
    "explanation": "懐石料理：茶事において濃茶の前に供される料理。他の選択肢は別の用語を説明しています。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "NEW-2-032",
    "grade": 2,
    "category": "もてなし上手になろう",
    "kind": "choice",
    "prompt": "「エスニック料理」の説明として、最も適切なものはどれか。",
    "options": [
      "特定の地域・民族の食文化に根差した料理",
      "料理を運び提供する際の移動経路",
      "生・煮る・焼く・蒸す・揚げるという調理法の分類",
      "異なる食文化の調理法や食材を組み合わせた料理",
      "手でつまんで食べられる小さな料理",
      "食事で提供する料理の組合せや計画"
    ],
    "answer": 0,
    "explanation": "エスニック料理：特定の地域・民族の食文化に根差した料理。他の選択肢は別の用語を説明しています。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "NEW-2-033",
    "grade": 2,
    "category": "もてなし上手になろう",
    "kind": "choice",
    "prompt": "「フュージョン料理」の説明として、最も適切なものはどれか。",
    "options": [
      "舌などの受容器で味を感知する感覚",
      "味や香りなどが組み合わさって生じる食品の特性",
      "異なる食文化の調理法や食材を組み合わせた料理",
      "食材や料理を組み合わせること",
      "生・煮る・焼く・蒸す・揚げるという調理法の分類",
      "味・香り・食感などを人の感覚で評価する方法"
    ],
    "answer": 2,
    "explanation": "フュージョン料理：異なる食文化の調理法や食材を組み合わせた料理。他の選択肢は別の用語を説明しています。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "NEW-2-034",
    "grade": 2,
    "category": "もてなし上手になろう",
    "kind": "choice",
    "prompt": "「フィンガーフード」の説明として、最も適切なものはどれか。",
    "options": [
      "手でつまんで食べられる小さな料理",
      "異なる食文化の調理法や食材を組み合わせた料理",
      "舌などの受容器で味を感知する感覚",
      "食材や料理を組み合わせること",
      "味・香り・食感などを人の感覚で評価する方法",
      "食事で提供する料理の組合せや計画"
    ],
    "answer": 0,
    "explanation": "フィンガーフード：手でつまんで食べられる小さな料理。他の選択肢は別の用語を説明しています。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "NEW-2-035",
    "grade": 2,
    "category": "もてなし上手になろう",
    "kind": "choice",
    "prompt": "「食べ合わせ」の説明として、最も適切なものはどれか。",
    "options": [
      "食材や料理を組み合わせること",
      "酒席や会食などで供される料理の形式",
      "相手への配慮や心のこもった対応",
      "食器に料理を美しく食べやすく配置すること",
      "特定の地域・民族の食文化に根差した料理",
      "舌などの受容器で味を感知する感覚"
    ],
    "answer": 0,
    "explanation": "食べ合わせ：食材や料理を組み合わせること。他の選択肢は別の用語を説明しています。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "NEW-2-036",
    "grade": 2,
    "category": "もてなし上手になろう",
    "kind": "choice",
    "prompt": "「食育」の説明として、最も適切なものはどれか。",
    "options": [
      "舌などの受容器で味を感知する感覚",
      "食事で提供する料理の組合せや計画",
      "食に関する知識と選択する力を育む取組",
      "手でつまんで食べられる小さな料理",
      "原材料の確認や交差接触防止などを行うこと",
      "食器に料理を美しく食べやすく配置すること"
    ],
    "answer": 2,
    "explanation": "食育：食に関する知識と選択する力を育む取組。他の選択肢は別の用語を説明しています。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "NEW-2-037",
    "grade": 2,
    "category": "買い物上手になろう",
    "kind": "choice",
    "prompt": "「機能性表示食品」の説明として、最も適切なものはどれか。",
    "options": [
      "食品成分の酸化による品質変化を抑える添加物",
      "食品表示内容について責任を持つ事業者",
      "国の審査を受け特定の保健用途を表示できる食品",
      "事業者の責任で科学的根拠に基づく機能性を表示し届け出た食品",
      "一般に使用量の多い順に原材料を示すルール",
      "アレルギー表示が推奨される原材料の区分"
    ],
    "answer": 3,
    "explanation": "機能性表示食品：事業者の責任で科学的根拠に基づく機能性を表示し届け出た食品。他の選択肢は別の用語を説明しています。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "NEW-2-038",
    "grade": 2,
    "category": "買い物上手になろう",
    "kind": "choice",
    "prompt": "「特定保健用食品」の説明として、最も適切なものはどれか。",
    "options": [
      "食品に用いられた添加物を示す表示",
      "一般に使用量の多い順に原材料を示すルール",
      "アレルギー表示が推奨される原材料の区分",
      "国の審査を受け特定の保健用途を表示できる食品",
      "意図しないアレルゲンが別の食品に混入すること",
      "加工食品の原材料がどこで生産されたかを知らせる表示"
    ],
    "answer": 3,
    "explanation": "特定保健用食品：国の審査を受け特定の保健用途を表示できる食品。他の選択肢は別の用語を説明しています。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "NEW-2-039",
    "grade": 2,
    "category": "買い物上手になろう",
    "kind": "choice",
    "prompt": "「栄養機能食品」の説明として、最も適切なものはどれか。",
    "options": [
      "一定の食品について遺伝子組換えの利用に関する情報を示す表示",
      "食品に甘味を与えるために使う添加物",
      "原材料名・内容量などの法定情報をまとめた表示欄",
      "所定の栄養成分について規格基準に従って栄養機能を表示する食品",
      "食品表示内容について責任を持つ事業者",
      "食品の表示方法や必要事項を定める基準"
    ],
    "answer": 3,
    "explanation": "栄養機能食品：所定の栄養成分について規格基準に従って栄養機能を表示する食品。他の選択肢は別の用語を説明しています。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "NEW-2-040",
    "grade": 2,
    "category": "買い物上手になろう",
    "kind": "choice",
    "prompt": "「食品表示基準」の説明として、最も適切なものはどれか。",
    "options": [
      "アレルギー表示が推奨される原材料の区分",
      "製造・流通上のまとまりを識別する番号",
      "食品の表示方法や必要事項を定める基準",
      "加工食品の原材料がどこで生産されたかを知らせる表示",
      "食品の酸性・アルカリ性を調整する添加物",
      "食品表示内容について責任を持つ事業者"
    ],
    "answer": 2,
    "explanation": "食品表示基準：食品の表示方法や必要事項を定める基準。他の選択肢は別の用語を説明しています。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "NEW-2-041",
    "grade": 2,
    "category": "買い物上手になろう",
    "kind": "choice",
    "prompt": "「一括表示」の説明として、最も適切なものはどれか。",
    "options": [
      "食品の酸性・アルカリ性を調整する添加物",
      "食品成分の酸化による品質変化を抑える添加物",
      "食品の表示方法や必要事項を定める基準",
      "食品表示内容について責任を持つ事業者",
      "アレルギー表示制度で表示義務の対象となる原材料の区分",
      "原材料名・内容量などの法定情報をまとめた表示欄"
    ],
    "answer": 5,
    "explanation": "一括表示：原材料名・内容量などの法定情報をまとめた表示欄。他の選択肢は別の用語を説明しています。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "NEW-2-042",
    "grade": 2,
    "category": "買い物上手になろう",
    "kind": "choice",
    "prompt": "「原料原産地表示」の説明として、最も適切なものはどれか。",
    "options": [
      "原材料名・内容量などの法定情報をまとめた表示欄",
      "意図しないアレルゲンが別の食品に混入すること",
      "加工食品の原材料がどこで生産されたかを知らせる表示",
      "保存試験などの科学的知見を基に品質保持期限を定めること",
      "食品表示内容について責任を持つ事業者",
      "食品成分の酸化による品質変化を抑える添加物"
    ],
    "answer": 2,
    "explanation": "原料原産地表示：加工食品の原材料がどこで生産されたかを知らせる表示。他の選択肢は別の用語を説明しています。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "NEW-2-043",
    "grade": 2,
    "category": "買い物上手になろう",
    "kind": "choice",
    "prompt": "「遺伝子組換え表示」の説明として、最も適切なものはどれか。",
    "options": [
      "食品表示内容について責任を持つ事業者",
      "一般に使用量の多い順に原材料を示すルール",
      "食品の酸性・アルカリ性を調整する添加物",
      "一定の食品について遺伝子組換えの利用に関する情報を示す表示",
      "国の審査を受け特定の保健用途を表示できる食品",
      "保存試験などの科学的知見を基に品質保持期限を定めること"
    ],
    "answer": 3,
    "explanation": "遺伝子組換え表示：一定の食品について遺伝子組換えの利用に関する情報を示す表示。他の選択肢は別の用語を説明しています。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "NEW-2-044",
    "grade": 2,
    "category": "買い物上手になろう",
    "kind": "choice",
    "prompt": "「特定原材料」の説明として、最も適切なものはどれか。",
    "options": [
      "一般に使用量の多い順に原材料を示すルール",
      "事業者の責任で科学的根拠に基づく機能性を表示し届け出た食品",
      "一定の食品について遺伝子組換えの利用に関する情報を示す表示",
      "アレルギー表示制度で表示義務の対象となる原材料の区分",
      "加工食品の原材料がどこで生産されたかを知らせる表示",
      "アレルギー表示が推奨される原材料の区分"
    ],
    "answer": 3,
    "explanation": "特定原材料：アレルギー表示制度で表示義務の対象となる原材料の区分。他の選択肢は別の用語を説明しています。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "NEW-2-045",
    "grade": 2,
    "category": "買い物上手になろう",
    "kind": "choice",
    "prompt": "「特定原材料に準ずるもの」の説明として、最も適切なものはどれか。",
    "options": [
      "アレルギー表示が推奨される原材料の区分",
      "国の審査を受け特定の保健用途を表示できる食品",
      "原材料名・内容量などの法定情報をまとめた表示欄",
      "一定の食品について遺伝子組換えの利用に関する情報を示す表示",
      "食品に用いられた添加物を示す表示",
      "食品に甘味を与えるために使う添加物"
    ],
    "answer": 0,
    "explanation": "特定原材料に準ずるもの：アレルギー表示が推奨される原材料の区分。他の選択肢は別の用語を説明しています。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "NEW-2-046",
    "grade": 2,
    "category": "買い物上手になろう",
    "kind": "choice",
    "prompt": "「添加物表示」の説明として、最も適切なものはどれか。",
    "options": [
      "食品の表示方法や必要事項を定める基準",
      "食品に用いられた添加物を示す表示",
      "一定の食品について遺伝子組換えの利用に関する情報を示す表示",
      "食品成分の酸化による品質変化を抑える添加物",
      "食品に甘味を与えるために使う添加物",
      "事業者の責任で科学的根拠に基づく機能性を表示し届け出た食品"
    ],
    "answer": 1,
    "explanation": "添加物表示：食品に用いられた添加物を示す表示。他の選択肢は別の用語を説明しています。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "NEW-2-047",
    "grade": 2,
    "category": "買い物上手になろう",
    "kind": "choice",
    "prompt": "「pH調整剤」の説明として、最も適切なものはどれか。",
    "options": [
      "食品成分の酸化による品質変化を抑える添加物",
      "加工食品の原材料がどこで生産されたかを知らせる表示",
      "食品の酸性・アルカリ性を調整する添加物",
      "国の審査を受け特定の保健用途を表示できる食品",
      "食品に甘味を与えるために使う添加物",
      "一般に使用量の多い順に原材料を示すルール"
    ],
    "answer": 2,
    "explanation": "pH調整剤：食品の酸性・アルカリ性を調整する添加物。他の選択肢は別の用語を説明しています。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "NEW-2-048",
    "grade": 2,
    "category": "買い物上手になろう",
    "kind": "choice",
    "prompt": "「酸化防止剤」の説明として、最も適切なものはどれか。",
    "options": [
      "食品の酸性・アルカリ性を調整する添加物",
      "食品の表示方法や必要事項を定める基準",
      "一般に使用量の多い順に原材料を示すルール",
      "所定の栄養成分について規格基準に従って栄養機能を表示する食品",
      "食品成分の酸化による品質変化を抑える添加物",
      "原材料名・内容量などの法定情報をまとめた表示欄"
    ],
    "answer": 4,
    "explanation": "酸化防止剤：食品成分の酸化による品質変化を抑える添加物。他の選択肢は別の用語を説明しています。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "NEW-2-049",
    "grade": 2,
    "category": "買い物上手になろう",
    "kind": "choice",
    "prompt": "「甘味料」の説明として、最も適切なものはどれか。",
    "options": [
      "食品に用いられた添加物を示す表示",
      "保存試験などの科学的知見を基に品質保持期限を定めること",
      "食品表示内容について責任を持つ事業者",
      "食品に甘味を与えるために使う添加物",
      "事業者の責任で科学的根拠に基づく機能性を表示し届け出た食品",
      "一般に使用量の多い順に原材料を示すルール"
    ],
    "answer": 3,
    "explanation": "甘味料：食品に甘味を与えるために使う添加物。他の選択肢は別の用語を説明しています。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "NEW-2-050",
    "grade": 2,
    "category": "買い物上手になろう",
    "kind": "choice",
    "prompt": "「アレルゲンの交差接触」の説明として、最も適切なものはどれか。",
    "options": [
      "意図しないアレルゲンが別の食品に混入すること",
      "国の審査を受け特定の保健用途を表示できる食品",
      "一般に使用量の多い順に原材料を示すルール",
      "アレルギー表示が推奨される原材料の区分",
      "食品の表示方法や必要事項を定める基準",
      "食品成分の酸化による品質変化を抑える添加物"
    ],
    "answer": 0,
    "explanation": "アレルゲンの交差接触：意図しないアレルゲンが別の食品に混入すること。他の選択肢は別の用語を説明しています。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "NEW-2-051",
    "grade": 2,
    "category": "買い物上手になろう",
    "kind": "choice",
    "prompt": "「表示責任者」の説明として、最も適切なものはどれか。",
    "options": [
      "事業者の責任で科学的根拠に基づく機能性を表示し届け出た食品",
      "一般に使用量の多い順に原材料を示すルール",
      "製造・流通上のまとまりを識別する番号",
      "食品表示内容について責任を持つ事業者",
      "一定の食品について遺伝子組換えの利用に関する情報を示す表示",
      "原材料名・内容量などの法定情報をまとめた表示欄"
    ],
    "answer": 3,
    "explanation": "表示責任者：食品表示内容について責任を持つ事業者。他の選択肢は別の用語を説明しています。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "NEW-2-052",
    "grade": 2,
    "category": "買い物上手になろう",
    "kind": "choice",
    "prompt": "「ロット番号」の説明として、最も適切なものはどれか。",
    "options": [
      "意図しないアレルゲンが別の食品に混入すること",
      "食品表示内容について責任を持つ事業者",
      "製造・流通上のまとまりを識別する番号",
      "一般に使用量の多い順に原材料を示すルール",
      "食品に用いられた添加物を示す表示",
      "食品の表示方法や必要事項を定める基準"
    ],
    "answer": 2,
    "explanation": "ロット番号：製造・流通上のまとまりを識別する番号。他の選択肢は別の用語を説明しています。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "NEW-2-053",
    "grade": 2,
    "category": "買い物上手になろう",
    "kind": "choice",
    "prompt": "「賞味期限の設定」の説明として、最も適切なものはどれか。",
    "options": [
      "意図しないアレルゲンが別の食品に混入すること",
      "一定の食品について遺伝子組換えの利用に関する情報を示す表示",
      "食品の表示方法や必要事項を定める基準",
      "所定の栄養成分について規格基準に従って栄養機能を表示する食品",
      "保存試験などの科学的知見を基に品質保持期限を定めること",
      "製造・流通上のまとまりを識別する番号"
    ],
    "answer": 4,
    "explanation": "賞味期限の設定：保存試験などの科学的知見を基に品質保持期限を定めること。他の選択肢は別の用語を説明しています。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "NEW-2-054",
    "grade": 2,
    "category": "買い物上手になろう",
    "kind": "choice",
    "prompt": "「原材料表示の重量順」の説明として、最も適切なものはどれか。",
    "options": [
      "食品に用いられた添加物を示す表示",
      "食品に甘味を与えるために使う添加物",
      "保存試験などの科学的知見を基に品質保持期限を定めること",
      "アレルギー表示制度で表示義務の対象となる原材料の区分",
      "一般に使用量の多い順に原材料を示すルール",
      "国の審査を受け特定の保健用途を表示できる食品"
    ],
    "answer": 4,
    "explanation": "原材料表示の重量順：一般に使用量の多い順に原材料を示すルール。他の選択肢は別の用語を説明しています。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "NEW-2-055",
    "grade": 2,
    "category": "段取り上手になろう",
    "kind": "choice",
    "prompt": "「一般衛生管理」の説明として、最も適切なものはどれか。",
    "options": [
      "先に受け入れた在庫から原則として使う管理方法",
      "衛生レベルに応じて作業区域を分けること",
      "細菌・ウイルス等が食品や環境に付着・混入すること",
      "施設・設備・従事者など食品取扱いの基礎的な衛生管理",
      "洗剤や残留化学物質などによる危害",
      "清掃する場所・方法・頻度・担当を事前に決めること"
    ],
    "answer": 3,
    "explanation": "一般衛生管理：施設・設備・従事者など食品取扱いの基礎的な衛生管理。他の選択肢は別の用語を説明しています。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "NEW-2-056",
    "grade": 2,
    "category": "段取り上手になろう",
    "kind": "choice",
    "prompt": "「HACCP」の説明として、最も適切なものはどれか。",
    "options": [
      "食品に起こり得る生物・化学・物理的危害を検討すること",
      "施設・設備・従事者など食品取扱いの基礎的な衛生管理",
      "金属片やガラス片などの異物による危害",
      "細菌・ウイルス等が食品や環境に付着・混入すること",
      "細菌をつけない・増やさない・やっつけるという対策",
      "危害要因を分析し重要管理点を継続的に管理する衛生手法"
    ],
    "answer": 5,
    "explanation": "HACCP：危害要因を分析し重要管理点を継続的に管理する衛生手法。他の選択肢は別の用語を説明しています。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "NEW-2-057",
    "grade": 2,
    "category": "段取り上手になろう",
    "kind": "choice",
    "prompt": "「危害要因分析」の説明として、最も適切なものはどれか。",
    "options": [
      "重要管理点が基準内にあるか継続して確認すること",
      "施設・設備・従事者など食品取扱いの基礎的な衛生管理",
      "従事者に衛生手順や安全な作業を学んでもらうこと",
      "衛生レベルに応じて作業区域を分けること",
      "食品に起こり得る生物・化学・物理的危害を検討すること",
      "細菌・ウイルス等が食品や環境に付着・混入すること"
    ],
    "answer": 4,
    "explanation": "危害要因分析：食品に起こり得る生物・化学・物理的危害を検討すること。他の選択肢は別の用語を説明しています。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "NEW-2-058",
    "grade": 2,
    "category": "段取り上手になろう",
    "kind": "choice",
    "prompt": "「重要管理点」の説明として、最も適切なものはどれか。",
    "options": [
      "金属片やガラス片などの異物による危害",
      "危害要因を分析し重要管理点を継続的に管理する衛生手法",
      "危害を防止・除去・低減するため特に管理が必要な工程",
      "細菌をつけない・増やさない・やっつけるという対策",
      "食品に起こり得る生物・化学・物理的危害を検討すること",
      "従事者に衛生手順や安全な作業を学んでもらうこと"
    ],
    "answer": 2,
    "explanation": "重要管理点：危害を防止・除去・低減するため特に管理が必要な工程。他の選択肢は別の用語を説明しています。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "NEW-2-059",
    "grade": 2,
    "category": "段取り上手になろう",
    "kind": "choice",
    "prompt": "「モニタリング」の説明として、最も適切なものはどれか。",
    "options": [
      "食品に起こり得る生物・化学・物理的危害を検討すること",
      "重要管理点が基準内にあるか継続して確認すること",
      "危害を防止・除去・低減するため特に管理が必要な工程",
      "従事者に衛生手順や安全な作業を学んでもらうこと",
      "施設・設備・従事者など食品取扱いの基礎的な衛生管理",
      "管理基準から外れた際に安全性確保のため取る対応"
    ],
    "answer": 1,
    "explanation": "モニタリング：重要管理点が基準内にあるか継続して確認すること。他の選択肢は別の用語を説明しています。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "NEW-2-060",
    "grade": 2,
    "category": "段取り上手になろう",
    "kind": "choice",
    "prompt": "「是正措置」の説明として、最も適切なものはどれか。",
    "options": [
      "細菌・ウイルス等が食品や環境に付着・混入すること",
      "金属片やガラス片などの異物による危害",
      "病原体や寄生虫などに由来する危害",
      "安全性などに問題のある製品を市場から回収する対応",
      "管理基準から外れた際に安全性確保のため取る対応",
      "洗剤や残留化学物質などによる危害"
    ],
    "answer": 4,
    "explanation": "是正措置：管理基準から外れた際に安全性確保のため取る対応。他の選択肢は別の用語を説明しています。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "NEW-2-061",
    "grade": 2,
    "category": "段取り上手になろう",
    "kind": "choice",
    "prompt": "「検証」の説明として、最も適切なものはどれか。",
    "options": [
      "病原体や寄生虫などに由来する危害",
      "衛生管理システムが計画通り機能しているか評価すること",
      "細菌をつけない・増やさない・やっつけるという対策",
      "施設・設備・従事者など食品取扱いの基礎的な衛生管理",
      "従事者に衛生手順や安全な作業を学んでもらうこと",
      "危害要因を分析し重要管理点を継続的に管理する衛生手法"
    ],
    "answer": 1,
    "explanation": "検証：衛生管理システムが計画通り機能しているか評価すること。他の選択肢は別の用語を説明しています。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "NEW-2-062",
    "grade": 2,
    "category": "段取り上手になろう",
    "kind": "choice",
    "prompt": "「微生物汚染」の説明として、最も適切なものはどれか。",
    "options": [
      "先に受け入れた在庫から原則として使う管理方法",
      "細菌・ウイルス等が食品や環境に付着・混入すること",
      "細菌をつけない・増やさない・やっつけるという対策",
      "食品に起こり得る生物・化学・物理的危害を検討すること",
      "危害要因を分析し重要管理点を継続的に管理する衛生手法",
      "従事者に衛生手順や安全な作業を学んでもらうこと"
    ],
    "answer": 1,
    "explanation": "微生物汚染：細菌・ウイルス等が食品や環境に付着・混入すること。他の選択肢は別の用語を説明しています。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "NEW-2-063",
    "grade": 2,
    "category": "段取り上手になろう",
    "kind": "choice",
    "prompt": "「物理的危害」の説明として、最も適切なものはどれか。",
    "options": [
      "金属片やガラス片などの異物による危害",
      "洗剤や残留化学物質などによる危害",
      "清掃する場所・方法・頻度・担当を事前に決めること",
      "細菌をつけない・増やさない・やっつけるという対策",
      "細菌・ウイルス等が食品や環境に付着・混入すること",
      "先に受け入れた在庫から原則として使う管理方法"
    ],
    "answer": 0,
    "explanation": "物理的危害：金属片やガラス片などの異物による危害。他の選択肢は別の用語を説明しています。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "NEW-2-064",
    "grade": 2,
    "category": "段取り上手になろう",
    "kind": "choice",
    "prompt": "「化学的危害」の説明として、最も適切なものはどれか。",
    "options": [
      "危害要因を分析し重要管理点を継続的に管理する衛生手法",
      "細菌・ウイルス等が食品や環境に付着・混入すること",
      "清掃する場所・方法・頻度・担当を事前に決めること",
      "洗剤や残留化学物質などによる危害",
      "細菌をつけない・増やさない・やっつけるという対策",
      "病原体や寄生虫などに由来する危害"
    ],
    "answer": 3,
    "explanation": "化学的危害：洗剤や残留化学物質などによる危害。他の選択肢は別の用語を説明しています。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "NEW-2-065",
    "grade": 2,
    "category": "段取り上手になろう",
    "kind": "choice",
    "prompt": "「生物的危害」の説明として、最も適切なものはどれか。",
    "options": [
      "危害を防止・除去・低減するため特に管理が必要な工程",
      "管理基準から外れた際に安全性確保のため取る対応",
      "金属片やガラス片などの異物による危害",
      "衛生管理システムが計画通り機能しているか評価すること",
      "病原体や寄生虫などに由来する危害",
      "洗剤や残留化学物質などによる危害"
    ],
    "answer": 4,
    "explanation": "生物的危害：病原体や寄生虫などに由来する危害。他の選択肢は別の用語を説明しています。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "NEW-2-066",
    "grade": 2,
    "category": "段取り上手になろう",
    "kind": "choice",
    "prompt": "「食中毒予防の三原則」の説明として、最も適切なものはどれか。",
    "options": [
      "危害要因を分析し重要管理点を継続的に管理する衛生手法",
      "安全性などに問題のある製品を市場から回収する対応",
      "衛生管理システムが計画通り機能しているか評価すること",
      "食品に起こり得る生物・化学・物理的危害を検討すること",
      "病原体や寄生虫などに由来する危害",
      "細菌をつけない・増やさない・やっつけるという対策"
    ],
    "answer": 5,
    "explanation": "食中毒予防の三原則：細菌をつけない・増やさない・やっつけるという対策。他の選択肢は別の用語を説明しています。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "NEW-2-067",
    "grade": 2,
    "category": "段取り上手になろう",
    "kind": "choice",
    "prompt": "「ゾーニング」の説明として、最も適切なものはどれか。",
    "options": [
      "危害を防止・除去・低減するため特に管理が必要な工程",
      "冷蔵庫や加熱工程の温度を記録して管理すること",
      "清掃する場所・方法・頻度・担当を事前に決めること",
      "衛生レベルに応じて作業区域を分けること",
      "細菌・ウイルス等が食品や環境に付着・混入すること",
      "危害要因を分析し重要管理点を継続的に管理する衛生手法"
    ],
    "answer": 3,
    "explanation": "ゾーニング：衛生レベルに応じて作業区域を分けること。他の選択肢は別の用語を説明しています。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "NEW-2-068",
    "grade": 2,
    "category": "段取り上手になろう",
    "kind": "choice",
    "prompt": "「先入先出」の説明として、最も適切なものはどれか。",
    "options": [
      "細菌をつけない・増やさない・やっつけるという対策",
      "安全性などに問題のある製品を市場から回収する対応",
      "管理基準から外れた際に安全性確保のため取る対応",
      "危害を防止・除去・低減するため特に管理が必要な工程",
      "先に受け入れた在庫から原則として使う管理方法",
      "衛生レベルに応じて作業区域を分けること"
    ],
    "answer": 4,
    "explanation": "先入先出：先に受け入れた在庫から原則として使う管理方法。他の選択肢は別の用語を説明しています。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "NEW-2-069",
    "grade": 2,
    "category": "段取り上手になろう",
    "kind": "choice",
    "prompt": "「温度管理記録」の説明として、最も適切なものはどれか。",
    "options": [
      "病原体や寄生虫などに由来する危害",
      "清掃する場所・方法・頻度・担当を事前に決めること",
      "危害要因を分析し重要管理点を継続的に管理する衛生手法",
      "冷蔵庫や加熱工程の温度を記録して管理すること",
      "金属片やガラス片などの異物による危害",
      "先に受け入れた在庫から原則として使う管理方法"
    ],
    "answer": 3,
    "explanation": "温度管理記録：冷蔵庫や加熱工程の温度を記録して管理すること。他の選択肢は別の用語を説明しています。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "NEW-2-070",
    "grade": 2,
    "category": "段取り上手になろう",
    "kind": "choice",
    "prompt": "「衛生教育」の説明として、最も適切なものはどれか。",
    "options": [
      "細菌・ウイルス等が食品や環境に付着・混入すること",
      "病原体や寄生虫などに由来する危害",
      "金属片やガラス片などの異物による危害",
      "細菌をつけない・増やさない・やっつけるという対策",
      "危害を防止・除去・低減するため特に管理が必要な工程",
      "従事者に衛生手順や安全な作業を学んでもらうこと"
    ],
    "answer": 5,
    "explanation": "衛生教育：従事者に衛生手順や安全な作業を学んでもらうこと。他の選択肢は別の用語を説明しています。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "NEW-2-071",
    "grade": 2,
    "category": "段取り上手になろう",
    "kind": "choice",
    "prompt": "「清掃計画」の説明として、最も適切なものはどれか。",
    "options": [
      "衛生管理システムが計画通り機能しているか評価すること",
      "重要管理点が基準内にあるか継続して確認すること",
      "細菌をつけない・増やさない・やっつけるという対策",
      "洗剤や残留化学物質などによる危害",
      "安全性などに問題のある製品を市場から回収する対応",
      "清掃する場所・方法・頻度・担当を事前に決めること"
    ],
    "answer": 5,
    "explanation": "清掃計画：清掃する場所・方法・頻度・担当を事前に決めること。他の選択肢は別の用語を説明しています。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "NEW-2-072",
    "grade": 2,
    "category": "生き方上手になろう",
    "kind": "choice",
    "prompt": "「内食」の説明として、最も適切なものはどれか。",
    "options": [
      "家庭で調理して食事をとること",
      "調理に必要な食材をレシピ等とセットにした商品",
      "持ち帰り惣菜や弁当などを家庭等で食べること",
      "一定期間に在庫が何回入れ替わったかを示す指標",
      "小売業者等が企画し独自ブランドで販売する商品",
      "食品を最終消費者に販売する業態"
    ],
    "answer": 0,
    "explanation": "内食：家庭で調理して食事をとること。他の選択肢は別の用語を説明しています。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "NEW-2-073",
    "grade": 2,
    "category": "生き方上手になろう",
    "kind": "choice",
    "prompt": "「中食」の説明として、最も適切なものはどれか。",
    "options": [
      "持ち帰り惣菜や弁当などを家庭等で食べること",
      "販売時点で記録される商品・数量・日時等の情報",
      "冷凍・冷蔵の温度を保って流通させる仕組み",
      "売場の棚に商品をどの位置・量で陳列するかを決めること",
      "調理に必要な食材をレシピ等とセットにした商品",
      "家庭で調理して食事をとること"
    ],
    "answer": 0,
    "explanation": "中食：持ち帰り惣菜や弁当などを家庭等で食べること。他の選択肢は別の用語を説明しています。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "NEW-2-074",
    "grade": 2,
    "category": "生き方上手になろう",
    "kind": "choice",
    "prompt": "「外食」の説明として、最も適切なものはどれか。",
    "options": [
      "食料品などをセルフサービス中心で販売する小売業態",
      "売場の棚に商品をどの位置・量で陳列するかを決めること",
      "持ち帰り惣菜や弁当などを家庭等で食べること",
      "飲食店などで提供される食事をその場で食べること",
      "調理に必要な食材をレシピ等とセットにした商品",
      "一定期間に在庫が何回入れ替わったかを示す指標"
    ],
    "answer": 3,
    "explanation": "外食：飲食店などで提供される食事をその場で食べること。他の選択肢は別の用語を説明しています。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "NEW-2-075",
    "grade": 2,
    "category": "生き方上手になろう",
    "kind": "choice",
    "prompt": "「食品小売」の説明として、最も適切なものはどれか。",
    "options": [
      "冷凍・冷蔵の温度を保って流通させる仕組み",
      "一定期間に在庫が何回入れ替わったかを示す指標",
      "インターネットを介して商品を売買すること",
      "食品を最終消費者に販売する業態",
      "販売時点で記録される商品・数量・日時等の情報",
      "発注から納品までなどに要する時間"
    ],
    "answer": 3,
    "explanation": "食品小売：食品を最終消費者に販売する業態。他の選択肢は別の用語を説明しています。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "NEW-2-076",
    "grade": 2,
    "category": "生き方上手になろう",
    "kind": "choice",
    "prompt": "「スーパーマーケット」の説明として、最も適切なものはどれか。",
    "options": [
      "売場の棚に商品をどの位置・量で陳列するかを決めること",
      "販売時点で記録される商品・数量・日時等の情報",
      "在庫管理で商品を識別する最小単位",
      "商品の保管・仕分け・出荷などを集約する施設",
      "冷凍・冷蔵の温度を保って流通させる仕組み",
      "食料品などをセルフサービス中心で販売する小売業態"
    ],
    "answer": 5,
    "explanation": "スーパーマーケット：食料品などをセルフサービス中心で販売する小売業態。他の選択肢は別の用語を説明しています。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "NEW-2-077",
    "grade": 2,
    "category": "生き方上手になろう",
    "kind": "choice",
    "prompt": "「コンビニエンスストア」の説明として、最も適切なものはどれか。",
    "options": [
      "調理に必要な食材をレシピ等とセットにした商品",
      "インターネットを介して商品を売買すること",
      "発注から納品までなどに要する時間",
      "小型店舗で利便性の高い品ぞろえや長時間営業を特徴とする業態",
      "売場の棚に商品をどの位置・量で陳列するかを決めること",
      "食品を最終消費者に販売する業態"
    ],
    "answer": 3,
    "explanation": "コンビニエンスストア：小型店舗で利便性の高い品ぞろえや長時間営業を特徴とする業態。他の選択肢は別の用語を説明しています。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "NEW-2-078",
    "grade": 2,
    "category": "生き方上手になろう",
    "kind": "choice",
    "prompt": "「EC販売」の説明として、最も適切なものはどれか。",
    "options": [
      "インターネットを介して商品を売買すること",
      "売場の棚に商品をどの位置・量で陳列するかを決めること",
      "商品の保管・仕分け・出荷などを集約する施設",
      "飲食店などで提供される食事をその場で食べること",
      "食品を最終消費者に販売する業態",
      "冷凍・冷蔵の温度を保って流通させる仕組み"
    ],
    "answer": 0,
    "explanation": "EC販売：インターネットを介して商品を売買すること。他の選択肢は別の用語を説明しています。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "NEW-2-079",
    "grade": 2,
    "category": "生き方上手になろう",
    "kind": "choice",
    "prompt": "「POSデータ」の説明として、最も適切なものはどれか。",
    "options": [
      "食料品などをセルフサービス中心で販売する小売業態",
      "販売時点で記録される商品・数量・日時等の情報",
      "調理に必要な食材をレシピ等とセットにした商品",
      "冷凍・冷蔵の温度を保って流通させる仕組み",
      "小売業者等が企画し独自ブランドで販売する商品",
      "一定期間に在庫が何回入れ替わったかを示す指標"
    ],
    "answer": 1,
    "explanation": "POSデータ：販売時点で記録される商品・数量・日時等の情報。他の選択肢は別の用語を説明しています。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "NEW-2-080",
    "grade": 2,
    "category": "生き方上手になろう",
    "kind": "choice",
    "prompt": "「SKU」の説明として、最も適切なものはどれか。",
    "options": [
      "商品の保管・仕分け・出荷などを集約する施設",
      "飲食店などで提供される食事をその場で食べること",
      "発注から納品までなどに要する時間",
      "持ち帰り惣菜や弁当などを家庭等で食べること",
      "過去の販売などから将来必要になる量を見積もること",
      "在庫管理で商品を識別する最小単位"
    ],
    "answer": 5,
    "explanation": "SKU：在庫管理で商品を識別する最小単位。他の選択肢は別の用語を説明しています。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "NEW-2-081",
    "grade": 2,
    "category": "生き方上手になろう",
    "kind": "choice",
    "prompt": "「在庫回転率」の説明として、最も適切なものはどれか。",
    "options": [
      "一定期間に在庫が何回入れ替わったかを示す指標",
      "販売時点で記録される商品・数量・日時等の情報",
      "在庫管理で商品を識別する最小単位",
      "小売業者等が企画し独自ブランドで販売する商品",
      "過去の販売などから将来必要になる量を見積もること",
      "調理に必要な食材をレシピ等とセットにした商品"
    ],
    "answer": 0,
    "explanation": "在庫回転率：一定期間に在庫が何回入れ替わったかを示す指標。他の選択肢は別の用語を説明しています。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "NEW-2-082",
    "grade": 2,
    "category": "生き方上手になろう",
    "kind": "choice",
    "prompt": "「需要予測」の説明として、最も適切なものはどれか。",
    "options": [
      "過去の販売などから将来必要になる量を見積もること",
      "食料品などをセルフサービス中心で販売する小売業態",
      "飲食店などで提供される食事をその場で食べること",
      "発注から納品までなどに要する時間",
      "注文された食品を利用者へ届けるサービス",
      "持ち帰り惣菜や弁当などを家庭等で食べること"
    ],
    "answer": 0,
    "explanation": "需要予測：過去の販売などから将来必要になる量を見積もること。他の選択肢は別の用語を説明しています。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "NEW-2-083",
    "grade": 2,
    "category": "生き方上手になろう",
    "kind": "choice",
    "prompt": "「コールドチェーン」の説明として、最も適切なものはどれか。",
    "options": [
      "販売時点で記録される商品・数量・日時等の情報",
      "冷凍・冷蔵の温度を保って流通させる仕組み",
      "小型店舗で利便性の高い品ぞろえや長時間営業を特徴とする業態",
      "調理に必要な食材をレシピ等とセットにした商品",
      "発注から納品までなどに要する時間",
      "小売業者等が企画し独自ブランドで販売する商品"
    ],
    "answer": 1,
    "explanation": "コールドチェーン：冷凍・冷蔵の温度を保って流通させる仕組み。他の選択肢は別の用語を説明しています。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "NEW-2-084",
    "grade": 2,
    "category": "生き方上手になろう",
    "kind": "choice",
    "prompt": "「物流センター」の説明として、最も適切なものはどれか。",
    "options": [
      "売場の棚に商品をどの位置・量で陳列するかを決めること",
      "商品の保管・仕分け・出荷などを集約する施設",
      "注文された食品を利用者へ届けるサービス",
      "在庫管理で商品を識別する最小単位",
      "冷凍・冷蔵の温度を保って流通させる仕組み",
      "発注から納品までなどに要する時間"
    ],
    "answer": 1,
    "explanation": "物流センター：商品の保管・仕分け・出荷などを集約する施設。他の選択肢は別の用語を説明しています。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "NEW-2-085",
    "grade": 2,
    "category": "生き方上手になろう",
    "kind": "choice",
    "prompt": "「ミールキット」の説明として、最も適切なものはどれか。",
    "options": [
      "過去の販売などから将来必要になる量を見積もること",
      "調理に必要な食材をレシピ等とセットにした商品",
      "商品の保管・仕分け・出荷などを集約する施設",
      "小型店舗で利便性の高い品ぞろえや長時間営業を特徴とする業態",
      "食品を最終消費者に販売する業態",
      "在庫管理で商品を識別する最小単位"
    ],
    "answer": 1,
    "explanation": "ミールキット：調理に必要な食材をレシピ等とセットにした商品。他の選択肢は別の用語を説明しています。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "NEW-2-086",
    "grade": 2,
    "category": "生き方上手になろう",
    "kind": "choice",
    "prompt": "「食品宅配」の説明として、最も適切なものはどれか。",
    "options": [
      "在庫管理で商品を識別する最小単位",
      "注文された食品を利用者へ届けるサービス",
      "過去の販売などから将来必要になる量を見積もること",
      "持ち帰り惣菜や弁当などを家庭等で食べること",
      "食品を最終消費者に販売する業態",
      "小売業者等が企画し独自ブランドで販売する商品"
    ],
    "answer": 1,
    "explanation": "食品宅配：注文された食品を利用者へ届けるサービス。他の選択肢は別の用語を説明しています。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "NEW-2-087",
    "grade": 2,
    "category": "生き方上手になろう",
    "kind": "choice",
    "prompt": "「リードタイム」の説明として、最も適切なものはどれか。",
    "options": [
      "発注から納品までなどに要する時間",
      "売場の棚に商品をどの位置・量で陳列するかを決めること",
      "飲食店などで提供される食事をその場で食べること",
      "食品を最終消費者に販売する業態",
      "注文された食品を利用者へ届けるサービス",
      "持ち帰り惣菜や弁当などを家庭等で食べること"
    ],
    "answer": 0,
    "explanation": "リードタイム：発注から納品までなどに要する時間。他の選択肢は別の用語を説明しています。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "NEW-2-088",
    "grade": 2,
    "category": "生き方上手になろう",
    "kind": "choice",
    "prompt": "「棚割り」の説明として、最も適切なものはどれか。",
    "options": [
      "持ち帰り惣菜や弁当などを家庭等で食べること",
      "売場の棚に商品をどの位置・量で陳列するかを決めること",
      "小型店舗で利便性の高い品ぞろえや長時間営業を特徴とする業態",
      "販売時点で記録される商品・数量・日時等の情報",
      "商品の保管・仕分け・出荷などを集約する施設",
      "調理に必要な食材をレシピ等とセットにした商品"
    ],
    "answer": 1,
    "explanation": "棚割り：売場の棚に商品をどの位置・量で陳列するかを決めること。他の選択肢は別の用語を説明しています。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "NEW-2-089",
    "grade": 2,
    "category": "やりくり上手になろう",
    "kind": "choice",
    "prompt": "「円高」の説明として、最も適切なものはどれか。",
    "options": [
      "一定の品目群の価格変動をまとめた指標",
      "所得から税金や社会保険料などを差し引いた手取り所得",
      "食べられる食品を捨てる量を減らす取組",
      "物品販売やサービス提供などを課税対象とする税",
      "子どもや地域住民等に食事・居場所を提供する活動",
      "外国通貨に対する円の価値が上昇すること"
    ],
    "answer": 5,
    "explanation": "円高：外国通貨に対する円の価値が上昇すること。他の選択肢は別の用語を説明しています。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "NEW-2-090",
    "grade": 2,
    "category": "やりくり上手になろう",
    "kind": "choice",
    "prompt": "「円安」の説明として、最も適切なものはどれか。",
    "options": [
      "食べられる食品を捨てる量を減らす取組",
      "買い物時の使い捨て袋使用を減らすための袋",
      "外国通貨に対する円の価値が低下すること",
      "所得から税金や社会保険料などを差し引いた手取り所得",
      "廃棄物などを原材料に戻して利用すること",
      "外国通貨に対する円の価値が上昇すること"
    ],
    "answer": 2,
    "explanation": "円安：外国通貨に対する円の価値が低下すること。他の選択肢は別の用語を説明しています。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "NEW-2-091",
    "grade": 2,
    "category": "やりくり上手になろう",
    "kind": "choice",
    "prompt": "「消費税」の説明として、最も適切なものはどれか。",
    "options": [
      "廃棄物などを原材料に戻して利用すること",
      "国内消費を国内生産でどの程度まかなうかを示す指標",
      "情報の真偽や信頼性を評価し適切に活用する能力",
      "物品販売やサービス提供などを課税対象とする税",
      "現金以外の電子的な手段で支払うこと",
      "買い物時の使い捨て袋使用を減らすための袋"
    ],
    "answer": 3,
    "explanation": "消費税：物品販売やサービス提供などを課税対象とする税。他の選択肢は別の用語を説明しています。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "NEW-2-092",
    "grade": 2,
    "category": "やりくり上手になろう",
    "kind": "choice",
    "prompt": "「家計管理」の説明として、最も適切なものはどれか。",
    "options": [
      "製品や容器をそのまま再使用すること",
      "所得から税金や社会保険料などを差し引いた手取り所得",
      "収入と支出を把握して生活資金を計画的に配分すること",
      "外国通貨に対する円の価値が上昇すること",
      "生産者の持続可能な生活に配慮した公正な取引の考え方",
      "資源使用やごみの発生をできるだけ減らすこと"
    ],
    "answer": 2,
    "explanation": "家計管理：収入と支出を把握して生活資金を計画的に配分すること。他の選択肢は別の用語を説明しています。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "NEW-2-093",
    "grade": 2,
    "category": "やりくり上手になろう",
    "kind": "choice",
    "prompt": "「可処分所得」の説明として、最も適切なものはどれか。",
    "options": [
      "生産者の持続可能な生活に配慮した公正な取引の考え方",
      "食べられる食品を捨てる量を減らす取組",
      "家計の消費支出に占める食料費の割合",
      "現金以外の電子的な手段で支払うこと",
      "所得から税金や社会保険料などを差し引いた手取り所得",
      "収入と支出を把握して生活資金を計画的に配分すること"
    ],
    "answer": 4,
    "explanation": "可処分所得：所得から税金や社会保険料などを差し引いた手取り所得。他の選択肢は別の用語を説明しています。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "NEW-2-094",
    "grade": 2,
    "category": "やりくり上手になろう",
    "kind": "choice",
    "prompt": "「物価指数」の説明として、最も適切なものはどれか。",
    "options": [
      "一定の品目群の価格変動をまとめた指標",
      "外国通貨に対する円の価値が上昇すること",
      "食べられる食品を捨てる量を減らす取組",
      "子どもや地域住民等に食事・居場所を提供する活動",
      "情報の真偽や信頼性を評価し適切に活用する能力",
      "製品や容器をそのまま再使用すること"
    ],
    "answer": 0,
    "explanation": "物価指数：一定の品目群の価格変動をまとめた指標。他の選択肢は別の用語を説明しています。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "NEW-2-095",
    "grade": 2,
    "category": "やりくり上手になろう",
    "kind": "choice",
    "prompt": "「エンゲル係数」の説明として、最も適切なものはどれか。",
    "options": [
      "外国通貨に対する円の価値が低下すること",
      "資源使用やごみの発生をできるだけ減らすこと",
      "余剰食品などを寄贈で集め必要とする人へ届ける活動",
      "現金以外の電子的な手段で支払うこと",
      "国内消費を国内生産でどの程度まかなうかを示す指標",
      "家計の消費支出に占める食料費の割合"
    ],
    "answer": 5,
    "explanation": "エンゲル係数：家計の消費支出に占める食料費の割合。他の選択肢は別の用語を説明しています。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "NEW-2-096",
    "grade": 2,
    "category": "やりくり上手になろう",
    "kind": "choice",
    "prompt": "「食料自給率」の説明として、最も適切なものはどれか。",
    "options": [
      "国内消費を国内生産でどの程度まかなうかを示す指標",
      "余剰食品などを寄贈で集め必要とする人へ届ける活動",
      "物品販売やサービス提供などを課税対象とする税",
      "一定の品目群の価格変動をまとめた指標",
      "廃棄物などを原材料に戻して利用すること",
      "所得から税金や社会保険料などを差し引いた手取り所得"
    ],
    "answer": 0,
    "explanation": "食料自給率：国内消費を国内生産でどの程度まかなうかを示す指標。他の選択肢は別の用語を説明しています。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "NEW-2-097",
    "grade": 2,
    "category": "やりくり上手になろう",
    "kind": "choice",
    "prompt": "「フードバンク」の説明として、最も適切なものはどれか。",
    "options": [
      "現金以外の電子的な手段で支払うこと",
      "製品や容器をそのまま再使用すること",
      "外国通貨に対する円の価値が低下すること",
      "余剰食品などを寄贈で集め必要とする人へ届ける活動",
      "収入と支出を把握して生活資金を計画的に配分すること",
      "物品販売やサービス提供などを課税対象とする税"
    ],
    "answer": 3,
    "explanation": "フードバンク：余剰食品などを寄贈で集め必要とする人へ届ける活動。他の選択肢は別の用語を説明しています。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "NEW-2-098",
    "grade": 2,
    "category": "やりくり上手になろう",
    "kind": "choice",
    "prompt": "「こども食堂」の説明として、最も適切なものはどれか。",
    "options": [
      "家計の消費支出に占める食料費の割合",
      "余剰食品などを寄贈で集め必要とする人へ届ける活動",
      "買い物時の使い捨て袋使用を減らすための袋",
      "食べられる食品を捨てる量を減らす取組",
      "子どもや地域住民等に食事・居場所を提供する活動",
      "収入と支出を把握して生活資金を計画的に配分すること"
    ],
    "answer": 4,
    "explanation": "こども食堂：子どもや地域住民等に食事・居場所を提供する活動。他の選択肢は別の用語を説明しています。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "NEW-2-099",
    "grade": 2,
    "category": "やりくり上手になろう",
    "kind": "choice",
    "prompt": "「食品ロス削減」の説明として、最も適切なものはどれか。",
    "options": [
      "買い物時の使い捨て袋使用を減らすための袋",
      "食べられる食品を捨てる量を減らす取組",
      "外国通貨に対する円の価値が低下すること",
      "家計の消費支出に占める食料費の割合",
      "余剰食品などを寄贈で集め必要とする人へ届ける活動",
      "所得から税金や社会保険料などを差し引いた手取り所得"
    ],
    "answer": 1,
    "explanation": "食品ロス削減：食べられる食品を捨てる量を減らす取組。他の選択肢は別の用語を説明しています。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "NEW-2-100",
    "grade": 2,
    "category": "やりくり上手になろう",
    "kind": "choice",
    "prompt": "「エコバッグ」の説明として、最も適切なものはどれか。",
    "options": [
      "情報の真偽や信頼性を評価し適切に活用する能力",
      "買い物時の使い捨て袋使用を減らすための袋",
      "一定の品目群の価格変動をまとめた指標",
      "現金以外の電子的な手段で支払うこと",
      "所得から税金や社会保険料などを差し引いた手取り所得",
      "食べられる食品を捨てる量を減らす取組"
    ],
    "answer": 1,
    "explanation": "エコバッグ：買い物時の使い捨て袋使用を減らすための袋。他の選択肢は別の用語を説明しています。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "NEW-2-101",
    "grade": 2,
    "category": "やりくり上手になろう",
    "kind": "choice",
    "prompt": "「リサイクル」の説明として、最も適切なものはどれか。",
    "options": [
      "食べられる食品を捨てる量を減らす取組",
      "生産者の持続可能な生活に配慮した公正な取引の考え方",
      "廃棄物などを原材料に戻して利用すること",
      "製品や容器をそのまま再使用すること",
      "余剰食品などを寄贈で集め必要とする人へ届ける活動",
      "収入と支出を把握して生活資金を計画的に配分すること"
    ],
    "answer": 2,
    "explanation": "リサイクル：廃棄物などを原材料に戻して利用すること。他の選択肢は別の用語を説明しています。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "NEW-2-102",
    "grade": 2,
    "category": "やりくり上手になろう",
    "kind": "choice",
    "prompt": "「リユース」の説明として、最も適切なものはどれか。",
    "options": [
      "外国通貨に対する円の価値が低下すること",
      "収入と支出を把握して生活資金を計画的に配分すること",
      "生産者の持続可能な生活に配慮した公正な取引の考え方",
      "情報の真偽や信頼性を評価し適切に活用する能力",
      "資源使用やごみの発生をできるだけ減らすこと",
      "製品や容器をそのまま再使用すること"
    ],
    "answer": 5,
    "explanation": "リユース：製品や容器をそのまま再使用すること。他の選択肢は別の用語を説明しています。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "NEW-2-103",
    "grade": 2,
    "category": "やりくり上手になろう",
    "kind": "choice",
    "prompt": "「リデュース」の説明として、最も適切なものはどれか。",
    "options": [
      "製品や容器をそのまま再使用すること",
      "国内消費を国内生産でどの程度まかなうかを示す指標",
      "収入と支出を把握して生活資金を計画的に配分すること",
      "一定の品目群の価格変動をまとめた指標",
      "資源使用やごみの発生をできるだけ減らすこと",
      "現金以外の電子的な手段で支払うこと"
    ],
    "answer": 4,
    "explanation": "リデュース：資源使用やごみの発生をできるだけ減らすこと。他の選択肢は別の用語を説明しています。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "NEW-2-104",
    "grade": 2,
    "category": "やりくり上手になろう",
    "kind": "choice",
    "prompt": "「フェアトレード」の説明として、最も適切なものはどれか。",
    "options": [
      "生産者の持続可能な生活に配慮した公正な取引の考え方",
      "買い物時の使い捨て袋使用を減らすための袋",
      "外国通貨に対する円の価値が上昇すること",
      "食べられる食品を捨てる量を減らす取組",
      "子どもや地域住民等に食事・居場所を提供する活動",
      "物品販売やサービス提供などを課税対象とする税"
    ],
    "answer": 0,
    "explanation": "フェアトレード：生産者の持続可能な生活に配慮した公正な取引の考え方。他の選択肢は別の用語を説明しています。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "NEW-2-105",
    "grade": 2,
    "category": "やりくり上手になろう",
    "kind": "choice",
    "prompt": "「キャッシュレス決済」の説明として、最も適切なものはどれか。",
    "options": [
      "家計の消費支出に占める食料費の割合",
      "外国通貨に対する円の価値が低下すること",
      "製品や容器をそのまま再使用すること",
      "現金以外の電子的な手段で支払うこと",
      "国内消費を国内生産でどの程度まかなうかを示す指標",
      "物品販売やサービス提供などを課税対象とする税"
    ],
    "answer": 3,
    "explanation": "キャッシュレス決済：現金以外の電子的な手段で支払うこと。他の選択肢は別の用語を説明しています。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "NEW-1-001",
    "grade": 1,
    "category": "栄養と健康",
    "kind": "choice",
    "prompt": "「栄養アセスメント」の説明として、最も適切なものはどれか。",
    "options": [
      "ある時点などで病気を有する人の割合",
      "体脂肪・筋肉など体を構成する成分の割合",
      "食事・身体計測等から栄養状態や課題を評価すること",
      "疾病の発症そのものを防ぐ取組",
      "食品摂取後の血糖値上昇度合いを比較する指標",
      "過剰摂取による健康障害リスクが生じないとみなされる習慣的摂取量の上限"
    ],
    "answer": 2,
    "explanation": "栄養アセスメント：食事・身体計測等から栄養状態や課題を評価すること。他の選択肢は別の用語を説明しています。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "NEW-1-002",
    "grade": 1,
    "category": "栄養と健康",
    "kind": "choice",
    "prompt": "「食事摂取基準」の説明として、最も適切なものはどれか。",
    "options": [
      "筋肉量や筋力・身体機能の低下を特徴とする状態",
      "疾病の発症そのものを防ぐ取組",
      "食事・身体計測等から栄養状態や課題を評価すること",
      "推定平均必要量を算出できない場合などに用いる摂取量の目安",
      "健康維持・増進などを目的として栄養素の摂取量の基準を示すもの",
      "食べ物や飲み物を口から胃へ安全に送り込む働き"
    ],
    "answer": 4,
    "explanation": "食事摂取基準：健康維持・増進などを目的として栄養素の摂取量の基準を示すもの。他の選択肢は別の用語を説明しています。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "NEW-1-003",
    "grade": 1,
    "category": "栄養と健康",
    "kind": "choice",
    "prompt": "「推奨量」の説明として、最も適切なものはどれか。",
    "options": [
      "ほとんどの人の必要量を満たすと推定される一日当たりの摂取量",
      "筋肉量や筋力・身体機能の低下を特徴とする状態",
      "食べ物や飲み物を口から胃へ安全に送り込む働き",
      "健康維持・増進などを目的として栄養素の摂取量の基準を示すもの",
      "食事・身体計測等から栄養状態や課題を評価すること",
      "ある時点などで病気を有する人の割合"
    ],
    "answer": 0,
    "explanation": "推奨量：ほとんどの人の必要量を満たすと推定される一日当たりの摂取量。他の選択肢は別の用語を説明しています。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "NEW-1-004",
    "grade": 1,
    "category": "栄養と健康",
    "kind": "choice",
    "prompt": "「目安量」の説明として、最も適切なものはどれか。",
    "options": [
      "ほとんどの人の必要量を満たすと推定される一日当たりの摂取量",
      "食品摂取後の血糖値上昇度合いを比較する指標",
      "疾病の発症そのものを防ぐ取組",
      "食べた食品と量を記録して食事摂取状況を調べる方法",
      "推定平均必要量を算出できない場合などに用いる摂取量の目安",
      "食べ物や飲み物を口から胃へ安全に送り込む働き"
    ],
    "answer": 4,
    "explanation": "目安量：推定平均必要量を算出できない場合などに用いる摂取量の目安。他の選択肢は別の用語を説明しています。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "NEW-1-005",
    "grade": 1,
    "category": "栄養と健康",
    "kind": "choice",
    "prompt": "「耐容上限量」の説明として、最も適切なものはどれか。",
    "options": [
      "ある時点などで病気を有する人の割合",
      "食品摂取後の血糖値上昇度合いを比較する指標",
      "食べ物や飲み物を口から胃へ安全に送り込む働き",
      "過剰摂取による健康障害リスクが生じないとみなされる習慣的摂取量の上限",
      "健康維持・増進などを目的として栄養素の摂取量の基準を示すもの",
      "体脂肪・筋肉など体を構成する成分の割合"
    ],
    "answer": 3,
    "explanation": "耐容上限量：過剰摂取による健康障害リスクが生じないとみなされる習慣的摂取量の上限。他の選択肢は別の用語を説明しています。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "NEW-1-006",
    "grade": 1,
    "category": "栄養と健康",
    "kind": "choice",
    "prompt": "「グリセミックインデックス」の説明として、最も適切なものはどれか。",
    "options": [
      "筋肉量や筋力・身体機能の低下を特徴とする状態",
      "健康維持・増進などを目的として栄養素の摂取量の基準を示すもの",
      "食品摂取後の血糖値上昇度合いを比較する指標",
      "疾病の発症そのものを防ぐ取組",
      "過剰摂取による健康障害リスクが生じないとみなされる習慣的摂取量の上限",
      "体脂肪・筋肉など体を構成する成分の割合"
    ],
    "answer": 2,
    "explanation": "グリセミックインデックス：食品摂取後の血糖値上昇度合いを比較する指標。他の選択肢は別の用語を説明しています。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "NEW-1-007",
    "grade": 1,
    "category": "栄養と健康",
    "kind": "choice",
    "prompt": "「サルコペニア」の説明として、最も適切なものはどれか。",
    "options": [
      "体脂肪・筋肉など体を構成する成分の割合",
      "筋肉量や筋力・身体機能の低下を特徴とする状態",
      "食べ物や飲み物を口から胃へ安全に送り込む働き",
      "食品摂取後の血糖値上昇度合いを比較する指標",
      "食事・身体計測等から栄養状態や課題を評価すること",
      "疾病の発症そのものを防ぐ取組"
    ],
    "answer": 1,
    "explanation": "サルコペニア：筋肉量や筋力・身体機能の低下を特徴とする状態。他の選択肢は別の用語を説明しています。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "NEW-1-008",
    "grade": 1,
    "category": "栄養と健康",
    "kind": "choice",
    "prompt": "「嚥下機能」の説明として、最も適切なものはどれか。",
    "options": [
      "過剰摂取による健康障害リスクが生じないとみなされる習慣的摂取量の上限",
      "食品摂取後の血糖値上昇度合いを比較する指標",
      "ある時点などで病気を有する人の割合",
      "ほとんどの人の必要量を満たすと推定される一日当たりの摂取量",
      "食べ物や飲み物を口から胃へ安全に送り込む働き",
      "推定平均必要量を算出できない場合などに用いる摂取量の目安"
    ],
    "answer": 4,
    "explanation": "嚥下機能：食べ物や飲み物を口から胃へ安全に送り込む働き。他の選択肢は別の用語を説明しています。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "NEW-1-009",
    "grade": 1,
    "category": "栄養と健康",
    "kind": "choice",
    "prompt": "「食事記録法」の説明として、最も適切なものはどれか。",
    "options": [
      "食べた食品と量を記録して食事摂取状況を調べる方法",
      "食事・身体計測等から栄養状態や課題を評価すること",
      "ほとんどの人の必要量を満たすと推定される一日当たりの摂取量",
      "ある時点などで病気を有する人の割合",
      "健康維持・増進などを目的として栄養素の摂取量の基準を示すもの",
      "筋肉量や筋力・身体機能の低下を特徴とする状態"
    ],
    "answer": 0,
    "explanation": "食事記録法：食べた食品と量を記録して食事摂取状況を調べる方法。他の選択肢は別の用語を説明しています。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "NEW-1-010",
    "grade": 1,
    "category": "栄養と健康",
    "kind": "choice",
    "prompt": "「身体組成」の説明として、最も適切なものはどれか。",
    "options": [
      "食事・身体計測等から栄養状態や課題を評価すること",
      "体脂肪・筋肉など体を構成する成分の割合",
      "食品摂取後の血糖値上昇度合いを比較する指標",
      "筋肉量や筋力・身体機能の低下を特徴とする状態",
      "過剰摂取による健康障害リスクが生じないとみなされる習慣的摂取量の上限",
      "ある時点などで病気を有する人の割合"
    ],
    "answer": 1,
    "explanation": "身体組成：体脂肪・筋肉など体を構成する成分の割合。他の選択肢は別の用語を説明しています。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "NEW-1-011",
    "grade": 1,
    "category": "栄養と健康",
    "kind": "choice",
    "prompt": "「有病率」の説明として、最も適切なものはどれか。",
    "options": [
      "食事・身体計測等から栄養状態や課題を評価すること",
      "ある時点などで病気を有する人の割合",
      "疾病の発症そのものを防ぐ取組",
      "食べ物や飲み物を口から胃へ安全に送り込む働き",
      "過剰摂取による健康障害リスクが生じないとみなされる習慣的摂取量の上限",
      "食品摂取後の血糖値上昇度合いを比較する指標"
    ],
    "answer": 1,
    "explanation": "有病率：ある時点などで病気を有する人の割合。他の選択肢は別の用語を説明しています。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "NEW-1-012",
    "grade": 1,
    "category": "栄養と健康",
    "kind": "choice",
    "prompt": "「一次予防」の説明として、最も適切なものはどれか。",
    "options": [
      "食事・身体計測等から栄養状態や課題を評価すること",
      "ある時点などで病気を有する人の割合",
      "筋肉量や筋力・身体機能の低下を特徴とする状態",
      "ほとんどの人の必要量を満たすと推定される一日当たりの摂取量",
      "疾病の発症そのものを防ぐ取組",
      "推定平均必要量を算出できない場合などに用いる摂取量の目安"
    ],
    "answer": 4,
    "explanation": "一次予防：疾病の発症そのものを防ぐ取組。他の選択肢は別の用語を説明しています。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "NEW-1-013",
    "grade": 1,
    "category": "食文化と食習慣",
    "kind": "choice",
    "prompt": "「食文化の継承」の説明として、最も適切なものはどれか。",
    "options": [
      "動物性食品の摂取方針に応じた献立を考えること",
      "地域や家庭の食に関する知恵や技術を次世代に受け継ぐこと",
      "地域性を生かした商品やサービスに付けられるブランド",
      "多様な人が利用しやすい環境や製品を設計する考え方",
      "食事を入手・調理・摂取できる機会の得やすさ",
      "祝い事など特別な日に用意する料理や食習慣"
    ],
    "answer": 1,
    "explanation": "食文化の継承：地域や家庭の食に関する知恵や技術を次世代に受け継ぐこと。他の選択肢は別の用語を説明しています。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "NEW-1-014",
    "grade": 1,
    "category": "食文化と食習慣",
    "kind": "choice",
    "prompt": "「年中行事」の説明として、最も適切なものはどれか。",
    "options": [
      "多様な人が利用しやすい環境や製品を設計する考え方",
      "味・香り・場面・思い出などを含む食に関する経験",
      "動物性食品の摂取方針に応じた献立を考えること",
      "季節ごとに特定の食品がおいしく流通する時期",
      "季節に応じて毎年繰り返される社会・文化的行事",
      "祝い事など特別な日に用意する料理や食習慣"
    ],
    "answer": 4,
    "explanation": "年中行事：季節に応じて毎年繰り返される社会・文化的行事。他の選択肢は別の用語を説明しています。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "NEW-1-015",
    "grade": 1,
    "category": "食文化と食習慣",
    "kind": "choice",
    "prompt": "「ハレの食」の説明として、最も適切なものはどれか。",
    "options": [
      "食事を入手・調理・摂取できる機会の得やすさ",
      "祝い事など特別な日に用意する料理や食習慣",
      "味・香り・場面・思い出などを含む食に関する経験",
      "宗教・健康・文化などによって食習慣が異なること",
      "地域や家庭の食に関する知恵や技術を次世代に受け継ぐこと",
      "特別な行事のない日常の食事"
    ],
    "answer": 1,
    "explanation": "ハレの食：祝い事など特別な日に用意する料理や食習慣。他の選択肢は別の用語を説明しています。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "NEW-1-016",
    "grade": 1,
    "category": "食文化と食習慣",
    "kind": "choice",
    "prompt": "「ケの日の食」の説明として、最も適切なものはどれか。",
    "options": [
      "宗教・健康・文化などによって食習慣が異なること",
      "味・香り・場面・思い出などを含む食に関する経験",
      "季節に応じて毎年繰り返される社会・文化的行事",
      "特別な行事のない日常の食事",
      "地域に根差し受け継がれてきた食べ方や料理",
      "季節ごとに特定の食品がおいしく流通する時期"
    ],
    "answer": 3,
    "explanation": "ケの日の食：特別な行事のない日常の食事。他の選択肢は別の用語を説明しています。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "NEW-1-017",
    "grade": 1,
    "category": "食文化と食習慣",
    "kind": "choice",
    "prompt": "「食材の旬」の説明として、最も適切なものはどれか。",
    "options": [
      "季節に応じて毎年繰り返される社会・文化的行事",
      "味・香り・場面・思い出などを含む食に関する経験",
      "食事を入手・調理・摂取できる機会の得やすさ",
      "宗教・健康・文化などによって食習慣が異なること",
      "季節ごとに特定の食品がおいしく流通する時期",
      "地域に根差し受け継がれてきた食べ方や料理"
    ],
    "answer": 4,
    "explanation": "食材の旬：季節ごとに特定の食品がおいしく流通する時期。他の選択肢は別の用語を説明しています。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "NEW-1-018",
    "grade": 1,
    "category": "食文化と食習慣",
    "kind": "choice",
    "prompt": "「地域ブランド」の説明として、最も適切なものはどれか。",
    "options": [
      "食事を入手・調理・摂取できる機会の得やすさ",
      "地域性を生かした商品やサービスに付けられるブランド",
      "祝い事など特別な日に用意する料理や食習慣",
      "動物性食品の摂取方針に応じた献立を考えること",
      "味・香り・場面・思い出などを含む食に関する経験",
      "地域に根差し受け継がれてきた食べ方や料理"
    ],
    "answer": 1,
    "explanation": "地域ブランド：地域性を生かした商品やサービスに付けられるブランド。他の選択肢は別の用語を説明しています。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "NEW-1-019",
    "grade": 1,
    "category": "食文化と食習慣",
    "kind": "choice",
    "prompt": "「郷土食」の説明として、最も適切なものはどれか。",
    "options": [
      "季節に応じて毎年繰り返される社会・文化的行事",
      "祝い事など特別な日に用意する料理や食習慣",
      "宗教・健康・文化などによって食習慣が異なること",
      "地域に根差し受け継がれてきた食べ方や料理",
      "味・香り・場面・思い出などを含む食に関する経験",
      "季節ごとに特定の食品がおいしく流通する時期"
    ],
    "answer": 3,
    "explanation": "郷土食：地域に根差し受け継がれてきた食べ方や料理。他の選択肢は別の用語を説明しています。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "NEW-1-020",
    "grade": 1,
    "category": "食文化と食習慣",
    "kind": "choice",
    "prompt": "「食の多様性」の説明として、最も適切なものはどれか。",
    "options": [
      "食事を入手・調理・摂取できる機会の得やすさ",
      "祝い事など特別な日に用意する料理や食習慣",
      "味・香り・場面・思い出などを含む食に関する経験",
      "地域や家庭の食に関する知恵や技術を次世代に受け継ぐこと",
      "宗教・健康・文化などによって食習慣が異なること",
      "地域性を生かした商品やサービスに付けられるブランド"
    ],
    "answer": 4,
    "explanation": "食の多様性：宗教・健康・文化などによって食習慣が異なること。他の選択肢は別の用語を説明しています。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "NEW-1-021",
    "grade": 1,
    "category": "食文化と食習慣",
    "kind": "choice",
    "prompt": "「ベジタリアン対応」の説明として、最も適切なものはどれか。",
    "options": [
      "味・香り・場面・思い出などを含む食に関する経験",
      "宗教・健康・文化などによって食習慣が異なること",
      "動物性食品の摂取方針に応じた献立を考えること",
      "食事を入手・調理・摂取できる機会の得やすさ",
      "季節に応じて毎年繰り返される社会・文化的行事",
      "祝い事など特別な日に用意する料理や食習慣"
    ],
    "answer": 2,
    "explanation": "ベジタリアン対応：動物性食品の摂取方針に応じた献立を考えること。他の選択肢は別の用語を説明しています。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "NEW-1-022",
    "grade": 1,
    "category": "食文化と食習慣",
    "kind": "choice",
    "prompt": "「ユニバーサルデザイン」の説明として、最も適切なものはどれか。",
    "options": [
      "動物性食品の摂取方針に応じた献立を考えること",
      "祝い事など特別な日に用意する料理や食習慣",
      "地域性を生かした商品やサービスに付けられるブランド",
      "味・香り・場面・思い出などを含む食に関する経験",
      "多様な人が利用しやすい環境や製品を設計する考え方",
      "食事を入手・調理・摂取できる機会の得やすさ"
    ],
    "answer": 4,
    "explanation": "ユニバーサルデザイン：多様な人が利用しやすい環境や製品を設計する考え方。他の選択肢は別の用語を説明しています。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "NEW-1-023",
    "grade": 1,
    "category": "食文化と食習慣",
    "kind": "choice",
    "prompt": "「食事のアクセシビリティ」の説明として、最も適切なものはどれか。",
    "options": [
      "季節に応じて毎年繰り返される社会・文化的行事",
      "食事を入手・調理・摂取できる機会の得やすさ",
      "動物性食品の摂取方針に応じた献立を考えること",
      "特別な行事のない日常の食事",
      "宗教・健康・文化などによって食習慣が異なること",
      "味・香り・場面・思い出などを含む食に関する経験"
    ],
    "answer": 1,
    "explanation": "食事のアクセシビリティ：食事を入手・調理・摂取できる機会の得やすさ。他の選択肢は別の用語を説明しています。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "NEW-1-024",
    "grade": 1,
    "category": "食文化と食習慣",
    "kind": "choice",
    "prompt": "「食体験」の説明として、最も適切なものはどれか。",
    "options": [
      "食事を入手・調理・摂取できる機会の得やすさ",
      "季節ごとに特定の食品がおいしく流通する時期",
      "味・香り・場面・思い出などを含む食に関する経験",
      "祝い事など特別な日に用意する料理や食習慣",
      "多様な人が利用しやすい環境や製品を設計する考え方",
      "宗教・健康・文化などによって食習慣が異なること"
    ],
    "answer": 2,
    "explanation": "食体験：味・香り・場面・思い出などを含む食に関する経験。他の選択肢は別の用語を説明しています。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "NEW-1-025",
    "grade": 1,
    "category": "食品学",
    "kind": "choice",
    "prompt": "「食品の水分活性」の説明として、最も適切なものはどれか。",
    "options": [
      "でんぷん粒が水と加熱によって膨潤する現象",
      "微生物利用や化学反応に関わる自由水の程度を表す指標",
      "濃度差のある溶液間で水が移動しようとすることに関わる圧力",
      "食品の品質を人の感覚で評価する検査",
      "糖とアミノ化合物の反応によって褐色成分や香りが生じる現象",
      "液体が網目構造などを形成して半固体状になること"
    ],
    "answer": 1,
    "explanation": "食品の水分活性：微生物利用や化学反応に関わる自由水の程度を表す指標。他の選択肢は別の用語を説明しています。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "NEW-1-026",
    "grade": 1,
    "category": "食品学",
    "kind": "choice",
    "prompt": "「酵素的褐変」の説明として、最も適切なものはどれか。",
    "options": [
      "酵素の働きによって食品の色が褐色に変わる現象",
      "糊化したでんぷんが冷却・保存で再配列し硬くなる現象",
      "でんぷん粒が水と加熱によって膨潤する現象",
      "食品品質や成分などに関する取り決め",
      "互いに混ざりにくい液体の一方が細かく分散した状態",
      "油脂が酸素などで変化し風味や品質が劣化すること"
    ],
    "answer": 0,
    "explanation": "酵素的褐変：酵素の働きによって食品の色が褐色に変わる現象。他の選択肢は別の用語を説明しています。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "NEW-1-027",
    "grade": 1,
    "category": "食品学",
    "kind": "choice",
    "prompt": "「メイラード反応」の説明として、最も適切なものはどれか。",
    "options": [
      "糖とアミノ化合物の反応によって褐色成分や香りが生じる現象",
      "酵素の働きによって食品の色が褐色に変わる現象",
      "熱や酸などでたんぱく質の立体構造が変わること",
      "液体が網目構造などを形成して半固体状になること",
      "互いに混ざりにくい液体の一方が細かく分散した状態",
      "糊化したでんぷんが冷却・保存で再配列し硬くなる現象"
    ],
    "answer": 0,
    "explanation": "メイラード反応：糖とアミノ化合物の反応によって褐色成分や香りが生じる現象。他の選択肢は別の用語を説明しています。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "NEW-1-028",
    "grade": 1,
    "category": "食品学",
    "kind": "choice",
    "prompt": "「脂質酸化」の説明として、最も適切なものはどれか。",
    "options": [
      "液体が網目構造などを形成して半固体状になること",
      "食品品質や成分などに関する取り決め",
      "油脂が酸素などで変化し風味や品質が劣化すること",
      "食品の品質を人の感覚で評価する検査",
      "互いに混ざりにくい液体の一方が細かく分散した状態",
      "でんぷん粒が水と加熱によって膨潤する現象"
    ],
    "answer": 2,
    "explanation": "脂質酸化：油脂が酸素などで変化し風味や品質が劣化すること。他の選択肢は別の用語を説明しています。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "NEW-1-029",
    "grade": 1,
    "category": "食品学",
    "kind": "choice",
    "prompt": "「エマルション」の説明として、最も適切なものはどれか。",
    "options": [
      "互いに混ざりにくい液体の一方が細かく分散した状態",
      "食品品質や成分などに関する取り決め",
      "微生物利用や化学反応に関わる自由水の程度を表す指標",
      "糖とアミノ化合物の反応によって褐色成分や香りが生じる現象",
      "でんぷん粒が水と加熱によって膨潤する現象",
      "酵素の働きによって食品の色が褐色に変わる現象"
    ],
    "answer": 0,
    "explanation": "エマルション：互いに混ざりにくい液体の一方が細かく分散した状態。他の選択肢は別の用語を説明しています。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "NEW-1-030",
    "grade": 1,
    "category": "食品学",
    "kind": "choice",
    "prompt": "「ゲル化」の説明として、最も適切なものはどれか。",
    "options": [
      "濃度差のある溶液間で水が移動しようとすることに関わる圧力",
      "油脂が酸素などで変化し風味や品質が劣化すること",
      "食品の品質を人の感覚で評価する検査",
      "液体が網目構造などを形成して半固体状になること",
      "糊化したでんぷんが冷却・保存で再配列し硬くなる現象",
      "熱や酸などでたんぱく質の立体構造が変わること"
    ],
    "answer": 3,
    "explanation": "ゲル化：液体が網目構造などを形成して半固体状になること。他の選択肢は別の用語を説明しています。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "NEW-1-031",
    "grade": 1,
    "category": "食品学",
    "kind": "choice",
    "prompt": "「でんぷんの糊化」の説明として、最も適切なものはどれか。",
    "options": [
      "濃度差のある溶液間で水が移動しようとすることに関わる圧力",
      "でんぷん粒が水と加熱によって膨潤する現象",
      "液体が網目構造などを形成して半固体状になること",
      "熱や酸などでたんぱく質の立体構造が変わること",
      "微生物利用や化学反応に関わる自由水の程度を表す指標",
      "油脂が酸素などで変化し風味や品質が劣化すること"
    ],
    "answer": 1,
    "explanation": "でんぷんの糊化：でんぷん粒が水と加熱によって膨潤する現象。他の選択肢は別の用語を説明しています。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "NEW-1-032",
    "grade": 1,
    "category": "食品学",
    "kind": "choice",
    "prompt": "「でんぷんの老化」の説明として、最も適切なものはどれか。",
    "options": [
      "でんぷん粒が水と加熱によって膨潤する現象",
      "糊化したでんぷんが冷却・保存で再配列し硬くなる現象",
      "微生物利用や化学反応に関わる自由水の程度を表す指標",
      "互いに混ざりにくい液体の一方が細かく分散した状態",
      "熱や酸などでたんぱく質の立体構造が変わること",
      "酵素の働きによって食品の色が褐色に変わる現象"
    ],
    "answer": 1,
    "explanation": "でんぷんの老化：糊化したでんぷんが冷却・保存で再配列し硬くなる現象。他の選択肢は別の用語を説明しています。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "NEW-1-033",
    "grade": 1,
    "category": "食品学",
    "kind": "choice",
    "prompt": "「たんぱく質の変性」の説明として、最も適切なものはどれか。",
    "options": [
      "熱や酸などでたんぱく質の立体構造が変わること",
      "互いに混ざりにくい液体の一方が細かく分散した状態",
      "濃度差のある溶液間で水が移動しようとすることに関わる圧力",
      "酵素の働きによって食品の色が褐色に変わる現象",
      "油脂が酸素などで変化し風味や品質が劣化すること",
      "糖とアミノ化合物の反応によって褐色成分や香りが生じる現象"
    ],
    "answer": 0,
    "explanation": "たんぱく質の変性：熱や酸などでたんぱく質の立体構造が変わること。他の選択肢は別の用語を説明しています。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "NEW-1-034",
    "grade": 1,
    "category": "食品学",
    "kind": "choice",
    "prompt": "「浸透圧」の説明として、最も適切なものはどれか。",
    "options": [
      "濃度差のある溶液間で水が移動しようとすることに関わる圧力",
      "でんぷん粒が水と加熱によって膨潤する現象",
      "酵素の働きによって食品の色が褐色に変わる現象",
      "互いに混ざりにくい液体の一方が細かく分散した状態",
      "油脂が酸素などで変化し風味や品質が劣化すること",
      "熱や酸などでたんぱく質の立体構造が変わること"
    ],
    "answer": 0,
    "explanation": "浸透圧：濃度差のある溶液間で水が移動しようとすることに関わる圧力。他の選択肢は別の用語を説明しています。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "NEW-1-035",
    "grade": 1,
    "category": "食品学",
    "kind": "choice",
    "prompt": "「食品の規格」の説明として、最も適切なものはどれか。",
    "options": [
      "食品品質や成分などに関する取り決め",
      "液体が網目構造などを形成して半固体状になること",
      "でんぷん粒が水と加熱によって膨潤する現象",
      "濃度差のある溶液間で水が移動しようとすることに関わる圧力",
      "微生物利用や化学反応に関わる自由水の程度を表す指標",
      "酵素の働きによって食品の色が褐色に変わる現象"
    ],
    "answer": 0,
    "explanation": "食品の規格：食品品質や成分などに関する取り決め。他の選択肢は別の用語を説明しています。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "NEW-1-036",
    "grade": 1,
    "category": "食品学",
    "kind": "choice",
    "prompt": "「官能検査」の説明として、最も適切なものはどれか。",
    "options": [
      "食品の品質を人の感覚で評価する検査",
      "微生物利用や化学反応に関わる自由水の程度を表す指標",
      "液体が網目構造などを形成して半固体状になること",
      "でんぷん粒が水と加熱によって膨潤する現象",
      "濃度差のある溶液間で水が移動しようとすることに関わる圧力",
      "酵素の働きによって食品の色が褐色に変わる現象"
    ],
    "answer": 0,
    "explanation": "官能検査：食品の品質を人の感覚で評価する検査。他の選択肢は別の用語を説明しています。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "NEW-1-037",
    "grade": 1,
    "category": "衛生管理",
    "kind": "choice",
    "prompt": "「危害要因」の説明として、最も適切なものはどれか。",
    "options": [
      "食品の性質に応じて適切な温度を保つこと",
      "対象の微生物を減らす処理",
      "健康被害の原因となり得る生物的・化学的・物理的要因",
      "食品安全を組織として継続的に管理・改善する仕組み",
      "体調や感染症状などを確認して食品汚染を防ぐ対応",
      "汚れを除去する処理"
    ],
    "answer": 2,
    "explanation": "危害要因：健康被害の原因となり得る生物的・化学的・物理的要因。他の選択肢は別の用語を説明しています。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "NEW-1-038",
    "grade": 1,
    "category": "衛生管理",
    "kind": "choice",
    "prompt": "「食品安全マネジメント」の説明として、最も適切なものはどれか。",
    "options": [
      "食品の性質に応じて適切な温度を保つこと",
      "対象物から微生物をできる限り完全に除去・不活化する処理",
      "重要管理点を適切に管理できているか判断するための基準",
      "対象の微生物を減らす処理",
      "体調や感染症状などを確認して食品汚染を防ぐ対応",
      "食品安全を組織として継続的に管理・改善する仕組み"
    ],
    "answer": 5,
    "explanation": "食品安全マネジメント：食品安全を組織として継続的に管理・改善する仕組み。他の選択肢は別の用語を説明しています。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "NEW-1-039",
    "grade": 1,
    "category": "衛生管理",
    "kind": "choice",
    "prompt": "「管理基準」の説明として、最も適切なものはどれか。",
    "options": [
      "金属やガラスなどの混入を防ぐ管理",
      "体調や感染症状などを確認して食品汚染を防ぐ対応",
      "重要管理点を適切に管理できているか判断するための基準",
      "対象の微生物を減らす処理",
      "管理手順の有効性や実施状況を確かめること",
      "健康被害の原因となり得る生物的・化学的・物理的要因"
    ],
    "answer": 2,
    "explanation": "管理基準：重要管理点を適切に管理できているか判断するための基準。他の選択肢は別の用語を説明しています。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "NEW-1-040",
    "grade": 1,
    "category": "衛生管理",
    "kind": "choice",
    "prompt": "「是正処置記録」の説明として、最も適切なものはどれか。",
    "options": [
      "基準から逸脱した際の対応内容を残す記録",
      "食品安全を組織として継続的に管理・改善する仕組み",
      "対象の微生物を減らす処理",
      "健康被害の原因となり得る生物的・化学的・物理的要因",
      "体調や感染症状などを確認して食品汚染を防ぐ対応",
      "金属やガラスなどの混入を防ぐ管理"
    ],
    "answer": 0,
    "explanation": "是正処置記録：基準から逸脱した際の対応内容を残す記録。他の選択肢は別の用語を説明しています。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "NEW-1-041",
    "grade": 1,
    "category": "衛生管理",
    "kind": "choice",
    "prompt": "「検証活動」の説明として、最も適切なものはどれか。",
    "options": [
      "対象物から微生物をできる限り完全に除去・不活化する処理",
      "管理手順の有効性や実施状況を確かめること",
      "健康被害の原因となり得る生物的・化学的・物理的要因",
      "基準から逸脱した際の対応内容を残す記録",
      "体調や感染症状などを確認して食品汚染を防ぐ対応",
      "食品安全を組織として継続的に管理・改善する仕組み"
    ],
    "answer": 1,
    "explanation": "検証活動：管理手順の有効性や実施状況を確かめること。他の選択肢は別の用語を説明しています。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "NEW-1-042",
    "grade": 1,
    "category": "衛生管理",
    "kind": "choice",
    "prompt": "「従業員の健康管理」の説明として、最も適切なものはどれか。",
    "options": [
      "健康被害の原因となり得る生物的・化学的・物理的要因",
      "体調や感染症状などを確認して食品汚染を防ぐ対応",
      "対象物から微生物をできる限り完全に除去・不活化する処理",
      "金属やガラスなどの混入を防ぐ管理",
      "重要管理点を適切に管理できているか判断するための基準",
      "基準から逸脱した際の対応内容を残す記録"
    ],
    "answer": 1,
    "explanation": "従業員の健康管理：体調や感染症状などを確認して食品汚染を防ぐ対応。他の選択肢は別の用語を説明しています。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "NEW-1-043",
    "grade": 1,
    "category": "衛生管理",
    "kind": "choice",
    "prompt": "「洗浄」の説明として、最も適切なものはどれか。",
    "options": [
      "健康被害の原因となり得る生物的・化学的・物理的要因",
      "管理手順の有効性や実施状況を確かめること",
      "汚れを除去する処理",
      "対象物から微生物をできる限り完全に除去・不活化する処理",
      "対象の微生物を減らす処理",
      "食品安全を組織として継続的に管理・改善する仕組み"
    ],
    "answer": 2,
    "explanation": "洗浄：汚れを除去する処理。他の選択肢は別の用語を説明しています。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "NEW-1-044",
    "grade": 1,
    "category": "衛生管理",
    "kind": "choice",
    "prompt": "「殺菌」の説明として、最も適切なものはどれか。",
    "options": [
      "金属やガラスなどの混入を防ぐ管理",
      "対象の微生物を減らす処理",
      "食品の性質に応じて適切な温度を保つこと",
      "安全性問題が起きた際の連絡・追跡・回収方法を定める計画",
      "食品安全を組織として継続的に管理・改善する仕組み",
      "基準から逸脱した際の対応内容を残す記録"
    ],
    "answer": 1,
    "explanation": "殺菌：対象の微生物を減らす処理。他の選択肢は別の用語を説明しています。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "NEW-1-045",
    "grade": 1,
    "category": "衛生管理",
    "kind": "choice",
    "prompt": "「滅菌」の説明として、最も適切なものはどれか。",
    "options": [
      "安全性問題が起きた際の連絡・追跡・回収方法を定める計画",
      "対象物から微生物をできる限り完全に除去・不活化する処理",
      "健康被害の原因となり得る生物的・化学的・物理的要因",
      "体調や感染症状などを確認して食品汚染を防ぐ対応",
      "汚れを除去する処理",
      "食品の性質に応じて適切な温度を保つこと"
    ],
    "answer": 1,
    "explanation": "滅菌：対象物から微生物をできる限り完全に除去・不活化する処理。他の選択肢は別の用語を説明しています。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "NEW-1-046",
    "grade": 1,
    "category": "衛生管理",
    "kind": "choice",
    "prompt": "「食品回収計画」の説明として、最も適切なものはどれか。",
    "options": [
      "重要管理点を適切に管理できているか判断するための基準",
      "汚れを除去する処理",
      "管理手順の有効性や実施状況を確かめること",
      "安全性問題が起きた際の連絡・追跡・回収方法を定める計画",
      "体調や感染症状などを確認して食品汚染を防ぐ対応",
      "基準から逸脱した際の対応内容を残す記録"
    ],
    "answer": 3,
    "explanation": "食品回収計画：安全性問題が起きた際の連絡・追跡・回収方法を定める計画。他の選択肢は別の用語を説明しています。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "NEW-1-047",
    "grade": 1,
    "category": "衛生管理",
    "kind": "choice",
    "prompt": "「保存温度管理」の説明として、最も適切なものはどれか。",
    "options": [
      "安全性問題が起きた際の連絡・追跡・回収方法を定める計画",
      "汚れを除去する処理",
      "食品の性質に応じて適切な温度を保つこと",
      "対象物から微生物をできる限り完全に除去・不活化する処理",
      "対象の微生物を減らす処理",
      "重要管理点を適切に管理できているか判断するための基準"
    ],
    "answer": 2,
    "explanation": "保存温度管理：食品の性質に応じて適切な温度を保つこと。他の選択肢は別の用語を説明しています。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "NEW-1-048",
    "grade": 1,
    "category": "食マーケット",
    "kind": "choice",
    "prompt": "「市場セグメンテーション」の説明として、最も適切なものはどれか。",
    "options": [
      "作業品質を安定させるために決めた基本の実施方法",
      "顧客を属性やニーズなどで分けること",
      "同じ店やサービスを繰り返し利用する顧客",
      "商品やサービスの購買行動を後押しする活動",
      "売上金額を購入客数で割った値",
      "売上と費用が等しく利益がゼロとなる点"
    ],
    "answer": 1,
    "explanation": "市場セグメンテーション：顧客を属性やニーズなどで分けること。他の選択肢は別の用語を説明しています。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "NEW-1-049",
    "grade": 1,
    "category": "食マーケット",
    "kind": "choice",
    "prompt": "「ターゲティング」の説明として、最も適切なものはどれか。",
    "options": [
      "対象とする顧客層を選定すること",
      "作業品質を安定させるために決めた基本の実施方法",
      "競合との違いを踏まえて提供価値を明確にすること",
      "座席や商品在庫などが一定期間に何回利用されるかの指標",
      "商品やサービスが顧客の期待にどの程度応えているかの指標",
      "同じ店やサービスを繰り返し利用する顧客"
    ],
    "answer": 0,
    "explanation": "ターゲティング：対象とする顧客層を選定すること。他の選択肢は別の用語を説明しています。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "NEW-1-050",
    "grade": 1,
    "category": "食マーケット",
    "kind": "choice",
    "prompt": "「ポジショニング」の説明として、最も適切なものはどれか。",
    "options": [
      "売上高に対する売上原価の割合",
      "売上金額を購入客数で割った値",
      "商品やサービスの購買行動を後押しする活動",
      "座席や商品在庫などが一定期間に何回利用されるかの指標",
      "競合との違いを踏まえて提供価値を明確にすること",
      "実際の販売数量と予測数量との差"
    ],
    "answer": 4,
    "explanation": "ポジショニング：競合との違いを踏まえて提供価値を明確にすること。他の選択肢は別の用語を説明しています。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "NEW-1-051",
    "grade": 1,
    "category": "食マーケット",
    "kind": "choice",
    "prompt": "「顧客満足度」の説明として、最も適切なものはどれか。",
    "options": [
      "売上高に対する売上原価の割合",
      "実際の販売数量と予測数量との差",
      "商品やサービスが顧客の期待にどの程度応えているかの指標",
      "座席や商品在庫などが一定期間に何回利用されるかの指標",
      "顧客を属性やニーズなどで分けること",
      "同じ店やサービスを繰り返し利用する顧客"
    ],
    "answer": 2,
    "explanation": "顧客満足度：商品やサービスが顧客の期待にどの程度応えているかの指標。他の選択肢は別の用語を説明しています。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "NEW-1-052",
    "grade": 1,
    "category": "食マーケット",
    "kind": "choice",
    "prompt": "「客単価」の説明として、最も適切なものはどれか。",
    "options": [
      "売上と費用が等しく利益がゼロとなる点",
      "対象とする顧客層を選定すること",
      "売上金額を購入客数で割った値",
      "実際の販売数量と予測数量との差",
      "顧客を属性やニーズなどで分けること",
      "商品やサービスが顧客の期待にどの程度応えているかの指標"
    ],
    "answer": 2,
    "explanation": "客単価：売上金額を購入客数で割った値。他の選択肢は別の用語を説明しています。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "NEW-1-053",
    "grade": 1,
    "category": "食マーケット",
    "kind": "choice",
    "prompt": "「回転率」の説明として、最も適切なものはどれか。",
    "options": [
      "座席や商品在庫などが一定期間に何回利用されるかの指標",
      "売上と費用が等しく利益がゼロとなる点",
      "実際の販売数量と予測数量との差",
      "顧客を属性やニーズなどで分けること",
      "商品やサービスの購買行動を後押しする活動",
      "同じ店やサービスを繰り返し利用する顧客"
    ],
    "answer": 0,
    "explanation": "回転率：座席や商品在庫などが一定期間に何回利用されるかの指標。他の選択肢は別の用語を説明しています。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "NEW-1-054",
    "grade": 1,
    "category": "食マーケット",
    "kind": "choice",
    "prompt": "「販売促進」の説明として、最も適切なものはどれか。",
    "options": [
      "同じ店やサービスを繰り返し利用する顧客",
      "実際の販売数量と予測数量との差",
      "商品やサービスが顧客の期待にどの程度応えているかの指標",
      "売上と費用が等しく利益がゼロとなる点",
      "顧客を属性やニーズなどで分けること",
      "商品やサービスの購買行動を後押しする活動"
    ],
    "answer": 5,
    "explanation": "販売促進：商品やサービスの購買行動を後押しする活動。他の選択肢は別の用語を説明しています。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "NEW-1-055",
    "grade": 1,
    "category": "食マーケット",
    "kind": "choice",
    "prompt": "「需要予測誤差」の説明として、最も適切なものはどれか。",
    "options": [
      "商品やサービスの購買行動を後押しする活動",
      "同じ店やサービスを繰り返し利用する顧客",
      "売上金額を購入客数で割った値",
      "実際の販売数量と予測数量との差",
      "競合との違いを踏まえて提供価値を明確にすること",
      "売上高に対する売上原価の割合"
    ],
    "answer": 3,
    "explanation": "需要予測誤差：実際の販売数量と予測数量との差。他の選択肢は別の用語を説明しています。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "NEW-1-056",
    "grade": 1,
    "category": "食マーケット",
    "kind": "choice",
    "prompt": "「損益分岐点」の説明として、最も適切なものはどれか。",
    "options": [
      "売上と費用が等しく利益がゼロとなる点",
      "作業品質を安定させるために決めた基本の実施方法",
      "実際の販売数量と予測数量との差",
      "対象とする顧客層を選定すること",
      "競合との違いを踏まえて提供価値を明確にすること",
      "座席や商品在庫などが一定期間に何回利用されるかの指標"
    ],
    "answer": 0,
    "explanation": "損益分岐点：売上と費用が等しく利益がゼロとなる点。他の選択肢は別の用語を説明しています。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "NEW-1-057",
    "grade": 1,
    "category": "食マーケット",
    "kind": "choice",
    "prompt": "「原価率」の説明として、最も適切なものはどれか。",
    "options": [
      "対象とする顧客層を選定すること",
      "売上金額を購入客数で割った値",
      "売上高に対する売上原価の割合",
      "競合との違いを踏まえて提供価値を明確にすること",
      "同じ店やサービスを繰り返し利用する顧客",
      "商品やサービスの購買行動を後押しする活動"
    ],
    "answer": 2,
    "explanation": "原価率：売上高に対する売上原価の割合。他の選択肢は別の用語を説明しています。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "NEW-1-058",
    "grade": 1,
    "category": "食マーケット",
    "kind": "choice",
    "prompt": "「標準作業手順」の説明として、最も適切なものはどれか。",
    "options": [
      "実際の販売数量と予測数量との差",
      "作業品質を安定させるために決めた基本の実施方法",
      "同じ店やサービスを繰り返し利用する顧客",
      "競合との違いを踏まえて提供価値を明確にすること",
      "商品やサービスの購買行動を後押しする活動",
      "売上高に対する売上原価の割合"
    ],
    "answer": 1,
    "explanation": "標準作業手順：作業品質を安定させるために決めた基本の実施方法。他の選択肢は別の用語を説明しています。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "NEW-1-059",
    "grade": 1,
    "category": "社会生活",
    "kind": "choice",
    "prompt": "「消費者契約」の説明として、最も適切なものはどれか。",
    "options": [
      "飲食物に起因する衛生上の危害の発生防止を目的とする法律",
      "情報の機密性・完全性・可用性などを守ること",
      "食品表示に関する基準や制度を定める法律",
      "製品や資源を可能な限り循環させ廃棄を抑える経済の考え方",
      "消費者と事業者との間で結ばれる契約",
      "居住地域などにかかわらず利用できる基本的なサービス"
    ],
    "answer": 4,
    "explanation": "消費者契約：消費者と事業者との間で結ばれる契約。他の選択肢は別の用語を説明しています。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "NEW-1-060",
    "grade": 1,
    "category": "社会生活",
    "kind": "choice",
    "prompt": "「個人情報保護」の説明として、最も適切なものはどれか。",
    "options": [
      "不当な表示や過大な景品による顧客誘引を規制する法律",
      "食品表示に関する基準や制度を定める法律",
      "情報の機密性・完全性・可用性などを守ること",
      "個人を識別できる情報を適切に扱うこと",
      "デジタル技術の利用機会や能力の格差",
      "飲食物に起因する衛生上の危害の発生防止を目的とする法律"
    ],
    "answer": 3,
    "explanation": "個人情報保護：個人を識別できる情報を適切に扱うこと。他の選択肢は別の用語を説明しています。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "NEW-1-061",
    "grade": 1,
    "category": "社会生活",
    "kind": "choice",
    "prompt": "「景品表示法」の説明として、最も適切なものはどれか。",
    "options": [
      "消費者政策や食品表示などを所管する行政機関",
      "不当な表示や過大な景品による顧客誘引を規制する法律",
      "消費者と事業者との間で結ばれる契約",
      "製品や資源を可能な限り循環させ廃棄を抑える経済の考え方",
      "飲食物に起因する衛生上の危害の発生防止を目的とする法律",
      "デジタル技術の利用機会や能力の格差"
    ],
    "answer": 1,
    "explanation": "景品表示法：不当な表示や過大な景品による顧客誘引を規制する法律。他の選択肢は別の用語を説明しています。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "NEW-1-062",
    "grade": 1,
    "category": "社会生活",
    "kind": "choice",
    "prompt": "「食品表示法」の説明として、最も適切なものはどれか。",
    "options": [
      "居住地域などにかかわらず利用できる基本的なサービス",
      "デジタル技術の利用機会や能力の格差",
      "不当な表示や過大な景品による顧客誘引を規制する法律",
      "食品表示に関する基準や制度を定める法律",
      "消費者と事業者との間で結ばれる契約",
      "誰もが必要な食料を安定して得られる状態を目指す考え方"
    ],
    "answer": 3,
    "explanation": "食品表示法：食品表示に関する基準や制度を定める法律。他の選択肢は別の用語を説明しています。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "NEW-1-063",
    "grade": 1,
    "category": "社会生活",
    "kind": "choice",
    "prompt": "「食品衛生法」の説明として、最も適切なものはどれか。",
    "options": [
      "個人を識別できる情報を適切に扱うこと",
      "食品表示に関する基準や制度を定める法律",
      "製品や資源を可能な限り循環させ廃棄を抑える経済の考え方",
      "デジタル技術の利用機会や能力の格差",
      "飲食物に起因する衛生上の危害の発生防止を目的とする法律",
      "消費者と事業者との間で結ばれる契約"
    ],
    "answer": 4,
    "explanation": "食品衛生法：飲食物に起因する衛生上の危害の発生防止を目的とする法律。他の選択肢は別の用語を説明しています。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "NEW-1-064",
    "grade": 1,
    "category": "社会生活",
    "kind": "choice",
    "prompt": "「消費者庁」の説明として、最も適切なものはどれか。",
    "options": [
      "居住地域などにかかわらず利用できる基本的なサービス",
      "消費者政策や食品表示などを所管する行政機関",
      "食品表示に関する基準や制度を定める法律",
      "デジタル技術の利用機会や能力の格差",
      "誰もが必要な食料を安定して得られる状態を目指す考え方",
      "将来世代のニーズを損なわず現在のニーズを満たす開発"
    ],
    "answer": 1,
    "explanation": "消費者庁：消費者政策や食品表示などを所管する行政機関。他の選択肢は別の用語を説明しています。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "NEW-1-065",
    "grade": 1,
    "category": "社会生活",
    "kind": "choice",
    "prompt": "「フードセキュリティ」の説明として、最も適切なものはどれか。",
    "options": [
      "食品表示に関する基準や制度を定める法律",
      "個人を識別できる情報を適切に扱うこと",
      "将来世代のニーズを損なわず現在のニーズを満たす開発",
      "誰もが必要な食料を安定して得られる状態を目指す考え方",
      "居住地域などにかかわらず利用できる基本的なサービス",
      "製品や資源を可能な限り循環させ廃棄を抑える経済の考え方"
    ],
    "answer": 3,
    "explanation": "フードセキュリティ：誰もが必要な食料を安定して得られる状態を目指す考え方。他の選択肢は別の用語を説明しています。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "NEW-1-066",
    "grade": 1,
    "category": "社会生活",
    "kind": "choice",
    "prompt": "「持続可能な開発」の説明として、最も適切なものはどれか。",
    "options": [
      "消費者と事業者との間で結ばれる契約",
      "不当な表示や過大な景品による顧客誘引を規制する法律",
      "食品表示に関する基準や制度を定める法律",
      "将来世代のニーズを損なわず現在のニーズを満たす開発",
      "デジタル技術の利用機会や能力の格差",
      "居住地域などにかかわらず利用できる基本的なサービス"
    ],
    "answer": 3,
    "explanation": "持続可能な開発：将来世代のニーズを損なわず現在のニーズを満たす開発。他の選択肢は別の用語を説明しています。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "NEW-1-067",
    "grade": 1,
    "category": "社会生活",
    "kind": "choice",
    "prompt": "「循環経済」の説明として、最も適切なものはどれか。",
    "options": [
      "消費者と事業者との間で結ばれる契約",
      "消費者政策や食品表示などを所管する行政機関",
      "製品や資源を可能な限り循環させ廃棄を抑える経済の考え方",
      "誰もが必要な食料を安定して得られる状態を目指す考え方",
      "食品表示に関する基準や制度を定める法律",
      "情報の機密性・完全性・可用性などを守ること"
    ],
    "answer": 2,
    "explanation": "循環経済：製品や資源を可能な限り循環させ廃棄を抑える経済の考え方。他の選択肢は別の用語を説明しています。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "NEW-1-068",
    "grade": 1,
    "category": "社会生活",
    "kind": "choice",
    "prompt": "「情報セキュリティ」の説明として、最も適切なものはどれか。",
    "options": [
      "将来世代のニーズを損なわず現在のニーズを満たす開発",
      "誰もが必要な食料を安定して得られる状態を目指す考え方",
      "食品表示に関する基準や制度を定める法律",
      "消費者政策や食品表示などを所管する行政機関",
      "情報の機密性・完全性・可用性などを守ること",
      "飲食物に起因する衛生上の危害の発生防止を目的とする法律"
    ],
    "answer": 4,
    "explanation": "情報セキュリティ：情報の機密性・完全性・可用性などを守ること。他の選択肢は別の用語を説明しています。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "NEW-1-069",
    "grade": 1,
    "category": "社会生活",
    "kind": "choice",
    "prompt": "「デジタルデバイド」の説明として、最も適切なものはどれか。",
    "options": [
      "デジタル技術の利用機会や能力の格差",
      "消費者政策や食品表示などを所管する行政機関",
      "将来世代のニーズを損なわず現在のニーズを満たす開発",
      "不当な表示や過大な景品による顧客誘引を規制する法律",
      "消費者と事業者との間で結ばれる契約",
      "個人を識別できる情報を適切に扱うこと"
    ],
    "answer": 0,
    "explanation": "デジタルデバイド：デジタル技術の利用機会や能力の格差。他の選択肢は別の用語を説明しています。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "NEW-1-W001",
    "grade": 1,
    "category": "栄養と健康",
    "kind": "written",
    "prompt": "高齢者の低栄養が疑われるとき、確認すべき食生活上の項目を二つ挙げ、支援の方向性を述べなさい。",
    "sample": "食事量・体重変化・食事回数などを確認する。本人の状態に応じて食事回数や内容を工夫し、必要に応じて医療・栄養専門職につなぐ。",
    "keywords": [
      "食事量",
      "体重変化",
      "支援"
    ],
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "NEW-1-W002",
    "grade": 1,
    "category": "食文化と食習慣",
    "kind": "written",
    "prompt": "食事制限のある来客を迎える際、献立を考える前に確認すべき点を二つ述べなさい。",
    "sample": "アレルギーの原因食材と重症度、宗教・文化・健康上の制約を本人に確認し、使用原材料と調理時の交差接触を確認する。",
    "keywords": [
      "本人確認",
      "アレルギー",
      "交差接触"
    ],
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "NEW-1-W003",
    "grade": 1,
    "category": "食品学",
    "kind": "written",
    "prompt": "でんぷんの糊化と老化の違いを、温度や保存と関連付けて説明しなさい。",
    "sample": "糊化は水と加熱ででんぷん粒が膨潤する現象。老化は糊化後の冷却・保存で分子が再配列し硬くなる現象。",
    "keywords": [
      "糊化",
      "水と加熱",
      "老化"
    ],
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "NEW-1-W004",
    "grade": 1,
    "category": "衛生管理",
    "kind": "written",
    "prompt": "HACCPにおける重要管理点の逸脱が見つかったときに、必要な対応を二つ説明しなさい。",
    "sample": "製品の隔離・再加熱・廃棄など安全性を確保する是正措置を行い、原因を調査して監視・記録と手順を見直す。",
    "keywords": [
      "是正措置",
      "記録",
      "原因調査"
    ],
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "NEW-1-W005",
    "grade": 1,
    "category": "食マーケット",
    "kind": "written",
    "prompt": "外食店が食品ロスを減らしながら顧客満足を維持するための工夫を二つ挙げなさい。",
    "sample": "需要予測による仕込み量の調整と、少量メニューや持ち帰りの適切な提供などが考えられる。衛生管理にも配慮する。",
    "keywords": [
      "需要予測",
      "量の調整",
      "衛生管理"
    ],
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "NEW-1-W006",
    "grade": 1,
    "category": "社会生活",
    "kind": "written",
    "prompt": "食品の広告で健康効果をうたう際に、消費者誤認を防ぐための確認事項を二つ挙げなさい。",
    "sample": "表示内容の科学的根拠、適用する法令・制度、表現の正確さを確認し、医薬品的効能と誤認させない。",
    "keywords": [
      "科学的根拠",
      "法令",
      "誤認防止"
    ],
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "NEW-1-W007",
    "grade": 1,
    "category": "社会生活",
    "kind": "written",
    "prompt": "食品リコールの連絡を受けた消費者に対し、どのような情報を伝えるべきか二点述べなさい。",
    "sample": "対象製品のロット・期限表示と、喫食を中止して販売店・事業者の案内に従う方法などを明確に伝える。",
    "keywords": [
      "対象商品",
      "喫食中止",
      "問い合わせ"
    ],
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "ORI-3-255",
    "grade": 3,
    "category": "体を育もう",
    "kind": "choice",
    "prompt": "食品表示の「消費期限」の説明として最も適切なものはどれか。",
    "options": [
      "未開封で表示された保存方法を守った場合に、安全に食べられる期限の目安",
      "開封後も必ず安全に食べられる最終日",
      "食品が最もおいしくなる日",
      "製造日から一律で30日後の日",
      "冷凍すれば表示を無視できる期限"
    ],
    "answer": 0,
    "explanation": "消費期限は、未開封で表示どおり保存した場合に安全に食べられる期限を示します。開封後は期限内でも早めに食べる必要があります。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "ORI-3-256",
    "grade": 3,
    "category": "知を育もう",
    "kind": "choice",
    "prompt": "食品の保存方法を確認する際、最も適切な行動はどれか。",
    "options": [
      "見た目だけで常温保存を決める",
      "同じ食品名なら保存方法は常に同じと考える",
      "包装に記載された保存方法を確認する",
      "購入後はすべて冷凍すればよいと考える",
      "賞味期限の表示だけを見て保存方法を判断する"
    ],
    "answer": 2,
    "explanation": "食品ごとに適切な保存条件は異なるため、包装の保存方法表示を確認します。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "ORI-2-079",
    "grade": 2,
    "category": "買い物上手になろう",
    "kind": "choice",
    "prompt": "食品ロスを減らす買い物の工夫として最も適切なものはどれか。",
    "options": [
      "買い物前に家庭の在庫と必要量を確認する",
      "値引き品は使用予定がなくても多く買う",
      "同じ食材を毎回まとめて大量購入する",
      "期限表示は確認しない",
      "献立に関係なく特売品だけを選ぶ",
      "冷蔵庫の在庫を確認せず買い足す"
    ],
    "answer": 0,
    "explanation": "在庫と使用予定を確認して必要な量を買うことは、家庭での食品ロス削減に役立ちます。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "ORI-2-080",
    "grade": 2,
    "category": "段取り上手になろう",
    "kind": "choice",
    "prompt": "加熱調理済みの料理を後で食べるために保存する場合、最も適切な行動はどれか。",
    "options": [
      "大鍋のまま室温で一晩置く",
      "十分に冷めるまで何時間でも常温放置する",
      "小分けにして速やかに冷却し、適切に冷蔵する",
      "温かい料理は必ず冷凍庫に直接入れる",
      "翌日食べるなら保存温度を気にしない",
      "香辛料を足せば冷蔵は不要と考える"
    ],
    "answer": 2,
    "explanation": "調理後の食品は長時間室温に置かず、小分けなどで速やかに冷却して適切な温度で保存します。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "ORI-1-097",
    "grade": 1,
    "category": "衛生管理",
    "kind": "choice",
    "prompt": "生の鶏肉を扱った後、サラダ用野菜を調理する際の交差汚染対策として最も適切なものはどれか。",
    "options": [
      "同じまな板を水で軽く流して使う",
      "包丁の刃を乾いた布で拭いて使う",
      "鶏肉の汁が付いた手袋のまま野菜を切る",
      "器具と手を適切に洗浄し、必要に応じて消毒してから作業する",
      "野菜を後から冷やせば器具の洗浄は不要とする",
      "肉と野菜を同じ容器に置いてから分ける"
    ],
    "answer": 3,
    "explanation": "生肉の汁などによる交差汚染を防ぐには、手指・器具の適切な洗浄と必要な消毒、作業の分離が重要です。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "ORI-1-098",
    "grade": 1,
    "category": "食品学",
    "kind": "choice",
    "prompt": "食品の水分活性と微生物増殖の関係について、一般的に最も適切な説明はどれか。",
    "options": [
      "水分活性は食品の総水分量と常に同じ値になる",
      "水分活性が低いほど、一般に多くの微生物は増殖しにくくなる",
      "水分活性が低い食品では微生物が必ず完全に死滅する",
      "水分活性は食品の色だけで決まる",
      "水分活性を下げると保存温度の管理は一切不要になる",
      "水分活性が高いほど必ず食品は無菌になる"
    ],
    "answer": 1,
    "explanation": "水分活性は微生物が利用できる水の状態に関係し、一般に低下すると多くの微生物の増殖が抑えられます。ただし死滅や無菌を意味しません。",
    "source": "original",
    "reviewStatus": "draft_review"
  }
];
