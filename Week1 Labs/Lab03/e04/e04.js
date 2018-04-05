var zlib = require('zlib');
var fs = require('fs');

var gzip = zlib.createGzip();

var r = fs.createReadStream('./my.txt');
var w = fs.createWriteStream('./mygzipfile.txt.gz');
r.pipe(gzip).pipe(w);

