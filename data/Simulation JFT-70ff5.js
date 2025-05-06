// test 
// 50 soal
// s1 15 bb 1  ba 15
// s2 15 bb 16 ba 30
// s3 10 bb 31 ba 40
// s4 10 bb 41 ba 50
// 50
const SimulationJFT7Questions = [{
        id: 1,
        section: 1,
        text: "これは何ですか。",
        answers: [
            { id: 0, text: "うみ" },
            { id: 1, text: "いけ" },
            { id: 2, text: "みずうみ" },
            { id: 3, text: "かいがん" },
        ],
        keyid: 2,
        image: "Simulation JFT-7/mizuumi.png",
        sound: ""
    },
    {
        id: 2,
        section: 1,
        text: "これは何ですか。",
        answers: [
            { id: 0, text: "たな" },
            { id: 1, text: "まど" },
            { id: 2, text: "ひきだし" },
            { id: 3, text: "いす" },
        ],
        keyid: 0,
        image: "Simulation JFT-7/2.PNG",
        sound: ""
    },
    {
        id: 3,
        section: 1,
        text: "これは何ですか。",
        answers: [
            { id: 0, text: "はし" },
            { id: 1, text: "にく" },
            { id: 2, text: "やさい" },
            { id: 3, text: "くだもの" },
        ],
        keyid: 2,
        image: "Simulation JFT-7/3.PNG",
        sound: ""
    },
    {
        id: 4,
        section: 1,
        text: "これは何ですか。",
        answers: [
            { id: 0, text: "がっこう" },
            { id: 1, text: "おてら" },
            { id: 2, text: "とかい" },
            { id: 3, text: "とうきょう" },
        ],
        keyid: 0,
        image: "Simulation JFT-7/4.PNG",
        sound: ""
    },
    {
        // l1 3
        id: 5,
        section: 1,
        text: "かぜが（　　　）ですから、きを　つけて　ください。",
        answers: [
            { id: 0, text: "おおきい" },
            { id: 1, text: "つよい" },
            { id: 2, text: "ちいさい" },
            { id: 3, text: "やすい" },
        ],
        keyid: 1,
        image: "",
        sound: ""
    },
    {
        // l2 2 ganti
        id: 6,
        section: 1,
        text: `その（　　　）を　右に　まがってください。`,
        answers: [
            { id: 0, text: "まち" },
            { id: 1, text: "はし" },
            { id: 2, text: "こうさてん" },
            { id: 3, text: "みち" },
        ],
        keyid: 2,
        image: "",
        sound: ""
    },
    {
        // l2 6
        id: 7,
        section: 1,
        text: "ATMでお金（　　　）",
        answers: [
            { id: 0, text: "おろします" },
            { id: 1, text: "かいます" },
            { id: 2, text: "やすみます" },
            { id: 3, text: "あげます" },
        ],
        keyid: 0,
        image: "",
        sound: ""
    },
    {
        // l4 4
        id: 8,
        section: 1,
        text: "すみません、このりょうりは　肉を　（　　　）いますか？",
        answers: [
            { id: 0, text: "つかって" },
            { id: 1, text: "たべて" },
            { id: 2, text: "つくって" },
            { id: 3, text: "かって" },
        ],
        keyid: 0,
        image: "",
        sound: ""
    },
    {
        // l4
        id: 9,
        section: 1,
        text: "今、お金を　持っていませんので、何も買えません。</br>持って=.... ",
        answers: [
            { id: 0, text: "まって" },
            { id: 1, text: "とって" },
            { id: 2, text: "きって" },
            { id: 3, text: "もって" },
        ],
        keyid: 3,
        image: "",
        sound: ""
    },
    {
        // l2
        id: 10,
        section: 1,
        text: "高校を　そつぎょうしました</br>高校=.... ",
        answers: [
            { id: 0, text: "ちゅうこう" },
            { id: 1, text: "こうこう" },
            { id: 2, text: "しょうこう" },
            { id: 3, text: "てんこう" },
        ],
        keyid: 1,
        image: "",
        sound: ""
    },
    {
        // l7
        id: 11,
        section: 1,
        text: "こちらに なまえと 住所を かいてください。</br>住所=...  ",
        answers: [
            { id: 0, text: "かいしゃ" },
            { id: 1, text: "じゅうみん" },
            { id: 2, text: "ばしょ" },
            { id: 3, text: "じゅうしょ" },
        ],
        keyid: 3,
        image: "",
        sound: ""
    },
    {
        // l7
        id: 12,
        section: 1,
        text: "父 の たんじょうび で、花を　あげました。</br>父=  ",
        answers: [
            { id: 0, text: "つま" },
            { id: 1, text: "おとうと" },
            { id: 2, text: "ちち" },
            { id: 3, text: "あね" },
        ],
        keyid: 2,
        image: "",
        sound: ""
    },
    {
        // l7
        id: 13,
        section: 1,
        text: "わたし　の　しゃしん　を　とってください</br>しゃしん=...  ",
        answers: [
            { id: 0, text: "写真" },
            { id: 1, text: "写県" },
            { id: 2, text: "与真" },
            { id: 3, text: "与県" },
        ],
        keyid: 0,
        image: "",
        sound: ""
    },
    {
        // l11　<u></u>
        id: 14,
        section: 1,
        text: "えき　は どこですか。</br>えき=...   ",
        answers: [
            { id: 0, text: "駅" },
            { id: 1, text: "馬" },
            { id: 2, text: "所" },
            { id: 3, text: "島" },
        ],
        keyid: 0,
        image: "",
        sound: ""
    },
    {
        // l13　<u></u>
        id: 15,
        section: 1,
        text: "トイレの でんき が つきません。</br>でんき=...  ",
        answers: [
            { id: 0, text: "電気" },
            { id: 1, text: "道具" },
            { id: 2, text: "海外" },
            { id: 3, text: "電話" },
        ],
        keyid: 0,
        image: "",
        sound: ""
    },
    {
        // l13
        id: 16,
        section: 2,
        text: `
        ゲームを(　　　 )好すきです。
        <hr>
        （　　　）に入るものは何ですか。
        `,
        answers: [
            { id: 0, text: "する" },
            { id: 1, text: "するのが" },
            { id: 2, text: "します" },
            { id: 3, text: "すること" },
        ],
        keyid: 1,
        image: "",
        sound: ""
    },
    {
        // 11 
        id: 17,
        section: 2,
        text: `
        あたま がいたくて、せきが　(　　 )んです。</br>
        <hr>
        （　　　）に入るものは何ですか。
        `,
        answers: [
            { id: 0, text: "でる" },
            { id: 1, text: "する" },
            { id: 2, text: "わく" },
            { id: 3, text: "さす" },
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
        来月の10日、けっこんする( 　　　)。
        <hr>
        （　　　）に入るものは何ですか。

        `,
        answers: [
            { id: 0, text: "ようとおもいます" },
            { id: 1, text: "つもりです" },
            { id: 2, text: "よていです" },
            { id: 3, text: "たいとおもいます" },
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
        しごと　は、まいあさ　9時(　　　)です。
       <hr>
       （　　　）に入るものは何ですか。
        `,
        answers: [
            { id: 0, text: "から" },
            { id: 1, text: "いつ" },
            { id: 2, text: "ぐらい" },
            { id: 3, text: "だから" },
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
        あした　スピーチコンテストが　あるんですが、スピーチの（　　）かたを　教えてください。</br>
        <hr>
        （　　　）に入るものは何ですか。`,
        answers: [
            { id: 0, text: "やった" },
            { id: 1, text: "やる" },
            { id: 2, text: "やって" },
            { id: 3, text: "やり" },
        ],
        keyid: 3,
        image: "",
        sound: ""
    },
    {
        id: 21,
        section: 2,
        text: `
        本は、100円　ショップ( 　　)かえます。
        <hr>
        （　　　）に入るものは何ですか`,
        answers: [
            { id: 0, text: "も" },
            { id: 1, text: "が" },
            { id: 2, text: "を" },
            { id: 3, text: "で" },
        ],
        keyid: 3,
        image: "",
        sound: ""
    },
    {
        // l 12
        id: 22,
        section: 2,
        text: `
        A：( 　　)かかりますか?</br>
        B：５００円です。</>
        <hr>
        （　　　）に入るものは何ですか`,
        answers: [
            { id: 0, text: "いくら" },
            { id: 1, text: "どうやって" },
            { id: 2, text: "なに" },
            { id: 3, text: "どんな" },
        ],
        keyid: 0,
        image: "",
        sound: ""
    },
    {
        // l 9
        id: 23,
        section: 2,
        text: `
        バスが（　　　　）きません。　
        <hr>
        （　　　）に入るものは何ですか`,
        answers: [
            { id: 0, text: "たくさん" },
            { id: 1, text: "そろそろ" },
            { id: 2, text: "やっと" },
            { id: 3, text: "なかなか" },
        ],
        keyid: 3,
        image: "",
        sound: ""
    },
    {
        // l 10
        id: 24,
        section: 2,
        text: `
        ゆき(　　　　)見たいです。</br>
        <hr>
        （　　　）に入るものは何ですか`,
        answers: [
            { id: 0, text: "が" },
            { id: 1, text: "に" },
            { id: 2, text: "で" },
            { id: 3, text: "の" },
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
        おなかが　つたのに、れいぞうこに（　　　）ありません。</br>
        <hr>
        （　　　）に入るものは何ですか。
        `,
        answers: [
            { id: 0, text: "どこも" },
            { id: 1, text: "なにも" },
            { id: 2, text: "どこか" },
            { id: 3, text: "なにか" },
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
        A：パンを　たべたいん（　　　　）、どこで　かえますか。</br>
        <hr>
        （　　　　）に入るものは何ですか `,
        answers: [
            { id: 0, text: "です" },
            { id: 1, text: "ですが" },
            { id: 2, text: "でした" },
            { id: 3, text: "ですか" },
        ],
        keyid: 1,
        image: "",
        sound: ""
    },
    {
        // l9
        id: 27,
        section: 2,
        text: "うみ　がみたいです。（　　　　）、おんせんにも　入りたいです。",
        answers: [
            { id: 0, text: "あとで" },
            { id: 1, text: "それから" },
            { id: 2, text: "それとも" },
            { id: 3, text: "ですから" },
        ],
        keyid: 1,
        image: "",
        sound: ""
    },
    {
        id: 28,
        section: 2,
        text: `
         A:かいしゃまで どうやって きましたか。</br>
         B:「　　」きました。
        
        <hr>
        「　　」に入るものはなんですか。
        `,
        answers: [
            { id: 0, text: "はたらいて" },
            { id: 1, text: "おいて" },
            { id: 2, text: "あるいて" },
            { id: 3, text: "かいて" },
        ],
        keyid: 2,
        image: "",
        sound: ""
    },
    {
        id: 29,
        section: 2,
        text: `
        （みせで）</br>
        ミラー：すみません、あのくろい　ぼうし　「　　」もらえませんか。
       
       <hr>
       「　　」に入るものはなんですか。
        `,
        answers: [
            { id: 0, text: "みせる" },
            { id: 1, text: "みせない" },
            { id: 2, text: "みせて" },
            { id: 3, text: "みせた" },
        ],
        keyid: 2,
        image: "",
        sound: ""
    },
    {
        id: 30,
        section: 2,
        text: `
        （うちで）</br>
        さとう:きょうは　さむいですが。　きのうの　よる　は　とっても「　　」。
       <hr>
       「　　」に入るものはなんですか。
        `,
        answers: [
            { id: 0, text: "あつかったです" },
            { id: 1, text: "あつくなかったです" },
            { id: 2, text: "あつくないです" },
            { id: 3, text: "あついです" },
        ],
        keyid: 0,
        image: "",
        sound: ""
    },
    {
        id: 31,
        section: 3,
        text: "めりさんはどうして そのきせつが いいとおもいますか。",
        answers: [
            { id: 0, text: "a" },
            { id: 1, text: "b" },
            { id: 2, text: "c" },
            { id: 3, text: "d" },
        ],
        keyid: 3,
        image: "Simulation JFT-7/31.PNG",
        sound: "Simulation JFT-7/31.mp3",
        play_count : 2
    },
    {
        id: 32,
        section: 3,
        text: "かむらさんは　なにがすきですか。",
        answers: [
            { id: 0, text: "さかな　しか　すき　じゃありません。" },
            { id: 1, text: "さかなが　すきです。" },
            { id: 2, text: "にくは　すきですが、さかなは　すきじゃありません。" },
            { id: 3, text: "さかなも　にくも　すきです。" },
        ],
        keyid: 3,
        image: "",
        sound: "Simulation JFT-7/32.mp3",
        play_count : 2
    },
    {
        id: 33,
        section: 3,
        text: "男の人は　まちは　どうだっていっていますか。",
        answers: [
            { id: 0, text: "a" },
            { id: 1, text: "b" },
            { id: 2, text: "c" },
            { id: 3, text: "d" },
        ],
        keyid: 0,
        image: "Simulation JFT-7/33.PNG",
        sound: "Simulation JFT-7/33.mp3",
        play_count : 2
    },
    {
        id: 34,
        section: 3,
        text: "ハイキングは　いつしますか",
        answers: [
            { id: 0, text: "あした" },
            { id: 1, text: "らいしゅう" },
            { id: 2, text: "どようび" },
            { id: 3, text: "このあと" },
        ],
        keyid: 2,
        image: "",
        sound: "Simulation JFT-7/34.mp3",
        play_count : 2
    },
    {
        id: 35,
        section: 3,
        text: "女のひとの仕事は　どうですか。",
        answers: [
            { id: 0, text: "a" },
            { id: 1, text: "b" },
            { id: 2, text: "c" },
            { id: 3, text: "d" },
        ],
        keyid: 1,
        image: "Simulation JFT-7/35.PNG",
        sound: "Simulation JFT-7/35.mp3",
        play_count : 2
    },
    {
        id: 36,
        section: 3,
        text: "男の人は　どう思っていますか",
        answers: [
            { id: 0, text: "しょうてんがい" },
            { id: 1, text: "おおどり" },
            { id: 2, text: "にぎやか" },
            { id: 3, text: "ひろい" },
        ],
        keyid: 2,
        image: "",
        sound: "Simulation JFT-7/36.mp3",
        play_count : 2
    },
    {
        id: 37,
        section: 3,
        text: "このひとは　どうして　げんきが　ありませんか。",
        answers: [
            { id: 0, text: "びょうきで　ぐあいが　わるかったら・" },
            { id: 1, text: "ねこが　かえってこないから。" },
            { id: 2, text: "ねこが　くるまに　ひかれたから。" },
            { id: 3, text: "ねこが　びょうきですから。" },
        ],
        keyid: 1,
        image: "",
        sound: "Simulation JFT-7/37.mp3",
        play_count : 2
    },
    {
        id: 38,
        section: 3,
        text: "この　ひとは　どうして　しゅくだい　を　だせませんか。",
        answers: [
            { id: 0, text: "しゅくだいを　やらなかったから。" },
            { id: 1, text: "しゅくだいの　じが　きたなかったから。" },
            { id: 2, text: "しゅくだいの　ばしょがを　まちがえたから。" },
            { id: 3, text: "しゅくだいを　だす　ひ　を　まちがえたから。" },
        ],
        keyid: 1,
        image: "",
        sound: "Simulation JFT-7/38.mp3",
        play_count : 2
    },
    {
        id: 39,
        section: 3,
        text: "",
        answers: [
            { id: 0, text: "1" },
            { id: 1, text: "2" },
            { id: 2, text: "3" },
            { id: 3, text: "4" },
        ],
        keyid: 2,
        image: "Simulation JFT-7/39.PNG",
        sound: "Simulation JFT-7/39.mp3",
        play_count : 2
    },
    {
        id: 40,
        section: 3,
        text: "男のひとは　このあと　なにを　しますか。",
        answers: [
            { id: 0, text: "1" },
            { id: 1, text: "2" },
            { id: 2, text: "3" },
            { id: 3, text: "4" },
        ],
        keyid: 3,
        image: "Simulation JFT-7/40.PNG",
        sound: "Simulation JFT-7/40.mp3",
        play_count : 2
    },
    {
        // l7
        id: 41,
        section: 4,
        text: `
        
        A:おそくなって、「　　」。<br>
        B:いいえ。だいじょうぶですよ。
        <hr>
        「　　」に入るものはなんですか。
        `,
        answers: [
            { id: 0, text: "ごめんください" },
            { id: 1, text: "すみません" },
            { id: 2, text: "しつれいします" },
            { id: 3, text: "おつかれさまです" },
        ],
        keyid: 1,
        image: "",
        sound: ""
    },
    {
        id: 42,
        section: 4,
        text: `
        <hr>
        きのう、本をかって、よる３じかん　ぐらい　よみました。<br>
        ２５０ページの本ですが、まだ１００ページぐらいあります。<br>
        <hr>
        「しつもん」この人は、何ページ　よみましたか。
        `,
        answers: [
            { id: 0, text: "５０ページぐらい" },
            { id: 1, text: "１５０ページぐらい" },
            { id: 2, text: "２００ページぐらい" },
            { id: 3, text: "２５０ページぐらい" },
        ],
        keyid: 1,
        image: "",
        sound: ""
    },
    {
        id: 43,
        section: 4,
        text: `
        (びょういんで)<hr>
        ななみ:あやか さんのクラスは(　　 )なんかい　ですか。<br>
        あやか:2かい　です。<br>
        <hr>
        ( 　　 )になにが　はいりますか。
        `,
        answers: [
            { id: 0, text: "しゅうに" },
            { id: 1, text: "しゅうで" },
            { id: 2, text: "しゅうを" },
            { id: 3, text: "しゅうが" },
        ],
        keyid: 0,
        image: "",
        sound: ""
    },
    {
        id: 44,
        section: 4,
        text: `
        <hr>
        サングラス　とは　なつの　てんきのいい日に かける　めがねですが<br>
        わたしは　ふゆに　よく　つかいます。日本では　ふゆに　よく　つよい　かぜがふくからだ。<br>
        <hr>
        この人が　サングラス　をかけるのは　どうしてですか。。
        `,
        answers: [
            { id: 0, text: "さむい　からです。" },
            { id: 1, text: "かぜが　つよいからです。" },
            { id: 2, text: "てんきが　いいからです。" },
            { id: 3, text: "よいあつい　からです。" },
        ],
        keyid: 1,
        image: "",
        sound: ""
    },
    {
        id: 45,
        section: 4,
        text: `
        45-46<hr>
        ひもで　しばらなくても　いい　ゴミは　どれですか。
        `,
        answers: [
            { id: 0, text: "新聞" },
            { id: 1, text: "あきかん" },
            { id: 2, text: "だんぼーる" },
            { id: 3, text: "かみパック" },
        ],
        keyid: 1,
        image: "Simulation JFT-7/45.PNG",
        sound: ""
    },
    {
        id: 46,
        section: 4,
        text: `
        45-46<hr>
        ペットボトルは　どうやって　すてますか。
        `,
        answers: [
            { id: 0, text: "つぶさないで、ひも　で　しばる。" },
            { id: 1, text: "つぶさないで、ひも　で　しばらなくても　いい。" },
            { id: 2, text: "つぶして、ひも　で　しばる。" },
            { id: 3, text: "つぶして、ひも　で　しばらなくても　いい。" },
        ],
        keyid: 1,
        image: "Simulation JFT-7/45.PNG",
        sound: ""
    },
    {
        id: 47,
        section: 4,
        text: `
        <hr>
        このお肉を　５００円ではらったら、おつりは　いくらですか。
         `,
        answers: [
            { id: 0, text: " 420円" },
            { id: 1, text: " 210円" },
            { id: 2, text: " 80円" },
            { id: 3, text: " 290円" },
        ],
        keyid: 3,
        image: "Simulation JFT-7/47.PNG",
        sound: ""
    },
    {
        id: 48,
        section: 4,
        text: `
        らいしゅう　から　しけんなので、べんきょう　しようとしたが、うちはうるさい。<br>
        それで、「しずかさでは　ここがいちばん」と友だちが　いう　きっさてんへ　いきました。<br>
        しかし、しずかすぎるから、_______。」<br>
        <hr>
        _______　に入るものは、つぎのどれがいちばんいいですか。
        `,
        answers: [
            { id: 0, text: "よくねむれた。" },
            { id: 1, text: "よくべんきょう　できた。" },
            { id: 2, text: "ねむってしまった。" },
            { id: 3, text: "べんきょう　してしまった。" },
        ],
        keyid: 2,
        image: "",
        sound: ""
    },
    {
        id: 49,
        section: 4,
        text: `
        わたしの　いえ　から　かいしゃ　まで ちかてつでも バスでも 行ける。<br>
        バスは　やすいの　ですが、　バスてい　は　とおいです。<br>
        ちかてつ　は　バスに　くらべると　たかいが、えきは　ちかい。<br>
        あめの　ときは　ちかてつ　に　のります。<br>
        <hr>
        ただしいものはどれですか。
        `,
        answers: [
            { id: 0, text: "おかねが　ないとき　ちかてつ　で　いきます。" },
            { id: 1, text: "あめの　とき　えきから　のります。" },
            { id: 2, text: "あるくのが　つけれるから　バス　に　のります。" },
            { id: 3, text: "でんしゃ　は　えきが　ちかいから　よく　のります。" },
        ],
        keyid: 1,
        image: "",
        sound: ""
    },
    {
        id: 50,
        section: 4,
        text: `
        ２０２３年５月１日<br>
        リキ　さん<br><br>
        この　まえ　の　はんし　なんですが、　Bクラス　で　いすが　もう　いつつ　ひつようです。<br>
        クラス　は　あさって　つかいますので、　あした　までに　じゅんびして　ください。<br><br>
        こみ　さん
        <hr>
        リキ　さん　いつ　までに　いす　を　かいますか。
        `,
        answers: [
            { id: 0, text: "２０２３年５月１日" },
            { id: 1, text: "２０２３年５月２日" },
            { id: 2, text: "２０２３年５月３日" },
            { id: 3, text: "２０２３年５月４日" },
        ],
        keyid: 1,
        image: "",
        sound: ""
    }
];