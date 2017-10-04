/**
 * Created by Bi on 10/2/17.
 */
// 'use strict';

// Template String/Literals
const song = {
    name: 'a song for you',
    artist: 'Celine Dion'
}

const markup = `
    <div class="song">
        <p>${song.name} ${song.artist ? `(Featuring ${song.artist})` : ''}</p>
    </div>
`;

console.log(markup);


// Arrow function
var multiply = (num1, num2) => num1 * num2;
console.log(multiply(2, 10));


// Destructuring array and object
const details = ['Jame', 28, 'google.com'];
const [name, age, website] = details;
console.log(name);
console.log(age);
console.log(website);


const settings = {width: 300, color: 'black'};
const {width = 100, height = 100, color = 'blue', fontSize = 25} = settings;
console.log(width);


// Rest and Spread operators
const course = {
    courseName: 'MWA',
    technologies: ['NodeJS', 'NoSQL', 'AngularJS']
};

const gainedKnowledge = ['MongoDB', 'TypeScript', ...course.technologies];
console.log(gainedKnowledge);

function foo(first, second, ...args) {
    return first + second + args.reduce((sum, next) => sum + next, 0);
}

console.log(foo(1, 2, ...[3, 4, 5]));

function sum(first, ...others) {
    for (var i = 0; i < others.length; i++)
        first += others[i];
    return first;
}
console.log(sum(1, 2, 3, 4));

// Higher order function
const sum1 = (x, y) => x + y;
const calculate = (fn, x, y) => fn(x, y);
console.log(calculate(sum1, 1, 2));

// Filter & Map
let students = [
    {name: 'Anna', grade: 6},
    {name: 'John', grade: 4},
    {name: 'Quy', grade: 9}
]

console.log(students.filter(student => student.grade > 5));
console.log(students.map(student => student.name));
console.log(students.reduce((sum, student) => student.grade + sum, 0));

const isApproved = student => student.grade > 5;
const toName = student => student.name;
console.log(students.filter(isApproved).map(toName));


// Function composition
const compose = (f, g) => x => f(g(x));
// function compose(f, g) {
//     return function (x) {
//         return f(g(x));
//     }
// }
const toUpperCase = x => x.toUpperCase();
const exclaim = x => `${x}!`;

const surprise = compose(exclaim, toUpperCase);
console.log(surprise('quy tran'));


// Inheritance
let person = {
    fistName: 'Quy',
    lastName: 'Tran',
    greeting: function () {
        console.log("Hi " + this.fistName);
    }
}

let peter = Object.create(person);
console.log(peter.hasOwnProperty('fistName'));
peter.fistName = 'Peter';
console.log(peter.hasOwnProperty('fistName'));
peter.greeting();

// Function constructor
function Person() {
    console.log(this);
    this.university = 'MUM';
    // year = 2017;
}

let falcuty = new Person();
falcuty.university = 'MIT';
Person.prototype.greet = function () {
    console.log('Hi. I work for ' + this.university);
}

falcuty.greet();


function Foo(y) {
    this.y = y;
}

Foo.prototype.x = 10;
Foo.prototype.calculate = function (z) {
    return this.x + this.y + z;
}

let bar1 = new Foo(10);
let bar2 = new Foo(20);
console.log(bar1.calculate(30));
console.log(bar2.calculate(40));
console.log(
    bar1.__proto__ === Foo.prototype, bar2.__proto__ === Foo.prototype
);


// Class
class Person1 {
    constructor(firstName = 'Quy', lastName = 'Tran') {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    greet() {
        console.log(this.firstName, this.lastName);
    }
}

let bi = new Person1('Bi', 'Tran');
bi.greet();

// bind(), call(), apply()
let me = {
    fistName: 'Quy',
    lastName: 'Tran',
    getFullName: function () {
        return this.firstName + this.lastName;
    }
}

let bi1 = {
    firstName: 'Bi',
    lastName: 'Cu'
}

console.log(me.getFullName.apply(bi1));

// Exception handling
try {
    console.log('About to throw an error');
    throw new Error('Error throw');
} catch (e) {
    console.log('Catch...');
    console.log('Error caused: ' + e.message);
} finally {
    console.log('Finally');
}

//
// try {
//     setTimeout(function () {
//         console.log('About to throw an error');
//         throw new Error('throw error');
//     }, 1000);
// } catch (e) {
//     console.log('This will be never execute');
// }
//
// console.log('This is outside the try block');

setTimeout(function () {
    try {
        console.log('About to throw an error');
        throw new Error('throw error');
    } catch (e) {
        console.log('This will be execute');
    }
}, 1000);


// Promise
const luckyDraw = function () {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            let n = Math.floor(Math.random() * 10 + 1);
            console.log(n);
            if (n % 2 === 0) {
                resolve('you are lucky');
            } else {
                reject('you are unlucky');
            }
        }, 1000);
    });
}

luckyDraw().then(result => console.log(result)).catch(error => console.log(error));