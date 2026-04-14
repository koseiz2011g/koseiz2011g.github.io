/* =====================
   データ
===================== */
const categories = {

 tense: {
    title: "📘 【必修】時制",
    level: "basic", 
    questions: [
 {
  sentence: "She <span class='highlight'>plays tennis</span> every day.",
  choices: ["テニスをしていた", "テニスをします", "テニスをする予定だ", "テニスをした"],
  correct: 1,
  explanation: "▶ 彼女は／テニスをします／毎日<br>▶「plays」 は現在形で、習慣的に行われる動作を表します。",
  youtube: "https://www.youtube.com/embed/=XXXX"
},
{
sentence: "I <span class='highlight'>have been</span> to Canada twice. ",
  choices: ["行ったことがある", "行った", "行く予定だ", "行っている"],
  correct: 0,
  explanation: "▶ 私は／行ったことがある／カナダへ／2度<br>▶「have been to Canada」は現在完了形で、経験を表しています。「twice」は2度という意味です。"
},
{
  sentence: "She <span class='highlight'>played tennis</span> yesterday.",
  choices: ["テニスをする", "テニスをしている", "テニスをした", "テニスをする予定だ"],
  correct: 2,
  explanation: "▶ 彼女は／テニスをしました／昨日<br>▶「played」 は過去形で、過去の出来事を表します。"
},
{
  sentence: "She <span class='highlight'>is playing tennis</span> now.",
  choices: ["テニスをした", "テニスをしている", "テニスをする", "テニスをする予定だ"],
  correct: 1,
  explanation: "▶ 彼女は／テニスをしています／今<br>▶「is playing」は現在進行形で、今、行われている動作の継続を表します。"
},
{
  sentence: "She <span class='highlight'>was playing tennis</span> then.",
  choices: ["テニスをしている", "テニスをした", "テニスをしていた", "テニスをする予定だ"],
  correct: 2,
  explanation: "▶ 彼女は／テニスをしていました／そのとき<br>▶「was playing」は過去進行形で、過去のある時点での動作の継続を表します。"
},
{
sentence: "I <span class='highlight'>have</span> already <span class='highlight'>done</span> my homework ",
  choices: ["やるつもり", "やっている", "やる予定だ", "やってしまった"],
  correct: 3,
  explanation: "▶ 私は／すでにやってしまった／私の宿題を。<br>▶「have done」は現在完了形で、完了を表しています。「done」は「do」の過去分詞です。"
},
{
  sentence: "I <span class='highlight'>will play tennis</span> tomorrow.",
  choices: ["テニスをした", "テニスをしている", "テニスをするつもりだ", "テニスをしていた"],
  correct: 2,
  explanation: "▶ 私は／テニスをするつもりです／明日<br>▶「will play」は未来を表し、「～するつもりだ」「～するだろう」という意味になります。"
},
{
  sentence: "We <span class='highlight'>have been</span> friends since we were children.",
  choices: ["ずっと友達だ", "友達だった", "友達になる予定だ", "友達になりつつある"],
  correct: 0,
  explanation: "▶ 私達は／ずっと友達だ／子供のころから<br>▶「has played」は現在完了形で、過去から現在まで続いている状態や経験を表します。"
},
{
  sentence: "She <span class='highlight'>is going to play tennis</span> next week.",
  choices: ["テニスをした", "テニスをする予定だ", "テニスをしている", "テニスをしていた"],
  correct: 1,
  explanation: "▶ 彼女は／テニスをする予定です／来週<br>▶「is going to play」 は、be going to 動詞の原形の形で、すでに決まっている未来の予定を表します。"
},
{
  sentence: "She <span class='highlight'>has played tennis</span> for ten years.",
  choices: ["テニスをしていた", "テニスをする", "テニスをしている", "テニスをする予定だ"],
  correct: 2,
  explanation: "▶ 彼女は／ずっとテニスをしている／10年間<br>▶「has played」は現在完了形で、過去から現在まで続いている状態や経験を表します。"
},
{
  sentence: "They <span class='highlight'>have been playing tennis</span> for two hours.",
  choices: ["テニスをした", "テニスをする", "テニスをずっとし続けている", "テニスをする予定だ"],
  correct: 2,
  explanation: "▶ 彼らは／ずっとテニスをしています／2時間<br>▶「have been playing」は現在完了進行形で、動作が過去から現在まで継続していることを表します。"
}
 ]
  },


modal: {
    title: "📘 【必修】助動詞",
    level: "basic", 
    questions: [
{
  sentence: "We <span class='highlight'>must practice</span> soccer every day.",
  choices: ["練習するべきだ", "練習するかもしれない", "練習できる", "練習しなければならない"],
  correct: 3,
  explanation: "▶ 私たちは／練習しなければならない／サッカーを／毎日<br>▶「must」は「～しなければならない」という義務を表す助動詞です。"
},
{
  sentence: "You <span class='highlight'>mustn't enter</span> this room without permission.",
  choices: ["入ってはいけない", "入らなければならない", "入るかもしれない", "入ることができる"],
  correct: 0,
  explanation: "▶ あなたは／入ってはいけない／この部屋に／許可なく<br>▶「mustn't」は「～してはいけない」という禁止を表します。"
},
{
  sentence: "We <span class='highlight'>have to study</span> science at school.",
  choices: ["勉強するべきだ", "勉強しなければならない", "勉強できる", "勉強するかもしれない"],
  correct: 1,
  explanation: "▶ 私たちは／勉強しなければならない／理科を／学校で<br>▶「have to」は「～しなければならない」という義務を表します。"
},
{
  sentence: "You <span class='highlight'>don't have to get up</span> early tomorrow morning.",
  choices: ["起きてはいけない", "起きるべきだ", "起きなくてもよい", "起きられる"],
  correct: 2,
  explanation: "▶ あなたは／起きなくてもよい／明日の朝早く<br>▶「don't have to」は「～する必要はない」という意味です。"
},
{
  sentence: "That girl <span class='highlight'>must be</span> Aya's sister.",
  choices: ["～であるにちがいない", "～であるべきだ", "～かもしれない", "～であってはいけない"],
  correct: 0,
  explanation: "▶ あの女の子は／～にちがいない／アヤの妹<br>▶「must」は強い推量（～にちがいない）を表します。"
},
{
  sentence: "It <span class='highlight'>will rain</span> tomorrow.",
  choices: ["降るかもしれない", "降るはずだ", "降るだろう", "降らなければならない"],
  correct: 2,
  explanation: "▶ 雨が降るだろう／明日<br>▶「will」は未来の予測を表します。"
},
{
  sentence: "You <span class='highlight'>should study</span> English hard every day.",
  choices: ["勉強できる", "勉強するべきだ", "勉強しなければならない", "勉強するかもしれない"],
  correct: 1,
  explanation: "▶ あなたは／勉強するべきだ／英語を／毎日<br>▶「should」は「～するべきだ」という義務を表します。"
},
{
  sentence: "He <span class='highlight'>can play</span> the piano.",
  choices: ["弾かなければならない", "弾いてはいけない", "弾くことができる", "弾くべきだ"],
  correct: 2,
  explanation: "▶ 彼は／弾くことができる／ピアノを<br>▶「can」は能力を表します。"
},
{
  sentence: "<span class='highlight'>Can I use</span> this computer?",
  choices: ["使わなければならないですか", "使ってもいいですか", "使うべきですか", "使うかもしれませんか"],
  correct: 1,
  explanation: "▶ 使ってもいいですか／このコンピューターを<br>▶「Can I ～?」は許可を求める表現です。"
},
{
  sentence: "<span class='highlight'>May I sit</span> here?",
  choices: ["座らなければなりませんか", "座るべきですか", "座ってもよろしいですか", "座れますか"],
  correct: 2,
  explanation: "▶ 座ってもよろしいですか／ここに<br>▶「May I ～?」は丁寧に許可を求める表現です。"
},
{
  sentence: "Ken <span class='highlight'>may be</span> late.",
  choices: ["遅れるにちがいない", "遅れるべきだ", "遅れるかもしれない", "遅れなければならない"],
  correct: 2,
  explanation: "▶ ケンは／遅れるかもしれない<br>▶「may」は弱い可能性を表します。"
}
 ]
  },

pre01: {
    title: "📘 【必修】前置詞",
    level: "basic", 
    questions: [
{
  sentence: "I get up <span class='highlight'>at seven</span>.",
  choices: ["7時から", "7時まで", "7時間", "7時に"],
  correct: 3,
  explanation: "▶ 私は／起きます／7時に<br>▶「at」は時刻を表すときに使います。"
},
{
  sentence: "I was born <span class='highlight'>in 2010</span>.",
  choices: ["2010年に", "2010年まで", "2010年間", "2010年から"],
  correct: 0,
  explanation: "▶ 私は／生まれました／2010年に<br>▶「in」は年・月など広い範囲の「とき」を表します。"
},
{
  sentence: "We have English <span class='highlight'>on Monday</span>.",
  choices: ["月曜日以外", "月曜日まで", "月曜日から", "月曜日に"],
  correct: 3,
  explanation: "▶ 私たちは／英語（の授業）があります／月曜日に<br>▶「on」は曜日や特定の「日」を表します。"
},
{
  sentence: "I lived there <span class='highlight'>for three years</span>.",
  choices: ["3年間", "3年に", "3年から", "3年までに"],
  correct: 0,
  explanation: "▶ 私は／住んでいました／そこに／3年間<br>▶「for」は期間を表します。"
},
{
  sentence: "I have lived here <span class='highlight'>since 2020</span>.",
  choices: ["2020年まで", "2020年間", "2020年に", "2020年から"],
  correct: 3,
  explanation: "▶ 私は／ずっと住んでいます／2020年から<br>▶「since」は「～以来（起点）」を表します。"
},
{
  sentence: "School starts <span class='highlight'>from April</span>.",
  choices: ["4月まで", "4月に", "4月から", "4月の間"],
  correct: 2,
  explanation: "▶ 学校は／始まります／4月から<br>▶「from」は「～から」という起点を表します。"
},
{
  sentence: "She is waiting <span class='highlight'>at the bus stop</span>.",
  choices: ["バス停で", "バス停まで", "バス停から", "バス停の中に"],
  correct: 0,
  explanation: "▶ 彼女は／待っています／バス停で<br>▶「at」は狭い地点を表します。"
},
{
  sentence: "The ball is <span class='highlight'>in the box</span>.",
  choices: ["箱の上に", "箱の中に", "箱の前に", "箱の下に"],
  correct: 1,
  explanation: "▶ ボールは／あります／箱の中に<br>▶「in」は「～の中に」という意味です。"
},
{
  sentence: "The book is <span class='highlight'>on the desk</span>.",
  choices: ["机の下に", "机の横に", "机の中に", "机の上に"],
  correct: 3,
  explanation: "▶ 本は／あります／机の上に<br>▶「on」は「～の上に（接して）」という意味です。"
},
{
  sentence: "The book is <span class='highlight'>under the bed</span>.",
  choices: ["ベッドの下に", "ベッドの横に", "ベッドの中に", "ベッドの上に"],
  correct: 0,
  explanation: "▶ 本は／あります／机の下に<br>▶「under」は「～の下に」という意味です。"
},
{
  sentence: "We talked <span class='highlight'>about music</span>.",
  choices: ["音楽と", "音楽について", "音楽から", "音楽まで"],
  correct: 1,
  explanation: "▶ 私たちは／話しました／音楽について<br>▶「about」は「～について」という意味です。"
}
 ]
  },


 pronoun01: {
    title: "📘 【必修】代名詞",
    level: "basic", 
    questions: [
{
  sentence: "Jim showed <span class='highlight'>me</span> his pictures.",
  choices: ["私に", "私は", "私の", "私を"],
  correct: 0,
  explanation: "▶ ジムは/見せた/私に/彼の写真を<br>▶SVOO第4文型で、Sが人にものをVする、という意味になります。「me」は1人称単数・目的格の人称代名詞で、「私に」という意味で使われています。",
  youtube: "https://www.youtube.com/embed/=XXXX"
},
{
  sentence: "<span class='highlight'>I</span> enjoyed playing tennis.",
  choices: ["私に", "私は", "私を", "私の"],
  correct: 1,
  explanation: "▶ 私は/楽しんだ/テニスをすることを<br>▶「I」は1人称単数・主格の人称代名詞で、「私は」という意味で使われています。主格とは主語になる形のことを言います。"
},
{
  sentence: "She teaches <span class='highlight'>us</span> English.",
  choices: ["私たちに", "私たちを", "私たちは", "私たちの"],
  correct: 0,
  explanation: "▶ 彼女は/教える/私たちに/英語を<br>▶SVOO第4文型で、Sが人にものをVする、という意味になります。「us」は1人称複数・目的格の人称代名詞で、「私たちに」という意味で使われています。"
},
{
  sentence: "<span class='highlight'>He</span> likes dogs.",
  choices: ["彼女は", "彼らの", "彼は", "彼に"],
  correct: 2,
  explanation: "▶ 彼は／好んでいる／犬を<br>▶「He」 は3人称単数・主格の人称代名詞で、「彼は」という意味で使われています。"
},
{
  sentence: "<span class='highlight'>She</span> has a red bag.",
  choices: ["彼女は", "彼に", "彼は", "彼女の"],
  correct: 0,
  explanation: "▶ 彼女は／持っています／赤いかばんを<br>▶「She」 は3人称単数・主格の人称代名詞で、「彼女は」という意味で使われています。"
},
{
  sentence: "<span class='highlight'>It</span> is very big.",
  choices: ["それを", "それは", "それに", "それの"],
  correct: 1,
  explanation: "▶ それは／とても／大きい<br>▶「it」 は3人称単数・主格の人称代名詞で、「それは」という意味で使われています。"
},
{
  sentence: "We asked <span class='highlight'>our</span> teacher some questions.",
  choices: ["私たちに", "私たちの", "私たちは", "私たちを"],
  correct: 1,
  explanation: "▶ 私たちは／たずねた／私たちの先生に／いくつかの質問を<br>▶「our」 は1人称複数・所有格の人称代名詞で、「私たちの」という意味で使われています。"
},
{
  sentence: "<span class='highlight'>We</span> are high school students.",
  choices: ["私たちを", "私たちの", "私たちは", "私たちに"],
  correct: 2,
  explanation: "▶ 私たち＝高校生<br>▶「we」は1人称複数・主格の人称代名詞で、「私たちは」という意味で使われています。"
},
{
  sentence: "I finished writing <span class='highlight'>my</span> report about my work experience.",
  choices: ["私を", "私は", "私に", "私の"],
  correct: 3,
  explanation: "▶ 私は/終えた/書くことを/私のレポートを/職場体験についての<br>▶「my」は1人称単数・所有格の人称代名詞で、「私の」という意味で使われています。"
},
{
  sentence: "Please help <span class='highlight'>us</span>.",
  choices: ["私たちを", "私たちに", "私たちは", "私たちの"],
  correct: 0,
  explanation: "▶ 助けてください/私たちを<br>▶「us」は1人称複数・目的格の人称代名詞で、「私たちを」という意味で使われています。"
}

 ]
  },


Que: {
    title: "📘 【必修】疑問詞",
    level: "basic", 
    questions: [
{
  sentence: "<span class='highlight'>Who</span> is your best friend?",
  choices: ["だれ", "どこに", "いつ", "何を"],
  correct: 0,
  explanation: "▶ だれ／あなたのいちばんの友だちは<br>▶「Who」 は「だれ」という意味の疑問代名詞で、この例文では補語になります。"
},
{
  sentence: "<span class='highlight'>What</span> do you like?",
  choices: ["だれを", "どこに", "いつ", "何を"],
  correct: 3,
  explanation: "▶ 何を／あなたは／好んでいますか<br>▶「What」 は「何」という意味の疑問代名詞で、この例文では目的語になります。"
},
{
  sentence: "<span class='highlight'>Where</span> do you live?",
  choices: ["だれが", "どこに", "いつ", "何を"],
  correct: 1,
  explanation: "▶ どこに／あなたは／住んでいますか<br>▶「Where」 は「どこに」という意味の疑問副詞で、場所をたずねています。"
},
{
  sentence: "<span class='highlight'>When</span> do you go to school?",
  choices: ["だれを", "どこに", "いつ", "何を"],
  correct: 2,
  explanation: "▶ いつ／あなたは／行きますか／学校へ<br>▶「When」 は「いつ」という意味の疑問副詞で、時をたずねています。"
},
{
  sentence: "<span class='highlight'>What time</span> do you get up?",
  choices: ["何時に", "だれ", "どこに", "いつ"],
  correct: 0,
  explanation: "▶ 何時に／あなたは／起きますか<br>▶「What time」 は「何時に」という意味の疑問副詞で、時刻をたずねています。"
},
{
  sentence: "<span class='highlight'>How</span> do you go to school?",
  choices: ["だれ", "どこに", "いつ", "どうやって"],
  correct: 3,
  explanation: "▶ どうやって／あなたは／行きますか／学校へ<br>▶「How」 は「どうやって」という意味の疑問副詞で、方法をたずねています。"
},
{
  sentence: "<span class='highlight'>How old</span> are you?",
  choices: ["だれ", "どこに", "何歳", "いつ"],
  correct: 2,
  explanation: "▶ 何歳ですか／あなたは<br>▶「How old」 は「どのくらい年寄りか」という意味の疑問表現で、年齢をたずねています。"
},
{
  sentence: "<span class='highlight'>Which color</span> do you like?",
  choices: ["だれの色を", "どこの色を", "いつの色を", "どの色を"],
  correct: 3,
  explanation: "▶ どの色を／あなたは／好んでいますか<br>▶「Which color」 で「どの色を」という意味です。"
}
 ]
  },


conjunction: {
    title: "📘 【必修】接続詞",
    level: "basic", 
    questions: [
{
  sentence: "<span class='highlight'>When</span> I got home, it was raining.",
  choices: ["家にかえるまで", "家に帰って", "もし家に帰ったら", "家に帰ったとき"],
  correct: 3,
  explanation: "▶ 私が家に帰ったとき／雨が降っていた<br>▶「when」は「～するとき」という意味です。"
},
{
  sentence: "I like math, <span class='highlight'>but</span> I don’t like science.",
  choices: ["そして", "だから", "しかし", "もし～なら"],
  correct: 2,
  explanation: "▶ 私は数学が好きです／しかし／理科は好きではありません<br>▶「but」は逆接で「しかし」という意味です。"
},
{
  sentence: "I play soccer <span class='highlight'>and</span> tennis.",
  choices: ["または", "しかし", "そして", "だから"],
  correct: 2,
  explanation: "▶ 私は／します／サッカーとテニスを<br>▶「and」は「そして」という意味で語と語を結びます。"
},
{
  sentence: "Do you want tea <span class='highlight'>or</span> juice?",
  choices: ["そして", "それとも", "しかし", "だから"],
  correct: 1,
  explanation: "▶ あなたは／望んでいますか／お茶を／それともジュースを<br>▶「or」は選択を表し、「または」という意味です。"
},
{
  sentence: "<span class='highlight'>Both</span> Tom <span class='highlight'>and</span> Ken like music.",
  choices: ["どちらか一方が", "トムとケン両方ともが", "どちらも～ない", "しかし"],
  correct: 1,
  explanation: "▶ トムとケンの両方ともが／音楽が好きです<br>▶「both A and B」は「AもBも両方」という意味です。"
},
{
  sentence: "Study hard, <span class='highlight'>and</span> you will pass the test.",
  choices: ["さもないと", "そうすれば", "しかし", "もし～なら"],
  correct: 1,
  explanation: "▶ 一生懸命勉強しなさい、そうすれば試験に合格します<br>▶ 命令文＋and は「～しなさい、そうすれば…」という意味です。"
},
{
  sentence: "I stayed home <span class='highlight'>because</span> I was sick.",
  choices: ["病気になる前に", "病気だったから", "病気だけれども", "病気の間に"],
  correct: 1,
  explanation: "▶ 私は／家にいました／なぜなら病気だったから<br>▶「because」は理由を表し、「なぜなら～だから」という意味です。"
},
{
  sentence: "It was very cold, <span class='highlight'>so</span> I stayed home.",
  choices: ["だから", "しかし", "～する前に", "その間に"],
  correct: 0,
  explanation: "▶ とても寒かった／だから／私はいた／家に<br>▶「so」は結果を表し、「だから」という意味です。"
},
{
  sentence: "Brush your teeth <span class='highlight'>before</span> you go to bed.",
  choices: ["寝た後で", "寝るから", "寝る前に", "寝るけれども"],
  correct: 2,
  explanation: "▶ 歯をみがきなさい／寝る前に<br>▶「before」は「～する前に」という意味です。"
},
{
  sentence: "I did my homework <span class='highlight'>after</span> I got home.",
  choices: ["家に帰る前に", "家に帰った後で", "家に帰るから", "家に帰る間に"],
  correct: 1,
  explanation: "▶ 私はやった／宿題を／家に帰った後で<br>▶「after」は「～した後で」という意味です。"
},
 ]
  },


verb: {
    title: "📘 【必修】動詞",
    level: "basic",
    questions: [

{
  sentence: "I <span class='highlight'>went</span> to the park yesterday.",
  choices: ["行った", "来た", "見た", "作った"],
  correct: 0,
  explanation: "▶ 私は／行った／公園に／昨日<br>▶「went」は「go」の過去形です。"
},
{
  sentence: "I <span class='highlight'>want</span> a new bike.",
  choices: ["行った", "ほしい", "買った", "見つけた"],
  correct: 1,
  explanation: "▶ 私は／ほしい／新しい自転車が<br>▶「want」は「～を望んでいる・～がほしい」という意味です。"
},
{
  sentence: "He <span class='highlight'>broke</span> the window.",
  choices: ["作った", "開けた", "割った", "閉めた"],
  correct: 2,
  explanation: "▶ 彼は／割った／窓を<br>▶「broke」は「break」の過去形で、「～を壊した」という意味です。"
},
{
  sentence: "The dog <span class='highlight'>died</span> last year.",
  choices: ["生まれた", "走った", "食べた", "死んだ"],
  correct: 3,
  explanation: "▶ その犬は／死んだ／去年<br>▶「died」は「die」の過去形です。"
},
{
  sentence: "What <span class='highlight'>happened</span> to you?",
  choices: ["起こった", "見た", "作った", "行った"],
  correct: 0,
  explanation: "▶ 何が／起こったのか／あなたに<br>▶「happened」は「happen」の過去形です。"
},
{
  sentence: "She <span class='highlight'>chose</span> a red dress.",
  choices: ["買った", "見た", "選んだ", "作った"],
  correct: 2,
  explanation: "▶ 彼女は／選んだ／赤いドレスを<br>▶「chose」は「choose」の過去形です。"
},
{
  sentence: "I <span class='highlight'>spent</span> two hours on homework.",
  choices: ["使った", "見た", "行った", "作った"],
  correct: 0,
  explanation: "▶ 私は／使った／2時間を／宿題に<br>▶「spent」は「spend」の過去形です。時間やお金を「使う・費やす」という意味です。"
},
{
  sentence: "He <span class='highlight'>taught</span> us English.",
  choices: ["学んだ", "教えた", "書いた", "読んだ"],
  correct: 1,
  explanation: "▶ 彼は／教えた／私たちに／英語を<br>▶「taught」は「teach」の過去形で、「教えた」という意味です。"
},
{
  sentence: "We will <span class='highlight'>move</span> next week.",
  choices: ["止まる", "行く", "来る", "引っ越す"],
  correct: 3,
  explanation: "▶ 私たちは／引っ越す予定です／来週<br>▶「move」は「動く・引っ越す」という意味です。"
},
{
  sentence: "I <span class='highlight'>decided</span> to study hard.",
  choices: ["決めた", "学んだ", "作った", "行った"],
  correct: 0,
  explanation: "▶ 私は／決めた／勉強することを／一生懸命に<br>▶「decided」は「decide」の過去形です。"
}
 ]
  },


adjective: {
    title: "📘 【必修】形容詞",
    level: "basic",
    questions: [
{
  sentence: "He is a <span class='highlight'>famous</span> singer.",
  choices: ["やさしい", "人気がある", "有名な", "強い"],
  correct: 2,
  explanation: "▶ 彼は／有名な歌手です<br>▶「famous」は「有名な」。"
},
{
  sentence: "This game is <span class='highlight'>popular</span> in Japan.",
  choices: ["人気がある", "危険な", "暗い", "高価な"],
  correct: 0,
  explanation: "▶ このゲームは／人気があります／日本で<br>▶「popular」は「人気がある」。"
},
{
  sentence: "She is <span class='highlight'>angry</span> with him.",
  choices: ["空腹である", "怒っている", "弱い", "外国の"],
  correct: 1,
  explanation: "▶ 彼女は／怒っています／彼に<br>▶「angry」は「怒っている」。"
},
{
  sentence: "Water is <span class='highlight'>necessary</span> for life.",
  choices: ["必要な", "別の", "多くの", "暗い"],
  correct: 0,
  explanation: "▶ 水は／必要です／生活に<br>▶「necessary」は「必要な」。"
},
{
  sentence: "I am <span class='highlight'>thirsty</span> now.",
  choices: ["30の", "危険な", "のどが渇いている", "可能な"],
  correct: 2,
  explanation: "▶ 私は／のどが渇いています／今<br>▶「thirsty」は「のどが渇いている」。"
},
{
  sentence: "I want <span class='highlight'>another</span> cup of tea.",
  choices: ["多くの", "少しの", "貴重な", "もう1つの"],
  correct: 3,
  explanation: "▶ 私は／欲しい／もう1杯の紅茶が<br>▶「another」は「もう1つの・別の」。"
},
{
  sentence: "He studies a <span class='highlight'>foreign</span> language.",
  choices: ["外国の", "暗い", "強い", "必要な"],
  correct: 0,
  explanation: "▶ 彼は／勉強します／外国の言語を<br>▶「foreign」は「外国の・海外の」。"
},
{
  sentence: "I have <span class='highlight'>other</span> plans today.",
  choices: ["人気がある", "別の", "危険な", "可能な"],
  correct: 1,
  explanation: "▶ 私は／持っている／別の予定を／今日<br>▶「other」は「ほかの・別の」。"
},
{
  sentence: "This road is <span class='highlight'>dangerous</span>.",
  choices: ["暗い", "危険な", "多くの", "強い"],
  correct: 1,
  explanation: "▶ この道は／危険です<br>▶「dangerous」は「危険な」。"
},
{
  sentence: "He is <span class='highlight'>weak</span> after the game.",
  choices: ["弱っている", "人気がある", "外国の", "高価な"],
  correct: 0,
  explanation: "▶ 彼は／弱っています／試合のあとで<br>▶「weak」は「弱い」。"
}
 ]
  },

adverb: {
    title: "📘 【必修】副詞",
    level: "basic", 
    questions: [
{
  sentence: "I have <span class='highlight'>already</span> finished my homework.",
  choices: ["まだ", "ときどき", "もう", "すぐに"],
  correct: 2,
  explanation: "▶ 私は／もう終わらせた／宿題を<br>▶「already」は肯定文で使い、「すでに・もう」という意味です。"
},
{
  sentence: "I <span class='highlight'>sometimes</span> play soccer after school.",
  choices: ["ときどき", "いつも", "すぐに", "決して〜ない"],
  correct: 0,
  explanation: "▶ 私は／ときどきする／サッカーを／放課後に<br>▶「sometimes」は頻度を表し、「ときどき」という意味です。"
},
{
  sentence: "Go <span class='highlight'>straight</span> and turn left.",
  choices: ["そこに", "ゆっくりと", "すぐに", "まっすぐに"],
  correct: 3,
  explanation: "▶ まっすぐ行って／そして／左に曲がりなさい<br>▶「straight」は方向を表し、「まっすぐに」という意味です。"
},
{
  sentence: "She <span class='highlight'>always</span> gets up early.",
  choices: ["ときどき", "いつも", "決して〜ない", "まだ"],
  correct: 1,
  explanation: "▶ 彼女は／いつも起きる／早く<br>▶「always」は頻度を表し、「いつも」という意味です。"
},
{
  sentence: "Have you <span class='highlight'>ever</span> seen this movie?",
  choices: ["もう", "いま", "今までに", "ときどき"],
  correct: 2,
  explanation: "▶ あなたは／今までに見たことがありますか／この映画を<br>▶「ever」は疑問文で使い、「今までに」という意味です。"
},
{
  sentence: "Come <span class='highlight'>here</span>, please.",
  choices: ["ここに", "そこに", "あそこに", "まっすぐに"],
  correct: 0,
  explanation: "▶ ここに来てください<br>▶「here」は場所を表し、「ここに」という意味です。"
},
{
  sentence: "He runs <span class='highlight'>quickly</span>.",
  choices: ["ゆっくりと", "はっきりと", "すぐに", "速く"],
  correct: 3,
  explanation: "▶ 彼は／速く走ります<br>▶「quickly」は動作の様子を表し、「速く」という意味です。"
},
{
  sentence: "She speaks <span class='highlight'>clearly</span>.",
  choices: ["速く", "はっきりと", "ゆっくりと", "ときどき"],
  correct: 1,
  explanation: "▶ 彼女は／はっきりと話します<br>▶「clearly」は様子を表し、「はっきりと」という意味です。"
},
{
  sentence: "Please listen <span class='highlight'>carefully</span>.",
  choices: ["速く", "ときどき", "注意深く", "もう"],
  correct: 2,
  explanation: "▶ 注意深く聞いてください<br>▶「carefully」は様子を表し、「注意深く」という意味です。"
},
{
  sentence: "I <span class='highlight'>usually</span> watch TV at night.",
  choices: ["ときどき", "よく", "たいてい", "決して〜ない"],
  correct: 2,
  explanation: "▶ 私は／たいてい見る／テレビを／夜に<br>▶「usually」は頻度を表し、「たいてい」という意味です。"
}
 ]
  },


infinitive01: {
    title: "📘 【必修】不定詞01",
    level: "basic", 
    questions: [
{
  sentence: "I had no time <span class='highlight'>to do my homework</span>.",
  choices: ["宿題をするための", "宿題をすることを", "宿題をして", "宿題をするために"],
  correct: 0,
  explanation: "▶ 私は/持っていた/ゼロの時間を/宿題をするための<br>▶「to do」は「するための」という意味で、「time」 を説明する形容詞的用法です。"
},
{
  sentence: "He went to the park <span class='highlight'>to play tennis</span>.",
  choices: ["テニスをして", "テニスをするために", "テニスをすることを", "テニスをするための"],
  correct: 1,
  explanation: "▶ 彼は/行きました/公園へ/テニスをするために<br>▶「to play」は「するために」という意味で、目的を表す副詞的用法です。"
},
{
  sentence: "I want <span class='highlight'>to visit</span> Australia.",
  choices: ["訪れて", "訪れるために", "訪れることを", "訪れるための"],
  correct: 2,
  explanation: "▶ 私は/望んでいる/訪れることを/オーストラリアを<br>▶「to visit」は 「訪れることを」という意味で、「want」 の目的語になる名詞的用法です。"
},
{
  sentence: "He has a dream <span class='highlight'>to be a singer</span>.",
  choices: ["歌手になるために", "歌手になるための", "歌手になることを", "歌手になるという"],
  correct: 3,
  explanation: "▶ 彼は/持っている/一つの夢を/歌手になるという<br>▶「to be a singer」 は 「dream」 の内容を説明する同格の不定詞です。"
},
{
  sentence: "Aki got up early <span class='highlight'>to help his mother</span>.",
  choices: ["母を助けるために", "母を助けて", "母を助けることを", "母を助けるための"],
  correct: 0,
  explanation: "▶ アキは/起きました/早く/手伝うために/お母さんを<br>▶「to help」は「手伝うために」という意味で、目的を表す副詞的用法です。"
},
{
  sentence: "I am glad <span class='highlight'>to see you again</span>.",
  choices: ["またあなたに会うことを", "またあなたに会って", "またあなたに会うために", "またあなたに会うための"],
  correct: 1,
  explanation: "▶ 私は/うれしい/あなたに会って/また<br>▶「to see you again」は 「あなたに会って」という意味で、「glad」 という感情の原因を表しています。"
},
{
  sentence: "<span class='highlight'>To play tennis</span> is a lot of fun.",
  choices: ["テニスをすることは", "テニスをするために", "テニスをして", "テニスをするための"],
  correct: 0,
  explanation: "▶ テニスをすることは/とても楽しい<br>▶「to play tennis」は、「テニスをすることは」という意味で、不定詞が文の主語として使われている名詞的用法です。"
},
{
  sentence: "I want something cold <span class='highlight'>to drink</span>.",
  choices: ["飲むことを", "飲んで", "飲むために", "飲むための"],
  correct: 3,
  explanation: "▶ 私は/望んでいる/冷たい何かを/飲むための<br>▶「to drink」は 「飲むための」という意味で、「something cold」 を説明する形容詞的用法です。"
}
 ]
  },

    
modal02: {
    title: "📗 助動詞02",
    level: "normal",
    questions: [
{
  sentence: "Keiko <span class='highlight'>has to make</span> breakfast for her family.",
  choices: ["作れる", "作るべきだ", "作らなければならない", "作るかもしれない"],
  correct: 2,
  explanation: "▶ ケイコは／作らなければならない／朝食を<br>▶「has to」は「have to」と同じ意味ですが、三人称単数の主語のときに用います。"
},

{
  sentence: "She <span class='highlight'>is able to speak</span> three languages.",
  choices: ["話すことができる", "話さなければならない", "話すべきだ", "話すかもしれない"],
  correct: 0,
  explanation: "▶ 彼女は／話すことができる／3か国語を<br>▶「be able to」は「can」と同じく能力を表します。"
},
{
  sentence: "<span class='highlight'>Shall I open</span> the door?",
  choices: ["開けましょうか", "開けるべきですか", "開けられますか", "開けなければなりませんか"],
  correct: 0,
  explanation: "▶ 開けましょうか／ドアを<br>▶「Shall I ～?」は申し出の表現です。"
},
{
  sentence: "<span class='highlight'>Shall we go</span> out?",
  choices: ["行かなければならないですか", "行きましょうか", "行けますか", "行くべきですか"],
  correct: 1,
  explanation: "▶ 行きましょうか／外へ<br>▶「Shall we ～?」は勧誘の表現です。"
},
{
  sentence: "<span class='highlight'>Would you come</span> to my house tomorrow?",
  choices: ["来られますか", "来るべきですか", "来てもらえますか", "来なければなりませんか"],
  correct: 2,
  explanation: "▶ 来てもらえますか／私の家に／明日<br>▶「Would you ～?」は丁寧な依頼を表します。"
},
{
  sentence: "<span class='highlight'>Would you like</span> some coffee?",
  choices: ["望んでいますか", "飲まなければなりませんか", "飲めますか", "飲むべきですか"],
  correct: 0,
  explanation: "▶ 望んでいますか➟いかがですか／コーヒーは<br>▶「Would you like ～?」は勧める表現です。"
},
{
  sentence: "I<span class='highlight'>'d like to ask</span> you some questions.",
  choices: ["聞かなければならない", "聞くことができる", "聞きたい", "聞くべきだ"],
  correct: 2,
  explanation: "▶ 私は／望んでいる／聞くことを／あなたに／いくつかの質問を<br>▶「I'd like to ～」は「～したい」という丁寧な希望表現です。"
}
 ]
  },


pre02: {
    title: "📗 前置詞02",
    level: "normal",
    questions: [
{
  sentence: "I read a book <span class='highlight'>during lunch</span>.",
  choices: ["昼食の後に", "昼食の間に", "昼食まで", "昼食から"],
  correct: 1,
  explanation: "▶ 私は／読みました／本を／昼食の間に<br>▶「during」は「～の間に」という意味です。"
},
{
  sentence: "I studied <span class='highlight'>until ten</span>.",
  choices: ["10時に", "10時から", "10時まで", "10時までに"],
  correct: 2,
  explanation: "▶ 私は／勉強しました／10時まで<br>▶「until」は「～まで（ずっと）」という意味です。"
},
{
  sentence: "Finish your homework <span class='highlight'>by five</span>.",
  choices: ["5時に", "5時までに", "5時から", "5時間"],
  correct: 1,
  explanation: "▶ 終えなさい／あなたの宿題を／5時までに<br>▶「by」は「～までに（期限）」を表します。"
},
{
  sentence: "A bridge is <span class='highlight'>over the river</span>.",
  choices: ["川の横に", "川の下に", "川の上に", "川の中に"],
  correct: 2,
  explanation: "▶ 橋は／あります／川の上に<br>▶「over」は「～の上に（覆うように）」という意味です。"
},


 ]
  },


 pronoun02: {
    title: "📗 代名詞02",
    level: "normal",
    questions: [
{
  sentence: "The dog follows <span class='highlight'>them</span>.",
  choices: ["彼らを", "彼女を", "それを", "彼を"],
  correct: 0,
  explanation: "▶「them」 は3人称複数・目的格の人称代名詞で、「彼らを」という意味で使われています。<br>▶ その犬は／追いかけます／彼らを"
},
{
  sentence: "<span class='highlight'>His</span> bike is new.",
  choices: ["彼女の", "彼の", "彼らの", "それの"],
  correct: 1,
  explanation: "▶「His」 は3人称単数・所有格の人称代名詞で、「彼の」という意味で使われています。<br>▶ 彼の自転車は／新しい"
},
{
  sentence: "<span class='highlight'>Its</span> tail is long.",
  choices: ["それは", "それを", "それの", "それに"],
  correct: 2,
  explanation: "▶「Its」 は3人称単数・所有格の人称代名詞で、「それの」という意味で使われています。<br>▶ それのしっぽは／長い"
},
{
  sentence: "<span class='highlight'>They</span> play soccer after school.",
  choices: ["彼女は", "彼は", "彼らに", "彼らは"],
  correct: 3,
  explanation: "▶「They」 は3人称複数・主格の人称代名詞で、「彼らは」という意味で使われています。<br>▶ 彼らは／します／サッカーを／放課後に"
},
{
  sentence: "The teacher helps <span class='highlight'>him</span>.",
  choices: ["彼を", "彼女を", "彼の", "彼が"],
  correct: 0,
  explanation: "▶「him」 は3人称単数・目的格の人称代名詞で、「彼を」という意味で使われています。<br>▶ 先生は／手伝います／彼を"
},
{
  sentence: "Ken knows <span class='highlight'>her</span>.",
  choices: ["彼を", "彼女を", "それを", "彼女の"],
  correct: 1,
  explanation: "▶「her」 は3人称単数・目的格の人称代名詞で、「彼女を」という意味で使われています。<br>▶ ケンは／知っています／彼女を"
},
{
  sentence: "The country is famous for <span class='highlight'>its</span> beautiful lakes.",
  choices: ["それは", "それを", "それの", "それに"],
  correct: 2,
  explanation: "▶「its」 は3人称単数・所有格の人称代名詞で、「それの」という意味で使われています。<br>▶ その国は／有名です／それの美しい湖で"
},
{
  sentence: "<span class='highlight'>Her</span> dress is blue.",
  choices: ["彼女を", "彼の", "彼女は", "彼女の"],
  correct: 3,
  explanation: "▶「Her」 は3人称単数・所有格の人称代名詞で、「彼女の」という意味で使われています。<br>▶ 彼女のドレスは／青い"
},
{
  sentence: "The red bag is <span class='highlight'>ours</span>, not theirs.",
  choices: ["私たちのもの", "私たちは", "私たちに", "私たちの"],
  correct: 0,
  explanation: "▶ その赤いかばんは／私たちのものです／彼らのものではありません<br>▶「ours」 は1人称複数・所有代名詞で、「私たちのもの」という意味で使われています。"
},
{
  sentence: "<span class='highlight'>Their</span> house is near the park.",
  choices: ["彼らの", "彼女の", "彼らのもの", "彼に"],
  correct: 0,
  explanation: "▶ 彼らの家は／あります／公園の近くに<br>▶「Their」 は3人称複数・所有格の人称代名詞で、「彼らの」という意味で使われています。"
},
{
  sentence: "<span class='highlight'>Our</span> teacher tells us interesting stories.",
  choices: ["私たちに", "私たちの", "私たちは", "私たちを"],
  correct: 1,
  explanation: "▶ 私たちの先生は／話します／私たちに／面白い話を<br>▶「Our は1人称複数・所有格の人称代名詞で、「私たちの」という意味で使われています。"
},
{
  sentence: "The book is <span class='highlight'>his</span>.",
  choices: ["彼らのもの", "彼女に", "彼のもの", "彼女の"],
  correct: 2,
  explanation: "▶ その本＝彼のもの<br>▶「his」 は3人称単数・所有代名詞で、「彼のもの」という意味で使われています。"
},
{
  sentence: "The pencil is <span class='highlight'>hers</span>.",
  choices: ["彼女を", "彼の", "彼に", "彼女のもの"],
  correct: 3,
  explanation: "▶ そのえんぴつ＝彼女のもの<br>▶「hers」 は3人称単数・所有代名詞で、「彼女のもの」という意味で使われています。"
},
{
  sentence: "The blue notebook is <span class='highlight'>mine</span>, not yours.",
  choices: ["私のもの", "私の", "私は", "私に"],
  correct: 0,
  explanation: "▶ その青いノート＝私のもの、あなたのものではない<br>▶「mine」は1人称単数・所有代名詞で、「私のもの」という意味で使われています。"
},

{
  sentence: "The red bag is ours, not <span class='highlight'>theirs</span>.",
  choices: ["彼らに", "彼のもの", "彼女を", "彼らのもの"],
  correct: 3,
  explanation: "▶ その赤いかばんは／私たちのものです／彼らのものではありません<br>▶「theirs」 は3人称複数・所有代名詞で、「彼らのもの」という意味で使われています。"
}
 ]
  },


 pronoun03: {
    title: "📗 代名詞03",
    level: "normal",
    questions: [

{
  sentence: "This classroom is <span class='highlight'>ours</span>.",
  choices: ["私たちの", "私たちのもの", "私たちは", "私たちに"],
  correct: 1,
  explanation: "▶ その教室＝私たちのもの<br>▶「ours」は1人称複数・所有代名詞で、「私たちのもの」という意味で使われています。"
},
{
  sentence: "<span class='highlight'>This</span> is my book.",
  choices: ["これに", "これは", "この", "これを"],
  correct: 1,
  explanation: "▶ これは/私の本です<br>▶「this」は指示代名詞で、単数を表し、「これは」という意味で使われています。"
},
{
  sentence: "<span class='highlight'>This</span> book is easy.",
  choices: ["この", "これを", "これは", "これに"],
  correct: 0,
  explanation: "▶ この本は/やさしい<br>▶「this」は指示形容詞として名詞を修飾し、「この」という意味で使われています。"
},
{
  sentence: "<span class='highlight'>That</span> is my bike.",
  choices: ["あれを", "あの", "あれは", "あれに"],
  correct: 2,
  explanation: "▶ あれは/私の自転車です<br>▶「that」は指示代名詞で、単数を表し、「あれは」という意味で使われています。"
},
{
  sentence: "<span class='highlight'>That</span> bike is new.",
  choices: ["あれに", "あの", "あれは", "あれを"],
  correct: 1,
  explanation: "▶ あの自転車は/新しい<br>▶「that」は指示形容詞として名詞を修飾し、「あの」という意味で使われています。"
},
{
  sentence: "<span class='highlight'>These</span> are my pens.",
  choices: ["これらは", "これらを", "これらの", "これらに"],
  correct: 0,
  explanation: "▶ これらは/私のペンです<br>▶「these」は指示代名詞で、複数を表し、「これらは」という意味で使われています。"
},
{
  sentence: "<span class='highlight'>These</span> pens are new.",
  choices: ["これらに", "これらのもの", "これらは", "これらの"],
  correct: 3,
  explanation: "▶ これらのペンは/新しい<br>▶「these」は指示形容詞として名詞を修飾し、「これらの」という意味で使われています。"
},
{
  sentence: "<span class='highlight'>Those</span> are my shoes.",
  choices: ["あれらの", "あれらは", "あれらに", "あれらを"],
  correct: 1,
  explanation: "▶ あれらは/私のくつです<br>▶「those」は指示代名詞で、複数を表し、「あれらは」という意味で使われています。"
},
{
  sentence: "<span class='highlight'>Those</span> shoes are old.",
  choices: ["あれらを", "あれらのもの", "あれらの", "あれらは"],
  correct: 2,
  explanation: "▶ あれらのくつは/古い<br>▶「those」は指示形容詞として名詞を修飾し、「あれらの」という意味で使われています。"
},
{
  sentence: "I did my homework <span class='highlight'>myself</span>.",
  choices: ["私を", "私のもの", "私自身で", "私に"],
  correct: 2,
  explanation: "▶ 私は/自分自身で/宿題をしました<br>▶「myself」は1人称単数の再帰代名詞で、「私自身で」という意味で使われています。"
},
{
  sentence: "You can do it <span class='highlight'>yourself</span>.",
  choices: ["あなたのもの", "あなた自身で", "あなたは", "あなたに"],
  correct: 1,
  explanation: "▶ あなたは/することができる／それを/自分自身で<br>▶「yourself」は2人称単数の再帰代名詞で、「あなた自身で」という意味で使われています。"
},
{
  sentence: "He made this cake <span class='highlight'>himself</span>.",
  choices: ["彼を", "彼のもの", "彼に", "彼自身で"],
  correct: 3,
  explanation: "▶ 彼は/作った／このケーキを/自分自身で<br>▶「himself」は3人称単数男性の再帰代名詞で、「彼自身で」という意味で使われています。"
},
{
  sentence: "She cleaned the room <span class='highlight'>herself</span>.",
  choices: ["彼女自身で", "彼女のもの", "彼女を", "彼女に"],
  correct: 0,
  explanation: "▶ 彼女は／掃除した／その部屋を／自分自身で<br>▶「herself」は3人称単数女性の再帰代名詞で、「彼女自身で」という意味で使われています。"
},
{
  sentence: "We built the house <span class='highlight'>ourselves</span>.",
  choices: ["私たちを", "私たち自身で", "私たちのもの", "私たちに"],
  correct: 1,
  explanation: "▶ 私たちは／建てた／その家を／私たち自身で<br>▶「ourselves」は1人称複数の再帰代名詞で、「私たち自身で」という意味で使われています。"
},
{
  sentence: "They enjoyed the party <span class='highlight'>themselves</span>.",
  choices: ["彼らのもの", "彼らを", "彼らに", "彼ら自身で"],
  correct: 3,
  explanation: "▶ 彼らは／楽しんだ／そのパーティーを／彼ら自身で<br>▶「themselves」は3人称複数の再帰代名詞で、「彼ら自身で」という意味で使われています。"
}
 ]
  },


conjunction02: {
    title: "📗 接続詞02",
    level: "normal",
    questions: [
{
  sentence: "<span class='highlight'>Though</span> he is young, he is very strong.",
  choices: ["もし～なら", "～だけれども", "～するとき", "だから"],
  correct: 1,
  explanation: "▶ 彼は若いけれども／とても強い<br>▶「though」は逆接を表し、「～だけれども」という意味です。"
},
{
  sentence: "<span class='highlight'>Although</span> it was raining, we played soccer.",
  choices: ["なぜなら～だから", "だから", "～の間に", "～だけれども"],
  correct: 3,
  explanation: "▶ 雨が降っていたけれども／私たちはサッカーをしました<br>▶「although」は逆接を表し、「～だけれども」という意味です。"
},
{
  sentence: "My mother was cooking <span class='highlight'>while</span> I was studying.",
  choices: ["～する間に", "～する前に", "なぜなら～だから", "だから"],
  correct: 0,
  explanation: "▶ 母は／料理をしていました／私が勉強している間に<br>▶「while」は「～している間に」という意味です。"
},
{
  sentence: "I have lived here <span class='highlight'>since</span> I was five.",
  choices: ["～の間に", "～だけれども", "だから", "～以来ずっと"],
  correct: 3,
  explanation: "▶ 私は／ずっと住んでいます／ここに／私が5歳のときから<br>▶「since」は「～以来ずっと」という意味で使われます。"
},
{
  sentence: "She can speak <span class='highlight'>not only</span> English <span class='highlight'>but also</span> French.",
  choices: ["英語とフランス語のどちらも話せない", "英語とフランス語のどちらか一方は話せる", "英語だけでなくフランス語も話せる", "英語は話せる、フランス語はだめだけど"],
  correct: 2,
  explanation: "▶ 彼女は／話すことができる／英語だけでなくフランス語も<br>▶「not only A but also B」は「AだけでなくBも」という意味です。"
},
{
  sentence: "<span class='highlight'>Neither</span> my father <span class='highlight'>nor</span> my mother is at home.",
  choices: ["だから", "両方とも～である", "どちらか一方", "どちらも～ない"],
  correct: 3,
  explanation: "▶ 父も母も／いません／家に<br>▶「neither A nor B」は「AもBも～ない」という意味です。"
},
{
  sentence: "You can choose <span class='highlight'>either</span> this book <span class='highlight'>or</span> that one.",
  choices: ["両方とも", "どちらも～ない", "どちらか一方", "そして"],
  correct: 2,
  explanation: "▶ あなたは／選ぶことができる／どちらか一方を／この本かあの本の<br>▶「either A or B」は「AかBのどちらか」という意味です。"
},
{
  sentence: "He was <span class='highlight'>so</span> tired <span class='highlight'>that</span> he went to bed early.",
  choices: ["とても～なので…", "もし～なら", "～だけれども", "～するとき"],
  correct: 0,
  explanation: "▶ 彼は／とても疲れていたので／早く寝ました<br>▶「so ～ that …」は「とても～なので…」という結果を表します。"
},
{
  sentence: "I know <span class='highlight'>that</span> she is kind.",
  choices: ["～するとき", "～ということ", "もし～なら", "だから"],
  correct: 1,
  explanation: "▶ 私は知っています／彼女が親切だということを<br>▶「that」は名詞節を導き、「～ということ」という意味になります。"
},
{
  sentence: "<span class='highlight'>If</span> it is sunny, we will play soccer.",
  choices: ["もし～なら", "～だけれども", "～するとき", "そして"],
  correct: 0,
  explanation: "▶ もし晴れるなら／私たちはサッカーをします<br>▶「if」は条件を表し、「もし～なら」という意味です。条件節は未来のことでも現在形で表現します。"
},
{
  sentence: "Hurry up, <span class='highlight'>or</span> you will miss the bus.",
  choices: ["そして", "しかし", "だから", "さもないと"],
  correct: 3,
  explanation: "▶ 急ぎなさい、さもないとバスに乗り遅れます<br>▶ 命令文＋or は「～しなさい、さもないと…」という意味です。"
}

 ]
  },



infinitive02: {
    title: "📗 不定詞02",
    level: "normal",
    questions: [
{
  sentence: "She bought some eggs <span class='highlight'>to make a cake</span>.",
  choices: ["ケーキを作るために", "ケーキを作ることを", "ケーキを作って", "ケーキを作るべき"],
  correct: 0,
  explanation: "▶彼女は／買った／卵を／作るために／ケーキを<br>▶「to make」は「作るために」という意味で、目的を表す副詞的用法です。",
  youtube: "https://www.youtube.com/embed/=XXXX"

},
{
  sentence: "My dream is <span class='highlight'>to be a tennis player</span>.",
  choices: ["テニス選手になるために", "テニス選手になるという", "テニス選手になること", "テニス選手になって"],
  correct: 2,
  explanation: "▶ 私の夢は／なることです／テニスの選手に<br>▶「to be」は「なるために」という意味です。名詞的用法で、主語 「my dream」 の補語になっています。"
},
{
  sentence: "She tried <span class='highlight'>to open the window</span>.",
  choices: ["窓を開けるために", "窓を開けて", "窓を開けることを", "窓を開けるべき"],
  correct: 2,
  explanation: "▶彼女は／トライした／開けることを／窓を<br>▶「to open」は「開けることを」という意味で、「tried」 の目的語になる名詞的用法です。"
},
{
  sentence: "I have one thing <span class='highlight'>to say</span> about it.",
  choices: ["言うために", "言って", "言うから", "言うべき"],
  correct: 3,
  explanation: "▶ 私は／持っている／1つのことを／言うべき／それについて<br>▶「to say」は「言うべき」という意味で、「thing」を説明する形容詞的用法です。"
},
{
  sentence: "I am sad <span class='highlight'>to hear that</span>.",
  choices: ["それを聞いて", "それを聞くことを", "それを聞くために", "それを聞くべき"],
  correct: 0,
  explanation: "▶ 私は／悲しい／聞いて／それを<br>▶「to hear」は「～を聞いて」という意味で、「sad」 という感情の原因を表しています。"
},
{
  sentence: "We have a lot of homework <span class='highlight'>to do</span>.",
  choices: ["するために", "することを", "するべき", "するべきこと"],
  correct: 2,
  explanation: "▶ 私たちは／持っている／たくさんの宿題を／やるべき<br>▶「to do」は「やるべき」という意味で、「homework」 を説明する形容詞的用法です。"
},
{
  sentence: "<span class='highlight'>To become a pilot</span>, he studies English hard.",
  choices: ["パイロットになることを", "パイロットになるために", "パイロットになって", "パイロットになることは"],
  correct: 1,
  explanation: "▶ なるために／パイロットに／彼は／勉強している／懸命に<br>▶ 「to become」は「なるために」という意味で、目的を表す副詞的用法です。"
},
{
  sentence: "You need <span class='highlight'>to get up</span> early every morning.",
  choices: ["起きるために", "起きて", "起きるべき", "起きることを"],
  correct: 3,
  explanation: "▶ あなたは／必要としている／起きることを／早く／毎朝<br>▶「to get up」は「起きることを」という意味で、「need」 の目的語になる名詞的用法です。"
},
{
  sentence: "<span class='highlight'>Reading</span> books is fun.",
  choices: ["読むために", "読んで", "読むことは", "読むための"],
  correct: 2,
  explanation: "▶ 本を読むことは／楽しい。<br>▶「Reading books」は動名詞が主語になり、「本を読むことは」という意味になります。"
},
{
  sentence: "<span class='highlight'>Playing</span> soccer is exciting.",
  choices: ["するための", "することは", "して", "するために"],
  correct: 1,
  explanation: "▶ サッカーをすることは／わくわくする。<br>▶「Playing soccer」は動名詞が主語になり、「サッカーをすることは」という意味になります。"
},
{
  sentence: "<span class='highlight'>Learning</span> English is important.",
  choices: ["学ぶことは", "学んで", "学ぶための", "学ぶために"],
  correct: 0,
  explanation: "▶ 英語を学ぶことは／大切です。<br>▶「Learning English」は動名詞が主語になり、「英語を学ぶことは」という意味になります。"
},
{
  sentence: "I like <span class='highlight'>reading</span> books.",
  choices: ["読むために", "読むことを", "読むための", "読んで"],
  correct: 1,
  explanation: "▶ 私は／好んでいる／本を読むことを<br>▶「reading books」は動名詞で、「like」の目的語になり、「本を読むことを」という意味になります。"
},
{
  sentence: "She enjoys <span class='highlight'>playing</span> tennis.",
  choices: ["することを", "している", "するために", "するための"],
  correct: 0,
  explanation: "▶ 彼女は／楽しみます／テニスをすることを<br>▶「playing tennis」は動名詞で、「enjoys」の目的語になり、「テニスをすることを」という意味になります。「enjoy」の目的語に「不定詞」は使われません。"
},
{
  sentence: "We started <span class='highlight'>studying</span> English.",
  choices: ["勉強するための", "勉強して", "勉強することを", "勉強するために"],
  correct: 2,
  explanation: "▶ 私たちは／始めました／勉強することを／英語を<br>▶「studying English」は動名詞で、「started」の目的語になり、「英語を勉強することを」という意味になります。"
}
 ]
  },


passive: {
    title: "📗 受動態",
    level: "normal",
    questions: [
{
  sentence: "This book <span class='highlight'>is read</span> by many students.",
  choices: ["読んでいる", "読んでしまった", "読まれていた", "読まれている"],
  correct: 3,
  explanation: "▶ この本は／読まれている／多くの学生によって<br>▶「is read」は「be + 過去分詞」の受動態（現在形）で「～される／～されている」という意味になります。"
},

{
  sentence: "The room <span class='highlight'>is cleaned</span> every day.",
  choices: ["掃除した", "掃除されていた", "掃除している", "掃除されている"],
  correct: 3,
  explanation: "▶ その部屋は／掃除されている／毎日<br>▶「is cleaned」は受動態の現在形で「～されている」という意味です。習慣的に行われる動作にもよく使われます。"
},

{
  sentence: "English <span class='highlight'>is spoken</span> in many countries.",
  choices: ["話している", "話された", "話されている", "話していた"],
  correct: 2,
  explanation: "▶ 英語は／話されている／多くの国で<br>▶「is spoken」は受動態現在形で「～で話されている」という意味を表します。"
},

{
  sentence: "The window <span class='highlight'>was broken</span> by Tom.",
  choices: ["壊した", "壊されている", "壊している", "壊された"],
  correct: 3,
  explanation: "▶ その窓は／壊された／トムによって<br>▶「was broken」は受動態の過去形で「壊された」という意味です。"
},

{
  sentence: "The cake <span class='highlight'>was made</span> by my mother.",
  choices: ["作られている", "作った", "作っている", "作られた"],
  correct: 3,
  explanation: "▶ そのケーキは／作られた／私の母によって<br>▶「was made」は受動態の過去形で「作られた」という意味になります。"
},

{
  sentence: "The game <span class='highlight'>was played</span> after school.",
  choices: ["行われている", "行った", "行っている", "行われた"],
  correct: 3,
  explanation: "▶ その試合は／行われた／放課後に<br>▶「was played」は受動態の過去形で「行われた」という意味です。"
},

{
  sentence: "The song <span class='highlight'>is loved</span> by many people.",
  choices: ["愛している", "愛されている", "愛された", "愛していた"],
  correct: 1,
  explanation: "▶ その歌は／愛されている／多くの人に<br>▶「is loved」は受動態現在形で「愛されている」という意味です。"
},

{
  sentence: "The letter <span class='highlight'>was written</span> by Ken.",
  choices: ["書いている", "書かれている", "書いていた", "書かれた"],
  correct: 3,
  explanation: "▶ その手紙は／書かれた／ケンによって<br>▶「was written」は受動態過去形で「書かれた」という意味になります。"
},

{
  sentence: "The picture <span class='highlight'>was painted</span> by my sister.",
  choices: ["描いた", "描いている", "描かれている", "描かれていた"],
  correct: 3,
  explanation: "▶ その絵は／描かれた／私の姉（妹）によって<br>▶「was painted」は受動態の過去形で「描かれた」という意味です。"
},

{
  sentence: "This desk <span class='highlight'>is made of</span> wood.",
  choices: ["作った", "作られていた", "作っている", "作られている"],
  correct: 3,
  explanation: "▶ この机は／作られている／木で<br>▶「be made of」は材料が見て分かるときに使う表現で「～で作られている」という意味です。"
},

{
  sentence: "This wine <span class='highlight'>is made from</span> grapes.",
  choices: ["作られている", "作っている", "作られていた", "作った"],
  correct: 0,
  explanation: "▶ このワインは／作られている／ぶどうから<br>▶「be made from」は材料が変化して元の形が分からないときに使う表現です。"
},

{
  sentence: "The cup <span class='highlight'>is filled with</span> water.",
  choices: ["満たされている", "満たした", "満たしている", "満たされていた"],
  correct: 0,
  explanation: "▶ そのカップは／満たされている／水で<br>▶「be filled with」は「～で満たされている」という意味の受動態表現です。"
},

{
  sentence: "The book <span class='highlight'>is written in</span> English.",
  choices: ["書いている", "書かれていた", "書かれている", "書いた"],
  correct: 2,
  explanation: "▶ その本は／書かれている／英語で<br>▶「be written in ～」は「～で書かれている」という意味でよく使われる受動態表現です。"
},

{
  sentence: "The meeting <span class='highlight'>was held</span> in this room.",
  choices: ["開いている", "開かれている", "開かれていた", "開いた"],
  correct: 2,
  explanation: "▶ その会議は／開かれた／この部屋で<br>▶「was held」は受動態の過去形で「（会議などが）開かれた」という意味になります。"
},

{
  sentence: "The car <span class='highlight'>is covered with</span> snow.",
  choices: ["覆われている", "覆っている", "覆われていた", "覆った"],
  correct: 0,
  explanation: "▶ その車は／覆われている／雪で<br>▶「be covered with」は「～で覆われている」という意味の受動態表現です。"
},

{
  sentence: "The boy <span class='highlight'>is known to</span> everyone.",
  choices: ["知られている", "知った", "知っている", "知られていた"],
  correct: 0,
  explanation: "▶ その少年は／知られている／みんなに<br>▶「be known to ～」は「～に知られている」という意味の受動態表現です。"
},

{
  sentence: "The school <span class='highlight'>is located</span> in the city.",
  choices: ["位置している", "位置した", "位置していた", "位置されている"],
  correct: 0,
  explanation: "▶ その学校は／位置している／その都市に<br>▶「be located」は「位置している」という意味で場所を説明するときに使われます。"
},

{
  sentence: "She <span class='highlight'>was satisfied with</span> his report.",
  choices: ["満足している", "満足させた", "満足していた", "満足させている"],
  correct: 2,
  explanation: "▶ 彼女は／満足していた／彼のレポートに<br>▶「was satisfied with」は過去形で「～に満足していた」という意味の表現です。"
}
 ]
  },


indirect: {
    title: "📗 間接疑問文",
    level: "normal",
    questions: [
{
  sentence: "I know <span class='highlight'>what she likes</span>.",
  choices: ["どちらを彼女がすきなのか", "どんなに彼女が好きなのか", "どこを彼女が好きなのか", "何を彼女が好きなのか"],
  correct: 3,
  explanation: "▶ 私は／知っている／彼女が何を好きなのか<br>▶「what」はものを表し、彼女が好きなものを知っているという意味になります。「何を彼女が好きなのか」という表現がよく使われます。"
},
{
  sentence: "I want to know <span class='highlight'>where he lives</span>.",
  choices: ["どこに彼が住んでいるのか", "いつ彼が住んでいるのか", "なぜ彼が住んでいるのか", "だれが住んでいるのか"],
  correct: 0,
  explanation: "▶ 私は／知りたい／彼がどこに住んでいるのか<br>▶「where」は場所を表し、住んでいる場所を知りたいという意味になります。「どこに〜か」という表現がよく使われます。"
},
{
  sentence: "Please tell me <span class='highlight'>when the game starts</span>.",
  choices: ["なぜ試合が始まるのか", "いつ試合が始まるのか", "どこで試合が始まるのか", "だれが試合を始めるのか"],
  correct: 1,
  explanation: "▶ 私に教えてください／試合がいつ始まるのか<br>▶「when」は時を表し、時に関する情報を教えてほしいという意味になります。「いつ〜か」という表現がよく使われます。"
},
{
  sentence: "Can you tell me <span class='highlight'>how you make this</span>?",
  choices: ["なぜあなたがこれを作るのか", "どこであなたがこれを作るのか", "どのようにあなたがこれを作るのか", "いつあなたがこれを作るのか"],
  correct: 2,
  explanation: "▶ 教えてくれますか／あなたがどのようにこれを作るのか<br>▶「how」は方法を表し、作る方法を教えてほしいという意味になります。「どのように〜か」という表現がよく使われます。"
},
{
  sentence: "I don't know <span class='highlight'>how old she is</span>.",
  choices: ["どこに彼女がいるのか", "なぜ彼女がいるのか", "彼女が何歳なのか", "どれくらい彼女がいるのか"],
  correct: 2,
  explanation: "▶ 私は／知らない／彼女が何歳なのか<br>▶「how old」は年齢をたずね、「何歳か」という意味になります。how（どれくらい） old（年寄りか）→何歳か"
},
{
  sentence: "Please tell me <span class='highlight'>what time the train leaves</span>.",
  choices: ["どこへ電車が出発するのか", "いつ電車が出発するのか", "何時に電車が出発するのか", "なぜ電車が出発するのか"],
  correct: 2,
  explanation: "▶ 教えてください／私に／何時に電車が出発するのか<br>▶「what time」は時刻を表し、「何時に〜か」という意味になります。"
},
{
  sentence: "Can you tell me <span class='highlight'>who that boy is</span>?",
  choices: ["だれなのかあの少年が", "どこにあの少年がいるのか", "なぜあの少年がいるのか", "いつあの少年が来たのか"],
  correct: 0,
  explanation: "▶ 教えてくれますか／あの少年がだれなのか<br>▶「who」は人を表し、「だれなのか」教えてほしい、という意味になります。"
},
{
  sentence: "I know <span class='highlight'>which color you like</span>.",
  choices: ["どこの色をあなたが好きなのか", "どの色をあなたが好きなのか", "なぜその色をあなたが好きなのか", "いつからその色をあなたが好きなのか"],
  correct: 1,
  explanation: "▶ 私は／知っている／あなたがどの色が好きなのか<br>▶「which」は選択を表し、「which color」で「どの色」という意味になります。"
},
{
  sentence: "I know <span class='highlight'>how long he stayed there</span>.",
  choices: ["どこに彼がいたのか", "なぜ彼がそこにいたのか", "どのように彼がそこにいたのか", "どれくらいの間彼がそこにいたのか"],
  correct: 3,
  explanation: "▶ 私は／知っている／彼がどれくらいの間そこにいたのか<br>▶「how long」は期間を表し、「どれくらいの間〜か」という意味になります。"
},
{
  sentence: "She asked me <span class='highlight'>why you looked sad</span>.",
  choices: ["なぜあなたが悲しそうだったのか", "どこであなたが悲しそうだったのか", "いつあなたが悲しそうだったのか", "だれが悲しそうだったのか"],
  correct: 0,
  explanation: "▶ 彼女は／たずねた／私に／なぜあなたが悲しそうだったのか<br>▶「why」は理由を表し、「なぜ〜か」という意味になります。"
},
{
  sentence: "I know <span class='highlight'>who she is</span>.",
  choices: ["彼女がだれなのか", "どこに彼女がいるのか", "なぜ彼女がいるのか", "いつ彼女が来たのか"],
  correct: 0,
  explanation: "▶ 私は／知っている／彼女がだれなのか<br>▶「who」は人を表し、「だれなのか」という意味になります。"
},
{
  sentence: "Please tell me <span class='highlight'>what you want</span>.",
  choices: ["どこにあなたが行きたいのか", "何をあなたがほしいのか", "なぜあなたがほしいのか", "いつあなたがほしいのか"],
  correct: 1,
  explanation: "▶ 教えてください／私に／あなたが何をほしいのか<br>▶「what」はものを表し、「あなたがほしいもの」という意味になります。"
},
{
  sentence: "Can you tell me <span class='highlight'>where the station is</span>?",
  choices: ["どこに駅があるのか", "いつ駅があるのか", "なぜ駅があるのか", "駅がだれのものなのか"],
  correct: 0,
  explanation: "▶ 教えてくれますか／私に／駅がどこにあるのか<br>▶「where」は場所を表し、駅がある場所を教えてほしい、という意味になります。"
},
{
  sentence: "Can you tell me <span class='highlight'>how long it takes</span>?",
  choices: ["どこに時間がかかるのか", "なぜ時間がかかるのか", "どれくらい時間がかかるのか", "だれに時間がかかるのか"],
  correct: 2,
  explanation: "▶ 教えてくれますか／私に／どれくらい時間がかかるのか<br>▶「how long」は時間の長さを表し、必要な時間を教えてほしい、という意味になります。"
},
{
  sentence: "I don't know <span class='highlight'>why he is late</span>.",
  choices: ["どこで彼が遅れているのか", "なぜ彼が遅れているのか", "いつ彼が遅れているのか", "だれが遅れているのか"],
  correct: 1,
  explanation: "▶ 私は／知らない／なぜ彼が遅れているのか<br>▶「why」は理由を表し、彼が遅れている理由をしらない、という意味になります。"
}
 ]
  },


relative: {
    title: "📗 関係代名詞",
    level: "normal",
    questions: [

  {
    "sentence": "I have <span class='highlight'>a friend who lives in Osaka</span>.",
    "choices": ["大阪に住んでいた友達", "大阪に住みそうな友達", "大阪に住んでいる友達", "大阪に住んでいない友達"],
    "correct": 2,
    "explanation": "▶ 私は／持っています／友達を／その人は／住んでいる／大阪に<br>▶私には大阪に住んでいる友達がいる。<br>▶「who」は人を表す関係代名詞です。who lives in Osaka という節の主語で、節全体で直前の a friend を修飾しています。"
  },
  {
    "sentence": "She knows <span class='highlight'>a boy who can swim fast</span>.",
    "choices": ["速く泳げる少年", "速く泳いだ少年", "速く泳ぎたい少年", "速く泳げない少年"],
    "correct": 0,
    "explanation": "▶ 彼女は／知っている／少年を／その人は／泳ぐことができる／はやく<br>▶私は速く泳ぐことができる少年を知っている。<br>▶「who can swim fast」という節がa boy を修飾しています。「who」は主格の関係代名詞です。"
  },
  {
    "sentence": "This is <span class='highlight'>the teacher who helps me</span>.",
    "choices": ["私を助けてくれた先生", "私を助けてくれる先生", "私を助けたい先生", "私に助けられた先生"],
    "correct": 1,
    "explanation": "▶ こちらが／先生です／その人が／助けます／私を<br>▶こちらが私を助けてくれる先生です。<br>▶「who helps me」が the teacher を修飾しています。helps が現在形なので「（いつも）助けてくれる」となります。"
  },
  {
    "sentence": "This is <span class='highlight'>a dog that runs very fast</span>.",
    "choices": ["とても速く走る犬", "とても速く走った犬", "とても速く走っている犬", "すこし速く走れる犬"],
    "correct": 0,
    "explanation": "▶ こちらが／その犬です／それは／走ります／とてもはやく<br>▶こちらがとても速く走る犬です。<br>▶「that」は人以外（動物）にも使える関係代名詞です。 「that runs very fast」がa dog の説明をしています。"
  },
  {
    "sentence": "I like <span class='highlight'>books that are easy to read</span>.",
    "choices": ["読むのが難しい本", "読むのが簡単な本", "読み終わった本", "読みたい本"],
    "correct": 1,
    "explanation": "▶ 私は／好きです／本が／それらは／読みやすいく<br>▶私は読みやすい本が好き。<br>▶「that」は主格の関係代名詞です。「that are easy to read」がbooksの説明をしています。"
  },
  {
    "sentence": "That is <span class='highlight'>a movie which makes me happy</span>.",
    "choices": ["私が幸せにした映画", "私を幸せに見せる映画", "私を幸せにしてくれる映画", "私に幸せを見せた映画"],
    "correct": 2,
    "explanation": "▶ あれが／映画です／それが／私を幸せにする<br>▶あれは私を幸せにする映画です。<br>▶「which」は物を表す関係代名詞です。which makes me happyがa movieを説明しています。"
  },
  {
    "sentence": "She has <span class='highlight'>a friend that I like</span>.",
    "choices": ["私を好きな友達", "私が好きな友達", "私に似ている友達", "私が見つけた友達"],
    "correct": 1,
    "explanation": "▶ 彼女は／持っている／友達を／その人を／私が／好き<br>▶彼女には私が好きな友達がいる。<br>▶「that」は目的格の関係代名詞で、I like（私が好きだ）の目的語が a friend であることを示します。"
  },
  {
    "sentence": "This is <span class='highlight'>the boy that I met yesterday</span>.",
    "choices": ["昨日私にぶつかった男の子", "昨日私を見た男の子", "昨日私が呼んだ男の子", "昨日私が会った男の子"],
    "correct": 3,
    "explanation": "▶ こちらは／少年です／その人と／私が／出会った<br>▶こちらが私が昨日出会った少年です。<br>▶「that」は目的格の関係代名詞です。that I metがthe boyを説明しています。"
  },
  {
    "sentence": "He is <span class='highlight'>the teacher that we saw</span>.",
    "choices": ["私たちを見た先生", "私たちを教えた先生", "私たちが見た先生", "私たちを呼んだ先生"],
    "correct": 2,
    "explanation": "▶ 彼は／先生です／その人を／私達が／見た<br>▶彼は私たちが見た先生です。<br>▶「that we saw」が the teacher を修飾しています。thatはwe saw（私たちが見た）の目的語です。"
  },
  {
    "sentence": "This is <span class='highlight'>the book that I bought</span>.",
    "choices": ["私が書いた本", "私が借りた本", "私が持っている本", "私が買った本"],
    "correct": 3,
    "explanation": "▶ これが／その本です／それを／私が／買った<br>▶これは私が買った本です。<br>▶「thatI bought」が the book を修飾しています。thatはI bought（私が買った）の目的語です。"
  },
  {
    "sentence": "That is <span class='highlight'>the game which we played</span>.",
    "choices": ["私たちがしたゲーム", "私たちが作ったゲーム", "私たちが買ったゲーム", "私たちが好きなゲーム"],
    "correct": 0,
    "explanation": "▶ あれが／そのゲームです／それを／私達が／した<br>▶あれは私たちがしたゲームです。<br>▶「which we played」が the game を修飾しています。we played（私たちがした）の目的語です。"
  },
  {
    "sentence": "I found <span class='highlight'>a key that I lost</span>.",
    "choices": ["私が見つけた鍵", "私がなくした鍵", "私が使った鍵", "私が持っていた鍵"],
    "correct": 1,
    "explanation": "▶ 私は／見つけた／鍵を／それを／私が／失くした<br>▶私は私がなくしたカギをみつけた。<br>▶「that I lost」が a key を修飾しています。I lost（私がなくした）の目的語です。"
  },
  {
    "sentence": "I have <span class='highlight'>a friend whose father is a doctor</span>.",
    "choices": ["父親が医者の友達", "友達の医者の父親", "医者の父親が友達", "父親と医者に行った友達"],
    "correct": 0,
    "explanation": "▶ 私は／持っている／友達を／その人のお父さんは／医者である<br>▶私には父親が医者である友達がいる。<br>▶「whose」は所有格の関係代名詞で、「whose father」で、その友達の父親という意味を表します。"
  },
  {
    "sentence": "She met <span class='highlight'>a girl whose bag was red</span>.",
    "choices": ["カバンを持っている赤い少女", "赤い女の子のカバン", "カバンが赤くなった女の子", "カバンが赤色の女の子"],
    "correct": 3,
    "explanation": "▶ 彼女は／出会った／少女に／その人のカバンが／赤かった<br>▶彼女は赤いカバンの少女に出会った。<br>▶「whose」は所有格の関係代名詞で、「whose bag」は「その女の子のカバン」という意味。"
  },
  {
    "sentence": "That is <span class='highlight'>the boy whose bike is new</span>.",
    "choices": ["自転車が新しい男の子", "新しい自転車を買った男の子", "自転車で行った男の子", "自転車が古い男の子"],
    "correct": 0,
    "explanation": "▶ あれは／少年です／その子の自転車は／新しい<br>▶あれは新しい自転車に乗っている男の子です。<br>▶「whose bike」は「その男の子の自転車」という所有の関係を表しています。"
  },
  {
    "sentence": "I saw <span class='highlight'>a house whose roof is blue</span>.",
    "choices": ["青い家の窓", "窓が赤い家", "赤い家の屋根", "屋根が青い家"],
    "correct": 3,
    "explanation": "▶ 私は／見た／家を／その家の屋根が／青い<br>▶私は青い屋根の家を見た。<br>▶「whose roof」は「その家の屋根」という所有の関係を表します。"
  },
  {
    "sentence": "This is <span class='highlight'>a tree whose leaves are big</span>.",
    "choices": ["巨木の葉っぱ", "葉っぱが大きい木", "葉っぱが少ない木", "葉っぱがたくさんある木"],
    "correct": 1,
    "explanation": "▶ これは／木です／その木の葉は／大きい<br>▶これは葉の大きな木です。<br>▶「whose tree」は「その木の葉」がという所有の関係を表します。"
  },
  {
    "sentence": "That is <span class='highlight'>a school whose students are kind</span>.",
    "choices": ["生徒に親切な学校", "生徒が親切にされる学校", "生徒が親切な学校", "生徒を親切にする学校"],
    "correct": 2,
    "explanation": "▶ あれは／学校です／その学校の生徒は／親切だ<br>▶それは生徒たちが親切な学校です。<br>▶「whose student」は「その学校の生徒」という関係を表しています。"
  }
   ]
    },


clauseparticiple: {
    title: "📗 節・分詞で修飾",
    level: "normal",
    questions: [
{
  sentence: "I know the boy <span class='highlight'>playing soccer</span>.",
  choices: ["サッカーをされた", "サッカーをしている", "サッカーをする", "サッカーをされる"],
  correct: 1,
  explanation: "▶ 私は／知っている／少年を／サッカーをしている<br>▶「the boy playing succer」は「サッカーをしている少年」という意味で、「playing soccer」が「the boy」を説明しています。「playing」は「play」の現在分詞です。"
},
{
  sentence: "She looked at the dog <span class='highlight'>running</span> in the park.",
  choices: ["走っている", "走られる", "走った", "走られた"],
  correct: 0,
  explanation: "▶ 彼女は／見た／犬を／走っている<br>▶「the dog running」は「走っている犬」という意味です。「running」は「run」の現在分詞です。"
},
{
  sentence: "We saw a girl <span class='highlight'>singing a song</span>.",
  choices: ["歌を歌われる", "歌を歌った", "歌を歌っている", "歌を歌われた"],
  correct: 2,
  explanation: "▶ 私たちは／見た／少女を／歌を歌っている<br>▶「a girl singing a song」は「歌を歌っている少女」という意味です。「singing」は「sing」の現在分詞です。"
},
{
  sentence: "That is a bus <span class='highlight'>going to the station</span>.",
  choices: ["駅に行かない", "駅に行く", "駅から来た", "駅に行った"],
  correct: 1,
  explanation: "▶ あれは／バスです／駅に行く<br>▶「the bus going to the station」は「駅に向かうバス」という意味です。「going」は「go」の現在分詞です。"
},
{
  sentence: "I have a friend <span class='highlight'>living in Tokyo</span>.",
  choices: ["東京に引っ越した", "東京に住んでいた", "東京に住んでいる", "東京で生まれた"],
  correct: 2,
  explanation: "▶ 私は／友達がいる／東京に住んでいる<br>▶「a friend living in Tokyo」は「東京に住んでいる友達」という意味です。「living」は「live」の現在分詞です。"
},
{
  sentence: "I read the book <span class='highlight'>written in English</span>.",
  choices: ["英語で書かれた", "英語が書いている", "英語を書く", "英語に書かれた"],
  correct: 0,
  explanation: "▶ 私は／読んだ／本を／英語で書かれた<br>▶「the book written in English」は「英語で書かれた本」という意味です。「written」は「write」の過去分詞です。"
},
{
  sentence: "She ate the cake <span class='highlight'>made</span> by her mother.",
  choices: ["作っている", "作られた", "作るだろう", "作るつもり"],
  correct: 1,
  explanation: "▶ 彼女は／食べた／ケーキを／作られた／母によって<br>▶「the cake made」は「作られたケーキ」という意味です。「made」は「make」の過去分詞です。"
},
{
  sentence: "We visited the museum <span class='highlight'>built</span> last year.",
  choices: ["建てている", "建てる予定の", "建てられた", "建てられる"],
  correct: 2,
  explanation: "▶ 私たちは／訪れた／博物館を／建てられた／去年<br>▶「the museum built」は「建てられた博物館」という意味です。「built」は「build」の過去分詞です。"
},
{
  sentence: "We found a bike <span class='highlight'>left</span> in the park.",
  choices: ["置かれた", "置いている", "置かれる", "置いた"],
  correct: 0,
  explanation: "▶ 私たちは／見つけた／自転車を／置かれた／公園に<br>▶「the bike left」は「置かれた（放置された）自転車」という意味です。「left」は「leave」の過去分詞です。"
},
{
  sentence: "This is a picture <span class='highlight'>taken</span> by Ken.",
  choices: ["撮られた", "撮っている", "撮る", "撮られる"],
  correct: 0,
  explanation: "▶ これは／写真です／撮られた／ケンによって<br>▶「a picture taken」は「撮られた写真」という意味です。「taken」は「take」の過去分詞です。"
},
{
  sentence: "This is the book <span class='highlight'>I bought</span> yesterday.",
  choices: ["私が買った", "私が買われた", "私が買っている", "私が買うつもりの"],
  correct: 0,
  explanation: "▶ これは／本です／私が買った／昨日<br>▶「the book I bought」は「私が買った本」という意味で、目的格の関係代名詞が省略された形です。"
},
{
  sentence: "That is the movie <span class='highlight'>we watched</span> last night.",
  choices: ["私たちが見られた", "私たちが見た", "私たちが見られる", "私たちが見ている"],
  correct: 1,
  explanation: "▶ あれは／映画です／私たちが見た／昨夜<br>▶「the movie we watched」は「私たちが見た映画」という意味で、目的格の関係代名詞が省略された形です。"
},
{
  sentence: "This is the cake <span class='highlight'>my mother made</span>.",
  choices: ["母が作られた", "母が作っている", "母が作るだろう", "母が作った"],
  correct: 3,
  explanation: "▶ これは／ケーキです／母が作った<br>▶「the cake my mother made」は「母が作ったケーキ」という意味で、目的格の関係代名詞が省略された形です。"
},
{
  sentence: "This is the game <span class='highlight'>we played</span> after school.",
  choices: ["私たちがした", "私たちがされる", "私たちがしている", "私たちがする予定の"],
  correct: 0,
  explanation: "▶ これは／ゲームです／私たちがした／放課後<br>▶「the game we played」は「私たちがしたゲーム」という意味で、目的格の関係代名詞が省略された形です。"
},
{
  sentence: "She showed me the picture <span class='highlight'>she took</span>.",
  choices: ["彼女が撮られた", "彼女が撮る", "彼女が撮っている", "彼女が撮った"],
  correct: 3,
  explanation: "▶ 彼女は／見せた／写真を／彼女が撮った<br>▶「the picture she took」は「彼女が撮った写真」という意味で、目的格の関係代名詞が省略された形です。"
}
 ]
  },



verb02: {
    title: "📗 動詞02",
    level: "normal",
    questions: [

{
  sentence: "They <span class='highlight'>named</span> the dog Pochi.",
  choices: ["呼んだ", "名付けた", "見つけた", "育てた"],
  correct: 1,
  explanation: "▶ 彼らは／名付けた／その犬を／ポチと<br>▶「named」は「name」の過去形です。"
},
{
  sentence: "I <span class='highlight'>guess</span> the answer is right.",
  choices: ["知っている", "考えた", "推測する", "聞いた"],
  correct: 2,
  explanation: "▶ 私は／推測する／答えは正しいと<br>▶「guess」は「推測する」という意味です。thinkよりも控え目で、「たぶん～だろうな」"
},
{
  sentence: "I <span class='highlight'>borrowed</span> a book from him.",
  choices: ["あげた", "貸した", "買った", "借りた"],
  correct: 3,
  explanation: "▶ 私は／借りた／本を／彼から<br>▶「borrowed」は「borrow」の過去形です。"
},
{
  sentence: "I <span class='highlight'>received</span> a letter yesterday.",
  choices: ["受け取った", "送った", "書いた", "読んだ"],
  correct: 0,
  explanation: "▶ 私は／受け取った／手紙を／昨日<br>▶「received」は「receive」の過去形です。"
},
{
  sentence: "I <span class='highlight'>lost</span> my key.",
  choices: ["見つけた", "なくした", "持った", "開けた"],
  correct: 1,
  explanation: "▶ 私は／なくした／鍵を<br>▶「lost」は「lose」の過去形です。"
},
{
  sentence: "She <span class='highlight'>brought</span> a cake.",
  choices: ["作った", "食べた", "持ってきた", "見た"],
  correct: 2,
  explanation: "▶ 彼女は／持ってきた／ケーキを<br>▶「brought」は「bring」の過去形です。"
},
{
  sentence: "I will <span class='highlight'>invite</span> my friend.",
  choices: ["送る", "招待する", "会う", "教える"],
  correct: 1,
  explanation: "▶ 私は／招待するつもりです／友だちを<br>▶「invite」は「～を招待する」という意味です。"
},
{
  sentence: "She <span class='highlight'>wore</span> a blue dress.",
  choices: ["いた", "作った", "着ていた", "見た"],
  correct: 2,
  explanation: "▶ 彼女は／着ていた／青いドレスを<br>▶「wore」は「wear」の過去形です。"
},

{
  sentence: "I <span class='highlight'>thought</span> about you.",
  choices: ["見た", "聞いた", "話した", "考えた"],
  correct: 3,
  explanation: "▶ 私は／考えた／あなたのことを<br>▶「thought」は「think」の過去形です。"
}
 ]
  },


adjective02: {
    title: "📗 形容詞02",
    level: "normal",
    questions: [

{
  sentence: "It is <span class='highlight'>possible</span> to finish it today.",
  choices: ["必要な", "可能な", "暗い", "怒っている"],
  correct: 1,
  explanation: "▶ それは／可能だ／それを終えることが／今日<br>▶「possible」は「可能な」。"
},
{
  sentence: "It is <span class='highlight'>dark</span> outside.",
  choices: ["暗い", "強い", "別の", "多くの"],
  correct: 0,
  explanation: "▶ 外は／暗いです<br>▶「dark」は「暗い」。"
},
{
  sentence: "This bag is <span class='highlight'>expensive</span>.",
  choices: ["安い", "高価な", "弱い", "危険な"],
  correct: 1,
  explanation: "▶ このかばんは／高価だ<br>▶「expensive」は「高価な」。"
},
{
  sentence: "He is <span class='highlight'>strong</span> and kind.",
  choices: ["強い", "暗い", "外国の", "必要な"],
  correct: 0,
  explanation: "▶ 彼は／強くて／やさしい<br>▶「strong」は「強い」。"
},
{
  sentence: "<span class='highlight'>Be careful</span> when you cross the street.",
  choices: ["静かにしなさい", "人気者になりなさい", "注意しなさい", "そこにいなさい"],
  correct: 2,
  explanation: "▶ 注意しなさい／あなたが／渡るときは／道を<br>▶「careful」は「注意深い」。"
},
{
  sentence: "I have <span class='highlight'>many</span> books.",
  choices: ["少しの", "多くの", "何冊かの", "20冊の"],
  correct: 1,
  explanation: "▶ 私は／持っています／多くの／本を<br>▶「many」は「多くの」。"
},
{
  sentence: "Do you have <span class='highlight'>any</span> questions?",
  choices: ["特別な", "別の", "多くの", "何か"],
  correct: 3,
  explanation: "▶ あなたは／持っていますか／何か／質問を<br>▶「any」は疑問文で「何か」。"
}
 ]
  },


adverb02: {
    title: "📗 副詞02",
    level: "normal",
    questions: [

{
  sentence: "I have <span class='highlight'>never</span> been to France.",
  choices: ["今までに", "1度も〜ない", "もう", "よく"],
  correct: 1,
  explanation: "▶ 私は／一度も行ったことがない／フランスに<br>▶「never」は経験で使い、「一度も〜ない」という意味です。"
},
{
  sentence: "I met him <span class='highlight'>once</span>.",
  choices: ["一度", "二度", "ときどき", "いつも"],
  correct: 0,
  explanation: "▶ 私は／会った／彼に／一度<br>▶「once」は回数を表し、「一度」という意味です。"
},
{
  sentence: "I have been there <span class='highlight'>twice</span>.",
  choices: ["一度", "まだ", "三度", "二度"],
  correct: 3,
  explanation: "▶ 私は／行ったことがある／そこに／二度<br>▶「twice」は回数を表し、「二度」という意味です。"
},
{
  sentence: "I <span class='highlight'>often</span> read books.",
  choices: ["よく", "たいてい", "ときどき", "一度"],
  correct: 0,
  explanation: "▶ 私は／よく読む／本を<br>▶「often」は頻度を表し、「よく」という意味です。"
},
{
  sentence: "Finish your homework, and <span class='highlight'>then</span> you can play.",
  choices: ["すぐに", "そのあとで", "ときどき", "ここに"],
  correct: 1,
  explanation: "▶ 宿題を終えなさい／そして／そのあとで遊べます<br>▶「then」は順序を表し、「それから・そのあとで」。"
},
{
  sentence: "He will come <span class='highlight'>soon</span>.",
  choices: ["すぐに", "あとで", "ときどき", "決して〜ない"],
  correct: 0,
  explanation: "▶ 彼は／来るでしょう／すぐに<br>▶「soon」は時間を表し、「すぐに」という意味です。"
},
{
  sentence: "We <span class='highlight'>finally</span> got home.",
  choices: ["まだ", "ついに", "ときどき", "よく"],
  correct: 1,
  explanation: "▶ 私たちは／ついに着いた／家に<br>▶「finally」は結果を表し、「ついに」という意味です。"
},
{
  sentence: "I went <span class='highlight'>there</span> yesterday.",
  choices: ["ここに", "ついに", "そこへ", "よく"],
  correct: 2,
  explanation: "▶ 私は／行った／そこへ／昨日<br>▶「there」は場所を表し、「そこへ・そこで」という意味です。"
},
{
  sentence: "He is <span class='highlight'>still</span> in the room.",
  choices: ["もう", "まだ", "すぐに", "そこに"],
  correct: 1,
  explanation: "▶ 彼は／いる／まだ／部屋に<br>▶「still」は継続を表し、「まだ」という意味です。"
}
 ]
  },


idiom: {
    title: "📗 熟語",
    level: "normal",
    questions: [

{
  sentence: "I felt better <span class='highlight'>after a while</span>.",
  choices: ["すぐに", "しばらくして", "いつも", "ついに"],
  correct: 1,
  explanation: "▶ 私は／気分がよくなった／しばらくして<br>▶「after a while」は「しばらくして」という意味です。"
},
{
  sentence: "We finished the work <span class='highlight'>at last</span>.",
  choices: ["ときどき", "まだ", "すぐに", "ついに"],
  correct: 3,
  explanation: "▶ 私たちは／終えた／その仕事を／ついに<br>▶「at last」は「ついに」という意味です。"
},
{
  sentence: "I met him <span class='highlight'>for the first time</span>.",
  choices: ["何度も", "最後に", "初めて", "ときどき"],
  correct: 2,
  explanation: "▶ 私は／会った／彼に／初めて<br>▶「for the first time」は「初めて」という意味です。"
},
{
  sentence: "She left home <span class='highlight'>in a hurry</span>.",
  choices: ["ゆっくりと", "急いで", "静かに", "突然"],
  correct: 1,
  explanation: "▶ 彼女は／出た／家を／急いで<br>▶「in a hurry」は「急いで」という意味です。"
},
{
  sentence: "<span class='highlight'>In fact</span>, he is very kind.",
  choices: ["実は", "たぶん", "まず", "そのあとで"],
  correct: 0,
  explanation: "▶ 実は／彼は／とても親切です<br>▶「in fact」は「実は」という意味です。"
},
{
  sentence: "He is standing <span class='highlight'>in front of the door</span>.",
  choices: ["ドアの後ろに", "ドアの上に", "ドアの中に", "ドアの前に"],
  correct: 3,
  explanation: "▶ 彼は／立っている／ドアの前に<br>▶「in front of」は「〜の前に」という意味です。"
},
{
  sentence: "I met her <span class='highlight'>on my way to school</span>.",
  choices: ["学校のあとで", "学校の前で", "学校へ行く途中で", "学校の中で"],
  correct: 2,
  explanation: "▶ 私は／会った／彼女に／学校へ行く途中で<br>▶「on my way to」は「〜へ行く途中で」という意味です。"
},
{
  sentence: "I studied <span class='highlight'>all day long</span>.",
  choices: ["一日中", "少しの間", "すぐに", "ときどき"],
  correct: 0,
  explanation: "▶ 私は／勉強した／一日中<br>▶「all day long」は「一日中」という意味です。"
},
{
  sentence: "My bag is <span class='highlight'>over there</span>.",
  choices: ["ここに", "そばに", "あそこに", "すぐに"],
  correct: 2,
  explanation: "▶ 私のかばんは／あそこにあります<br>▶「over there」は場所を表し、「あそこに・向こうに」という意味です。"
},
{
  sentence: "They help <span class='highlight'>each other</span>.",
  choices: ["お互いに", "一人で", "先生に", "ときどき"],
  correct: 0,
  explanation: "▶ 彼らは／助け合う／お互いに<br>▶「each other」は「お互いに」という意味です。"
},
{
  sentence: "<span class='highlight'>In my opinion</span>, this book is good.",
  choices: ["実は", "私の考えでは", "たぶん", "まず"],
  correct: 1,
  explanation: "▶ 私の考えでは／この本は／よいです<br>▶「in my opinion」は「私の考えでは」という意味です。"
},
{
  sentence: "<span class='highlight'>First of all</span>, wash your hands.",
  choices: ["そのあとで", "最後に", "実は", "まず第一に"],
  correct: 3,
  explanation: "▶ まず第一に／手を洗いなさい<br>▶「first of all」は「まず第一に」という意味です。"
},
{
  sentence: "I got to the station <span class='highlight'>in time</span>.",
  choices: ["遅れて", "すぐに", "時間内に", "ときどき"],
  correct: 2,
  explanation: "▶ 私は／着いた／駅に／時間内に<br>▶「in time」は「時間に間に合って」という意味です。"
},
{
  sentence: "I am <span class='highlight'>a little</span> tired.",
  choices: ["とても", "少し", "まったく〜ない", "いつも"],
  correct: 1,
  explanation: "▶ 私は／少し／疲れています<br>▶「a little」は「少し」という意味です。"
},
{
  sentence: "<span class='highlight'>In my opinion</span>, this book is good.",
  choices: ["実は", "私の考えでは", "たぶん", "まず"],
  correct: 1,
  explanation: "▶ 私の考えでは／この本は／よいです<br>▶「in my opinion」は「私の考えでは」という意味です。"
},
{
  sentence: "<span class='highlight'>First of all</span>, wash your hands.",
  choices: ["そのあとで", "最後に", "実は", "まず第一に"],
  correct: 3,
  explanation: "▶ まず第一に／手を洗いなさい<br>▶「first of all」は「まず第一に」という意味です。"
},
{
  sentence: "I got to the station <span class='highlight'>in time</span>.",
  choices: ["遅れて", "すぐに", "時間内に", "ときどき"],
  correct: 2,
  explanation: "▶ 私は／着いた／駅に／時間内に<br>▶「in time」は「時間に間に合って」という意味です。"
},
{
  sentence: "I am <span class='highlight'>a little</span> tired.",
  choices: ["とても", "少し", "まったく〜ない", "いつも"],
  correct: 1,
  explanation: "▶ 私は／少し／疲れています<br>▶「a little」は「少し」という意味です。"
}
 ]
  }


}



/*********************************************************
 * state（アプリ全体の状態）
 *********************************************************/

const state = {

  // ===== 現在の画面 =====
  screen: "modeSelect",

   level: "basic",         // ← 追加（必修 or 標準）

  // ===== 学習モード =====
  study: {
    categoryKey: null,
    questions: [],
    index: 0,
    answers: [],
    correctCount: 0,
    viewingPrevious: false
  },

  // ===== 連チャンモード =====
  chain: {
    questions: [],
    index: 0,

    correctStreak: 0,
    lastStreak: 0,
    maxStreak: 0,

    answered: null,

    showFeedback: false,
    milestone: null,
    newRecord: false,

    mode: "normal"
  },

  // ===== 学習データ =====
  progress: {},

  stars: JSON.parse(
    localStorage.getItem("stars") || "{}"
  ),

  studyResults: {},

  // ===== 弱点問題 =====
  weakQuestions: JSON.parse(
    localStorage.getItem("weakQuestions") || "{}"
  ),

  // ===== 連チャン記録 =====
  records: JSON.parse(
    localStorage.getItem("records")
  ) || {
    normalChain:0,
    basicChain:0,
    weakChain:0
  },

  // ===== 今日の記録 =====
  today: JSON.parse(
  localStorage.getItem("todayRecord")
) || {

  date: "",

  maxChain: 0,

  challenge: 0

}

};


function playSound(type){

  const sounds = {

    // 既存
    correct : "sounds/correct.mp3",
    wrong   : "sounds/wrong.mp3",
    select  : "sounds/select.mp3",
    finish  : "sounds/finish.mp3",
    next    : "sounds/next.mp3",
    tryagain: "sounds/tryagain.mp3",

    // 結果画面
    result    : "sounds/result.mp3",
    milestone : "sounds/milestone.mp3",
    record    : "sounds/record.mp3",
    perfect   : "sounds/perfect.mp3",
    today     : "sounds/mew01.mp3"

  };

  const src = sounds[type];
  if(!src) return;

  const audio = new Audio(src);
  audio.volume = 0.8;
  audio.play();

}



function getStudyEvaluation(correct, total) {
  const rate = correct / total;

  if (rate === 1) {
    return {
      label: "パーフェクト！",
      image: "images/cs04.png",
      sound: "finish"
    };
  }

  if (rate >= 0.7) {
    return {
      label: "よくできました！",
      image: "images/cmi02.png",
      sound: "today"
    };
  }

  return {
    label: "復習しよう",
    image: "images/cw03.png",
    sound: "tryagain"
  };
}

/*********************************************************
 * localStorage 保存・読込
 *********************************************************/

const STORAGE_KEY = "english-study-app-v1";

function save() {
  const data = {
    progress: state.progress,
    maxChain: state.maxChain
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

function load() {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) return;

  try {
    const data = JSON.parse(raw);
    state.progress = data.progress || {};
    state.maxChain = data.maxChain || 0;
  } catch (e) {
    console.error("データ読み込み失敗", e);
  }
}


const MAX_STARS = 24; // 単元数が追加されたら増やす




/*********************************************************
 * 初期化
 *********************************************************/

load();


// ==========================
// state 定義
// ==========================

function getTotalStars() {

  const stars = state.stars || {};

  return Object.entries(stars)
    .filter(([key]) => key !== "weak")  // ←① これ
    .reduce((sum, [, val]) => sum + val, 0); // ←②③

}

/*********************************************************
 * ユーティリティ
 *********************************************************/

// 配列シャッフル（Fisher–Yates）
function shuffleArray(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/*********************************************************
 * 弱点問題を保存
 *********************************************************/


function saveWeakQuestions() {
  localStorage.setItem(
    "weakQuestions",
    JSON.stringify(state.weakQuestions)
  );
}

function addWeakQuestion(q) {

  const key = q.sentence;

  if (!state.weakQuestions[key]) {
    state.weakQuestions[key] = {
      data: q,
      success: 0,
      lastWrongAt: Date.now() // ←追加
    };
  }

  saveWeakQuestions();
}

function successWeakQuestion(q) {

  const key = q.sentence;

  if (!state.weakQuestions[key]) return;

  state.weakQuestions[key].success++;

  if (state.weakQuestions[key].success >= 2) {
    delete state.weakQuestions[key];
  }

  saveWeakQuestions();
}


function sortWeakList(weakList){

  const now = Date.now();

  weakList.sort((a, b) => {

    // 弱さ（successが少ないほど弱い）
    const weakA = 2 - (a.success || 0);
    const weakB = 2 - (b.success || 0);

    // 古さ（時間差）
    const ageA = (now - (a.lastWrongAt || 0)) / 1000000;
    const ageB = (now - (b.lastWrongAt || 0)) / 1000000;

    // 総合スコア
    const scoreA = weakA * 10 + ageA;
    const scoreB = weakB * 10 + ageB;

    return scoreB - scoreA; // 大きい方を上に

  });

}

function addQuestionIds(){

  const all = getAllQuestions();

  all.forEach((q,i)=>{

    if(!q.id){
      q.id = "q_" + i;
    }

  });

}

function getAllQuestions() {
  return Object.values(categories)
    .flatMap(category => category.questions);
}



/*********************************************************
 * render（画面切替の司令塔）
 *********************************************************/

function render() {

   cleanStars();  // ←🔥 これを追加

   window.scrollTo(0, 0); // ←追加

  console.log("render called", state.screen);
  

  const app = document.getElementById("app");
  app.innerHTML = "";

  switch (state.screen) {

    case "modeSelect":
      renderModeSelect(app);
      break;

    case "levelSelect": // ←★追加
      renderLevelSelect(app);
      break;

    case "studyMenu":
      renderStudyMenu(app);
      break;

    case "studyQuestion":
      renderStudyQuestion(app);
      break;

    case "studyResult":
      renderStudyResult(app);
      break;

    case "chainMenu":
      renderChainMenu(app);
      break;

    case "chainQuestion":
      renderChainQuestion(app);
      break;

    case "chainResult":
      renderChainResult(app);
      break;

    case "weakChainMenu":
      renderWeakChainMenu(app);
      break;

    case "basicChainMenu":
      renderBasicChainMenu(app);
      break;

    case "quiz":
      renderQuiz(app);
      break;      

    default:
      app.textContent = "不明な画面です";
  }

  
 
}

/*********************************************************
 * 画面遷移ヘルパー
 *********************************************************/

function goModeSelect() {

  state.screen = "modeSelect";
  render();
}

function goStudyMenu() {
  state.screen = "studyMenu";
  render();
}

function startStudy(categoryKey) {
  const category = categories[categoryKey];
  const questions = shuffleArray(category.questions);

  state.study = {
    categoryKey,
    questions,
    index: 0,
    correctCount: 0,
    viewingPrevious: false,
    answers: new Array(questions.length).fill(null)
  };

  state.study.answered = false;

  state.screen = "studyQuestion";
  render();
}

function startChain(mode){

  checkTodayRecord();

  state.today.challenge++;

  localStorage.setItem(
    "todayRecord",
    JSON.stringify(state.today)
  );

  let questions = [];

  if(mode==="basic"){
    questions = getAllQuestions().slice(0,99);
  }else if(mode==="weak"){
    questions =
      Object.values(state.weakQuestions)
      .map(w=>w.data);
  }else{
    questions = getAllQuestions();
  }

  if(questions.length===0){
    alert("問題がありません");
    return;
  }

  state.chain = {
    questions: shuffleArray(questions),
    index:0,

    correctStreak:0,
    lastStreak:0,
    maxStreak:0,

    answered:null,

    showFeedback:false,
    milestone:null,
    newRecord:false,

    // ★ここが超重要
    startTodayBest: state.today?.maxChain || 0,

    todayNewRecord:false,
    todayStatus:"",

    mode:mode
  };

  state.screen="chainQuestion";
  render();
}



function goChainMenu() {
  state.screen = "chainMenu";
  render();
}

function goBasicChainMenu() {
  state.screen = "basicChainMenu";
  render();
}



function getWeakQuestions() {

  const weak = state.weakQuestions;

  return Object.values(weak).map(w => w.data);

}

function goWeakChainMenu() {
  state.screen = "weakChainMenu";
  render();
}




/*********************************************************
 * 各画面の仮render
 * （次のステップで中身を本実装）
 *********************************************************/

function renderModeSelect(root) {


  const totalStars = getTotalStars();  

  
  const starIcons =
  "⭐".repeat(totalStars) +
  "☆".repeat(MAX_STARS - totalStars);

  const weakCount = getWeakQuestions().length;
  checkTodayRecord();

  root.innerHTML = `

     <h3>-英語を日本語に-</h3><h3>4択で やさしく読める</h3>


<h1 class="logo">
      よんたくん
      
    </h1>


    <div class="mode-hero">
      <img src="images/4cats.png" class="mode-cat">
    </div>

    

   

    <!-- 学習モード -->
    <div class="mode-card">
      <button id="studyBtn" class="mode-btn">
        📘 じっくり学習
        <div class="mode-sub02">
       ${starIcons}
       <div class="star-count">
       ${totalStars} / ${MAX_STARS}
        </div>
      </div>
      </button>
    </div>

   
    <!-- 弱点連チャン -->
    <div class="mode-card">
      <button id="weakChainBtn" class="mode-btn">
        💥 弱点克服
        <div class="mode-sub">
          弱点問題 ${weakCount} 問
        </div>    
      </button>
    </div>


 <div class="today-box">

  <div align=center class="today-title">
    🔥 今日の記録
  </div>

  <div align=center class="today-item">
    最高：
    ${state.today.maxChain}連チャン    　挑戦回数：
    ${state.today.challenge}
  </div>

</div>





    <!-- 必修連チャン -->
    <div class="mode-card">
      <button id="basicChainBtn" class="mode-btn">
        📘 必修連チャン
        <div class="mode-sub">
          🏆 最高 ${state.records.basicChain} 連チャン
        </div>
      </button>
    </div>


    <!-- 通常連チャン -->
    <div class="mode-card">
      <button id="chainBtn" class="mode-btn">
        🔥 連チャン
        <div class="mode-sub">
          🏆 最高 ${state.records.normalChain} 連チャン
        </div>
      </button>
    </div>




    <p class="version">ver 1.87</p>

  `;

  // ===== ボタンイベント =====

  document.getElementById("studyBtn").onclick = () => {
    state.screen = "levelSelect";
    render();
  };

  document.getElementById("basicChainBtn").onclick = () => {
    state.screen = "basicChainMenu";
    render();
  };

  document.getElementById("chainBtn").onclick = () => {
    state.screen = "chainMenu";
    render();
  };

  document.getElementById("weakChainBtn").onclick = () => {
    state.screen = "weakChainMenu";
    render();
  };

}

function renderStudyMenu(root) {
  root.innerHTML = `
    <h2>📘📗 じっくり学習</h2>


     <div class="mode-study">
      <img src="images/cw01.png" class="mode-cat">
    </div>

    <div class="note">獲得した⭐は右クリック、または長押しで解除できます</div>

    <div class="category-list">
      ${Object.keys(categories)
        .filter(key => categories[key].level === state.level)
        .map(key => {
        const cat = categories[key];
        const total = cat.questions.length;
        const correct = state.studyResults?.[key]?.correct || 0;
        const star = state.stars[key] ? "⭐" : "";

        return `
          <button class="category-btn" data-key="${key}">
            ${cat.title} (${correct}/${total}) ${star}
          </button>
        `;
      }).join("")}
    </div>

    <button class="category-btn" id="resetStarsBtn">⭐ すべてリセット</button>
   

    <div class="bottom-nav">
    <button id="modeBtn" class="mode-btn">🔙 メニューへ</button>
       <button id="levelBtn" class="mode-btn">📘📗<div>レベル選択へ</div></button>
     <button id="weakBtn" class="mode-btn">💥 弱点克服へ</button>
    </div>
  `;

  document.querySelectorAll(".category-btn").forEach(btn => {
  const key = btn.dataset.key;


  let pressTimer = null;
  let longPressTriggered = false;

  // ===== 通常クリック =====
  btn.onclick = () => {
    if (!longPressTriggered) {
      startStudy(key);
    }
    longPressTriggered = false;
  };

  // ===== PC右クリック解除 =====
  btn.oncontextmenu = (e) => {
    e.preventDefault();
    tryRemoveStar(key);
  };

  // ===== スマホ長押し開始 =====
  btn.addEventListener("touchstart", () => {
    longPressTriggered = false;

    pressTimer = setTimeout(() => {
      longPressTriggered = true;
      tryRemoveStar(key);
    }, 600); // ← 長押し時間（0.6秒）
  });

  // ===== 指を離したらキャンセル =====
  btn.addEventListener("touchend", () => {
    clearTimeout(pressTimer);
  });

  btn.addEventListener("touchmove", () => {
    clearTimeout(pressTimer);
  });
});

  document.getElementById("modeBtn").onclick = goModeSelect;

  document.getElementById("levelBtn").onclick = () => {
  state.screen = "levelSelect";
  render();
};

document.getElementById("weakBtn").onclick = () => {
  state.screen = "weakChainMenu";
  render();
};

  document.getElementById("resetStarsBtn").onclick = () => {

  const ok = confirm("すべての⭐をリセットしますか？");

  if (!ok) return;

  // ⭐データ削除
  localStorage.removeItem("stars");

  // stateもリセット
  state.stars = {};

  // 再描画
  render();
};
}

// ⭐解除処理を関数化
function tryRemoveStar(key) {
  if (state.stars[key]) {
    const ok = confirm("⭐を解除しますか？");
    if (ok) {
      delete state.stars[key];
      localStorage.setItem("stars", JSON.stringify(state.stars));
      render();
    }
  }
}


function renderLevelSelect(root) {

  root.innerHTML = `

    <h2>📘📗 レベル選択</h2>

    <div class="mode-hero">
      <img src="images/cw01.png" class="mode-cat">
    </div>

    <!-- 必修編 -->
    <div class="mode-card">
      <button id="basicBtn" class="mode-btn">
        📘 必修編
        <div class="mode-sub">まずはここから</div>
      </button>
    </div>

    <!-- 標準編 -->
    <div class="mode-card">
      <button id="normalBtn" class="mode-btn">
        📗 標準編
        <div class="mode-sub">自信がついたら次のレベルへ</div>
      </button>
    </div>

    <!-- ナビ -->
    <div class="bottom-nav">
      <button id="modeBtn" class="mode-btn">🔙 メニューへ</button>
    </div>

  `;

  // ===== イベント =====

  // 必修編
  document.getElementById("basicBtn").onclick = () => {
    state.level = "basic";
    state.screen = "studyMenu";
    render();
  };

  // 標準編
  document.getElementById("normalBtn").onclick = () => {
    state.level = "normal";
    state.screen = "studyMenu";
    render();
  };

  // メニューへ戻る
  document.getElementById("modeBtn").onclick = goModeSelect;
}

function renderStudyQuestion() {


  const root = document.getElementById("app");
  const study = state.study;
  const q = study.questions[study.index];
  const answered = study.answers[study.index];

  root.innerHTML = `

  <h2>📘📗 じっくり学習</h2>

    <div class="screen study">
      

      <div class="status">
        <span>${study.index + 1} / ${study.questions.length}</span>
        ${study.viewingPrevious ? `<span class="review-flag">前の問題を見ています</span>` : ""}
      </div>

      <div class="question-area">
        <div class="question">${q.sentence}</div>

        <div class="choices">
          ${q.choices.map((choice, i) => {
            let cls = "choice";
            if (answered) {
              if (i === q.correct) cls += " correct";
              else if (i === answered.selected) cls += " wrong";
              
            }
            return `<button class="${cls}" data-index="${i}" ${answered ? "disabled" : ""}>${choice}</button>`;
          }).join("")}
        </div>

        <div id="result"></div>
        <div id="explanation"></div>
      </div>

      <div class="bottom-nav">
        <button id="menuBtn" class="nav-menu">分野選択へ</button>
  <button id="prevBtn" class="nav-prev">前へ</button>
  <button id="nextBtn" class="nav-next">次へ ▶</button>
      </div>
    </div>
  `;

  

  // 選択肢
document.querySelectorAll(".choice").forEach(btn => {
  btn.onclick = () => {
    if (answered) return;

    const selected = Number(btn.dataset.index);
    const isCorrect = selected === q.correct;

    study.answers[study.index] = { selected, isCorrect };

        // ===== 弱点処理 =====
    if (isCorrect) {
      study.correctCount++;
      successWeakQuestion(q);

    } else {
      addWeakQuestion(q);
    }

    playSound(isCorrect ? "correct" : "wrong");
    render();
  };
});


  // 解説
  if (answered) {
    document.getElementById("result").innerHTML = answered.isCorrect
      ? `<p class="correct-text">正解！</p>`
      : `<p class="wrong-text">不正解</p>`;

    document.getElementById("explanation").innerHTML = `
      <p>${q.explanation}</p>
      ${q.youtube ? `<button id="ytBtn">YouTubeで解説を見る</button><div id="yt"></div>` : ""}
    `;

    if (q.youtube) {
      document.getElementById("ytBtn").onclick = () => {
        document.getElementById("yt").innerHTML = `
       <div class="youtube-wrapper">
       <iframe src="${q.youtube}" allowfullscreen></iframe>
       </div>
        `;
      };
    }
  }


  
  // ナビ

  // ===== ナビ =====

const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

// 第1問なら前へ無効
prevBtn.disabled = (study.index === 0);

// 未回答なら次へ無効
nextBtn.disabled = !study.answers[study.index];

// 前へ
prevBtn.onclick = () => {
  if (study.index > 0) {
    study.index--;
    render();
  }
};

// 次へ
nextBtn.onclick = () => {

  // 最終問題なら結果へ
  if (study.index >= study.questions.length - 1) {
    finishStudy();
    return;
  }

  // 次の問題へ
  study.index++;
  render();
};

  const menuBtn = document.getElementById("menuBtn");
if (menuBtn) {
  menuBtn.onclick = () => {
    if (answered && !confirm("途中ですが、メニューに戻りますか？")) return;
    study.viewingPrevious = false;
    goStudyMenu();
  };
}

// ===== スワイプ対応 =====
let touchStartX = 0;
let touchEndX = 0;

const screen = document.querySelector(".question-area");

screen.addEventListener("touchstart", (e) => {
  touchStartX = e.changedTouches[0].screenX;
});

screen.addEventListener("touchend", (e) => {
  touchEndX = e.changedTouches[0].screenX;
  handleSwipe();
});

function handleSwipe() {
  const diff = touchEndX - touchStartX;

  // 50px以上動いたらスワイプ判定
  if (Math.abs(diff) < 50) return;

  // 右スワイプ → 前へ
  if (diff > 0) {
    if (study.index > 0) {
      study.index--;
      render();
    }
  }

  // 左スワイプ → 次へ
  if (diff < 0) {
    if (study.answers[study.index]) {
      if (study.index >= study.questions.length - 1) {
        finishStudy();
      } else {
        study.index++;
        render();
      }
    }
  }
}
}

function finishStudy() {
  const study = state.study;
  const total = study.questions.length;
  const correct = study.correctCount;

  state.studyResults = state.studyResults || {};
  state.studyResults[study.categoryKey] = { correct };

  const alreadyHadStar = state.stars[study.categoryKey];
  let newlyEarned = false;

  if (
  correct === total &&
  !alreadyHadStar &&
  study.categoryKey !== "weak"
) {
  state.stars[study.categoryKey] = 1;

  localStorage.setItem(
    "stars",
    JSON.stringify(state.stars)
  );

  newlyEarned = true;
}

  state.study.newlyEarnedStar = newlyEarned;



  state.screen = "studyResult";
  render();
}

function renderStudyResult(root) {
  const study = state.study;
  const total = study.questions.length;
  const correct = study.correctCount;

  const evaluation = getStudyEvaluation(correct, total);

  const newlyEarned = state.study.newlyEarnedStar;
  const alreadyHad = state.stars[study.categoryKey];

  root.innerHTML = `
    <h2>📘 学習結果</h2>

    <p class="score">${correct} / ${total}</p>

    <div class="evaluation-message">
      ${evaluation.label || ""}
    </div>

    ${
      evaluation.image
        ? `<div class="evaluation-image">
             <img src="${evaluation.image}" alt="result">
           </div>`
        : ""
    }

    ${
      newlyEarned
        ? `<div class="star-new">🎉 ⭐獲得！</div>`
        : ""
    }

    ${
      !newlyEarned && alreadyHad
        ? `<div class="star-owned">⭐獲得済み</div>`
        : ""
    }

    <button id="reviewBtn" class="mode-btn">最後の問題を見る</button>
    <button id="menuBtn" class="mode-btn">📘 分野選択へ</button>

    
      <button id="weakChainBtn" class="mode-btn">
        💥 弱点克服へ
      </button>
    

    <div class="bottom-nav">
    <button id="modeBtn" class="mode-btn">🔙 メニューへ</button></div>
  `;

  // 効果音
  if (evaluation.sound) {
    playSound(evaluation.sound);
  }

  // ボタン処理
  document.getElementById("reviewBtn").onclick = () => {
    state.study.index = study.questions.length - 1;
    state.study.viewingPrevious = true;
    state.screen = "studyQuestion";
    render();
  };

  document.getElementById("menuBtn").onclick = goStudyMenu;

  document.getElementById("weakChainBtn").onclick = () => {
    state.screen = "weakChainMenu";
    render();
  };

  document.getElementById("modeBtn").onclick = goModeSelect;
}

function getModeTitle(mode){

  if(mode === "basic") return "📘 必修連チャン";
  if(mode === "weak") return "💥 弱点克服";

  return "🔥 連チャン";
}

function getChainRecord(mode){

  if(mode === "basic") return state.records.basicChain;
  if(mode === "weak") return state.records.weakChain;

  return state.records.normalChain;
}

function updateChainRecord(mode,streak){

  if(mode==="basic"){

    if(streak>state.records.basicChain)
      state.records.basicChain=streak;

  }else if(mode==="weak"){

    if(streak>state.records.weakChain)
      state.records.weakChain=streak;

  }else{

    if(streak>state.records.normalChain)
      state.records.normalChain=streak;

  }

  localStorage.setItem(
    "records",
    JSON.stringify(state.records)
  );
}



function renderChainMenu(root) {

  const chain = state.chain;  // ← これを追加

  const record =
  chain.mode === "basic"
    ? state.records.basicChain
    : chain.mode === "weak"
    ? state.records.weakChain
    : state.records.normalChain;

  root.innerHTML = `

   <h2>🔥 連チャン</h2>

  
    
    <div class="mode-study">
      <img src="images/cmi01.png" class="mode-cat">
    </div>

    <p align=center>🏆最高記録：${record}連チャン！</p>

    <div class="reset-link" id="resetChainBtn">
    ⚠ 長押しで記録リセット
  </div>

    <button class="start-btn" id="startBtn">🔥 GAME START</button>
   

     <div class="bottom-nav">
    <button id="backBtn" class="mode-btn">🔙 メニューへ</button>
    </div>
  `;

  document.getElementById("startBtn").onclick =
  () => startChain("normal");
  document.getElementById("backBtn").onclick = goModeSelect;

  setupChainReset(); // ← 後で作る
}

function setupChainReset() {

  const resetBtn = document.getElementById("resetChainBtn");
  if (!resetBtn) return;

  let pressTimer;

  const startPress = () => {

    pressTimer = setTimeout(() => {

      if (!confirm("連チャン記録をリセットしますか？")) return;

      state.records.normalChain = 0;

      localStorage.setItem(
        "records",
        JSON.stringify(state.records)
      );

      render();

    }, 800); // 長押し時間

  };

  const cancelPress = () => clearTimeout(pressTimer);

  resetBtn.addEventListener("mousedown", startPress);
  resetBtn.addEventListener("mouseup", cancelPress);
  resetBtn.addEventListener("mouseleave", cancelPress);

  resetBtn.addEventListener("touchstart", startPress);
  resetBtn.addEventListener("touchend", cancelPress);
  resetBtn.addEventListener("touchmove", cancelPress);
}


function renderChainQuestion(root){

  const chain = state.chain;
  const q = chain.questions[chain.index];

  const current = chain.index + 1;
  const total = chain.questions.length;

  const progress = (current / total) * 100;

  if(!q){
    finishChain();
    return;
  }

  const modeTitle =
    chain.mode === "basic"
      ? "📘 必修連チャン"
      : chain.mode === "weak"
      ? "💥 弱点克服"
      : "🔥 連チャン";

  const record =
    chain.mode === "basic"
      ? state.records.basicChain
      : chain.mode === "weak"
      ? state.records.weakChain
      : state.records.normalChain;

  root.innerHTML = `

  <h2>${modeTitle}</h2>

  <div>
      🏆 最高記録：${record}
    </div>

  <div class="chain-status">
  🔥 ${chain.correctStreak}連チャン
  <span>${current}/${total}</span>
</div>

 <div class="progress-bar">
    <div class="progress-fill"
         style="width:${progress}%">
    </div>
  </div>

  <div class="question-area">

    <div class="question">
      ${q.sentence}
    </div>

    <div class="choices">
      ${q.choices.map((c,i)=>
        `<button class="choice" data-index="${i}">
          ${c}
        </button>`
      ).join("")}
    </div>

    ${chain.showFeedback
      ? `<div class="feedback-correct">✅ 正解！</div>`
      : ""
    }

    ${chain.answered && !chain.answered.isCorrect
      ? `<p class="wrong-text">不正解</p>
         <div class="chain-explanation">
           ${q.explanation || ""}
         </div>`
      : ""
    }

    

  </div>

  <div class="bottom-nav">
    <button id="menuBtn" class="mode-btn">
      記録確定せず<br>メニューへ
    </button>

    <button id="endBtn" class="mode-btn">
      記録確定して終了
    </button>
  </div>


  ${chain.milestone
    ? `<div class="milestone-popup">
        🎉 ${chain.milestone} 連チャン！
       </div>`
    : ""
  }

   ${chain.showTodayRecordUpdate
    ? `<div class="milestone-popup">
        😺 今日の記録更新！
       </div>`
    : ""
  }

  ${chain.newRecord
    ? `<div class="record-popup">
        🔥 最高記録更新！
       </div>`
    : ""
  }
  `;

  const buttons = document.querySelectorAll(".choice");

  buttons.forEach(btn=>{

    btn.onclick = ()=>{

      if(chain.answered) return;

      const selected =
        Number(btn.dataset.index);

      const correct =
  Number(q.correct);



buttons.forEach((b,i)=>{

  if(i === correct){
    b.classList.add("correct");
  }

  if(i === selected && selected !== correct){
    b.classList.add("wrong");
  }

});

      const isCorrect =
        selected === Number(q.correct);

      if(isCorrect){

        btn.classList.add("correct");
        

        chain.answered = {selected,isCorrect:true};

        chain.correctStreak++;


if (
  chain.correctStreak > chain.startTodayBest &&
  !chain.todayNewRecord
) {
  chain.todayNewRecord = true;

  chain.showTodayRecordUpdate = true;
  playSound("today");
  render();

  setTimeout(()=>{
    chain.showTodayRecordUpdate = false;
     
    render();
  }, 800);
}
   

        if(chain.mode==="weak"){
          successWeakQuestion(q);
        }

        chain.maxStreak =
          Math.max(chain.maxStreak,
                   chain.correctStreak);

        const isNewRecord =
  chain.correctStreak >
  chain.startMaxRecord &&
  chain.correctStreak === chain.startMaxRecord + 1;

        const isMilestone =
          chain.correctStreak % 10 === 0;

        chain.showFeedback = true;

        playSound("correct");

       

        

        setTimeout(()=>{

          chain.showFeedback = false;

          if(isNewRecord){
            chain.newRecord = true;
            playSound("record");
            render();
          }

          setTimeout(()=>{

            chain.newRecord = false;

            if(isMilestone){
              chain.milestone =
                chain.correctStreak;
                playSound("record");
              render();
            }

            setTimeout(()=>{
              chain.milestone = null;

             

              goNext();

            render();

            },600);

          },400);

        },200);

      }else{

        btn.classList.add("wrong");

        chain.lastStreak =
          chain.correctStreak;

        chain.answered = {selected,isCorrect:false};

        playSound("wrong");

        chain.correctStreak = 0;

        addWeakQuestion(q);

        render();
      } 

    }; 

  });

  // 既に回答済みなら色を復元
if(chain.answered){

  const selected = chain.answered.selected;
  const correct = Number(q.correct);

  buttons.forEach((b,i)=>{

    if(i === correct){
      b.classList.add("correct");
    }

    if(i === selected && selected !== correct){
      b.classList.add("wrong");
    }

  });

}

  document.getElementById("menuBtn").onclick = ()=>{
    if(!confirm("連チャンを中断しますか？"))
      return;

    goModeSelect();
  };

  document.getElementById("endBtn").onclick = ()=>{
    finishChain();
  };

}

function goNext(){

  const chain = state.chain;

  chain.index++;
  chain.answered=null;

  render();
}

function finishChain() {

  const chain = state.chain;

  // =========================
  // 今日の記録（開始時）
  // =========================
  const todayBest = chain.startTodayBest || 0;

  // =========================
  // 今日の状態判定
  // =========================
  if (chain.maxStreak > todayBest) {
    chain.todayStatus = "new";
    chain.todayNewRecord = true;
    state.today.maxChain = chain.maxStreak;

  } else if (chain.maxStreak === todayBest) {
    chain.todayStatus = "equal";
    chain.todayNewRecord = false;

  } else {
    chain.todayStatus = "below";
    chain.todayNewRecord = false;
  }

  // =========================
  // 差分
  // =========================
  chain.toTodayBest = Math.max(
    0,
    todayBest - chain.maxStreak
  );

  // 保存
  localStorage.setItem(
    "todayRecord",
    JSON.stringify(state.today)
  );

  // =========================
  // モード別記録
  // =========================
  let recordKey = "normalChain";

  if (chain.mode === "basic") {
    recordKey = "basicChain";
  } else if (chain.mode === "weak") {
    recordKey = "weakChain";
  }

  let isNewRecord = false;
  const oldRecord = state.records[recordKey];

  if (chain.maxStreak > oldRecord) {
    state.records[recordKey] = chain.maxStreak;
    isNewRecord = true;
  }

  localStorage.setItem(
    "records",
    JSON.stringify(state.records)
  );

  chain.newRecord = isNewRecord;

  // =========================
  // その他
  // =========================
  chain.toAllTimeBest = Math.max(
    0,
    state.records[recordKey] - chain.maxStreak
  );

  chain.perfect =
    chain.mode !== "weak" &&
    chain.maxStreak === chain.questions.length;

  chain.milestone10 =
    Math.floor(chain.maxStreak / 10) * 10;

  // =========================
  // サウンド
  // =========================
  if (chain.newRecord || chain.todayNewRecord) {
    playSound("record");
  }

  state.screen = "chainResult";
  render();
}



function getChainImage(streak, perfect){

  if (perfect) return "images/cm_perfect.png";

  if (streak >= 150) return "images/cm08.png";
  if (streak >= 130) return "images/cm07.png";
  if (streak >= 100) return "images/cm06.png";
  if (streak >= 50)  return "images/cm05.png";
  if (streak >= 30)  return "images/cm04.png";
  if (streak >= 20)  return "images/cm03.png";
  if (streak >= 10)  return "images/cm02.png";

  return "images/cm01.png";



console.log("todayNewRecord:", chain.todayNewRecord);
console.log("maxStreak:", chain.maxStreak);
console.log("todayBest:", todayBest);

}

function renderChainResult(root){

  const chain = state.chain;
  const streak = chain.maxStreak;
  const todayBest = state.today?.maxChain || 0;

  const modeTitle =
    chain.mode === "basic"
      ? "📘 必修連チャン結果"
      : chain.mode === "weak"
      ? "💥 弱点連チャン結果"
      : "🔥 連チャン結果";

  const catImg = getChainImage(streak, chain.perfect);

  const goldClass = chain.perfect ? "perfect-screen" : "";

  root.innerHTML = `

  <div class="${goldClass}">

    <h2>${modeTitle}</h2>

    <div class="mode-cat result-step" id="stepCat">
      <img src="${catImg}" class="mode-cat">
    </div>

    <p class="chain-score result-step" id="stepScore">
      🔥 ${streak} 連チャン！
    </p>

    ${
      chain.milestone10 >= 10
      ? `<p class="milestone result-step" id="stepMilestone">
           ${chain.milestone10}連達成！
        </p>`
      : ""
    }

    ${
      chain.newRecord
      ? `<p class="new-record result-step" id="stepRecord">
          🎉 NEW RECORD！
        </p>`
      : ""
    }

   ${
  chain.todayStatus === "new"
  
  ? `<p class="today-record result-step" id="stepToday">
       🌟 今日の記録更新！
     </p>`
  : chain.todayStatus === "equal"
  ? `<p class="today-record result-step" id="stepToday">
       ✨ 今日の記録と同じ！
     </p>`
  : chain.toTodayBest === 1
  ? `<p class="today-record result-step" id="stepToday">
       🔥 あと1連で今日イチ！
     </p>`
  : `<p class="today-gap result-step" id="stepToday">
       👉 今日の記録まであと ${chain.toTodayBest} 連！
     </p>`
}


    ${
      chain.perfect
      ? `<p class="perfect result-step" id="stepPerfect">
          🏆 完全制覇！おめでとう！
        </p>`
      : ""
    }

     

    <button class="mode-btn" id="retryBtn">
      🔁 もう一度
    </button>

  </div>

  <div class="bottom-nav">

    <button id="backBtn" class="mode-btn">
      🔙 メニューへ
    </button>

    <button id="menuBtn" class="mode-btn">
      📋 連チャンスタートへ
    </button> 

  </div>
  `;

  showResultSteps(chain);

  document.getElementById("retryBtn")
    ?.addEventListener("click", () => startChain(chain.mode));

  document.getElementById("menuBtn")
  ?.addEventListener("click", () => {

    if (chain.mode === "basic") {
      goBasicChainMenu();
    }
    else if (chain.mode === "weak") {
      goWeakChainMenu();
    }
    else {
      goChainMenu();
    }

  });

  document.getElementById("backBtn")
    ?.addEventListener("click", goModeSelect);

}



function showResultSteps(chain){

  const steps = [
    { id:"stepCat", sound:null },
    { id:"stepScore", sound:"result" },
    { id:"stepMilestone", sound:"milestone" },
    { id:"stepRecord", sound:"record" },
     { id:"stepToday", sound:"today" }, // ←追加！
    { id:"stepPerfect", sound:"perfect" }
  ];

  let delay = 300;

  steps.forEach(step => {

    const el = document.getElementById(step.id);
    if(!el) return;

    setTimeout(()=>{

      el.classList.add("show");

      if(step.sound){
        playSound(step.sound);
      }

    }, delay);

    delay += 700;

  });

}




function renderWeakChainMenu(root){

  const weakList = Object.values(state.weakQuestions || {});
  sortWeakList(weakList);
  const weakCount = weakList.length;

  root.innerHTML = `

  <h2>💥 弱点克服</h2>

  <div class="mode-study">
    <img src="images/cs01.png" class="mode-cat">
  </div>

  <div align="center">弱点問題：${weakCount}問</div>
  <div align="center">克服しよう！</div>

  <button class="start-btn" id="startWeakChainBtn">
    💥 弱点連チャンSTART
  </button>

  <div class="weak-list">

  ${
    weakCount === 0
      ? `<p class="weak-empty">弱点問題はありません 🎉</p>`
      : weakList.map((w,i)=>{

          const remain = 2 - w.success;
          const skulls = "<span class='weak-skull'>" + "☠".repeat(remain) + "</span>";

          return `
          <div class="weak-item" data-index="${i}">
           <div class="weak-sentence"> 
             <class="weak-skull"> ${skulls} ${w.data.sentence}</div>
            </div>

            
          </div>
          `;

        }).join("")
  }

  </div>

  <div class="bottom-nav">
    <button id="backBtn" class="mode-btn">
      🔙 メニューへ
    </button>
  </div>
  `;


  // ===== 弱点連チャン =====

  const startBtn = document.getElementById("startWeakChainBtn");

  if(startBtn){
    startBtn.onclick = () => startChain("weak");
  }


  // ===== 戻る =====

  document.getElementById("backBtn").onclick = goModeSelect;


  // ===== 個別問題クリック（学習モード） =====

  document.querySelectorAll(".weak-item").forEach((item, i) => {

  item.onclick = () => {

    const weak = weakList[i];
    if (!weak) return;

    const q = weak.data || weak;

    state.study = {
      questions: [q],
      index: 0,
      answers: [],
      correctCount: 0,
      categoryKey: "weak"
    };

    state.screen = "studyQuestion";

    render();
    window.scrollTo(0,0);

  };

});

}


function generateChoices(correct) {

  const all = vocabulary.map(v => v.meaning);

  const shuffled = all
    .filter(m => m !== correct)
    .sort(() => Math.random() - 0.5)
    .slice(0,3);

  shuffled.push(correct);

  return shuffled.sort(() => Math.random() - 0.5);
}

function getBasicQuestions() {
  return questions.slice(0, 50); 
}



function renderBasicChainMenu(root) {

  

  root.innerHTML = `

   <h2>📘 必修連チャン</h2>

    <div class="mode-study">
      <img src="images/cb01.png" class="mode-cat">
    </div>

    <p class="mode-desc" align=center>
      必修問題だけで連チャンに挑戦
    </p>

    <p align=center>🏆最高記録：${state.records.basicChain}連チャン！</p>

    <div id="resetBasicChainBtn" class="reset-link">
      ⚠ 長押しで記録リセット
    </div>

    <button class="start-btn" id="startBasicChainBtn">
      📘 必修連チャンSTART
    </button>

    <div class="bottom-nav">
      <button id="backBtn" class="mode-btn">🔙 メニューへ</button>
    </div>
  `;

  document.getElementById("startBasicChainBtn").onclick =
  () => startChain("basic");
  document.getElementById("backBtn").onclick = goModeSelect;

  const resetBtn = document.getElementById("resetBasicChainBtn");
  if (!resetBtn) return;

  let pressTimer;

  const startPress = () => {

    pressTimer = setTimeout(() => {

      if (!confirm("必修連チャン記録をリセットしますか？")) return;

      state.records.basicChain = 0;

      localStorage.setItem(
        "records",
        JSON.stringify(state.records)
      );

      render();

    }, 800); // 長押し時間

  

  const cancelPress = () => clearTimeout(pressTimer);

  resetBtn.addEventListener("mousedown", startPress);
  resetBtn.addEventListener("mouseup", cancelPress);
  resetBtn.addEventListener("mouseleave", cancelPress);

  resetBtn.addEventListener("touchstart", startPress);
  resetBtn.addEventListener("touchend", cancelPress);
  resetBtn.addEventListener("touchmove", cancelPress);


    render();
  };
setupBasicChainReset();
}

function setupBasicChainReset() {

  const resetBtn = document.getElementById("resetBasicChainBtn");
  if (!resetBtn) return;

  let pressTimer;

  const startPress = () => {

    pressTimer = setTimeout(() => {

      if (!confirm("必修連チャン記録をリセットしますか？")) return;

      state.records.basicChain = 0;

      localStorage.setItem(
        "records",
        JSON.stringify(state.records)
      );

      render();

    }, 800); // 長押し時間

  };

  const cancelPress = () => clearTimeout(pressTimer);

  resetBtn.addEventListener("mousedown", startPress);
  resetBtn.addEventListener("mouseup", cancelPress);
  resetBtn.addEventListener("mouseleave", cancelPress);

  resetBtn.addEventListener("touchstart", startPress);
  resetBtn.addEventListener("touchend", cancelPress);
  resetBtn.addEventListener("touchmove", cancelPress);
}


function getAllQuestions() {

  let all = [];

  for (let key in categories) {
    all = all.concat(categories[key].questions);
  }

  return all;
}

function checkTodayRecord() {

  const today =
    new Date()
      .toISOString()
      .slice(0, 10);

  if (state.today.date !== today) {

    state.today = {

      date: today,

      maxChain: 0,

      challenge: 0

    };

    localStorage.setItem(
      "todayRecord",
      JSON.stringify(state.today)
    );

  }

}





function renderWeakStudyMenu(root){

  const weakQuestions = getWeakQuestions();

  if(weakQuestions.length === 0){
    root.innerHTML = `
      <h2>💀 弱点学習</h2>
      <p>弱点問題はありません</p>
      <button class="mode-btn" id="backBtn">戻る</button>
    `;

    document.getElementById("backBtn").onclick = goMenu;
    return;
  }

  const list = weakQuestions.map(q => `
    <button class="category-btn weak-btn"
      data-id="${q.id}">
      💀 ${q.title}
    </button>
  `).join("");

  root.innerHTML = `
    <h2>💀 弱点問題</h2>
    <div class="category-list">
      ${list}
    </div>

    <button class="mode-btn" id="backBtn">
      🔙 戻る
    </button>
  `;

  document.querySelectorAll(".weak-btn")
    .forEach(btn => {

      btn.onclick = () => {
        startSingleWeakStudy(btn.dataset.id);
      };

    });

  document.getElementById("backBtn")
    .onclick = goMenu;

}

function startSingleWeakStudy(id){

  const q = QUESTIONS.find(q => q.id == id);

  state.study = {
    questions: [q],
    index: 0,
    correctCount: 0,
    categoryKey: "weak_" + id
  };

  state.screen = "studyQuestion";
  render();

}

function startWeakChain(){

  const weakQuestions = getWeakQuestions();

  if(weakQuestions.length === 0){
    alert("弱点問題がありません");
    return;
  }

  state.chain = {
    mode: "weak",
    questions: shuffle(weakQuestions),
    index: 0,
    streak: 0,
    maxStreak: 0
  };

  state.screen = "chainQuestion";
  render();

}

function cleanStars(){

  const stars = JSON.parse(localStorage.getItem("stars")) || {};

  if(stars.weak){
    delete stars.weak;
    localStorage.setItem("stars", JSON.stringify(stars));
  }

  state.stars = stars;

}


/*********************************************************
 * UIユーティリティ
 *********************************************************/
function setupStarLongPress() {
  let timer = null;
  let targetKey = null;

  document.querySelectorAll(".star-wrapper").forEach(el => {
    el.addEventListener("pointerdown", e => {
      e.stopPropagation(); // 単元ボタン誤発火防止
      targetKey = el.dataset.key;
      el.classList.add("holding");

      timer = setTimeout(() => {
        if (!state.progress[targetKey]) return;

        state.progress[targetKey].star = false;
        save();
        render();
      }, 600);
    });

    el.addEventListener("pointerup", cancel);
    el.addEventListener("pointerleave", cancel);
    el.addEventListener("pointercancel", cancel);

    function cancel() {
      clearTimeout(timer);
      el.classList.remove("holding");
      timer = null;
      targetKey = null;
    }
  });
}

function init() {

  cleanStars();
 //  loadData();
  render();

}

/*********************************************************
 * 初回描画
 *********************************************************/

render();

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("./service-worker.js")
    .then(() => console.log("SW registered"))
    .catch(err => console.error("SW failed", err));
}

init();
