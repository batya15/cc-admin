"use strict";

var DaoTable = require('dao/entity/daoTable');

var exchangeDateSetting = function () {
    this.table = 'exchangeRatesSetting';
};

exchangeDateSetting.prototype = new DaoTable();

module.exports = new exchangeDateSetting();

