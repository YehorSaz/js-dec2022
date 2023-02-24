// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone

function User(name, surname, email, phone, id) {
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
    this.id = id;
}

let user1 = new User('Vasya', 'Batarejkin', 'vasya@gmail.com', 223322, 1);


// створити пустий масив, наповнити його 10 об'єктами new User(....)
let usersArr = [
    new User('Vasya', 'Batarejkin', 'vasya@gmail.com', 223322, 1),
    new User('Petya', 'Batarejkin', 'Petya@gmail.com', 223322, 2),
    new User('Kolya', 'Batarejkin', 'Kolya@gmail.com', 223322, 3),
    new User('Masha', 'Batarejkin', 'Masha@gmail.com', 223322, 4),
    new User('Olya', 'Batarejkin', 'Olya@gmail.com', 223322, 5),
    new User('John', 'Batarejkin', 'John@gmail.com', 223322, 6),
    new User('Katya', 'Batarejkin', 'Katya@gmail.com', 223322, 7),
    new User('Marina', 'Batarejkin', 'Marina@gmail.com', 223322, 8),
    new User('Bill', 'Batarejkin', 'Bill@gmail.com', 223322, 9),
    new User('Nick', 'Batarejkin', 'Nick@gmail.com', 223322, 10)
];
// console.log(usersArr);


// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
let filterUsers = usersArr.filter(item => item.id % 2 === 0);
// console.log(filterUsers);
//
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
let sortUsers = usersArr.sort((a, b) => a.id - b.id);
// console.log(sortUsers);
//


// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
class Client {
    constructor(name, surname, email, phone, id, order) {
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.id = id;
        this.order = order;
    }
}

let client = new Client('Vasya', 'Batarejkin', 'vasya@gmail.com', 223322, 1, ['iphone', 'notebook']);
// console.log(client);

// створити пустий масив, наповнити його 10 об'єктами Client
let clients = [];
clients.push(
    new Client('Vasya', 'Batarejkin', 'vasya@gmail.com', 223322, 1, ['product', 'product', 'product']),
    new Client('Petya', 'Batarejkin', 'Petya@gmail.com', 223322, 2, ['product', 'product', 'product', 'product']),
    new Client('Kolya', 'Batarejkin', 'Kolya@gmail.com', 223322, 3, ['product', 'product', 'product']),
    new Client('Masha', 'Batarejkin', 'Masha@gmail.com', 223322, 4, ['product', 'product', 'product', 'product', 'product']),
    new Client('Olya', 'Batarejkin', 'Olya@gmail.com', 223322, 5, ['product', 'product']),
    new Client('John', 'Batarejkin', 'John@gmail.com', 223322, 6, ['product', 'product', 'product', 'product', 'product', 'product']),
    new Client('Katya', 'Batarejkin', 'Katya@gmail.com', 223322, 7, ['product', 'product']),
    new Client('Marina', 'Batarejkin', 'Marina@gmail.com', 223322, 8, ['product', 'product', 'product', 'product', 'product', 'product', 'product']),
    new Client('Bill', 'Batarejkin', 'Bill@gmail.com', 223322, 9, ['product', 'product', 'product']),
    new Client('Nick', 'Batarejkin', 'Nick@gmail.com', 223322, 10, ['product', 'product', 'product', 'product', 'product'])
);
// console.log(clients);


// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
clients.sort((a, b) => a.order.length - b.order.length);
// console.log(clients);

//
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску,
// максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

function Car(model, manufacturer, year, maxspeed, engine) {
    this.model = model;
    this.manufacturer = manufacturer;
    this.year = year;
    this.maxspeed = maxspeed;
    this.engine = engine;
    this.drive = function () {
        console.log(`їдемо зі швидкістю ${maxspeed} км на годину`)
    }
    this.info = function () {
        for (let i in this) {
            if (typeof this[i] !== "function") {
                console.log(`${i} - ${this[i]}`);
            }
        }
    }
    this.increaseMaxSpeed = function (newSpeed) {
        this.maxspeed = maxspeed + newSpeed;
    }
    this.changeYear = function (newValue) {
        this.year = newValue;
    }
    this.addDriver = function (newDriver) {
         this.driver = newDriver;
    }
}

let car = new Car('modelX', 'Tesla', 2015, 250, 'electric');
// console.log(car);


//
//
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
class Car1 {
    constructor(model, manufacturer, year, maxSpeed, engine) {
        this.model = model;
        this.manufacturer = manufacturer;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.engine = engine
    }
    drive() {
        console.log(`їдемо зі швидкістю ${maxSpeed} км на годину`)
    }
    info() {
        for (let i in this) {
            if (typeof this[i] !== "function") {
                console.log(`${i} - ${this[i]}`);
            }
        }
    }
    increaseMaxSpeed(newSpeed) {
        this.maxSpeed = maxSpeed + newSpeed;
    }
    changeYear(newValue) {
        this.year = newValue;
    }
    addDriver(newDriver) {
        this.driver = newDriver;
    }
}
let car1 = new Car1('modelX', 'Tesla', 2015, 250, 'electric');
// console.log(car1);

//
//
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

function Cinderella(name, age, size) {
    this.name = name;
    this.age = age;
    this.size = size;
}
let girls = [
    new Cinderella('Olivia', 20, 35),
    new Cinderella('Emma', 19, 36),
    new Cinderella('Charlotte', 23, 37),
    new Cinderella('Amelia', 25, 33),
    new Cinderella('Ava', 21, 40),
    new Cinderella('Sophia', 18, 41),
    new Cinderella('Isabella', 17, 38),
    new Cinderella('Mia', 27, 39),
    new Cinderella('Evelyn', 29, 35),
    new Cinderella('Harper', 24, 40)
]

class Prince {
    constructor(name, age, shoe) {
        this.name = name;
        this.age = age;
        this.shoe = shoe;
    }
}
let prince = new Prince('Kokos', 27, 38);

//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
let cinderella;
for (const element of girls) {
    if (element.size === prince.shoe) {
        cinderella = element;
    }
}
// console.log(cinderella);

//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
let cinderella1 = girls.find(value => value.size === prince.shoe);
// console.log(cinderella1);