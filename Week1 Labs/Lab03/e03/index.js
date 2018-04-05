const Clock = require('./clock');

var myclock = new Clock();

myclock.on('tick',function (data) { 
    console.log(data);
 });

 myclock.tick();