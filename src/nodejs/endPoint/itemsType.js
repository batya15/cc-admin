"use strict";

var EndPoint = require('entity/endPoint'),
    Api = require('./api/itemType');

var CountryEndPoint = function() {
    this.namespace = 'itemsType';
    EndPoint.prototype.initialize.apply(this, arguments);
};

CountryEndPoint.prototype = new EndPoint(Api);

module.exports = new CountryEndPoint();