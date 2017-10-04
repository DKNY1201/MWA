/**
 * Created by Bi on 10/3/17.
 */
const EventsEmitter = require('events');

class MyEmitter extends EventsEmitter{
    start() {

    }
}

const myEmitter = new MyEmitter();
myEmitter.on('customEvent', () => {
    console.log('custom event');
})

myEmitter.once('customEventOnce', () => {
    console.log('custom event once');
})

myEmitter.emit('customEvent');
myEmitter.emit('customEvent');
myEmitter.emit('customEventOnce');
myEmitter.emit('customEventOnce');

