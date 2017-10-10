const Rx = require('rxjs');
// From array of values
const data = [
    { id: 0, name: 'Learning Node', topic: 'Node JS', },
    { id: 1, name: 'Learning MongoDB', topic: 'MongoDB', },
    { id: 2, name: 'Learning TypeScript', topic: 'TypeScript', }];

Rx.Observable.from(data)
    // extra set of parenthesis is required when returning object
    .map(obj => ({ msg: `${obj.name} is awaesome!` }))
    .subscribe(obj => console.log(obj.msg));