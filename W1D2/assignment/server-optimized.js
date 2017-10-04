const fs = require('fs');
const http = require('http');

http.createServer((req, res) => {
    const rStream = fs.createReadStream('amazing-scenery.jpg');

    rStream.on('data', (chunk) => {
        res.write(chunk);
    })

    rStream.on('end', () => {
        res.end();
    })
}).listen(9999);