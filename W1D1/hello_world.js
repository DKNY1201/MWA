// /**
//  * Created by Bi on 10/2/17.
//  */
// setTimeout(function () {
//     console.log("world");
// }, 2000);
// console.log("hello");

// const addSync = (a, b) => {
//     for (let i = 0; i < 9e7; i++) {
//
//     }
//     console.log(a + b);
// }
//
// console.log('start');
// const A = addSync(1,2);
// const B = addSync(2,3);
// const C = addSync(3,4);
// console.log('end');
//
// const addAsync = (a, b) => {
//     return setTimeout(() => {
//         console.log(a + b);
//     }, 1000)
// }
//
// console.log('start');
// const A1 = addAsync(1,2);
// const B1 = addAsync(2,3);
// const C1= addAsync(3,4);
// console.log('end');

// var open = false;
//
// setTimeout(function () {
//     open = true;
// }, 1000)
//
// while (!open) {
//     // console.log("waiting...");
// }
//
// console.log('opened!');
//
// function fakeAsync(data, callback) {
//     if (data === 'foo') {
//         callback(true);
//     } else {
//         callback(false);
//     }
// }
//
// fakeAsync('bar', function (result) {
//     console.log(result);
// })
// console.log('Done!');
//
// function realAsync(data, callback) {
//     process.nextTick(function () {
//         callback(data === 'foo');
//     })
// }
//
// function realAsync1(data, callback) {
//     setImmediate(function () {
//         callback(data === 'foo');
//     });
// }
//
// realAsync('foo', function (result) {
//     console.log(result);
// })
// realAsync1('bar', function (result) {
//     console.log(result);
// })
// console.log('Done1!');

// function fib(n) {
//     if (n < 2) {
//         return n;
//     }
//
//     return fib(n - 1) + fib(n - 2);
// }
//
// setTimeout(() => console.log('timeout'), 0);
// console.log('timeout wont be logged until fib is done.');
// console.log(fib(40));
//
//
// function fiba(n , callback) {
//     setImmediate(() => {
//         if (n < 2) {
//             callback(n);
//         } else {
//             fiba(n - 1, (fib1) => {
//                 fiba(n - 2, (fib2) => {
//                     callback(fib1 + fib2);
//                 })
//             })
//         }
//     })
// }
//
// setTimeout(() => console.log('timeout'), 0);
// console.log('dont need to wait for a long process.');
// fiba(30, result => console.log(result));
//
// function fibb(n , callback) {
//     process.nextTick(() => {
//         if (n < 2) {
//             callback(n);
//         } else {
//             fibb(n - 1, (fib1) => {
//                 fibb(n - 2, (fib2) => {
//                     callback(fib1 + fib2);
//                 })
//             })
//         }
//     })
// }
//
// setTimeout(() => console.log('timeout'), 0);
// console.log('dont need to wait for a long process.');
// fibb(30, result => console.log(result));


function a() {
    setTimeout(function () {
        console.log('a');
    },2000);
}

function b() {
    setTimeout(function () {
        console.log('b');
    },1000);
}

a();
b();