// 1 - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
console.log('-------------1--------------');

function rectangleArea(sideA, sideB) {
    return sideA * sideB;
}
let recArea = rectangleArea(5, 10);
console.log(recArea);



// 2 - створити функцію яка обчислює та повертає площу кола з радіусом r
console.log('-------------2--------------');

function circleArea(radius) {
    const P = 3.14;
    return P * (radius ** 2);
}
let circArea = circleArea(22);
console.log(circArea);



// 3 - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
console.log('-------------3--------------');

function cylinderArea(h, r) {
    const P = 3.14;
    return 2 * P * r * (h + r);
}
let cylArea = cylinderArea(20, 15);
console.log(cylArea);



// 4 - створити функцію яка приймає масив та виводить кожен його елемент
console.log('-------------4--------------');

let array1 = [10, 20, 'hello', true];

function printArr(array) {
    for (const arrayElement of array) {
        console.log(arrayElement);
    }
}
printArr(array1);



// 5 - створити функцію яка створює параграф з текстом. Текст задати через аргумент

function createParagraph(pText) {
    document.write(`
      <p>${pText}</p>
    `);
}
createParagraph('Hello world');



// 6 - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

function createUl(textLi) {
    document.write(`
    <ul>
        <li>${textLi}</li>
        <li>${textLi}</li>
        <li>${textLi}</li>
    </ul>
    `);
}
createUl('Text');



// 7 - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

function ul_liCreator(numOfLi, textLi) {
    document.write(`<ul>`);
    for (let i = 0; i < numOfLi; i++) {
        document.write(`<li>${textLi}</li>`);
    }
    document.write(`</ul>`);
}
ul_liCreator(2, 'hello');



// 8 - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві),
// та будує для них список

let arr = [10, 20, 'hello', true, false, 78.5, 'world', [1, 2], -5, 100];

function listArrayBuilder(list) {
    document.write(`<ul>`);
    for (let i = 0; i < list.length; i++) {
        document.write(`<li>${list[i]}</li>`);
    }
    document.write(`</ul>`);
}
listArrayBuilder(arr);



// 9 - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// Для кожного об'єкту окремий блок.

let users = [
    {name: 'vasily', age: 39, id: '000'},
    {name: 'petya', age: 46, id: '111'},
    {name: 'kolya', age: 30, id: '222'},
    {name: 'olga', age: 25, id: '333'},
];

function userListWriter(list) {
    document.write(`<div>`);
    for (let i in list) {
        document.write(`<ul class="q">`);
        let keys = Object.keys(list[i]);
        let values = Object.values(list[i]);
        for (let i in keys) {
            document.write(`<li>${keys[i]}: ${values[i]}</li>`);
        }
        document.write(`</ul>`);
    }
    document.write(`</div>`);
}
userListWriter(users);



// 10 - створити функцію яка повертає найменьше число з масиву
console.log('------------10-----------');

let numArray = [10, 21, -8, -1654, 0, -32.5, -0.5];

function minNum(array) {
    let min = array[0];
    for (const i in array) {
        if (array[i] < min) {
            min = array[i]
        }
    }
    return min;
}
console.log(minNum(numArray));



// 11 - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його.
// Приклад sum([1,2,10]) //->13
console.log('------------11-------------');

let numList = [1, 2, 10, 17, -10.5];
function sum(arr) {
    let sum = 0;
    for (const i in arr) {
        sum = arr[i] + sum;
    }
    return sum;
}
console.log(sum(numList));



// 12 - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
console.log('-------------12----------');
function swap(arr, index1, index2) {
    let temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
    return arr;
}
console.log(swap([1, 2, 10, 17, -10.5], 0, 4));



// 13 - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
console.log('------------13-----------');

let currencys = [
    {currency: 'USD', value: 40},
    {currency: 'EUR', value: 42},
    {currency: 'PLN', value: 8.5},
    {currency: 'GBP', value: 45.5}
];
function exchange(sumUAH, currencyValues, exchangeCurrency) {

    for (let i in currencyValues) {
        if (currencyValues[i].currency === exchangeCurrency.toUpperCase()) {
            let result = sumUAH / currencyValues[i].value;
            document.write(`<li>Exchanged count: ${result}</li>`);
            console.log(result);
        }
    }
}
exchange(10000, currencys, 'eUr');

