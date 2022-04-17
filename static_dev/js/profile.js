'use strict'

let yourStatus = document.getElementById('raitingStatus');
let fillGreyStatus = document.getElementById('raitingBar');
let yourStatusText = document.querySelector('.header-learn__raiting-name');

function updateStatus(result) {
    fillGreyStatus.style.width = `${100 - result}` + '%';
    if (result >= 80) {
        yourStatusText.innerHTML = 'ЯРЫЙ ТАТАРИН!'
    } else if ((result > 50) && (result < 80)) {
        yourStatusText.innerHTML = 'Купить өчпочмак уровня хватит!'
    } else {
        yourStatusText.innerHTML = 'Пока слабовато ;('
    }
}