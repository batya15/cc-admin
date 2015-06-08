"use strict";

var EndPoint = require('entity/endPoint'),
    Api = require('./api/exchangeRatesApi');

var ExchangeRatesSetting = function() {
    this.namespace = 'exchangeRates';
    EndPoint.prototype.initialize.apply(this, arguments);
};

ExchangeRatesSetting.prototype = new EndPoint(Api);

module.exports = new ExchangeRatesSetting();