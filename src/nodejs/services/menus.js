"use strict";

var dao = require('dao/daoMenus'),
    TableService = require('services/entity/serviceTable');

var MenusService = function () {
    this.namespace = 'menu';
    this.dao = dao;
};

MenusService.prototype = new TableService();

module.exports = new MenusService();