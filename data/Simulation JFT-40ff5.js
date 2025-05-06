// test 
// 50 soal
// s1 15 bb 1  ba 15
// s2 15 bb 16 ba 30
// s3 10 bb 31 ba 40
// s4 10 bb 41 ba 50
// 50
const SimulationJFT4Questions = [{
        id: 1,
        section: 1,
        text: "これは何ですか。 ",
        answers: [
            { id: 0, text: "やさい" },
            { id: 1, text: "さいふ" },
            { id: 2, text: "ひきだし" },
            { id: 3, text: "ふとう" },
        ],
        keyid: 1,
        image: "Simulation JFT-4/1.png",
        sound: ""
    },
    {
        id: 2,
        section: 1,
        text: "これは何ですか。 ",
        answers: [
            { id: 0, text: "てんいん" },
            { id: 1, text: "いしゃ" },
            { id: 2, text: "こうはい" },
            { id: 3, text: "せんぱい" },
        ],
        keyid: 1,
        image: "Simulation JFT-4/2.png",
        sound: ""
    },
    {
        id: 3,
        section: 1,
        text: "これは何ですか。 ",
        answers: [
            { id: 0, text: "おちゃ" },
            { id: 1, text: "コーヒー" },
            { id: 2, text: "みず" },
            { id: 3, text: "ぎゅうにゅう" },
        ],
        keyid: 0,
        image: "Simulation JFT-4/3.png",
        sound: ""
    },
    {
        id: 4,
        section: 1,
        text: "これは何ですか。 ",
        answers: [
            { id: 0, text: "けっこん" },
            { id: 1, text: "りこん" },
            { id: 2, text: "みこん" },
            { id: 3, text: "だいこん" },
        ],
        keyid: 0,
        image: "Simulation JFT-4/4.png",
        sound: ""
    },
    {
        // l1 3
        id: 5,
        section: 1,
        text: "けさ　ともだちの　いえへ＿＿＿＿ ",
        answers: [
            { id: 0, text: "あそびました" },
            { id: 1, text: "のみました" },
            { id: 2, text: "いきました" },
            { id: 3, text: "およぎました" },
        ],
        keyid: 2,
        image: "",
        sound: ""
    },
    {
        // l2 2 ganti
        id: 6,
        section: 1,
        text: `

        A：パンは＿＿＿＿をつけると　おいしいですよ</br>
        <hr>
        ＿＿＿に入るものは何ですか。

        `,
        answers: [
            { id: 0, text: "アレルギー" },
            { id: 1, text: "バター" },
            { id: 2, text: "ハラル" },
            { id: 3, text: "バーベキュー" },
        ],
        keyid: 1,
        image: "",
        sound: ""
    },
    {
        // l2 6
        id: 7,
        section: 1,
        text: "ロシアで 2ねんかん すんでいるので、ロシアごが＿＿＿＿。 ",
        answers: [
            { id: 0, text: "いえます" },
            { id: 1, text: "わかります" },
            { id: 2, text: "みます" },
            { id: 3, text: "ききます" },
        ],
        keyid: 1,
        image: "",
        sound: ""
    },
    {
        // l4 4
        id: 8,
        section: 1,
        text: "毎日　べんきょうしたので、＿＿＿＿。",
        answers: [
            { id: 0, text: "しっぱい　でしょう" },
            { id: 1, text: "たりないでしょう" },
            { id: 2, text: "大丈夫じゃないでしょう" },
            { id: 3, text: "ごうかくできる　でしょう" },
        ],
        keyid: 3,
        image: "",
        sound: ""
    },
    {
        // l4
        id: 9,
        section: 1,
        text: "きのうの　雨はすごかったですね。</br>雨=.... ",
        answers: [
            { id: 0, text: "ゆき" },
            { id: 1, text: "あめ" },
            { id: 2, text: "かみなり" },
            { id: 3, text: "くも" },
        ],
        keyid: 1,
        image: "",
        sound: ""
    },
    {
        // l2
        id: 10,
        section: 1,
        text: "ゲームのために、高いヘッドセットを買いました。</br>高い=.... ",
        answers: [
            { id: 0, text: "たかい" },
            { id: 1, text: "やすい" },
            { id: 2, text: "ながい" },
            { id: 3, text: "みじかい" },
        ],
        keyid: 0,
        image: "",
        sound: ""
    },
    {
        // l7
        id: 11,
        section: 1,
        text: "冬はとてもさむいです。</br>冬=...  ",
        answers: [
            { id: 0, text: "ふゆ" },
            { id: 1, text: "なつ" },
            { id: 2, text: "あき" },
            { id: 3, text: "はる" },
        ],
        keyid: 0,
        image: "",
        sound: ""
    },
    {
        // l7
        id: 12,
        section: 1,
        text: "ボランチアに　毎月 さんかしました</br>毎月=  ",
        answers: [
            { id: 0, text: "まいつき" },
            { id: 1, text: "うみかい" },
            { id: 2, text: "まいかい" },
            { id: 3, text: "うみつき" },
        ],
        keyid: 0,
        image: "",
        sound: ""
    },
    {
        // l7
        id: 13,
        section: 1,
        text: "りゅうがく　したいなら、にほんごを　べんきょうしなさい</u></br>日本語=...  ",
        answers: [
            { id: 0, text: "にほんご" },
            { id: 1, text: "にっぽんご" },
            { id: 2, text: "にぽんご" },
            { id: 3, text: "にほんこ" },
        ],
        keyid: 0,
        image: "",
        sound: ""
    },
    {
        // l11　<u></u>
        id: 14,
        section: 1,
        text: "日本で　はなび　を　みたいです。</br>はなび=...   ",
        answers: [
            { id: 0, text: "花見" },
            { id: 1, text: "火山" },
            { id: 2, text: "花火" },
            { id: 3, text: "火見" },
        ],
        keyid: 2,
        image: "",
        sound: ""
    },
    {
        // l13　<u></u>
        id: 15,
        section: 1,
        text: "げんき　を　けしてください。</br>でんき=...  ",
        answers: [
            { id: 0, text: "雲気" },
            { id: 1, text: "天気" },
            { id: 2, text: "雷気" },
            { id: 3, text: "電気" },
        ],
        keyid: 3,
        image: "",
        sound: ""
    },
    {
        // l13
        id: 16,
        section: 2,
        text: `
        A：らいねん（　　）ロシアに　りょこう　したい。</br>
        <hr>
        ＿＿＿に入るものは何ですか。
        `,
        answers: [
            { id: 0, text: "あまり" },
            { id: 1, text: "ぜんぜん" },
            { id: 2, text: "ほかに" },
            { id: 3, text: "ぜひ" },
        ],
        keyid: 3,
        image: "",
        sound: ""
    },
    {
        // 11 
        id: 17,
        section: 2,
        text: `
        あした　やすみ　を　（　　）ですが。    </br>
        <hr>
        ＿＿＿に入るものは何ですか。
        `,
        answers: [
            { id: 0, text: "とりたい" },
            { id: 1, text: "なくしたい" },
            { id: 2, text: "かりたい" },
            { id: 3, text: "はいりたい" },
        ],
        keyid: 0,
        image: "",
        sound: ""
    },
    {
        // l11  
        id: 18,
        section: 2,
        text: `
        
        きょうは　たまご＿すしを　たべました。
        <hr>
        ＿に入るものは何ですか。

        `,
        answers: [
            { id: 0, text: "が" },
            { id: 1, text: "も" },
            { id: 2, text: "と" },
            { id: 3, text: "の" },
        ],
        keyid: 2,
        image: "",
        sound: ""
    },
    {
        // l16
        id: 19,
        section: 2,
        text: `
        からい物を　たべ（＿＿＿）ので、おなかが　いたいです。
        `,
        answers: [
            { id: 0, text: "すぎた" },
            { id: 1, text: "た" },
            { id: 2, text: "なかった" },
            { id: 3, text: "ながら" },
        ],
        keyid: 0,
        image: "",
        sound: ""
    },
    {
        // l13
        id: 20,
        section: 2,
        text: "りょうりを＿＿＿＿すきです。",
        answers: [
            { id: 0, text: "つくって" },
            { id: 1, text: "つくるが" },
            { id: 2, text: "つくるのが" },
            { id: 3, text: "つくる" },
        ],
        keyid: 2,
        image: "",
        sound: ""
    },
    {
        id: 21,
        section: 2,
        text: `
        せんせいは　わたしに　日本語を　たくさん　（　　　）。
        <hr>
        ＿＿＿に入るものは何ですか。`,
        answers: [
            { id: 0, text: "おしえて　もらいました" },
            { id: 1, text: "ならって　くれました" },
            { id: 2, text: "おしえて　くれました" },
            { id: 3, text: "ならって　もらいました" },
        ],
        keyid: 2,
        image: "",
        sound: ""
    },
    {
        // l 12
        id: 22,
        section: 2,
        text: `
        かじです！、はやく（　　　）
        <hr>
        ＿＿＿に入るものは何ですか。`,
        answers: [
            { id: 0, text: "にげた" },
            { id: 1, text: "にげるな" },
            { id: 2, text: "にげろ" },
            { id: 3, text: "にげれる" },
        ],
        keyid: 2,
        image: "",
        sound: ""
    },
    {
        // l 9
        id: 23,
        section: 2,
        text: `
        その本、もっと　（　　）してくれると、買います。`,
        answers: [
            { id: 0, text: "やすく" },
            { id: 1, text: "やすくて" },
            { id: 2, text: "やすくない" },
            { id: 3, text: "やすかった" },
        ],
        keyid: 0,
        image: "",
        sound: ""
    },
    {
        // l 10
        id: 24,
        section: 2,
        text: `
        A：B-さんは　よくジョギングを　しますか。</br>
        B：はい、（＿＿＿）します</br>
        <hr>
        ＿＿＿に入るものは何ですか。`,
        answers: [
            { id: 0, text: "まいにち" },
            { id: 1, text: "たまに" },
            { id: 2, text: "ときどき" },
            { id: 3, text: "まおとし" },
        ],
        keyid: 2,
        image: "",
        sound: ""
    },
    {
        // l 13
        id: 25,
        section: 2,
        text: `
        A：わたしは　にほんご　　が　＿＿＿。
        <hr>
        ＿＿＿に入るものは何ですか。
        `,
        answers: [
            { id: 0, text: "はなせます" },
            { id: 1, text: "はなれます" },
            { id: 2, text: "いえせます" },
            { id: 3, text: "いわれます" },
        ],
        keyid: 0,
        image: "",
        sound: ""
    },
    {
        // l9
        id: 26,
        section: 2,
        text: "これ、わからないです。おしえて（＿＿＿＿＿）",
        answers: [
            { id: 0, text: "もいいです" },
            { id: 1, text: "てもらいませんか" },
            { id: 2, text: "てはいけません" },
            { id: 3, text: "てしまった" },
        ],
        keyid: 1,
        image: "",
        sound: ""
    },
    {
        // l9
        id: 27,
        section: 2,
        text: "ともだち（　　）うちに　入りました",
        answers: [
            { id: 0, text: "の" },
            { id: 1, text: "を" },
            { id: 2, text: "のに" },
            { id: 3, text: "も" },
        ],
        keyid: 0,
        image: "",
        sound: ""
    },
    {
        id: 28,
        section: 2,
        text: `
        わたしは　いぬに　えさを「　　」。</br>
        <hr>
        「　　」に入るものはなんですか。
        `,
        answers: [
            { id: 0, text: "やってくださいました" },
            { id: 1, text: "やってます" },
            { id: 2, text: "やってあげます" },
            { id: 3, text: "やっていただきました" },
        ],
        keyid: 0,
        image: "",
        sound: ""
    },
    {
        id: 29,
        section: 2,
        text: `
        やすみですから「　　」も　いいです。</br>
        <hr>
        「　　」に入るものはなんですか。
        `,
        answers: [
            { id: 0, text: "こなくて" },
            { id: 1, text: "きなくて" },
            { id: 2, text: "いって" },
            { id: 3, text: "かえらなくて" },
        ],
        keyid: 0,
        image: "",
        sound: ""
    },
    {
        id: 30,
        section: 2,
        text: `
        まだ　つかえますから「　　　」おいてください。</br>
        <hr>
        「　　」に入るものはなんですか。
        `,
        answers: [
            { id: 0, text: "おいて" },
            { id: 1, text: "おいた" },
            { id: 2, text: "おく" },
            { id: 3, text: "おけ" },
        ],
        keyid: 0,
        image: "",
        sound: ""
    },
    {
        id: 31,
        section: 3,
        text: "おとこ　の人は　何を　あげましたか ",
        answers: [
            { id: 0, text: "フォトフレーム" },
            { id: 1, text: "フォトコンテスト" },
            { id: 2, text: "フォローフレーム" },
            { id: 3, text: "フォローコンテスト" },
        ],
        keyid: 0,
        image: "",
        sound: "Simulation JFT-4/31.mp3",
        play_count : 2
    },
    {
        id: 32,
        section: 3,
        text: "おんなのひと　は　おとこのひとに　何をしてあげますか",
        answers: [
            { id: 0, text: "にほんご　を　おしえる" },
            { id: 1, text: "JLPTごうかく　にする" },
            { id: 2, text: "べんきょう　の　ほん　をあげる" },
            { id: 3, text: "ほめる" },
        ],
        keyid: 2,
        image: "",
        sound: "Simulation JFT-4/32.mp3",
        play_count : 2
    },
    {
        id: 33,
        section: 3,
        text: "女の人のかばんは　どうやって手に入れましたか",
        answers: [
            { id: 0, text: "おかあさん　から　もらいました" },
            { id: 1, text: "ミャンマーで　かいました" },
            { id: 2, text: "にほんで　かいました" },
            { id: 3, text: "おとこのひとが　あげました" },
        ],
        keyid: 0,
        image: "",
        sound: "Simulation JFT-4/33.mp3",
        play_count : 2
    },
    {
        id: 34,
        section: 3,
        text: "町について　まちがっているのは　どれですか",
        answers: [
            { id: 0, text: "すみやすい" },
            { id: 1, text: "けしきが　きれい" },
            { id: 2, text: "人がやさしい" },
            { id: 3, text: "ものが　やすい" },
        ],
        keyid: 3,
        image: "",
        sound: "Simulation JFT-4/34.mp3",
        play_count : 2
    },
    {
        id: 35,
        section: 3,
        text: "あしたの　てんきは　どうなりますか",
        answers: [
            { id: 0, text: "あめです" },
            { id: 1, text: "かぜが　つよくてさむいです" },
            { id: 2, text: "あめが　ふってさむいです" },
            { id: 3, text: "あたたかいいちにちです" },
        ],
        keyid: 1,
        image: "",
        sound: "Simulation JFT-4/35.mp3",
        play_count : 2
    },
    {
        id: 36,
        section: 3,
        text: "ゆうびんきょくには　まっすぐいったら　次はどこへ行きますか",
        answers: [
            { id: 0, text: "一つめのしんごう　をひだり　に　まがります" },
            { id: 1, text: "一つめのしんごう　をみぎ　に　まがります" },
            { id: 2, text: "二つめのしんごう　をひだり　に　まがります" },
            { id: 3, text: "二つめのしんごう　をみぎ　に　まがります" },
        ],
        keyid: 2,
        image: "",
        sound: "Simulation JFT-4/36.mp3",
        play_count : 2
    },
    {
        id: 37,
        section: 3,
        text: "おとこのひと　は　どうして　とうきょうタワーに　のぼらないですか",
        answers: [
            { id: 0, text: "じかん　がありませんから" },
            { id: 1, text: "チケットが　たかいから" },
            { id: 2, text: "たかいところは　にがてだから" },
            { id: 3, text: "ともだちが　いませんから" },
        ],
        keyid: 2,
        image: "",
        sound: "Simulation JFT-4/37.mp3",
        play_count : 2
    },
    {
        id: 38,
        section: 3,
        text: "このあと　ふたりは　何をしますか",
        answers: [
            { id: 0, text: "おかね　をおろしにいきます" },
            { id: 1, text: "いっしょに　ごはんを　たべます" },
            { id: 2, text: "かえります" },
            { id: 3, text: "ぎんこう　へ　いきます" },
        ],
        keyid: 0,
        image: "",
        sound: "Simulation JFT-4/38.mp3",
        play_count : 2
    },
    {
        id: 39,
        section: 3,
        text: "ちゃわんむしは　なにからできていますか、まちがっているのをえらんでください",
        answers: [
            { id: 0, text: "たまご" },
            { id: 1, text: "みそしる" },
            { id: 2, text: "とりにく" },
            { id: 3, text: "プリン" },
        ],
        keyid: 1,
        image: "",
        sound: "Simulation JFT-4/39.mp3",
        play_count : 2
    },
    {
        id: 40,
        section: 3,
        text: "このあと　おんなのひとは　なにをしますか",
        answers: [
            { id: 0, text: "おとこに　にほんご　のせんせいを　しょうかいします" },
            { id: 1, text: "チラシを取りに行きます" },
            { id: 2, text: "おとこの人に　にほんご　をおしえます" },
            { id: 3, text: "おとこの人と　いっしょに　にほんご　をべんきょうします" },
        ],
        keyid: 1,
        image: "",
        sound: "Simulation JFT-4/40.mp3",
        play_count : 2
    },
    {
        // l7
        id: 41,
        section: 4,
        text: `
        くりす：きのうから　いままで、ぜんぜん　ねませんでした。<br>
        かりな：（　　　）、やすんでください。<br>
        <hr>
        （　　　　）になにが　はいりますか。
        `,
        answers: [
            { id: 0, text: "それは、こまります" },
            { id: 1, text: "あ！、いけない" },
            { id: 2, text: "ざんねんです" },
            { id: 3, text: "それは　いけませんね" },
        ],
        keyid: 3,
        image: "",
        sound: ""
    },
    {
        id: 42,
        section: 4,
        text: `
        かりな：いままでに どんな スポーツを しましたか。<br>
        くりす：しょうがっこうの とき、スキーを しました。<br>
        かりな：わたしも　スキーはすきです。いっしょに　いきまえんか。<br>
        くりす：（　　　　）。<br>
        <hr>
        （　　　　）になにが　はいりますか。
        `,
        answers: [
            { id: 0, text: "ええ、ぜひ" },
            { id: 1, text: "ええ、じゃまた" },
            { id: 2, text: "ええ、いくかもしれませんね" },
            { id: 3, text: "ええ、たまには　いいですね" },
        ],
        keyid: 0,
        image: "",
        sound: ""
    },
    {
        id: 43,
        section: 4,
        text: `
        きのう　バーベキュー　しました。<br>
        いもうとは　ダイエットしているので、やさい　だけ食べました。<br>
        バーベキューはおいしいですが、そうじするのはたいへんでした。
        <hr>
        いもうとは　どうしてにくを　たべないですか。
        `,
        answers: [
            { id: 0, text: "にくが　きらいですから" },
            { id: 1, text: "ダイエットしているから" },
            { id: 2, text: "まだそうじ　しているから" },
            { id: 3, text: "バーベキューにはいっていません" },
        ],
        keyid: 1,
        image: "",
        sound: ""
    },
    {
        id: 44,
        section: 4,
        text: `
        とうきょう　へ　てんきん　することになりました<br>
        とうきょう　でも　がんばった　しごとしたい　とおもいます。<br>
        みんなさん、（　　　　）。<br>
        `,
        answers: [
            { id: 0, text: "どうぞよろしくおねがいします" },
            { id: 1, text: "これから、よろしくおねがいします" },
            { id: 2, text: "おつかれさまです" },
            { id: 3, text: "いままで　おせわになりました" },
        ],
        keyid: 3,
        image: "",
        sound: ""
    },
    {
        id: 45,
        section: 4,
        text: `
        いもり：あしたから、れんきゅうですね。どこか　いきますか。<br>
        くみせ：わたしは　うちに　います、　ゆっくり　やすみたいです。<br>
        いもり：そうなんですか、せっかく　の　れんきゅう　なのに、どうして　あそびに　いかないんですか。<br>
        くみせ：れんきゅうの　とき、かぞくは　うちに　あそびにきてくれましたから。<br>
        <hr>
        くみせーさんは　どうして　どこへも　いきませんか。
        `,
        answers: [
            { id: 0, text: "あそびに　いきたくないから" },
            { id: 1, text: "かぞくが　きますから" },
            { id: 2, text: "やすみたくないから" },
            { id: 3, text: "れんきゅうが　みじかいから" }
        ],
        keyid: 1,
        image: "",
        sound: ""
    },
    {
        id: 46,
        section: 4,
        text: `
        46-48<hr>
        これは、田中先生から　キキさんへの　メールです。</br>
        </br>
        キキさん</br>
        ２０２４年１０月２７日</br>
        </br>
        あしたは　いそがしいので、かいぎは　29日に　したいと思います。できますか？</br>
        つごうが　よければ、じむしょで　まっています。</br>
        このメールを　よんだら、　へんじをください。</br></br>
        田中
        <hr>
        キキさんがさいしょ　、なにをやらなければなりませんか。
        `,
        answers: [
            { id: 0, text: "じむしょに行く" },
            { id: 1, text: "田中せんせいにあやまる" },
            { id: 2, text: "メールを　へんじする" },
            { id: 3, text: "セミナーに行く" },
        ],
        keyid: 2,
        image: "",
        sound: ""
    },
    {
        id: 47,
        section: 4,
        text: `
        46-48<hr>
        これは、田中先生から　キキさんへの　メールです。</br>
        </br>
        キキさん</br>
        ２０２４年１０月２７日</br>
        </br>
        あしたは　いそがしいので、かいぎは　29日に　したいと思います。できますか？</br>
        つごうが　よければ、じむしょで　まっています。</br>
        このメールを　よんだら、　へんじをください。</br></br>
        田中
        <hr>
        先生はどうしてかいぎの　やくそくをかえましたか。
        `,
        answers: [
            { id: 0, text: "キキさんができなかったから" },
            { id: 1, text: "いそがしいから" },
            { id: 2, text: "じむしょ　に　ひとを　まっているから" },
            { id: 3, text: "へんじ　したいから" },
        ],
        keyid: 1,
        image: "",
        sound: ""
    },
    {
        id: 48,
        section: 4,
        text: `
        46-48<hr>
        これは、田中先生から　キキさんへの　メールです。</br>
        </br>
        キキさん</br>
        ２０２４年１０月２７日</br>
        </br>
        あしたは　いそがしいので、かいぎは　29日に　したいと思います。できますか？</br>
        つごうが　よければ、じむしょで　まっています。</br>
        このメールを　よんだら、　へんじをください。</br></br>
        田中
        <hr>
        かいぎは　いつになりますか。
        `,
        answers: [
            { id: 0, text: "あした" },
            { id: 1, text: "あさって" },
            { id: 2, text: "みっか　ご" },
            { id: 3, text: "よっか　ご" },
        ],
        keyid: 1,
        image: "",
        sound: ""
    },
    {
        id: 49,
        section: 4,
        text: `
        49-50<hr>
        こばやし：その ネクタイ、すてきですね。<br>
        かなこ： これ、たんじょうびに つまに もらったんです。<br>
        こばやし：よく、にあってますよ。かなこさんは、おたんじょうび　プレゼントは ふうだん　どんな ものを あげますか。<br>
        かなこ：よく　かぜり　を　あげます。たとえば、にんぎょ　とか、　かびん　などです。<br>
        <hr>
        かなこさんは　なにを　もらいましたか。
        `,
        answers: [
            { id: 0, text: "ネクタイ" },
            { id: 1, text: "にんぎょ" },
            { id: 2, text: "かびん" },
            { id: 3, text: "たんじょうび" },
        ],
        keyid: 0,
        image: "",
        sound: ""
    },
    {
        id: 50,
        section: 4,
        text: `
        こばやし：その ネクタイ、すてきですね。<br>
        かなこ： これ、たんじょうびに つまに もらったんです。<br>
        こばやし：よく、にあってますよ。かなこさんは、おたんじょうび　プレゼントは ふうだん　どんな ものを あげますか。<br>
        かなこ：よく　かぜり　を　あげます。たとえば、にんぎょ　とか、　かびん　などです。<br>
        <hr>
        かなこさんは　ふだん　なにを　あげましたか。
        `,
        answers: [
            { id: 0, text: "はな" },
            { id: 1, text: "かざり" },
            { id: 2, text: "さかな" },
            { id: 3, text: "ネクタイ" },
        ],
        keyid: 1,
        image: "",
        sound: ""
    }
];