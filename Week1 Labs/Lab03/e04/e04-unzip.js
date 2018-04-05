var zlib = require('zlib');
var fs = require('fs');

var ungzip = zlib.createGunzip();
var zr = fs.createReadStream('./mygzipfile.txt.gz');
var uzw = fs.createWriteStream('./unzipfile.txt');
zr.pipe(ungzip).pipe(uzw);