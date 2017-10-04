const fs = require('fs');

const rStream = fs.createReadStream('./big.file');
rStream.setEncoding('utf8');
let data = '';

rStream.on('data', (chunk) => {data += chunk});
rStream.on('end', () => {console.log(data)});