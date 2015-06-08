"use strict";

var db = require("entity/db");
var log = require("util/logger")(module);

var DaoCBRExchangeRates = function () {

};

DaoCBRExchangeRates.prototype.getLastExhangeRates = function (cb) {
    db.queryRow('SELECT * FROM  `_CBR_rates` ORDER BY  `id` DESC', cb);
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

DaoCBRExchangeRates.prototype.getLastsExchangeRates = function (cb) {
    db.selectLimit('_CBR_rates','*', [0, 30], {}, {id: 'DESC'}, function (err, res) {
        cb(err, res);
    });
};


module.exports = new DaoCBRExchangeRates();

