"use strict";

var siteSetting = require("services/exchangeRates"),
    TableApi = require('endPoint/entity/tableApi'),
    _ = require('underscore'),
    util = require('util');

var ExchangeRatesApi = function () {
    this.service = siteSetting;
    ExchangeRatesApi.super_.apply(this, arguments);
};

util.inherits(ExchangeRatesApi, TableApi);

ExchangeRatesApi.prototype = _.extend(ExchangeRatesApi.prototype, {
    events: {
        'getLastsExchangeRates': 'getLastsExchangeRates'
    },
    getLastsExchangeRates: function (cb) {
        this.service.getLastsExchangeRates(cb);
    }
});

module.exports = ExchangeRatesApi;