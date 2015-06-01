"use strict";

var dao = require('dao/table'),
    crypto = require('crypto');

var Table = function () {
    this.table = 'site_setting';
};

Table.prototype = {
    getCount: function (param, cb) {
        dao.getCount(param, cb);
    },
    read: function (param, cb) {
        dao.read(param, cb);
    },
    delete: function (param, cb) {
        dao.delete(param, cb);
    },
    create: function (param, cb) {
        dao.create(param, cb);
    },
    update: function (param, cb) {
        dao.update(param, cb);
    }
};

module.exports = new Table();
