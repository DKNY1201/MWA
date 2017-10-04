const EventEmitter = require('events');

class MyEmitter extends EventEmitter {
    // You can add custom properties and methods here
}

const myEmitter = new MyEmitter();
myEmitter.on('event', () => {
    console.log('an event occurred!');
});
myEmitter.emit('event');
