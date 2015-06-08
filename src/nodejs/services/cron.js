"use strict";

var EventEmitter = require('events').EventEmitter;
var util = require('util');


var Cron = function () {
    EventEmitter.call(this);
    setTimeout(this.initialize.bind(this), 0);
};

util.inherits(Cron, EventEmitter);

Cron.prototype.initialize = function () {
    this.emit('restart');
    setInterval(function () {
        this.trigger();
    }.bind(this), 1000 * 60);
};

Cron.prototype.trigger = function () {
    this.emit('minute');
    var date = new Date();
    if (date.getMinutes() === 0) {
        this.emit('hour');
    }
    if (date.getHours() === 0) {
        this.emit('day');
    }
};


module.exports = new Cron();