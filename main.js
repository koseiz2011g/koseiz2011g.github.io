/* =====================
   データ
===================== */
const categories = {
  tense: {
    title: "📘 時制",
    questions: [
      {
  sentence: "She <span class='highlight'>plays tennis</span> every day.",
  choices: ["テニスをしていた", "テニスをする", "テニスをする予定だ", "テニスをした"],
  correct: 1,
  explanation: "▶「plays」 は現在形で、習慣的に行われる動作を表します。<br>▶ 彼女は/テニスをします/毎日",
  youtube: "https://www.youtube.com/embed/=XXXX"
},
{
sentence: "I <span class='highlight'>have been</span> to Canada twice. ",
  choices: ["行ったことがある", "行った", "行く予定だ", "行っている"],
  correct: 0,
  explanation: "▶「have been to Canada」は現在完了形で、経験を表しています。「twice」は2度という意味です。▶ 私は/行ったことがある/カナダへ/2度"
},
{
  sentence: "She <span class='highlight'>played tennis</span> yesterday.",
  choices: ["テニスをする", "テニスをしている", "テニスをした", "テニスをする予定だ"],
  correct: 2,
  explanation: "▶「played」 は過去形で、過去の出来事を表します。▶ 彼女は/テニスをしました/昨日"
},
{
  sentence: "She <span class='highlight'>is playing tennis</span> now.",
  choices: ["テニスをした", "テニスをしている", "テニスをする", "テニスをする予定だ"],
  correct: 1,
  explanation: "▶「is playing」は現在進行形で、今、行われている動作の継続を表します。▶ 彼女は/テニスをしています/今"
},
{
  sentence: "She <span class='highlight'>was playing tennis</span> then.",
  choices: ["テニスをしている", "テニスをした", "テニスをしていた", "テニスをする予定だ"],
  correct: 2,
  explanation: "▶「was playing」は過去進行形で、過去のある時点での動作の継続を表します。▶ 彼女は/テニスをしていました/そのとき"
},
{
sentence: "I <span class='highlight'>have</span> already <span class='highlight'>done</span> my homework.",
  choices: ["やるつもり", "やっている", "やる予定だ", "やってしまった"],
  correct: 3,
  explanation: "▶ 私は/すでにやってしまった/私の宿題を。▶「have done」は現在完了形で、完了を表しています。「done」は「do」の過去分詞です。"
},
{
  sentence: "I <span class='highlight'>will play tennis</span> tomorrow.",
  choices: ["テニスをした", "テニスをしている", "テニスをするつもりだ", "テニスをしていた"],
  correct: 2,
  explanation: "▶「will play」は未来を表し、「～するつもりだ」「～するだろう」という意味になります。▶ 私は/テニスをするつもりです/明日"
},
{
  sentence: "We <span class='highlight'>have been</span> friends since we were children.",
  choices: ["ずっと友達だ", "友達だった", "友達になる予定だ", "友達になりつつある"],
  correct: 0,
  explanation: "▶「has played」は現在完了形で、過去から現在まで続いている状態や経験を表します。▶ 私達は/ずっと友達だ/子供のころから"
},
{
  sentence: "She <span class='highlight'>is going to play tennis</span> next week.",
  choices: ["テニスをした", "テニスをする予定だ", "テニスをしている", "テニスをしていた"],
  correct: 1,
  explanation: "▶「is going to play」 は、be going to 動詞の原形の形で、すでに決まっている未来の予定を表します。▶ 彼女は/テニスをする予定です/来週"
},
{
  sentence: "She <span class='highlight'>has played tennis</span> for ten years.",
  choices: ["テニスをした", "テニスをしていた", "テニスをしている", "テニスをする予定だ"],
  correct: 2,
  explanation: "▶「has played」は現在完了形で、過去から現在まで続いている状態や経験を表します。▶ 彼女は/ずっとテニスをしている/10年間"
},
{
  sentence: "They <span class='highlight'>have been playing tennis</span> for two hours.",
  choices: ["テニスをした", "テニスをする", "テニスをずっとし続けている", "テニスをする予定だ"],
  correct: 2,
  explanation: "▶「have been playing」は現在完了進行形で、動作が過去から現在まで継続していることを表します。▶ 彼らは/ずっとテニスをしています/2時間"
}
    ]
  },


pronoun01: {
    title: "📘 代名詞01",
    questions: [
{
  sentence: "Jim showed <span class='highlight'>me</span> his pictures.",
  choices: ["私に", "私は", "私の", "私を"],
  correct: 0,
  explanation: "▶ ジムは/見せた/私に/彼の写真を<br>▶SVOO第4文型で、Sが人にものをVする、という意味になります。「me」は1人称単数・目的格の人称代名詞で、「私に」という意味で使われています。",
  youtube: "https://www.youtube.com/embed/=XXXX"
},
{
  sentence: "This classroom is <span class='highlight'>ours</span>.",
  choices: ["私たちの", "私たちのもの", "私たちは", "私たちに"],
  correct: 1,
  explanation: "▶ その教室＝私たちのもの<br>▶「ours」は1人称複数・所有代名詞で、「私たちのもの」という意味で使われています。"
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
  explanation: "▶ それは／とても／大きい<br>▶「It」 は3人称単数・主格の人称代名詞で、「それは」という意味で使われています。"
},
{
  sentence: "We asked <span class='highlight'>our</span> teacher some questions.",
  choices: ["私たちに", "私たちの", "私たちは", "私たちを"],
  correct: 1,
  explanation: "▶ 私たちは／たずねた／私たちの先生に／いくつかの質問を<br>▶「our」 は1人称複数・所有格の人称代名詞で、「私たちの」という意味で使われています。"
},
{
  sentence: "The red bag is ours, not <span class='highlight'>theirs</span>.",
  choices: ["彼らに", "彼のもの", "彼女を", "彼らのもの"],
  correct: 3,
  explanation: "▶ その赤いかばんは／私たちのものです／彼らのものではありません<br>▶「theirs」 は3人称複数・所有代名詞で、「彼らのもの」という意味で使われています。"
},
{
  sentence: "The blue notebook is <span class='highlight'>mine</span>, not yours.",
  choices: ["私のもの", "私の", "私は", "私に"],
  correct: 0,
  explanation: "▶ その青いノート＝私のもの、あなたのものではない<br>▶「mine」は1人称単数・所有代名詞で、「私のもの」という意味で使われています。"
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

pronoun02: {
    title: "📘 代名詞02",
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
}


 ]
  },

modal: {
    title: "📘 助動詞",
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
  sentence: "Keiko <span class='highlight'>has to make</span> breakfast for her family.",
  choices: ["作れる", "作るべきだ", "作らなければならない", "作るかもしれない"],
  correct: 2,
  explanation: "▶ ケイコは／作らなければならない／朝食を<br>▶「has to」は「have to」と同じ意味ですが、三人称単数の主語のときに用います。"
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
  explanation: "▶ いかがですか／コーヒーは<br>▶「Would you like ～?」は勧める表現です。"
},
{
  sentence: "I<span class='highlight'>'d like to ask</span> you some questions.",
  choices: ["聞かなければならない", "聞くことができる", "聞きたい", "聞くべきだ"],
  correct: 2,
  explanation: "▶ 私は／聞きたい／あなたに／いくつかの質問を<br>▶「I'd like to ～」は「～したい」という丁寧な希望表現です。"
}
 ]
  },

question: {
    title: "📘 疑問詞",
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

  pre01: {
    title: "📘 前置詞01",
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
  explanation: "▶ 本は／あります／ベッドの下に<br>▶「on」は「～の下に」という意味です。"
},

{
  sentence: "A bridge is <span class='highlight'>over the river</span>.",
  choices: ["川の横に", "川の下に", "川の上に", "川の中に"],
  correct: 2,
  explanation: "▶ 橋は／あります／川の上に<br>▶「over」は「～の上に（覆うように）」という意味です。"
},
{
  sentence: "We talked <span class='highlight'>about music</span>.",
  choices: ["音楽と", "音楽について", "音楽から", "音楽まで"],
  correct: 1,
  explanation: "▶ 私たちは／話しました／音楽について<br>▶「about」は「～について」という意味です。"
}
 ]
  },

  conjunction: {
    title: "📘 接続詞",
    questions: [

{
  sentence: "<span class='highlight'>If</span> it is sunny, we will play soccer.",
  choices: ["もし～なら", "～だけれども", "～するとき", "そして"],
  correct: 0,
  explanation: "▶ もし晴れるなら／私たちはサッカーをします<br>▶「if」は条件を表し、「もし～なら」という意味です。条件節は未来のことでも現在形で表現します。"
},
{
  sentence: "<span class='highlight'>Though</span> he is young, he is very strong.",
  choices: ["もし～なら", "～だけれども", "～するとき", "だから"],
  correct: 1,
  explanation: "▶ 彼は若いけれども／とても強い<br>▶「though」は逆接を表し、「～だけれども」という意味です。"
},
{
  sentence: "I like math, <span class='highlight'>but</span> I don’t like science.",
  choices: ["そして", "だから", "しかし", "もし～なら"],
  correct: 2,
  explanation: "▶ 私は数学が好きです／しかし／理科は好きではありません<br>▶「but」は逆接で「しかし」という意味です。"
},
{
  sentence: "I know <span class='highlight'>that</span> she is kind.",
  choices: ["～するとき", "～ということ", "もし～なら", "だから"],
  correct: 1,
  explanation: "▶ 私は知っています／彼女が親切だということを<br>▶「that」は名詞節を導き、「～ということ」という意味になります。"
},
{
  sentence: "I play soccer <span class='highlight'>and</span> tennis.",
  choices: ["または", "しかし", "そして", "だから"],
  correct: 2,
  explanation: "▶ 私は／します／サッカーとテニスを<br>▶「and」は「そして」という意味で語と語を結びます。"
},
{
  sentence: "Do you want tea <span class='highlight'>or</span> juice?",
  choices: ["そして", "または", "しかし", "だから"],
  correct: 1,
  explanation: "▶ あなたは／望んでいますか／お茶を／それともジュースを<br>▶「or」は選択を表し、「または」という意味です。"
},
{
  sentence: "He was <span class='highlight'>so</span> tired <span class='highlight'>that</span> he went to bed early.",
  choices: ["とても～なので…", "もし～なら", "～だけれども", "～するとき"],
  correct: 0,
  explanation: "▶ 彼は／とても疲れていたので／早く寝ました<br>▶「so ～ that …」は「とても～なので…」という結果を表します。"
},
{
  sentence: "<span class='highlight'>Both</span> Tom <span class='highlight'>and</span> Ken like music.",
  choices: ["どちらか一方", "両方とも", "どちらも～ない", "しかし"],
  correct: 1,
  explanation: "▶ トムとケンの両方とも／音楽が好きです<br>▶「both A and B」は「AもBも両方」という意味です。"
},
{
  sentence: "You can choose <span class='highlight'>either</span> this book <span class='highlight'>or</span> that one.",
  choices: ["両方とも", "どちらも～ない", "どちらか一方", "そして"],
  correct: 2,
  explanation: "▶ あなたは／選ぶことができる／どちらか一方を／この本かあの本の<br>▶「either A or B」は「AかBのどちらか」という意味です。"
},
{
  sentence: "<span class='highlight'>Neither</span> my father <span class='highlight'>nor</span> my mother is at home.",
  choices: ["だから", "両方とも～である", "どちらか一方", "どちらも～ない"],
  correct: 3,
  explanation: "▶ 父も母も／いません／家に<br>▶「neither A nor B」は「AもBも～ない」という意味です。"
},
{
  sentence: "She can speak <span class='highlight'>not only</span> English <span class='highlight'>but also</span> French.",
  choices: ["どちらも～ない", "どちらか一方", "AだけでなくBも", "しかし"],
  correct: 2,
  explanation: "▶ 彼女は／話すことができる／英語だけでなくフランス語も<br>▶「not only A but also B」は「AだけでなくBも」という意味です。"
},
{
  sentence: "Study hard, <span class='highlight'>and</span> you will pass the test.",
  choices: ["さもないと", "そうすれば", "しかし", "もし～なら"],
  correct: 1,
  explanation: "▶ 一生懸命勉強しなさい、そうすれば試験に合格します<br>▶ 命令文＋and は「～しなさい、そうすれば…」という意味です。"
},
{
  sentence: "Hurry up, <span class='highlight'>or</span> you will miss the bus.",
  choices: ["そして", "しかし", "だから", "さもないと"],
  correct: 3,
  explanation: "▶ 急ぎなさい、さもないとバスに乗り遅れます<br>▶ 命令文＋or は「～しなさい、さもないと…」という意味です。"
},
{
  sentence: "I stayed home <span class='highlight'>because</span> I was sick.",
  choices: ["～する前に", "なぜなら～だから", "～だけれども", "その間に"],
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
  choices: ["～した後で", "なぜなら～だから", "～する前に", "～だけれども"],
  correct: 2,
  explanation: "▶ 歯をみがきなさい／寝る前に<br>▶「before」は「～する前に」という意味です。"
},
{
  sentence: "I did my homework <span class='highlight'>after</span> I got home.",
  choices: ["～する前に", "～した後で", "だから", "その間に"],
  correct: 1,
  explanation: "▶ 私はやった／宿題を／家に帰った後で<br>▶「after」は「～した後で」という意味です。"
},
{
  sentence: "I have lived here <span class='highlight'>since</span> I was five.",
  choices: ["～の間に", "～だけれども", "だから", "～以来ずっと"],
  correct: 3,
  explanation: "▶ 私は／ずっと住んでいます／ここに／私が5歳のときから<br>▶「since」は「～以来ずっと」という意味で使われます。"
},
{
  sentence: "My mother was cooking <span class='highlight'>while</span> I was studying.",
  choices: ["～する間に", "～する前に", "なぜなら～だから", "だから"],
  correct: 0,
  explanation: "▶ 母は／料理をしていました／私が勉強している間に<br>▶「while」は「～している間に」という意味です。"
},
{
  sentence: "<span class='highlight'>Although</span> it was raining, we played soccer.",
  choices: ["なぜなら～だから", "だから", "～の間に", "～だけれども"],
  correct: 3,
  explanation: "▶ 雨が降っていたけれども／私たちはサッカーをしました<br>▶「although」は逆接を表し、「～だけれども」という意味です。"
}
 ]
  },
conjunction: {
    title: "📘 接続詞",
    questions: [

{
  sentence: "<span class='highlight'>If</span> it is sunny, we will play soccer.",
  choices: ["もし～なら", "～だけれども", "～するとき", "そして"],
  correct: 0,
  explanation: "▶ もし晴れるなら／私たちはサッカーをします<br>▶「if」は条件を表し、「もし～なら」という意味です。条件節は未来のことでも現在形で表現します。"
},
{
  sentence: "<span class='highlight'>Though</span> he is young, he is very strong.",
  choices: ["もし～なら", "～だけれども", "～するとき", "だから"],
  correct: 1,
  explanation: "▶ 彼は若いけれども／とても強い<br>▶「though」は逆接を表し、「～だけれども」という意味です。"
},
{
  sentence: "I like math, <span class='highlight'>but</span> I don’t like science.",
  choices: ["そして", "だから", "しかし", "もし～なら"],
  correct: 2,
  explanation: "▶ 私は数学が好きです／しかし／理科は好きではありません<br>▶「but」は逆接で「しかし」という意味です。"
},
{
  sentence: "I know <span class='highlight'>that</span> she is kind.",
  choices: ["～するとき", "～ということ", "もし～なら", "だから"],
  correct: 1,
  explanation: "▶ 私は知っています／彼女が親切だということを<br>▶「that」は名詞節を導き、「～ということ」という意味になります。"
},
{
  sentence: "I play soccer <span class='highlight'>and</span> tennis.",
  choices: ["または", "しかし", "そして", "だから"],
  correct: 2,
  explanation: "▶ 私は／します／サッカーとテニスを<br>▶「and」は「そして」という意味で語と語を結びます。"
},
{
  sentence: "Do you want tea <span class='highlight'>or</span> juice?",
  choices: ["そして", "または", "しかし", "だから"],
  correct: 1,
  explanation: "▶ あなたは／望んでいますか／お茶を／それともジュースを<br>▶「or」は選択を表し、「または」という意味です。"
},
{
  sentence: "He was <span class='highlight'>so</span> tired <span class='highlight'>that</span> he went to bed early.",
  choices: ["とても～なので…", "もし～なら", "～だけれども", "～するとき"],
  correct: 0,
  explanation: "▶ 彼は／とても疲れていたので／早く寝ました<br>▶「so ～ that …」は「とても～なので…」という結果を表します。"
},
{
  sentence: "<span class='highlight'>Both</span> Tom <span class='highlight'>and</span> Ken like music.",
  choices: ["どちらか一方", "両方とも", "どちらも～ない", "しかし"],
  correct: 1,
  explanation: "▶ トムとケンの両方とも／音楽が好きです<br>▶「both A and B」は「AもBも両方」という意味です。"
},
{
  sentence: "You can choose <span class='highlight'>either</span> this book <span class='highlight'>or</span> that one.",
  choices: ["両方とも", "どちらも～ない", "どちらか一方", "そして"],
  correct: 2,
  explanation: "▶ あなたは／選ぶことができる／どちらか一方を／この本かあの本の<br>▶「either A or B」は「AかBのどちらか」という意味です。"
},
{
  sentence: "<span class='highlight'>Neither</span> my father <span class='highlight'>nor</span> my mother is at home.",
  choices: ["だから", "両方とも～である", "どちらか一方", "どちらも～ない"],
  correct: 3,
  explanation: "▶ 父も母も／いません／家に<br>▶「neither A nor B」は「AもBも～ない」という意味です。"
},
{
  sentence: "She can speak <span class='highlight'>not only</span> English <span class='highlight'>but also</span> French.",
  choices: ["どちらも～ない", "どちらか一方", "AだけでなくBも", "しかし"],
  correct: 2,
  explanation: "▶ 彼女は／話すことができる／英語だけでなくフランス語も<br>▶「not only A but also B」は「AだけでなくBも」という意味です。"
},
{
  sentence: "Study hard, <span class='highlight'>and</span> you will pass the test.",
  choices: ["さもないと", "そうすれば", "しかし", "もし～なら"],
  correct: 1,
  explanation: "▶ 一生懸命勉強しなさい、そうすれば試験に合格します<br>▶ 命令文＋and は「～しなさい、そうすれば…」という意味です。"
},
{
  sentence: "Hurry up, <span class='highlight'>or</span> you will miss the bus.",
  choices: ["そして", "しかし", "だから", "さもないと"],
  correct: 3,
  explanation: "▶ 急ぎなさい、さもないとバスに乗り遅れます<br>▶ 命令文＋or は「～しなさい、さもないと…」という意味です。"
},
{
  sentence: "I stayed home <span class='highlight'>because</span> I was sick.",
  choices: ["～する前に", "なぜなら～だから", "～だけれども", "その間に"],
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
  choices: ["～した後で", "なぜなら～だから", "～する前に", "～だけれども"],
  correct: 2,
  explanation: "▶ 歯をみがきなさい／寝る前に<br>▶「before」は「～する前に」という意味です。"
},
{
  sentence: "I did my homework <span class='highlight'>after</span> I got home.",
  choices: ["～する前に", "～した後で", "だから", "その間に"],
  correct: 1,
  explanation: "▶ 私はやった／宿題を／家に帰った後で<br>▶「after」は「～した後で」という意味です。"
},
{
  sentence: "I have lived here <span class='highlight'>since</span> I was five.",
  choices: ["～の間に", "～だけれども", "だから", "～以来ずっと"],
  correct: 3,
  explanation: "▶ 私は／ずっと住んでいます／ここに／私が5歳のときから<br>▶「since」は「～以来ずっと」という意味で使われます。"
},
{
  sentence: "My mother was cooking <span class='highlight'>while</span> I was studying.",
  choices: ["～する間に", "～する前に", "なぜなら～だから", "だから"],
  correct: 0,
  explanation: "▶ 母は／料理をしていました／私が勉強している間に<br>▶「while」は「～している間に」という意味です。"
},
{
  sentence: "<span class='highlight'>Although</span> it was raining, we played soccer.",
  choices: ["なぜなら～だから", "だから", "～の間に", "～だけれども"],
  correct: 3,
  explanation: "▶ 雨が降っていたけれども／私たちはサッカーをしました<br>▶「although」は逆接を表し、「～だけれども」という意味です。"
}
 ]
  },

   infinitive01: {
    title: "📘 不定詞01",
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

  infinitive02: {
    title: "📘 不定詞02",
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
  sentence: "I have one thing <span class='highlight'>to say about it</span>.",
  choices: ["それについて言うために", "それについて言って", "それについて言うことを", "それについて言うべき"],
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
}
 ]
  },
}



/*********************************************************
 * state（アプリ全体の状態）
 *********************************************************/

const state = {
  // 現在表示している画面
  // modeSelect | studyMenu | studyQuestion | studyResult
  // chainMenu | chainQuestion | chainResult
  screen: "modeSelect",

  // ===== 学習モード =====
  study: {
    categoryKey: null,        // 現在の単元
    questions: [],            // 出題問題配列
    index: 0,                 // 現在の問題番号
    answers: [],              // 各問題の選択結果
    correctCount: 0,          // 正解数
    viewingPrevious: false    // 前の問題を見ているか
  },

  // ===== 連チャンモード =====
  chain: {
    questions: [],
    index: 0,
    correctStreak: 0,
    finished: false,
    viewingPrevious: false
  },

  // ===== 永続データ =====
  progress: {
    // tense: { correct: 5, total: 5, star: true }
  },

   stars: JSON.parse(localStorage.getItem("stars") || "{}"),

  studyResults: {},

  maxChain: 0
};

// ★ ここ追加
state.maxChain = Number(localStorage.getItem("maxChain") || 0);

function playSound(type) {
  const sounds = {
    correct: "sounds/correct.mp3",
    wrong: "sounds/wrong.mp3",
    finish: "sounds/finish.mp3",
    next: "sounds/next.mp3",
    record: "sounds/record.mp3",
    tryagain: "sounds/tryagain.mp3"
  };

  const src = sounds[type];
  if (!src) return;

  const audio = new Audio(src);
  audio.currentTime = 0;
  audio.play().catch(() => {
    // 自動再生制限対策（無音でもOK）
  });
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
      image: "images/cm02.png",
      sound: "finish"
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


/*********************************************************
 * 初期化
 *********************************************************/

load();

// ==========================
// state 定義
// ==========================

function getTotalStars() {
  return Object.values(state.stars).reduce((a, b) => a + b, 0);
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
 * render（画面切替の司令塔）
 *********************************************************/

function render() {

   console.log("render called", state.mode);

  const app = document.getElementById("app");
  app.innerHTML = "";

  switch (state.screen) {
    case "modeSelect":
      renderModeSelect(app);
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

function goChainMenu() {
  state.screen = "chainMenu";
  render();
}

function startChainMode() {

  
  let allQuestions = [];

  Object.values(categories).forEach(cat => {
    if (cat.questions && Array.isArray(cat.questions)) {
      allQuestions = allQuestions.concat(cat.questions);
    }
  });

  state.chain.questions = shuffleArray(allQuestions);
  state.chain.showFeedback = false;

  state.chain.index = 0;
  state.chain.correctStreak = 0;
  state.chain.maxStreak = 0;
  state.chain.finished = false;
  state.chain.answered = false;

  state.chain.milestone = null;


  state.chain.startMaxChain = state.maxChain;
state.chain.newRecord = false;

  state.screen = "chainQuestion";
  render();
}

/*********************************************************
 * 各画面の仮render
 * （次のステップで中身を本実装）
 *********************************************************/

function renderModeSelect(root) {
  const totalStars = getTotalStars();
  const maxChain = state.maxChain;

  console.log("stars at mode select:", state.stars);

  console.log("stars state:", state.stars);
  console.log("totalStars:", totalStars);

  root.innerHTML = `


  <div class="mode-hero">
      <img src="images/4cats.png" class="mode-cat">
    </div>

    <h1 class="logo">よんたくん
    <span>-連チャン中学英文法-</span></h1>

     


    <div class="mode-card">
      <button id="studyBtn" class="mode-btn">
        📘 じっくり学習モード
       <div>
         ${totalStars > 0 ? `<span class="star-count">⭐ ${totalStars}</span>` : ""}
        </div>
      </button>
    </div>

    <div class="mode-card">
      <button id="chainBtn" class="mode-btn">
        🔥 連チャンモード
        <div class="mode-sub">
          最高 ${maxChain} 連チャン
        </div>
        
      </button>

      <p class="version">ver 1.0</p>
    </div>
  `;

  document.getElementById("studyBtn").onclick = goStudyMenu;
  document.getElementById("chainBtn").onclick = goChainMenu;


  const resetBtn = document.getElementById("resetChain");

let pressTimer = null;



}

function renderStudyMenu(root) {
  root.innerHTML = `
    <h2>📘 じっくり学習モード</h2>


     <div class="mode-study">
      <img src="images/cw01.png" class="mode-cat">
    </div>

    <div class="note">獲得した⭐は右クリック、または長押しで解除できます</div>

    <div class="category-list">
      ${Object.keys(categories).map(key => {
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

    
    <div class="bottom-nav">
    <button id="modeBtn" class="mode-btn">◀モード選択へ</button>
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



function renderStudyQuestion() {


  const root = document.getElementById("app");
  const study = state.study;
  const q = study.questions[study.index];
  const answered = study.answers[study.index];

  root.innerHTML = `

  <h2>📘 じっくり学習モード</h2>

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
        <button id="menuBtn" class="nav-menu">メニュー</button>
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
      if (isCorrect) study.correctCount++;

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

  if (correct === total && !alreadyHadStar) {
    state.stars[study.categoryKey] = 1;
    localStorage.setItem("stars", JSON.stringify(state.stars));
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

    <button id="reviewBtn">最後の問題を見る</button>
    <button id="menuBtn">📘 学習メニューへ</button>
    <button id="modeBtn">モード選択へ</button>
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
  document.getElementById("modeBtn").onclick = goModeSelect;
}

function renderChainMenu(root) {
  root.innerHTML = `
    <h2>🔥 連チャンモード</h2>

    <div class="mode-study">
      <img src="images/cw01.png" class="mode-cat">
    </div>

    <p align=center>🏆 BEST：${state.maxChain}連チャン！</p>

    <div class="reset-link" id="resetChain">
    ⚠ 長押しで記録リセット
  </div>

    <button id="startBtn">🔥 GAME START</button>
    
     <div class="bottom-nav">
    <button id="backBtn" class="mode-btn">◀モード選択へ</button>
    </div>
  `;

  document.getElementById("startBtn").onclick = startChainMode;
  document.getElementById("backBtn").onclick = goModeSelect;

  setupChainReset(); // ← 後で作る
}

function setupChainReset() {

  const resetBtn = document.getElementById("resetChain");
  let pressTimer = null;

  const startPress = () => {
    pressTimer = setTimeout(() => {

      if (!confirm("🔥 最高記録をリセットしますか？")) return;

      state.maxChain = 0;
      localStorage.setItem("maxChain", 0);
      render();

    }, 800);
  };

  const cancelPress = () => clearTimeout(pressTimer);

  resetBtn.addEventListener("mousedown", startPress);
  resetBtn.addEventListener("mouseup", cancelPress);
  resetBtn.addEventListener("mouseleave", cancelPress);

  resetBtn.addEventListener("touchstart", startPress);
  resetBtn.addEventListener("touchend", cancelPress);
  resetBtn.addEventListener("touchmove", cancelPress);
}


function renderChainQuestion(root) {

  const chain = state.chain;
  const q = chain.questions[chain.index];
  const answered = chain.answered;

  root.innerHTML = `
   <h2>🔥 連チャンモード</h2>

    <div class="question-area">
      <div class="question">${q.sentence}</div> 
      
      <div class="choices">
        ${q.choices.map((c, i) =>
          `<button class="choice" data-index="${i}">${c}</button>`
        ).join("")}
      </div>

        ${chain.showFeedback ? `
       <div class="feedback-correct">✅ 正解！</div>
     ` : ""}

 ${answered && !answered.isCorrect ? `
  <div class="result-area">
    <p class="wrong-text">不正解</p>
  <div id="explanation" class="chain-explanation">
    <p>${q.explanation || ""}</p>
  </div>
` : ""}
      <div align=right>🔥 連続正解: ${chain.answered && !chain.answered.isCorrect
    ? chain.lastStreak
    : chain.correctStreak}</div>
      <div align=right>🏆 最高記録: ${state.maxChain}</div>
    </div>
      
    <div class="bottom-nav chain-nav">
      <button id="menuBtn">記録確定せず<br>モード選択へ</button>
      <button id="endBtn">記録確定して終了</button>
    </div>

    ${chain.milestone ? `
    <div class="milestone-popup">
      🎉 ${chain.milestone} 連チャン！
    </div>
  ` : ""}

  ${chain.newRecord ? `
    <div class="record-popup">
      🔥 新記録更新！
    </div>` : ""}
  `;

  // ===== 選択 =====
  document.querySelectorAll(".choice").forEach(btn => {
    btn.onclick = () => {
      if (chain.answered) return;

      const selected = Number(btn.dataset.index);
      const isCorrect = selected === q.correct;

      

      if (isCorrect) {

  chain.answered = { selected, isCorrect: true };
  chain.correctStreak++;

  chain.maxStreak = Math.max(chain.maxStreak, chain.correctStreak);

  const isNewRecord = (chain.correctStreak === chain.startMaxChain + 1);
  const isMilestone = (chain.correctStreak % 10 === 0);

  // ===== ① 正解 =====
  chain.showFeedback = true;
  playSound("correct");
  render();

  setTimeout(() => {

    chain.showFeedback = false;

    // ===== ② 新記録 =====
    if (isNewRecord) {
      chain.newRecord = true;
      playSound("record");
      render();
    }

    setTimeout(() => {

      chain.newRecord = false;

      // ===== ③ 10連 =====
      if (isMilestone) {
        chain.milestone = chain.correctStreak;
        playSound("record");
        render();
      }

      setTimeout(() => {

        chain.milestone = null;
        goNext();

      }, 900);

    }, isNewRecord ? 600 : 0);

  }, 400);
} else {

  chain.lastStreak = chain.correctStreak;  // ← 追加

  chain.answered = { selected, isCorrect: false };

  playSound("wrong");

  chain.correctStreak = 0;

  render();
}
    };
  });
  // ===== メニュー =====
  document.getElementById("menuBtn").onclick = () => {
  if (!confirm("連チャンを中断しますか？")) return;
  goModeSelect();
};

// ===== 終了 =====
document.getElementById("endBtn").onclick = () => {
  finishChain();
};

}

function goNext() {

   const chain = state.chain;  // ← これ必須

  chain.index++;

  if (chain.index >= chain.questions.length) {
    finishChain();
    return;
  }

  chain.answered = false;
  render();
}

function finishChain() {
  const chain = state.chain;

  let isNewRecord = false;

  if (chain.maxStreak > state.maxChain) {
    state.maxChain = chain.maxStreak;
    localStorage.setItem("maxChain", state.maxChain);
    isNewRecord = true;
  }
  
  if (isNewRecord) {
  playSound("record");
  }

  // 🔥 プレイ終了時に最高記録更新
  if (chain.maxStreak > state.maxChain) {
    state.maxChain = chain.maxStreak;
    localStorage.setItem("maxChain", state.maxChain);
  }

  state.chain.isNewRecord = isNewRecord;

  state.screen = "chainResult";
  render();
}

function renderChainResult(root) {
  const chain = state.chain;

  root.innerHTML = `
    <h2>🔥 連チャン結果</h2>

    <div class="cat-jump">
      <img src="images/cw02.png" class="mode-cat">
    </div>

    <div class="chain-score">
      ${chain.maxStreak} 連チャン
    </div>


     ${chain.isNewRecord ? `
    <div class="new-record">
      🔥 NEW RECORD！🎉
    </div>
  ` : ""}

    <div class="chain-best">
      最高記録：${state.maxChain}
    </div>

    <button id="chainBtn">メニューへ</button>
    
    <button id="modeBtn">モード選択へ</button>
  `;

  document.getElementById("chainBtn").onclick = goChainMenu;
  
  document.getElementById("modeBtn").onclick = goModeSelect;
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



/*********************************************************
 * 初回描画
 *********************************************************/

render();

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("./service-worker.js")
    .then(() => console.log("SW registered"))
    .catch(err => console.error("SW failed", err));

}






