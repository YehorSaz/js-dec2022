const LS = localStorage;
const body = document.querySelector('body');


let sessionArr = LS.getItem('newDate');
sessionArr = JSON.parse(sessionArr);


for (let i in sessionArr) {

    const numDiv = document.createElement('div');
    const dateDiv = document.createElement('div');
    const timeDiv = document.createElement('div');

    const l = sessionArr[i].length;
    const time = sessionArr[i].slice(11, l - 2);

    numDiv.innerText = parseInt(i) + 1;
    numDiv.style.marginRight = '10px';
    dateDiv.innerText = sessionArr[i].slice(0, 10);
    timeDiv.innerText = time;

    body.querySelector('.sessionNumber').appendChild(numDiv);
    body.querySelector('.sessionDate').appendChild(dateDiv);
    body.querySelector('.time').appendChild(timeDiv);
}

btn = document.querySelector('button');
btn.onclick = () => {
    location.reload();
}