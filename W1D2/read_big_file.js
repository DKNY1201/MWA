const fs = require('fs');

const server = require('http').createServer();

server.on('request', (req, res) => {
    fs.readFile('./big.file', (err, data) => {
        if (err) {
            console.log(err);
        }
        res.end(data);
    })
})

server.listen(8081);