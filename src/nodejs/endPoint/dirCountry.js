"use strict";

var EndPoint = require('entity/endPoint'),
    Api = require('./api/dirCountryApi');

var CountryEndPoint = function() {
    this.namespace = 'directoryCountry';
    EndPoint.prototype.initialize.apply(this, arguments);
};

CountryEndPoint.prototype = new EndPoint(Api);

module.exports = new CountryEndPoint();