"use strict";

var dao = require('dao/table'),
    siteUpdater = require('endPoint/siteUpdater');

var Table = function () {
    this.table = 'site_setting';
    this.namespace = 'setting';
};

Table.prototype = {
    getCount: function (param, cb) {
        dao.getCount(param, cb);
    },
    read: function (param, cb) {
        dao.read(param, cb);
    },
    updaterEmit: function (err, res, cb) {
        if (!err) {
            siteUpdater.emit(this.namespace);
        }
        cb(err, res);
    },
    delete: function (param, cb) {
        dao.delete(param, function(err, row) {
            this.updaterEmit(err, row, cb);
        }.bind(this));
    },
    create: function (param, cb) {
        dao.create(param, function(err, row) {
            this.updaterEmit(err, row, cb);
        }.bind(this));
    },
    update: function (param, cb) {
        dao.update(param, function(err, row) {
            this.updaterEmit(err, row, cb);
        }.bind(this));
    }
};

module.exports = new Table();
