const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    let content = fs.readFileSync(__dirname + '/index.html', 'utf8');
    const name = 'Peter';
    content = content.replace('{name}', name);
    res.end(content);
}).listen(8081);