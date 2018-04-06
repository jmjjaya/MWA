var fs = require('fs');
process.on('message', (msg) => {
    var readStream = fs.createReadStream(msg);
    const chunks = [];

    readStream.on("data", function (chunk) {
        chunks.push(chunk);
    });
    readStream.on('error', function (err) {
        process.send('404 File Not Found');
    });
    readStream.on("end", function () {
        var buffer = Buffer.concat(chunks);
        process.send(buffer.toString());
    });

});