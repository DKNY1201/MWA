/**
 * Created by Bi on 10/2/17.
 */
const http = require('http');
http.createServer(function (req, res) {
    res.writeHead(200);
    res.write("<p>Processing request</p>");

    setTimeout(function () {
        res.write("<p>Request completed</p>");
        res.end();
    }, 5000);
}).listen(9090);