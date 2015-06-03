"use strict";

var DaoTable = require('dao/entity/daoTable');

var SiteSettingDao = function () {
    this.table = 'site_setting';
};

SiteSettingDao.prototype = new DaoTable();

module.exports = new SiteSettingDao();

