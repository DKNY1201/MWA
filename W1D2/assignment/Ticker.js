const EventEmitter = require('events');

class Ticker extends EventEmitter {
    start() {
        setInterval(() => {
            this.emit('tick');
        }, 1000);
    }
}

let ticker = new Ticker();
ticker.on('tick', () => console.log('TICK'));
ticker.start();