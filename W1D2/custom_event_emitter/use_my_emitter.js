const Emitter = require('./my_emitter');
const emtr = new Emitter();

emtr.on('greet', function() {
    console.log('Hi from CS572');
});
emtr.on('greet', function() {
    console.log('Hi from CS472');
});
console.log('Hello!');
emtr.emit('greet');
