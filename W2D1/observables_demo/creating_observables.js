const Rx = require('rxjs');
// Internally produce new events
// const myObservable1 = Rx.Observable.create(
//     observer => {
//         observer.next('CS572');
//         setTimeout(() => observer.next('Best course ever!'), 1000);
//     });
// myObservable1.subscribe(value => console.log(value));

// Externally produce new events
const myObservable2 = new Rx.Subject();
const sub = myObservable2.subscribe(value => console.log(value));
myObservable2.next('CS572');