const fs = require('fs');
const http = require('http');

http.createServer((req, res) => {
    const start = new Date();
    let wStream = fs.createWriteStream('img-uploaded.jpg');
    let totalDataLength = req.headers['content-length'];

    let currentDataLength = 0;
    req.on('data', (chunk) => {
        currentDataLength += chunk.length;
        console.log(`Uploaded ${(currentDataLength / totalDataLength) * 100}%`);
        res.write(`Uploaded ${(currentDataLength / totalDataLength) * 100}%`);
    })

    req.on('end', () => {
        const end = new Date();
        console.log(`Upload successful after ${end - start}ms`);
        res.write(`Upload successful after ${end - start}ms`);
    })

    req.pipe(wStream);
}).listen(9097);

