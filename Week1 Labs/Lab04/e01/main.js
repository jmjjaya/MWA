const http = require('http');
const url = require('url');
const cp = require('child_process');

http.createServer(function (req, res) {
    var userUrl = url.parse(req.url, true);
    var filePath = './' + userUrl.query.url;
    var fileReader = cp.fork('child.js');
    fileReader.send(filePath);

    fileReader.on('message', function (msg) {
        res.writeHead(200, {
            'Content-Type': 'text/html'
        });
        res.end(msg);
    });
}).listen(8080);