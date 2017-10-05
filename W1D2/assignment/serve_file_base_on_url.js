const fs = require('fs');
const http = require('http');

http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('Please input the file name on the url (e.g: filename=xxx.jpg)');
    } else if (req.url !== '/robots.txt') {
        const filePath = __dirname + req.url;
        fs.stat(filePath, (err, stat) => {
            if (err === null) {
                fs.createReadStream(__dirname + req.url).pipe(res);
            } else {
                res.writeHead(404, {'Content-Type': 'text/plain'});
                res.end('404 file not found!');
            }
        })

    }
}).listen(9091);