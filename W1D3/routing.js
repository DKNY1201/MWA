const fs = require('fs');
const http = require('http');

http.createServer((req, res) => {
    console.log(req.url);
    if (req.url === '/') {
        fs.createReadStream(__dirname + '/index.html').pipe(res);
    } else if (req.url === '/api') {
        const obj = {
            name: 'Peter Tran',
            age: 28
        }
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify(obj));
    } else {
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.end('404 not found!');
    }
}).listen(9090);