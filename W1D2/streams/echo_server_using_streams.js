const http = require('http');
http.createServer(function (req, res) {
    req.on('readable', function () {
        var chunk = null;
        while (null !== (chunk = req.read())) {
            res.write(chunk);
        }
    });
    req.on('end', function () {
        res.end('end ^^');
    })
}).listen(8080);
