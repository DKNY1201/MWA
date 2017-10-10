const Rx = require('rxjs');

const source = Rx.Observable.create(function (observer) {
    observer.next('hello!');
    observer.complete();
});

const subscription = source.subscribe(
    x => console.log(x),
    err => console.log(err),
    () => console.log('done!')
)

subscription.unsubscribe();