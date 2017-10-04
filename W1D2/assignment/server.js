const fs = require('fs');
const http = require('http');

const server = http.createServer();
server.on('request', (req, res) => {
    fs.readFile('./amazing-scenery.jpg', (err, data) => {
        if (err) {
            throw err;
        }
        res.end(data);
    })
})
server.listen(8084);
