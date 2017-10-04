/**
 * Created by Bi on 10/2/17.
 */
'use strict';


/* ===== QUESTION 1 ===== */
var library = [
    {prof: 'Asaad Saad', course: 'WAP', courseID: 'CS452'},
    {prof: 'Rakesh Shrestha', course: 'WAA', courseID: 'CS545'},
    {prof: 'Steve Nolle', course: 'SWE', courseID: 'CS425'}
]

console.log(library);
//=== Long way ===//
// for (let i = 0; i < library.length; i++) {
//     for (let j = 0; j < library.length - 1; j++) {
//         if (library[j].course > library[j + 1].course) {
//             swap(j, j + 1);
//         }
//     }
// }
//
// function swap(i, j) {
//     let c = library[i];
//     library[i] = library[j];
//     library[j] = c;
// }
//
// console.log(library);

//=== Sort way ===//
library.sort(function (lib1, lib2) {
    return (lib1.course > lib2.course) - (lib1.course < lib2.course);
})
console.log(library);


/* ===== QUESTION 2 ===== */
const numbers = [3, 62, 234, 7, 23, 74, 23, 76, 92];
const numbersGreaterThan70 = numbers.filter(number => number > 70);
console.log(numbersGreaterThan70);


/* ===== QUESTION 3 ===== */
const items = Array.from(document.querySelectorAll('[data-time]'));
console.log(items);
const ecma6 = items.filter(item => item.textContent.includes('ECMA6'));
console.log(ecma6);
const times = ecma6.map(item => item.getAttribute('data-time'));
console.log(times);
const arraySecond = times.map(time => {
    let dateArr = time.split(':');
    return dateArr[0] * 60 + +dateArr[1];
});
console.log(arraySecond);

const totalTime = arraySecond.reduce((sum, item) => sum + item, 0);
console.log(totalTime);


/* ===== QUESTION 4 ===== */
class BMICalculator {
    constructor(height, weight) {
        this.height = height;
        this.weight = weight;
    }

    validate(val) {
        if (!val) {
            document.getElementById('output').innerHTML = 'Please input a value';
            return false;
        }
        if (isNaN(val)) {
            document.getElementById('output').innerHTML = 'Please input a number';
            return false;
        }
        if (val <= 0) {
            document.getElementById('output').innerHTML = 'Please input a number greater than 0';
            return false;
        }
        return true;
    }

    calculate() {
        const bmi = this.weight / Math.pow(this.height, 2);
        document.getElementById('output').innerHTML = '' + bmi;
        return bmi;
    }
}

let btn = document.getElementById('calculate');
btn.addEventListener('click', function () {
    let h = document.getElementsByName('height')[0].value;
    let w = document.getElementsByName('weight')[0].value;

    let bmiCalculator = new BMICalculator(h, w);

    if (bmiCalculator.validate(h) && bmiCalculator.validate(w)) {
        bmiCalculator.calculate();
    }
})



