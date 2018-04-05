var EventEmitter = require('events');
var util = require('util');

function Clock() {
    EventEmitter.call(this);
}

util.inherits(Clock, EventEmitter);

Clock.prototype.tick = function () {
    var _this = this;
    setInterval(function () {
        _this.emit('tick', 'woohoo');
    }, 100);
};

module.exports = Clock;