const fs = require('fs');
const zlib = require('zlib');
fs.createReadStream('greet.txt')
    .pipe(zlib.createGzip())
    .pipe(fs.createWriteStream('greet.txt.gz'));
