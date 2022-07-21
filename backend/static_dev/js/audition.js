"use strict";

const audition_url = 'http://127.0.0.1:8000/study/audition/';
const get_words_url = 'http://127.0.0.1:8000/study/get_words/';
const get_tts_url = 'http://127.0.0.1:8000/study/tts/';
let audioLink;

// start gumaonelove script

async function pastAudioLink() {
    const encoded = encodeURI(get_tts_url);
    let result = await fetch(encodeURI(get_tts_url), {
        method: 'POST',
        body: document.querySelector('.audition__text').innerHTML
    });
    const json = await result.json()
    audioLink = json.file_url;
}

async function n() {
   function getArrayFromBackend(url){
    return new Promise(async (resolve) => {
        let response = await fetch(url);

    if (response.ok) { // если HTTP-статус в диапазоне 200-299
      // получаем тело ответа (см. про этот метод ниже)
      let json = await response.json();
      resolve(json);
    } else {
      alert("Ошибка HTTP: " + response.status);
    }
    });
}

let globalCount = 0;

function playAudio() {
    if (audioLink) {
        let aud = new Audio(audioLink);
        aud.play();
    }
}

let playButton = document.querySelector('.audition__start');
playButton && playButton.addEventListener('click', (e) => {
    e.preventDefault();
    playAudio();
});

let jsonFromBackend = await getArrayFromBackend(get_words_url);
let trueVariant = jsonFromBackend['true_rus_words'];
let otherVariant = jsonFromBackend['false_rus_words'];
let trueTatar = jsonFromBackend['true_tatar_words'];
let auditionBtn = document.querySelectorAll('.audition__btn');
let auditionBlockBottom = document.querySelector('.audition__block-bottom');
let auditionText = document.querySelector('.audition__text');
let nextElem = document.querySelector('.audition__next');
let auditionLast = document.getElementById('audition-last');
let auditionProcess = document.getElementById('audition-process');
let resultAudition = document.querySelector('.result__audition');
let auditionBlock = document.querySelector('.audition');
let auditionMiddle = document.querySelector('.audition__block-middle');

let userTrueVariants = [];

auditionBtn.forEach((elem) => {
    elem.addEventListener('click', (e) => {
        e.preventDefault();
        auditionBlockBottom.classList.add('active');
        let clearElemText = elem.textContent.replace(/\s+/g, ' ').trim();
        auditionText.classList.remove('blurred');
        if (trueVariant.includes(clearElemText)) {
            elem.classList.add('success');
            auditionMiddle.innerHTML = 'все верно!';
            userTrueVariants.push(clearElemText);
        } else {
            elem.classList.add('defeat');
            auditionMiddle.innerHTML = 'ошибка ;(';
        }
        if (auditionProcess.textContent < trueVariant.length) {
            nextElem.classList.add('active');
        } else {
            seeResults();
        }
    });
});

function getRandomInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


function seeResults() {
    resultAudition.classList.add('active');
    auditionBlock.classList.remove('active');
    let resultTrueVariant = document.getElementById('resultTrueAudition');
    let resultAllVariant = document.getElementById('resultAllAudition');
    let resultTrueText = document.getElementById('resultTrueText');
    resultTrueVariant.innerHTML = userTrueVariants.length;
    resultAllVariant.innerHTML = trueVariant.length;
    var a = document.cookie.split(';');
    var token = '';
    for (let i = 0; i < a.length; i++) {
        var b = a[i].split('=');
        b[0] = b[0].replace(/\s+/g, '');
        if (b[0] === 'csrftoken') {
            token = b[1];
        }
    }
    let url = audition_url;
    let data = {
        'userTrueVariants': userTrueVariants,
    };
    if ((userTrueVariants.length / trueVariant.length) >= 0.7) {
        resultTrueText.innerHTML = '*поздравляем, это хороший результат*';
        resultTrueText.classList.add('green');
        request(url, data, token);
    } else {
        resultTrueText.innerHTML = '*к сожалению, у вас пока недостаточный результат :(*';
        resultTrueText.classList.add('red');
        request(url, data, token);
    }


}

auditionLast && (auditionLast.innerHTML = trueVariant.length);
auditionProcess && (auditionProcess.innerHTML = 1);

nextElem && nextElem.addEventListener('click', (e) => {
    e.preventDefault();
    globalCount += 1;
    updateBtns();
    pastAudioLink();
    auditionMiddle.innerHTML = 'выберите правильный вариант:';
    nextElem.classList.remove('active');
    auditionBlockBottom.classList.remove('active');
    auditionText.classList.add('blurred');
    auditionProcess.innerHTML = parseInt(auditionProcess.textContent) + 1;
    auditionBtn.forEach(() => {
        for (let i = 0; i < auditionBtn.length; i++) {
            if (auditionBtn[i].classList.contains('success')) {
                auditionBtn[i].classList.remove('success');
            } else {
                auditionBtn[i].classList.remove('defeat');
            }
        }
    })
})

let resultTry = document.querySelector('.result__try');
resultTry.addEventListener('click', (e) => {
    e.preventDefault();
    window.location.reload();
})



function updateBtns() {
    let randNumber = getRandomInRange(0, 1);
    if (auditionBtn[randNumber]) {
        auditionBtn[randNumber].innerHTML = trueVariant[globalCount];
    auditionBtn[1 - randNumber].innerHTML = otherVariant[globalCount];
    auditionText.innerHTML = trueTatar[globalCount];
    }
}

updateBtns();
}
n();
window.addEventListener('load', () => {
    pastAudioLink()
    const button = document.querySelector("#restart")
    button && button.addEventListener('click', (e) => {
        e.preventDefault();
        var a = document.cookie.split(';');
        var token = '';
        for (let i = 0; i < a.length; i++) {
            var b = a[i].split('=');
            b[0] = b[0].replace(/\s+/g, '');
            if (b[0] === 'csrftoken') {
                token = b[1];
            }
        }

        let url = audition_url;
        let data = {
            'status': 'restart'
        };
        request_put(url, data, token);
        setTimeout(() => window.location.reload(), 1000);
    })
});