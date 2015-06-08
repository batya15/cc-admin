"use strict";

var dao = require('dao/daoExchangeRatesSetting'),
    TableService = require('services/entity/serviceTable'),
    daoCBRExchangeRates = require('dao/daoCBRExchangeRates'),
    siteUpdater = require('endPoint/siteUpdater'),
    request = require('request'),
    log = require("util/logger")(module),
    parseString = require('xml2js').parseString,
    cron = require('services/cron');

var ExchangeRates = function () {
    this.namespace = 'menu';
    this.dao = dao;
    this.scheme = {
        'active': 'checkbox',
        'cbrActive': 'checkbox',
        'allowance': '',
        'ratesUSD': '',
        'ratesEUR': ''
    };
    this.updateCBTExchangeRates();
    cron.on('hour', this.updateCBTExchangeRates.bind(this));
};

ExchangeRates.prototype = new TableService();

ExchangeRates.prototype.getLastsExchangeRates = function (cb) {
    daoCBRExchangeRates.getLastsExchangeRates(cb);
};

ExchangeRates.prototype.getCurrentExchangeRates = function () {

};

ExchangeRates.prototype.updateCBTExchangeRates = function () {
    var self = this;
    function setNewExchangeRates(res) {
        daoCBRExchangeRates.setNewExchangeRates({
            date: res.date,
            USD: parseFloat(res.usd.replace(",", ".")),
            EUR: parseFloat(res.eur.replace(",", "."))
        }, function() {
            siteUpdater.emit(self.namespace);
        });
    }

    daoCBRExchangeRates.getLastExhangeRates(function (error, current) {
        this._getCBRRates(function(err, res) {
            if (!error && err && res) {
                setNewExchangeRates(res);
            } else if (res && current.date !== res.date) {
                setNewExchangeRates(res);
            }
        });
    }.bind(this));

};

ExchangeRates.prototype._getCBRRates = function (cb) {
    request({
        uri: 'http://www.cbr.ru/scripts/XML_daily.asp',
        method: 'GET'
    }, function (err, response, body) {
        if (err || response.statusCode !== 200) {
            log.error('not found XML of exchange rates', err);
            cb(err);
            return err;
        }
        parseString(body, function (err, json) {
            var date, usd, eur;
            if (err) {
                log.error('cannot parse xml');
                cb(err);
                return err;
            }
            if (json.hasOwnProperty('ValCurs') && json.ValCurs.hasOwnProperty('$') && json.ValCurs.$.hasOwnProperty('Date')) {
                date = json.ValCurs.$.Date;
                if (json.ValCurs.hasOwnProperty('Valute')) {
                    json.ValCurs.Valute.forEach(function (val) {
                        switch (val.CharCode[0]) {
                            case 'USD':
                                usd = val.Value[0];
                                break;
                            case 'EUR':
                                eur = val.Value[0];
                                break;
                        }
                    });
                    if (date && eur && usd) {
                        cb(null, {
                            date: date,
                            eur: eur,
                            usd: usd
                        });
                    } else {
                        cb(new Error('Not Found Rates'));
                    }
                }
            } else {
                log.error('xml not correct');
                cb(err);
                return err;
            }

        });
    });
};

module.exports = new ExchangeRates();
