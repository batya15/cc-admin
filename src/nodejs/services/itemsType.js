"use strict";

var dao = require('dao/daoItemsType'),
    TableService = require('services/entity/serviceTable');

var Service = function () {
    this.namespace = 'itemsType';
    this.dao = dao;
    this.scheme = {
        'type': '',
        'description': ''
    };
};

Service.prototype = new TableService();

module.exports = new Service();