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
  },
  {
    "id": "EXT-3-001",
    "grade": 3,
    "category": "体を育もう",
    "kind": "choice",
    "prompt": "【深掘り・食べ方】硬いりんごをひとかじりするとき、最初に食材の一部を切り取る役割が大きい歯はどれか。すりつぶす奥歯とは区別して考えなさい。",
    "options": [
      "切歯",
      "エナメル質",
      "大臼歯",
      "歯髄",
      "犬歯"
    ],
    "answer": 0,
    "explanation": "切歯は前方の刃のような歯冠で食材をかみ切ります。大臼歯は咀嚼の後半で磨りつぶす働きが中心です。歯の位置だけでなく、形と働きを対応させましょう。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "EXT-3-002",
    "grade": 3,
    "category": "体を育もう",
    "kind": "choice",
    "prompt": "【応用・誤り発見】歯の種類と構造の説明資料を点検する。次の「用語―説明」の組合せのうち、誤っているものを1つ選びなさい。",
    "options": [
      "犬歯 — 食物をすりつぶす働きが大きい奥歯",
      "切歯 — 前歯で食べ物をかみ切る際に主に使う歯",
      "エナメル質 — 歯の表面で歯冠を覆う硬い組織",
      "歯髄 — 歯の中心部にあり、神経や血管を含む組織",
      "大臼歯 — 食物をすりつぶす働きが大きい奥歯"
    ],
    "answer": 0,
    "explanation": "誤りは「犬歯 — 食物をすりつぶす働きが大きい奥歯」。食物をすりつぶす働きが大きい奥歯は「大臼歯」の説明です。「犬歯」は「先端がとがり、食物を引き裂く働きに適している歯」に当たります。残り4つの組合せは正しいものです。 【関連知識を比較】切歯：切歯は前方に位置し、食物をかみ切る役割を担います。／犬歯：犬歯は食物を引き裂く働きに適しています。／大臼歯：大臼歯の広い咬合面は、食物をすりつぶすのに役立ちます。／エナメル質：エナメル質は歯冠の表面を覆う非常に硬い組織です。／歯髄：歯髄には神経や血管が通っています。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "EXT-3-003",
    "grade": 3,
    "category": "体を育もう",
    "kind": "choice",
    "prompt": "【深掘り・歯の働き】繊維のある野菜をかみ切った後、食塊を細かくして唾液と混ぜやすくしたい。広い咬合面によってこの工程を主に支える歯はどれか。",
    "options": [
      "エナメル質",
      "切歯",
      "大臼歯",
      "犬歯",
      "歯髄"
    ],
    "answer": 2,
    "explanation": "大臼歯は広い咬合面で食品をすりつぶし、表面積を増やして唾液と混ざりやすくします。切歯の「切る」、犬歯の「引き裂く」と段階を区別します。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "EXT-3-004",
    "grade": 3,
    "category": "体を育もう",
    "kind": "choice",
    "prompt": "【応用・組合せ】歯の種類と構造を復習するため、5組の「用語―説明」を照合する。正しいものを1つ選びなさい。",
    "options": [
      "犬歯 — 食物をすりつぶす働きが大きい奥歯",
      "切歯 — 先端がとがり、食物を引き裂く働きに適している歯",
      "エナメル質 — 歯の表面で歯冠を覆う硬い組織",
      "大臼歯 — 歯の表面で歯冠を覆う硬い組織",
      "歯髄 — 前歯で食べ物をかみ切る際に主に使う歯"
    ],
    "answer": 2,
    "explanation": "正解は「エナメル質 — 歯の表面で歯冠を覆う硬い組織」。ほかの選択肢は用語と説明が入れ替わっています。名称を暗記するだけでなく、それぞれの働きや特徴を比較して覚えましょう。 【関連知識を比較】切歯：切歯は前方に位置し、食物をかみ切る役割を担います。／犬歯：犬歯は食物を引き裂く働きに適しています。／大臼歯：大臼歯の広い咬合面は、食物をすりつぶすのに役立ちます。／エナメル質：エナメル質は歯冠の表面を覆う非常に硬い組織です。／歯髄：歯髄には神経や血管が通っています。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "EXT-3-005",
    "grade": 3,
    "category": "体を育もう",
    "kind": "choice",
    "prompt": "【応用・誤り発見】歯の種類と構造について受講生がまとめた5組の説明で、誤っているものを1つ選びなさい。",
    "options": [
      "切歯 — 前歯で食べ物をかみ切る際に主に使う歯",
      "犬歯 — 先端がとがり、食物を引き裂く働きに適している歯",
      "大臼歯 — 食物をすりつぶす働きが大きい奥歯",
      "エナメル質 — 歯の表面で歯冠を覆う硬い組織",
      "歯髄 — 前歯で食べ物をかみ切る際に主に使う歯"
    ],
    "answer": 4,
    "explanation": "誤りは「歯髄 — 前歯で食べ物をかみ切る際に主に使う歯」。前歯で食べ物をかみ切る際に主に使う歯は「切歯」の説明です。「歯髄」は「歯の中心部にあり、神経や血管を含む組織」に当たります。残り4つの組合せは正しいものです。 【関連知識を比較】切歯：切歯は前方に位置し、食物をかみ切る役割を担います。／犬歯：犬歯は食物を引き裂く働きに適しています。／大臼歯：大臼歯の広い咬合面は、食物をすりつぶすのに役立ちます。／エナメル質：エナメル質は歯冠の表面を覆う非常に硬い組織です。／歯髄：歯髄には神経や血管が通っています。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "EXT-3-006",
    "grade": 3,
    "category": "体を育もう",
    "kind": "choice",
    "prompt": "【深掘り・消化の順序】ご飯をよくかむほど唾液と混ざり、食べ物の表面積も増える。口腔内で同時に進む、この物理的な消化準備を指すものはどれか。",
    "options": [
      "胃酸",
      "咀嚼",
      "小腸",
      "胆汁",
      "水分の吸収"
    ],
    "answer": 1,
    "explanation": "咀嚼によって食物を細かくすると唾液と混ざり、飲み込みやすくなります。胃酸は胃、胆汁は脂質の乳化に関わるため、口で行う機械的処理とは異なります。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "EXT-3-007",
    "grade": 3,
    "category": "体を育もう",
    "kind": "choice",
    "prompt": "【応用・誤り発見】消化管と消化液の説明資料を点検する。次の「用語―説明」の組合せのうち、誤っているものを1つ選びなさい。",
    "options": [
      "咀嚼 — 歯を使って食べ物をかみ砕き、唾液と混ぜる働き",
      "胆汁 — 肝臓で作られ、脂質の消化を助ける液体",
      "水分の吸収 — 大腸の働きとして中心となるもの",
      "小腸 — 消化された栄養素の吸収の中心となる器官",
      "胃酸 — 肝臓で作られ、脂質の消化を助ける液体"
    ],
    "answer": 4,
    "explanation": "誤りは「胃酸 — 肝臓で作られ、脂質の消化を助ける液体」。肝臓で作られ、脂質の消化を助ける液体は「胆汁」の説明です。「胃酸」は「胃の中を強い酸性に保ち、消化を助けるもの」に当たります。残り4つの組合せは正しいものです。 【関連知識を比較】咀嚼：咀嚼は食べ物を歯でかみ砕き唾液と混ぜる働きです。／胃酸：胃酸は胃の内容物を酸性に保ち、消化を助けます。／胆汁：胆汁は脂質を乳化し、消化酵素の働きを助けます。／小腸：多くの栄養素は小腸の粘膜から吸収されます。／水分の吸収：大腸では残った内容物から水分などが吸収されます。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "EXT-3-008",
    "grade": 3,
    "category": "体を育もう",
    "kind": "choice",
    "prompt": "【深掘り・脂質の消化】油の多い食事のあと、消化液が脂肪を細かい粒に分散させ、酵素が働きやすくする。肝臓で作られ胆のうに蓄えられる液はどれか。",
    "options": [
      "胃酸",
      "胆汁",
      "水分の吸収",
      "小腸",
      "咀嚼"
    ],
    "answer": 1,
    "explanation": "胆汁は脂肪を乳化して消化を助けますが、胆汁自体が脂肪を分解する酵素ではありません。肝臓で産生され、胆のうで濃縮・貯蔵される点も整理しましょう。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "EXT-3-009",
    "grade": 3,
    "category": "体を育もう",
    "kind": "choice",
    "prompt": "【応用・消化】昼食でご飯・鶏肉・サラダを食べた。消化管と栄養素の吸収について最も適切な説明はどれか。",
    "options": [
      "胃では消化された栄養素の大部分が吸収される",
      "大腸はたんぱく質を最初に消化する主要な場所である",
      "小腸は多くの栄養素を吸収する主要な場所である",
      "胆汁は胃で分泌され、主にでんぷんを分解する",
      "食道は消化酵素を分泌し、脂質を吸収する主要な場所である"
    ],
    "answer": 2,
    "explanation": "胃では主に消化が進み、栄養素の多くは小腸で吸収されます。胆汁は肝臓で作られ、脂質の乳化を助けます。 【復習ポイント：同分野の概念】咀嚼：咀嚼は食べ物を歯でかみ砕き唾液と混ぜる働きです。／胃酸：胃酸は胃の内容物を酸性に保ち、消化を助けます。／胆汁：胆汁は脂質を乳化し、消化酵素の働きを助けます。／小腸：多くの栄養素は小腸の粘膜から吸収されます。／水分の吸収：大腸では残った内容物から水分などが吸収されます。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "EXT-3-010",
    "grade": 3,
    "category": "体を育もう",
    "kind": "choice",
    "prompt": "【応用・誤り発見】消化管と消化液について受講生がまとめた5組の説明で、誤っているものを1つ選びなさい。",
    "options": [
      "胃酸 — 胃の中を強い酸性に保ち、消化を助けるもの",
      "咀嚼 — 歯を使って食べ物をかみ砕き、唾液と混ぜる働き",
      "胆汁 — 肝臓で作られ、脂質の消化を助ける液体",
      "水分の吸収 — 歯を使って食べ物をかみ砕き、唾液と混ぜる働き",
      "小腸 — 消化された栄養素の吸収の中心となる器官"
    ],
    "answer": 3,
    "explanation": "誤りは「水分の吸収 — 歯を使って食べ物をかみ砕き、唾液と混ぜる働き」。歯を使って食べ物をかみ砕き、唾液と混ぜる働きは「咀嚼」の説明です。「水分の吸収」は「大腸の働きとして中心となるもの」に当たります。残り4つの組合せは正しいものです。 【関連知識を比較】咀嚼：咀嚼は食べ物を歯でかみ砕き唾液と混ぜる働きです。／胃酸：胃酸は胃の内容物を酸性に保ち、消化を助けます。／胆汁：胆汁は脂質を乳化し、消化酵素の働きを助けます。／小腸：多くの栄養素は小腸の粘膜から吸収されます。／水分の吸収：大腸では残った内容物から水分などが吸収されます。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "EXT-3-011",
    "grade": 3,
    "category": "体を育もう",
    "kind": "choice",
    "prompt": "【深掘り・欠乏症】野菜の摂取が極端に少ない食生活が続き、暗い場所で物が見えにくくなる症状との関係を学ぶ。視覚の働きに特に直接関係するものはどれか。",
    "options": [
      "ビタミンD",
      "ビタミンC",
      "ビタミンA",
      "ビタミンK",
      "ビタミンB1"
    ],
    "answer": 2,
    "explanation": "ビタミンAは網膜の視物質に関わり、不足は夜盲症の原因となります。ビタミンCはコラーゲン、ビタミンKは凝固に関わるため、症状と機能を対応させて選びます。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "EXT-3-012",
    "grade": 3,
    "category": "体を育もう",
    "kind": "choice",
    "prompt": "【応用・誤り発見】ビタミンと体の働きの説明資料を点検する。次の「用語―説明」の組合せのうち、誤っているものを1つ選びなさい。",
    "options": [
      "ビタミンB1 — コラーゲンの合成を支え、欠乏すると壊血病を起こすビタミン",
      "ビタミンC — コラーゲンの合成を支え、欠乏すると壊血病を起こすビタミン",
      "ビタミンK — 正常な血液凝固に重要なビタミン",
      "ビタミンA — 欠乏すると夜盲症の原因となることがあるビタミン",
      "ビタミンD — 骨の維持やカルシウム吸収を支えるビタミン"
    ],
    "answer": 0,
    "explanation": "誤りは「ビタミンB1 — コラーゲンの合成を支え、欠乏すると壊血病を起こすビタミン」。コラーゲンの合成を支え、欠乏すると壊血病を起こすビタミンは「ビタミンC」の説明です。「ビタミンB1」は「欠乏すると脚気の原因となるビタミン」に当たります。残り4つの組合せは正しいものです。 【関連知識を比較】ビタミンA：ビタミンAは暗所での視覚機能に関わります。／ビタミンB1：ビタミンB1は糖質代謝に関与し、不足すると脚気につながります。／ビタミンC：ビタミンCはコラーゲン形成に必要です。／ビタミンD：ビタミンDはカルシウム代謝に関与します。／ビタミンK：ビタミンKは一部の凝固因子の働きに必要です。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "EXT-3-013",
    "grade": 3,
    "category": "体を育もう",
    "kind": "choice",
    "prompt": "【深掘り・調理と栄養】新鮮な野菜を長時間ゆでてゆで汁を捨てると、熱と水への溶出によって減りやすい栄養素がある。壊血病の予防にも関わるのはどれか。",
    "options": [
      "ビタミンC",
      "ビタミンK",
      "ビタミンA",
      "ビタミンD",
      "ビタミンB1"
    ],
    "answer": 0,
    "explanation": "水溶性のビタミンCは調理中に水へ溶け出し、加熱や保存の条件でも減ることがあります。ビタミンA・D・Kなどの脂溶性ビタミンと比べ、調理条件の影響を考える問題です。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "EXT-3-014",
    "grade": 3,
    "category": "体を育もう",
    "kind": "choice",
    "prompt": "【応用・栄養】日照時間が短く、魚類を食べる機会も少ない人が、カルシウムの利用と骨の健康を考える。特に関係が深い栄養素はどれか。",
    "options": [
      "ビタミンK",
      "ビタミンA",
      "ビタミンB1",
      "ビタミンD",
      "ビタミンC"
    ],
    "answer": 3,
    "explanation": "ビタミンDはカルシウムの吸収や骨の維持に関わります。ほかのビタミンも重要ですが、設問の条件に最も直接関係します。 【復習ポイント：同分野の概念】ビタミンA：ビタミンAは暗所での視覚機能に関わります。／ビタミンB1：ビタミンB1は糖質代謝に関与し、不足すると脚気につながります。／ビタミンC：ビタミンCはコラーゲン形成に必要です。／ビタミンD：ビタミンDはカルシウム代謝に関与します。／ビタミンK：ビタミンKは一部の凝固因子の働きに必要です。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "EXT-3-015",
    "grade": 3,
    "category": "体を育もう",
    "kind": "choice",
    "prompt": "【応用・誤り発見】ビタミンと体の働きについて受講生がまとめた5組の説明で、誤っているものを1つ選びなさい。",
    "options": [
      "ビタミンA — 欠乏すると夜盲症の原因となることがあるビタミン",
      "ビタミンD — 骨の維持やカルシウム吸収を支えるビタミン",
      "ビタミンB1 — 欠乏すると脚気の原因となるビタミン",
      "ビタミンC — コラーゲンの合成を支え、欠乏すると壊血病を起こすビタミン",
      "ビタミンK — 欠乏すると夜盲症の原因となることがあるビタミン"
    ],
    "answer": 4,
    "explanation": "誤りは「ビタミンK — 欠乏すると夜盲症の原因となることがあるビタミン」。欠乏すると夜盲症の原因となることがあるビタミンは「ビタミンA」の説明です。「ビタミンK」は「正常な血液凝固に重要なビタミン」に当たります。残り4つの組合せは正しいものです。 【関連知識を比較】ビタミンA：ビタミンAは暗所での視覚機能に関わります。／ビタミンB1：ビタミンB1は糖質代謝に関与し、不足すると脚気につながります。／ビタミンC：ビタミンCはコラーゲン形成に必要です。／ビタミンD：ビタミンDはカルシウム代謝に関与します。／ビタミンK：ビタミンKは一部の凝固因子の働きに必要です。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "EXT-3-016",
    "grade": 3,
    "category": "体を育もう",
    "kind": "choice",
    "prompt": "【深掘り・体内での役割】海藻をよく食べる地域の栄養指導を考える。摂取不足だけでなく過剰摂取にも注意が必要で、甲状腺ホルモンの材料となるミネラルはどれか。",
    "options": [
      "リン",
      "ヨウ素",
      "亜鉛",
      "カリウム",
      "マグネシウム"
    ],
    "answer": 1,
    "explanation": "ヨウ素は甲状腺ホルモンの構成成分で、不足も過剰も甲状腺機能に影響する場合があります。多く摂れば必ず良いという発想ではなく、適切な摂取の範囲を考えます。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "EXT-3-017",
    "grade": 3,
    "category": "体を育もう",
    "kind": "choice",
    "prompt": "【深掘り・栄養素の連携】エネルギー代謝に関わる多くの酵素の補助因子となり、筋肉や神経の正常な働きにも関与するミネラルを選びなさい。骨の材料という一点だけで決めない。",
    "options": [
      "亜鉛",
      "リン",
      "マグネシウム",
      "ヨウ素",
      "カリウム"
    ],
    "answer": 2,
    "explanation": "マグネシウムは多数の酵素反応、神経・筋肉の機能に関わります。リンもATPに必要ですが、設問は「多くの酵素と神経・筋肉」の組合せが決め手です。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "EXT-3-018",
    "grade": 3,
    "category": "体を育もう",
    "kind": "choice",
    "prompt": "【応用・代謝】骨や歯の構成成分であると同時に、体内でエネルギーの受け渡しに関わるATPの構成にも必要な無機質はどれか。",
    "options": [
      "リン",
      "カルシウム",
      "鉄",
      "ヨウ素",
      "亜鉛"
    ],
    "answer": 0,
    "explanation": "ATPにはリン酸基が含まれます。リンは骨・歯にも存在しますが、カルシウムとの役割を混同しないようにします。 【復習ポイント：同分野の概念】ヨウ素：ヨウ素は甲状腺ホルモンの構成成分です。／マグネシウム：マグネシウムは多くの酵素反応や神経・筋肉の働きに関与します。／リン：リンは骨や歯の構成成分であり、ATPにも含まれます。／カリウム：カリウムは細胞内液に多く存在する電解質です。／亜鉛：亜鉛は酵素反応や味覚の維持に関与します。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "EXT-3-019",
    "grade": 3,
    "category": "体を育もう",
    "kind": "choice",
    "prompt": "【応用・組合せ】ミネラルの役割を復習するため、5組の「用語―説明」を照合する。正しいものを1つ選びなさい。",
    "options": [
      "リン — 細胞内に比較的多く存在し、体液のバランスに関わるミネラル",
      "マグネシウム — 骨や歯の構成だけでなく、ATPの構成にも関係するミネラル",
      "カリウム — 細胞内に比較的多く存在し、体液のバランスに関わるミネラル",
      "亜鉛 — 甲状腺ホルモンの構成に必要なミネラル",
      "ヨウ素 — 多くの酵素の働きや筋肉・神経の機能に関与するミネラル"
    ],
    "answer": 2,
    "explanation": "正解は「カリウム — 細胞内に比較的多く存在し、体液のバランスに関わるミネラル」。ほかの選択肢は用語と説明が入れ替わっています。名称を暗記するだけでなく、それぞれの働きや特徴を比較して覚えましょう。 【関連知識を比較】ヨウ素：ヨウ素は甲状腺ホルモンの構成成分です。／マグネシウム：マグネシウムは多くの酵素反応や神経・筋肉の働きに関与します。／リン：リンは骨や歯の構成成分であり、ATPにも含まれます。／カリウム：カリウムは細胞内液に多く存在する電解質です。／亜鉛：亜鉛は酵素反応や味覚の維持に関与します。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "EXT-3-020",
    "grade": 3,
    "category": "体を育もう",
    "kind": "choice",
    "prompt": "【応用・誤り発見】ミネラルの役割について受講生がまとめた5組の説明で、誤っているものを1つ選びなさい。",
    "options": [
      "亜鉛 — 甲状腺ホルモンの構成に必要なミネラル",
      "リン — 骨や歯の構成だけでなく、ATPの構成にも関係するミネラル",
      "カリウム — 細胞内に比較的多く存在し、体液のバランスに関わるミネラル",
      "ヨウ素 — 甲状腺ホルモンの構成に必要なミネラル",
      "マグネシウム — 多くの酵素の働きや筋肉・神経の機能に関与するミネラル"
    ],
    "answer": 0,
    "explanation": "誤りは「亜鉛 — 甲状腺ホルモンの構成に必要なミネラル」。甲状腺ホルモンの構成に必要なミネラルは「ヨウ素」の説明です。「亜鉛」は「味覚の維持や多くの酵素の働きに関わるミネラル」に当たります。残り4つの組合せは正しいものです。 【関連知識を比較】ヨウ素：ヨウ素は甲状腺ホルモンの構成成分です。／マグネシウム：マグネシウムは多くの酵素反応や神経・筋肉の働きに関与します。／リン：リンは骨や歯の構成成分であり、ATPにも含まれます。／カリウム：カリウムは細胞内液に多く存在する電解質です。／亜鉛：亜鉛は酵素反応や味覚の維持に関与します。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "EXT-3-021",
    "grade": 3,
    "category": "体を育もう",
    "kind": "choice",
    "prompt": "【深掘り・栄養計算】ある食事にたんぱく質8g、脂質12g、炭水化物30gが含まれる。簡易換算として順に4・9・4kcal/gで計算したとき、エネルギーは何kcalか。",
    "options": [
      "260kcal",
      "172kcal",
      "200kcal",
      "230kcal",
      "300kcal"
    ],
    "answer": 0,
    "explanation": "たんぱく質8×4＝32kcal、脂質12×9＝108kcal、炭水化物30×4＝120kcal。合計260kcalです。脂質も4kcal/gと誤算すると値がずれます。食物繊維等を含む場合、実際の食品表示は異なる場合があります。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "EXT-3-022",
    "grade": 3,
    "category": "体を育もう",
    "kind": "choice",
    "prompt": "【応用・誤り発見】炭水化物と食物繊維の説明資料を点検する。次の「用語―説明」の組合せのうち、誤っているものを1つ選びなさい。",
    "options": [
      "不溶性食物繊維 — 消化されにくく、便のかさを増やす働きがある成分",
      "でんぷん — ご飯やパンに多く含まれ、消化されてブドウ糖の供給源となる成分",
      "ブドウ糖 — 血糖として利用される代表的な単糖",
      "果糖 — 果物やはちみつに含まれる単糖の一つ",
      "乳糖 — 果物やはちみつに含まれる単糖の一つ"
    ],
    "answer": 4,
    "explanation": "誤りは「乳糖 — 果物やはちみつに含まれる単糖の一つ」。果物やはちみつに含まれる単糖の一つは「果糖」の説明です。「乳糖」は「牛乳に含まれる代表的な二糖類」に当たります。残り4つの組合せは正しいものです。 【関連知識を比較】でんぷん：でんぷんは消化によって糖に分解されます。／乳糖：乳糖は牛乳に含まれる糖です。／果糖：果糖は果物やはちみつなどに含まれます。／ブドウ糖：ブドウ糖は血液中に存在し、重要なエネルギー源になります。／不溶性食物繊維：不溶性食物繊維は便のかさを増やすのに役立ちます。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "EXT-3-023",
    "grade": 3,
    "category": "体を育もう",
    "kind": "choice",
    "prompt": "【応用・誤り発見】炭水化物と食物繊維の食育クイズを校正する。次の「用語―説明」の組合せのうち、誤っているものを1つ選びなさい。",
    "options": [
      "でんぷん — ご飯やパンに多く含まれ、消化されてブドウ糖の供給源となる成分",
      "不溶性食物繊維 — 消化されにくく、便のかさを増やす働きがある成分",
      "乳糖 — 牛乳に含まれる代表的な二糖類",
      "果糖 — 血糖として利用される代表的な単糖",
      "ブドウ糖 — 血糖として利用される代表的な単糖"
    ],
    "answer": 3,
    "explanation": "誤りは「果糖 — 血糖として利用される代表的な単糖」。血糖として利用される代表的な単糖は「ブドウ糖」の説明です。「果糖」は「果物やはちみつに含まれる単糖の一つ」に当たります。残り4つの組合せは正しいものです。 【関連知識を比較】でんぷん：でんぷんは消化によって糖に分解されます。／乳糖：乳糖は牛乳に含まれる糖です。／果糖：果糖は果物やはちみつなどに含まれます。／ブドウ糖：ブドウ糖は血液中に存在し、重要なエネルギー源になります。／不溶性食物繊維：不溶性食物繊維は便のかさを増やすのに役立ちます。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "EXT-3-024",
    "grade": 3,
    "category": "体を育もう",
    "kind": "choice",
    "prompt": "【応用・組合せ】炭水化物と食物繊維を復習するため、5組の「用語―説明」を照合する。正しいものを1つ選びなさい。",
    "options": [
      "ブドウ糖 — 血糖として利用される代表的な単糖",
      "乳糖 — 果物やはちみつに含まれる単糖の一つ",
      "果糖 — 血糖として利用される代表的な単糖",
      "不溶性食物繊維 — ご飯やパンに多く含まれ、消化されてブドウ糖の供給源となる成分",
      "でんぷん — 牛乳に含まれる代表的な二糖類"
    ],
    "answer": 0,
    "explanation": "正解は「ブドウ糖 — 血糖として利用される代表的な単糖」。ほかの選択肢は用語と説明が入れ替わっています。名称を暗記するだけでなく、それぞれの働きや特徴を比較して覚えましょう。 【関連知識を比較】でんぷん：でんぷんは消化によって糖に分解されます。／乳糖：乳糖は牛乳に含まれる糖です。／果糖：果糖は果物やはちみつなどに含まれます。／ブドウ糖：ブドウ糖は血液中に存在し、重要なエネルギー源になります。／不溶性食物繊維：不溶性食物繊維は便のかさを増やすのに役立ちます。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "EXT-3-025",
    "grade": 3,
    "category": "体を育もう",
    "kind": "choice",
    "prompt": "【深掘り・食物繊維】精製した穀物ばかりの献立を見直し、便のかさを増やす食品成分を意識する。小腸で消化されにくく、便通の維持に役立つものはどれか。",
    "options": [
      "乳糖",
      "果糖",
      "ブドウ糖",
      "不溶性食物繊維",
      "でんぷん"
    ],
    "answer": 3,
    "explanation": "不溶性食物繊維は便のかさを増やすことなどに関わります。糖類と違って小腸で通常の消化酵素により分解されにくく、水溶性食物繊維とは性質や働きが異なります。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "EXT-3-026",
    "grade": 3,
    "category": "体を育もう",
    "kind": "choice",
    "prompt": "【深掘り・エネルギー収支】ある日の基礎代謝量1250kcal、身体活動による消費450kcal、食事誘発性熱産生150kcalと仮定する。三つの合計として適切な値はどれか。",
    "options": [
      "1700kcal",
      "1450kcal",
      "1850kcal",
      "2000kcal",
      "2200kcal"
    ],
    "answer": 2,
    "explanation": "一日の消費エネルギーを単純化すると1250＋450＋150＝1850kcalです。1700kcalは食事誘発性熱産生を足し忘れた値です。各項目を別に数え、同じ消費を二重計上しないことが重要です。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "EXT-3-027",
    "grade": 3,
    "category": "体を育もう",
    "kind": "choice",
    "prompt": "【応用・誤り発見】エネルギー消費と収支の説明資料を点検する。次の「用語―説明」の組合せのうち、誤っているものを1つ選びなさい。",
    "options": [
      "食事誘発性熱産生 — 食後に栄養素を消化・吸収・代謝する過程で生じる消費",
      "身体活動による消費 — 食後に栄養素を消化・吸収・代謝する過程で生じる消費",
      "エネルギー過剰 — 摂取エネルギーが消費を長期間上回る状態",
      "基礎代謝量 — 安静時にも呼吸や体温維持などに必要なエネルギー消費",
      "エネルギー収支の均衡 — 摂取と消費のバランスが取れている状態"
    ],
    "answer": 1,
    "explanation": "誤りは「身体活動による消費 — 食後に栄養素を消化・吸収・代謝する過程で生じる消費」。食後に栄養素を消化・吸収・代謝する過程で生じる消費は「食事誘発性熱産生」の説明です。「身体活動による消費」は「歩行や家事、運動などによって増えるエネルギー消費」に当たります。残り4つの組合せは正しいものです。 【関連知識を比較】基礎代謝量：基礎代謝量は生命維持に必要な安静時の消費エネルギーです。／身体活動による消費：日常動作や運動は身体活動によるエネルギー消費に含まれます。／食事誘発性熱産生：食事誘発性熱産生は食事後に増えるエネルギー消費です。／エネルギー過剰：摂取が消費を上回り続けると余剰エネルギーが生じます。／エネルギー収支の均衡：エネルギー収支の均衡は長期的な体重維持の基本です。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "EXT-3-028",
    "grade": 3,
    "category": "体を育もう",
    "kind": "choice",
    "prompt": "【応用・消費エネルギー】一日の消費エネルギーを考える。食事後に消化・吸収・代謝に伴って増える消費分として最も適切なのはどれか。",
    "options": [
      "基礎代謝量",
      "身体活動による消費",
      "食事誘発性熱産生",
      "エネルギー過剰",
      "エネルギー収支の均衡"
    ],
    "answer": 2,
    "explanation": "食事誘発性熱産生は食後の栄養素の処理に伴う消費です。基礎代謝や身体活動による消費とは区別します。 【復習ポイント：同分野の概念】基礎代謝量：基礎代謝量は生命維持に必要な安静時の消費エネルギーです。／身体活動による消費：日常動作や運動は身体活動によるエネルギー消費に含まれます。／食事誘発性熱産生：食事誘発性熱産生は食事後に増えるエネルギー消費です。／エネルギー過剰：摂取が消費を上回り続けると余剰エネルギーが生じます。／エネルギー収支の均衡：エネルギー収支の均衡は長期的な体重維持の基本です。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "EXT-3-029",
    "grade": 3,
    "category": "体を育もう",
    "kind": "choice",
    "prompt": "【応用・組合せ】エネルギー消費と収支を復習するため、5組の「用語―説明」を照合する。正しいものを1つ選びなさい。",
    "options": [
      "身体活動による消費 — 食後に栄養素を消化・吸収・代謝する過程で生じる消費",
      "エネルギー収支の均衡 — 安静時にも呼吸や体温維持などに必要なエネルギー消費",
      "エネルギー過剰 — 摂取エネルギーが消費を長期間上回る状態",
      "食事誘発性熱産生 — 摂取エネルギーが消費を長期間上回る状態",
      "基礎代謝量 — 歩行や家事、運動などによって増えるエネルギー消費"
    ],
    "answer": 2,
    "explanation": "正解は「エネルギー過剰 — 摂取エネルギーが消費を長期間上回る状態」。ほかの選択肢は用語と説明が入れ替わっています。名称を暗記するだけでなく、それぞれの働きや特徴を比較して覚えましょう。 【関連知識を比較】基礎代謝量：基礎代謝量は生命維持に必要な安静時の消費エネルギーです。／身体活動による消費：日常動作や運動は身体活動によるエネルギー消費に含まれます。／食事誘発性熱産生：食事誘発性熱産生は食事後に増えるエネルギー消費です。／エネルギー過剰：摂取が消費を上回り続けると余剰エネルギーが生じます。／エネルギー収支の均衡：エネルギー収支の均衡は長期的な体重維持の基本です。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "EXT-3-030",
    "grade": 3,
    "category": "体を育もう",
    "kind": "choice",
    "prompt": "【深掘り・収支の符号】ある日の摂取エネルギーが2300kcal、消費エネルギーが2100kcalだった。単純なエネルギー収支の計算結果はどれか。短期の体重変動まで断定しないこと。",
    "options": [
      "200kcalの不足",
      "400kcalの不足",
      "400kcalの余剰",
      "200kcalの余剰",
      "収支は0kcal"
    ],
    "answer": 3,
    "explanation": "収支＝摂取2300－消費2100＝＋200kcalで余剰です。ただしこの一日の差から体脂肪や体重の増加量を直接断定できません。水分や継続期間の影響も考えます。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "EXT-3-031",
    "grade": 3,
    "category": "体を育もう",
    "kind": "choice",
    "prompt": "【深掘り・運動時の体】階段を上るとき、太ももの筋肉が収縮して骨を動かす。心臓や肺の働きと区別し、意識的な身体運動を直接担う組織はどれか。",
    "options": [
      "腎臓",
      "肝臓",
      "肺",
      "骨格筋",
      "心臓"
    ],
    "answer": 3,
    "explanation": "骨格筋は腱を介して骨を動かし、運動の直接の力を生みます。心臓は循環、肺はガス交換が中心で、運動時に同時に働いても機能は異なります。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "EXT-3-032",
    "grade": 3,
    "category": "体を育もう",
    "kind": "choice",
    "prompt": "【応用・誤り発見】臓器の働きの説明資料を点検する。次の「用語―説明」の組合せのうち、誤っているものを1つ選びなさい。",
    "options": [
      "肝臓 — 多くの代謝や解毒、胆汁生成を担う器官",
      "腎臓 — 老廃物や余分な水分を尿として排出する器官",
      "骨格筋 — 筋肉の収縮に直接関係する主な器官",
      "肺 — 呼吸によって酸素と二酸化炭素を交換する主な器官",
      "心臓 — 呼吸によって酸素と二酸化炭素を交換する主な器官"
    ],
    "answer": 4,
    "explanation": "誤りは「心臓 — 呼吸によって酸素と二酸化炭素を交換する主な器官」。呼吸によって酸素と二酸化炭素を交換する主な器官は「肺」の説明です。「心臓」は「血液を全身に送り出すポンプとして働く器官」に当たります。残り4つの組合せは正しいものです。 【関連知識を比較】骨格筋：骨格筋は体を動かすための筋収縮を担います。／心臓：心臓は収縮と拡張によって血液を循環させます。／肺：肺では肺胞を通じてガス交換が行われます。／腎臓：腎臓は血液をろ過し尿を生成します。／肝臓：肝臓は栄養素の代謝、胆汁生成などを行います。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "EXT-3-033",
    "grade": 3,
    "category": "体を育もう",
    "kind": "choice",
    "prompt": "【応用・誤り発見】臓器の働きの食育クイズを校正する。次の「用語―説明」の組合せのうち、誤っているものを1つ選びなさい。",
    "options": [
      "肺 — 老廃物や余分な水分を尿として排出する器官",
      "骨格筋 — 筋肉の収縮に直接関係する主な器官",
      "腎臓 — 老廃物や余分な水分を尿として排出する器官",
      "心臓 — 血液を全身に送り出すポンプとして働く器官",
      "肝臓 — 多くの代謝や解毒、胆汁生成を担う器官"
    ],
    "answer": 0,
    "explanation": "誤りは「肺 — 老廃物や余分な水分を尿として排出する器官」。老廃物や余分な水分を尿として排出する器官は「腎臓」の説明です。「肺」は「呼吸によって酸素と二酸化炭素を交換する主な器官」に当たります。残り4つの組合せは正しいものです。 【関連知識を比較】骨格筋：骨格筋は体を動かすための筋収縮を担います。／心臓：心臓は収縮と拡張によって血液を循環させます。／肺：肺では肺胞を通じてガス交換が行われます。／腎臓：腎臓は血液をろ過し尿を生成します。／肝臓：肝臓は栄養素の代謝、胆汁生成などを行います。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "EXT-3-034",
    "grade": 3,
    "category": "体を育もう",
    "kind": "choice",
    "prompt": "【深掘り・体液調節】汗をかいて水分が不足したとき、血液から尿を作る過程で水分・電解質の排出を調節する器官はどれか。",
    "options": [
      "腎臓",
      "心臓",
      "肝臓",
      "骨格筋",
      "肺"
    ],
    "answer": 0,
    "explanation": "腎臓は血液をろ過し、必要な水分や電解質を再吸収して尿量などを調節します。肝臓は代謝・胆汁生成、肺はガス交換が中心で役割が異なります。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "EXT-3-035",
    "grade": 3,
    "category": "体を育もう",
    "kind": "choice",
    "prompt": "【応用・誤り発見】臓器の働きについて受講生がまとめた5組の説明で、誤っているものを1つ選びなさい。",
    "options": [
      "腎臓 — 老廃物や余分な水分を尿として排出する器官",
      "骨格筋 — 筋肉の収縮に直接関係する主な器官",
      "心臓 — 血液を全身に送り出すポンプとして働く器官",
      "肝臓 — 筋肉の収縮に直接関係する主な器官",
      "肺 — 呼吸によって酸素と二酸化炭素を交換する主な器官"
    ],
    "answer": 3,
    "explanation": "誤りは「肝臓 — 筋肉の収縮に直接関係する主な器官」。筋肉の収縮に直接関係する主な器官は「骨格筋」の説明です。「肝臓」は「多くの代謝や解毒、胆汁生成を担う器官」に当たります。残り4つの組合せは正しいものです。 【関連知識を比較】骨格筋：骨格筋は体を動かすための筋収縮を担います。／心臓：心臓は収縮と拡張によって血液を循環させます。／肺：肺では肺胞を通じてガス交換が行われます。／腎臓：腎臓は血液をろ過し尿を生成します。／肝臓：肝臓は栄養素の代謝、胆汁生成などを行います。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "EXT-3-036",
    "grade": 3,
    "category": "体を育もう",
    "kind": "choice",
    "prompt": "【応用・生活改善】間食を減らしたい人が、食べた時刻・空腹感・睡眠時間を1週間記録して習慣を振り返る。この方法はどれか。",
    "options": [
      "睡眠リズムの維持",
      "セルフモニタリング",
      "座位時間の中断",
      "日常活動量の増加",
      "継続可能な食習慣"
    ],
    "answer": 1,
    "explanation": "セルフモニタリングは日々の行動や状況を記録・把握する方法です。記録を取る行為と、改善のための具体的な行動を区別します。 【復習ポイント：同分野の概念】セルフモニタリング：セルフモニタリングは自分の生活行動を記録して振り返る方法です。／睡眠リズムの維持：一定の睡眠リズムは生活の規則性を支えます。／座位時間の中断：座りっぱなしを避け、適宜体を動かす工夫です。／日常活動量の増加：日常生活の中で身体活動量を増やす例です。／継続可能な食習慣：極端な制限より継続できる習慣づくりが重要です。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "EXT-3-037",
    "grade": 3,
    "category": "体を育もう",
    "kind": "choice",
    "prompt": "【深掘り・生活改善】睡眠時間は同じでも、平日は深夜・休日は昼まで寝る習慣が続く。まず改善する指標として、就寝・起床時刻の規則性に注目する考え方はどれか。",
    "options": [
      "睡眠リズムの維持",
      "日常活動量の増加",
      "セルフモニタリング",
      "座位時間の中断",
      "継続可能な食習慣"
    ],
    "answer": 0,
    "explanation": "睡眠リズムの維持には就寝・起床時刻をなるべく一定に保つことが含まれます。食事記録だけのセルフモニタリングとは異なり、生活時間そのものを整える対策です。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "EXT-3-038",
    "grade": 3,
    "category": "体を育もう",
    "kind": "choice",
    "prompt": "【深掘り・身体活動】一日の歩数は十分でも、仕事中に長時間座りっぱなしになる人がいる。まとまった運動とは別に、勤務中に追加したい工夫はどれか。",
    "options": [
      "睡眠リズムの維持",
      "継続可能な食習慣",
      "日常活動量の増加",
      "セルフモニタリング",
      "座位時間の中断"
    ],
    "answer": 4,
    "explanation": "座位時間の中断は、長い座位を途中で区切って立つ・歩くなどの行動です。日常活動量の増加と関連しますが、「座り続ける時間」を断つことに焦点があります。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "EXT-3-039",
    "grade": 3,
    "category": "体を育もう",
    "kind": "choice",
    "prompt": "【応用・組合せ】健康的な生活習慣を復習するため、5組の「用語―説明」を照合する。正しいものを1つ選びなさい。",
    "options": [
      "日常活動量の増加 — 階段利用や徒歩移動を日常に組み込む工夫",
      "継続可能な食習慣 — 食事や運動の記録を継続し、行動の傾向を把握する方法",
      "睡眠リズムの維持 — 長時間座り続ける間に立って体を動かす行動",
      "セルフモニタリング — 就寝と起床の時刻をなるべく一定に保つ行動",
      "座位時間の中断 — 階段利用や徒歩移動を日常に組み込む工夫"
    ],
    "answer": 0,
    "explanation": "正解は「日常活動量の増加 — 階段利用や徒歩移動を日常に組み込む工夫」。ほかの選択肢は用語と説明が入れ替わっています。名称を暗記するだけでなく、それぞれの働きや特徴を比較して覚えましょう。 【関連知識を比較】セルフモニタリング：セルフモニタリングは自分の生活行動を記録して振り返る方法です。／睡眠リズムの維持：一定の睡眠リズムは生活の規則性を支えます。／座位時間の中断：座りっぱなしを避け、適宜体を動かす工夫です。／日常活動量の増加：日常生活の中で身体活動量を増やす例です。／継続可能な食習慣：極端な制限より継続できる習慣づくりが重要です。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "EXT-3-040",
    "grade": 3,
    "category": "体を育もう",
    "kind": "choice",
    "prompt": "【応用・誤り発見】健康的な生活習慣について受講生がまとめた5組の説明で、誤っているものを1つ選びなさい。",
    "options": [
      "日常活動量の増加 — 階段利用や徒歩移動を日常に組み込む工夫",
      "睡眠リズムの維持 — 就寝と起床の時刻をなるべく一定に保つ行動",
      "座位時間の中断 — 長時間座り続ける間に立って体を動かす行動",
      "継続可能な食習慣 — 食事や運動の記録を継続し、行動の傾向を把握する方法",
      "セルフモニタリング — 食事や運動の記録を継続し、行動の傾向を把握する方法"
    ],
    "answer": 3,
    "explanation": "誤りは「継続可能な食習慣 — 食事や運動の記録を継続し、行動の傾向を把握する方法」。食事や運動の記録を継続し、行動の傾向を把握する方法は「セルフモニタリング」の説明です。「継続可能な食習慣」は「無理な減量を避け、適正な食生活を続ける取り組み」に当たります。残り4つの組合せは正しいものです。 【関連知識を比較】セルフモニタリング：セルフモニタリングは自分の生活行動を記録して振り返る方法です。／睡眠リズムの維持：一定の睡眠リズムは生活の規則性を支えます。／座位時間の中断：座りっぱなしを避け、適宜体を動かす工夫です。／日常活動量の増加：日常生活の中で身体活動量を増やす例です。／継続可能な食習慣：極端な制限より継続できる習慣づくりが重要です。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "EXT-3-041",
    "grade": 3,
    "category": "体を育もう",
    "kind": "choice",
    "prompt": "【深掘り・食品選択】魚をほとんど食べない人が、青魚を献立に取り入れる利点を調べる。魚油に多いn-3系脂肪酸として注目する成分はどれか。",
    "options": [
      "たんぱく質",
      "DHA・EPA",
      "食物繊維",
      "ビタミンC",
      "カルシウム"
    ],
    "answer": 1,
    "explanation": "DHA・EPAは魚油に多く含まれるn-3系脂肪酸です。カルシウムやビタミンCも大切ですが、魚油という食品の特徴と脂肪酸の種類を結び付けて考えます。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "EXT-3-042",
    "grade": 3,
    "category": "体を育もう",
    "kind": "choice",
    "prompt": "【応用・誤り発見】食品の栄養特性の説明資料を点検する。次の「用語―説明」の組合せのうち、誤っているものを1つ選びなさい。",
    "options": [
      "ビタミンC — 果物や野菜に含まれる水溶性ビタミンとして代表的なもの",
      "DHA・EPA — 魚の脂質に比較的多く含まれることがあるn-3系脂肪酸",
      "カルシウム — 乳製品が供給源となる骨に重要なミネラル",
      "食物繊維 — 全粒穀物や豆類に含まれ、消化管の健康に役立つ成分",
      "たんぱく質 — 果物や野菜に含まれる水溶性ビタミンとして代表的なもの"
    ],
    "answer": 4,
    "explanation": "誤りは「たんぱく質 — 果物や野菜に含まれる水溶性ビタミンとして代表的なもの」。果物や野菜に含まれる水溶性ビタミンとして代表的なものは「ビタミンC」の説明です。「たんぱく質」は「大豆製品に含まれる植物性の主な栄養素」に当たります。残り4つの組合せは正しいものです。 【関連知識を比較】DHA・EPA：DHAやEPAは魚油に含まれるn-3系脂肪酸です。／たんぱく質：大豆は植物性たんぱく質の供給源です。／ビタミンC：ビタミンCは果物や野菜から摂ることができます。／カルシウム：牛乳やヨーグルトにはカルシウムが含まれます。／食物繊維：全粒穀物や豆類は食物繊維の供給源です。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "EXT-3-043",
    "grade": 3,
    "category": "体を育もう",
    "kind": "choice",
    "prompt": "【応用・誤り発見】食品の栄養特性の食育クイズを校正する。次の「用語―説明」の組合せのうち、誤っているものを1つ選びなさい。",
    "options": [
      "DHA・EPA — 魚の脂質に比較的多く含まれることがあるn-3系脂肪酸",
      "食物繊維 — 全粒穀物や豆類に含まれ、消化管の健康に役立つ成分",
      "カルシウム — 乳製品が供給源となる骨に重要なミネラル",
      "ビタミンC — 乳製品が供給源となる骨に重要なミネラル",
      "たんぱく質 — 大豆製品に含まれる植物性の主な栄養素"
    ],
    "answer": 3,
    "explanation": "誤りは「ビタミンC — 乳製品が供給源となる骨に重要なミネラル」。乳製品が供給源となる骨に重要なミネラルは「カルシウム」の説明です。「ビタミンC」は「果物や野菜に含まれる水溶性ビタミンとして代表的なもの」に当たります。残り4つの組合せは正しいものです。 【関連知識を比較】DHA・EPA：DHAやEPAは魚油に含まれるn-3系脂肪酸です。／たんぱく質：大豆は植物性たんぱく質の供給源です。／ビタミンC：ビタミンCは果物や野菜から摂ることができます。／カルシウム：牛乳やヨーグルトにはカルシウムが含まれます。／食物繊維：全粒穀物や豆類は食物繊維の供給源です。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "EXT-3-044",
    "grade": 3,
    "category": "体を育もう",
    "kind": "choice",
    "prompt": "【応用・組合せ】食品の栄養特性を復習するため、5組の「用語―説明」を照合する。正しいものを1つ選びなさい。",
    "options": [
      "食物繊維 — 魚の脂質に比較的多く含まれることがあるn-3系脂肪酸",
      "たんぱく質 — 果物や野菜に含まれる水溶性ビタミンとして代表的なもの",
      "DHA・EPA — 大豆製品に含まれる植物性の主な栄養素",
      "ビタミンC — 乳製品が供給源となる骨に重要なミネラル",
      "カルシウム — 乳製品が供給源となる骨に重要なミネラル"
    ],
    "answer": 4,
    "explanation": "正解は「カルシウム — 乳製品が供給源となる骨に重要なミネラル」。ほかの選択肢は用語と説明が入れ替わっています。名称を暗記するだけでなく、それぞれの働きや特徴を比較して覚えましょう。 【関連知識を比較】DHA・EPA：DHAやEPAは魚油に含まれるn-3系脂肪酸です。／たんぱく質：大豆は植物性たんぱく質の供給源です。／ビタミンC：ビタミンCは果物や野菜から摂ることができます。／カルシウム：牛乳やヨーグルトにはカルシウムが含まれます。／食物繊維：全粒穀物や豆類は食物繊維の供給源です。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "EXT-3-045",
    "grade": 3,
    "category": "体を育もう",
    "kind": "choice",
    "prompt": "【深掘り・献立の比較】白米だけの主食を、全粒穀物や豆を組み合わせた主食へ替えたとき、便通や腸内環境の観点から増やしやすい食品成分はどれか。",
    "options": [
      "カルシウム",
      "食物繊維",
      "DHA・EPA",
      "たんぱく質",
      "ビタミンC"
    ],
    "answer": 1,
    "explanation": "全粒穀物や豆類は食物繊維を含みます。たんぱく質やミネラルも摂れますが、精製度と腸内環境・便通の関連を考えると食物繊維が直接の注目点です。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "EXT-3-046",
    "grade": 3,
    "category": "体を育もう",
    "kind": "choice",
    "prompt": "【応用・脂質】植物油を使ったドレッシングを選ぶ際、一般に液状の植物油に比較的多い脂肪酸として適切なのはどれか。",
    "options": [
      "不飽和脂肪酸",
      "飽和脂肪酸",
      "必須脂肪酸だけ",
      "コレステロール",
      "酸化した脂肪酸だけ"
    ],
    "answer": 0,
    "explanation": "植物油には一般に不飽和脂肪酸が比較的多く含まれます。ただしすべてが必須脂肪酸とは限りません。 【復習ポイント：同分野の概念】不飽和脂肪酸：植物油は一般に不飽和脂肪酸を多く含みます。／飽和脂肪酸：バターなどには飽和脂肪酸が比較的多く含まれます。／コレステロール：コレステロールは細胞膜や一部ホルモンの材料です。／必須脂肪酸：リノール酸やα-リノレン酸などは必須脂肪酸です。／酸化：油脂の酸化は品質低下の一因になります。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "EXT-3-047",
    "grade": 3,
    "category": "体を育もう",
    "kind": "choice",
    "prompt": "【深掘り・油脂の比較】バターと一般的な液状植物油を同じ量使った。脂肪酸の構成を比較するとき、バターに相対的に多く含まれる種類はどれか。",
    "options": [
      "必須脂肪酸",
      "不飽和脂肪酸",
      "酸化",
      "コレステロール",
      "飽和脂肪酸"
    ],
    "answer": 4,
    "explanation": "バターには一般に飽和脂肪酸が比較的多く含まれます。ただし食品ごとに組成は異なり、植物油にも飽和脂肪酸があり、動物性油脂にも不飽和脂肪酸があります。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "EXT-3-048",
    "grade": 3,
    "category": "体を育もう",
    "kind": "choice",
    "prompt": "【応用・誤り発見】脂質の性質の食育クイズを校正する。次の「用語―説明」の組合せのうち、誤っているものを1つ選びなさい。",
    "options": [
      "酸化 — 油脂が空気中の酸素などで変質する現象",
      "不飽和脂肪酸 — 常温で液体のことが多い植物油に比較的多い脂肪酸の種類",
      "コレステロール — 体内で作れず食事から摂る必要がある脂肪酸の総称",
      "飽和脂肪酸 — バターなどの動物性脂肪に比較的多い脂肪酸の種類",
      "必須脂肪酸 — 体内で作れず食事から摂る必要がある脂肪酸の総称"
    ],
    "answer": 2,
    "explanation": "誤りは「コレステロール — 体内で作れず食事から摂る必要がある脂肪酸の総称」。体内で作れず食事から摂る必要がある脂肪酸の総称は「必須脂肪酸」の説明です。「コレステロール」は「細胞膜の構成成分で、体内でも合成される脂質」に当たります。残り4つの組合せは正しいものです。 【関連知識を比較】不飽和脂肪酸：植物油は一般に不飽和脂肪酸を多く含みます。／飽和脂肪酸：バターなどには飽和脂肪酸が比較的多く含まれます。／コレステロール：コレステロールは細胞膜や一部ホルモンの材料です。／必須脂肪酸：リノール酸やα-リノレン酸などは必須脂肪酸です。／酸化：油脂の酸化は品質低下の一因になります。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "EXT-3-049",
    "grade": 3,
    "category": "体を育もう",
    "kind": "choice",
    "prompt": "【応用・組合せ】脂質の性質を復習するため、5組の「用語―説明」を照合する。正しいものを1つ選びなさい。",
    "options": [
      "コレステロール — 体内で作れず食事から摂る必要がある脂肪酸の総称",
      "酸化 — 常温で液体のことが多い植物油に比較的多い脂肪酸の種類",
      "必須脂肪酸 — 体内で作れず食事から摂る必要がある脂肪酸の総称",
      "不飽和脂肪酸 — バターなどの動物性脂肪に比較的多い脂肪酸の種類",
      "飽和脂肪酸 — 細胞膜の構成成分で、体内でも合成される脂質"
    ],
    "answer": 2,
    "explanation": "正解は「必須脂肪酸 — 体内で作れず食事から摂る必要がある脂肪酸の総称」。ほかの選択肢は用語と説明が入れ替わっています。名称を暗記するだけでなく、それぞれの働きや特徴を比較して覚えましょう。 【関連知識を比較】不飽和脂肪酸：植物油は一般に不飽和脂肪酸を多く含みます。／飽和脂肪酸：バターなどには飽和脂肪酸が比較的多く含まれます。／コレステロール：コレステロールは細胞膜や一部ホルモンの材料です。／必須脂肪酸：リノール酸やα-リノレン酸などは必須脂肪酸です。／酸化：油脂の酸化は品質低下の一因になります。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "EXT-3-050",
    "grade": 3,
    "category": "体を育もう",
    "kind": "choice",
    "prompt": "【深掘り・品質変化】開封した食用油を透明な容器のまま高温・日光下で長く保存した。においが変わるような劣化に関係する化学的変化はどれか。",
    "options": [
      "飽和脂肪酸",
      "必須脂肪酸",
      "コレステロール",
      "不飽和脂肪酸",
      "酸化"
    ],
    "answer": 4,
    "explanation": "油脂の酸化は酸素・光・熱などの影響で進み、風味や品質を損なうことがあります。コレステロールは脂質の一種で、酸化という変化の名称とは異なります。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "EXT-3-051",
    "grade": 3,
    "category": "体を育もう",
    "kind": "choice",
    "prompt": "【応用・数値】成人の体重が56kg、身長が1.60mの場合、BMIの概数として適切なものはどれか。身長はmに直して計算する。",
    "options": [
      "21.9",
      "18.0",
      "20.0",
      "24.5",
      "28.0"
    ],
    "answer": 0,
    "explanation": "BMI＝56÷(1.60×1.60)＝21.875で、約21.9です。体格の参考指標であり、これだけで栄養状態が決まるわけではありません。 【復習ポイント：同分野の概念】BMI：BMIは体格の目安として使用されます。／血糖値：血糖値は血中のブドウ糖濃度を示します。／ヘモグロビン：ヘモグロビンは酸素の運搬を担います。／血圧：血圧は動脈内の圧力の指標です。／発汗：発汗は体温調節に役立ちますが水分も失われます。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "EXT-3-052",
    "grade": 3,
    "category": "体を育もう",
    "kind": "choice",
    "prompt": "【深掘り・BMI】身長1.65m、体重64kgの成人のBMIとして最も近い数値はどれか。BMI＝体重(kg)÷身長(m)の2乗とする。",
    "options": [
      "19.4",
      "21.2",
      "25.8",
      "28.0",
      "23.5"
    ],
    "answer": 4,
    "explanation": "BMI＝64÷(1.65×1.65)＝64÷2.7225≒23.51なので約23.5です。身長をcmのまま使ったり、単に身長で割ったりしないようにします。BMIだけで健康状態の全ては評価できません。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "EXT-3-053",
    "grade": 3,
    "category": "体を育もう",
    "kind": "choice",
    "prompt": "【応用・誤り発見】体の状態を示す指標の食育クイズを校正する。次の「用語―説明」の組合せのうち、誤っているものを1つ選びなさい。",
    "options": [
      "発汗 — 体温や運動、環境に応じて体から水分が失われる現象",
      "血圧 — 心臓が血液を押し出す力と血管抵抗などを反映する測定値",
      "BMI — 体重kgを身長mの二乗で割って計算する指数",
      "血糖値 — 血液中のブドウ糖の濃度を表す指標",
      "ヘモグロビン — 心臓が血液を押し出す力と血管抵抗などを反映する測定値"
    ],
    "answer": 4,
    "explanation": "誤りは「ヘモグロビン — 心臓が血液を押し出す力と血管抵抗などを反映する測定値」。心臓が血液を押し出す力と血管抵抗などを反映する測定値は「血圧」の説明です。「ヘモグロビン」は「血液中の赤血球に含まれ、酸素を運ぶたんぱく質」に当たります。残り4つの組合せは正しいものです。 【関連知識を比較】BMI：BMIは体格の目安として使用されます。／血糖値：血糖値は血中のブドウ糖濃度を示します。／ヘモグロビン：ヘモグロビンは酸素の運搬を担います。／血圧：血圧は動脈内の圧力の指標です。／発汗：発汗は体温調節に役立ちますが水分も失われます。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "EXT-3-054",
    "grade": 3,
    "category": "体を育もう",
    "kind": "choice",
    "prompt": "【深掘り・健診の読み方】健康診断で「上の値」と「下の値」が測定された。心臓の拍動と動脈内の圧力に直接関係する指標はどれか。",
    "options": [
      "ヘモグロビン",
      "血糖値",
      "BMI",
      "発汗",
      "血圧"
    ],
    "answer": 4,
    "explanation": "血圧は動脈内の圧力で、一般に収縮期と拡張期の値を記録します。血糖値は糖の濃度、ヘモグロビンは赤血球のたんぱく質で、同じ健診項目でも意味が異なります。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "EXT-3-055",
    "grade": 3,
    "category": "体を育もう",
    "kind": "choice",
    "prompt": "【応用・誤り発見】体の状態を示す指標について受講生がまとめた5組の説明で、誤っているものを1つ選びなさい。",
    "options": [
      "血圧 — 心臓が血液を押し出す力と血管抵抗などを反映する測定値",
      "ヘモグロビン — 血液中の赤血球に含まれ、酸素を運ぶたんぱく質",
      "血糖値 — 血液中のブドウ糖の濃度を表す指標",
      "発汗 — 体重kgを身長mの二乗で割って計算する指数",
      "BMI — 体重kgを身長mの二乗で割って計算する指数"
    ],
    "answer": 3,
    "explanation": "誤りは「発汗 — 体重kgを身長mの二乗で割って計算する指数」。体重kgを身長mの二乗で割って計算する指数は「BMI」の説明です。「発汗」は「体温や運動、環境に応じて体から水分が失われる現象」に当たります。残り4つの組合せは正しいものです。 【関連知識を比較】BMI：BMIは体格の目安として使用されます。／血糖値：血糖値は血中のブドウ糖濃度を示します。／ヘモグロビン：ヘモグロビンは酸素の運搬を担います。／血圧：血圧は動脈内の圧力の指標です。／発汗：発汗は体温調節に役立ちますが水分も失われます。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "EXT-3-056",
    "grade": 3,
    "category": "体を育もう",
    "kind": "choice",
    "prompt": "【深掘り・運動前後】夏の運動では発汗量が多く、のどの渇きだけを目安にすると補給が遅れることがある。運動前後や途中に状況に応じて行う基本行動はどれか。",
    "options": [
      "水分補給",
      "熱中症",
      "適切な休息",
      "ナトリウム",
      "脱水"
    ],
    "answer": 0,
    "explanation": "水分補給は活動量・温度・発汗などに応じて行います。汗で水分と電解質が失われるため、長時間大量に汗をかく場合は電解質の補給も考えます。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "EXT-3-057",
    "grade": 3,
    "category": "体を育もう",
    "kind": "choice",
    "prompt": "【応用・誤り発見】水分と暑さへの対応の説明資料を点検する。次の「用語―説明」の組合せのうち、誤っているものを1つ選びなさい。",
    "options": [
      "熱中症 — 暑さの中で体温調節がうまく働かず体調を崩す状態",
      "脱水 — 暑さの中で体温調節がうまく働かず体調を崩す状態",
      "水分補給 — 水を飲み、体内に必要な水分を取り入れる行動",
      "適切な休息 — 体調に合わせて作業や運動を中断する行動",
      "ナトリウム — 水分とともに発汗で失われる代表的な電解質"
    ],
    "answer": 1,
    "explanation": "誤りは「脱水 — 暑さの中で体温調節がうまく働かず体調を崩す状態」。暑さの中で体温調節がうまく働かず体調を崩す状態は「熱中症」の説明です。「脱水」は「汗や下痢などで体液が不足する状態」に当たります。残り4つの組合せは正しいものです。 【関連知識を比較】水分補給：水分補給は失われた体液を補う基本行動です。／脱水：脱水は体内の水分が不足した状態です。／熱中症：熱中症は高温環境などで起こる健康障害の総称です。／ナトリウム：汗にはナトリウムが含まれます。／適切な休息：休息は暑熱環境下の体調管理に重要です。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "EXT-3-058",
    "grade": 3,
    "category": "体を育もう",
    "kind": "choice",
    "prompt": "【応用・暑熱環境】炎天下で運動している人が頭痛やめまいを訴え、顔色も悪い。最も適切な考え方はどれか。",
    "options": [
      "脱水ではないと決めつけて運動を続ける",
      "糖質が不足しただけと判断して高温環境にとどまる",
      "水分だけを一度に大量摂取すれば必ず解決すると考える",
      "熱中症を疑い、活動を中止して涼しい所へ移動し、状態に応じて救急対応を検討する",
      "熱中症ではなく運動不足だと判断して運動量を増やす"
    ],
    "answer": 3,
    "explanation": "暑熱環境で頭痛・めまいなどがある場合は熱中症を疑い、活動を止めて冷却や適切な対応を行います。重い症状や改善が乏しい場合は医療につなぎます。 【復習ポイント：同分野の概念】水分補給：水分補給は失われた体液を補う基本行動です。／脱水：脱水は体内の水分が不足した状態です。／熱中症：熱中症は高温環境などで起こる健康障害の総称です。／ナトリウム：汗にはナトリウムが含まれます。／適切な休息：休息は暑熱環境下の体調管理に重要です。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "EXT-3-059",
    "grade": 3,
    "category": "体を育もう",
    "kind": "choice",
    "prompt": "【深掘り・発汗と電解質】長時間汗をかいた後、水分だけでなく塩分の補給も話題になる。細胞外液に比較的多く、発汗で失われる主要な電解質はどれか。",
    "options": [
      "適切な休息",
      "脱水",
      "熱中症",
      "ナトリウム",
      "水分補給"
    ],
    "answer": 3,
    "explanation": "ナトリウムは細胞外液の主要な電解質で、汗からも失われます。水分だけで一律に対処するのではなく発汗量や状態を考えます。ただし過剰な食塩摂取を勧める意味ではありません。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "EXT-3-060",
    "grade": 3,
    "category": "体を育もう",
    "kind": "choice",
    "prompt": "【応用・誤り発見】水分と暑さへの対応について受講生がまとめた5組の説明で、誤っているものを1つ選びなさい。",
    "options": [
      "脱水 — 汗や下痢などで体液が不足する状態",
      "熱中症 — 暑さの中で体温調節がうまく働かず体調を崩す状態",
      "適切な休息 — 水を飲み、体内に必要な水分を取り入れる行動",
      "水分補給 — 水を飲み、体内に必要な水分を取り入れる行動",
      "ナトリウム — 水分とともに発汗で失われる代表的な電解質"
    ],
    "answer": 2,
    "explanation": "誤りは「適切な休息 — 水を飲み、体内に必要な水分を取り入れる行動」。水を飲み、体内に必要な水分を取り入れる行動は「水分補給」の説明です。「適切な休息」は「体調に合わせて作業や運動を中断する行動」に当たります。残り4つの組合せは正しいものです。 【関連知識を比較】水分補給：水分補給は失われた体液を補う基本行動です。／脱水：脱水は体内の水分が不足した状態です。／熱中症：熱中症は高温環境などで起こる健康障害の総称です。／ナトリウム：汗にはナトリウムが含まれます。／適切な休息：休息は暑熱環境下の体調管理に重要です。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "EXT-3-061",
    "grade": 3,
    "category": "知を育もう",
    "kind": "choice",
    "prompt": "【深掘り・食文化】正月の料理には黒豆や数の子などに願いを託す習慣がある。個別の品目ではなく、正月を祝う料理全体を表すのはどれか。",
    "options": [
      "月見団子",
      "おせち料理",
      "ちまき",
      "炒り大豆",
      "かぼちゃ"
    ],
    "answer": 1,
    "explanation": "おせち料理には正月の祝いと健康・豊作などへの願いが込められています。節分の炒り大豆や中秋の月見団子など、行事ごとに料理が異なる点を押さえます。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "EXT-3-062",
    "grade": 3,
    "category": "知を育もう",
    "kind": "choice",
    "prompt": "【応用・誤り発見】日本の行事食の説明資料を点検する。次の「用語―説明」の組合せのうち、誤っているものを1つ選びなさい。",
    "options": [
      "おせち料理 — 正月に家族で食べる、祝いの意味を持つ料理の総称",
      "月見団子 — 月見の時期に供えることが多い団子",
      "かぼちゃ — 冬至に食べる風習がよく知られる野菜",
      "ちまき — 端午の節句に食べることが多い、笹などで包んだ餅",
      "炒り大豆 — 端午の節句に食べることが多い、笹などで包んだ餅"
    ],
    "answer": 4,
    "explanation": "誤りは「炒り大豆 — 端午の節句に食べることが多い、笹などで包んだ餅」。端午の節句に食べることが多い、笹などで包んだ餅は「ちまき」の説明です。「炒り大豆」は「節分の時期に厄除けを願ってまくもの」に当たります。残り4つの組合せは正しいものです。 【関連知識を比較】おせち料理：おせち料理には正月を祝う意味が込められています。／炒り大豆：節分の豆まきには一般に炒り大豆が用いられます。／ちまき：ちまきは端午の節句に食べられる行事食の一つです。／月見団子：月見団子は中秋の名月の供え物として知られます。／かぼちゃ：冬至にはかぼちゃを食べる風習があります。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "EXT-3-063",
    "grade": 3,
    "category": "知を育もう",
    "kind": "choice",
    "prompt": "【深掘り・年中行事】五月の節句に子どもの健やかな成長を願い、笹などで包んだ餅を用意する地域がある。料理と行事の結び付きを考えて選びなさい。",
    "options": [
      "おせち料理",
      "炒り大豆",
      "月見団子",
      "かぼちゃ",
      "ちまき"
    ],
    "answer": 4,
    "explanation": "ちまきは端午の節句に食べられる行事食の一つです。地域により柏餅などもあります。月見団子は中秋の名月、炒り大豆は節分という対応を区別します。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "EXT-3-064",
    "grade": 3,
    "category": "知を育もう",
    "kind": "choice",
    "prompt": "【応用・組合せ】日本の行事食を復習するため、5組の「用語―説明」を照合する。正しいものを1つ選びなさい。",
    "options": [
      "月見団子 — 月見の時期に供えることが多い団子",
      "かぼちゃ — 正月に家族で食べる、祝いの意味を持つ料理の総称",
      "炒り大豆 — 端午の節句に食べることが多い、笹などで包んだ餅",
      "ちまき — 月見の時期に供えることが多い団子",
      "おせち料理 — 節分の時期に厄除けを願ってまくもの"
    ],
    "answer": 0,
    "explanation": "正解は「月見団子 — 月見の時期に供えることが多い団子」。ほかの選択肢は用語と説明が入れ替わっています。名称を暗記するだけでなく、それぞれの働きや特徴を比較して覚えましょう。 【関連知識を比較】おせち料理：おせち料理には正月を祝う意味が込められています。／炒り大豆：節分の豆まきには一般に炒り大豆が用いられます。／ちまき：ちまきは端午の節句に食べられる行事食の一つです。／月見団子：月見団子は中秋の名月の供え物として知られます。／かぼちゃ：冬至にはかぼちゃを食べる風習があります。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "EXT-3-065",
    "grade": 3,
    "category": "知を育もう",
    "kind": "choice",
    "prompt": "【応用・誤り発見】日本の行事食について受講生がまとめた5組の説明で、誤っているものを1つ選びなさい。",
    "options": [
      "ちまき — 端午の節句に食べることが多い、笹などで包んだ餅",
      "かぼちゃ — 正月に家族で食べる、祝いの意味を持つ料理の総称",
      "月見団子 — 月見の時期に供えることが多い団子",
      "炒り大豆 — 節分の時期に厄除けを願ってまくもの",
      "おせち料理 — 正月に家族で食べる、祝いの意味を持つ料理の総称"
    ],
    "answer": 1,
    "explanation": "誤りは「かぼちゃ — 正月に家族で食べる、祝いの意味を持つ料理の総称」。正月に家族で食べる、祝いの意味を持つ料理の総称は「おせち料理」の説明です。「かぼちゃ」は「冬至に食べる風習がよく知られる野菜」に当たります。残り4つの組合せは正しいものです。 【関連知識を比較】おせち料理：おせち料理には正月を祝う意味が込められています。／炒り大豆：節分の豆まきには一般に炒り大豆が用いられます。／ちまき：ちまきは端午の節句に食べられる行事食の一つです。／月見団子：月見団子は中秋の名月の供え物として知られます。／かぼちゃ：冬至にはかぼちゃを食べる風習があります。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "EXT-3-066",
    "grade": 3,
    "category": "知を育もう",
    "kind": "choice",
    "prompt": "【深掘り・郷土料理】秋田で米をつぶして棒に巻き付けて焼き、鍋にも使う料理がある。小麦粉の平打ち麺を煮込む山梨の料理と区別すると、これはどれか。",
    "options": [
      "きりたんぽ",
      "ちゃんちゃん焼き",
      "ほうとう",
      "ゴーヤーチャンプルー",
      "水炊き"
    ],
    "answer": 0,
    "explanation": "きりたんぽは秋田県の米を使う郷土料理です。一方、ほうとうは山梨県の小麦粉を使う料理です。土地と原材料・調理法を同時に考えることが決め手です。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "EXT-3-067",
    "grade": 3,
    "category": "知を育もう",
    "kind": "choice",
    "prompt": "【深掘り・原材料と地域】小麦粉から作った幅広い麺を、かぼちゃなどの野菜とともに煮る山梨県の料理はどれか。米を使う秋田の料理とは違う。",
    "options": [
      "ほうとう",
      "きりたんぽ",
      "ゴーヤーチャンプルー",
      "水炊き",
      "ちゃんちゃん焼き"
    ],
    "answer": 0,
    "explanation": "ほうとうは山梨県の郷土料理で、麺を野菜と煮込むのが特徴です。きりたんぽは米、ちゃんちゃん焼きは鮭を主に使うため、材料でも見分けられます。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "EXT-3-068",
    "grade": 3,
    "category": "知を育もう",
    "kind": "choice",
    "prompt": "【応用・郷土料理】地域と料理の組合せとして適切なのはどれか。",
    "options": [
      "秋田県 — ほうとう",
      "山梨県 — きりたんぽ",
      "福岡県 — 水炊き",
      "沖縄県 — ちゃんちゃん焼き",
      "北海道 — ゴーヤーチャンプルー"
    ],
    "answer": 2,
    "explanation": "水炊きは福岡県、ほうとうは山梨県、きりたんぽは秋田県、ちゃんちゃん焼きは北海道、ゴーヤーチャンプルーは沖縄県の料理として知られます。 【復習ポイント：同分野の概念】きりたんぽ：きりたんぽは秋田県の郷土料理として知られます。／ほうとう：ほうとうは山梨県の郷土料理です。／水炊き：水炊きは福岡県で親しまれる鍋料理です。／ちゃんちゃん焼き：ちゃんちゃん焼きは鮭と野菜を用いる料理です。／ゴーヤーチャンプルー：ゴーヤーチャンプルーは沖縄県で親しまれる炒め物です。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "EXT-3-069",
    "grade": 3,
    "category": "知を育もう",
    "kind": "choice",
    "prompt": "【応用・組合せ】各地の郷土料理を復習するため、5組の「用語―説明」を照合する。正しいものを1つ選びなさい。",
    "options": [
      "ゴーヤーチャンプルー — 秋田県の郷土料理として知られる米をつぶして棒状にした食品",
      "水炊き — 北海道の郷土料理として知られる鮭と野菜を味噌味で焼く料理",
      "きりたんぽ — 山梨県の郷土料理で、幅広い麺を野菜と煮込む料理",
      "ちゃんちゃん焼き — 北海道の郷土料理として知られる鮭と野菜を味噌味で焼く料理",
      "ほうとう — 福岡県の郷土料理で、鶏肉や野菜などを使う鍋料理"
    ],
    "answer": 3,
    "explanation": "正解は「ちゃんちゃん焼き — 北海道の郷土料理として知られる鮭と野菜を味噌味で焼く料理」。ほかの選択肢は用語と説明が入れ替わっています。名称を暗記するだけでなく、それぞれの働きや特徴を比較して覚えましょう。 【関連知識を比較】きりたんぽ：きりたんぽは秋田県の郷土料理として知られます。／ほうとう：ほうとうは山梨県の郷土料理です。／水炊き：水炊きは福岡県で親しまれる鍋料理です。／ちゃんちゃん焼き：ちゃんちゃん焼きは鮭と野菜を用いる料理です。／ゴーヤーチャンプルー：ゴーヤーチャンプルーは沖縄県で親しまれる炒め物です。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "EXT-3-070",
    "grade": 3,
    "category": "知を育もう",
    "kind": "choice",
    "prompt": "【応用・誤り発見】各地の郷土料理について受講生がまとめた5組の説明で、誤っているものを1つ選びなさい。",
    "options": [
      "きりたんぽ — 秋田県の郷土料理として知られる米をつぶして棒状にした食品",
      "ゴーヤーチャンプルー — 秋田県の郷土料理として知られる米をつぶして棒状にした食品",
      "ほうとう — 山梨県の郷土料理で、幅広い麺を野菜と煮込む料理",
      "ちゃんちゃん焼き — 北海道の郷土料理として知られる鮭と野菜を味噌味で焼く料理",
      "水炊き — 福岡県の郷土料理で、鶏肉や野菜などを使う鍋料理"
    ],
    "answer": 1,
    "explanation": "誤りは「ゴーヤーチャンプルー — 秋田県の郷土料理として知られる米をつぶして棒状にした食品」。秋田県の郷土料理として知られる米をつぶして棒状にした食品は「きりたんぽ」の説明です。「ゴーヤーチャンプルー」は「沖縄県の料理で、ゴーヤーと豆腐などを炒める料理」に当たります。残り4つの組合せは正しいものです。 【関連知識を比較】きりたんぽ：きりたんぽは秋田県の郷土料理として知られます。／ほうとう：ほうとうは山梨県の郷土料理です。／水炊き：水炊きは福岡県で親しまれる鍋料理です。／ちゃんちゃん焼き：ちゃんちゃん焼きは鮭と野菜を用いる料理です。／ゴーヤーチャンプルー：ゴーヤーチャンプルーは沖縄県で親しまれる炒め物です。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "EXT-3-071",
    "grade": 3,
    "category": "知を育もう",
    "kind": "choice",
    "prompt": "【深掘り・調理の熱移動】薄切りの野菜をフライパンで少量の油とともに短時間で加熱したい。煮汁に浸さず、油と鍋面から熱を伝える調理法はどれか。",
    "options": [
      "煮る",
      "炒める",
      "揚げる",
      "蒸す",
      "焼く"
    ],
    "answer": 1,
    "explanation": "炒める調理は少量の油を使って材料を動かしながら加熱します。煮るは液体、蒸すは水蒸気、揚げるは多量の油が主な熱媒体となります。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "EXT-3-072",
    "grade": 3,
    "category": "知を育もう",
    "kind": "choice",
    "prompt": "【応用・誤り発見】基本的な調理方法の説明資料を点検する。次の「用語―説明」の組合せのうち、誤っているものを1つ選びなさい。",
    "options": [
      "炒める — 少量の油でフライパンなどを使って材料を加熱する方法",
      "煮る — 水蒸気の熱を利用して火を通す方法",
      "揚げる — 衣をつけた食材などを比較的多い油で加熱する方法",
      "蒸す — 水蒸気の熱を利用して火を通す方法",
      "焼く — オーブンや直火などの熱で食材の表面から加熱する方法"
    ],
    "answer": 1,
    "explanation": "誤りは「煮る — 水蒸気の熱を利用して火を通す方法」。水蒸気の熱を利用して火を通す方法は「蒸す」の説明です。「煮る」は「液体の中で食材を熱して火を通す方法」に当たります。残り4つの組合せは正しいものです。 【関連知識を比較】炒める：炒めるは少量の油などを用いる加熱調理です。／煮る：煮るは水や調味液で食材を加熱する方法です。／蒸す：蒸すは蒸気を用いた加熱調理です。／焼く：焼くは放射熱や接触熱などで加熱する方法です。／揚げる：揚げるは高温の油を熱媒体として使う調理です。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "EXT-3-073",
    "grade": 3,
    "category": "知を育もう",
    "kind": "choice",
    "prompt": "【応用・調理】食材を直接ゆで汁に浸さず、水蒸気の熱で火を通し、食材の形を保ちながら調理したい。最も適切なのはどれか。",
    "options": [
      "蒸す",
      "煮る",
      "焼く",
      "炒める",
      "揚げる"
    ],
    "answer": 0,
    "explanation": "蒸す調理は水蒸気の熱を利用します。ゆで汁に浸して加熱する「煮る」と混同しないようにします。 【復習ポイント：同分野の概念】炒める：炒めるは少量の油などを用いる加熱調理です。／煮る：煮るは水や調味液で食材を加熱する方法です。／蒸す：蒸すは蒸気を用いた加熱調理です。／焼く：焼くは放射熱や接触熱などで加熱する方法です。／揚げる：揚げるは高温の油を熱媒体として使う調理です。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "EXT-3-074",
    "grade": 3,
    "category": "知を育もう",
    "kind": "choice",
    "prompt": "【深掘り・料理の比較】肉の表面に焼き色と香りを付けたいが、鍋の煮汁へ浸すことはしない。オーブンや直火などを利用して表面から熱を通す調理法はどれか。",
    "options": [
      "炒める",
      "煮る",
      "蒸す",
      "焼く",
      "揚げる"
    ],
    "answer": 3,
    "explanation": "焼くは放射熱や接触熱などで食品に熱を伝え、表面に香ばしい変化が生じることがあります。煮る・蒸す・揚げるとは熱媒体と仕上がりが異なります。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "EXT-3-075",
    "grade": 3,
    "category": "知を育もう",
    "kind": "choice",
    "prompt": "【応用・誤り発見】基本的な調理方法について受講生がまとめた5組の説明で、誤っているものを1つ選びなさい。",
    "options": [
      "蒸す — 水蒸気の熱を利用して火を通す方法",
      "煮る — 液体の中で食材を熱して火を通す方法",
      "揚げる — 少量の油でフライパンなどを使って材料を加熱する方法",
      "焼く — オーブンや直火などの熱で食材の表面から加熱する方法",
      "炒める — 少量の油でフライパンなどを使って材料を加熱する方法"
    ],
    "answer": 2,
    "explanation": "誤りは「揚げる — 少量の油でフライパンなどを使って材料を加熱する方法」。少量の油でフライパンなどを使って材料を加熱する方法は「炒める」の説明です。「揚げる」は「衣をつけた食材などを比較的多い油で加熱する方法」に当たります。残り4つの組合せは正しいものです。 【関連知識を比較】炒める：炒めるは少量の油などを用いる加熱調理です。／煮る：煮るは水や調味液で食材を加熱する方法です。／蒸す：蒸すは蒸気を用いた加熱調理です。／焼く：焼くは放射熱や接触熱などで加熱する方法です。／揚げる：揚げるは高温の油を熱媒体として使う調理です。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "EXT-3-076",
    "grade": 3,
    "category": "知を育もう",
    "kind": "choice",
    "prompt": "【深掘り・だし】かつお節を切らしたため、乾燥した小魚からうま味を取ることにした。魚の下処理と乾燥を経てだしに使う食品はどれか。",
    "options": [
      "グアニル酸",
      "酸味",
      "塩味",
      "うま味の相乗効果",
      "煮干し"
    ],
    "answer": 4,
    "explanation": "煮干しは主に小魚を加熱・乾燥させた食品で、だしに利用します。グアニル酸は主に干ししいたけに関わるうま味成分であり、食品そのものとは異なります。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "EXT-3-077",
    "grade": 3,
    "category": "知を育もう",
    "kind": "choice",
    "prompt": "【応用・うま味】昆布だしにかつお節のだしを合わせたところ、単独よりうま味を強く感じた。特に関係が深い現象はどれか。",
    "options": [
      "うま味の相乗効果",
      "カラメル化",
      "乳化",
      "でんぷんの糊化",
      "脂質の酸化"
    ],
    "answer": 0,
    "explanation": "昆布のグルタミン酸とかつお節のイノシン酸などを組み合わせると、うま味の相乗効果が起こります。 【復習ポイント：同分野の概念】煮干し：煮干しは小魚を加工・乾燥させ、だしに用います。／うま味の相乗効果：異なるうま味成分を組み合わせると、うま味が強く感じられます。／グアニル酸：干ししいたけのうま味にはグアニル酸が寄与します。／塩味：食塩の代表的な味は塩味です。／酸味：酢の代表的な味は酸味です。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "EXT-3-078",
    "grade": 3,
    "category": "知を育もう",
    "kind": "choice",
    "prompt": "【深掘り・うま味の成分】乾燥しいたけを戻した汁を、昆布だしと合わせて使った。干ししいたけに特徴的な核酸系うま味成分として適切なのはどれか。",
    "options": [
      "酸味",
      "うま味の相乗効果",
      "煮干し",
      "塩味",
      "グアニル酸"
    ],
    "answer": 4,
    "explanation": "干ししいたけにはグアニル酸がうま味に寄与します。昆布のグルタミン酸やかつお節のイノシン酸などとの関係を考えると、だしの合わせ方も理解できます。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "EXT-3-079",
    "grade": 3,
    "category": "知を育もう",
    "kind": "choice",
    "prompt": "【応用・組合せ】だしとうま味を復習するため、5組の「用語―説明」を照合する。正しいものを1つ選びなさい。",
    "options": [
      "うま味の相乗効果 — 干ししいたけのうま味に関わる成分",
      "酸味 — いわしなどの小魚を乾燥させ、だしに用いる食品",
      "煮干し — 昆布とかつお節など複数のだしを合わせるとうま味が強く感じられる現象",
      "グアニル酸 — 食塩の味として基本五味に含まれるもの",
      "塩味 — 食塩の味として基本五味に含まれるもの"
    ],
    "answer": 4,
    "explanation": "正解は「塩味 — 食塩の味として基本五味に含まれるもの」。ほかの選択肢は用語と説明が入れ替わっています。名称を暗記するだけでなく、それぞれの働きや特徴を比較して覚えましょう。 【関連知識を比較】煮干し：煮干しは小魚を加工・乾燥させ、だしに用います。／うま味の相乗効果：異なるうま味成分を組み合わせると、うま味が強く感じられます。／グアニル酸：干ししいたけのうま味にはグアニル酸が寄与します。／塩味：食塩の代表的な味は塩味です。／酸味：酢の代表的な味は酸味です。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "EXT-3-080",
    "grade": 3,
    "category": "知を育もう",
    "kind": "choice",
    "prompt": "【応用・誤り発見】だしとうま味について受講生がまとめた5組の説明で、誤っているものを1つ選びなさい。",
    "options": [
      "塩味 — 食塩の味として基本五味に含まれるもの",
      "煮干し — いわしなどの小魚を乾燥させ、だしに用いる食品",
      "酸味 — いわしなどの小魚を乾燥させ、だしに用いる食品",
      "うま味の相乗効果 — 昆布とかつお節など複数のだしを合わせるとうま味が強く感じられる現象",
      "グアニル酸 — 干ししいたけのうま味に関わる成分"
    ],
    "answer": 2,
    "explanation": "誤りは「酸味 — いわしなどの小魚を乾燥させ、だしに用いる食品」。いわしなどの小魚を乾燥させ、だしに用いる食品は「煮干し」の説明です。「酸味」は「酢の味として基本五味に含まれるもの」に当たります。残り4つの組合せは正しいものです。 【関連知識を比較】煮干し：煮干しは小魚を加工・乾燥させ、だしに用います。／うま味の相乗効果：異なるうま味成分を組み合わせると、うま味が強く感じられます。／グアニル酸：干ししいたけのうま味にはグアニル酸が寄与します。／塩味：食塩の代表的な味は塩味です。／酸味：酢の代表的な味は酸味です。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "EXT-3-081",
    "grade": 3,
    "category": "知を育もう",
    "kind": "choice",
    "prompt": "【深掘り・配膳】和食の基本配膳を、食べる人から見た位置で考える。主食のご飯茶碗を汁椀と並べる場合、一般的にはどこへ置くか。",
    "options": [
      "汁椀",
      "小鉢",
      "左側",
      "左手前",
      "右手前"
    ],
    "answer": 3,
    "explanation": "基本的な和食配膳では、ご飯は食べる人の左手前、汁椀は右手前が一般的です。「店員から見た左右」で答えないことが重要です。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "EXT-3-082",
    "grade": 3,
    "category": "知を育もう",
    "kind": "choice",
    "prompt": "【深掘り・配膳】献立はご飯、みそ汁、焼き魚、おひたし。食べる本人から見て、ご飯が左手前にあるとき、みそ汁の器を置くのに一般的な位置はどれか。",
    "options": [
      "右手前",
      "小鉢",
      "左側",
      "左手前",
      "汁椀"
    ],
    "answer": 0,
    "explanation": "汁椀は一般的な和食配膳で右手前に置きます。ご飯との左右関係をセットで覚えることが大切で、地域や店の流儀によって配置が違う場合はあります。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "EXT-3-083",
    "grade": 3,
    "category": "知を育もう",
    "kind": "choice",
    "prompt": "【応用・配膳】和食の配膳で、箸先を左側に向けて横に置く。箸置きを置く位置として一般的に適切なのはどれか。",
    "options": [
      "右側",
      "皿の真上",
      "汁椀の中",
      "食べる人の正面奥",
      "左側"
    ],
    "answer": 4,
    "explanation": "基本的な和食の箸の置き方では箸先を左に向けるため、箸置きは左側に置きます。 【復習ポイント：同分野の概念】左手前：一般的な和食の配膳ではご飯を左手前に置きます。／右手前：一般的な配膳では汁物を右手前に置きます。／左側：箸は通常、箸先が左向きになるよう横に置きます。／小鉢：小鉢は副菜などを少量盛る器として使われます。／汁椀：汁椀はみそ汁などの汁物に使います。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "EXT-3-084",
    "grade": 3,
    "category": "知を育もう",
    "kind": "choice",
    "prompt": "【応用・組合せ】和食の配膳を復習するため、5組の「用語―説明」を照合する。正しいものを1つ選びなさい。",
    "options": [
      "左側 — 料理を小さな器に少量盛るときの器の名称として適切なもの",
      "左手前 — 和食の基本配膳で汁椀を置くことが多い場所",
      "小鉢 — 料理を小さな器に少量盛るときの器の名称として適切なもの",
      "汁椀 — 和食の基本配膳でご飯茶碗を置くことが多い場所",
      "右手前 — 箸先を左に向けて横置きする際、箸置きを置く側"
    ],
    "answer": 2,
    "explanation": "正解は「小鉢 — 料理を小さな器に少量盛るときの器の名称として適切なもの」。ほかの選択肢は用語と説明が入れ替わっています。名称を暗記するだけでなく、それぞれの働きや特徴を比較して覚えましょう。 【関連知識を比較】左手前：一般的な和食の配膳ではご飯を左手前に置きます。／右手前：一般的な配膳では汁物を右手前に置きます。／左側：箸は通常、箸先が左向きになるよう横に置きます。／小鉢：小鉢は副菜などを少量盛る器として使われます。／汁椀：汁椀はみそ汁などの汁物に使います。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "EXT-3-085",
    "grade": 3,
    "category": "知を育もう",
    "kind": "choice",
    "prompt": "【応用・誤り発見】和食の配膳について受講生がまとめた5組の説明で、誤っているものを1つ選びなさい。",
    "options": [
      "小鉢 — 料理を小さな器に少量盛るときの器の名称として適切なもの",
      "左側 — 箸先を左に向けて横置きする際、箸置きを置く側",
      "汁椀 — 和食の基本配膳でご飯茶碗を置くことが多い場所",
      "左手前 — 和食の基本配膳でご飯茶碗を置くことが多い場所",
      "右手前 — 和食の基本配膳で汁椀を置くことが多い場所"
    ],
    "answer": 2,
    "explanation": "誤りは「汁椀 — 和食の基本配膳でご飯茶碗を置くことが多い場所」。和食の基本配膳でご飯茶碗を置くことが多い場所は「左手前」の説明です。「汁椀」は「汁物を入れる蓋付きの器として一般的なもの」に当たります。残り4つの組合せは正しいものです。 【関連知識を比較】左手前：一般的な和食の配膳ではご飯を左手前に置きます。／右手前：一般的な配膳では汁物を右手前に置きます。／左側：箸は通常、箸先が左向きになるよう横に置きます。／小鉢：小鉢は副菜などを少量盛る器として使われます。／汁椀：汁椀はみそ汁などの汁物に使います。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "EXT-3-086",
    "grade": 3,
    "category": "知を育もう",
    "kind": "choice",
    "prompt": "【深掘り・旬】早春の食材を選ぶ献立で、ほろ苦さを生かした天ぷらに使える山菜を探す。夏の果菜や秋のきのこと区別して選びなさい。",
    "options": [
      "はくさい",
      "まつたけ",
      "トマト",
      "さわら",
      "ふきのとう"
    ],
    "answer": 4,
    "explanation": "ふきのとうは春先に出回る山菜で、独特の苦味を持ちます。トマトは夏、まつたけは秋など、旬は地域や栽培条件でも動くため、典型的な季節を押さえます。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "EXT-3-087",
    "grade": 3,
    "category": "知を育もう",
    "kind": "choice",
    "prompt": "【応用・誤り発見】季節の食材の説明資料を点検する。次の「用語―説明」の組合せのうち、誤っているものを1つ選びなさい。",
    "options": [
      "トマト — 秋の味覚として日本で親しまれるきのこの一つ",
      "まつたけ — 秋の味覚として日本で親しまれるきのこの一つ",
      "さわら — 春に旬を迎える魚として知られるもの",
      "ふきのとう — 日本で春の山菜としてよく食べられるもの",
      "はくさい — 冬の鍋料理でよく使われる葉物野菜"
    ],
    "answer": 0,
    "explanation": "誤りは「トマト — 秋の味覚として日本で親しまれるきのこの一つ」。秋の味覚として日本で親しまれるきのこの一つは「まつたけ」の説明です。「トマト」は「日本で初夏から夏に旬を迎える果菜類」に当たります。残り4つの組合せは正しいものです。 【関連知識を比較】ふきのとう：ふきのとうは春を知らせる山菜として知られます。／トマト：トマトは日本では夏を代表する野菜の一つです。／まつたけ：まつたけは秋の味覚として知られます。／はくさい：はくさいは冬に旬を迎える代表的な野菜です。／さわら：さわらは春の季語にも使われる魚です。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "EXT-3-088",
    "grade": 3,
    "category": "知を育もう",
    "kind": "choice",
    "prompt": "【応用・誤り発見】季節の食材の食育クイズを校正する。次の「用語―説明」の組合せのうち、誤っているものを1つ選びなさい。",
    "options": [
      "まつたけ — 冬の鍋料理でよく使われる葉物野菜",
      "トマト — 日本で初夏から夏に旬を迎える果菜類",
      "ふきのとう — 日本で春の山菜としてよく食べられるもの",
      "さわら — 春に旬を迎える魚として知られるもの",
      "はくさい — 冬の鍋料理でよく使われる葉物野菜"
    ],
    "answer": 0,
    "explanation": "誤りは「まつたけ — 冬の鍋料理でよく使われる葉物野菜」。冬の鍋料理でよく使われる葉物野菜は「はくさい」の説明です。「まつたけ」は「秋の味覚として日本で親しまれるきのこの一つ」に当たります。残り4つの組合せは正しいものです。 【関連知識を比較】ふきのとう：ふきのとうは春を知らせる山菜として知られます。／トマト：トマトは日本では夏を代表する野菜の一つです。／まつたけ：まつたけは秋の味覚として知られます。／はくさい：はくさいは冬に旬を迎える代表的な野菜です。／さわら：さわらは春の季語にも使われる魚です。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "EXT-3-089",
    "grade": 3,
    "category": "知を育もう",
    "kind": "choice",
    "prompt": "【応用・組合せ】季節の食材を復習するため、5組の「用語―説明」を照合する。正しいものを1つ選びなさい。",
    "options": [
      "まつたけ — 冬の鍋料理でよく使われる葉物野菜",
      "さわら — 日本で春の山菜としてよく食べられるもの",
      "トマト — 秋の味覚として日本で親しまれるきのこの一つ",
      "はくさい — 冬の鍋料理でよく使われる葉物野菜",
      "ふきのとう — 日本で初夏から夏に旬を迎える果菜類"
    ],
    "answer": 3,
    "explanation": "正解は「はくさい — 冬の鍋料理でよく使われる葉物野菜」。ほかの選択肢は用語と説明が入れ替わっています。名称を暗記するだけでなく、それぞれの働きや特徴を比較して覚えましょう。 【関連知識を比較】ふきのとう：ふきのとうは春を知らせる山菜として知られます。／トマト：トマトは日本では夏を代表する野菜の一つです。／まつたけ：まつたけは秋の味覚として知られます。／はくさい：はくさいは冬に旬を迎える代表的な野菜です。／さわら：さわらは春の季語にも使われる魚です。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "EXT-3-090",
    "grade": 3,
    "category": "知を育もう",
    "kind": "choice",
    "prompt": "【深掘り・季節と献立】春の魚料理を考え、漢字に「春」が入る名前でも知られる魚を選ぶ。ただし漁獲の時期には地域差があることも考慮する。",
    "options": [
      "トマト",
      "ふきのとう",
      "さわら",
      "はくさい",
      "まつたけ"
    ],
    "answer": 2,
    "explanation": "さわら（鰆）は日本で春の魚として知られますが、実際の旬や漁期は地域によって異なります。名称の印象だけでなく食文化としての扱いを理解しましょう。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "EXT-3-091",
    "grade": 3,
    "category": "知を育もう",
    "kind": "choice",
    "prompt": "【深掘り・米料理】炊きたてのご飯をまとめて持ち運びやすくし、中に具材を入れたり海苔を巻いたりする料理を作る。酢飯を基本とする料理とは異なるものはどれか。",
    "options": [
      "雑炊",
      "おにぎり",
      "すし",
      "炊き込みご飯",
      "餅"
    ],
    "answer": 1,
    "explanation": "おにぎりは炊いたご飯を握って形を作る料理です。すしは酢飯、雑炊は炊いた米を汁で煮るなど、同じ米でも加工程度と目的が違います。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "EXT-3-092",
    "grade": 3,
    "category": "知を育もう",
    "kind": "choice",
    "prompt": "【応用・誤り発見】米を使う料理の説明資料を点検する。次の「用語―説明」の組合せのうち、誤っているものを1つ選びなさい。",
    "options": [
      "すし — 米を出汁や具材と炊き込む料理",
      "炊き込みご飯 — 米を出汁や具材と炊き込む料理",
      "雑炊 — 冷えたご飯をだしなどで煮て作ることが多い料理",
      "おにぎり — 炊いたご飯を手でまとめて形を作る料理",
      "餅 — もち米を蒸し、ついて作る食品"
    ],
    "answer": 0,
    "explanation": "誤りは「すし — 米を出汁や具材と炊き込む料理」。米を出汁や具材と炊き込む料理は「炊き込みご飯」の説明です。「すし」は「米を酢で調味した酢飯を使う料理」に当たります。残り4つの組合せは正しいものです。 【関連知識を比較】おにぎり：おにぎりはご飯を握って作る料理です。／すし：すしには酢飯を用いる形が広くあります。／炊き込みご飯：炊き込みご飯は具材と調味液を一緒に炊きます。／雑炊：雑炊はご飯をだしなどで煮て作ります。／餅：餅は一般に蒸したもち米をついて作ります。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "EXT-3-093",
    "grade": 3,
    "category": "知を育もう",
    "kind": "choice",
    "prompt": "【深掘り・米の調理】生米にきのこ・野菜・調味しただしを加え、米と具を同時に炊き上げる。炊き上がったご飯を汁で煮る料理と区別するとどれか。",
    "options": [
      "雑炊",
      "炊き込みご飯",
      "おにぎり",
      "餅",
      "すし"
    ],
    "answer": 1,
    "explanation": "炊き込みご飯は生米と具・調味液を一緒に炊きます。雑炊は通常、すでに炊いたご飯を汁で煮ます。米を加えるタイミングと調理工程が見分けるポイントです。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "EXT-3-094",
    "grade": 3,
    "category": "知を育もう",
    "kind": "choice",
    "prompt": "【応用・組合せ】米を使う料理を復習するため、5組の「用語―説明」を照合する。正しいものを1つ選びなさい。",
    "options": [
      "餅 — 炊いたご飯を手でまとめて形を作る料理",
      "すし — 米を出汁や具材と炊き込む料理",
      "おにぎり — 米を酢で調味した酢飯を使う料理",
      "炊き込みご飯 — 冷えたご飯をだしなどで煮て作ることが多い料理",
      "雑炊 — 冷えたご飯をだしなどで煮て作ることが多い料理"
    ],
    "answer": 4,
    "explanation": "正解は「雑炊 — 冷えたご飯をだしなどで煮て作ることが多い料理」。ほかの選択肢は用語と説明が入れ替わっています。名称を暗記するだけでなく、それぞれの働きや特徴を比較して覚えましょう。 【関連知識を比較】おにぎり：おにぎりはご飯を握って作る料理です。／すし：すしには酢飯を用いる形が広くあります。／炊き込みご飯：炊き込みご飯は具材と調味液を一緒に炊きます。／雑炊：雑炊はご飯をだしなどで煮て作ります。／餅：餅は一般に蒸したもち米をついて作ります。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "EXT-3-095",
    "grade": 3,
    "category": "知を育もう",
    "kind": "choice",
    "prompt": "【応用・誤り発見】米を使う料理について受講生がまとめた5組の説明で、誤っているものを1つ選びなさい。",
    "options": [
      "おにぎり — 炊いたご飯を手でまとめて形を作る料理",
      "雑炊 — 冷えたご飯をだしなどで煮て作ることが多い料理",
      "すし — 米を酢で調味した酢飯を使う料理",
      "餅 — 炊いたご飯を手でまとめて形を作る料理",
      "炊き込みご飯 — 米を出汁や具材と炊き込む料理"
    ],
    "answer": 3,
    "explanation": "誤りは「餅 — 炊いたご飯を手でまとめて形を作る料理」。炊いたご飯を手でまとめて形を作る料理は「おにぎり」の説明です。「餅」は「もち米を蒸し、ついて作る食品」に当たります。残り4つの組合せは正しいものです。 【関連知識を比較】おにぎり：おにぎりはご飯を握って作る料理です。／すし：すしには酢飯を用いる形が広くあります。／炊き込みご飯：炊き込みご飯は具材と調味液を一緒に炊きます。／雑炊：雑炊はご飯をだしなどで煮て作ります。／餅：餅は一般に蒸したもち米をついて作ります。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "EXT-3-096",
    "grade": 3,
    "category": "知を育もう",
    "kind": "choice",
    "prompt": "【深掘り・民俗と食】地域の祭礼の日には赤飯などを囲み、普段とは違う献立を用意する。この「非日常の祝いの食」を表す概念はどれか。",
    "options": [
      "ケの食",
      "ハレの食",
      "共食",
      "地産地消",
      "土産土法"
    ],
    "answer": 1,
    "explanation": "ハレの食は祭りや祝いなど特別な日の食事を表します。ケの食は普段の食事です。料理名だけでなく、行事の意味と日常・非日常の区別が重要です。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "EXT-3-097",
    "grade": 3,
    "category": "知を育もう",
    "kind": "choice",
    "prompt": "【応用・誤り発見】伝統的な食文化の説明資料を点検する。次の「用語―説明」の組合せのうち、誤っているものを1つ選びなさい。",
    "options": [
      "ハレの食 — 年中行事や祭礼など特別な日に行う食事",
      "ケの食 — 地域で生産されたものをその地域で消費する考え方",
      "共食 — 食事を共にすることによる交流や関係づくり",
      "地産地消 — 地域で生産されたものをその地域で消費する考え方",
      "土産土法 — その土地の気候・風土に合う食材や調理方法を重んじる考え方"
    ],
    "answer": 1,
    "explanation": "誤りは「ケの食 — 地域で生産されたものをその地域で消費する考え方」。地域で生産されたものをその地域で消費する考え方は「地産地消」の説明です。「ケの食」は「普段の日の食事を表す言葉」に当たります。残り4つの組合せは正しいものです。 【関連知識を比較】ハレの食：ハレは祭礼など非日常の特別な場を示します。／ケの食：ケは日常の生活や食事を表します。／地産地消：地産地消は地域で作られたものを地域で利用する考え方です。／土産土法：土産土法は土地の産物を土地の方法で調理するという考え方です。／共食：共食は誰かと食事を共にすることを指します。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "EXT-3-098",
    "grade": 3,
    "category": "知を育もう",
    "kind": "choice",
    "prompt": "【応用・食文化】近隣で収穫された野菜を地域内で購入・消費する取組を表す言葉として適切なのはどれか。",
    "options": [
      "土産土法",
      "共食",
      "ハレの食",
      "地産地消",
      "ケの食"
    ],
    "answer": 3,
    "explanation": "地産地消は地域で生産されたものを地域で消費することです。土産土法はその土地の産物を土地の方法で調理する考え方です。 【復習ポイント：同分野の概念】ハレの食：ハレは祭礼など非日常の特別な場を示します。／ケの食：ケは日常の生活や食事を表します。／地産地消：地産地消は地域で作られたものを地域で利用する考え方です。／土産土法：土産土法は土地の産物を土地の方法で調理するという考え方です。／共食：共食は誰かと食事を共にすることを指します。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "EXT-3-099",
    "grade": 3,
    "category": "知を育もう",
    "kind": "choice",
    "prompt": "【応用・組合せ】伝統的な食文化を復習するため、5組の「用語―説明」を照合する。正しいものを1つ選びなさい。",
    "options": [
      "共食 — 年中行事や祭礼など特別な日に行う食事",
      "ハレの食 — 普段の日の食事を表す言葉",
      "土産土法 — その土地の気候・風土に合う食材や調理方法を重んじる考え方",
      "地産地消 — その土地の気候・風土に合う食材や調理方法を重んじる考え方",
      "ケの食 — 地域で生産されたものをその地域で消費する考え方"
    ],
    "answer": 2,
    "explanation": "正解は「土産土法 — その土地の気候・風土に合う食材や調理方法を重んじる考え方」。ほかの選択肢は用語と説明が入れ替わっています。名称を暗記するだけでなく、それぞれの働きや特徴を比較して覚えましょう。 【関連知識を比較】ハレの食：ハレは祭礼など非日常の特別な場を示します。／ケの食：ケは日常の生活や食事を表します。／地産地消：地産地消は地域で作られたものを地域で利用する考え方です。／土産土法：土産土法は土地の産物を土地の方法で調理するという考え方です。／共食：共食は誰かと食事を共にすることを指します。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "EXT-3-100",
    "grade": 3,
    "category": "知を育もう",
    "kind": "choice",
    "prompt": "【深掘り・食育】同じ献立でも、家族や地域の人と食卓を囲むと会話や食文化の継承につながる。このように誰かと一緒に食事をすることはどれか。",
    "options": [
      "ハレの食",
      "地産地消",
      "ケの食",
      "土産土法",
      "共食"
    ],
    "answer": 4,
    "explanation": "共食は人と食事を共にすることです。地産地消は地域の生産と消費、土産土法は地域の産物と調理法に着目するため、食事を共にするかどうかと概念が異なります。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "EXT-3-101",
    "grade": 3,
    "category": "知を育もう",
    "kind": "choice",
    "prompt": "【深掘り・発酵調味料】小麦や大豆などを使い、麹と塩水の働きで発酵・熟成させた液状の調味料を使う。固形・ペースト状のみそと区別するとどれか。",
    "options": [
      "みそ",
      "みりん",
      "しょうゆ",
      "酢",
      "食塩"
    ],
    "answer": 2,
    "explanation": "しょうゆは大豆・小麦などを原料とし、発酵・熟成させる液体調味料です。みそも発酵食品ですが、原料処理や最終形状が異なります。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "EXT-3-102",
    "grade": 3,
    "category": "知を育もう",
    "kind": "choice",
    "prompt": "【応用・誤り発見】日本の調味料の説明資料を点検する。次の「用語―説明」の組合せのうち、誤っているものを1つ選びなさい。",
    "options": [
      "しょうゆ — 大豆や小麦などを発酵させて作る液体調味料",
      "食塩 — 海水などから得られ、塩味を付ける基本調味料",
      "酢 — 酸味を付けるために使う、酢酸を含む調味料",
      "みりん — 米などを発酵させた甘味のある調味料",
      "みそ — 米などを発酵させた甘味のある調味料"
    ],
    "answer": 4,
    "explanation": "誤りは「みそ — 米などを発酵させた甘味のある調味料」。米などを発酵させた甘味のある調味料は「みりん」の説明です。「みそ」は「大豆や米などを麹と食塩で発酵熟成させる調味料」に当たります。残り4つの組合せは正しいものです。 【関連知識を比較】しょうゆ：しょうゆは麹などを利用した発酵調味料です。／みそ：みそは大豆などを発酵させて作ります。／みりん：みりんは和食の甘味や照りに使われます。／酢：食酢には酢酸が含まれています。／食塩：食塩は塩味を付ける基本調味料です。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "EXT-3-103",
    "grade": 3,
    "category": "知を育もう",
    "kind": "choice",
    "prompt": "【深掘り・和食の調味】煮物の仕上がりに甘味と照りを加えたい。食酢の酸味やしょうゆの塩味とは異なり、米などから作る甘い発酵調味料はどれか。",
    "options": [
      "しょうゆ",
      "みりん",
      "酢",
      "食塩",
      "みそ"
    ],
    "answer": 1,
    "explanation": "みりんは甘味や照りを付けるために利用されます。しょうゆは塩味とうま味、酢は酸味が中心で、同じ発酵調味料でも料理で果たす役割が異なります。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "EXT-3-104",
    "grade": 3,
    "category": "知を育もう",
    "kind": "choice",
    "prompt": "【応用・組合せ】日本の調味料を復習するため、5組の「用語―説明」を照合する。正しいものを1つ選びなさい。",
    "options": [
      "みりん — 酸味を付けるために使う、酢酸を含む調味料",
      "みそ — 米などを発酵させた甘味のある調味料",
      "酢 — 酸味を付けるために使う、酢酸を含む調味料",
      "しょうゆ — 大豆や米などを麹と食塩で発酵熟成させる調味料",
      "食塩 — 大豆や小麦などを発酵させて作る液体調味料"
    ],
    "answer": 2,
    "explanation": "正解は「酢 — 酸味を付けるために使う、酢酸を含む調味料」。ほかの選択肢は用語と説明が入れ替わっています。名称を暗記するだけでなく、それぞれの働きや特徴を比較して覚えましょう。 【関連知識を比較】しょうゆ：しょうゆは麹などを利用した発酵調味料です。／みそ：みそは大豆などを発酵させて作ります。／みりん：みりんは和食の甘味や照りに使われます。／酢：食酢には酢酸が含まれています。／食塩：食塩は塩味を付ける基本調味料です。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "EXT-3-105",
    "grade": 3,
    "category": "知を育もう",
    "kind": "choice",
    "prompt": "【応用・誤り発見】日本の調味料について受講生がまとめた5組の説明で、誤っているものを1つ選びなさい。",
    "options": [
      "みそ — 大豆や米などを麹と食塩で発酵熟成させる調味料",
      "みりん — 米などを発酵させた甘味のある調味料",
      "食塩 — 大豆や小麦などを発酵させて作る液体調味料",
      "酢 — 酸味を付けるために使う、酢酸を含む調味料",
      "しょうゆ — 大豆や小麦などを発酵させて作る液体調味料"
    ],
    "answer": 2,
    "explanation": "誤りは「食塩 — 大豆や小麦などを発酵させて作る液体調味料」。大豆や小麦などを発酵させて作る液体調味料は「しょうゆ」の説明です。「食塩」は「海水などから得られ、塩味を付ける基本調味料」に当たります。残り4つの組合せは正しいものです。 【関連知識を比較】しょうゆ：しょうゆは麹などを利用した発酵調味料です。／みそ：みそは大豆などを発酵させて作ります。／みりん：みりんは和食の甘味や照りに使われます。／酢：食酢には酢酸が含まれています。／食塩：食塩は塩味を付ける基本調味料です。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "EXT-3-106",
    "grade": 3,
    "category": "知を育もう",
    "kind": "choice",
    "prompt": "【深掘り・食文化の比較】小麦の生地を細長い麺などに加工し、トマトソースやオリーブ油と合わせるイタリアの料理文化を調べる。代表的な食品はどれか。",
    "options": [
      "パスタ",
      "トルティーヤ",
      "饅頭（マントウ）",
      "チャパティ",
      "バゲット"
    ],
    "answer": 0,
    "explanation": "パスタはイタリアの食文化を代表する小麦製品です。チャパティは平焼きパン、トルティーヤは薄焼きの生地など、穀物を使っていても加工形態が違います。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "EXT-3-107",
    "grade": 3,
    "category": "知を育もう",
    "kind": "choice",
    "prompt": "【応用・誤り発見】各国の主食文化の説明資料を点検する。次の「用語―説明」の組合せのうち、誤っているものを1つ選びなさい。",
    "options": [
      "バゲット — フランスで親しまれる細長いパン",
      "トルティーヤ — メキシコ料理でトウモロコシや小麦粉の生地から作る薄い食品",
      "チャパティ — メキシコ料理でトウモロコシや小麦粉の生地から作る薄い食品",
      "饅頭（マントウ） — 中国で親しまれる小麦粉の蒸しパン",
      "パスタ — イタリアの代表的な小麦粉の麺料理"
    ],
    "answer": 2,
    "explanation": "誤りは「チャパティ — メキシコ料理でトウモロコシや小麦粉の生地から作る薄い食品」。メキシコ料理でトウモロコシや小麦粉の生地から作る薄い食品は「トルティーヤ」の説明です。「チャパティ」は「インドや南アジアで食べられる薄いパンの一種」に当たります。残り4つの組合せは正しいものです。 【関連知識を比較】パスタ：パスタはイタリア料理で広く使われる小麦製品です。／チャパティ：チャパティは主に小麦粉から作る平焼きパンです。／トルティーヤ：トルティーヤはメキシコ料理に用いられます。／バゲット：バゲットはフランスを代表するパンです。／饅頭（マントウ）：マントウは中国で広く食べられる蒸した小麦粉の食品です。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "EXT-3-108",
    "grade": 3,
    "category": "知を育もう",
    "kind": "choice",
    "prompt": "【深掘り・世界の主食】メキシコでトウモロコシを加工した薄い生地を使い、具材を包む料理の土台を作る。インドの小麦粉の平焼きパンと区別して選びなさい。",
    "options": [
      "トルティーヤ",
      "饅頭（マントウ）",
      "バゲット",
      "チャパティ",
      "パスタ"
    ],
    "answer": 0,
    "explanation": "トルティーヤはトウモロコシや小麦粉の生地から作られる薄い食品です。チャパティは南アジアの小麦粉の平焼きパンで、地域と主原料を合わせて比較します。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "EXT-3-109",
    "grade": 3,
    "category": "知を育もう",
    "kind": "choice",
    "prompt": "【応用・組合せ】各国の主食文化を復習するため、5組の「用語―説明」を照合する。正しいものを1つ選びなさい。",
    "options": [
      "チャパティ — メキシコ料理でトウモロコシや小麦粉の生地から作る薄い食品",
      "パスタ — インドや南アジアで食べられる薄いパンの一種",
      "饅頭（マントウ） — イタリアの代表的な小麦粉の麺料理",
      "バゲット — フランスで親しまれる細長いパン",
      "トルティーヤ — フランスで親しまれる細長いパン"
    ],
    "answer": 3,
    "explanation": "正解は「バゲット — フランスで親しまれる細長いパン」。ほかの選択肢は用語と説明が入れ替わっています。名称を暗記するだけでなく、それぞれの働きや特徴を比較して覚えましょう。 【関連知識を比較】パスタ：パスタはイタリア料理で広く使われる小麦製品です。／チャパティ：チャパティは主に小麦粉から作る平焼きパンです。／トルティーヤ：トルティーヤはメキシコ料理に用いられます。／バゲット：バゲットはフランスを代表するパンです。／饅頭（マントウ）：マントウは中国で広く食べられる蒸した小麦粉の食品です。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "EXT-3-110",
    "grade": 3,
    "category": "知を育もう",
    "kind": "choice",
    "prompt": "【応用・誤り発見】各国の主食文化について受講生がまとめた5組の説明で、誤っているものを1つ選びなさい。",
    "options": [
      "トルティーヤ — メキシコ料理でトウモロコシや小麦粉の生地から作る薄い食品",
      "バゲット — フランスで親しまれる細長いパン",
      "パスタ — イタリアの代表的な小麦粉の麺料理",
      "饅頭（マントウ） — イタリアの代表的な小麦粉の麺料理",
      "チャパティ — インドや南アジアで食べられる薄いパンの一種"
    ],
    "answer": 3,
    "explanation": "誤りは「饅頭（マントウ） — イタリアの代表的な小麦粉の麺料理」。イタリアの代表的な小麦粉の麺料理は「パスタ」の説明です。「饅頭（マントウ）」は「中国で親しまれる小麦粉の蒸しパン」に当たります。残り4つの組合せは正しいものです。 【関連知識を比較】パスタ：パスタはイタリア料理で広く使われる小麦製品です。／チャパティ：チャパティは主に小麦粉から作る平焼きパンです。／トルティーヤ：トルティーヤはメキシコ料理に用いられます。／バゲット：バゲットはフランスを代表するパンです。／饅頭（マントウ）：マントウは中国で広く食べられる蒸した小麦粉の食品です。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "EXT-3-111",
    "grade": 3,
    "category": "知を育もう",
    "kind": "choice",
    "prompt": "【応用・組合せ】食事のマナーの学習カードを作る。次の「用語―説明」の組合せのうち、正しいものを1つ選びなさい。",
    "options": [
      "ごちそうさま — 複数人で料理を取り分ける際に用意すると衛生的な器具",
      "寄せ箸 — 食べる前に述べる日本語のあいさつ",
      "いただきます — 食べる前に述べる日本語のあいさつ",
      "取り箸 — 食事中に箸先をなめる、避けたい箸の使い方",
      "ねぶり箸 — 箸で器を手元へ引き寄せる使い方"
    ],
    "answer": 2,
    "explanation": "正解は「いただきます — 食べる前に述べる日本語のあいさつ」。ほかの選択肢は用語と説明が入れ替わっています。名称を暗記するだけでなく、それぞれの働きや特徴を比較して覚えましょう。 【関連知識を比較】いただきます：いただきますは食事の前に述べるあいさつです。／ごちそうさま：ごちそうさまは食後に感謝を表す言葉です。／取り箸：取り箸は共用料理の取り分けに役立ちます。／ねぶり箸：箸先をなめる「ねぶり箸」は、一般に避けるべき箸使いです。／寄せ箸：寄せ箸は食事の場で避けたい箸使いです。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "EXT-3-112",
    "grade": 3,
    "category": "知を育もう",
    "kind": "choice",
    "prompt": "【応用・誤り発見】食事のマナーの説明資料を点検する。次の「用語―説明」の組合せのうち、誤っているものを1つ選びなさい。",
    "options": [
      "いただきます — 食べる前に述べる日本語のあいさつ",
      "ごちそうさま — 複数人で料理を取り分ける際に用意すると衛生的な器具",
      "ねぶり箸 — 食事中に箸先をなめる、避けたい箸の使い方",
      "取り箸 — 複数人で料理を取り分ける際に用意すると衛生的な器具",
      "寄せ箸 — 箸で器を手元へ引き寄せる使い方"
    ],
    "answer": 1,
    "explanation": "誤りは「ごちそうさま — 複数人で料理を取り分ける際に用意すると衛生的な器具」。複数人で料理を取り分ける際に用意すると衛生的な器具は「取り箸」の説明です。「ごちそうさま」は「食べ終わった後に述べる日本語のあいさつ」に当たります。残り4つの組合せは正しいものです。 【関連知識を比較】いただきます：いただきますは食事の前に述べるあいさつです。／ごちそうさま：ごちそうさまは食後に感謝を表す言葉です。／取り箸：取り箸は共用料理の取り分けに役立ちます。／ねぶり箸：箸先をなめる「ねぶり箸」は、一般に避けるべき箸使いです。／寄せ箸：寄せ箸は食事の場で避けたい箸使いです。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "EXT-3-113",
    "grade": 3,
    "category": "知を育もう",
    "kind": "choice",
    "prompt": "【深掘り・会食と衛生】大皿の料理を複数人で取り分ける。食べる箸で何度も大皿を触れないようにする基本的な道具として適切なのはどれか。",
    "options": [
      "ねぶり箸",
      "ごちそうさま",
      "取り箸",
      "いただきます",
      "寄せ箸"
    ],
    "answer": 2,
    "explanation": "取り箸は共用料理を衛生的に取り分けるための道具です。食事のあいさつや箸のタブーと区別し、感染症対策としても食べる箸との使い分けが役立ちます。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "EXT-3-114",
    "grade": 3,
    "category": "知を育もう",
    "kind": "choice",
    "prompt": "【応用・組合せ】食事のマナーを復習するため、5組の「用語―説明」を照合する。正しいものを1つ選びなさい。",
    "options": [
      "取り箸 — 食事中に箸先をなめる、避けたい箸の使い方",
      "寄せ箸 — 食べる前に述べる日本語のあいさつ",
      "ごちそうさま — 複数人で料理を取り分ける際に用意すると衛生的な器具",
      "ねぶり箸 — 食事中に箸先をなめる、避けたい箸の使い方",
      "いただきます — 食べ終わった後に述べる日本語のあいさつ"
    ],
    "answer": 3,
    "explanation": "正解は「ねぶり箸 — 食事中に箸先をなめる、避けたい箸の使い方」。ほかの選択肢は用語と説明が入れ替わっています。名称を暗記するだけでなく、それぞれの働きや特徴を比較して覚えましょう。 【関連知識を比較】いただきます：いただきますは食事の前に述べるあいさつです。／ごちそうさま：ごちそうさまは食後に感謝を表す言葉です。／取り箸：取り箸は共用料理の取り分けに役立ちます。／ねぶり箸：箸先をなめる「ねぶり箸」は、一般に避けるべき箸使いです。／寄せ箸：寄せ箸は食事の場で避けたい箸使いです。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "EXT-3-115",
    "grade": 3,
    "category": "知を育もう",
    "kind": "choice",
    "prompt": "【深掘り・食事マナー】自分の箸で離れた皿を手前へ引き寄せる人がいる。箸を食具として使う範囲を超え、避けたい使い方の名称はどれか。",
    "options": [
      "取り箸",
      "いただきます",
      "寄せ箸",
      "ごちそうさま",
      "ねぶり箸"
    ],
    "answer": 2,
    "explanation": "寄せ箸は箸を使って器を引き寄せる行為で、一般的な食事マナーでは避けます。ねぶり箸は箸先をなめる行為で、問題となる動作が異なります。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "EXT-3-116",
    "grade": 3,
    "category": "知を育もう",
    "kind": "choice",
    "prompt": "【深掘り・味覚】トマトソースに少量の砂糖を加え、酸味とのバランスを整えた。加えた砂糖が主としてもたらす基本味はどれか。",
    "options": [
      "甘味",
      "苦味",
      "うま味",
      "酸味",
      "塩味"
    ],
    "answer": 0,
    "explanation": "砂糖は主に甘味を与えます。料理全体では甘味と酸味などが同時に感じられ、調味は一つの味だけでなくバランスで考えます。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "EXT-3-117",
    "grade": 3,
    "category": "知を育もう",
    "kind": "choice",
    "prompt": "【応用・誤り発見】基本味と味覚の説明資料を点検する。次の「用語―説明」の組合せのうち、誤っているものを1つ選びなさい。",
    "options": [
      "甘味 — 砂糖に代表される基本味",
      "酸味 — コーヒーなどに感じられる基本味の一つ",
      "塩味 — 食塩に代表される基本味",
      "うま味 — 昆布だしに代表される基本味",
      "苦味 — コーヒーなどに感じられる基本味の一つ"
    ],
    "answer": 1,
    "explanation": "誤りは「酸味 — コーヒーなどに感じられる基本味の一つ」。コーヒーなどに感じられる基本味の一つは「苦味」の説明です。「酸味」は「レモンの果汁に代表される基本味」に当たります。残り4つの組合せは正しいものです。 【関連知識を比較】甘味：砂糖の主な味は甘味です。／酸味：レモン果汁の主な味は酸味です。／苦味：苦味は基本味の一つです。／うま味：昆布のグルタミン酸はうま味に関係します。／塩味：食塩の代表的な味は塩味です。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "EXT-3-118",
    "grade": 3,
    "category": "知を育もう",
    "kind": "choice",
    "prompt": "【応用・誤り発見】基本味と味覚の食育クイズを校正する。次の「用語―説明」の組合せのうち、誤っているものを1つ選びなさい。",
    "options": [
      "塩味 — 食塩に代表される基本味",
      "苦味 — 昆布だしに代表される基本味",
      "うま味 — 昆布だしに代表される基本味",
      "酸味 — レモンの果汁に代表される基本味",
      "甘味 — 砂糖に代表される基本味"
    ],
    "answer": 1,
    "explanation": "誤りは「苦味 — 昆布だしに代表される基本味」。昆布だしに代表される基本味は「うま味」の説明です。「苦味」は「コーヒーなどに感じられる基本味の一つ」に当たります。残り4つの組合せは正しいものです。 【関連知識を比較】甘味：砂糖の主な味は甘味です。／酸味：レモン果汁の主な味は酸味です。／苦味：苦味は基本味の一つです。／うま味：昆布のグルタミン酸はうま味に関係します。／塩味：食塩の代表的な味は塩味です。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "EXT-3-119",
    "grade": 3,
    "category": "知を育もう",
    "kind": "choice",
    "prompt": "【深掘り・味覚とうま味】昆布のグルタミン酸を利用した汁物では、甘い・酸っぱい・塩辛いだけでは説明できないコクを感じる。該当する基本味はどれか。",
    "options": [
      "甘味",
      "酸味",
      "うま味",
      "苦味",
      "塩味"
    ],
    "answer": 2,
    "explanation": "うま味は甘味・酸味・苦味・塩味と並ぶ基本味です。昆布のグルタミン酸などが関わり、塩味と同じではないため減塩調理の工夫にも活用されます。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "EXT-3-120",
    "grade": 3,
    "category": "知を育もう",
    "kind": "choice",
    "prompt": "【応用・誤り発見】基本味と味覚について受講生がまとめた5組の説明で、誤っているものを1つ選びなさい。",
    "options": [
      "酸味 — レモンの果汁に代表される基本味",
      "甘味 — 砂糖に代表される基本味",
      "うま味 — 昆布だしに代表される基本味",
      "塩味 — 砂糖に代表される基本味",
      "苦味 — コーヒーなどに感じられる基本味の一つ"
    ],
    "answer": 3,
    "explanation": "誤りは「塩味 — 砂糖に代表される基本味」。砂糖に代表される基本味は「甘味」の説明です。「塩味」は「食塩に代表される基本味」に当たります。残り4つの組合せは正しいものです。 【関連知識を比較】甘味：砂糖の主な味は甘味です。／酸味：レモン果汁の主な味は酸味です。／苦味：苦味は基本味の一つです。／うま味：昆布のグルタミン酸はうま味に関係します。／塩味：食塩の代表的な味は塩味です。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "EXT-3-121",
    "grade": 3,
    "category": "徳を育もう",
    "kind": "choice",
    "prompt": "【応用・期限】冷蔵保存が必要な弁当の期限表示を確認している。表示どおり未開封で保存した場合に「安全に食べられる期限」を示すのはどれか。",
    "options": [
      "消費期限",
      "賞味期限",
      "製造年月日",
      "保存方法",
      "内容量"
    ],
    "answer": 0,
    "explanation": "傷みやすい食品に表示される消費期限は、表示された保存方法で未開封保存した場合の安全性の目安です。賞味期限とは異なります。 【復習ポイント：同分野の概念】消費期限：消費期限は傷みやすい食品などに表示されます。／製造年月日：製造年月日は食品が製造された日付を示します。／原材料名：原材料名欄に使用した原材料が記載されます。／内容量：内容量は包装内の食品量を示します。／保存方法：保存方法には温度など保管条件が記載されます。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "EXT-3-122",
    "grade": 3,
    "category": "徳を育もう",
    "kind": "choice",
    "prompt": "【応用・誤り発見】期限・原材料表示の説明資料を点検する。次の「用語―説明」の組合せのうち、誤っているものを1つ選びなさい。",
    "options": [
      "内容量 — 容器包装に記載され、食品に含まれる量を示す表示",
      "原材料名 — 食品に含まれる原材料を表示する欄",
      "保存方法 — 包装された食品で保存上の条件を示す表示",
      "製造年月日 — 食品に含まれる原材料を表示する欄",
      "消費期限 — 傷みやすい食品で、表示の保存方法に従った場合に安全に食べられる期限"
    ],
    "answer": 3,
    "explanation": "誤りは「製造年月日 — 食品に含まれる原材料を表示する欄」。食品に含まれる原材料を表示する欄は「原材料名」の説明です。「製造年月日」は「食品を製造した日付そのものを示す情報」に当たります。残り4つの組合せは正しいものです。 【関連知識を比較】消費期限：消費期限は傷みやすい食品などに表示されます。／製造年月日：製造年月日は食品が製造された日付を示します。／原材料名：原材料名欄に使用した原材料が記載されます。／内容量：内容量は包装内の食品量を示します。／保存方法：保存方法には温度など保管条件が記載されます。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "EXT-3-123",
    "grade": 3,
    "category": "徳を育もう",
    "kind": "choice",
    "prompt": "【深掘り・食品選び】包装食品の「アレルゲンがないか」を確認する前に、そもそも何を材料としている食品か知りたい。購入者が確認する基本欄はどれか。",
    "options": [
      "消費期限",
      "製造年月日",
      "保存方法",
      "原材料名",
      "内容量"
    ],
    "answer": 3,
    "explanation": "原材料名には食品に使われた材料が記載されます。アレルギー物質の表示は別途重要ですが、まず材料そのものを確認する場面では原材料名欄が直接の情報源になります。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "EXT-3-124",
    "grade": 3,
    "category": "徳を育もう",
    "kind": "choice",
    "prompt": "【応用・組合せ】期限・原材料表示を復習するため、5組の「用語―説明」を照合する。正しいものを1つ選びなさい。",
    "options": [
      "保存方法 — 傷みやすい食品で、表示の保存方法に従った場合に安全に食べられる期限",
      "原材料名 — 容器包装に記載され、食品に含まれる量を示す表示",
      "消費期限 — 食品を製造した日付そのものを示す情報",
      "内容量 — 容器包装に記載され、食品に含まれる量を示す表示",
      "製造年月日 — 食品に含まれる原材料を表示する欄"
    ],
    "answer": 3,
    "explanation": "正解は「内容量 — 容器包装に記載され、食品に含まれる量を示す表示」。ほかの選択肢は用語と説明が入れ替わっています。名称を暗記するだけでなく、それぞれの働きや特徴を比較して覚えましょう。 【関連知識を比較】消費期限：消費期限は傷みやすい食品などに表示されます。／製造年月日：製造年月日は食品が製造された日付を示します。／原材料名：原材料名欄に使用した原材料が記載されます。／内容量：内容量は包装内の食品量を示します。／保存方法：保存方法には温度など保管条件が記載されます。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "EXT-3-125",
    "grade": 3,
    "category": "徳を育もう",
    "kind": "choice",
    "prompt": "【深掘り・期限と保存】未開封の弁当の消費期限が明日でも、表示が「10℃以下」で実際は常温放置していた。期限の前提条件に直接関わる表示項目はどれか。",
    "options": [
      "製造年月日",
      "消費期限",
      "内容量",
      "原材料名",
      "保存方法"
    ],
    "answer": 4,
    "explanation": "保存方法は期限表示の前提となる保管条件を示します。表示期限内でも条件を守らなければ安全性は保証されません。消費期限と保存方法は必ずセットで読みます。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "EXT-3-126",
    "grade": 3,
    "category": "徳を育もう",
    "kind": "choice",
    "prompt": "【深掘り・栄養成分表示】1食分にたんぱく質10g、脂質5g、炭水化物20gが含まれる。4・9・4kcal/gで概算すると何kcalになるか。",
    "options": [
      "125kcal",
      "165kcal",
      "145kcal",
      "175kcal",
      "205kcal"
    ],
    "answer": 1,
    "explanation": "10×4＋5×9＋20×4＝40＋45＋80＝165kcalです。三大栄養素の換算係数を混同しないようにします。実際の表示値では食物繊維などを考慮する場合があります。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "EXT-3-127",
    "grade": 3,
    "category": "徳を育もう",
    "kind": "choice",
    "prompt": "【応用・誤り発見】栄養成分表示の説明資料を点検する。次の「用語―説明」の組合せのうち、誤っているものを1つ選びなさい。",
    "options": [
      "kcal — 栄養成分表示で食品のエネルギーを示す単位として一般的なもの",
      "たんぱく質 — 栄養成分表示で油脂などを含む栄養素を示す欄",
      "脂質 — 栄養成分表示で油脂などを含む栄養素を示す欄",
      "炭水化物 — 栄養成分表示で糖質や食物繊維を含む総称を示す欄",
      "食塩相当量 — 栄養成分表示でナトリウム量を食塩に換算して示す欄"
    ],
    "answer": 1,
    "explanation": "誤りは「たんぱく質 — 栄養成分表示で油脂などを含む栄養素を示す欄」。栄養成分表示で油脂などを含む栄養素を示す欄は「脂質」の説明です。「たんぱく質」は「栄養成分表示で筋肉などの材料となる成分を示す欄」に当たります。残り4つの組合せは正しいものです。 【関連知識を比較】kcal：食品のエネルギーは通常kcalで表示されます。／たんぱく質：たんぱく質は栄養成分表示の基本項目です。／脂質：脂質は栄養成分表示の基本項目です。／炭水化物：炭水化物は栄養成分表示の基本項目です。／食塩相当量：食塩相当量はナトリウム量から換算した値です。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "EXT-3-128",
    "grade": 3,
    "category": "徳を育もう",
    "kind": "choice",
    "prompt": "【応用・誤り発見】栄養成分表示の食育クイズを校正する。次の「用語―説明」の組合せのうち、誤っているものを1つ選びなさい。",
    "options": [
      "炭水化物 — 栄養成分表示で糖質や食物繊維を含む総称を示す欄",
      "食塩相当量 — 栄養成分表示でナトリウム量を食塩に換算して示す欄",
      "たんぱく質 — 栄養成分表示で筋肉などの材料となる成分を示す欄",
      "脂質 — 栄養成分表示で糖質や食物繊維を含む総称を示す欄",
      "kcal — 栄養成分表示で食品のエネルギーを示す単位として一般的なもの"
    ],
    "answer": 3,
    "explanation": "誤りは「脂質 — 栄養成分表示で糖質や食物繊維を含む総称を示す欄」。栄養成分表示で糖質や食物繊維を含む総称を示す欄は「炭水化物」の説明です。「脂質」は「栄養成分表示で油脂などを含む栄養素を示す欄」に当たります。残り4つの組合せは正しいものです。 【関連知識を比較】kcal：食品のエネルギーは通常kcalで表示されます。／たんぱく質：たんぱく質は栄養成分表示の基本項目です。／脂質：脂質は栄養成分表示の基本項目です。／炭水化物：炭水化物は栄養成分表示の基本項目です。／食塩相当量：食塩相当量はナトリウム量から換算した値です。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "EXT-3-129",
    "grade": 3,
    "category": "徳を育もう",
    "kind": "choice",
    "prompt": "【深掘り・表示と食べた量】食品100g当たりの炭水化物は14gと表示されている。150g食べた場合、単純比例で炭水化物の摂取量は何gか。",
    "options": [
      "21g",
      "14g",
      "17g",
      "24g",
      "28g"
    ],
    "answer": 0,
    "explanation": "14g/100g×150g＝21gです。ラベルの「100g当たり」と「1食当たり」を混同しないことが重要です。炭水化物の総量をすべて糖質とみなしてはいけません。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "EXT-3-130",
    "grade": 3,
    "category": "徳を育もう",
    "kind": "choice",
    "prompt": "【応用・栄養表示】栄養成分表示でナトリウムが400mgと示されていた。食塩相当量をおよそ何gと考えればよいか。ナトリウム(g)×2.54で求める。",
    "options": [
      "約0.4g",
      "約0.6g",
      "約1.6g",
      "約1.0g",
      "約2.5g"
    ],
    "answer": 3,
    "explanation": "ナトリウム400mg＝0.4g。0.4×2.54＝1.016gなので食塩相当量は約1.0gです。 【復習ポイント：同分野の概念】kcal：食品のエネルギーは通常kcalで表示されます。／たんぱく質：たんぱく質は栄養成分表示の基本項目です。／脂質：脂質は栄養成分表示の基本項目です。／炭水化物：炭水化物は栄養成分表示の基本項目です。／食塩相当量：食塩相当量はナトリウム量から換算した値です。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "EXT-3-131",
    "grade": 3,
    "category": "徳を育もう",
    "kind": "choice",
    "prompt": "【深掘り・アレルギー対策】卵アレルギーのある人が包装食品を選ぶ。食品名に「卵」と書かれていなくても、特定原材料に関する情報を確認するための表示はどれか。",
    "options": [
      "販売者への確認",
      "交差接触",
      "アレルゲン表示",
      "原材料表示",
      "表示未確認の摂取"
    ],
    "answer": 2,
    "explanation": "アレルゲン表示は、食品名からは分からないアレルギー物質の有無を確認する手がかりです。原材料を読むだけでなく、加工工程や表示の注意点も必要に応じて確認します。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "EXT-3-132",
    "grade": 3,
    "category": "徳を育もう",
    "kind": "choice",
    "prompt": "【応用・誤り発見】アレルギーへの対応の説明資料を点検する。次の「用語―説明」の組合せのうち、誤っているものを1つ選びなさい。",
    "options": [
      "交差接触 — 食品の調理工程で意図せず別のアレルゲンが混入する現象",
      "販売者への確認 — 原材料にアレルゲンがないか販売店に直接確かめる行動",
      "原材料表示 — 食品の調理工程で意図せず別のアレルゲンが混入する現象",
      "アレルゲン表示 — 食品表示でアレルギー物質の情報を示す表示",
      "表示未確認の摂取 — 食物アレルギーがある人が成分を確かめずに食べる行動"
    ],
    "answer": 2,
    "explanation": "誤りは「原材料表示 — 食品の調理工程で意図せず別のアレルゲンが混入する現象」。食品の調理工程で意図せず別のアレルゲンが混入する現象は「交差接触」の説明です。「原材料表示」は「食品の購入前に特定の原材料を避けるため確認する欄」に当たります。残り4つの組合せは正しいものです。 【関連知識を比較】アレルゲン表示：アレルゲン表示は食品に含まれるアレルギー物質の確認に役立ちます。／原材料表示：原材料表示で使用された材料を確認できます。／交差接触：交差接触は意図しないアレルゲンの混入を指します。／販売者への確認：表示だけで判断できないときは販売者などに確認します。／表示未確認の摂取：アレルギーがある場合、事前の確認が重要です。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "EXT-3-133",
    "grade": 3,
    "category": "徳を育もう",
    "kind": "choice",
    "prompt": "【応用・アレルギー】小麦を使わない料理を、小麦粉を調理した直後の同じ器具で作った。意図せずアレルゲンが移る状況として最も適切なのはどれか。",
    "options": [
      "賞味期限の超過",
      "乳化",
      "食塩相当量の増加",
      "原材料表示の省略",
      "交差接触"
    ],
    "answer": 4,
    "explanation": "交差接触とは、意図せずアレルゲンが別の食品に混入することです。アレルギー対応では原材料だけでなく器具や作業工程も重要です。 【復習ポイント：同分野の概念】アレルゲン表示：アレルゲン表示は食品に含まれるアレルギー物質の確認に役立ちます。／原材料表示：原材料表示で使用された材料を確認できます。／交差接触：交差接触は意図しないアレルゲンの混入を指します。／販売者への確認：表示だけで判断できないときは販売者などに確認します。／表示未確認の摂取：アレルギーがある場合、事前の確認が重要です。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "EXT-3-134",
    "grade": 3,
    "category": "徳を育もう",
    "kind": "choice",
    "prompt": "【深掘り・外食の判断】乳アレルギーがある人が飲食店でソースの材料を尋ねたが、メニューだけでは分からない。憶測で注文する前に適切な確認行動はどれか。",
    "options": [
      "販売者への確認",
      "原材料表示",
      "交差接触",
      "アレルゲン表示",
      "表示未確認の摂取"
    ],
    "answer": 0,
    "explanation": "販売者への確認は、表示が十分でない場面で原材料・調理工程を確かめるための行動です。確認しても安全が判断できなければ食べない選択が必要で、確認自体が安全を保証するわけではありません。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "EXT-3-135",
    "grade": 3,
    "category": "徳を育もう",
    "kind": "choice",
    "prompt": "【応用・誤り発見】アレルギーへの対応について受講生がまとめた5組の説明で、誤っているものを1つ選びなさい。",
    "options": [
      "アレルゲン表示 — 食品表示でアレルギー物質の情報を示す表示",
      "販売者への確認 — 原材料にアレルゲンがないか販売店に直接確かめる行動",
      "表示未確認の摂取 — 食品表示でアレルギー物質の情報を示す表示",
      "原材料表示 — 食品の購入前に特定の原材料を避けるため確認する欄",
      "交差接触 — 食品の調理工程で意図せず別のアレルゲンが混入する現象"
    ],
    "answer": 2,
    "explanation": "誤りは「表示未確認の摂取 — 食品表示でアレルギー物質の情報を示す表示」。食品表示でアレルギー物質の情報を示す表示は「アレルゲン表示」の説明です。「表示未確認の摂取」は「食物アレルギーがある人が成分を確かめずに食べる行動」に当たります。残り4つの組合せは正しいものです。 【関連知識を比較】アレルゲン表示：アレルゲン表示は食品に含まれるアレルギー物質の確認に役立ちます。／原材料表示：原材料表示で使用された材料を確認できます。／交差接触：交差接触は意図しないアレルゲンの混入を指します。／販売者への確認：表示だけで判断できないときは販売者などに確認します。／表示未確認の摂取：アレルギーがある場合、事前の確認が重要です。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "EXT-3-136",
    "grade": 3,
    "category": "徳を育もう",
    "kind": "choice",
    "prompt": "【深掘り・認証の意味】「農薬を一切使っていない」という広告ではなく、日本の有機JAS規格に従った生産・取扱いであることを認証マークから確認したい。見るべきものはどれか。",
    "options": [
      "JASマーク",
      "製造者等の表示",
      "原産地表示",
      "名称",
      "有機JASマーク"
    ],
    "answer": 4,
    "explanation": "有機JASマークは有機JAS規格に適合する事業者が定められた基準で生産・取扱いしたことを示します。「農薬を一切使わない」ことを無条件に意味するマークではありません。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "EXT-3-137",
    "grade": 3,
    "category": "徳を育もう",
    "kind": "choice",
    "prompt": "【応用・誤り発見】食品の認証・表示の説明資料を点検する。次の「用語―説明」の組合せのうち、誤っているものを1つ選びなさい。",
    "options": [
      "JASマーク — 農林水産物や食品の産地を特定して示す表示",
      "名称 — 食品の内容物が何かを表す基本的な表示",
      "原産地表示 — 農林水産物や食品の産地を特定して示す表示",
      "製造者等の表示 — 加工食品の製造者等について記載する欄",
      "有機JASマーク — 有機食品のJAS規格適合を示す日本の認証マーク"
    ],
    "answer": 0,
    "explanation": "誤りは「JASマーク — 農林水産物や食品の産地を特定して示す表示」。農林水産物や食品の産地を特定して示す表示は「原産地表示」の説明です。「JASマーク」は「日本農林規格への適合を示すマーク」に当たります。残り4つの組合せは正しいものです。 【関連知識を比較】有機JASマーク：有機JASマークは有機JAS規格への適合を示します。／JASマーク：JASマークは所定の日本農林規格への適合を示します。／原産地表示：原産地表示は産地に関する情報です。／製造者等の表示：事業者の名称や所在地などの表示です。／名称：名称は食品の種類を知るための基本情報です。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "EXT-3-138",
    "grade": 3,
    "category": "徳を育もう",
    "kind": "choice",
    "prompt": "【深掘り・原材料の産地】袋詰めの国産りんごについて、工場や販売者の所在地ではなく、果実が生産された地域を確認したい。どの表示情報を重視するか。",
    "options": [
      "名称",
      "原産地表示",
      "製造者等の表示",
      "JASマーク",
      "有機JASマーク"
    ],
    "answer": 1,
    "explanation": "原産地表示は農産物などが生産された場所に関する情報です。製造者等の表示は事業者の所在を示すため、販売者の住所を原産地と混同してはいけません。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "EXT-3-139",
    "grade": 3,
    "category": "徳を育もう",
    "kind": "choice",
    "prompt": "【応用・組合せ】食品の認証・表示を復習するため、5組の「用語―説明」を照合する。正しいものを1つ選びなさい。",
    "options": [
      "製造者等の表示 — 加工食品の製造者等について記載する欄",
      "JASマーク — 農林水産物や食品の産地を特定して示す表示",
      "有機JASマーク — 日本農林規格への適合を示すマーク",
      "名称 — 有機食品のJAS規格適合を示す日本の認証マーク",
      "原産地表示 — 加工食品の製造者等について記載する欄"
    ],
    "answer": 0,
    "explanation": "正解は「製造者等の表示 — 加工食品の製造者等について記載する欄」。ほかの選択肢は用語と説明が入れ替わっています。名称を暗記するだけでなく、それぞれの働きや特徴を比較して覚えましょう。 【関連知識を比較】有機JASマーク：有機JASマークは有機JAS規格への適合を示します。／JASマーク：JASマークは所定の日本農林規格への適合を示します。／原産地表示：原産地表示は産地に関する情報です。／製造者等の表示：事業者の名称や所在地などの表示です。／名称：名称は食品の種類を知るための基本情報です。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "EXT-3-140",
    "grade": 3,
    "category": "徳を育もう",
    "kind": "choice",
    "prompt": "【応用・誤り発見】食品の認証・表示について受講生がまとめた5組の説明で、誤っているものを1つ選びなさい。",
    "options": [
      "原産地表示 — 農林水産物や食品の産地を特定して示す表示",
      "製造者等の表示 — 加工食品の製造者等について記載する欄",
      "有機JASマーク — 有機食品のJAS規格適合を示す日本の認証マーク",
      "名称 — 有機食品のJAS規格適合を示す日本の認証マーク",
      "JASマーク — 日本農林規格への適合を示すマーク"
    ],
    "answer": 3,
    "explanation": "誤りは「名称 — 有機食品のJAS規格適合を示す日本の認証マーク」。有機食品のJAS規格適合を示す日本の認証マークは「有機JASマーク」の説明です。「名称」は「食品の内容物が何かを表す基本的な表示」に当たります。残り4つの組合せは正しいものです。 【関連知識を比較】有機JASマーク：有機JASマークは有機JAS規格への適合を示します。／JASマーク：JASマークは所定の日本農林規格への適合を示します。／原産地表示：原産地表示は産地に関する情報です。／製造者等の表示：事業者の名称や所在地などの表示です。／名称：名称は食品の種類を知るための基本情報です。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "EXT-3-141",
    "grade": 3,
    "category": "徳を育もう",
    "kind": "choice",
    "prompt": "【深掘り・栽培方式】土を使わず養分を溶かした水を循環させ、葉物野菜を育てる施設を見学した。温室を使うか否かではなく、根からの養分供給方式に着目した名称はどれか。",
    "options": [
      "連作",
      "露地栽培",
      "輪作",
      "施設栽培",
      "養液栽培"
    ],
    "answer": 4,
    "explanation": "養液栽培は培養液などから水分と養分を供給して作物を育てます。施設栽培はハウス等を使う環境の区分で、養液栽培と両立し得るため観点を分けます。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "EXT-3-142",
    "grade": 3,
    "category": "徳を育もう",
    "kind": "choice",
    "prompt": "【応用・誤り発見】農産物の栽培方法の説明資料を点検する。次の「用語―説明」の組合せのうち、誤っているものを1つ選びなさい。",
    "options": [
      "露地栽培 — 温室やビニールハウスなどで環境を調節して育てる方法",
      "連作 — 同じ土地で同種の作物を続けて栽培すること",
      "施設栽培 — 温室やビニールハウスなどで環境を調節して育てる方法",
      "輪作 — 土壌の養分と作物の特徴を考え、育てる作物を切り替える方法",
      "養液栽培 — 土を使わず養液などで植物を育てる方法"
    ],
    "answer": 0,
    "explanation": "誤りは「露地栽培 — 温室やビニールハウスなどで環境を調節して育てる方法」。温室やビニールハウスなどで環境を調節して育てる方法は「施設栽培」の説明です。「露地栽培」は「自然光や気温を利用して屋外で作物を育てる方法」に当たります。残り4つの組合せは正しいものです。 【関連知識を比較】養液栽培：養液栽培は培養液などで植物を育てます。／露地栽培：露地栽培は屋外で作物を栽培する方法です。／施設栽培：施設栽培はハウスなどを利用します。／輪作：輪作は一定の順序で異なる作物を栽培します。／連作：連作は同じ種類の作物を同一圃場で続けて育てることです。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "EXT-3-143",
    "grade": 3,
    "category": "徳を育もう",
    "kind": "choice",
    "prompt": "【応用・誤り発見】農産物の栽培方法の食育クイズを校正する。次の「用語―説明」の組合せのうち、誤っているものを1つ選びなさい。",
    "options": [
      "連作 — 同じ土地で同種の作物を続けて栽培すること",
      "輪作 — 土壌の養分と作物の特徴を考え、育てる作物を切り替える方法",
      "施設栽培 — 土壌の養分と作物の特徴を考え、育てる作物を切り替える方法",
      "露地栽培 — 自然光や気温を利用して屋外で作物を育てる方法",
      "養液栽培 — 土を使わず養液などで植物を育てる方法"
    ],
    "answer": 2,
    "explanation": "誤りは「施設栽培 — 土壌の養分と作物の特徴を考え、育てる作物を切り替える方法」。土壌の養分と作物の特徴を考え、育てる作物を切り替える方法は「輪作」の説明です。「施設栽培」は「温室やビニールハウスなどで環境を調節して育てる方法」に当たります。残り4つの組合せは正しいものです。 【関連知識を比較】養液栽培：養液栽培は培養液などで植物を育てます。／露地栽培：露地栽培は屋外で作物を栽培する方法です。／施設栽培：施設栽培はハウスなどを利用します。／輪作：輪作は一定の順序で異なる作物を栽培します。／連作：連作は同じ種類の作物を同一圃場で続けて育てることです。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "EXT-3-144",
    "grade": 3,
    "category": "徳を育もう",
    "kind": "choice",
    "prompt": "【深掘り・土壌管理】同じ畑でトマト、豆類、葉物野菜などを計画的に順番に育て、土壌条件や病害のリスクを考える。栽培する作物を切り替える方法はどれか。",
    "options": [
      "輪作",
      "連作",
      "養液栽培",
      "露地栽培",
      "施設栽培"
    ],
    "answer": 0,
    "explanation": "輪作は同じ圃場で異なる作物を順に栽培する方法です。連作は同じ作物を続けることで、連作障害の回避などが輪作を考える理由の一つになります。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "EXT-3-145",
    "grade": 3,
    "category": "徳を育もう",
    "kind": "choice",
    "prompt": "【応用・農業】同じ畑で同じ作物を毎年作る場合と、作物の種類を順に変える場合を比較する。前者の栽培方法はどれか。",
    "options": [
      "連作",
      "輪作",
      "露地栽培",
      "施設栽培",
      "養液栽培"
    ],
    "answer": 0,
    "explanation": "連作は同じ圃場で同じ種類の作物を続けて育てることです。輪作は一定の順序で異なる作物を栽培します。 【復習ポイント：同分野の概念】養液栽培：養液栽培は培養液などで植物を育てます。／露地栽培：露地栽培は屋外で作物を栽培する方法です。／施設栽培：施設栽培はハウスなどを利用します。／輪作：輪作は一定の順序で異なる作物を栽培します。／連作：連作は同じ種類の作物を同一圃場で続けて育てることです。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "EXT-3-146",
    "grade": 3,
    "category": "徳を育もう",
    "kind": "choice",
    "prompt": "【深掘り・食品加工】牛乳に乳酸菌を加え、乳糖の一部が乳酸に変わって酸味が生じ、たんぱく質が固まる。こうした工程で作られる食品はどれか。",
    "options": [
      "豆腐",
      "納豆",
      "かまぼこ",
      "ヨーグルト",
      "うどん"
    ],
    "answer": 3,
    "explanation": "ヨーグルトは乳酸菌による発酵で作られ、乳酸による酸性化が組織の形成に関わります。豆腐は豆乳の凝固、納豆は納豆菌発酵であり、原料と微生物・工程を区別します。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "EXT-3-147",
    "grade": 3,
    "category": "徳を育もう",
    "kind": "choice",
    "prompt": "【応用・誤り発見】食品加工の基本の説明資料を点検する。次の「用語―説明」の組合せのうち、誤っているものを1つ選びなさい。",
    "options": [
      "うどん — 小麦粉を水でこね、麺状に加工した食品",
      "かまぼこ — 魚肉をすり身にして加熱して作る練り製品",
      "豆腐 — 大豆に凝固剤を加え、豆乳を固めて作る食品",
      "ヨーグルト — 牛乳を乳酸菌で発酵させて作る食品",
      "納豆 — 大豆に凝固剤を加え、豆乳を固めて作る食品"
    ],
    "answer": 4,
    "explanation": "誤りは「納豆 — 大豆に凝固剤を加え、豆乳を固めて作る食品」。大豆に凝固剤を加え、豆乳を固めて作る食品は「豆腐」の説明です。「納豆」は「大豆を納豆菌で発酵させて作る食品」に当たります。残り4つの組合せは正しいものです。 【関連知識を比較】ヨーグルト：ヨーグルトは乳酸菌による乳の発酵食品です。／納豆：納豆は納豆菌の働きを利用します。／豆腐：豆腐は豆乳のたんぱく質を凝固させて作ります。／うどん：うどんは小麦粉を原料とする麺の一種です。／かまぼこ：かまぼこは魚のすり身を加工して作ります。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "EXT-3-148",
    "grade": 3,
    "category": "徳を育もう",
    "kind": "choice",
    "prompt": "【深掘り・加工の原理】大豆を水に浸してすりつぶし、加熱・ろ過した豆乳へ凝固剤を加えて固める。微生物発酵ではなく、たんぱく質の凝固を利用した食品はどれか。",
    "options": [
      "納豆",
      "豆腐",
      "うどん",
      "かまぼこ",
      "ヨーグルト"
    ],
    "answer": 1,
    "explanation": "豆腐は豆乳に凝固剤を加えて作ります。納豆は納豆菌による発酵、ヨーグルトは乳酸菌による発酵であり、同じ「やわらかい食品」でも加工原理は異なります。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "EXT-3-149",
    "grade": 3,
    "category": "徳を育もう",
    "kind": "choice",
    "prompt": "【応用・組合せ】食品加工の基本を復習するため、5組の「用語―説明」を照合する。正しいものを1つ選びなさい。",
    "options": [
      "ヨーグルト — 大豆を納豆菌で発酵させて作る食品",
      "かまぼこ — 牛乳を乳酸菌で発酵させて作る食品",
      "うどん — 小麦粉を水でこね、麺状に加工した食品",
      "納豆 — 大豆に凝固剤を加え、豆乳を固めて作る食品",
      "豆腐 — 小麦粉を水でこね、麺状に加工した食品"
    ],
    "answer": 2,
    "explanation": "正解は「うどん — 小麦粉を水でこね、麺状に加工した食品」。ほかの選択肢は用語と説明が入れ替わっています。名称を暗記するだけでなく、それぞれの働きや特徴を比較して覚えましょう。 【関連知識を比較】ヨーグルト：ヨーグルトは乳酸菌による乳の発酵食品です。／納豆：納豆は納豆菌の働きを利用します。／豆腐：豆腐は豆乳のたんぱく質を凝固させて作ります。／うどん：うどんは小麦粉を原料とする麺の一種です。／かまぼこ：かまぼこは魚のすり身を加工して作ります。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "EXT-3-150",
    "grade": 3,
    "category": "徳を育もう",
    "kind": "choice",
    "prompt": "【応用・誤り発見】食品加工の基本について受講生がまとめた5組の説明で、誤っているものを1つ選びなさい。",
    "options": [
      "かまぼこ — 牛乳を乳酸菌で発酵させて作る食品",
      "うどん — 小麦粉を水でこね、麺状に加工した食品",
      "ヨーグルト — 牛乳を乳酸菌で発酵させて作る食品",
      "納豆 — 大豆を納豆菌で発酵させて作る食品",
      "豆腐 — 大豆に凝固剤を加え、豆乳を固めて作る食品"
    ],
    "answer": 0,
    "explanation": "誤りは「かまぼこ — 牛乳を乳酸菌で発酵させて作る食品」。牛乳を乳酸菌で発酵させて作る食品は「ヨーグルト」の説明です。「かまぼこ」は「魚肉をすり身にして加熱して作る練り製品」に当たります。残り4つの組合せは正しいものです。 【関連知識を比較】ヨーグルト：ヨーグルトは乳酸菌による乳の発酵食品です。／納豆：納豆は納豆菌の働きを利用します。／豆腐：豆腐は豆乳のたんぱく質を凝固させて作ります。／うどん：うどんは小麦粉を原料とする麺の一種です。／かまぼこ：かまぼこは魚のすり身を加工して作ります。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "EXT-3-151",
    "grade": 3,
    "category": "徳を育もう",
    "kind": "choice",
    "prompt": "【深掘り・食品群】豚ヒレ肉といわしを献立で使い分けたい。どちらもたんぱく質源だが、豚ヒレ肉の原料分類として適切な食品群はどれか。",
    "options": [
      "穀類",
      "果実類",
      "食肉類",
      "豆類",
      "魚介類"
    ],
    "answer": 2,
    "explanation": "豚ヒレ肉は食肉類です。いわしは魚介類で、栄養素の働きが重なっても原材料による食品群の分類は別です。加工品では主原料を確認する習慣を付けます。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "EXT-3-152",
    "grade": 3,
    "category": "徳を育もう",
    "kind": "choice",
    "prompt": "【応用・誤り発見】食品群の分類の説明資料を点検する。次の「用語―説明」の組合せのうち、誤っているものを1つ選びなさい。",
    "options": [
      "魚介類 — 大豆やあずきなどを含む食品群",
      "穀類 — 米や小麦などを含む食品群",
      "豆類 — 大豆やあずきなどを含む食品群",
      "果実類 — りんごやみかんなどを含む食品群",
      "食肉類 — 牛や豚などの肉を主な原材料とする食品群"
    ],
    "answer": 0,
    "explanation": "誤りは「魚介類 — 大豆やあずきなどを含む食品群」。大豆やあずきなどを含む食品群は「豆類」の説明です。「魚介類」は「さばやいわしなどを含む食品群」に当たります。残り4つの組合せは正しいものです。 【関連知識を比較】食肉類：食肉類は肉を中心とする食品群です。／魚介類：魚介類は魚や貝などを含みます。／豆類：豆類は食用の豆を含む食品群です。／穀類：穀類は米・小麦などの穀物です。／果実類：果実類にはさまざまな果物が含まれます。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "EXT-3-153",
    "grade": 3,
    "category": "徳を育もう",
    "kind": "choice",
    "prompt": "【応用・誤り発見】食品群の分類の食育クイズを校正する。次の「用語―説明」の組合せのうち、誤っているものを1つ選びなさい。",
    "options": [
      "豆類 — 米や小麦などを含む食品群",
      "穀類 — 米や小麦などを含む食品群",
      "魚介類 — さばやいわしなどを含む食品群",
      "食肉類 — 牛や豚などの肉を主な原材料とする食品群",
      "果実類 — りんごやみかんなどを含む食品群"
    ],
    "answer": 0,
    "explanation": "誤りは「豆類 — 米や小麦などを含む食品群」。米や小麦などを含む食品群は「穀類」の説明です。「豆類」は「大豆やあずきなどを含む食品群」に当たります。残り4つの組合せは正しいものです。 【関連知識を比較】食肉類：食肉類は肉を中心とする食品群です。／魚介類：魚介類は魚や貝などを含みます。／豆類：豆類は食用の豆を含む食品群です。／穀類：穀類は米・小麦などの穀物です。／果実類：果実類にはさまざまな果物が含まれます。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "EXT-3-154",
    "grade": 3,
    "category": "徳を育もう",
    "kind": "choice",
    "prompt": "【深掘り・食品群】米、麦、とうもろこしを比べると、料理の形や文化圏は違っても主に種子を食用にする共通点がある。分類上の食品群はどれか。",
    "options": [
      "魚介類",
      "穀類",
      "食肉類",
      "果実類",
      "豆類"
    ],
    "answer": 1,
    "explanation": "米・麦・とうもろこしは穀類に分類されます。豆類も種子を食べますが、食品群としては別に扱われるため、植物の部位だけでなく食品分類の枠組みも理解します。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "EXT-3-155",
    "grade": 3,
    "category": "徳を育もう",
    "kind": "choice",
    "prompt": "【応用・誤り発見】食品群の分類について受講生がまとめた5組の説明で、誤っているものを1つ選びなさい。",
    "options": [
      "食肉類 — 牛や豚などの肉を主な原材料とする食品群",
      "豆類 — 大豆やあずきなどを含む食品群",
      "魚介類 — さばやいわしなどを含む食品群",
      "穀類 — 米や小麦などを含む食品群",
      "果実類 — 牛や豚などの肉を主な原材料とする食品群"
    ],
    "answer": 4,
    "explanation": "誤りは「果実類 — 牛や豚などの肉を主な原材料とする食品群」。牛や豚などの肉を主な原材料とする食品群は「食肉類」の説明です。「果実類」は「りんごやみかんなどを含む食品群」に当たります。残り4つの組合せは正しいものです。 【関連知識を比較】食肉類：食肉類は肉を中心とする食品群です。／魚介類：魚介類は魚や貝などを含みます。／豆類：豆類は食用の豆を含む食品群です。／穀類：穀類は米・小麦などの穀物です。／果実類：果実類にはさまざまな果物が含まれます。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "EXT-3-156",
    "grade": 3,
    "category": "徳を育もう",
    "kind": "choice",
    "prompt": "【深掘り・包装と回収】透明な飲料ボトルの樹脂表示を確認したところ、再資源化の対象となるポリエチレンテレフタレートである。材料名の略号はどれか。",
    "options": [
      "PET",
      "紙",
      "アルミニウム",
      "ガラス",
      "スチール"
    ],
    "answer": 0,
    "explanation": "PETはポリエチレンテレフタレートの略称です。スチールやアルミニウムは金属、ガラスは無機材料です。食品包装は素材ごとの性質と分別方法を合わせて考えます。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "EXT-3-157",
    "grade": 3,
    "category": "徳を育もう",
    "kind": "choice",
    "prompt": "【応用・誤り発見】食品包装の材質の説明資料を点検する。次の「用語―説明」の組合せのうち、誤っているものを1つ選びなさい。",
    "options": [
      "紙 — 牛乳パックなどでよく使われる繊維系の包装材料",
      "ガラス — ジャムの容器などとして使われる透明で硬い素材",
      "アルミニウム — 飲料缶などに広く使われる軽い金属",
      "PET — 透明で軽く、飲料用ボトルなどに使われる樹脂の一つ",
      "スチール — 飲料缶などに広く使われる軽い金属"
    ],
    "answer": 4,
    "explanation": "誤りは「スチール — 飲料缶などに広く使われる軽い金属」。飲料缶などに広く使われる軽い金属は「アルミニウム」の説明です。「スチール」は「缶詰の容器として広く使われる金属の一つ」に当たります。残り4つの組合せは正しいものです。 【関連知識を比較】PET：PETは飲料容器などに利用される合成樹脂です。／スチール：スチールは食品缶などの材料になります。／アルミニウム：アルミニウムは軽く、飲料缶などに使われます。／ガラス：ガラスびんは食品保存容器として利用されます。／紙：紙は飲料用紙容器などの材料に使われます。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "EXT-3-158",
    "grade": 3,
    "category": "徳を育もう",
    "kind": "choice",
    "prompt": "【応用・誤り発見】食品包装の材質の食育クイズを校正する。次の「用語―説明」の組合せのうち、誤っているものを1つ選びなさい。",
    "options": [
      "ガラス — ジャムの容器などとして使われる透明で硬い素材",
      "スチール — 缶詰の容器として広く使われる金属の一つ",
      "紙 — 牛乳パックなどでよく使われる繊維系の包装材料",
      "アルミニウム — ジャムの容器などとして使われる透明で硬い素材",
      "PET — 透明で軽く、飲料用ボトルなどに使われる樹脂の一つ"
    ],
    "answer": 3,
    "explanation": "誤りは「アルミニウム — ジャムの容器などとして使われる透明で硬い素材」。ジャムの容器などとして使われる透明で硬い素材は「ガラス」の説明です。「アルミニウム」は「飲料缶などに広く使われる軽い金属」に当たります。残り4つの組合せは正しいものです。 【関連知識を比較】PET：PETは飲料容器などに利用される合成樹脂です。／スチール：スチールは食品缶などの材料になります。／アルミニウム：アルミニウムは軽く、飲料缶などに使われます。／ガラス：ガラスびんは食品保存容器として利用されます。／紙：紙は飲料用紙容器などの材料に使われます。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "EXT-3-159",
    "grade": 3,
    "category": "徳を育もう",
    "kind": "choice",
    "prompt": "【深掘り・包装特性】ジャムを入れる容器に、内容物が見え、においが移りにくい硬質材料を使いたい。ただし割れる危険や重量も考える必要がある。該当する材料はどれか。",
    "options": [
      "アルミニウム",
      "ガラス",
      "紙",
      "スチール",
      "PET"
    ],
    "answer": 1,
    "explanation": "ガラスは透明性や化学的安定性が長所で、ジャム瓶などに使われます。一方で重く割れやすいことがあり、PETなど他材料との利点・欠点を比較して選択します。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "EXT-3-160",
    "grade": 3,
    "category": "徳を育もう",
    "kind": "choice",
    "prompt": "【応用・誤り発見】食品包装の材質について受講生がまとめた5組の説明で、誤っているものを1つ選びなさい。",
    "options": [
      "スチール — 缶詰の容器として広く使われる金属の一つ",
      "アルミニウム — 飲料缶などに広く使われる軽い金属",
      "紙 — 透明で軽く、飲料用ボトルなどに使われる樹脂の一つ",
      "PET — 透明で軽く、飲料用ボトルなどに使われる樹脂の一つ",
      "ガラス — ジャムの容器などとして使われる透明で硬い素材"
    ],
    "answer": 2,
    "explanation": "誤りは「紙 — 透明で軽く、飲料用ボトルなどに使われる樹脂の一つ」。透明で軽く、飲料用ボトルなどに使われる樹脂の一つは「PET」の説明です。「紙」は「牛乳パックなどでよく使われる繊維系の包装材料」に当たります。残り4つの組合せは正しいものです。 【関連知識を比較】PET：PETは飲料容器などに利用される合成樹脂です。／スチール：スチールは食品缶などの材料になります。／アルミニウム：アルミニウムは軽く、飲料缶などに使われます。／ガラス：ガラスびんは食品保存容器として利用されます。／紙：紙は飲料用紙容器などの材料に使われます。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "EXT-3-161",
    "grade": 3,
    "category": "徳を育もう",
    "kind": "choice",
    "prompt": "【深掘り・添加物の役割】いちご味の菓子の見た目の色を調整したい。甘さや香り、保存性を変えるのが主目的ではない場合、用途区分はどれか。",
    "options": [
      "香料",
      "甘味料",
      "保存料",
      "着色料",
      "乳化剤"
    ],
    "answer": 3,
    "explanation": "着色料は食品の色を付ける・整えるために使用されます。甘味料は甘さ、香料は香り、保存料は保存性というように、役割から区分を見分けます。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "EXT-3-162",
    "grade": 3,
    "category": "徳を育もう",
    "kind": "choice",
    "prompt": "【応用・誤り発見】食品添加物の用途の説明資料を点検する。次の「用語―説明」の組合せのうち、誤っているものを1つ選びなさい。",
    "options": [
      "甘味料 — 食品に香りを付ける目的で使用される添加物の区分",
      "着色料 — 加工食品の色を調整する目的で使用される添加物の区分",
      "乳化剤 — 油と水を混ざりやすくする目的で使用する添加物",
      "香料 — 食品に香りを付ける目的で使用される添加物の区分",
      "保存料 — 微生物の増殖を抑え、保存性を高める目的で使われる添加物"
    ],
    "answer": 0,
    "explanation": "誤りは「甘味料 — 食品に香りを付ける目的で使用される添加物の区分」。食品に香りを付ける目的で使用される添加物の区分は「香料」の説明です。「甘味料」は「食品に甘味を付ける目的で使用される添加物の区分」に当たります。残り4つの組合せは正しいものです。 【関連知識を比較】着色料：着色料は食品に色を付けたり調整したりします。／甘味料：甘味料は食品に甘味を付けます。／香料：香料は食品の香りを調整する目的で使われます。／保存料：保存料は食品の保存性を高めるために使われます。／乳化剤：乳化剤は油と水のような成分を安定化します。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "EXT-3-163",
    "grade": 3,
    "category": "徳を育もう",
    "kind": "choice",
    "prompt": "【応用・誤り発見】食品添加物の用途の食育クイズを校正する。次の「用語―説明」の組合せのうち、誤っているものを1つ選びなさい。",
    "options": [
      "着色料 — 加工食品の色を調整する目的で使用される添加物の区分",
      "香料 — 微生物の増殖を抑え、保存性を高める目的で使われる添加物",
      "甘味料 — 食品に甘味を付ける目的で使用される添加物の区分",
      "保存料 — 微生物の増殖を抑え、保存性を高める目的で使われる添加物",
      "乳化剤 — 油と水を混ざりやすくする目的で使用する添加物"
    ],
    "answer": 1,
    "explanation": "誤りは「香料 — 微生物の増殖を抑え、保存性を高める目的で使われる添加物」。微生物の増殖を抑え、保存性を高める目的で使われる添加物は「保存料」の説明です。「香料」は「食品に香りを付ける目的で使用される添加物の区分」に当たります。残り4つの組合せは正しいものです。 【関連知識を比較】着色料：着色料は食品に色を付けたり調整したりします。／甘味料：甘味料は食品に甘味を付けます。／香料：香料は食品の香りを調整する目的で使われます。／保存料：保存料は食品の保存性を高めるために使われます。／乳化剤：乳化剤は油と水のような成分を安定化します。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "EXT-3-164",
    "grade": 3,
    "category": "徳を育もう",
    "kind": "choice",
    "prompt": "【応用・食品添加物】加工食品の製造で、品質を保つために微生物の増殖を抑える目的で使用する添加物の区分はどれか。",
    "options": [
      "着色料",
      "甘味料",
      "香料",
      "保存料",
      "乳化剤"
    ],
    "answer": 3,
    "explanation": "保存料は微生物による変敗などを抑えて保存性を高めます。着色料、甘味料、香料、乳化剤とは用途が異なります。 【復習ポイント：同分野の概念】着色料：着色料は食品に色を付けたり調整したりします。／甘味料：甘味料は食品に甘味を付けます。／香料：香料は食品の香りを調整する目的で使われます。／保存料：保存料は食品の保存性を高めるために使われます。／乳化剤：乳化剤は油と水のような成分を安定化します。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "EXT-3-165",
    "grade": 3,
    "category": "徳を育もう",
    "kind": "choice",
    "prompt": "【深掘り・食品の状態】水と油を混ぜたドレッシングがすぐ分離してしまう。油滴を細かく分散させ、混ざった状態を安定させる目的の添加物はどれか。",
    "options": [
      "着色料",
      "保存料",
      "香料",
      "乳化剤",
      "甘味料"
    ],
    "answer": 3,
    "explanation": "乳化剤は水と油のような混ざりにくい成分の界面に作用し、分散した状態を安定させます。防腐のための保存料、色を変える着色料とは目的が異なります。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "EXT-3-166",
    "grade": 3,
    "category": "徳を育もう",
    "kind": "choice",
    "prompt": "【深掘り・法令の区別】飲食店で衛生管理の不備があり、食中毒の発生を防ぐための行政上の措置を考える。食品の衛生上の危害防止に直接関わる法律はどれか。",
    "options": [
      "食品安全基本法",
      "食品表示法",
      "JAS法",
      "食品衛生法",
      "景品表示法"
    ],
    "answer": 3,
    "explanation": "食品衛生法は飲食による衛生上の危害の発生を防止するための制度に関わります。食品表示法は表示、景品表示法は不当表示など、法律が対象とする問題を区別します。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "EXT-3-167",
    "grade": 3,
    "category": "徳を育もう",
    "kind": "choice",
    "prompt": "【深掘り・法律の適用】包装食品の栄養成分表示の制度と、実際より著しく優良に見せる広告表示の規制を、それぞれ主に扱う法律の組合せはどれか。順序に注意する。",
    "options": [
      "景品表示法・食品表示法",
      "食品衛生法・食品表示法",
      "食品安全基本法・食品衛生法",
      "JAS法・食品安全基本法",
      "食品表示法・景品表示法"
    ],
    "answer": 4,
    "explanation": "栄養成分表示などの制度は食品表示法、優良誤認など不当表示は景品表示法が関わります。広告も食品情報ですが、表示制度と不当表示規制を同一の法律だと思い込まないようにします。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "EXT-3-168",
    "grade": 3,
    "category": "徳を育もう",
    "kind": "choice",
    "prompt": "【応用・誤り発見】食品関連の法律の食育クイズを校正する。次の「用語―説明」の組合せのうち、誤っているものを1つ選びなさい。",
    "options": [
      "食品表示法 — 食品の表示制度について基本的な枠組みを定める法律",
      "食品衛生法 — 日本の食品の衛生に関する基本的な法律",
      "景品表示法 — 消費者を誤認させる不当表示などを規制する法律",
      "食品安全基本法 — 食品の安全性に関する基本理念を定める法律",
      "JAS法 — 消費者を誤認させる不当表示などを規制する法律"
    ],
    "answer": 4,
    "explanation": "誤りは「JAS法 — 消費者を誤認させる不当表示などを規制する法律」。消費者を誤認させる不当表示などを規制する法律は「景品表示法」の説明です。「JAS法」は「農林物資の規格・品質表示などに関係する法律」に当たります。残り4つの組合せは正しいものです。 【関連知識を比較】食品衛生法：食品衛生法は飲食に起因する衛生上の危害の防止を目的とします。／食品表示法：食品表示法は食品表示の基準などを定めます。／JAS法：JAS法は日本農林規格などに関する法律です。／景品表示法：景品表示法は不当な表示などを規制します。／食品安全基本法：食品安全基本法は食品安全行政の基本理念などを定めます。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "EXT-3-169",
    "grade": 3,
    "category": "徳を育もう",
    "kind": "choice",
    "prompt": "【応用・法律】広告で、食品の品質・価格について消費者を誤認させる優良誤認・有利誤認の表示を防止する法律はどれか。",
    "options": [
      "食品衛生法",
      "食品表示法",
      "食品安全基本法",
      "景品表示法",
      "JAS法"
    ],
    "answer": 3,
    "explanation": "景品表示法は不当な表示を規制します。食品表示法は食品の表示の制度、食品衛生法は衛生管理などと関わります。 【復習ポイント：同分野の概念】食品衛生法：食品衛生法は飲食に起因する衛生上の危害の防止を目的とします。／食品表示法：食品表示法は食品表示の基準などを定めます。／JAS法：JAS法は日本農林規格などに関する法律です。／景品表示法：景品表示法は不当な表示などを規制します。／食品安全基本法：食品安全基本法は食品安全行政の基本理念などを定めます。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "EXT-3-170",
    "grade": 3,
    "category": "徳を育もう",
    "kind": "choice",
    "prompt": "【応用・誤り発見】食品関連の法律について受講生がまとめた5組の説明で、誤っているものを1つ選びなさい。",
    "options": [
      "食品表示法 — 食品の表示制度について基本的な枠組みを定める法律",
      "景品表示法 — 消費者を誤認させる不当表示などを規制する法律",
      "JAS法 — 農林物資の規格・品質表示などに関係する法律",
      "食品安全基本法 — 日本の食品の衛生に関する基本的な法律",
      "食品衛生法 — 日本の食品の衛生に関する基本的な法律"
    ],
    "answer": 3,
    "explanation": "誤りは「食品安全基本法 — 日本の食品の衛生に関する基本的な法律」。日本の食品の衛生に関する基本的な法律は「食品衛生法」の説明です。「食品安全基本法」は「食品の安全性に関する基本理念を定める法律」に当たります。残り4つの組合せは正しいものです。 【関連知識を比較】食品衛生法：食品衛生法は飲食に起因する衛生上の危害の防止を目的とします。／食品表示法：食品表示法は食品表示の基準などを定めます。／JAS法：JAS法は日本農林規格などに関する法律です。／景品表示法：景品表示法は不当な表示などを規制します。／食品安全基本法：食品安全基本法は食品安全行政の基本理念などを定めます。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "EXT-3-171",
    "grade": 3,
    "category": "徳を育もう",
    "kind": "choice",
    "prompt": "【深掘り・減塩の比較】商品Aは食塩相当量0.8g/100gで1食150g、商品Bは1.0g/100gで1食100g。1食を全部食べるなら食塩相当量が少ないのはどちらか。",
    "options": [
      "商品A（1食0.8g）",
      "商品A（1食1.2g）",
      "商品B（1食1.0g）",
      "商品B（1食1.5g）",
      "どちらも1食1.2g"
    ],
    "answer": 2,
    "explanation": "Aは0.8×1.5＝1.2g、Bは1.0×1＝1.0gなのでBの方が少ないです。100g当たりの数値だけで比較すると、食べる量の違いを見落とす典型例です。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "EXT-3-172",
    "grade": 3,
    "category": "徳を育もう",
    "kind": "choice",
    "prompt": "【応用・誤り発見】食品選びの表示確認の説明資料を点検する。次の「用語―説明」の組合せのうち、誤っているものを1つ選びなさい。",
    "options": [
      "内容量 — 一袋あたりに何グラム入っているかを知る表示",
      "保存方法 — 牛乳を買う際に冷蔵が必要か判断するため最初に確認すべき表示",
      "原材料・アレルゲン表示 — 食品に小麦が使われているかを調べる際に見るべき表示",
      "食塩相当量 — 食品に小麦が使われているかを調べる際に見るべき表示",
      "賞味期限 — 開封前の食品がいつまで品質を保てるかを知る表示"
    ],
    "answer": 3,
    "explanation": "誤りは「食塩相当量 — 食品に小麦が使われているかを調べる際に見るべき表示」。食品に小麦が使われているかを調べる際に見るべき表示は「原材料・アレルゲン表示」の説明です。「食塩相当量」は「食塩摂取を気にする人が比較する際に役立つ栄養表示項目」に当たります。残り4つの組合せは正しいものです。 【関連知識を比較】保存方法：保存方法には適切な保管条件が記載されます。／食塩相当量：食塩相当量を比較すると食塩量の目安になります。／原材料・アレルゲン表示：原材料とアレルゲンの表示を確認します。／賞味期限：賞味期限は未開封かつ表示の保存条件での期限です。／内容量：内容量は包装内の量を示す表示です。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "EXT-3-173",
    "grade": 3,
    "category": "徳を育もう",
    "kind": "choice",
    "prompt": "【深掘り・アレルギー判断】小麦アレルギーがある人が外食する。料理名に小麦と書かれていないが、調理場では小麦粉を扱っている。最も適切な確認手順はどれか。",
    "options": [
      "料理名に小麦がなければ問題ないと判断する",
      "材料とアレルゲン情報を確認し、交差接触の可能性も店に尋ねる",
      "原材料だけ見れば調理工程は確認不要と判断する",
      "同じ料理を以前食べられたので確認せず注文する",
      "加熱すれば小麦アレルゲンは必ず消えると考える"
    ],
    "answer": 1,
    "explanation": "食物アレルギーでは材料と表示の確認に加え、共用器具や粉の付着などによる交差接触にも注意します。店舗が安全性を確認できない場合は無理に食べず、個別の指導も踏まえて判断します。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "EXT-3-174",
    "grade": 3,
    "category": "徳を育もう",
    "kind": "choice",
    "prompt": "【応用・食品の期限】未開封の乾麺を表示どおりに保存していた。期限が過ぎた瞬間に必ず食べられなくなることを意味しない表示はどれか。",
    "options": [
      "消費期限",
      "製造年月日",
      "原産地表示",
      "賞味期限",
      "製造所表示"
    ],
    "answer": 3,
    "explanation": "賞味期限はおいしく食べられる期限の目安です。期限後の食品は状態や保存状況を確認し、無条件に安全と決めつけないようにします。 【復習ポイント：同分野の概念】保存方法：保存方法には適切な保管条件が記載されます。／食塩相当量：食塩相当量を比較すると食塩量の目安になります。／原材料・アレルゲン表示：原材料とアレルゲンの表示を確認します。／賞味期限：賞味期限は未開封かつ表示の保存条件での期限です。／内容量：内容量は包装内の量を示す表示です。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "EXT-3-175",
    "grade": 3,
    "category": "徳を育もう",
    "kind": "choice",
    "prompt": "【応用・誤り発見】食品選びの表示確認について受講生がまとめた5組の説明で、誤っているものを1つ選びなさい。",
    "options": [
      "内容量 — 牛乳を買う際に冷蔵が必要か判断するため最初に確認すべき表示",
      "賞味期限 — 開封前の食品がいつまで品質を保てるかを知る表示",
      "食塩相当量 — 食塩摂取を気にする人が比較する際に役立つ栄養表示項目",
      "保存方法 — 牛乳を買う際に冷蔵が必要か判断するため最初に確認すべき表示",
      "原材料・アレルゲン表示 — 食品に小麦が使われているかを調べる際に見るべき表示"
    ],
    "answer": 0,
    "explanation": "誤りは「内容量 — 牛乳を買う際に冷蔵が必要か判断するため最初に確認すべき表示」。牛乳を買う際に冷蔵が必要か判断するため最初に確認すべき表示は「保存方法」の説明です。「内容量」は「一袋あたりに何グラム入っているかを知る表示」に当たります。残り4つの組合せは正しいものです。 【関連知識を比較】保存方法：保存方法には適切な保管条件が記載されます。／食塩相当量：食塩相当量を比較すると食塩量の目安になります。／原材料・アレルゲン表示：原材料とアレルゲンの表示を確認します。／賞味期限：賞味期限は未開封かつ表示の保存条件での期限です。／内容量：内容量は包装内の量を示す表示です。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "EXT-3-176",
    "grade": 3,
    "category": "徳を育もう",
    "kind": "choice",
    "prompt": "【応用・組合せ】食品の製造・流通履歴の学習カードを作る。次の「用語―説明」の組合せのうち、正しいものを1つ選びなさい。",
    "options": [
      "原産地表示 — 食品の取引の際に識別に使う一連の製造単位",
      "製造者表示 — 食品を作った事業者を確認する情報",
      "トレーサビリティ — 食品を作った事業者を確認する情報",
      "ロット — 食品の生産や流通の履歴をたどる仕組み",
      "製造所表示 — 農産物がどこで作られたかを確認する表示"
    ],
    "answer": 1,
    "explanation": "正解は「製造者表示 — 食品を作った事業者を確認する情報」。ほかの選択肢は用語と説明が入れ替わっています。名称を暗記するだけでなく、それぞれの働きや特徴を比較して覚えましょう。 【関連知識を比較】製造者表示：製造者表示は事業者の特定に役立ちます。／製造所表示：製造所表示は製造施設の所在地などを示します。／原産地表示：原産地表示は産地についての情報です。／ロット：ロットは管理上ひとまとまりとする製造単位です。／トレーサビリティ：トレーサビリティは食品の履歴を追跡する仕組みです。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "EXT-3-177",
    "grade": 3,
    "category": "徳を育もう",
    "kind": "choice",
    "prompt": "【深掘り・食品の追跡】食品の製造会社は同じでも工場が複数ある。回収情報を調べる際、事業者名ではなく「どの施設で作ったか」を知るための表示はどれか。",
    "options": [
      "製造所表示",
      "原産地表示",
      "ロット",
      "製造者表示",
      "トレーサビリティ"
    ],
    "answer": 0,
    "explanation": "製造所表示は製造した施設を特定するための情報です。製造者表示は事業者、ロットは製造単位を示し、回収時にはこれらを組み合わせることがあります。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "EXT-3-178",
    "grade": 3,
    "category": "徳を育もう",
    "kind": "choice",
    "prompt": "【応用・原産地】包装された農産物について、収穫された場所がどこかを確認するために見る情報はどれか。",
    "options": [
      "製造所表示",
      "原産地表示",
      "製造者表示",
      "ロット",
      "内容量"
    ],
    "answer": 1,
    "explanation": "原産地表示は食品や原材料の産地を示すものです。加工場所を示す製造所や製造者の表示と異なります。 【復習ポイント：同分野の概念】製造者表示：製造者表示は事業者の特定に役立ちます。／製造所表示：製造所表示は製造施設の所在地などを示します。／原産地表示：原産地表示は産地についての情報です。／ロット：ロットは管理上ひとまとまりとする製造単位です。／トレーサビリティ：トレーサビリティは食品の履歴を追跡する仕組みです。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "EXT-3-179",
    "grade": 3,
    "category": "徳を育もう",
    "kind": "choice",
    "prompt": "【深掘り・リコール】同じ工場で製造した商品に一部だけ品質上の問題が見つかった。生産時期ごとの対象範囲を絞るため、製造単位を識別する情報はどれか。",
    "options": [
      "原産地表示",
      "トレーサビリティ",
      "製造者表示",
      "製造所表示",
      "ロット"
    ],
    "answer": 4,
    "explanation": "ロットは管理上ひとまとまりに扱う製造単位です。製造所は場所、トレーサビリティは履歴をたどる仕組みで、製造単位の識別と追跡を組み合わせて回収します。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "EXT-3-180",
    "grade": 3,
    "category": "徳を育もう",
    "kind": "choice",
    "prompt": "【応用・誤り発見】食品の製造・流通履歴について受講生がまとめた5組の説明で、誤っているものを1つ選びなさい。",
    "options": [
      "製造所表示 — 食品が作られた場所について知るための表示",
      "原産地表示 — 農産物がどこで作られたかを確認する表示",
      "トレーサビリティ — 食品を作った事業者を確認する情報",
      "ロット — 食品の取引の際に識別に使う一連の製造単位",
      "製造者表示 — 食品を作った事業者を確認する情報"
    ],
    "answer": 2,
    "explanation": "誤りは「トレーサビリティ — 食品を作った事業者を確認する情報」。食品を作った事業者を確認する情報は「製造者表示」の説明です。「トレーサビリティ」は「食品の生産や流通の履歴をたどる仕組み」に当たります。残り4つの組合せは正しいものです。 【関連知識を比較】製造者表示：製造者表示は事業者の特定に役立ちます。／製造所表示：製造所表示は製造施設の所在地などを示します。／原産地表示：原産地表示は産地についての情報です。／ロット：ロットは管理上ひとまとまりとする製造単位です。／トレーサビリティ：トレーサビリティは食品の履歴を追跡する仕組みです。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "EXT-3-181",
    "grade": 3,
    "category": "才を育もう",
    "kind": "choice",
    "prompt": "【深掘り・食中毒の原因】飲食店で加熱不足の鶏肉を食べた数日後、下痢や腹痛の集団発生が疑われた。鶏肉との関連が特に強い細菌を選びなさい。",
    "options": [
      "カンピロバクター",
      "黄色ブドウ球菌",
      "アニサキス",
      "サルモネラ属菌",
      "ノロウイルス"
    ],
    "answer": 0,
    "explanation": "カンピロバクターは加熱不足の鶏肉などとの関連が深い食中毒原因菌です。ノロウイルスはウイルス、アニサキスは寄生虫で、原因物質と食品との組合せを区別します。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "EXT-3-182",
    "grade": 3,
    "category": "才を育もう",
    "kind": "choice",
    "prompt": "【応用・食中毒】調理する人に嘔吐と下痢があり、少量でも人から人へ広がりやすい病原体への注意が必要である。特に関係が深いものはどれか。",
    "options": [
      "ノロウイルス",
      "カンピロバクター",
      "サルモネラ属菌",
      "黄色ブドウ球菌",
      "アニサキス"
    ],
    "answer": 0,
    "explanation": "ノロウイルスは少量でも感染が成立しやすく、嘔吐や下痢を起こします。体調不良時は食品の取扱いを控えます。 【復習ポイント：同分野の概念】カンピロバクター：カンピロバクターは鶏肉の生食や加熱不足に注意が必要です。／ノロウイルス：ノロウイルスは感染力が強く、手指や食品などを介して広がります。／サルモネラ属菌：サルモネラ属菌は卵や食肉の衛生管理が重要です。／黄色ブドウ球菌：黄色ブドウ球菌は食品中で毒素を作ることがあります。／アニサキス：アニサキスは生魚介類に由来する食中毒の原因となります。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "EXT-3-183",
    "grade": 3,
    "category": "才を育もう",
    "kind": "choice",
    "prompt": "【応用・誤り発見】食中毒の原因の食育クイズを校正する。次の「用語―説明」の組合せのうち、誤っているものを1つ選びなさい。",
    "options": [
      "カンピロバクター — 加熱不十分な鶏肉などと関連が深い食中毒原因菌",
      "サルモネラ属菌 — おにぎりなどに手指から付着し、作られた毒素が原因となり得る菌",
      "アニサキス — 生魚介類に寄生し、激しい腹痛を起こすことがある寄生虫",
      "ノロウイルス — 嘔吐や下痢を起こし、少量でも感染が成立しやすいウイルス",
      "黄色ブドウ球菌 — おにぎりなどに手指から付着し、作られた毒素が原因となり得る菌"
    ],
    "answer": 1,
    "explanation": "誤りは「サルモネラ属菌 — おにぎりなどに手指から付着し、作られた毒素が原因となり得る菌」。おにぎりなどに手指から付着し、作られた毒素が原因となり得る菌は「黄色ブドウ球菌」の説明です。「サルモネラ属菌」は「加熱不十分な卵や食肉などに関連する食中毒原因菌」に当たります。残り4つの組合せは正しいものです。 【関連知識を比較】カンピロバクター：カンピロバクターは鶏肉の生食や加熱不足に注意が必要です。／ノロウイルス：ノロウイルスは感染力が強く、手指や食品などを介して広がります。／サルモネラ属菌：サルモネラ属菌は卵や食肉の衛生管理が重要です。／黄色ブドウ球菌：黄色ブドウ球菌は食品中で毒素を作ることがあります。／アニサキス：アニサキスは生魚介類に由来する食中毒の原因となります。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "EXT-3-184",
    "grade": 3,
    "category": "才を育もう",
    "kind": "choice",
    "prompt": "【深掘り・毒素と加熱】手指の傷から黄色ブドウ球菌が食品に付着し、長時間の常温保存で毒素が作られた疑いがある。最も適切な対応はどれか。",
    "options": [
      "十分に温めれば毒素は必ず無害化すると考えて提供する",
      "見た目が正常なら安全と考えて提供する",
      "塩を振るだけで安全になるとして提供する",
      "汚染や毒素産生が疑われる食品は提供せず、手指衛生と温度管理を徹底する",
      "冷蔵庫に戻せば既にできた毒素が消えるとして提供する"
    ],
    "answer": 3,
    "explanation": "黄色ブドウ球菌のエンテロトキシンは耐熱性があり、通常の加熱で完全に無害化できるとは限りません。食品への付着・増殖・毒素産生を起こさせない衛生管理が重要です。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "EXT-3-185",
    "grade": 3,
    "category": "才を育もう",
    "kind": "choice",
    "prompt": "【応用・誤り発見】食中毒の原因について受講生がまとめた5組の説明で、誤っているものを1つ選びなさい。",
    "options": [
      "カンピロバクター — 加熱不十分な鶏肉などと関連が深い食中毒原因菌",
      "サルモネラ属菌 — 加熱不十分な卵や食肉などに関連する食中毒原因菌",
      "アニサキス — 加熱不十分な鶏肉などと関連が深い食中毒原因菌",
      "黄色ブドウ球菌 — おにぎりなどに手指から付着し、作られた毒素が原因となり得る菌",
      "ノロウイルス — 嘔吐や下痢を起こし、少量でも感染が成立しやすいウイルス"
    ],
    "answer": 2,
    "explanation": "誤りは「アニサキス — 加熱不十分な鶏肉などと関連が深い食中毒原因菌」。加熱不十分な鶏肉などと関連が深い食中毒原因菌は「カンピロバクター」の説明です。「アニサキス」は「生魚介類に寄生し、激しい腹痛を起こすことがある寄生虫」に当たります。残り4つの組合せは正しいものです。 【関連知識を比較】カンピロバクター：カンピロバクターは鶏肉の生食や加熱不足に注意が必要です。／ノロウイルス：ノロウイルスは感染力が強く、手指や食品などを介して広がります。／サルモネラ属菌：サルモネラ属菌は卵や食肉の衛生管理が重要です。／黄色ブドウ球菌：黄色ブドウ球菌は食品中で毒素を作ることがあります。／アニサキス：アニサキスは生魚介類に由来する食中毒の原因となります。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "EXT-3-186",
    "grade": 3,
    "category": "才を育もう",
    "kind": "choice",
    "prompt": "【深掘り・感染予防の工程】生肉を扱った直後にサラダを盛りつける。器具を替えるだけでなく、調理者の手からの汚染を減らすため優先して行う基本行動はどれか。",
    "options": [
      "交差汚染",
      "手洗い",
      "迅速な冷却・保存",
      "器具の使い分け",
      "中心部までの加熱"
    ],
    "answer": 1,
    "explanation": "手洗いは手指に付着した汚れや微生物を減らす基本です。器具の使い分けも必要ですが、手指を介した交差汚染も防ぐため、工程の切り替え時に行います。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "EXT-3-187",
    "grade": 3,
    "category": "才を育もう",
    "kind": "choice",
    "prompt": "【応用・交差汚染】鶏肉を切った後、同じまな板を洗わずに生で食べるレタスを切った。最も懸念されるのはどれか。",
    "options": [
      "十分な加熱",
      "交差汚染",
      "迅速な冷却・保存",
      "器具の使い分け",
      "手洗い"
    ],
    "answer": 1,
    "explanation": "生の鶏肉から付着した微生物が器具を介して生食野菜に移るのは交差汚染です。器具の使い分けや洗浄・消毒が対策です。 【復習ポイント：同分野の概念】手洗い：手洗いは病原体の持ち込みを減らします。／交差汚染：生肉由来の微生物が別の食品に移る可能性があります。／器具の使い分け：器具を分けることで交差汚染を減らせます。／中心部までの加熱：中心部まで十分に加熱すると多くの食中毒菌の危険を減らせます。／迅速な冷却・保存：適切な温度管理により微生物の増殖リスクを下げられます。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "EXT-3-188",
    "grade": 3,
    "category": "才を育もう",
    "kind": "choice",
    "prompt": "【応用・誤り発見】調理中の衛生対策の食育クイズを校正する。次の「用語―説明」の組合せのうち、誤っているものを1つ選びなさい。",
    "options": [
      "交差汚染 — 生肉に使った包丁を洗わずにサラダへ使うことで起こる問題",
      "器具の使い分け — 加熱が必要な食品の中心まで十分に熱を通す行動",
      "迅速な冷却・保存 — 調理後に長時間常温放置せず速やかに保管する行動",
      "中心部までの加熱 — 加熱が必要な食品の中心まで十分に熱を通す行動",
      "手洗い — 調理前やトイレ後に石けんと流水で行う衛生行動"
    ],
    "answer": 1,
    "explanation": "誤りは「器具の使い分け — 加熱が必要な食品の中心まで十分に熱を通す行動」。加熱が必要な食品の中心まで十分に熱を通す行動は「中心部までの加熱」の説明です。「器具の使い分け」は「生食用の野菜と生肉で道具を分けること」に当たります。残り4つの組合せは正しいものです。 【関連知識を比較】手洗い：手洗いは病原体の持ち込みを減らします。／交差汚染：生肉由来の微生物が別の食品に移る可能性があります。／器具の使い分け：器具を分けることで交差汚染を減らせます。／中心部までの加熱：中心部まで十分に加熱すると多くの食中毒菌の危険を減らせます。／迅速な冷却・保存：適切な温度管理により微生物の増殖リスクを下げられます。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "EXT-3-189",
    "grade": 3,
    "category": "才を育もう",
    "kind": "choice",
    "prompt": "【深掘り・加熱と交差汚染】家庭でハンバーグを作る。調理前に生肉用のまな板を使用した。食品安全の観点から、加熱と器具管理を組み合わせた最も適切な対応はどれか。",
    "options": [
      "中心まで十分に加熱し、生肉に使った器具は洗浄・必要な消毒をする",
      "表面に焼き色を付ければ中心温度の確認は不要",
      "肉を冷蔵していたので加熱せず食べてもよい",
      "生肉に使った器具を洗わずにサラダへ使う",
      "加熱後の食品を長時間室温で放置してから提供する"
    ],
    "answer": 0,
    "explanation": "表面が焼けても中心部に危険が残る場合があるため、中心まで十分に加熱します。生肉由来の微生物が器具から生食野菜へ移る交差汚染も防止します。一般的な加熱目安は中心75℃で1分間以上です。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "EXT-3-190",
    "grade": 3,
    "category": "才を育もう",
    "kind": "choice",
    "prompt": "【応用・誤り発見】調理中の衛生対策について受講生がまとめた5組の説明で、誤っているものを1つ選びなさい。",
    "options": [
      "手洗い — 調理前やトイレ後に石けんと流水で行う衛生行動",
      "交差汚染 — 生肉に使った包丁を洗わずにサラダへ使うことで起こる問題",
      "器具の使い分け — 生食用の野菜と生肉で道具を分けること",
      "中心部までの加熱 — 加熱が必要な食品の中心まで十分に熱を通す行動",
      "迅速な冷却・保存 — 調理前やトイレ後に石けんと流水で行う衛生行動"
    ],
    "answer": 4,
    "explanation": "誤りは「迅速な冷却・保存 — 調理前やトイレ後に石けんと流水で行う衛生行動」。調理前やトイレ後に石けんと流水で行う衛生行動は「手洗い」の説明です。「迅速な冷却・保存」は「調理後に長時間常温放置せず速やかに保管する行動」に当たります。残り4つの組合せは正しいものです。 【関連知識を比較】手洗い：手洗いは病原体の持ち込みを減らします。／交差汚染：生肉由来の微生物が別の食品に移る可能性があります。／器具の使い分け：器具を分けることで交差汚染を減らせます。／中心部までの加熱：中心部まで十分に加熱すると多くの食中毒菌の危険を減らせます。／迅速な冷却・保存：適切な温度管理により微生物の増殖リスクを下げられます。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "EXT-3-191",
    "grade": 3,
    "category": "才を育もう",
    "kind": "choice",
    "prompt": "【深掘り・保存と殺菌】調理済みのおかずを10℃以下で保管した。多くの細菌の増殖速度を下げるが、食品中の微生物をすべて死滅させるわけではない方法はどれか。",
    "options": [
      "真空包装",
      "冷凍",
      "乾燥",
      "冷蔵",
      "酢漬け"
    ],
    "answer": 3,
    "explanation": "冷蔵は低温によって微生物の増殖を遅らせますが、殺菌ではありません。冷凍も万能な殺菌ではなく、温度・保存時間・衛生状態を組み合わせて管理します。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "EXT-3-192",
    "grade": 3,
    "category": "才を育もう",
    "kind": "choice",
    "prompt": "【応用・誤り発見】食品の保存方法の説明資料を点検する。次の「用語―説明」の組合せのうち、誤っているものを1つ選びなさい。",
    "options": [
      "酢漬け — 食品に酸を加えて酸性の環境を利用する保存方法",
      "真空包装 — 空気を減らして包装する技術",
      "冷凍 — 食品中の水分を減らして保存性を高める方法",
      "乾燥 — 食品中の水分を減らして保存性を高める方法",
      "冷蔵 — 食品を低温で保管し微生物の増殖を遅らせる方法"
    ],
    "answer": 2,
    "explanation": "誤りは「冷凍 — 食品中の水分を減らして保存性を高める方法」。食品中の水分を減らして保存性を高める方法は「乾燥」の説明です。「冷凍」は「食品を凍らせて品質変化を遅らせる保存法」に当たります。残り4つの組合せは正しいものです。 【関連知識を比較】冷蔵：冷蔵は増殖を遅らせますが微生物を全て死滅させるわけではありません。／冷凍：冷凍は品質変化を遅らせますが殺菌とは異なります。／乾燥：乾燥は微生物が利用できる水分を減らします。／酢漬け：酢漬けは酸性環境を利用する保存方法です。／真空包装：真空包装は空気を減らしますが、常温保存可能とは限りません。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "EXT-3-193",
    "grade": 3,
    "category": "才を育もう",
    "kind": "choice",
    "prompt": "【応用・保存】干ししいたけを長く保存できるように加工する。水分を取り除いて微生物が利用できる水を減らす方法はどれか。",
    "options": [
      "乾燥",
      "冷蔵",
      "冷凍",
      "酢漬け",
      "真空包装"
    ],
    "answer": 0,
    "explanation": "乾燥は食品中の水分を減らして保存性を高めます。冷蔵や冷凍は低温、酢漬けは酸性環境、真空包装は空気を減らす手法です。 【復習ポイント：同分野の概念】冷蔵：冷蔵は増殖を遅らせますが微生物を全て死滅させるわけではありません。／冷凍：冷凍は品質変化を遅らせますが殺菌とは異なります。／乾燥：乾燥は微生物が利用できる水分を減らします。／酢漬け：酢漬けは酸性環境を利用する保存方法です。／真空包装：真空包装は空気を減らしますが、常温保存可能とは限りません。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "EXT-3-194",
    "grade": 3,
    "category": "才を育もう",
    "kind": "choice",
    "prompt": "【応用・組合せ】食品の保存方法を復習するため、5組の「用語―説明」を照合する。正しいものを1つ選びなさい。",
    "options": [
      "冷凍 — 食品中の水分を減らして保存性を高める方法",
      "乾燥 — 食品に酸を加えて酸性の環境を利用する保存方法",
      "真空包装 — 食品を低温で保管し微生物の増殖を遅らせる方法",
      "冷蔵 — 食品を凍らせて品質変化を遅らせる保存法",
      "酢漬け — 食品に酸を加えて酸性の環境を利用する保存方法"
    ],
    "answer": 4,
    "explanation": "正解は「酢漬け — 食品に酸を加えて酸性の環境を利用する保存方法」。ほかの選択肢は用語と説明が入れ替わっています。名称を暗記するだけでなく、それぞれの働きや特徴を比較して覚えましょう。 【関連知識を比較】冷蔵：冷蔵は増殖を遅らせますが微生物を全て死滅させるわけではありません。／冷凍：冷凍は品質変化を遅らせますが殺菌とは異なります。／乾燥：乾燥は微生物が利用できる水分を減らします。／酢漬け：酢漬けは酸性環境を利用する保存方法です。／真空包装：真空包装は空気を減らしますが、常温保存可能とは限りません。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "EXT-3-195",
    "grade": 3,
    "category": "才を育もう",
    "kind": "choice",
    "prompt": "【深掘り・包装と危害】食品を密封して包装内の空気を減らした。酸素が少なくても増殖する微生物があり得るため、これだけで常温安全と判断できない包装はどれか。",
    "options": [
      "真空包装",
      "冷凍",
      "酢漬け",
      "冷蔵",
      "乾燥"
    ],
    "answer": 0,
    "explanation": "真空包装は酸素を減らしますが、すべての微生物が増えなくなるわけではありません。嫌気性菌のリスクや食品ごとの保存条件もあるため、適切な温度管理が欠かせません。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "EXT-3-196",
    "grade": 3,
    "category": "才を育もう",
    "kind": "choice",
    "prompt": "【応用・調理化学】パンの表面を焼くと、たんぱく質に含まれるアミノ基と糖が関わる反応で香ばしい褐色が生じる。この反応はどれか。",
    "options": [
      "カラメル化",
      "たんぱく質の熱凝固",
      "メイラード反応",
      "糊化",
      "でんぷんの老化"
    ],
    "answer": 2,
    "explanation": "糖とアミノ化合物が関わるメイラード反応は褐変と香りを生みます。糖だけを加熱するカラメル化と区別します。 【復習ポイント：同分野の概念】メイラード反応：糖とアミノ化合物の反応により褐色や香りが生じます。／カラメル化：カラメル化は糖の加熱による変化です。／たんぱく質の熱凝固：卵のたんぱく質は熱で変性し凝固します。／糊化：でんぷんの糊化は加熱と水によって起こります。／老化（でんぷんの老化）：糊化したでんぷんは冷却・保存によって老化することがあります。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "EXT-3-197",
    "grade": 3,
    "category": "才を育もう",
    "kind": "choice",
    "prompt": "【深掘り・褐変の違い】カスタードではなく砂糖を単独で加熱し、茶色くなって独特の香りが生じた。アミノ化合物との反応を必須としない変化はどれか。",
    "options": [
      "メイラード反応",
      "カラメル化",
      "糊化",
      "老化（でんぷんの老化）",
      "たんぱく質の熱凝固"
    ],
    "answer": 1,
    "explanation": "カラメル化は糖の加熱による褐色化です。糖とアミノ化合物が反応するメイラード反応とは区別します。両方とも加熱で色や香りを生むため条件が重要です。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "EXT-3-198",
    "grade": 3,
    "category": "才を育もう",
    "kind": "choice",
    "prompt": "【応用・誤り発見】加熱と食品の化学変化の食育クイズを校正する。次の「用語―説明」の組合せのうち、誤っているものを1つ選びなさい。",
    "options": [
      "メイラード反応 — パンの表面が焼けて褐色になる際に起こる反応の一つ",
      "老化（でんぷんの老化） — 冷めたご飯のでんぷんが時間とともに硬くなりやすい変化",
      "糊化 — 片栗粉などのでんぷんを水と加熱してとろみが出る変化",
      "カラメル化 — 砂糖を加熱して茶色い香りや色が生じる反応",
      "たんぱく質の熱凝固 — 片栗粉などのでんぷんを水と加熱してとろみが出る変化"
    ],
    "answer": 4,
    "explanation": "誤りは「たんぱく質の熱凝固 — 片栗粉などのでんぷんを水と加熱してとろみが出る変化」。片栗粉などのでんぷんを水と加熱してとろみが出る変化は「糊化」の説明です。「たんぱく質の熱凝固」は「卵を加熱して液状から固まる変化」に当たります。残り4つの組合せは正しいものです。 【関連知識を比較】メイラード反応：糖とアミノ化合物の反応により褐色や香りが生じます。／カラメル化：カラメル化は糖の加熱による変化です。／たんぱく質の熱凝固：卵のたんぱく質は熱で変性し凝固します。／糊化：でんぷんの糊化は加熱と水によって起こります。／老化（でんぷんの老化）：糊化したでんぷんは冷却・保存によって老化することがあります。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "EXT-3-199",
    "grade": 3,
    "category": "才を育もう",
    "kind": "choice",
    "prompt": "【深掘り・でんぷんの変化】片栗粉を水に溶かし、かき混ぜながら加熱すると液体にとろみが生じる。米飯が冷えて硬くなる変化とは逆方向の現象はどれか。",
    "options": [
      "カラメル化",
      "メイラード反応",
      "老化（でんぷんの老化）",
      "たんぱく質の熱凝固",
      "糊化"
    ],
    "answer": 4,
    "explanation": "糊化はでんぷんが水を吸って加熱され、粒子が膨らみ粘りが生じる現象です。老化は糊化後の冷却・保存で構造が再配列する変化で、加熱時のとろみとは区別します。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "EXT-3-200",
    "grade": 3,
    "category": "才を育もう",
    "kind": "choice",
    "prompt": "【応用・誤り発見】加熱と食品の化学変化について受講生がまとめた5組の説明で、誤っているものを1つ選びなさい。",
    "options": [
      "糊化 — 片栗粉などのでんぷんを水と加熱してとろみが出る変化",
      "老化（でんぷんの老化） — パンの表面が焼けて褐色になる際に起こる反応の一つ",
      "たんぱく質の熱凝固 — 卵を加熱して液状から固まる変化",
      "メイラード反応 — パンの表面が焼けて褐色になる際に起こる反応の一つ",
      "カラメル化 — 砂糖を加熱して茶色い香りや色が生じる反応"
    ],
    "answer": 1,
    "explanation": "誤りは「老化（でんぷんの老化） — パンの表面が焼けて褐色になる際に起こる反応の一つ」。パンの表面が焼けて褐色になる際に起こる反応の一つは「メイラード反応」の説明です。「老化（でんぷんの老化）」は「冷めたご飯のでんぷんが時間とともに硬くなりやすい変化」に当たります。残り4つの組合せは正しいものです。 【関連知識を比較】メイラード反応：糖とアミノ化合物の反応により褐色や香りが生じます。／カラメル化：カラメル化は糖の加熱による変化です。／たんぱく質の熱凝固：卵のたんぱく質は熱で変性し凝固します。／糊化：でんぷんの糊化は加熱と水によって起こります。／老化（でんぷんの老化）：糊化したでんぷんは冷却・保存によって老化することがあります。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "EXT-3-201",
    "grade": 3,
    "category": "才を育もう",
    "kind": "choice",
    "prompt": "【深掘り・微生物と症状】同じ食品を食べても、すべての人が必ず発病するわけではない。病原体が体内に入り増殖する状態を示す基本概念はどれか。",
    "options": [
      "接触感染",
      "就業制限・作業回避",
      "集団発生",
      "飛沫感染",
      "感染"
    ],
    "answer": 4,
    "explanation": "感染は病原体が体内へ侵入し増殖することです。感染しても無症状のことがあるため、「感染＝必ず症状が出る」とは限りません。集団発生は複数人での発生という別の概念です。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "EXT-3-202",
    "grade": 3,
    "category": "才を育もう",
    "kind": "choice",
    "prompt": "【応用・誤り発見】感染症と衛生の説明資料を点検する。次の「用語―説明」の組合せのうち、誤っているものを1つ選びなさい。",
    "options": [
      "集団発生 — せきやくしゃみのしぶきによって広がる感染経路",
      "就業制限・作業回避 — 症状がある調理従事者が食品を扱わないようにする対応",
      "飛沫感染 — せきやくしゃみのしぶきによって広がる感染経路",
      "感染 — ウイルスや細菌が体内に入り増殖して症状を起こす状態",
      "接触感染 — 病原体のついた物に触れ、手指を介して広がる経路"
    ],
    "answer": 0,
    "explanation": "誤りは「集団発生 — せきやくしゃみのしぶきによって広がる感染経路」。せきやくしゃみのしぶきによって広がる感染経路は「飛沫感染」の説明です。「集団発生」は「同じ場所で患者が多く発生する状態」に当たります。残り4つの組合せは正しいものです。 【関連知識を比較】感染：感染は病原体が体内に侵入し増殖することです。／集団発生：集団発生は同じ場などで感染症が多数起こる状態です。／飛沫感染：飛沫感染は飛沫を介して起こります。／接触感染：接触感染は接触を通じて病原体が移る経路です。／就業制限・作業回避：症状がある場合は食品を扱う作業を避ける対応が重要です。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "EXT-3-203",
    "grade": 3,
    "category": "才を育もう",
    "kind": "choice",
    "prompt": "【応用・感染経路】咳やくしゃみに伴う比較的大きな飛沫を介して病原体が広がる経路を指すのはどれか。",
    "options": [
      "接触感染",
      "空気感染",
      "集団発生",
      "飛沫感染",
      "食品媒介感染"
    ],
    "answer": 3,
    "explanation": "飛沫感染は咳やくしゃみなどの飛沫を介した感染です。接触感染や空気感染とは経路を区別します。 【復習ポイント：同分野の概念】感染：感染は病原体が体内に侵入し増殖することです。／集団発生：集団発生は同じ場などで感染症が多数起こる状態です。／飛沫感染：飛沫感染は飛沫を介して起こります。／接触感染：接触感染は接触を通じて病原体が移る経路です。／就業制限・作業回避：症状がある場合は食品を扱う作業を避ける対応が重要です。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "EXT-3-204",
    "grade": 3,
    "category": "才を育もう",
    "kind": "choice",
    "prompt": "【深掘り・感染経路】患者が触ったドアノブを別の人が触り、その手で口元に触れた。咳のしぶきが直接届かなくても起こり得る経路はどれか。",
    "options": [
      "就業制限・作業回避",
      "集団発生",
      "感染",
      "飛沫感染",
      "接触感染"
    ],
    "answer": 4,
    "explanation": "接触感染は人や物の表面との接触を介して病原体が移る経路です。飛沫感染は咳などの飛沫を介するため、同じ感染対策でも原因経路に応じて手洗いなどを組み合わせます。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "EXT-3-205",
    "grade": 3,
    "category": "才を育もう",
    "kind": "choice",
    "prompt": "【応用・誤り発見】感染症と衛生について受講生がまとめた5組の説明で、誤っているものを1つ選びなさい。",
    "options": [
      "感染 — ウイルスや細菌が体内に入り増殖して症状を起こす状態",
      "集団発生 — 同じ場所で患者が多く発生する状態",
      "就業制限・作業回避 — ウイルスや細菌が体内に入り増殖して症状を起こす状態",
      "接触感染 — 病原体のついた物に触れ、手指を介して広がる経路",
      "飛沫感染 — せきやくしゃみのしぶきによって広がる感染経路"
    ],
    "answer": 2,
    "explanation": "誤りは「就業制限・作業回避 — ウイルスや細菌が体内に入り増殖して症状を起こす状態」。ウイルスや細菌が体内に入り増殖して症状を起こす状態は「感染」の説明です。「就業制限・作業回避」は「症状がある調理従事者が食品を扱わないようにする対応」に当たります。残り4つの組合せは正しいものです。 【関連知識を比較】感染：感染は病原体が体内に侵入し増殖することです。／集団発生：集団発生は同じ場などで感染症が多数起こる状態です。／飛沫感染：飛沫感染は飛沫を介して起こります。／接触感染：接触感染は接触を通じて病原体が移る経路です。／就業制限・作業回避：症状がある場合は食品を扱う作業を避ける対応が重要です。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "EXT-3-206",
    "grade": 3,
    "category": "才を育もう",
    "kind": "choice",
    "prompt": "【応用・食品ロス】スーパーで売れ残ったが、まだ安全に食べられる食品を廃棄した。このような廃棄は何に当たるか。",
    "options": [
      "食品加工",
      "適量調理",
      "食品ロス",
      "重複購入の防止",
      "フードドライブ"
    ],
    "answer": 2,
    "explanation": "食品ロスは本来食べられるのに捨てられた食品です。フードドライブなどは食品ロスを減らす方法です。 【復習ポイント：同分野の概念】食品ロス：食品ロスはまだ食べられる食品が廃棄されることです。／重複購入の防止：在庫確認は不要な買い足しを防ぎます。／適量購入：食べきれる量を買うことが廃棄の削減につながります。／適量調理：必要量を見積もると食べ残しを減らせます。／フードドライブ：フードドライブは未使用の食品を持ち寄って寄付する活動です。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "EXT-3-207",
    "grade": 3,
    "category": "才を育もう",
    "kind": "choice",
    "prompt": "【深掘り・家庭の食品ロス】冷蔵庫に同じ豆腐が二つあり、一方を期限切れにしてしまった。買い物前に在庫の有無を確認することで直接減らせる問題はどれか。",
    "options": [
      "適量調理",
      "フードドライブ",
      "重複購入の防止",
      "食品ロス",
      "適量購入"
    ],
    "answer": 2,
    "explanation": "重複購入の防止は家にある食品を再購入しないための工夫です。適量調理は調理段階、フードドライブは余剰食品の活用など、ロス対策を発生段階で整理します。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "EXT-3-208",
    "grade": 3,
    "category": "才を育もう",
    "kind": "choice",
    "prompt": "【応用・誤り発見】食品ロスの削減の食育クイズを校正する。次の「用語―説明」の組合せのうち、誤っているものを1つ選びなさい。",
    "options": [
      "適量調理 — 料理を作りすぎない工夫",
      "重複購入の防止 — 買う前に家の在庫を確認する行動",
      "フードドライブ — まだ食べられる食品を福祉施設等に寄付する活動の一例",
      "適量購入 — 料理を作りすぎない工夫",
      "食品ロス — 本来食べられるのに捨てられる食品"
    ],
    "answer": 3,
    "explanation": "誤りは「適量購入 — 料理を作りすぎない工夫」。料理を作りすぎない工夫は「適量調理」の説明です。「適量購入」は「必要な分だけ購入する取り組み」に当たります。残り4つの組合せは正しいものです。 【関連知識を比較】食品ロス：食品ロスはまだ食べられる食品が廃棄されることです。／重複購入の防止：在庫確認は不要な買い足しを防ぎます。／適量購入：食べきれる量を買うことが廃棄の削減につながります。／適量調理：必要量を見積もると食べ残しを減らせます。／フードドライブ：フードドライブは未使用の食品を持ち寄って寄付する活動です。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "EXT-3-209",
    "grade": 3,
    "category": "才を育もう",
    "kind": "choice",
    "prompt": "【深掘り・提供量の見積り】イベントで50人分を作る予定が、参加予定が30人に減った。余りを減らすため、作る量を見直す対応はどれか。",
    "options": [
      "食品ロス",
      "重複購入の防止",
      "適量調理",
      "フードドライブ",
      "適量購入"
    ],
    "answer": 2,
    "explanation": "適量調理は必要な食数・分量に合わせて調理し、食べ残しを減らす工夫です。適量購入は材料の購入段階の対策であり、調理の工程とは使い分けます。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "EXT-3-210",
    "grade": 3,
    "category": "才を育もう",
    "kind": "choice",
    "prompt": "【応用・誤り発見】食品ロスの削減について受講生がまとめた5組の説明で、誤っているものを1つ選びなさい。",
    "options": [
      "適量調理 — 料理を作りすぎない工夫",
      "適量購入 — 必要な分だけ購入する取り組み",
      "フードドライブ — 本来食べられるのに捨てられる食品",
      "食品ロス — 本来食べられるのに捨てられる食品",
      "重複購入の防止 — 買う前に家の在庫を確認する行動"
    ],
    "answer": 2,
    "explanation": "誤りは「フードドライブ — 本来食べられるのに捨てられる食品」。本来食べられるのに捨てられる食品は「食品ロス」の説明です。「フードドライブ」は「まだ食べられる食品を福祉施設等に寄付する活動の一例」に当たります。残り4つの組合せは正しいものです。 【関連知識を比較】食品ロス：食品ロスはまだ食べられる食品が廃棄されることです。／重複購入の防止：在庫確認は不要な買い足しを防ぎます。／適量購入：食べきれる量を買うことが廃棄の削減につながります。／適量調理：必要量を見積もると食べ残しを減らせます。／フードドライブ：フードドライブは未使用の食品を持ち寄って寄付する活動です。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "EXT-3-211",
    "grade": 3,
    "category": "才を育もう",
    "kind": "choice",
    "prompt": "【深掘り・フードマイレージ】食品を10トン・200km輸送すると2000トンkmとなる。輸送量×距離で計算したとき、これと同じ値になるのはどれか。",
    "options": [
      "5トンを200km輸送する",
      "10トンを100km輸送する",
      "8トンを200km輸送する",
      "4トンを250km輸送する",
      "4トンを500km輸送する"
    ],
    "answer": 4,
    "explanation": "10×200＝2000トンkmで、4×500も2000トンkmです。輸送量×距離を使う指標であり、輸送手段・冷凍保管や生産時の排出を含めたCO₂排出量そのものではありません。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "EXT-3-212",
    "grade": 3,
    "category": "才を育もう",
    "kind": "choice",
    "prompt": "【応用・環境】食品の生産だけでなく、輸送・利用・廃棄まで含めて環境負荷を考える視点はどれか。",
    "options": [
      "フードマイレージだけを見る視点",
      "ライフサイクルの視点",
      "リユースのみを考える視点",
      "生産地だけを見る視点",
      "食品ロスだけを測る視点"
    ],
    "answer": 1,
    "explanation": "ライフサイクルの視点では、食品が生産されてから廃棄されるまでの各段階を考えます。輸送量と距離だけでは全体を表せません。 【復習ポイント：同分野の概念】フードマイレージ：フードマイレージは輸送量と輸送距離を基にする指標です。／ライフサイクルの視点：生産・流通・消費・廃棄まで含めた環境負荷を考えます。／リデュース：リデュースは廃棄物の発生そのものを減らす考えです。／リユース：リユースはものを繰り返し利用することです。／リサイクル：リサイクルは資源として再生利用することです。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "EXT-3-213",
    "grade": 3,
    "category": "才を育もう",
    "kind": "choice",
    "prompt": "【応用・誤り発見】環境負荷と3Rの食育クイズを校正する。次の「用語―説明」の組合せのうち、誤っているものを1つ選びなさい。",
    "options": [
      "リユース — 容器などを繰り返し使う取り組み",
      "リデュース — 容器などを繰り返し使う取り組み",
      "ライフサイクルの視点 — 食べ物の生産から廃棄までの環境負荷を考える視点",
      "リサイクル — 使用済みの資源を原料として再利用すること",
      "フードマイレージ — 食料の輸送量と輸送距離から輸送負荷を表す指標"
    ],
    "answer": 1,
    "explanation": "誤りは「リデュース — 容器などを繰り返し使う取り組み」。容器などを繰り返し使う取り組みは「リユース」の説明です。「リデュース」は「使い捨て容器の使用を減らすこと」に当たります。残り4つの組合せは正しいものです。 【関連知識を比較】フードマイレージ：フードマイレージは輸送量と輸送距離を基にする指標です。／ライフサイクルの視点：生産・流通・消費・廃棄まで含めた環境負荷を考えます。／リデュース：リデュースは廃棄物の発生そのものを減らす考えです。／リユース：リユースはものを繰り返し利用することです。／リサイクル：リサイクルは資源として再生利用することです。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "EXT-3-214",
    "grade": 3,
    "category": "才を育もう",
    "kind": "choice",
    "prompt": "【深掘り・循環型社会】飲食店で使い捨ての容器を減らし、洗浄して同じ容器を何度も使用する。材料として溶かして再生する方法とは区別すると、これはどれか。",
    "options": [
      "フードマイレージ",
      "ライフサイクルの視点",
      "リサイクル",
      "リユース",
      "リデュース"
    ],
    "answer": 3,
    "explanation": "リユースは物をそのまま繰り返し使用することです。リデュースは廃棄物の発生抑制、リサイクルは原料としての再生利用を指し、手段の違いを捉えます。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "EXT-3-215",
    "grade": 3,
    "category": "才を育もう",
    "kind": "choice",
    "prompt": "【応用・誤り発見】環境負荷と3Rについて受講生がまとめた5組の説明で、誤っているものを1つ選びなさい。",
    "options": [
      "フードマイレージ — 食料の輸送量と輸送距離から輸送負荷を表す指標",
      "リユース — 容器などを繰り返し使う取り組み",
      "ライフサイクルの視点 — 食べ物の生産から廃棄までの環境負荷を考える視点",
      "リデュース — 使い捨て容器の使用を減らすこと",
      "リサイクル — 食料の輸送量と輸送距離から輸送負荷を表す指標"
    ],
    "answer": 4,
    "explanation": "誤りは「リサイクル — 食料の輸送量と輸送距離から輸送負荷を表す指標」。食料の輸送量と輸送距離から輸送負荷を表す指標は「フードマイレージ」の説明です。「リサイクル」は「使用済みの資源を原料として再利用すること」に当たります。残り4つの組合せは正しいものです。 【関連知識を比較】フードマイレージ：フードマイレージは輸送量と輸送距離を基にする指標です。／ライフサイクルの視点：生産・流通・消費・廃棄まで含めた環境負荷を考えます。／リデュース：リデュースは廃棄物の発生そのものを減らす考えです。／リユース：リユースはものを繰り返し利用することです。／リサイクル：リサイクルは資源として再生利用することです。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "EXT-3-216",
    "grade": 3,
    "category": "才を育もう",
    "kind": "choice",
    "prompt": "【応用・自給】国内で消費する食料のうち、国内の生産でまかなえる程度を示す指標はどれか。",
    "options": [
      "フードマイレージ",
      "トレーサビリティ",
      "流通経路",
      "コールドチェーン",
      "食料自給率"
    ],
    "answer": 4,
    "explanation": "食料自給率は国内消費に対する国内生産の割合を示します。計算基準にはカロリーベースなどがあります。 【復習ポイント：同分野の概念】食料自給率：食料自給率は国内生産で賄う割合を示す指標です。／食品輸入：輸入は国外から食品などを買い入れることです。／流通経路：流通経路は商品の移動や取引の道筋です。／コールドチェーン：コールドチェーンは低温を維持して食品を流通させる仕組みです。／トレーサビリティ：履歴を追うことで品質・安全管理に役立てられます。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "EXT-3-217",
    "grade": 3,
    "category": "才を育もう",
    "kind": "choice",
    "prompt": "【深掘り・国内供給】国内生産だけでは需要を満たしにくい食品を、海外から購入して日本へ運ぶ。食料自給率という指標とは区別し、この調達行為そのものはどれか。",
    "options": [
      "食品輸入",
      "流通経路",
      "トレーサビリティ",
      "食料自給率",
      "コールドチェーン"
    ],
    "answer": 0,
    "explanation": "食品輸入は国外から食品を買い入れることです。食料自給率は国内需要に対する国内生産の割合で、輸入量と関係はあっても行為そのものを表すわけではありません。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "EXT-3-218",
    "grade": 3,
    "category": "才を育もう",
    "kind": "choice",
    "prompt": "【深掘り・流通の設計】農家→集荷場→卸売業者→小売店→消費者という流れを図にする。低温管理の有無ではなく、商品の移動と取引の道筋を示す概念はどれか。",
    "options": [
      "流通経路",
      "食料自給率",
      "トレーサビリティ",
      "コールドチェーン",
      "食品輸入"
    ],
    "answer": 0,
    "explanation": "流通経路は商品が生産者から消費者に届く道筋です。コールドチェーンは途中の温度管理、トレーサビリティは履歴追跡と、流れそのものと管理機能を区別します。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "EXT-3-219",
    "grade": 3,
    "category": "才を育もう",
    "kind": "choice",
    "prompt": "【応用・組合せ】食料流通と自給を復習するため、5組の「用語―説明」を照合する。正しいものを1つ選びなさい。",
    "options": [
      "流通経路 — 食品を適切な低温環境で運ぶ物流システム",
      "コールドチェーン — 食品を適切な低温環境で運ぶ物流システム",
      "食品輸入 — 商品が生産者から消費者まで届く経路",
      "トレーサビリティ — 国内で消費する食料が国内生産でどの程度まかなわれるかを示す割合",
      "食料自給率 — 国内外から食品を買い入れること"
    ],
    "answer": 1,
    "explanation": "正解は「コールドチェーン — 食品を適切な低温環境で運ぶ物流システム」。ほかの選択肢は用語と説明が入れ替わっています。名称を暗記するだけでなく、それぞれの働きや特徴を比較して覚えましょう。 【関連知識を比較】食料自給率：食料自給率は国内生産で賄う割合を示す指標です。／食品輸入：輸入は国外から食品などを買い入れることです。／流通経路：流通経路は商品の移動や取引の道筋です。／コールドチェーン：コールドチェーンは低温を維持して食品を流通させる仕組みです。／トレーサビリティ：履歴を追うことで品質・安全管理に役立てられます。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "EXT-3-220",
    "grade": 3,
    "category": "才を育もう",
    "kind": "choice",
    "prompt": "【応用・物流】生鮮食品を生産地から販売店まで運ぶ間、温度管理を連続して維持する仕組みはどれか。",
    "options": [
      "コールドチェーン",
      "トレーサビリティ",
      "食料自給率",
      "フードマイレージ",
      "流通経路"
    ],
    "answer": 0,
    "explanation": "コールドチェーンは流通の各段階で低温を保つ仕組みです。履歴を追跡するトレーサビリティとは異なります。 【復習ポイント：同分野の概念】食料自給率：食料自給率は国内生産で賄う割合を示す指標です。／食品輸入：輸入は国外から食品などを買い入れることです。／流通経路：流通経路は商品の移動や取引の道筋です。／コールドチェーン：コールドチェーンは低温を維持して食品を流通させる仕組みです。／トレーサビリティ：履歴を追うことで品質・安全管理に役立てられます。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "EXT-3-221",
    "grade": 3,
    "category": "才を育もう",
    "kind": "choice",
    "prompt": "【深掘り・清潔の工程】生肉を扱ったまな板に目に見える汚れが付いた。消毒液をかける前に、洗剤や流水で汚れを除く工程はどれか。",
    "options": [
      "殺菌",
      "洗浄",
      "清潔状態の確認",
      "乾燥保管",
      "すすぎ"
    ],
    "answer": 1,
    "explanation": "洗浄は付着した食品残渣や汚れを取り除く工程です。汚れが残ると消毒の効果が妨げられる場合があるため、「洗浄してから必要な殺菌・消毒」という順序を理解します。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "EXT-3-222",
    "grade": 3,
    "category": "才を育もう",
    "kind": "choice",
    "prompt": "【深掘り・衛生管理】器具の食品残渣を洗い流した後、熱や適切な薬剤で微生物の数を減らす。洗浄との違いを考え、この処理はどれか。",
    "options": [
      "殺菌",
      "清潔状態の確認",
      "乾燥保管",
      "すすぎ",
      "洗浄"
    ],
    "answer": 0,
    "explanation": "殺菌は熱や薬剤などを利用して微生物の数を減らす処理です。洗浄は主に汚れを落とす作業で、両者は目的が異なるため衛生管理では組み合わせます。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "EXT-3-223",
    "grade": 3,
    "category": "才を育もう",
    "kind": "choice",
    "prompt": "【応用・器具管理】洗浄と必要な消毒を済ませた器具を、再汚染や水分の残留を避けて保管する。適切な対応はどれか。",
    "options": [
      "乾燥保管",
      "洗浄前の保管",
      "すすぎを省いた保管",
      "濡れたままの密閉保管",
      "汚れの付いた器具との共用"
    ],
    "answer": 0,
    "explanation": "洗浄後は必要な消毒やすすぎを行い、乾燥させて清潔に保管することが重要です。 【復習ポイント：同分野の概念】洗浄：洗浄は汚れを取り除く工程です。／殺菌：殺菌は微生物を減らす処理です。／乾燥保管：乾燥保管は水分が残る状態を避ける工夫です。／すすぎ：すすぎは洗剤や汚れを洗い流す作業です。／清潔状態の確認：洗浄した器具が清潔か確認してから使用します。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "EXT-3-224",
    "grade": 3,
    "category": "才を育もう",
    "kind": "choice",
    "prompt": "【応用・組合せ】洗浄・殺菌と清潔を復習するため、5組の「用語―説明」を照合する。正しいものを1つ選びなさい。",
    "options": [
      "殺菌 — 器具をよく乾かして保管する取り組み",
      "乾燥保管 — 洗剤などが食器に残らないよう流水で流す作業",
      "清潔状態の確認 — 汚れを洗剤や水で取り除く作業",
      "すすぎ — 洗剤などが食器に残らないよう流水で流す作業",
      "洗浄 — 熱や薬剤などで微生物を減らす処理"
    ],
    "answer": 3,
    "explanation": "正解は「すすぎ — 洗剤などが食器に残らないよう流水で流す作業」。ほかの選択肢は用語と説明が入れ替わっています。名称を暗記するだけでなく、それぞれの働きや特徴を比較して覚えましょう。 【関連知識を比較】洗浄：洗浄は汚れを取り除く工程です。／殺菌：殺菌は微生物を減らす処理です。／乾燥保管：乾燥保管は水分が残る状態を避ける工夫です。／すすぎ：すすぎは洗剤や汚れを洗い流す作業です。／清潔状態の確認：洗浄した器具が清潔か確認してから使用します。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "EXT-3-225",
    "grade": 3,
    "category": "才を育もう",
    "kind": "choice",
    "prompt": "【応用・誤り発見】洗浄・殺菌と清潔について受講生がまとめた5組の説明で、誤っているものを1つ選びなさい。",
    "options": [
      "洗浄 — 汚れを洗剤や水で取り除く作業",
      "殺菌 — 熱や薬剤などで微生物を減らす処理",
      "すすぎ — 洗剤などが食器に残らないよう流水で流す作業",
      "乾燥保管 — 器具をよく乾かして保管する取り組み",
      "清潔状態の確認 — 汚れを洗剤や水で取り除く作業"
    ],
    "answer": 4,
    "explanation": "誤りは「清潔状態の確認 — 汚れを洗剤や水で取り除く作業」。汚れを洗剤や水で取り除く作業は「洗浄」の説明です。「清潔状態の確認」は「包丁などを洗浄した後、使用前に確認する作業」に当たります。残り4つの組合せは正しいものです。 【関連知識を比較】洗浄：洗浄は汚れを取り除く工程です。／殺菌：殺菌は微生物を減らす処理です。／乾燥保管：乾燥保管は水分が残る状態を避ける工夫です。／すすぎ：すすぎは洗剤や汚れを洗い流す作業です。／清潔状態の確認：洗浄した器具が清潔か確認してから使用します。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "EXT-3-226",
    "grade": 3,
    "category": "才を育もう",
    "kind": "choice",
    "prompt": "【深掘り・魚介類の購入】魚売り場に同じ種類の切り身が「加熱用」と「刺身用」で並んでいる。加熱せずに食べる予定なら、まず確認すべき表示はどれか。",
    "options": [
      "細菌増殖を避けるため",
      "低温管理",
      "生食用表示",
      "十分な加熱",
      "専用器具の使用"
    ],
    "answer": 2,
    "explanation": "生食用表示は生食を想定した取扱いであることを判断する基本情報です。「新鮮そう」「買った当日」だけでは生食の安全性は判断できません。寄生虫や温度管理にも注意が必要です。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "EXT-3-227",
    "grade": 3,
    "category": "才を育もう",
    "kind": "choice",
    "prompt": "【応用・誤り発見】魚介類の衛生管理の説明資料を点検する。次の「用語―説明」の組合せのうち、誤っているものを1つ選びなさい。",
    "options": [
      "生食用表示 — 刺身用の魚介類の購入時に特に確認すべき表示",
      "細菌増殖を避けるため — 調理済みの魚を室温に長時間放置しない理由として適切なもの",
      "専用器具の使用 — 魚介類に寄生するアニサキス対策で有効な処理の一つ",
      "低温管理 — 魚介類を保存する際に基本となる管理",
      "十分な加熱 — 魚介類に寄生するアニサキス対策で有効な処理の一つ"
    ],
    "answer": 2,
    "explanation": "誤りは「専用器具の使用 — 魚介類に寄生するアニサキス対策で有効な処理の一つ」。魚介類に寄生するアニサキス対策で有効な処理の一つは「十分な加熱」の説明です。「専用器具の使用」は「生の魚介類を調理する際、他の食品への汚染を減らすための行動」に当たります。残り4つの組合せは正しいものです。 【関連知識を比較】生食用表示：生で食べる場合は生食用であることを確認します。／専用器具の使用：器具を分けて交差汚染を防ぎます。／十分な加熱：十分な加熱はアニサキス対策として有効です。／低温管理：魚介類は購入後の低温管理が重要です。／細菌増殖を避けるため：適切な時間と温度管理が食中毒予防に役立ちます。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "EXT-3-228",
    "grade": 3,
    "category": "才を育もう",
    "kind": "choice",
    "prompt": "【応用・寄生虫】生の魚を使った料理を検討している。アニサキスによる食中毒を予防する方法として有効なものはどれか。",
    "options": [
      "酢をかけるだけ",
      "しょうゆにつけるだけ",
      "適切な冷凍または十分な加熱",
      "目視だけで完全に防ぐ",
      "冷蔵しただけで必ず死滅させる"
    ],
    "answer": 2,
    "explanation": "アニサキス対策では、条件を満たす冷凍や十分な加熱が有効です。酢やしょうゆをかけるだけでは死滅しません。 【復習ポイント：同分野の概念】生食用表示：生で食べる場合は生食用であることを確認します。／専用器具の使用：器具を分けて交差汚染を防ぎます。／十分な加熱：十分な加熱はアニサキス対策として有効です。／低温管理：魚介類は購入後の低温管理が重要です。／細菌増殖を避けるため：適切な時間と温度管理が食中毒予防に役立ちます。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "EXT-3-229",
    "grade": 3,
    "category": "才を育もう",
    "kind": "choice",
    "prompt": "【深掘り・生鮮食品の管理】鮮魚を購入後に車内で長く放置すると、外見に大きな変化がなくても細菌増殖の危険が高まる。流通から家庭まで継続したい基本管理はどれか。",
    "options": [
      "十分な加熱",
      "細菌増殖を避けるため",
      "低温管理",
      "専用器具の使用",
      "生食用表示"
    ],
    "answer": 2,
    "explanation": "低温管理は魚介類の品質保持と細菌増殖リスクの低減に重要です。ただし低温だけで寄生虫やすべての病原体をなくせるわけではなく、目的に応じて加熱や器具管理も必要です。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "EXT-3-230",
    "grade": 3,
    "category": "才を育もう",
    "kind": "choice",
    "prompt": "【応用・誤り発見】魚介類の衛生管理について受講生がまとめた5組の説明で、誤っているものを1つ選びなさい。",
    "options": [
      "十分な加熱 — 魚介類に寄生するアニサキス対策で有効な処理の一つ",
      "細菌増殖を避けるため — 刺身用の魚介類の購入時に特に確認すべき表示",
      "専用器具の使用 — 生の魚介類を調理する際、他の食品への汚染を減らすための行動",
      "低温管理 — 魚介類を保存する際に基本となる管理",
      "生食用表示 — 刺身用の魚介類の購入時に特に確認すべき表示"
    ],
    "answer": 1,
    "explanation": "誤りは「細菌増殖を避けるため — 刺身用の魚介類の購入時に特に確認すべき表示」。刺身用の魚介類の購入時に特に確認すべき表示は「生食用表示」の説明です。「細菌増殖を避けるため」は「調理済みの魚を室温に長時間放置しない理由として適切なもの」に当たります。残り4つの組合せは正しいものです。 【関連知識を比較】生食用表示：生で食べる場合は生食用であることを確認します。／専用器具の使用：器具を分けて交差汚染を防ぎます。／十分な加熱：十分な加熱はアニサキス対策として有効です。／低温管理：魚介類は購入後の低温管理が重要です。／細菌増殖を避けるため：適切な時間と温度管理が食中毒予防に役立ちます。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "EXT-3-231",
    "grade": 3,
    "category": "才を育もう",
    "kind": "choice",
    "prompt": "【深掘り・厨房の運用】冷蔵庫に期限の異なる複数の材料がある。古いものから適切に使用するだけでなく、期限を過ぎた材料を使わない仕組みを指す管理はどれか。",
    "options": [
      "清掃",
      "原材料の産地確認",
      "期限管理",
      "温度確認",
      "手指の消毒"
    ],
    "answer": 2,
    "explanation": "期限管理は食品の期限情報を記録・確認し、使用・販売の適否を判断する活動です。温度確認は保存環境、清掃は衛生環境の管理で、別の管理項目となります。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "EXT-3-232",
    "grade": 3,
    "category": "才を育もう",
    "kind": "choice",
    "prompt": "【応用・誤り発見】厨房の管理の説明資料を点検する。次の「用語―説明」の組合せのうち、誤っているものを1つ選びなさい。",
    "options": [
      "原材料の産地確認 — 食品の原材料の生産地を確認する作業",
      "清掃 — 食品の原材料の生産地を確認する作業",
      "手指の消毒 — 手や指の微生物を減らす目的で行う衛生処置",
      "温度確認 — 食品の保管場所が適正な温度か調べる行動",
      "期限管理 — 使用期限が過ぎた食品を販売しないよう行う管理"
    ],
    "answer": 1,
    "explanation": "誤りは「清掃 — 食品の原材料の生産地を確認する作業」。食品の原材料の生産地を確認する作業は「原材料の産地確認」の説明です。「清掃」は「厨房の作業台や床を定期的に清潔に保つ取り組み」に当たります。残り4つの組合せは正しいものです。 【関連知識を比較】期限管理：期限管理は食品の販売や使用の適切な判断に役立ちます。／清掃：清掃は衛生環境を保つ基礎です。／温度確認：温度確認は温度管理の実施状況を把握します。",
    "source": "original",
    "reviewStatus": "draft_review"
  },
  {
    "id": "EXT-3-233",
    "grade": 3,
    "category": "才を育もう",
    "kind": "choice",
    "prompt": "【深掘り・管理の見える化】冷蔵庫の扉が完全に閉まっていない時間があった。食品が入っているかを見ただけでは分からない温度条件を記録する行動はどれか。",
    "options": [
      "清掃",
      "温度確認",
      "期限管理",
      "原材料の産地確認",
      "手指の消毒"
    ],
    "answer": 1,
    "explanation": "温度確認は設備が適切な保存条件を保てているか把握するための作業です。期限管理や清掃も重要ですが、今回の問題は保存温度が保たれているかの確認です。",
    "source": "original",
    "reviewStatus": "draft_review"
  }
];
