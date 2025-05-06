// test 
// 50 soal
// s1 15 bb 1  ba 15
// s2 15 bb 16 ba 30
// s3 10 bb 31 ba 40
// s4 10 bb 41 ba 50
// 50
const SimulationJFT8Questions = [{
        id: 1,
        section: 1,
        text: "これは何ですか。",
        answers: [
            { id: 0, text: "ケーキ" },
            { id: 1, text: "おかし" },
            { id: 2, text: "しょくじ" },
            { id: 3, text: "のみもの" },
        ],
        keyid: 1,
        image: "Simulation JFT-8/1.png",
        sound: ""
    },
    {
        id: 2,
        section: 1,
        text: "これは何ですか。",
        answers: [
            { id: 0, text: "かぜ　が　ふく" },
            { id: 1, text: "ねつ　が　でる" },
            { id: 2, text: "かお　が　いたい" },
            { id: 3, text: "ねつ　が　する" },
        ],
        keyid: 1,
        image: "Simulation JFT-8/2.PNG",
        sound: ""
    },
    {
        id: 3,
        section: 1,
        text: "トイレットペーパー　が　…",
        answers: [
            { id: 0, text: "かける" },
            { id: 1, text: "とぶ" },
            { id: 2, text: "なくなる" },
            { id: 3, text: "けす" },
        ],
        keyid: 2,
        image: "Simulation JFT-8/3.PNG",
        sound: ""
    },
    {
        id: 4,
        section: 1,
        text: "これは何ですか。",
        answers: [
            { id: 0, text: "はなみ" },
            { id: 1, text: "はる" },
            { id: 2, text: "もみじ" },
            { id: 3, text: "うみ" },
        ],
        keyid: 2,
        image: "Simulation JFT-8/4.PNG",
        sound: ""
    },
    {
        // l1 3
        id: 5,
        section: 1,
        text: "アメリカ　に　きて　、もう　２ねん　に（　　　　）",
        answers: [
            { id: 0, text: "すみます" },
            { id: 1, text: "きます" },
            { id: 2, text: "いきます" },
            { id: 3, text: "なります" },
        ],
        keyid: 3,
        image: "",
        sound: ""
    },
    {
        // l2 2 ganti
        id: 6,
        section: 1,
        text: `きのう　の　よる　は　とても　（　　　　）から、コート　を　きました。`,
        answers: [
            { id: 0, text: "あたたかい" },
            { id: 1, text: "あたたかった" },
            { id: 2, text: "あたたかくなかった" },
            { id: 3, text: "あたたかくない" },
        ],
        keyid: 2,
        image: "",
        sound: ""
    },
    {
        // l2 6
        id: 7,
        section: 1,
        text: "おととい　の　ゆき　が　（　　　）でしたね。",
        answers: [
            { id: 0, text: "たくさん" },
            { id: 1, text: "おおい" },
            { id: 2, text: "すごい" },
            { id: 3, text: "わるい" },
        ],
        keyid: 2,
        image: "",
        sound: ""
    },
    {
        // l4 4
        id: 8,
        section: 1,
        text: "ここは　こうつう　が　すくない　から　（　　　　）です。",
        answers: [
            { id: 0, text: "しゅみ" },
            { id: 1, text: "ふべん" },
            { id: 2, text: "べんきょう" },
            { id: 3, text: "にぎやか" },
        ],
        keyid: 1,
        image: "",
        sound: ""
    },
    {
        // l4
        id: 9,
        section: 1,
        text: "私は　妹　が　二人　います。</br>妹=.... ",
        answers: [
            { id: 0, text: "あね" },
            { id: 1, text: "あに" },
            { id: 2, text: "いもうと" },
            { id: 3, text: "いとうと" },
        ],
        keyid: 2,
        image: "",
        sound: ""
    },
    {
        // l2
        id: 10,
        section: 1,
        text: "来月　から　春　に　なりますね。</br>春=.... ",
        answers: [
            { id: 0, text: "はる" },
            { id: 1, text: "あき" },
            { id: 2, text: "なつ" },
            { id: 3, text: "ふゆ" },
        ],
        keyid: 0,
        image: "",
        sound: ""
    },
    {
        // l7
        id: 11,
        section: 1,
        text: "今年　は　２０２３年　です。</br>今年=...  ",
        answers: [
            { id: 0, text: "こんねん" },
            { id: 1, text: "らいねん" },
            { id: 2, text: "きょうねん" },
            { id: 3, text: "ことし" },
        ],
        keyid: 3,
        image: "",
        sound: ""
    },
    {
        // l7
        id: 12,
        section: 1,
        text: "私は　小さい　町に　すんでいます。</br>町=  ",
        answers: [
            { id: 0, text: "し" },
            { id: 1, text: "くに" },
            { id: 2, text: "まち" },
            { id: 3, text: "むら" },
        ],
        keyid: 2,
        image: "",
        sound: ""
    },
    {
        // l7
        id: 13,
        section: 1,
        text: "あの人は　にんき　が　ありますね。</br>にんき=...  ",
        answers: [
            { id: 0, text: "有名" },
            { id: 1, text: "人工" },
            { id: 2, text: "人気" },
            { id: 3, text: "名前" },
        ],
        keyid: 2,
        image: "",
        sound: ""
    },
    {
        // l11　<u></u>
        id: 14,
        section: 1,
        text: "じんじゃ　の　とびら　の　いろは　くろい　です。</br>くろい=...   ",
        answers: [
            { id: 0, text: "白い" },
            { id: 1, text: "青い" },
            { id: 2, text: "赤い" },
            { id: 3, text: "黒い" },
        ],
        keyid: 3,
        image: "",
        sound: ""
    },
    {
        // l13　<u></u>
        id: 15,
        section: 1,
        text: "母　の　しごと　は　なんですか。</br>しごと=...  ",
        answers: [
            { id: 0, text: "就職" },
            { id: 1, text: "学校" },
            { id: 2, text: "仕事" },
            { id: 3, text: "勉強" },
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
        この　みち　を　まっすぐ　いって、　（　　　）　の　かど　を　みぎに　まがって　ください。
        <hr>
        （　　　）に入るものは何ですか。
        `,
        answers: [
            { id: 0, text: "にこ" },
            { id: 1, text: "にかい" },
            { id: 2, text: "ふたつめ" },
            { id: 3, text: "ふたつの" },
        ],
        keyid: 2,
        image: "",
        sound: ""
    },
    {
        // 11 
        id: 17,
        section: 2,
        text: `
        すもう　を　（　　）ことが　ありますか。</br>
        <hr>
        （　　　）に入るものは何ですか。
        `,
        answers: [
            { id: 0, text: "みる" },
            { id: 1, text: "みた" },
            { id: 2, text: "みて" },
            { id: 3, text: "みない" },
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
        かんじ　（　）むずかしい　ですが、ひらがな　（　）かんたんです。
        <hr>
        （　　　）に入るものは何ですか。

        `,
        answers: [
            { id: 0, text: "は" },
            { id: 1, text: "も" },
            { id: 2, text: "に" },
            { id: 3, text: "が" },
        ],
        keyid: 0,
        image: "",
        sound: ""
    },
    {
        // l16
        id: 19,
        section: 2,
        text: `
        この　あと　しやくしょ　ようじ　が　あるから、しやくしょ　に　（　　　　　）。
       <hr>
       （　　　）に入るものは何ですか。
        `,
        answers: [
            { id: 0, text: "いかなければなりません" },
            { id: 1, text: "いかないで　ください" },
            { id: 2, text: "いったほうがいいです" },
            { id: 3, text: "いかなくてもいいです" },
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
        ともだち　に　ききました、　あの　れすとらん　の　りょうり　（　　　　）ですよ。</br>
        <hr>
        （　　　）に入るものは何ですか。`,
        answers: [
            { id: 0, text: "おいしい" },
            { id: 1, text: "おいし" },
            { id: 2, text: "おいしだ" },
            { id: 3, text: "おいしな" },
        ],
        keyid: 0,
        image: "",
        sound: ""
    },
    {
        id: 21,
        section: 2,
        text: `
        これ、わたしが　つくった　ケーキ　です、（　　　）ください。
        <hr>
        （　　　）に入るものは何ですか`,
        answers: [
            { id: 0, text: "たべていって" },
            { id: 1, text: "たべてしまって" },
            { id: 2, text: "たべておいて" },
            { id: 3, text: "たべてみて" },
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
        A：きんえん( 　　)どいういみですか?</br>
        B：たばこ　を　すって　は　いけません。</>
        <hr>
        （　　　）に入るものは何ですか`,
        answers: [
            { id: 0, text: "とは" },
            { id: 1, text: "のは" },
            { id: 2, text: "ので" },
            { id: 3, text: "との" },
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
        にほんご　を　（　　　）ながら、おんがく　を　きいています。
        <hr>
        （　　　）に入るものは何ですか`,
        answers: [
            { id: 0, text: "まなんで" },
            { id: 1, text: "まなび" },
            { id: 2, text: "まなぶ" },
            { id: 3, text: "まなばない" },
        ],
        keyid: 1,
        image: "",
        sound: ""
    },
    {
        // l 10
        id: 24,
        section: 2,
        text: `
        くだもの、たとえば　すいか（　　）がすきです。</br>
        <hr>
        （　　　）に入るものは何ですか`,
        answers: [
            { id: 0, text: "など" },
            { id: 1, text: "も" },
            { id: 2, text: "まで" },
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
        あしたの　りょこうなんですが、うちあわせ　じかん　は　（　　　　）。</br>
        <hr>
        （　　　）に入るものは何ですか。
        `,
        answers: [
            { id: 0, text: "どうこですか" },
            { id: 1, text: "どんなじかんですか" },
            { id: 2, text: "どうですか" },
            { id: 3, text: "なにか" },
        ],
        keyid: 2,
        image: "",
        sound: ""
    },
    {
        // l9
        id: 26,
        section: 2,
        text: `
        この　ぼたん　を　（　　　　）と、みずが　でます。</br>
        <hr>
        （　　　　）に入るものは何ですか `,
        answers: [
            { id: 0, text: "おした" },
            { id: 1, text: "おさない" },
            { id: 2, text: "おして" },
            { id: 3, text: "おす" },
        ],
        keyid: 3,
        image: "",
        sound: ""
    },
    {
        // l9
        id: 27,
        section: 2,
        text: "けんこうの　ために、うんどう　を　する（　　　　）。",
        answers: [
            { id: 0, text: "いいですよ" },
            { id: 1, text: "ください" },
            { id: 2, text: "ほうが　いいです" },
            { id: 3, text: "ように　しています" },
        ],
        keyid: 3,
        image: "",
        sound: ""
    },
    {
        id: 28,
        section: 2,
        text: `
         A:あの　かがみ　どこ　で　かったん　ですか。</br>
         B:これは　ともだちが　（　　）　かがみ　です。ともだち　から　もらいました。
        
        <hr>
        （　　）に入るものはなんですか。
        `,
        answers: [
            { id: 0, text: "つくる" },
            { id: 1, text: "つくった" },
            { id: 2, text: "つくろう" },
            { id: 3, text: "つくって" },
        ],
        keyid: 1,
        image: "",
        sound: ""
    },
    {
        id: 29,
        section: 2,
        text: `
        （みせで）</br>
        ミラー：すみません、さっき　ちゅうもん　したのですが、たべもの　が　「　　」こないん　ですが。
       
       <hr>
       「　　」に入るものはなんですか。
        `,
        answers: [
            { id: 0, text: "あまり" },
            { id: 1, text: "なかなか" },
            { id: 2, text: "とっても" },
            { id: 3, text: "よく" },
        ],
        keyid: 1,
        image: "",
        sound: ""
    },
    {
        id: 30,
        section: 2,
        text: `
        これは　いたみ　を　おさえる（　　　）です。
        <hr>
       （　　　）に入るものはなんですか。
        `,
        answers: [
            { id: 0, text: "テーブル" },
            { id: 1, text: "くすり" },
            { id: 2, text: "ほけんしょ" },
            { id: 3, text: "はし" },
        ],
        keyid: 1,
        image: "",
        sound: ""
    },
    {
        id: 31,
        section: 3,
        text: "あした　どこ　で　しゅうごう　することに　なりましたか。",
        answers: [
            { id: 0, text: "えきまえの　へいわ　の　とり　の　ぞう。" },
            { id: 1, text: "えきの　かいさつ。" },
            { id: 2, text: "えきの　なか。" },
            { id: 3, text: "えきの　まえの　かいさつ。" },
        ],
        keyid: 1,
        image: "",
        sound: "Simulation JFT-8/31.mp3",
        play_count : 2
    },
    {
        id: 32,
        section: 3,
        text: "このひとたちは　さいごに　どこに　いきますか。",
        answers: [
            { id: 0, text: "フードコートに　いきます。" },
            { id: 1, text: "ATM　に　いきます。" },
            { id: 2, text: "スポーツてん　に　いきます。" },
            { id: 3, text: "ゲーム　コーナー。" },
        ],
        keyid: 3,
        image: "",
        sound: "Simulation JFT-8/32.mp3",
        play_count : 2
    },
    {
        id: 33,
        section: 3,
        text: "女　の　ひとは　なに　を　しなければ　なりませんか。",
        answers: [
            { id: 0, text: "おとこ　の　ひとに　にほんご　を　おしえる。" },
            { id: 1, text: "ちらし　を　もらって、　おとこ　の　ひとに　あげる。" },
            { id: 2, text: "おとこ　の　ひと　を、にほんご　の　クラス　に　つれて　いく。" },
            { id: 3, text: "にほんご　くらす　を　おとこの　ひとに　しょうかい　する。" },
        ],
        keyid: 1,
        image: "",
        sound: "Simulation JFT-8/33.mp3",
        play_count : 2
    },
    {
        id: 34,
        section: 3,
        text: "この　コピーき　で　いちばん　たかい　プリント　は　どれですか。",
        answers: [
            { id: 0, text: "りょうめん　コピーを　する。" },
            { id: 1, text: "カラーコピー　を　かためん　で　いんさつ　する。　" },
            { id: 2, text: "カラーコピー　を　りょうめん　コピーで　いんさつ　する。" },
            { id: 3, text: "かためん　コピーを　する。" },
        ],
        keyid: 2,
        image: "",
        sound: "Simulation JFT-8/34.mp3",
        play_count : 2
    },
    {
        id: 35,
        section: 3,
        text: "ゆうびん　きょく　は　どこ　ですか。",
        answers: [
            { id: 0, text: "a" },
            { id: 1, text: "b" },
            { id: 2, text: "c" },
            { id: 3, text: "d" },
        ],
        keyid: 1,
        image: "Simulation JFT-8/35.PNG",
        sound: "Simulation JFT-8/35.mp3",
        play_count : 2
    },
    {
        id: 36,
        section: 3,
        text: "この　ひと　は　どこ　に　いきますか。",
        answers: [
            { id: 0, text: "a" },
            { id: 1, text: "b" },
            { id: 2, text: "c" },
            { id: 3, text: "d" },
        ],
        keyid: 1,
        image: "Simulation JFT-8/36.PNG",
        sound: "Simulation JFT-8/36.mp3",
        play_count : 2
    },
    {
        id: 37,
        section: 3,
        text: "この　ひとは　これから　なにを　しますか。",
        answers: [
            { id: 0, text: "a" },
            { id: 1, text: "b" },
            { id: 2, text: "c" },
            { id: 3, text: "d" },
        ],
        keyid: 0,
        image: "Simulation JFT-8/37.PNG",
        sound: "Simulation JFT-8/37.mp3",
        play_count : 2
    },
    {
        id: 38,
        section: 3,
        text: "どの　ふくですか。",
        answers: [
            { id: 0, text: "1" },
            { id: 1, text: "2" },
            { id: 2, text: "3" },
            { id: 3, text: "4" },
        ],
        keyid: 1,
        image: "Simulation JFT-8/38.PNG",
        sound: "Simulation JFT-8/38.mp3",
        play_count : 2
    },
    {
        id: 39,
        section: 3,
        text: "なにを　あげますか。",
        answers: [
            { id: 0, text: "1" },
            { id: 1, text: "2" },
            { id: 2, text: "3" },
            { id: 3, text: "4" },
        ],
        keyid: 1,
        image: "Simulation JFT-8/39.PNG",
        sound: "Simulation JFT-8/39.mp3",
        play_count : 2
    },
    {
        id: 40,
        section: 3,
        text: "",
        answers: [
            { id: 0, text: "1" },
            { id: 1, text: "2" },
            { id: 2, text: "3" },
            { id: 3, text: "4" },
        ],
        keyid: 2,
        image: "Simulation JFT-8/40.PNG",
        sound: "Simulation JFT-8/40.mp3",
        play_count : 2
    },
    {
        // l7
        id: 41,
        section: 4,
        text: `
        
Ａ：よかったら「　　」。<br>
Ｂ：ありがとうございます。おねがいします。<br>

        <hr>
        「　　」に入るものはなんですか。
        `,
        answers: [
            { id: 0, text: "てつだいませんか" },
            { id: 1, text: "てつだってください" },
            { id: 2, text: "てつだいましょうか" },
            { id: 3, text: "てつだいましたか" },
        ],
        keyid: 2,
        image: "",
        sound: ""
    },
    {
        id: 42,
        section: 4,
        text: `
        
Ａ：あ「　　」、ひ　けす　の　を　わすれました。<br>
Ｂ：それは　たいへん、　はやく　もどらないと。<br>

        <hr>
        「　　」に入るものはなんですか。
        `,
        answers: [
            { id: 0, text: "いけない" },
            { id: 1, text: "だめだ" },
            { id: 2, text: "よかった" },
            { id: 3, text: "いかない" },
        ],
        keyid: 0,
        image: "",
        sound: ""
    },
    {
        id: 43,
        section: 4,
        text: `
Ａ：しゃちょう「　　」。<br>
Ｂ：はい、どうしましたか。<br>

        <hr>
        「　　」に入るものはなんですか。
        `,
        answers: [
            { id: 0, text: "おせわになりました" },
            { id: 1, text: "おじゃましました" },
            { id: 2, text: "ちょっと、いいでしょうか" },
            { id: 3, text: "どうしますか" },
        ],
        keyid: 2,
        image: "",
        sound: ""
    },
    {
        id: 44,
        section: 4,
        text: `
Ａ：きょうで　さいご　ですね、「　　」。<br>
Ｂ：はい、みなさん　も　「　　」。<br>

        <hr>
        「　　」に入るものはなんですか。
        `,
        answers: [
            { id: 0, text: "おせわ　に　なります" },
            { id: 1, text: "おげんきで" },
            { id: 2, text: "よろしくおねがいします" },
            { id: 3, text: "じゃ、また" },
        ],
        keyid: 1,
        image: "",
        sound: ""
    },
    {
        id: 45,
        section: 4,
        text: `
Ａ：「　　」。<br>
Ｂ：あ、はい、いま　すぐ　いきます。<br>

        <hr>
        「　　」に入るものはなんですか。
        `,
        answers: [
            { id: 0, text: "おじゃまします" },
            { id: 1, text: "ごめんください" },
            { id: 2, text: "しつれいします" },
            { id: 3, text: "いらっしゃい" },
        ],
        keyid: 1,
        image: "",
        sound: ""
    },
    {
        id: 46,
        section: 4,
        text: `
        ふりかけ　を　かける　まえに、　なにを　しますか。
        `,
        answers: [
            { id: 0, text: "ソース　を　かけて、まぜます。" },
            { id: 1, text: "さんぷん　まちます。" },
            { id: 2, text: "おゆ　を　すてます。" },
            { id: 3, text: "おゆ　を　いれます。" },
        ],
        keyid: 0,
        image: "Simulation JFT-8/46.PNG",
        sound: ""
    },
    {
        id: 47,
        section: 4,
        text: `
        <hr>
        この　ひとは　なに　を　したい　ですか。
         `,
        answers: [
            { id: 0, text: "にほん　の　おたく　に　いきたい。" },
            { id: 1, text: "てんぷら　の　つくり　かた　を　ならいたい。" },
            { id: 2, text: "かぞくに　よろしく　と　つたえたい。" },
            { id: 3, text: "りょうり　を　つくりたい。" },
        ],
        keyid: 1,
        image: "Simulation JFT-8/47.PNG",
        sound: ""
    },
    {
        id: 48,
        section: 4,
        text: `
         この　くすり　は　いつ　が　のめないん　ですか。
        `,
        answers: [
            { id: 0, text: "あさ" },
            { id: 1, text: "ひる" },
            { id: 2, text: "よる" },
            { id: 3, text: "ゆうがた" },
        ],
        keyid: 1,
        image: "Simulation JFT-8/48.PNG",
        sound: ""
    },
    {
        id: 49,
        section: 4,
        text: `
        この　ひと　は　なに　を　いいたい　ですか。
        `,
        answers: [
            { id: 0, text: "さむく　なりました。" },
            { id: 1, text: "あさ　に　なりました。" },
            { id: 2, text: "すずしくンありました。" },
            { id: 3, text: "あたらしい　コート　を　かいました。" },
        ],
        keyid: 3,
        image: "Simulation JFT-8/49.PNG",
        sound: ""
    },
    {
        id: 50,
        section: 4,
        text: `
わたしの うちに くろい ねこと ちゃいろの いぬが います。どちらも とても かわいいです。いつも 外で あそんでいます。<br><br>
        <hr>
        ただしいものはどれですか。
        `,
        answers: [
            { id: 0, text: "ねこもいぬもくろいです。" },
            { id: 1, text: "ねこもいぬもかわいいです。" },
            { id: 2, text: "ねこは外であそびますが、いぬはあそびません。" },
            { id: 3, text: "ねこはくろくないですが、いぬはくろいです。" },
        ],
        keyid: 1,
        image: "",
        sound: ""
    }
];