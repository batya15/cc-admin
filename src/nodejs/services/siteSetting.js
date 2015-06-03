"use strict";

var dao = require('dao/daoSiteSetting'),
    TableService = require('services/entity/serviceTable');

var SiteSettingService = function () {
    this.namespace = 'setting';
    this.dao = dao;
};

SiteSettingService.prototype = new TableService();

module.exports = new SiteSettingService();
