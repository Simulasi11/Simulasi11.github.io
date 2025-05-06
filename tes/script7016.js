// global
    const main = document.querySelector("main");
    let selectedTest;
    let userAnswers=[];
    let currentTest;
    let currentSection;
    let currentQuestion;
    let countdown;
    let confirmationAnswer;
    let user;

    const initApp = () => {
        // showTestList ();
        showLoginForm ();
    }
    const resetApp = () => {
        if(confirm("Apakah Anda yakin ingin keluar?")){
            main.innerHTML="";
            selectedTest="";
            userAnswers=[];
            currentTest="";
            currentSection="";
            currentQuestion="";
            countdown="";
            initApp();
            document.getElementsByTagName('header')[0].style.display='block';
            window.onbeforeunload = null;
        }
    }
    const clearMain = () => {
        main.innerHTML="";
    }
    const findQuestionBySectionAndId = (section,id) => {
        return currentTest.questions.find(question => (question.section == section) && (question.id == id) );
    }
    const findQuestionById = (id) => {
        return currentTest.questions.find(question =>(question.id == id) );
    }
    const finduserAnswersById = (id) => {
        return userAnswers.find(question =>(question.id == id) );
    }
    const isSectionDone = () => {
        for (let i = 0; i < userAnswers.length; i++) {
            if(userAnswers[i].section == currentSection){
                if(userAnswers[i].answer == 0){
                    return false;
                }
            }
          } 
        return true;
    }
    const setUserAnswer = (element) => {
        // element is button , value will be use to fill user answer , 
        // and id will be use to know what question did user answer
        let questionNumber =  element.id.substring(3, element.id.length);
        let sectionNumber =  element.id.substring(1,2);
        let userAnswer = userAnswers.find(item => (item.id == questionNumber) && (item.section == sectionNumber));
        userAnswer.answer = Number(element.value);
        let otherAnswer = document.querySelectorAll("#"+element.id);
        otherAnswer.forEach((answer)=>{
            answer.className = "list-group-item list-group-item-action";
        });
        element.className = "list-group-item list-group-item-action bg-success bg-opacity-75";
        document.getElementById("nav-"+element.id).classList.add("bg-success","bg-opacity-75");
    }
    const showQuestion = (element) => {
        let question = element.id.substring(7,element.id.length);
        currentQuestion = findQuestionById(question);
        document.getElementById("tqa").lastChild.remove();
        document.getElementById("tqa").appendChild(createTestQA(currentQuestion));

        let userAnswer = finduserAnswersById(document.getElementById("tqa").lastChild.id.substring(7,element.id.length));
        if(userAnswer.answer != 0){
            let nodes = document.querySelectorAll(  "#s"+document.getElementById("tqa").lastChild.id.substring(5,6)+
                                                    "q"+document.getElementById("tqa").lastChild.id.substring(7,element.id.length));
            nodes[userAnswer.answer-1].className="list-group-item list-group-item-action bg-success bg-opacity-75";
        }

        updateHeaderCurrentQuestion();
        updateTestFooter();
    }
    const showQuestionByID = (questionId) => {
        currentQuestion = findQuestionById(questionId);
        document.getElementById("tqa").lastChild.remove();
        document.getElementById("tqa").appendChild(createTestQA(currentQuestion));

        let userAnswer = finduserAnswersById(questionId);
        if(userAnswer.answer != 0){
            let nodes = document.querySelectorAll(  "#s"+document.getElementById("tqa").lastChild.id.substring(5,6)+
                                                    "q"+questionId);
            nodes[userAnswer.answer-1].className="list-group-item list-group-item-action bg-success bg-opacity-75";
        }

        updateHeaderCurrentQuestion();
        updateTestFooter();
    }
    const preventOpenedNav = () => {
        window.onclick=()=>{
            if(document.getElementById("QANavigation")!=null){
                if(document.getElementById("QANavigation").className.includes("show")){
                    document.getElementById("QA-nav-toggle-button").click();
                }
            }
        }
    }
    const endSection = () => {

        if(isSectionDone()){
            if(currentSection != 4){
                if( confirm("Apakah Anda yakin ingin melanjutkan ke sesi berikutnya?, Anda dapat kembali ke sesi ini lagi")){
                    switch (currentSection){
                        case 1:
                            currentSection = Number(currentSection) + 1;
                            if(currentTest.name == "Simulation JFT-Sample"){
                                showQuestionByID (6);
                            } else{
                                showQuestionByID (16);
                            }
                            break;
                        case 2:
                            currentSection = Number(currentSection) + 1;
                            if(currentTest.name == "Simulation JFT-Sample"){
                                showQuestionByID (11);
                            } else{
                                showQuestionByID (31);
                            }
                            break;
                        case 3: 
                            currentSection = Number(currentSection) + 1;
                            if(currentTest.name == "Simulation JFT-Sample"){
                                showQuestionByID (13);
                            } else{
                                showQuestionByID (41);
                            }
                            break;
                    }
                    showSectionNavList(currentSection);
                }  
            }else{
                if( confirm("Apakah Anda yakin ingin mengakhiri tes ini?")){
                    showResult();
                }  
            }
        }else{
            alert("tidak bisa lanjut ke bagian selanjutnya, kamu harus menjawab semua pertanyaan di sesi ini terlebih dahulu");
        }
    };
    const showSectionNavList = (sectionId) =>{
        document.getElementById("Nav-s"+sectionId).classList.add("bg-success","bg-gradient","ps-3");
        document.getElementById("s"+sectionId+"q").style.display="initial";
        document.getElementById("s"+(Number(sectionId)-1)+"q").style.display="none";
        // "Nav-s2" nav  id 
        // "s2q" next container id 
        // "s1q" before 
    }
    // set up function for audio control
    const disabledAudio = (el,id) => { 
        document.getElementById("QA-nav-toggle-button").disabled=true;
        document.querySelectorAll("#nav-btn").forEach((item) => {
            item.disabled=true;
        });
        count = Number(el.id);
        let questionForAudio = findQuestionById(id);
        el.style.pointerEvents="none";
        if(count > 1 ){
            count -=1;
            questionForAudio.play_count -=1;
            el.id=count.toString();
            el.nextSibling.innerText = "kamu bisa menjalankan audio ini 1 kali lagi"
        }else{
            question.play_count -=1;
            count -=1;
            questionForAudio.play_count -=1;
            el.id=count.toString();
            el.nextSibling.innerText = "kamu sudah tidak bisa menjalankan audio ini"
        }
    }
    const enabledAudio = (el) => { 
        document.getElementById("QA-nav-toggle-button").disabled=false;
        document.querySelectorAll("#nav-btn").forEach((item) => {
            item.disabled=false;
        });
        count = Number(el.id);

        if(count > 0){
            el.style.pointerEvents="initial";
        }else{
            el.style.pointerEvents="none";
        }
    }
// test list
    const createTestList = (tests) => {
        // create container
        const testListContainer = document.createElement("div");
        // create title
        const testListTitle = document.createElement("div");
        testListTitle.classList.add("mx-auto","border","text-center","my-3","shadow-sm","bg-dark","bg-gradient","rounded","text-light");
        testListTitle.innerHTML = `
        <h2 class="text-white">Pilih untuk memulai tes mock up!</h2>
        `; 
        // create list
        const testList = document.createElement("div");
        testList.classList.add("row","px-3");
        // create list item
        let testCard;
        tests.forEach((test)=>{
            testCard = document.createElement("div");
            testCard.classList.add("test-card","rounded","my-1","col");
            testCard.innerHTML =`
            <a class="card text-decoration-none text-dark" >
              <div class="card-body rounded">
                <h3 class="card-title bg-success bg-opacity-50 p-2 rounded ">${test.name}</h3>
                <p class="card-text  ">Level ${test.level}</p>
              </div>
            </a>
            `;
            // add handler
            testCard.addEventListener("click",function(){showStartConfirmation(test)});
            testList.appendChild(testCard);
        });
        // merge component
        testListContainer.appendChild(testListTitle);
        testListContainer.appendChild(testList);
        window.onbeforeunload = function() {
            return "Data kamu tidak akan disimpan, kamu yakin ingin pergi dari halaman ini?";
        }
        return testListContainer;
    }
    const showTestList = () => {
        clearMain();
        main.appendChild(createTestList(tests));
        const howtodo = document.createElement("div");
        howtodo.innerHTML= `
        <hr>
        <h3 class='border bg-danger text-white fw-bolder rounded p-2'>Cara Penggunaan</h3>
        <div class="my-2 p-1">
            <span class="fs-5 border-bottom border-2 border-primary">Soal</span>
            <p>
            - terdapat indikator waktu pengerjaan, jika waktu habis, tes akan otomatis selesai. <br>
            - tombol 'selesaikan sesi' untuk lanjut ke sesi selanjutnya.<br>
            - icon jendela 🪟 untuk membuka daftar soal per sesinya.<br>
            - terdapat kolom soal dan jawaban.<br>
            - kolom jawaban terdiri dari empat baris, klik jawaban yang dianggap benar. jawaban yang terpilih akan berwarna hijau.
            </p>
            <img src="../assets/images/awal.png" class="img-fluid border" alt="Responsive image">
        </div>
        <div class="my-2 p-1">
            <span class="fs-5 border-bottom border-2 border-primary">Daftar soal</span>
            <p>
            - terdapat daftar soal dibagi persesinya.<br>
            - jika soal sudah dikerjakan, maka tombol nomor akan berwarna hijau.
            </p>
            <img src="../assets/images/2.png" class="img-fluid border" alt="Responsive image" style="max-width:320px;">
        </div>
        <div class="my-2 p-1">
            <span class="fs-5 border-bottom border-2 border-primary">Navigasi soal</span>
            <p>
            - icon panah kiri〈 untuk membuka soal sebelumnya.<br>
            - icon panah kanan 〉untuk membuka soal selanjutnya.
            </p>
            <img src="../assets/images/3.png" class="img-fluid border" alt="Responsive image">
        </div>
        <div class="my-2 p-1">
            <span class="fs-5 border-bottom border-2 border-primary">Tombol 'selesaikan sesi'</span>
            <p>
            - tombol 'selesaikan sesi' dapat di klik jika kamu telah mengerjakan seluruh soal di sesi tersebut.<br>
            <img src="../assets/images/4.png" class="img-fluid border" alt="Responsive image"><br>
            - akan muncul konfirmasi terahir sebelum melaju ke sesi selanjutnya.<br>
            - setelah lanjut ke sesi berikutnya, kamu tidak bisa kembali kesesi sebelumnya.<br>
            <img src="../assets/images/5.png" class="img-fluid border" alt="Responsive image" style="max-width:300px;"><br>
            - di sesi terahir, akan muncul konfirmasi untuk menyelesaikan tes.<br>
            <img src="../assets/images/6.png" class="img-fluid border" alt="Responsive image" style="max-width:300px;">
            </p>
        </div>
        <div class="my-2 p-1">
            <span class="fs-5 border-bottom border-2 border-primary">Tombol 'Hasil'</span>
            <p>
            - hasil akan muncul setelah tes berahir.<br>
            - hijau untuk lulus, dan merah untuk gagal.<br>
            - batas total kelulusan adalah 200 poin.<br>
            - untuk sementara ini, hasil tes tidak akan disimpan disistem, jadi silahkan print atau screenshot untuk menyimpannya.<br>
            - kunci jawaban bisa dilihat dengan mendownload kunci jawaban, click tombol " kunci jawaban 🔑 ".<br>
            <img src="../assets/images/lulus.png" class="img-fluid border" alt="Responsive image" style="max-width:320px;"><br>
            <img src="../assets/images/gagal.png" class="img-fluid border" alt="Responsive image" style="max-width:320px;">
            </p>
        </div>
        `;
        main.appendChild(howtodo);
    }
// test list

// start confirmation
    const createStartConfirmation = () => {
        // create container
        let action = 'startTest()';
        const StartConfirmation = document.createElement("div");
        if (user.name == 'coba') {
            action = 'coba()';
        }
        StartConfirmation.innerHTML=`
        <div class="position-absolute top-50 start-50 translate-middle rounded" style="width:400px;">
          <div class="border shadow rounded text-center">
            <div class="text-white bg-success  rounded-top  py-2">
             ${currentTest.name} | ${currentTest.level}
            </div>
            <button onclick="showTestList()" type="button" class="btn btn-danger my-4">Kembali</button>
            <button onclick="${action}" type="button" class="btn btn-primary my-4">Mulai tes</button>
          </div>
        </div>
        `;
        return StartConfirmation;
    }
    const showStartConfirmation = (test) => {
        currentTest=test;
        clearMain();
        main.appendChild(createStartConfirmation());
    }
    const inituserAnswers = () => {
        let temp;
        for (let i = 0; i < currentTest.questions.length; i++) {
            temp = {
                id : currentTest.questions[i].id,
                section: currentTest.questions[i].section,
                answer:0
            }
            userAnswers.push(temp);
          }
    } 
    const coba = () => {
        if (confirm("Apakah Anda siap?")) {
            inituserAnswers();
            updateHeaderCountdown();
            preventOpenedNav();
            showTest();
        }
    }
    const startTest = async () => {
        if (confirm("Apakah Anda siap?")) {
            const userId = user.id; 
            const url = "../api/start_test.json";
            // const url = "http://localhost/jft-simulation/api/start_test";
            console.log(user.id);
            try {
                const response = await fetch(url, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({ user_id: userId })
                });
    
                const data = await response.json();
    
                if (data.success) {
                    inituserAnswers();
                    updateHeaderCountdown();
                    preventOpenedNav();
                    showTest();
                } else {
                    alert(data.error || "Gagal memulai tes. Silakan coba lagi.");
                }
            } catch (error) {
                console.error("Error:", error);
                alert("Terjadi kesalahan saat memulai tes.");
            }
        }
    };
    
// start confirmation

// test
    const createTestHeader = () => {
        // create header
        const testTestHeader = document.createElement("div");
        testTestHeader.className="row bg-dark text-white bg-gradient shadow-sm rounded mb-2 py-1";
        // create current question
        const testCurrentQuestion = document.createElement("div");
        testCurrentQuestion.className="col text-start";
        testCurrentQuestion.innerHTML=`
        Section <span id="header-current-section">1</span> Question <span id="header-current-question">1</span>
        `;
        // create countdown
        const testCountDown = document.createElement("div");
        testCountDown.className="col text-center";
        testCountDown.id="header-countdown";
        
        if(currentTest.name == "Simulation JFT-Sample"){
            testCountDown.innerHTML=`<i class="fa-solid fa-clock mx-1"></i> 12:00`;
        } else{
            testCountDown.innerHTML=`<i class="fa-solid fa-clock mx-1"></i> 60:00`;
        }
        // create end button
        const testEndButton = document.createElement("div");
        testEndButton.className="col text-center";
        testEndButton.innerHTML=` <button id="header-end-button" class="btn btn-success" onclick="endSection()">Selesaikan sesi</button>`;
        // merge header
        testTestHeader.appendChild(testCurrentQuestion);
        testTestHeader.appendChild(testCountDown);
        testTestHeader.appendChild(testEndButton);
        return testTestHeader;
    }
    const updateHeaderCurrentQuestion = () => {
        document.getElementById("header-current-section").innerHTML=currentQuestion.section;
        document.getElementById("header-current-question").innerHTML=currentQuestion.id;
    }
    const updateHeaderCountdown = () => {
      let countDownDate;
      
      if(currentTest.name == "Simulation JFT-Sample"){
            countDownDate = addHours(0.2).getTime();
        } else{
            countDownDate = addHours(1).getTime();
        }
      countdown = setInterval(function() {
        let now = new Date().getTime();
        let distance = countDownDate - now;
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);
        document.getElementById("header-countdown").innerHTML = `<i class="fa-solid fa-clock mx-1"></i> ${minutes} : ${seconds}`;
        if (distance < 0) {
          alert("Times up, test will automativally end!");
          showResult();
        }
      }, 1000);
    }
    const addHours = (numOfHours, date = new Date()) => {
        date.setTime(date.getTime() + numOfHours * 60 * 60 * 1000);
        return date;
    }
    const updateHeaderEndButton = () => {
        document.getElementById("header-end-button")
    }
    const createTestQAContainer = () => {
        // create container
        const testQAContainer = document.createElement("div");
        testQAContainer.classList.add("row");
        testQAContainer.id= "tqa";
        testQAContainer.style.minHeight= "400px";
        testQAContainer.appendChild(createTestQANavigation(currentTest));
        testQAContainer.appendChild(createTestQA(currentQuestion));
        return testQAContainer;
    }
    const createTestQANavigation = () => {
        // create container
        const testQANavigationContainer = document.createElement("div");
        testQANavigationContainer.classList.add("col-sm-2","my-2")
        testQANavigationContainer.style.zIndex="999";

        // create toggle button
        testQANavigationContainer.innerHTML=`
        <button id="QA-nav-toggle-button" class="btn btn-success" type="button" data-bs-toggle="collapse" data-bs-target="#QANavigation" aria-expanded="false" >
          <i class="fa-solid fa-table-cells-large"></i>
        </button>
        `;

        // create test QA navigation
        const testQANavigation = document.createElement("div");
        testQANavigation.className="collapse position-absolute row border bg-light shadow-sm border";
        testQANavigation.id="QANavigation";
            // create section list-----------------
            const testSectionNavList = document.createElement("div");
            testSectionNavList.className="col-2 border-end p-0";
            // create section nav
            let sectionNav;
            sections.forEach((section)=>{
                sectionNav = document.createElement("div");
                sectionNav.className="border-top py-2 ";
                if(section.id== 1){
                    sectionNav.classList.add("bg-success","bg-gradient","ps-3");
                }
                // done
                // ="border-top bg-success bg-gradient ps-3"
                sectionNav.innerText = "S"+section.id;
                sectionNav.id="Nav-s"+section.id;
                testSectionNavList.appendChild(sectionNav);
            });

            // create question list-----------------
            const testQuestionList = document.createElement("div");
            testQuestionList.className="col-10 row pb-2";
            // create question list wrapper
            let testQuestionListWrapper;
            let questionNav;
            sections.forEach((section)=>{
                testQuestionListWrapper = document.createElement("div");
                testQuestionListWrapper.className="row my-2 gy-3 gx-2";
                testQuestionListWrapper.id = `s${section.id}q`;
                
                currentTest.questions.forEach((question)=>{
                    if(section.id == question.section){
                        testQuestionListWrapper.innerHTML +=`
                        <button class="btn btn-sm btn-light col-2 border rounded text-center mx-1" 
                                id="nav-s${section.id}q${question.id}"
                                onclick="showQuestion(this)">${question.id}
                        </button>
                        `;

                    }
                });

                testQuestionList.appendChild(testQuestionListWrapper);                        
                if(section.id != 1){
                    testQuestionListWrapper.style.display="none";
                }
            });
        // merge to container
        testQANavigation.appendChild(testSectionNavList);
        testQANavigation.appendChild(testQuestionList);
        testQANavigationContainer.appendChild(testQANavigation);
        return testQANavigationContainer;
    }
    const shuffle = (array) => {
        // for (let i = array.length - 1; i > 0; i--) {
        //     const j = Math.floor(Math.random() * (i + 1));
        //     const temp = array[i];
        //     // Swap
        //     array[i] = array[j];
        //     array[j] = temp;
        // }
        return array;
    }
    const createTestQA = (question) => {
        // create container
        // 50 soal
        // s1 15 bb 1  ba 15
        // s2 15 bb 16 ba 30
        // s3 10 bb 31 ba 40
        // s4 10 bb 41 ba 50
        // 50
        let buttonDisplayPrev=``;
        let buttonDisplayNext=``;
        let noPrev = [1,16,31,41];
        let noNext = [15,30,40,50];
        let navPrevAct="";
        let navNextAct="";
        
        if(currentTest.name == "Simulation JFT-Sample"){
            noPrev = [6,10,12,13];
            noNext = [5,9,11,12];
        }
        for (let i=0; i< 4; i++){
            navPrevAct = `onclick="showQuestionByID(${Number(question.id)-1})"`;
            navNextAct = `onclick="showQuestionByID(${Number(question.id)+1})"`;
            if(question.id == noPrev[i]){
                buttonDisplayPrev=`style="display:none;"`;
                navPrevAct = "";
            }
            if(question.id == noNext[i]){
                buttonDisplayNext=`style="display:none;"`;
                navNextAct = "";
            }
        }
        let soundElement='';
        let imageElement='';
        if(question.sound!= ""){
            soundElement=`
            <div class="text-center">
            <audio preload="none" controls onplaying="disabledAudio(this,${question.id})" onended="enabledAudio(this)"  id="${question.play_count}" 
            ${(question.play_count == 0) ? "style='pointerEvents:none' disabled" : ''}> 
                <source src="../assets/sounds/${question.sound}" type="audio/ogg">
                <source src="../assets/sounds/${question.sound}" type="audio/mpeg">
                No audio support.
            </audio><p>
             ${(question.play_count == 2) ? "hati-hati kamu hanya bisa menjalankan audio ini sebanyak 2 kali" : ''}
              ${(question.play_count == 1) ? "kamu bisa menjalankan audio ini 1 kali lagi" : ''}
               ${(question.play_count == 0) ? "kamu sudah tidak bisa menjalankan audio ini" : ''}
            
            </div>
            `;
        }
        if(question.image  != ""){
            imageElement=`
            <div class="text-center">
            <img class="mx-auto img-fluid"src="../assets/images/${question.image}" style="max-height:200px"/>
            </div>
            `;
        }
        const testQA = document.createElement("div");
        testQA.classList.add("col-sm-10")
        testQA.id=`tqa-s${question.section}q${question.id}`;
        testQA.innerHTML=`
        <div class="row bg-light bg-gradient border shadow-sm  text-start p-2 mb-2">
            ${soundElement}
            <hr>
            ${question.text}
            <hr>
            ${imageElement}
        </div>
        
        <div class="row bg-light bg-gradient shadow-sm list-group rounded-0 mb-2">
        <button id="s${question.section}q${question.id}" type="button" class="list-group-item list-group-item-action" value="${1}" onclick="setUserAnswer(this)">${question.answers[0].text}</button>
        <button id="s${question.section}q${question.id}" type="button" class="list-group-item list-group-item-action" value="${2}" onclick="setUserAnswer(this)">${question.answers[1].text}</button>
        <button id="s${question.section}q${question.id}" type="button" class="list-group-item list-group-item-action" value="${3}" onclick="setUserAnswer(this)">${question.answers[2].text}</button>
        <button id="s${question.section}q${question.id}" type="button" class="list-group-item list-group-item-action" value="${4}" onclick="setUserAnswer(this)">${question.answers[3].text}</button>
        </div>
        `;
        return testQA;
    }
    const createTestFooter = () => {
        // create header
        const TestFooter = document.createElement("div");
        TestFooter.className="row bg-dark text-white bg-gradient shadow-sm rounded mb-2 py-1";
        TestFooter.innerHTML = `
        <div class="row mx-auto" id="test-footer">
            <div class="col-6 text-start">
                <button id="nav-btn" class="btn btn-success" navPrevAct buttonDisplayPrev ><i class="fa-solid fa-chevron-left"></i></button>
            </div>
            <div class="col-6 text-end">
                <button id="nav-btn"  class="btn btn-success" navNextAct buttonDisplayNext ><i class="fa-solid fa-chevron-right"></i></button>
            </div>
        </div>
        `;
        return TestFooter;
    }
    const updateTestFooter = () => {
        question =  currentQuestion;
        let noPrev = [1,16,31,41];
        let noNext = [15,30,40,50];
        let navPrevAct="";
        let navNextAct="";  
        let buttonDisplayPrev="";
        let buttonDisplayNext="";
        if(currentTest.name == "Simulation JFT-Sample"){
            noPrev = [1,6,11,13];
            noNext = [5,10,12,14];
        }
        for (let i=0; i< 4; i++){
            navPrevAct = `onclick="showQuestionByID(${Number(question.id)-1})"`;
            navNextAct = `onclick="showQuestionByID(${Number(question.id)+1})"`;
            if(question.id == noPrev[i]){
                buttonDisplayPrev=`style="display:none;"`;
                navPrevAct = "";
            }
            if(question.id == noNext[i]){
                buttonDisplayNext=`style="display:none;"`;
                navNextAct = "";
            }
        }
        document.getElementById("test-footer").innerHTML = `
        <div class="row mx-auto" id="test-footer">
            <div class="col-6 text-start">
                <button id="nav-btn" class="btn btn-success" ${navPrevAct} ${buttonDisplayPrev} ><i class="fa-solid fa-chevron-left"></i></button>
            </div>
            <div class="col-6 text-end">
                <button id="nav-btn"  class="btn btn-success" ${navNextAct} ${buttonDisplayNext} ><i class="fa-solid fa-chevron-right"></i></button>
            </div>
        </div>`;
    }
    const createTest = () => {
        // create container
        const testTestContainer = document.createElement("div");
        testTestContainer.classList.add("test","mb-2")
        testTestContainer.appendChild(createTestHeader());
        testTestContainer.appendChild(document.createElement("hr"));
        testTestContainer.appendChild(createTestQAContainer());
        testTestContainer.appendChild(createTestFooter());
        return testTestContainer;
    }
    const showTest = () => {
        currentSection = 1;
        currentQuestion = findQuestionById(1);
        clearMain();
        main.appendChild(createTest());
        updateTestFooter();
    }
// test

// result
    const getSectionScore = (sectionId) => {
        let result=0;
        for (let i = 0; i <userAnswers.length;i++){
            if (userAnswers[i].section==sectionId){
                if(currentTest.questions[i].keyid == userAnswers[i].answer-1){
                    result++;
                }
            }
        }
        if(currentTest.name == "Simulation JFT-Sample"){
            switch (sectionId){
                case 1: 
                    result =  (result * 12.5);
                    break;
                case 2: 
                    result =  (result * 12.5);
                    break;
                case 3: 
                    result =  (result * 31.25) ;
                    break;
                case 4: 
                    result =  (result * 31.25) ;
                    break;
            }
        }else{
            switch (sectionId){
                case 1: 
                    result =  (result * 4.4) - 1;
                    break;
                case 2: 
                    result =  (result * 4.4) - 1;
                    break;
                case 3: 
                    result =  (result * 6) ;
                    break;
                case 4: 
                    result =  (result * 6) ;
                    break;
            }
        }
        if(result<0){
            result = 0;
        }
        return result;
    } 
    const getTotalScore = () => {
        let result=0;
        for (let i = 1; i < 5;i++){
            result += getSectionScore(i);
        }
        return result;
    } 
    const evaluateTest = () => {
        let isPassed=false;
        totalResult = getTotalScore ();
        if(totalResult > 200) {
            isPassed=true;
        }
        return isPassed;
    } 
    const createResult = () => {
        const resultContainer = document.createElement("div");
        resultContainer.className="result w-75 mx-auto border shadow-sm p-3";
        let sectionResults = [];
        for (let i = 1; i < 5;i++){
            if(currentTest.name == "Simulation JFT-Sample"){
                sectionResults.push(Number(getSectionScore(i))); 
            }else{
                sectionResults.push(Number(getSectionScore(i).toFixed(0))); 
            }
        }
        let message;
        if(evaluateTest()){
            message = `<span class="badge text-bg-success bg-gradient shadow-sm fs-2 p-print">LULUS</span>`;
        }else{
            message = `<span class="badge text-bg-danger bg-gradient shadow-sm fs-2 f-print">GAGAL</span>`;
        }
        let link_answer = '';
        switch (currentTest.name) {
            case "Simulation JFT-Sample":
                link_answer = '../pdf/ABSJVSEPAC.pdf';
                break;
            case "Simulation JFT-1":
                link_answer = '../pdf/DZWAQX1QEP.pdf';
                break;
            case "Simulation JFT-2":
                link_answer = '../pdf/TZJBWSZW9N.pdf';
                break;
            case "Simulation JFT-3":
                link_answer = '../pdf/ANPBMCEEJC.pdf';
                break;
            case "Simulation JFT-4":
                link_answer = '../pdf/UVL97Y1LBL.pdf';
                break;
            case "Simulation JFT-5":
                link_answer = '../pdf/LRBOW9P3VN.pdf';
                break;
            case "Simulation JFT-6":
                link_answer = '../pdf/R01H4GVB03.pdf';
                break;
            case "Simulation JFT-7":
                link_answer = '../pdf/N8EU54EQY0.pdf';
                break;
            case "Simulation JFT-8":
                link_answer = '../pdf/5TUB0Y55J6.pdf';
                break;
            case "Simulation JFT-9":
                link_answer = '../pdf/SZ1MUEP8WB.pdf';
                break;
            default:
                console.log("Simulation not found");
        }

        let lastResult;
        if(currentTest.name == "Simulation JFT-Sample"){
            lastResult = Number(getTotalScore());
        }else{
            lastResult = Number(getTotalScore().toFixed(0));
        }
        resultContainer.innerHTML=`
          <div class="row text-center">
            ${message}
          </div>
          <hr>

          <div class="row">
            <div class="col my-1 mx-auto text-center fw-bold">
                (Batas nilai kelulusan 200 Poin) </br>
                Total : <span class="fw-bolder fs-1"> ${lastResult} </span> Poin
            </div>
          </div>
          <hr>

          <div class="row">
            <div class="col-lg-3 my-2 border-start">
                <p> Section ${sections[0].id} - ${sections[0].name}:</p>
                <span class="ms-5"> ${sectionResults[0]} Poin</span>
            </div>
            <div class="col-lg-3 my-2 border-start">
                <p> Section ${sections[1].id} - ${sections[1].name}:</p>
                <span class="ms-5"> ${sectionResults[1]} Poin</span>
            </div>
            <div class="col-lg-3 my-2 border-start">
                <p> Section ${sections[2].id} - ${sections[2].name}:</p>
                <span class="ms-5"> ${sectionResults[2]} Poin</span>
            </div>
            <div class="col-lg-3 my-2 border-start border-end">
                <p> Section ${sections[3].id} - ${sections[3].name}:</p>
                <span class="ms-5"> ${sectionResults[3]} Poin</span>
            </div>
          </div>
          <hr>
          <div class="row mx-auto text-center no-print">
            <button class=" col-12 col-md btn btn-primary mx-4 my-2" onclick="window.print()"> print 🖨️ </button>
            <a href="${link_answer}" target="_blank" class=" col-12 col-md btn btn-primary mx-4 my-2" > kunci jawaban 🔑 </a>
            <button class=" col-12 col-md btn btn-primary mx-4 my-2" onclick="resetApp()"> keluar 🔚 </button>
          </div>
        `;
        return resultContainer;
    }
    const showResult = () => {
        clearInterval(countdown);
        clearMain();
        main.appendChild(createResult());
    }
// result
// login control
const createLoginForm = () => {
    const loginContainer = document.createElement('div');
    loginContainer.innerHTML = `
    <h1>Login</h1>
    <div class="mx-auto p-md-3 p-1 m-2 shadow-sm border rounded" >
        <div class="form-floating my-2">
            <input type="username" id="username" class="form-control" placeholder="">
            <label for="username">username</label>
          </div>
          <div class="form-floating my-2">
            <input type="password" id="password" class="form-control" placeholder="">
            <label for="password">Password</label>
          </div>
          <div class="mx-auto text-center  my-2">
            <button type="button"  
            onclick="authenthication()" 
            class="btn btn-outline-primary">Submit</button>
          </div>
    </div>
    `;
    loginContainer.innerHTML = `
    <div id="main-wrapper" class="container">
    <div class='mb-3'>
        <h3 class='border bg-danger text-white fw-bolder rounded p-2'>Tolong baca ini sebelum mulai !</h3>
        <div class='ps-2'>
              - Pastikan jaringan internet baik, coba refresh halaman ini 1-2x untuk mengecek jaringan. <br>
              - Untuk jaga-jaga, hapus cache browser sebelum login. <br>
              - Nonaktifkan fitur auto translate browser kamu.<br>
              - Jangan refresh halaman website jika tes sudah dimulai. karena akan menghapus hasil pengerjaan kamu.<br>
              - Gunakan hedset untuk mendengarkan percakapan di soal tes sesi 'choukai'.<br>
              - Rekaman suara di setiap sesi 'choukai' hanya bisa diputar 2x.<br> 
              - Pada saat rekaman diputar, kamu tidak bisa menjeda rekaman hingga rekaman selesai diputar.<br>
              - Untuk <span class="fs-5 border-bottom border-success border-3">coba gratis</span> isi username dan password dengan kata 'coba' (14 soal, 12 menit).<br>
              - Untuk <span class="fs-5 border-bottom border-success border-3">pemilik akun</span>, jika terjadi eror, pastikan mengambil SS atau merekam eror tersebut, jika eror tersebut membuat kamu keluar tes sebelum tes selesai, kamu bisa mengajukan penggantinya, yaitu 1x kesempatan melakukan tes. kirim pengajuan ke <a href='mailto:admin@jft-simulation.com'>admin@jft-simulation.com</a> .<br>
        </div>
    </div>

    <h3 class="fw-bold border bg-success text-white rounded p-2">Login</h3>
    <form class="row">
        <div class="col-md-5  col-12 form-group mb-2">
            <label for="username">Username</label>
            <input type="username" id="username" class="form-control">
        </div>
        <div class="col-md-5  col-12 form-group mb-5">
            <label for="password">Password</label>
            <input type="password" id="password" class="form-control">
        </div>
        <div class="col-md-2 col-12 form-group mx-auto text-center"><br>
            <button type="button" onclick="authenthication()" class="btn btn-success">Login</button>
        </div>
    </form>
    `;
    return loginContainer;
    
}
const showLoginForm = () => {
    clearMain();
    main.appendChild(createLoginForm());
}
const login = async (username, password) => {
    // const url = "http://localhost/jft-simulation/api/login"; 
    const url = "../api/login.json";
    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username: username,
                password: password
            })
        });

        const data = await response.json();
        if (data.success) {
            return data.user;
        } else {
            return false;
        }

    } catch (error) {
        console.log("Error:", error);
    }
};
const showInActiveAccount = () => {
    clearMain();
    main.appendChild(createInActiveAccount());
}
const createInActiveAccount = () => {
    const inActiveAccount = document.createElement('div');
    inActiveAccount.innerHTML = `
    <div class="p-2">
        <h3 class="text-center fw-bolder">Akun belum aktif</h3>
        <p>Mohon maaf, akun kamu belum aktif atau kesempatan mengambil tes sudah habis, silahkan lakukan hal dibawah ini:<br>
        - Selesaikan pembayaran beli akun kamu.<br>
        - jika sudah melakukan pembayaran. tunggu balasan email dari admin.<br>
        - jika tidak kunjung juga ada balasan dalam 1 hari, silahkan kirim pesan ke email ini <a href='mailto:admin@jft-simulation.com'>admin@jft-simulation.com</a>.<br> 
        - jika terjadi eror sistem, dan membuat kamu keluar sebelum menyelesaikan tes, kirim bukti gagal melalui email untuk mendapatkan 1x kesempatan memulai tes.<br> 
        </p>
        <div class="text-center">
            <a href="../" class="btn btn-primary "><i class=" fs-2 bi bi-house-door"></i></a>
        </div>
    </div>
    `;
    return inActiveAccount;
}
const authenthication = async () => {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    if( user = await login(username, password)) {
        console.log(user);
        if (user.is_active == 1 ){
            if (user.plan == 'Senpai' ){
                // tests.splice(0, 7); 
                tests.splice(0, 1); 
                showTestList();
                document.getElementsByTagName('header')[0].style.display='none';
            }else{
                tests.splice(1, 7); 
                tests.splice(2, 1); 
                showTestList();
                document.getElementsByTagName('header')[0].style.display='none';
            }
        }else{
            showInActiveAccount();
        }
    } 
    else{
        user = {name:'coba'}
        if((username == 'coba') && (password == 'coba')){
            tests.splice(1, 9); 
            showTestList();
            document.getElementsByTagName('header')[0].style.display='none';
        }else{
            showTestList();
            alert("username atau password salah");
            clearMain();
            window.onbeforeunload = null;
            main.appendChild(showLoginForm());
        }
    }
}

// global
    initApp();
    var referringURL = document.referrer || 'Direct Access';
