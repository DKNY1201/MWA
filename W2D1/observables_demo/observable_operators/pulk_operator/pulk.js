const Rx = require('rxjs');
// Pass on a new value by plucking it
const source = Rx.Observable.from([
    { name: 'Bruce', age: 36, job: { title: 'Developer', language: 'JavaScript' } },
    { name: 'Mike', age: 33 }])
    // will return undefined    
    .pluck('job', 'title')
    .subscribe(val => console.log(val));
