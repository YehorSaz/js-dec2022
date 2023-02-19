// 1 - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
console.log('-------------1--------------');
let strLength = (string) => string.length;

console.log(strLength('hello world'));
console.log(strLength('lorem ipsum'));
console.log(strLength('javascript is cool'));


// 2 - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
console.log('-------------2--------------');

let str = 'hello world';
let str1 = 'lorem ipsum';
let str2 = 'javascript is cool';
console.log(str.toUpperCase() + '\n' + str1.toUpperCase() + '\n' + str2.toUpperCase());


// 3 - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
console.log('-------------3--------------');

let str3 = 'hello world';
let str4 = 'lorem ipsum';
let str5 = 'javascript is cool';
console.log(str3.toLowerCase() + '\n' + str4.toLowerCase() + '\n' + str5.toLowerCase());


// 4 - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
console.log('-------------4--------------');

let str6 = ' dirty string   ';
str6 = str6.substring(str6.indexOf('d'), str6.indexOf('g') + 1);
console.log(str6);


// 5 - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
console.log('-------------5--------------');

let str7 = 'Ревуть воли як ясла повні';
let newStr7 = str7.split(' ');
console.log(newStr7);
console.log(newStr7.join(' '));


// 6 - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.
console.log('-------------6--------------');

let numArray = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];
let strArray = numArray.map(item => {
    return (item + '');
})
console.log(strArray);


// 7 - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]
console.log('-------------7--------------');
let nums = [11, 21, 3];
let sortArray = (arrays, direction) => {
    if (direction === 'ascending') {
        return arrays.sort((a, b) => a - b);
    } else if (direction === 'descending') {
        return arrays.sort((a, b) => b - a);
    }
}
console.log(sortArray(nums, 'descending'));


// 8 ==========================
// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
console.log('-------------8--------------');

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// -- відсортувати його за спаданням за monthDuration
coursesAndDurationArray.sort((a, b) => {
    return a.monthDuration - b.monthDuration;
} );
console.log(coursesAndDurationArray);


// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
let filterCoursesAndDurationArray = coursesAndDurationArray.filter(item => item.monthDuration > 5);
console.log(filterCoursesAndDurationArray);


// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
let map = coursesAndDurationArray.map((value, index) => {
    return {id: index + 1, title: value.title, monthDuration: value.monthDuration}
})
console.log(map);



// 9 =========================
//     описати колоду карт (від 6 до туза без джокерів)
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше
//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }
//
console.log('-------------9--------------');

const cardsSuits = ['spade', 'diamond','heart', 'clubs'];
const cardsValue = ['6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace'];
let cardsDeck = [];
for (const item of cardsSuits) {
    for (const element of cardsValue) {
        if (item === 'spade' || item === 'clubs'){
        cardsDeck.push({cardsSuit: item, value: element, color: 'black'});
        } else {
            cardsDeck.push({cardsSuit: item, value: element, color: 'red'});
        }
    }
}
console.log(cardsDeck);

// - знайти піковий туз
let spadeAce = cardsDeck.find(item => item.cardsSuit === 'spade' && item.value === 'ace');
console.log(spadeAce);

// - всі шістки
let allSix = cardsDeck.filter(item => item.value === '6');
console.log(allSix);

// - всі червоні карти
let allRed = cardsDeck.filter(item => item.color === 'red');
console.log(allRed);

// - всі буби
let allDiamond = cardsDeck.filter(item => item.cardsSuit === 'diamond');
console.log(allDiamond);

// - всі трефи від 9 та більше

let clubs = cardsDeck.filter(item => item.cardsSuit === 'clubs').slice(3);
console.log(clubs);

// =========================
//
//     Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }
console.log('----------------------------------------------------------------------');
let cardsdDeckReduce = cardsDeck.reduce((accumulator, value) => {
    if (value.cardsSuit === 'spade') {
        accumulator.spades.push(value);
    } else if (value.cardsSuit === 'diamond') {
        accumulator.diamonds.push(value);
    }else  if (value.cardsSuit === 'heart') {
        accumulator.hearts.push(value);
    } else if (value.cardsSuit === 'clubs') {
        accumulator.clubs.push(value);
    }
    return accumulator;
}, {spades: [], diamonds: [], hearts: [], clubs: []});
console.log(cardsdDeckReduce);




// =========================
//     взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray
// --написати пошук всіх об'єктів, в який в modules є sass
// --написати пошук всіх об'єктів, в який в modules є docker
console.log('=======================================================================');

let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];
// for (const item of coursesArray) {
//     for (const itemElement of item.modules) {
//         if (itemElement === 'docker') {
//             console.log(item);
//         }
//     }
// }
let coursesModuleFinder = (arr, module) => arr.filter(item => {
    for (const mKey of item.modules) {
        if (mKey === module) {
            return item;
        }
    }
});
console.log(coursesModuleFinder(coursesArray, 'sass'));