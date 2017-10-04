    const fs = require('fs');
const rstream = fs.createReadStream('greet.txt');
const wstream = fs.createWriteStream('greet2.txt');
rstream.on('data', (chunk)=> wstream.write(chunk));
rstream.on('end', (chunk)=>wstream.end(' world.'));
