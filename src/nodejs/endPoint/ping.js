"use strict";

var EndPoint = require('entity/endPoint'),
    _ = require('underscore'),
    ClientApi = require('entity/clientApi'),
    util = require('util');

var PingEndPoint = function() {
    this.namespace = 'ping';
    this.notAuth = true;
    EndPoint.prototype.initialize.apply(this, arguments);
};

PingEndPoint.prototype = new EndPoint(ClientApi);


module.exports = new PingEndPoint();