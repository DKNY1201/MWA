function myObservable(observer) {
    observer.next('hello!');
    observer.complete();
}

const observer = {
    next: function (value) { console.log(value) },
    err: function (e) { },
    complete: function () { console.log('bye!') }
};

myObservable(observer);