"use strict";

var EndPoint = require('entity/endPoint'),
    Api = require('./api/items');

var CountryEndPoint = function() {
    this.namespace = 'items';
    EndPoint.prototype.initialize.apply(this, arguments);
};

CountryEndPoint.prototype = new EndPoint(Api);

module.exports = new CountryEndPoint();