const fs = require('fs');
const http = require('http');

http.createServer((req, res) => {
    const img = fs.createReadStream('./amazing-scenery.jpg');
    img.pipe(res);
}).listen(8083);