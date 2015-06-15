"use strict";

var dao = require('dao/daoDirectoryCountry'),
    TableService = require('services/entity/serviceTable');

var Service = function () {
    this.namespace = 'country';
    this.dao = dao;
    this.scheme = {
        'name_ru': '',
        'name_en': ''
    };
};

Service.prototype = new TableService();

module.exports = new Service();