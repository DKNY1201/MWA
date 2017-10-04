let play = require('./play');

play.violin();
play.clarinet();

let pattern1 = require('./pattern1');
pattern1();

let pattern2 = require('./pattern2');
pattern2.getCourseName();

let pattern3 = require('./pattern3');
pattern3.getCourseName();
pattern3.courseName = 'CS111';
let pattern3_1 = require('./pattern3');
pattern3_1.getCourseName();

let pattern4 = require('./pattern4');
let courseInstance = new pattern4();
courseInstance.getCourseName();
courseInstance.courseName = 'CS111';
let pattern4_1 = require('./pattern4');
let courseInstance1 = new pattern4_1();
courseInstance1.getCourseName();

let pattern5 = require('./pattern5');
pattern5.getCourseName();

let Emitter = require('./emitter');
let emt = new Emitter();
emt.on('greet', function () {
    setImmediate(() => {
        console.log('Hello Bi');
    })
})

emt.on('greet', function () {
    console.log('Hello Quy');
})

emt.emit('greet');
console.log('Done Emitter');