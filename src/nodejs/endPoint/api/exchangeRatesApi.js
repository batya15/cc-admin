"use strict";

var siteSetting = require("services/exchangeRates"),
    TableApi = require('endPoint/entity/tableApi'),
    util = require('util');

var ExchangeRatesApi = function () {
    this.service = siteSetting;
    ExchangeRatesApi.super_.apply(this, arguments);
};

util.inherits(ExchangeRatesApi, TableApi);

module.exports = ExchangeRatesApi;