const Rx = require('rxjs');

const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Success!")
    }, 1000)
})

Rx.Observable.fromPromise(myPromise)
    .subscribe(val => console.log(val));