const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'application/json'});
    const obj = {
        name: 'Quy',
        age: 28
    }
    res.end(JSON.stringify(obj));
}).listen(8080);