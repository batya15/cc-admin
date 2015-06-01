"use strict";

var dao = require('dao/table'),
    crypto = require('crypto');

var Table = function () {
    this.table = 'site_setting';
};

Table.prototype = {
    getCount: function (param, cb) {
        console.log(param);
        cb(null, 5288);
    },
    read: function (param, cb) {
        dao.read(param, cb);
    },
    delete: function (param, cb) {
        dao.read(param, cb);
    },
    create: function (param, cb) {
        dao.read(param, cb);
    },
    update: function (param, cb) {
        dao.read(param, cb);
    }
};

module.exports = new Table();
