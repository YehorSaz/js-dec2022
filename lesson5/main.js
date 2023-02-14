// 1 - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
console.log('-----------1-------------');
let rectArea = (a, b) => a * b;
console.log(rectArea(5, 5));


// 2 - створити функцію яка обчислює та повертає площу кола з радіусом r
console.log('-----------2-------------');
let circleArea = (radius) => 3.14 * (radius ** 2);
console.log(circleArea(22));


// 3 - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
console.log('------------------3-------------');
let cylArea = (height, radius) => 2 * 3.14 * radius * (height + radius);
console.log(cylArea(20, 15));


// 4 - створити функцію яка приймає масив та виводить кожен його елемент
console.log('-------------4--------------');
let array1 = [10, 20, 'hello', true];
let ArrayPrinter = (array) => {
    for (const arrayElement of array) {
        console.log(arrayElement);
    }
}
ArrayPrinter(array1);


// 5 - створити функцію яка створює параграф з текстом. Текст задати через аргумент
console.log('-------------5--------------');
let ParagraphCreator = (pText) => {
    document.write(`
      <p>${pText}</p>
    `);
}
ParagraphCreator('Hello');


// 6 - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

let UlCreator = (textLi) => {
    document.write(`
    <ul>
        <li>${textLi}</li>
        <li>${textLi}</li>
        <li>${textLi}</li>
    </ul>
    `);
}
UlCreator(true);


// 7 - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

let ul_liCreator = (numOfLi, textLi) => {
    document.write(`<ul>`);
    for (let i = 0; i < parseInt(numOfLi); i++) {
        document.write(`<li>${textLi}</li>`);
    }
    document.write(`</ul>`);
}
ul_liCreator(3, 'hello');


// 8 - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві),
// та будує для них список

let arr = [10, 20, 'hello', true, false, 78.5, 'world', [1, 2], -5, 100];

let listArrayBuilder = (list) => {
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

let userListWriter = (list) => {
    for (let item of list) {
        document.write(`<div>${item.name} ${item.age} ${item.id}</div>`)
    }
}
userListWriter(users);


// 10 - створити функцію яка повертає найменьше число з масиву
console.log('------------10-----------');

let numArray = [10, 21, -8, -1654, 0, -32.5, -0.5];

let minNum = (array) => {
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
let sum = (arr) => {
    let sum = 0;
    for (const i in arr) {
        sum = arr[i] + sum;
    }
    return sum;
}
console.log(sum(numList));


// 12 - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
console.log('-------------12----------');
let swap = (arr, index1, index2) => {
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
let exchange = (sumUAH, currencyValues, exchangeCurrency) => {

    for (let i of currencyValues) {
        if (i.currency === exchangeCurrency.toUpperCase()) {
            let result = sumUAH / i.value;
            document.write(`<li>Exchanged count: ${result}</li>`);
            console.log(result);
        }
    }
}
exchange(10000, currencys, 'eUr');