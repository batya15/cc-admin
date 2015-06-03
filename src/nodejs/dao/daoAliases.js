"use strict";

var DaoTable = require('dao/entity/daoTable');

var AliasesDao = function () {
    this.table = 'site_aliases';
};

AliasesDao.prototype = new DaoTable();

module.exports = new AliasesDao();

