"use strict";

define(['domain/entity/tableModel'], function (TableModel) {

    var instance;

    var Model = TableModel.extend({
        initialize: function () {
            TableModel.prototype.initialize.apply(this, arguments);
        },
        getLastsExchangeRates: function (cb) {
            this.socket.emit('getLastsExchangeRates', function (err, res) {
                cb(err, res);
            });
        },
        getCurrentExchangeRates: function (cb) {
            this.socket.emit('getCurrentExchangeRates', cb);
        }
    });

    return function () {
        if (!instance) {
            instance = new Model({}, {namespace: 'exchangeRates'});
        }
        return instance;
    };

});