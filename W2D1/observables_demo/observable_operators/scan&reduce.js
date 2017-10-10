const Rx = require('rxjs');
const observable = Rx.Observable.of(1, 2, 3, 4, 5);
observable
    .reduce((total, currentValue) => {
        return total + currentValue;
    }, 0)
    .subscribe((value) => console.log(value));

observable
    .scan((total, currentValue) => {
        return total + currentValue;
    }, 0)
    .subscribe((value) => console.log(value));
        u
