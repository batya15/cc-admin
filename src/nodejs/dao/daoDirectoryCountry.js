"use strict";

var DaoTable = require('dao/entity/daoTable');

var Dao = function () {
    this.table = 'directory_country';
};

Dao.prototype = new DaoTable();

module.exports = new Dao();

