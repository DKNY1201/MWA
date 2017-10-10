const Rx = require('rxjs');

Rx.Observable.of(1, 2, 3)
    .map(n => n + 3)
    .subscribe(
    val => console.log(val),
    null,
    () => console.log('done')
    );