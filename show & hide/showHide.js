const btn = document.querySelector('#btn');
const para = document.querySelector('#para');
const date = document.querySelector('#date');
const datePara = document.querySelector('#datePara');

let isShow = false;
let closeDate = false;

btn.addEventListener('click', function () {
    if (isShow) {
        para.style.visibility = 'hidden';
        isShow = false;
        btn.innerHTML = 'Show Text'
        btn.style.backgroundColor = "rgb(71, 151, 255)";
    } else {
        para.style.visibility = 'visible';
        isShow = true;
        btn.innerHTML = "Hide Text";
        btn.style.backgroundColor = "rgb(95, 42, 165)";
    }
});

let today = new Date();
let myDate = today.getFullYear();

date.addEventListener('click', function () {
    if (closeDate) {
        datePara.style.visibility = "hidden";
        closeDate = false;
        date.innerHTML = "Show Date";
    } else {
        datePara.style.visibility = 'visible';
        datePara.innerHTML = myDate;
        closeDate = true;
        date.innerHTML = "Close Date";
    }
});