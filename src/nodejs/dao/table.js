"use strict";

var db = require("entity/db");
var util = require('util');

var DaoTable = function () {
    this.nameTable = 'site_setting';
};

DaoTable.prototype = {
    getCount: function (param, cb) {
        db.count(this.nameTable, {}, cb);
    },
    read: function (param, cb) {
        var limit = [
            (param.currentPage - 1) * param.countItemsOnPage,
            param.countItemsOnPage
        ];
        var order = {};
        if (param.sortBy) {
            order[param.sortBy] = (param.sortRevert)? 'DESC' : 'ASC';
        }

        db.selectLimit(this.nameTable, '*', limit, {}, order, function (err, res) {
            cb(err, res);
        });
    },
    delete: function (param, cb) {
        db.delete(this.nameTable, param, function(err, affectedRows) {
            cb(err, {delete:affectedRows});
        });
    },
    update: function (param, cb) {
        db.update(this.nameTable, param, function (err, affectedRows) {
            cb(err, affectedRows);
        });
    },
    create: function (param, cb) {
        db.insert(this.nameTable, param, function(err, recordId) {
            cb(err, recordId);
        });
    }
};

module.exports = new DaoTable();