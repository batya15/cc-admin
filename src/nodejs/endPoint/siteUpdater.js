"use strict";

var EndPoint = require('entity/endPoint');

var SiteUpdaterEndPoint = function() {
    this.namespace = 'siteUpdater';
    this.notAuth = true;
    EndPoint.prototype.initialize.apply(this, arguments);
};

SiteUpdaterEndPoint.prototype = new EndPoint();

SiteUpdaterEndPoint.prototype.emit = function(ns, data) {
    this.socket.emit('update', {service: ns, data: data});
};

module.exports = new SiteUpdaterEndPoint();