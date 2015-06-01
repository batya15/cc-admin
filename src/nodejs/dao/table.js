"use strict";

var db = require("entity/db");
var util = require('util');

var SELECT_ALL_USERS = "SELECT * FROM `site_setting` LIMIT 0, 50;";

var DaoTable = function () {};

DaoTable.prototype = {
    read: function (param, cb) {
        var sort = '';
        var revert = (param.sortRevert)? 'DESC' : ' ASC';
        if (param.hasOwnProperty('sortBy')) {
            sort = 'ORDER BY  `site_menus`.`' + param.sortBy + '` ' + revert;
        }

        db.query(SELECT_ALL_USERS, function (err, row) {
            cb(err, row);
        });
    }
};

module.exports = new DaoTable();