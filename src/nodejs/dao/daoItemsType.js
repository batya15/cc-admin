"use strict";

var DaoTable = require('dao/entity/daoTable');

var Dao = function () {
    this.table = 'items_type';
};

Dao.prototype = new DaoTable();

module.exports = new Dao();

