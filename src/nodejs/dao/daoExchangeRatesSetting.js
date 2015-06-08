"use strict";

var DaoTable = require('dao/entity/daoTable'),
    db = require("entity/db");

var exchangeDateSetting = function () {
    this.table = 'exchangeRatesSetting';
};

exchangeDateSetting.prototype = new DaoTable();

exchangeDateSetting.prototype.getCurrentSetting = function (cb) {
    db.queryRow('SELECT * FROM `exchangeRatesSetting` ORDER BY  `exchangeRatesSetting`.`active` DESC ', cb);
};

module.exports = new exchangeDateSetting();

