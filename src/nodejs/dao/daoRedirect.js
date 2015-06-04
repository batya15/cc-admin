"use strict";

var DaoTable = require('dao/entity/daoTable');

var RedirectDao = function () {
    this.table = 'site_redirect';
};

RedirectDao.prototype = new DaoTable();

module.exports = new RedirectDao();

