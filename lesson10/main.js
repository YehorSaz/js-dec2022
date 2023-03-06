// Стоврити форму з трьома полями для name,sruname,age та кнопкою. При натисканні на кнопку зчитати данні з полів, та вивести об'єкт в документ. Іншими словами : заповниои форму, натиснули кнопку, під формою з'явився блок з вашим об'єктом

const body = document.querySelector('body');
const form = document.forms.f1;
const userForm = document.querySelector('.userForm');
const userBlock = document.createElement('div');
userBlock.classList.add('userBlock');
userForm.appendChild(userBlock);

form.onsubmit = function (eo) {
    eo.preventDefault();
    const userName = form.name.value;
    const userSurName = form.surname.value;
    const age = form.age.value;

    userBlock.innerText =
        `name: ${userName}
        surname: ${userSurName}
            age: ${age}`;
}


// ==========================
// є сторінка, на якій є блок, я кому знаходиьтся цифра. написати код, який при кожному перезавантажені сторінки буде додавати до неї +1

const LS = localStorage;
const num = document.querySelector('.numBlock').innerText;

if (!LS.getItem('data')) {
    LS.setItem('data', num);
} else {
    let newNum = +LS.getItem('data');
    newNum++;
    document.querySelector('.numBlock').innerText = newNum;
    LS.setItem('data', newNum);
}


// ==========================
// Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховще, в масив sessions зберігається інформація про дату та час відвідування сторінки. Є ще сторінка sessions.html (назва довільна), при відвідуванні якої потрібно відмалювати всю інформацію про відвідування сторінки index.html. Інфу НЕ виводити в консоль, а побудувати дом структуру під кожну сессію

// в папці session лежить session.html в якому інформація про відвідування даної сторінки

const sessionDate = new Date();
let arr = [];
arr.push(sessionDate);
if (!LS.getItem('newDate')) {
    LS.setItem('newDate', JSON.stringify(arr));
} else {
    let newArr = LS.getItem('newDate');
    newArr = JSON.parse(newArr);
    newArr.push(sessionDate);
    LS.setItem('newDate', JSON.stringify(newArr));
}

// =========================
//     зробити масив на 100 об'єктів та дві кнопки prev next
// при завантажені сторінки з'являються перші 10 об'єктів.
//     При натисканні next виводяться настпні 10 об'єктів
// При натисканні prev виводяться попередні 10 об'єктів

const array = [];
for (let i = 1; i <= 100; i++) {
    array.push({id: i});
}

const btnPrev = document.querySelector('#prev');
const btnNext = document.querySelector('#next');
const block = document.querySelector('.objects');
let loadCount = 10;
let loadIndex = 1;

function loader() {
    for (const item of array.slice(loadIndex * loadCount, (loadIndex + 1) * loadCount)) {
        const out = document.createElement('div');
        out.classList.add('out');
        out.innerText = `${Object.keys(item)} : ${Object.values(item)}`;
        block.appendChild(out);
    }
    loadIndex++;
}

loader(loadIndex = 0);

btnPrev.disabled = true;

function loadNext() {
    block.innerHTML = '';
    btnPrev.disabled = false;
    if (loadIndex === 9) {
        btnNext.disabled = true;
    }
    loader();
}

function loadPrev() {
    block.innerHTML = '';
    btnNext.disabled = false;
    loadIndex -= 2;
    if (loadIndex === 0) {
        btnPrev.disabled = true;
    }
    loader();
}

btnNext.addEventListener('click', function () {
    loadNext()
});
btnPrev.addEventListener('click', function () {
    loadPrev()
});


// *** Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.

const formContainer = document.createElement('div');
formContainer.classList.add('formContainer');

const formInput = document.createElement('form');

const lines = document.createElement('input');
lines.name = 'line';
lines.placeholder = 'number of lines';
lines.type = 'number';

const cell = document.createElement('input');
cell.name = 'cell';
cell.placeholder = 'number of cell';
cell.type = 'number';

const content = document.createElement('input');
content.name = 'content';
content.placeholder = 'content';
content.type = 'text';

const button = document.createElement('button');
button.textContent = 'create';

formInput.append(lines, cell, content);
formInput.appendChild(button);

formContainer.appendChild(formInput);

body.appendChild(formContainer);


function tableCreator() {
    const table = document.createElement('table');
    const tableBody = document.createElement('tbody');
    table.appendChild(tableBody);
    body.appendChild(table);
    for (let i = 0; i < formInput.line.value; i++) {
        const tr = document.createElement('tr');
        for (let j = 0; j < formInput.cell.value; j++){
            const td = document.createElement('td');
            td.textContent = formInput.content.value;
            tr.appendChild(td);
        }
        tableBody.appendChild(tr);
    }
}

formInput.onsubmit = function (e) {
    e.preventDefault();
   tableCreator();
}