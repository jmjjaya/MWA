var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {
    res.writeHead(200, {
        'Content-Type': 'image/jpeg'
    });

    var readStream = fs.createReadStream('./IMG_6175.jpg');
    readStream.pipe(res);

}).listen(4000, '127.0.0.1');

http.createServer(function (req, res) {
    res.writeHead(200, {
        'Content-Type': 'image/jpeg'
    });

    var readStream = fs.createReadStream('./IMG_6175.jpg', {
        encoding:'utf8',
        highWaterMark: 16 * 1024
    });
    readStream.on('data', function (chunk) {
        console.log(chunk);
       // res.write(chunk);
        res.end(chunk, 'binary');
    });

}).listen(4001, '127.0.0.1');