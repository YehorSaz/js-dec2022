// Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль

let arr = [10, 20, 'hello', true, false, 78.5, 'world', [1, 2], -5, 100];
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4]);
console.log(arr[5]);
console.log(arr[6]);
console.log(arr[7]);
console.log(arr[8]);
console.log(arr[9]);


// Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.

let book1 = {
    title: 'JavaScript: The Definitive Guide',
    pageCount: 704,
    genre: 'Programming Language'
};

let book2 = {
    title: 'Horus Rising: The Horus Heresy',
    pageCount: 1000,
    genre: 'fantastic'
};

let book3 = {
    title: 'Ukrainian alphabet',
    pageCount: 34,
    genre: 'learning'
};


// Створити 3 об'єкти які описують книги.
// Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом.
// Кожен автор має поля name та age.

let book_1 = {
    title: 'some title',
    pageCount: 30,
    genre: 'some genre',
    authors: [
        {name: 'Vasily', age: 40},
        {name: 'Petya', age: 50},
        {name: 'Kolya', age: 38}
    ]
};

let book_2 = {
    title: 'some title',
    pageCount: 30,
    genre: 'horror',
    authors: [
        {name: 'Vasily', age: 40},
        {name: 'Petya', age: 50},
        {name: 'Kolya', age: 38}
    ]
};

let book_3 = {
    title: 'some title',
    pageCount: 30,
    genre: 'horror',
    authors: [
        {name: 'Vasily', age: 40},
        {name: 'Petya', age: 50},
        {name: 'Kolya', age: 38}
    ]
};

// Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password.
// Вивести в консоль пароль кожного користувача

let users = [
    {name: 'vasily', username: 'vasily123', password: '00000'},
    {name: 'petya', username: 'petya123', password: '11111'},
    {name: 'kolya', username: 'kolya123', password: '22222'},
    {name: 'olga', username: 'olga123', password: '33333'},
    {name: 'max', username: 'max123', password: '44444'},
    {name: 'anya', username: 'anya123', password: '55555'},
    {name: 'oleg', username: 'oleg123', password: '66666'},
    {name: 'andrey', username: 'andrey123', password: '77777'},
    {name: 'masha', username: 'masha123', password: '88888'},
    {name: 'olga', username: 'olga123', password: '99999'}
];
console.log(users[0]['password']);
console.log(users[1]['password']);
console.log(users[2]['password']);
console.log(users[3]['password']);
console.log(users[4]['password']);
console.log(users[5]['password']);
console.log(users[6]['password']);
console.log(users[7].password);
console.log(users[8].password);
console.log(users[9].password);


// Є змінна х, якій ви надаєте довільне числове значення.
// Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'.
// Перевірте  скрипт при a, що дорівнює 1, 0, -3

let x = 1;
console.log(x !== 0);
x = 0;
console.log(x !== 0);
x = -3;
console.log(x !==0);


// Дано змінну time яка рівна числу від 0 до 59.
// Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

let time = 60;
if (time >= 0 && time <= 15) {
    console.log('number in the first quarter')
} else if (time > 15 && time <= 30) {
    console.log('the number in the second quarter')
} else if (time > 30 && time <= 45) {
    console.log('number in the third quarter')
} else if (time > 45 && time <= 59) {
    console.log('number in the fourth quarter')
} else {
    console.log('number outside the hour')
}

// У змінній day дано якесь число від 1 до 31.
// Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

let day = 10;
if (day >= 1 && day <= 9) {
    console.log('number in the first decade')
} else if (day > 9 && day <= 19) {
    console.log('the number in the second decade')
} else if (day > 19 && time <= 31) {
    console.log('number in the third decade')
} else {
    console.log('the number is not included in any decade')
}

// Скласти розклад на тиждень за домопоги switch.
// Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день
// (можна замість плану на день, назву дня англійською).

let res = prompt('Enter the day of the week number');
switch (res) {
    case "1":
        alert('Sunday');
        break;

    case '2':
        alert('Monday');
        break;

    case '3':
        alert('Tuesday');
        break;

    case '4':
        alert('Wednesday');
        break;

    case '5':
        alert('Thursday');
        break;

    case '6':
        alert('Friday');
        break;

    case '7':
        alert('Saturday');
        break;

    default:
        alert('wrong');
}

// Користувач вводить або має два числа.
// Потрібно знайти та вивести максимальне число з тих двох .
// Також потрібно врахувати коли введені рівні числа.

let num1 = +prompt('Enter first number');
let num2 = +prompt('Enter second number');

if (num1 === num2) {
    alert('The numbers are the same')
} else if (num1 < num2) {
    alert(`The larger number is: ${num2}`)
} else if (num1 > num2) {
    alert(`The larger number is: ${num1}`)
}

// є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно).
// Напишіть код який, за допомоги  оператора || буде присвоювати змінній х значення "default"
// якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)

let q = 'j';
q = q || 'default';
console.log(q);


// з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray.
// За допомоги іф перевірити кожен його елемент на тривалість навчання.
// У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

if (coursesAndDurationArray[0].monthDuration > 5) {
    console.log('Super')
}
if (coursesAndDurationArray[1].monthDuration > 5) {
    console.log('Super')
}
if (coursesAndDurationArray[2].monthDuration > 5) {
    console.log('Super')
}
if (coursesAndDurationArray[3].monthDuration > 5) {
    console.log('Super')
}
if (coursesAndDurationArray[4].monthDuration > 5) {
    console.log('Super')
}
if (coursesAndDurationArray[5].monthDuration > 5) {
    console.log('Super')
}

