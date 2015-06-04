"use strict";

var siteUpdater = require('endPoint/siteUpdater');

var TableService = function () {};

TableService.prototype = {
    getCount: function (param, cb) {
        this.dao.getCount(param, cb);
    },
    getScheme: function (cb) {
        cb(null, this.scheme);
    },
    read: function (param, cb) {
        this.dao.read(param, cb);
    },
    updaterEmit: function (err, res, cb) {
        if (!err) {
            siteUpdater.emit(this.namespace);
        }
        cb(err, res);
    },
    delete: function (param, cb) {
       this.dao.delete(param, function(err, row) {
            this.updaterEmit(err, row, cb);
        }.bind(this));
    },
    create: function (param, cb) {
       this.dao.create(param, function(err, row) {
            this.updaterEmit(err, row, cb);
        }.bind(this));
    },
    update: function (param, cb) {
       this.dao.update(param, function(err, row) {
            this.updaterEmit(err, row, cb);
        }.bind(this));
    }
};

module.exports = TableService;
