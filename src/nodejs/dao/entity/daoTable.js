"use strict";

var db = require("entity/db");
var util = require('util');

var DaoTable = function () {

};

DaoTable.prototype = {
    getCount: function (param, cb) {
        db.count(this.table, {}, cb);
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

        db.selectLimit(this.table, '*', limit, {}, order, function (err, res) {
            cb(err, res);
        });
    },
    delete: function (param, cb) {
        db.delete(this.table, param, function(err, affectedRows) {
            cb(err, {delete:affectedRows});
        });
    },
    update: function (param, cb) {
        db.update(this.table, param, function (err, affectedRows) {
            cb(err, affectedRows);
        });
    },
    create: function (param, cb) {
        db.insert(this.table, param, function(err, recordId) {
            cb(err, recordId);
        });
    }
};

module.exports = DaoTable;