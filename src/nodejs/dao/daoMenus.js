"use strict";

var DaoTable = require('dao/entity/daoTable');

var menusDao = function () {
    this.table = 'site_menus';
};

menusDao.prototype = new DaoTable();

module.exports = new menusDao();

