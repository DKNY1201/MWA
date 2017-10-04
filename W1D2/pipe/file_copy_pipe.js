const fs = require('fs');
const rstream = fs.createReadStream('greet.txt');
const wstream = fs.createWriteStream('greet_copy.txt');
rstream.pipe(wstream);
