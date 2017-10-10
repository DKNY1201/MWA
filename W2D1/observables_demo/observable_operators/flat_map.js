const Rx = require('rxjs');

const source = Rx.Observable.interval(100).take(10)
    .flatMap(x => Rx.Observable.of(1, 2, 3));

source.subscribe(x => console.log(x));