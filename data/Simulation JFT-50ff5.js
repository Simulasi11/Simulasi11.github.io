// test 
// 50 soal
// s1 15 bb 1  ba 15
// s2 15 bb 16 ba 30
// s3 10 bb 31 ba 40
// s4 10 bb 41 ba 50
// 50
const SimulationJFT5Questions = [{
        id: 1,
        section: 1,
        text: "これは何ですか。 ",
        answers: [
            { id: 0, text: "むきます" },
            { id: 1, text: "まぜます" },
            { id: 2, text: "つきます" },
            { id: 3, text: "なきます" },
        ],
        keyid: 0,
        image: "Simulation JFT-5/1.PNG",
        sound: ""
    },
    {
        id: 2,
        section: 1,
        text: "これは何ですか。 ",
        answers: [
            { id: 0, text: "はなび" },
            { id: 1, text: "はなみ" },
            { id: 2, text: "ぼのどり" },
            { id: 3, text: "ひので" },
        ],
        keyid: 0,
        image: "Simulation JFT-5/2.PNG",
        sound: ""
    },
    {
        id: 3,
        section: 1,
        text: "これは何ですか。 ",
        answers: [
            { id: 0, text: "そうじき" },
            { id: 1, text: "すいはんき" },
            { id: 2, text: "せんたくき" },
            { id: 3, text: "じどうはんばいき" },
        ],
        keyid: 1,
        image: "Simulation JFT-5/3.PNG",
        sound: ""
    },
    {
        id: 4,
        section: 1,
        text: "これは何ですか。 ",
        answers: [
            { id: 0, text: "こずい" },
            { id: 1, text: "じしん" },
            { id: 2, text: "つなみ" },
            { id: 3, text: "たいふう" },
        ],
        keyid: 3,
        image: "Simulation JFT-5/4.PNG",
        sound: ""
    },
    {
        // l1 3
        id: 5,
        section: 1,
        text: "友だちが　びょうき　なので、（　　　）に行きました。",
        answers: [
            { id: 0, text: "おみまい" },
            { id: 1, text: "りょこう" },
            { id: 2, text: "にゅういん" },
            { id: 3, text: "かいもの" },
        ],
        keyid: 0,
        image: "",
        sound: ""
    },
    {
        // l2 2 ganti
        id: 6,
        section: 1,
        text: `私は（　　　）があるので、カニは たべられませんでした。`,
        answers: [
            { id: 0, text: "ハラル" },
            { id: 1, text: "バター" },
            { id: 2, text: "アレルギー" },
            { id: 3, text: "バーベキュー" },
        ],
        keyid: 2,
        image: "",
        sound: ""
    },
    {
        // l2 6
        id: 7,
        section: 1,
        text: "外の　けしき が好き　ですから、いつも（　　　）に　すわります。 ",
        answers: [
            { id: 0, text: "ざせき" },
            { id: 1, text: "となり" },
            { id: 2, text: "まどぎわ" },
            { id: 3, text: "つうろうがわ" },
        ],
        keyid: 2,
        image: "",
        sound: ""
    },
    {
        // l4 4
        id: 8,
        section: 1,
        text: "来月の25日は（　　　）です。20さい　の　人たちが　あつまって、パーティーを　しています。",
        answers: [
            { id: 0, text: "おしょうがつ" },
            { id: 1, text: "せいじんしき" },
            { id: 2, text: "はなびたいかい" },
            { id: 3, text: "たなばた" },
        ],
        keyid: 1,
        image: "",
        sound: ""
    },
    {
        // l4
        id: 9,
        section: 1,
        text: "はじめて　日本に　来たときは、中国人に　たすけられました。</br>中国人=.... ",
        answers: [
            { id: 0, text: "ちゅうごくじん" },
            { id: 1, text: "がいこくじん" },
            { id: 2, text: "にほんじん" },
            { id: 3, text: "かんこくじん" },
        ],
        keyid: 0,
        image: "",
        sound: ""
    },
    {
        // l2
        id: 10,
        section: 1,
        text: "毎日　夜まで　べんきょうしています</br>夜=.... ",
        answers: [
            { id: 0, text: "ふゆ" },
            { id: 1, text: "あさ" },
            { id: 2, text: "ひる" },
            { id: 3, text: "よる" },
        ],
        keyid: 3,
        image: "",
        sound: ""
    },
    {
        // l7
        id: 11,
        section: 1,
        text: "夕方になると、空が赤くなります</br>赤=...  ",
        answers: [
            { id: 0, text: "くろ" },
            { id: 1, text: "しろ" },
            { id: 2, text: "あか" },
            { id: 3, text: "あお" },
        ],
        keyid: 2,
        image: "",
        sound: ""
    },
    {
        // l7
        id: 12,
        section: 1,
        text: "妹のしゅみは　花見です</br>花見=  ",
        answers: [
            { id: 0, text: "すいえい" },
            { id: 1, text: "はなみ" },
            { id: 2, text: "つり" },
            { id: 3, text: "うんどう" },
        ],
        keyid: 1,
        image: "",
        sound: ""
    },
    {
        // l7
        id: 13,
        section: 1,
        text: "くるま　が　ほしいです</br>くるま=...  ",
        answers: [
            { id: 0, text: "車" },
            { id: 1, text: "思" },
            { id: 2, text: "重" },
            { id: 3, text: "転" },
        ],
        keyid: 0,
        image: "",
        sound: ""
    },
    {
        // l11　<u></u>
        id: 14,
        section: 1,
        text: "ももじは　あき　のおき　の　みられます</br>あき=...   ",
        answers: [
            { id: 0, text: "秋" },
            { id: 1, text: "冬" },
            { id: 2, text: "夏" },
            { id: 3, text: "春" },
        ],
        keyid: 0,
        image: "",
        sound: ""
    },
    {
        // l13　<u></u>
        id: 15,
        section: 1,
        text: "ひゃくにん　の　ともだし　います。 </br>ひゃくにん=...  ",
        answers: [
            { id: 0, text: "自人" },
            { id: 1, text: "白人" },
            { id: 2, text: "百人" },
            { id: 3, text: "日人" },
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
        A：あつい　ですから、うすいシャツを（　　　）いったほうが　いいとおもう。</br>
        `,
        answers: [
            { id: 0, text: "きって" },
            { id: 1, text: "まって" },
            { id: 2, text: "もって" },
            { id: 3, text: "のって" },
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
        B：ぐんまけんは　何が　いいですか？</br>
        A：（　　　）がいいですよ、りょかん　がたくさん　ありますから。</br>
        <hr>
        ＿＿＿に入るものは何ですか。
        `,
        answers: [
            { id: 0, text: "おんせん" },
            { id: 1, text: "はなび" },
            { id: 2, text: "こうつう" },
            { id: 3, text: "デパート" },
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
        
        れいぞうこに（　　）入っていません。
        <hr>
        ＿に入るものは何ですか。

        `,
        answers: [
            { id: 0, text: "何が" },
            { id: 1, text: "何も" },
            { id: 2, text: "何と" },
            { id: 3, text: "なんの" },
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
       明日の　しゅくだい　なんですが、50ページの３ばんめ（　　）やってください。
        `,
        answers: [
            { id: 0, text: "だけ" },
            { id: 1, text: "しか" },
            { id: 2, text: "ぜんぜん" },
            { id: 3, text: "なかなか" },
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
        B：クリスマスでは、みんな　何をしましたか</br>
        A：あぞく　（　）あつまります。</br>`,
        answers: [
            { id: 0, text: "で" },
            { id: 1, text: "と" },
            { id: 2, text: "に" },
            { id: 3, text: "か" },
        ],
        keyid: 1,
        image: "",
        sound: ""
    },
    {
        id: 21,
        section: 2,
        text: `
        チケットを　かえる（　　）、あさから　ならんでいました。
        <hr>
        ＿＿＿に入るものは何ですか。`,
        answers: [
            { id: 0, text: "ように" },
            { id: 1, text: "なら" },
            { id: 2, text: "ても" },
            { id: 3, text: "が" },
        ],
        keyid: 0,
        image: "",
        sound: ""
    },
    {
        // l 12
        id: 22,
        section: 2,
        text: `
        A：りょうり　は　日本と　インドネシアと　どちらが　おいしいですか</br>
        B：＿＿＿＿＿おいしいと　おもいます</>
        <hr>
        ＿＿＿に入るものは何ですか。`,
        answers: [
            { id: 0, text: "りょうり" },
            { id: 1, text: "ほうがいい" },
            { id: 2, text: "どちらも" },
            { id: 3, text: "どれ" },
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
        もうよる　ですね（　　　）かえらないと。`,
        answers: [
            { id: 0, text: "とっても" },
            { id: 1, text: "そろそろ" },
            { id: 2, text: "どんどん" },
            { id: 3, text: "なかなか" },
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
        A：あたらしい　サイトが　いつ（　　　）か</br>
        B：あしたです。</br>
        <hr>
        ＿＿＿に入るものは何ですか。`,
        answers: [
            { id: 0, text: "みられない" },
            { id: 1, text: "みられた" },
            { id: 2, text: "みられて" },
            { id: 3, text: "みられます" },
        ],
        keyid: 3,
        image: "",
        sound: ""
    },
    {
        // l 13
        id: 25,
        section: 2,
        text: `
        A：ピアノを　ならっていると　きいたんですが。どうですか。</br>
        B：そうですね、いまは　すこし（　　　）</br>
        <hr>
        ＿＿＿に入るものは何ですか。
        `,
        answers: [
            { id: 0, text: "ひけました" },
            { id: 1, text: "ひけるようになりました" },
            { id: 2, text: "ひけたほうがいいです" },
            { id: 3, text: "ひけたらいいです" },
        ],
        keyid: 1,
        image: "",
        sound: ""
    },
    {
        // l9
        id: 26,
        section: 2,
        text: "じょうず　になる（　　　）、わたしは　りょうりを　もっとならいたいです。",
        answers: [
            { id: 0, text: "なら" },
            { id: 1, text: "つもり" },
            { id: 2, text: "ことを" },
            { id: 3, text: "ために" },
        ],
        keyid: 3,
        image: "",
        sound: ""
    },
    {
        // l9
        id: 27,
        section: 2,
        text: "おふろ　ちょっと　さむいので、少し（　　）してください。",
        answers: [
            { id: 0, text: "あつく" },
            { id: 1, text: "あつかった" },
            { id: 2, text: "あつくない" },
            { id: 3, text: "あつい" },
        ],
        keyid: 0,
        image: "",
        sound: ""
    },
    {
        id: 28,
        section: 2,
        text: `
        お客さま：すみません　このけいたい　を　２（　　）ください。</br>
        店員　　：わかりました、しょうしょうおまちください。</br>
        <hr>
        （　　）に入るものはなんですか。
        `,
        answers: [
            { id: 0, text: "まい" },
            { id: 1, text: "だい" },
            { id: 2, text: "かい" },
            { id: 3, text: "さつ" },
        ],
        keyid: 1,
        image: "",
        sound: ""
    },
    {
        id: 29,
        section: 2,
        text: `
        店員　　：この　けいたい　は　なにが　いいですか。</br>
        お客さま：たくさん　ゲームあそんでも、（　　）あつくならないです。</br>
        
        <hr>
        （　　）に入るものはなんですか。
        `,
        answers: [
            { id: 0, text: "なかなか" },
            { id: 1, text: "たまに" },
            { id: 2, text: "よく" },
            { id: 3, text: "いつも" },
        ],
        keyid: 0,
        image: "",
        sound: ""
    },
    {
        id: 30,
        section: 2,
        text: `
        お客さま：（　　）。が　あります。</br>
        店員　　：いいですね、いくら　に　なりますか。</br>
        お客さま：３万円です。３０００円　やすくなります。</br>
        <hr>
        （　　）に入るものはなんですか。
        `,
        answers: [
            { id: 0, text: "キャンペーン" },
            { id: 1, text: "わりびき" },
            { id: 2, text: "ねあげ" },
            { id: 3, text: "むりょう" },
        ],
        keyid: 1,
        image: "",
        sound: ""
    },
    {
        id: 31,
        section: 3,
        text: "おとこ　の人はしょうらい　何をしたいですか。 ",
        answers: [
            { id: 0, text: "a" },
            { id: 1, text: "b" },
            { id: 2, text: "c" },
            { id: 3, text: "d" },
        ],
        keyid: 3,
        image: "Simulation JFT-5/31.PNG",
        sound: "Simulation JFT-5/31.mp3",
        play_count : 2
    },
    {
        id: 32,
        section: 3,
        text: "せんぽは　どれですか",
        answers: [
            { id: 0, text: "しょうてんがいに　ある　あおいかんばんの　お店。" },
            { id: 1, text: "ラーメンが　おいしいですが、りょうが　すくない　お店です。" },
            { id: 2, text: "しょうてんがい　の　前に　ある　お店せ。" },
            { id: 3, text: "ラーメンが　おいしくて、やすい　お店です。" },
        ],
        keyid: 3,
        image: "",
        sound: "Simulation JFT-5/32.mp3",
        play_count : 2
    },
    {
        id: 33,
        section: 3,
        text: "おとこ　の人は　どうやってコーヒーをのみますか。",
        answers: [
            { id: 0, text: "さとうと　ミルクを　いれて　飲みます" },
            { id: 1, text: "さとうを　いれて　飲みます" },
            { id: 2, text: "さとう　いれないで　飲みます" },
            { id: 3, text: "ミルクを　いれて　飲みます" },
        ],
        keyid: 1,
        image: "",
        sound: "Simulation JFT-5/33.mp3",
        play_count : 2
    },
    {
        id: 34,
        section: 3,
        text: "ばすていは　どこですか",
        answers: [
            { id: 0, text: "a" },
            { id: 1, text: "b" },
            { id: 2, text: "c" },
            { id: 3, text: "d" },
        ],
        keyid: 3,
        image: "Simulation JFT-5/34.PNG",
        sound: "Simulation JFT-5/34.mp3",
        play_count : 2
    },
    {
        id: 35,
        section: 3,
        text: "女の人は何をすればいいですか。",
        answers: [
            { id: 0, text: "先生に行きます。" },
            { id: 1, text: "あいきどうの　ふくを　買います。" },
            { id: 2, text: "T-シャツで行きます。" },
            { id: 3, text: "あいていませんので、かえります。" },
        ],
        keyid: 2,
        image: "",
        sound: "Simulation JFT-5/35.mp3",
        play_count : 2
    },
    {
        id: 36,
        section: 3,
        text: "まちがっているのを　一つえらびなさい",
        answers: [
            { id: 0, text: "おとこ　はもう　たべません。" },
            { id: 1, text: "おこのみやきは　おいしいです。" },
            { id: 2, text: "おとこ　の人の　くに　の　りょうりと　にていません。" },
            { id: 3, text: "おとこ　の人が　たべた　りょうりはおこのみやきです。" },
        ],
        keyid: 2,
        image: "",
        sound: "Simulation JFT-5/36.mp3",
        play_count : 2
    },
    {
        id: 37,
        section: 3,
        text: "こうえんでは　何ができませんか",
        answers: [
            { id: 0, text: "こどもと　あそびます" },
            { id: 1, text: "たばこを　すいます" },
            { id: 2, text: "たばこを　かいます" },
            { id: 3, text: "きょうりょく　します" },
        ],
        keyid: 1,
        image: "",
        sound: "Simulation JFT-5/37.mp3",
        play_count : 2
    },
    {
        id: 38,
        section: 3,
        text: "せつめいと　まちがっているのは　どれですか。",
        answers: [
            { id: 0, text: "ひとり400円です。" },
            { id: 1, text: "タオルは250円で買えます。" },
            { id: 2, text: "きゅうけいしつは　二かいに　あります。" },
            { id: 3, text: "シャンプーは　買わなくてもいいです。" },
        ],
        keyid: 1,
        image: "",
        sound: "Simulation JFT-5/38.mp3",
        play_count : 2
    },
    {
        id: 39,
        section: 3,
        text: "ただしいのは　どれですか。",
        answers: [
            { id: 0, text: "たいふうで　わかい女の人が　すぐ　ひなんしています。" },
            { id: 1, text: "ひなんの所は　小学生のとなりです。" },
            { id: 2, text: "バラこうえん　にひなんします。" },
            { id: 3, text: "食べ物と 飲み物を 持って行った方がいいです。" },
        ],
        keyid: 3,
        image: "",
        sound: "Simulation JFT-5/39.mp3",
        play_count : 2
    },
    {
        id: 40,
        section: 3,
        text: "アリさんは　何を　しなければなりませんか。",
        answers: [
            { id: 0, text: "部屋のつくえを　ならべて、パソコンと　プロジェクトを　じゅんびします。" },
            { id: 1, text: "しりょうの　じゅんびを　します" },
            { id: 2, text: "しりょうを　コピーして、つくえの上に じゅんび　します。" },
            { id: 3, text: "飲み物を　外の　店に　たのみます。" },
        ],
        keyid: 0,
        image: "",
        sound: "Simulation JFT-5/40.mp3",
        play_count : 2
    },
    {
        // l7
        id: 41,
        section: 4,
        text: `
        きのう　の　ゆうがた　は　かいしゃの　ひと　と　はなみに　いきました。そのあと、カラオケに　いきました。
        <hr>
        きのう よる　は何をしましたか。
        `,
        answers: [
            { id: 0, text: "かいしゃ　に　いきました。" },
            { id: 1, text: "はなみ　に　いきました。" },
            { id: 2, text: "カラオケ　に　いきました。" },
            { id: 3, text: "どこも　いきませんでした。" },
        ],
        keyid: 2,
        image: "",
        sound: ""
    },
    {
        id: 42,
        section: 4,
        text: `
        わたし：がいこく　では　ざんぎょうが　すくない　ですから　わたしも　たくさんやすみが　したいです。
        <hr>
        「わたし」はがいこく　についてどう思っていますか。
        `,
        answers: [
            { id: 0, text: "きらいだ　と思っています。" },
            { id: 1, text: "いつも　しごと　している　と思っています。" },
            { id: 2, text: "やすみ　が　ない　と思っています。" },
            { id: 3, text: "うらやましいと　と思っています。" },
        ],
        keyid: 3,
        image: "",
        sound: ""
    },
    {
        id: 43,
        section: 4,
        text: `
        43-45<hr>
        さとうさんは　本を　3月7日にかりました。おそくても　いつ　かえさなければなりませんか。
        `,
        answers: [
            { id: 0, text: "3月22日" },
            { id: 1, text: "4月22日" },
            { id: 2, text: "4月23日" },
            { id: 3, text: "3月23日" },
        ],
        keyid: 0,
        image: "Simulation JFT-5/43.PNG",
        sound: ""
    },
    {
        id: 44,
        section: 4,
        text: `
        43-45<hr>
        かえす日が　おくれる時　どうしますか。
        `,
        answers: [
            { id: 0, text: "としょかんに　いく。" },
            { id: 1, text: "としょかんに　メールする。" },
            { id: 2, text: "としょかんに　電話をする。" },
            { id: 3, text: "何もしない。" },
        ],
        keyid: 2,
        image: "Simulation JFT-5/43.PNG",
        sound: ""
    },
    {
        id: 45,
        section: 4,
        text: `
        43-45<hr>
        この中に　借りることができる　人はどれですか。
        `,
        answers: [
            { id: 0, text: "本を4さつ、とCDを　2まい　16日間　かりたいひと。" },
            { id: 1, text: "DVDを4まい、とCDを　4まい　15日間　かりたいひと。" },
            { id: 2, text: "本を6さつ、DVDを5まい、とCDを　5まい　5日間　かりたいひと。" },
            { id: 3, text: "DVDを8まい、とCDを　8まい　15日間　かりたいひと。" },
        ],
        keyid: 1,
        image: "Simulation JFT-5/43.PNG",
        sound: ""
    },
    {
        id: 46,
        section: 4,
        text: `
        がっこうを　１０じに　でられるよう　１０ぷんまえに　こうえん　の　まえにあつまってください。
        
        <hr>
        いつ、どけ　で　あつまりますか。
        `,
        answers: [
            { id: 0, text: "こうえんのまえ　に、９じ　５０ぷんです。" },
            { id: 1, text: "学校のまえ　に、９じ　５０ぷんです。" },
            { id: 2, text: "こうえんに、１０じ　１０ぷんです。" },
            { id: 3, text: "学校に、１０じ　１０ぷんです。" },
        ],
        keyid: 0,
        image: "",
        sound: ""
    },
    {
        id: 47,
        section: 4,
        text: `
        先生　は　びょうきですから、きょうは　ひとりで　べんきょうします。「わしつ」の　レポートを　かいて　あして　だしてください。
        <hr>
        きょう、がくせいは　なにを　しますか。
         `,
        answers: [
            { id: 0, text: " わしつ　で　べんきょうします。" },
            { id: 1, text: " せんせい　と　べんきょう　します。" },
            { id: 2, text: " レポート　を　かきます。" },
            { id: 3, text: " わひつ　を　でます。" },
        ],
        keyid: 2,
        image: "",
        sound: ""
    },
    {
        id: 48,
        section: 4,
        text: `
        A:すみません。このペン、(　　 )か?<br>
        B:どうぞ。<hr>
        (　　 )に　なにが　はいりますか。
        `,
        answers: [
            { id: 0, text: "つかってもいいです" },
            { id: 1, text: "つかったほうがいいです" },
            { id: 2, text: "つかいたいです" },
            { id: 3, text: "つかいません" },
        ],
        keyid: 0,
        image: "",
        sound: ""
    },
    {
        id: 49,
        section: 4,
        text: `
        A:あの　ぼうし　を　(　　 )いる　ひと　は　だれですか?<br>
        B:いもりさんです。<hr>
        (　　 )に　なにが　はいりますか。
        `,
        answers: [
            { id: 0, text: "はいて" },
            { id: 1, text: "きて" },
            { id: 2, text: "かぶって" },
            { id: 3, text: "かけて" },
        ],
        keyid: 2,
        image: "",
        sound: ""
    },
    {
        id: 50,
        section: 4,
        text: `
        こはら:うどん　は　まだです、にくを　（　　　）いれましょう。<hr>
        (　　 )に　なにが　はいりますか。
        `,
        answers: [
            { id: 0, text: "いれてから" },
            { id: 1, text: "いれないで" },
            { id: 2, text: "いれたまえに" },
            { id: 3, text: "いれたいとき" },
        ],
        keyid: 0,
        image: "",
        sound: ""
    }
];