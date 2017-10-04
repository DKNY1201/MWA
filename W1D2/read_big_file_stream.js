const fs = require('fs');

const server = require('http').createServer();

server.on('request', (req, res) => {
    const bigFile = fs.createReadStream('./big2.file');
    bigFile.pipe(res);
})

server.listen(8082);