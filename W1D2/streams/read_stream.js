const fs = require('fs');
const rstream = fs.createReadStream('greet.txt');
let data = '';
rstream.setEncoding('utf8');
rstream.on('data', (chunk)=> {data+=chunk});
rstream.on('end', ()=>console.log(data));
