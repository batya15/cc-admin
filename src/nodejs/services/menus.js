"use strict";

var dao = require('dao/daoMenus'),
    TableService = require('services/entity/serviceTable');

var MenusService = function () {
    this.namespace = 'menu';
    this.dao = dao;
    this.scheme = {
        'caption': '',
        'menu': '',
        'url': '',
        'submenu': '',
        'cost': '',
        'description': {
            type: 'textarea'
        },
        'image': '',
        'cssClass': '',
        'hideUrl': ''
    };
};

MenusService.prototype = new TableService();

module.exports = new MenusService();