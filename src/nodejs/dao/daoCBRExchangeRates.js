"use strict";

var db = require("entity/db");
var log = require("util/logger")(module);

var DaoCBRExchangeRates = function () {

};

DaoCBRExchangeRates.prototype.getLastExhangeRates = function (cb) {
    db.queryRow('SELECT * FROM  `_CBR_rates` ORDER BY  `_CBR_rates`.`id` DESC', cb);
};

DaoCBRExchangeRates.prototype.setNewExchangeRates = function (data, cb) {
    db.insert('_CBR_rates', data, function (err) {
        if (err) {
            log.error(err);
        } else {
            cb();
        }
    });
};


module.exports = new DaoCBRExchangeRates();

