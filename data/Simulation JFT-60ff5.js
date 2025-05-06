// test 
// 50 soal
// s1 15 bb 1  ba 15
// s2 15 bb 16 ba 30
// s3 10 bb 31 ba 40
// s4 10 bb 41 ba 50
// 50
const SimulationJFT6Questions = [{
        id: 1,
        section: 1,
        text: "これは何ですか。 ",
        answers: [
            { id: 0, text: "ゆき" },
            { id: 1, text: "あめ" },
            { id: 2, text: "あき" },
            { id: 3, text: "くも" },
        ],
        keyid: 0,
        image: "Simulation JFT-6/1.PNG",
        sound: ""
    },
    {
        id: 2,
        section: 1,
        text: "これは何ですか。 ",
        answers: [
            { id: 0, text: "ちゅうりんじょう" },
            { id: 1, text: "くるま" },
            { id: 2, text: "ちゅうしゃじょう" },
            { id: 3, text: "じてんしゃ" },
        ],
        keyid: 2,
        image: "Simulation JFT-6/2.PNG",
        sound: ""
    },
    {
        id: 3,
        section: 1,
        text: "これは何ですか。 ",
        answers: [
            { id: 0, text: "にがい" },
            { id: 1, text: "あまい" },
            { id: 2, text: "からい" },
            { id: 3, text: "おいしい" },
        ],
        keyid: 0,
        image: "Simulation JFT-6/3.PNG",
        sound: ""
    },
    {
        id: 4,
        section: 1,
        text: "これは何ですか。 ",
        answers: [
            { id: 0, text: "のみます" },
            { id: 1, text: "しょくどう" },
            { id: 2, text: "たべもの" },
            { id: 3, text: "しょくじ" },
        ],
        keyid: 3,
        image: "Simulation JFT-6/4.PNG",
        sound: ""
    },
    {
        // l1 3
        id: 5,
        section: 1,
        text: "お金がほしいですから、レストランで( 　　　)います。",
        answers: [
            { id: 0, text: "して" },
            { id: 1, text: "はたらいて" },
            { id: 2, text: "かって" },
            { id: 3, text: "すわって" },
        ],
        keyid: 1,
        image: "",
        sound: ""
    },
    {
        // l2 2 ganti
        id: 6,
        section: 1,
        text: `私は（　　）かぞくです、おっとと、むすめが　います。`,
        answers: [
            { id: 0, text: "さんじん" },
            { id: 1, text: "みったり" },
            { id: 2, text: "みっつ" },
            { id: 3, text: "さんにん" },
        ],
        keyid: 3,
        image: "",
        sound: ""
    },
    {
        // l2 6
        id: 7,
        section: 1,
        text: "ここは（　　　）ですから、みどりがおおくて、しずかです。",
        answers: [
            { id: 0, text: "いなか" },
            { id: 1, text: "とかい" },
            { id: 2, text: "うみ" },
            { id: 3, text: "かわ" },
        ],
        keyid: 0,
        image: "",
        sound: ""
    },
    {
        // l4 4
        id: 8,
        section: 1,
        text: "おおさかは　このでんしゃ　を　つぎの　えきで　（　　　）。",
        answers: [
            { id: 0, text: "おります" },
            { id: 1, text: "さがります" },
            { id: 2, text: "でます" },
            { id: 3, text: "あるきます" },
        ],
        keyid: 0,
        image: "",
        sound: ""
    },
    {
        // l4
        id: 9,
        section: 1,
        text: "今日はいい天気ですね</br>天気=.... ",
        answers: [
            { id: 0, text: "げんき" },
            { id: 1, text: "でんき" },
            { id: 2, text: "てんき" },
            { id: 3, text: "しんき" },
        ],
        keyid: 2,
        image: "",
        sound: ""
    },
    {
        // l2
        id: 10,
        section: 1,
        text: "休みの日は本を読みます</br>読みます=.... ",
        answers: [
            { id: 0, text: "よみます" },
            { id: 1, text: "かみます" },
            { id: 2, text: "すみます" },
            { id: 3, text: "あみます" },
        ],
        keyid: 0,
        image: "",
        sound: ""
    },
    {
        // l7
        id: 11,
        section: 1,
        text: "会社まで自転車をのります</br>会社=...  ",
        answers: [
            { id: 0, text: "かいしゃ" },
            { id: 1, text: "しゃかい" },
            { id: 2, text: "かいぎ" },
            { id: 3, text: "かいじょう" },
        ],
        keyid: 0,
        image: "",
        sound: ""
    },
    {
        // l7
        id: 12,
        section: 1,
        text: "あのミルクはもう古いですから、飲まないでください</br>古い=  ",
        answers: [
            { id: 0, text: "はやい" },
            { id: 1, text: "おそい" },
            { id: 2, text: "かたい" },
            { id: 3, text: "ふるい" },
        ],
        keyid: 3,
        image: "",
        sound: ""
    },
    {
        // l7
        id: 13,
        section: 1,
        text: "私はお金が　すきです</br>すき=...  ",
        answers: [
            { id: 0, text: "好き" },
            { id: 1, text: "女き" },
            { id: 2, text: "校き" },
            { id: 3, text: "夜き" },
        ],
        keyid: 0,
        image: "",
        sound: ""
    },
    {
        // l11　<u></u>
        id: 14,
        section: 1,
        text: "おなまえは　だれですか</br>おなまえ=...   ",
        answers: [
            { id: 0, text: "お右前" },
            { id: 1, text: "お名花" },
            { id: 2, text: "お名前" },
            { id: 3, text: "お多花" },
        ],
        keyid: 2,
        image: "",
        sound: ""
    },
    {
        // l13　<u></u>
        id: 15,
        section: 1,
        text: "こんしゅうは　仕事がないので　りょこうに　行きます。 </br>こんしゅう=...  ",
        answers: [
            { id: 0, text: "会週" },
            { id: 1, text: "今周" },
            { id: 2, text: "今週" },
            { id: 3, text: "会周" },
        ],
        keyid: 2,
        image: "",
        sound: ""
    },
    {
        // l13
        id: 16,
        section: 2,
        text: `
        A:これはだれの　ですか。</br>
        B:あ、それは　私（　）です。
        <hr>
        （　　　）に入るものは何ですか。
        `,
        answers: [
            { id: 0, text: "の" },
            { id: 1, text: "を" },
            { id: 2, text: "も" },
            { id: 3, text: "が" },
        ],
        keyid: 0,
        image: "",
        sound: ""
    },
    {
        // 11 
        id: 17,
        section: 2,
        text: `
        B：すみません、お金を　かし（　）</br>
        A：はい、どうぞ。</br>
        <hr>
        （　　　）に入るものは何ですか。
        `,
        answers: [
            { id: 0, text: "た" },
            { id: 1, text: "てください" },
            { id: 2, text: "てあげますか" },
            { id: 3, text: "ますか" },
        ],
        keyid: 1,
        image: "",
        sound: ""
    },
    {
        // l11  
        id: 18,
        section: 2,
        text: `
        すみません、先生　は（　　）いるか、しっていますか。
        <hr>
        （　　　）に入るものは何ですか。

        `,
        answers: [
            { id: 0, text: "どこで" },
            { id: 1, text: "どこに" },
            { id: 2, text: "どこが" },
            { id: 3, text: "どこを" },
        ],
        keyid: 1,
        image: "",
        sound: ""
    },
    {
        // l16
        id: 19,
        section: 2,
        text: `
       　このしごと、あと　（　　）でおわります。
       <hr>
       （　　　）に入るものは何ですか。
        `,
        answers: [
            { id: 0, text: "３０分ぐらいで" },
            { id: 1, text: "３０分ぐらいに" },
            { id: 2, text: "３０分ごろで" },
            { id: 3, text: "３０分ごろに" },
        ],
        keyid: 0,
        image: "",
        sound: ""
    },
    {
        // l13
        id: 20,
        section: 2,
        text: `
        （　　　）がこわれましたから、　しゅうりに　いきます。</br>
        <hr>
        （　　　）に入るものは何ですか。`,
        answers: [
            { id: 0, text: "ほん" },
            { id: 1, text: "かばん" },
            { id: 2, text: "くるま" },
            { id: 3, text: "つくえ" },
        ],
        keyid: 2,
        image: "",
        sound: ""
    },
    {
        id: 21,
        section: 2,
        text: `
        あした　やすみですから、（　　　　）
        <hr>
        （　　　）に入るものは何ですか`,
        answers: [
            { id: 0, text: "来ないでください。" },
            { id: 1, text: "来なければなりません。" },
            { id: 2, text: "来なくてもいいです。" },
            { id: 3, text: "来ます。" },
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
        A：あした、えいがを　見に行きませんか。</br>
        B：すみません、あしたは（　　　　）。あさって　テストがありますから。</>
        <hr>
        （　　　）に入るものは何ですか`,
        answers: [
            { id: 0, text: "いいです" },
            { id: 1, text: "だめです" },
            { id: 2, text: "たのしいです" },
            { id: 3, text: "だいじょうぶです" },
        ],
        keyid: 1,
        image: "",
        sound: ""
    },
    {
        // l 9
        id: 23,
        section: 2,
        text: `
        （　　　）テストを　ごうかく　できました。
        <hr>
        （　　　）に入るものは何ですか`,
        answers: [
            { id: 0, text: "まり" },
            { id: 1, text: "そろそろ" },
            { id: 2, text: "やっと" },
            { id: 3, text: "なかなか" },
        ],
        keyid: 2,
        image: "",
        sound: ""
    },
    {
        // l 10
        id: 24,
        section: 2,
        text: `
        A：がっこう　まで（　　　）かかりますか。</br>
        B：２じかん　です。</br>
        <hr>
        （　　　）に入るものは何ですか`,
        answers: [
            { id: 0, text: "どれぐらい" },
            { id: 1, text: "どれごろ" },
            { id: 2, text: "どうやって" },
            { id: 3, text: "どんな" },
        ],
        keyid: 0,
        image: "",
        sound: ""
    },
    {
        // l 13
        id: 25,
        section: 2,
        text: `
        A：あした、どこで　あいますか。</br>
        B：かいしゃの（　　　）で会いましょう。</br>
        <hr>
        （　　　）に入るものは何ですか。
        `,
        answers: [
            { id: 0, text: "した" },
            { id: 1, text: "まえ" },
            { id: 2, text: "あしもと" },
            { id: 3, text: "うえ" },
        ],
        keyid: 1,
        image: "",
        sound: ""
    },
    {
        // l9
        id: 26,
        section: 2,
        text: `
        A：あなたの　まちは　ゆうめいですか。</br>
        B：いいえ、（　　　）。</br>
        <hr>
        （　　　）に入るものは何ですか `,
        answers: [
            { id: 0, text: "ゆうめい　じゃありません" },
            { id: 1, text: "ゆうめくないです" },
            { id: 2, text: "ゆうめい　でした" },
            { id: 3, text: "ゆうめかった" },
        ],
        keyid: 0,
        image: "",
        sound: ""
    },
    {
        // l9
        id: 27,
        section: 2,
        text: "がっこう　は　あさの８じ（　　）　はじまります。",
        answers: [
            { id: 0, text: "まで" },
            { id: 1, text: "から" },
            { id: 2, text: "いつ" },
            { id: 3, text: "が" },
        ],
        keyid: 1,
        image: "",
        sound: ""
    },
    {
        id: 28,
        section: 2,
        text: `
        A: しゅみは　なんですか。 </br>
        B: 「  」です。</br>
        </br>
        <hr>
        「  」に入るものはなんですか。
        `,
        answers: [
            { id: 0, text: "うんどう" },
            { id: 1, text: "しゅみ" },
            { id: 2, text: "わたし" },
            { id: 3, text: "すき" },
        ],
        keyid: 0,
        image: "",
        sound: ""
    },
    {
        id: 29,
        section: 2,
        text: `
        A: どな　たべもの　が　すきですか。 </br>
        B: 「  」です。</br>
        </br>
        <hr>
        「  」に入るものはなんですか。
        `,
        answers: [
            { id: 0, text: "すきやき" },
            { id: 1, text: "えほん" },
            { id: 2, text: "きもの" },
            { id: 3, text: "めがね" },
        ],
        keyid: 0,
        image: "",
        sound: ""
    },
    {
        id: 30,
        section: 2,
        text: `
        B: どうしてですか、うんどうが　すきですか。</br>
        A: 「  」　に　いいんですから</br>
        </br>
        <hr>
        「  」に入るものはなんですか。
        `,
        answers: [
            { id: 0, text: "かぞく" },
            { id: 1, text: "ほけん" },
            { id: 2, text: "あたま" },
            { id: 3, text: "けんこう" },
        ],
        keyid: 3,
        image: "",
        sound: ""
    },
    {
        id: 31,
        section: 3,
        text: "このばすは　くうこうに　いきますか？ ",
        answers: [
            { id: 0, text: "いきます" },
            { id: 1, text: "いきません" },
            { id: 2, text: "いきました" },
            { id: 3, text: "いかない" },
        ],
        keyid: 0,
        image: "",
        sound: "Simulation JFT-6/31.mp3",
        play_count : 2
    },
    {
        id: 32,
        section: 3,
        text: "ここは　どこですか。",
        answers: [
            { id: 0, text: "さきやま　しんとしん。" },
            { id: 1, text: "ほんみや。" },
            { id: 2, text: "わわぐち。" },
            { id: 3, text: "さきやま" },
        ],
        keyid: 0,
        image: "Simulation JFT-6/32.PNG",
        sound: "Simulation JFT-6/32.mp3",
        play_count : 2
    },
    {
        id: 33,
        section: 3,
        text: "ととこの人は　どこにいきますか。",
        answers: [
            { id: 0, text: "1" },
            { id: 1, text: "2" },
            { id: 2, text: "3" },
            { id: 3, text: "4" },
        ],
        keyid: 2,
        image: "Simulation JFT-6/33.PNG",
        sound: "Simulation JFT-6/33.mp3",
        play_count : 2
    },
    {
        id: 34,
        section: 3,
        text: "おんなの　ひとは　やすみの　ひ　なにをしますか。",
        answers: [
            { id: 0, text: "やすみます。" },
            { id: 1, text: "こうえんで　さんぽします。" },
            { id: 2, text: "テニスを　みます。" },
            { id: 3, text: "ジョギングを　します。" },
        ],
        keyid: 3,
        image: "",
        sound: "Simulation JFT-6/34.mp3",
        play_count : 2
    },
    {
        id: 35,
        section: 3,
        text: "おんなの　ひとは　これから　どこに　いきますか。",
        answers: [
            { id: 0, text: "a" },
            { id: 1, text: "b" },
            { id: 2, text: "c" },
            { id: 3, text: "d" },
        ],
        keyid: 1,
        image: "Simulation JFT-6/35.PNG",
        sound: "Simulation JFT-6/35.mp3",
        play_count : 2
    },
    {
        id: 36,
        section: 3,
        text: "おかしは　いくらですか。",
        answers: [
            { id: 0, text: "２０３円" },
            { id: 1, text: "２３０円" },
            { id: 2, text: "２００３０円" },
            { id: 3, text: "２３円" },
        ],
        keyid: 1,
        image: "",
        sound: "Simulation JFT-6/36.mp3",
        play_count : 2
    },
    {
        id: 37,
        section: 3,
        text: "まちがっている　のを　えらんでください。",
        answers: [
            { id: 0, text: "パイオさんは　ゴジラを　みにいきました。" },
            { id: 1, text: "マリエルさんは　せんたくを　しました。" },
            { id: 2, text: "デヴィさん　は　ともだちと　およぎました。" },
            { id: 3, text: "カノルさん　は　どこへも　いきませんでした。" },
        ],
        keyid: 2,
        image: "",
        sound: "Simulation JFT-6/37.mp3",
        play_count : 2
    },
    {
        id: 38,
        section: 3,
        text: "ただしいのを　えらんでください。",
        answers: [
            { id: 0, text: "ディズニーランドは　いかないほうがいいです。" },
            { id: 1, text: "ミラさん　は　しんかんせんに　のりたいです。" },
            { id: 2, text: "ティエンさんは　ふじさんに　のぼりたいです。" },
            { id: 3, text: "すがじんじゃは　ドラエモンの　アニメの　じんじゃです。" },
        ],
        keyid: 2,
        image: "",
        sound: "Simulation JFT-6/38.mp3",
        play_count : 2
    },
    {
        id: 39,
        section: 3,
        text: "おとこ　の　ひと　は　どこで　にほんご　を　べんきょうしましたか。",
        answers: [
            { id: 0, text: "a" },
            { id: 1, text: "b" },
            { id: 2, text: "c" },
            { id: 3, text: "d" },
        ],
        keyid: 1,
        image: "Simulation JFT-6/39.PNG",
        sound: "Simulation JFT-6/39.mp3",
        play_count : 2
    },
    {
        id: 40,
        section: 3,
        text: "休みの日　男の人はどこへ　いきますか。",
        answers: [
            { id: 0, text: "a" },
            { id: 1, text: "b" },
            { id: 2, text: "c" },
            { id: 3, text: "d" },
        ],
        keyid: 2,
        image: "Simulation JFT-6/40.PNG",
        sound: "Simulation JFT-6/40.mp3",
        play_count : 2
    },
    {
        // l7
        id: 41,
        section: 4,
        text: `
        かみこ　：すみません、ここで　ごはん　たべても　いいですか。<br>
        ケヴィン：しょくじ（　　）です。しょくどうで　してください。<br>
        <hr>
        （　　）に入るものはなんですか。
        `,
        answers: [
            { id: 0, text: "きんし " },
            { id: 1, text: "きんえん" },
            { id: 2, text: "きつえん" },
            { id: 3, text: "きんしょく" },
        ],
        keyid: 0,
        image: "",
        sound: ""
    },
    {
        id: 42,
        section: 4,
        text: `
        かみこ　：ほんは　なんさつ　まで　（　　）。<br>
        ケヴィン：いっしゅうかん　に　３さつ　までです。<br>
        <hr>
        （　　）に入るものはなんですか。
        `,
        answers: [
            { id: 0, text: "かりましたか" },
            { id: 1, text: "かりられませんか" },
            { id: 2, text: "かりられますか" },
            { id: 3, text: "かましょうか" },
        ],
        keyid: 2,
        image: "",
        sound: ""
    },
    {
        id: 43,
        section: 4,
        text: `
        先生    「つくえの上に ほん　をおかないでください、ほん　は　かばんの　なか　に入れてください。つくえのうえ　には　えんぴつだけ　おいてください。では、テストをします。」
        <hr>
        テストのとき本は　どこにおきますか。
        `,
        answers: [
            { id: 0, text: "かばんの　なかです。" },
            { id: 1, text: "つくえの　なかです。" },
            { id: 2, text: "つくえの　うえです。" },
            { id: 3, text: "かばんの　うえです。" },
        ],
        keyid: 0,
        image: "",
        sound: ""
    },
    {
        id: 44,
        section: 4,
        text: `
        ａ：「すみません、こうばんはどこですか。」<br>
        ｂ：「こうばんですか。そこに　はしが　ありますね。そのはしを　わたって　まっすぐ　いってください。としょかん　の　ひだり　に　ありますよ。」<br>
        <hr>
        ただしいものは　どれですか。
        `,
        answers: [
            { id: 0, text: "こうばんは　の　としょかん　うしろに　あります。" },
            { id: 1, text: "こうばんは　はしのとなりに　あります。" },
            { id: 2, text: "こうばんは　としょかん　の　ひだりに　あります" },
            { id: 3, text: "こうばんは　はし　の　ひだりに　あります" },
        ],
        keyid: 2,
        image: "",
        sound: ""
    },
    {
        id: 45,
        section: 4,
        text: `
        みのり：ななみさん　が　きのう　たなか　さん　に　おかね　を　かした　と　いいました。
        <hr>
        
        どれが　ただしいですか。
        `,
        answers: [
            { id: 0, text: "たなか　さん　は　ななみ　さん　に　おかね　を　かりました" },
            { id: 1, text: "たなか　さん　は　みのり　さん　に　おかね　を　かりました" },
            { id: 2, text: "たなか　さん　は　ななみ　さん　に　おかね　を　かしました" },
            { id: 3, text: "たなか　さん　は　みのり　さん　に　おかね　を　かしました" },
        ],
        keyid: 0,
        image: "",
        sound: ""
    },
    {
        id: 46,
        section: 4,
        text: `
        めぐみ：なにか　へんな　においが　しますね。<br>
        あさひ：あ（　　　）、ひ　を　けす　のを　わすれました。<br>
        <hr>
        （　　）に入るものはなんですか。
        `,
        answers: [
            { id: 0, text: "ざんねん" },
            { id: 1, text: "いけない" },
            { id: 2, text: "そろそろ" },
            { id: 3, text: "すごい" },
        ],
        keyid: 1,
        image: "",
        sound: ""
    },
    {
        id: 47,
        section: 4,
        text: `
        せんせい：おひさしぶりです、げんきですか。<br>
        せいと　：（　　　）<br>
        <hr>
        （　　）に入るものはなんですか。
         `,
        answers: [
            { id: 0, text: " おかげさまで" },
            { id: 1, text: " では、また" },
            { id: 2, text: " ありがとうございます。" },
            { id: 3, text: " まだまだです" },
        ],
        keyid: 0,
        image: "",
        sound: ""
    },
    {
        id: 48,
        section: 4,
        text: `
         </br>
        ドゥック: あのう、ちょっといいですか。?</br>
        あらい　: はい。</br>
        ドゥック: これ、おしえて くださいませんか。?</br>
        あらい　: すみません。「　　」</br>
        
        <hr>
        「　　」に入るものはなんですか。
        `,
        answers: [
            { id: 0, text: "今、ちょっと…。" },
            { id: 1, text: "ざんねんです。" },
            { id: 2, text: "また　こんど。" },
            { id: 3, text: "くださいません。" },
        ],
        keyid: 0,
        image: "",
        sound: ""
    },
    {
        id: 49,
        section: 4,
        text: `
        （みせで）</br>
       てんいん: いらっしゃいませ！</br>
       ----</br>
       てんいん: 「　　」</br>
       ミラー: ふたり　で　おねがいします。</br>
       
       <hr>
       「　　」に入るものはなんですか。
        `,
        answers: [
            { id: 0, text: "ありがとうございました。" },
            { id: 1, text: "こちら　へ　どうぞ。" },
            { id: 2, text: "なんめいさまですか。" },
            { id: 3, text: "どうぞ　めしあがってください。" },
        ],
        keyid: 2,
        image: "",
        sound: ""
    },
    {
        id: 50,
        section: 4,
        text: `
        （うちで）</br>
       ミラー: これ　おみやげです。どうぞ</br>
       かとう: ありがとうございます。どうぞ、なかに　はいってください。おちゃでも　のみましょう。</br>
       ミラー: ありがとうございます。</br>
       ----</br>
       ミラー: あ、もうじかんですね。「　　」。</br>
       かとう: そうですね。じっかんが　あったら、また　きてください。</br>
       
       <hr>
       「　　」に入るものはなんですか。
        `,
        answers: [
            { id: 0, text: "おじゃまします。" },
            { id: 1, text: "おさきです。" },
            { id: 2, text: "そろそろしつれいします。" },
            { id: 3, text: "またこんど、おねがいします。" },
        ],
        keyid: 2,
        image: "",
        sound: ""
    }
];