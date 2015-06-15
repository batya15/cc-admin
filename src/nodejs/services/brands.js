"use strict";

var dao = require('dao/daoDirectoryBrands'),
    TableService = require('services/entity/serviceTable');

var Service = function () {
    this.namespace = 'brands';
    this.dao = dao;
    this.scheme = {
        'name': '',
        'description': {
            type : 'textarea'
        },
        'keywords': {
            type : 'textarea'
        },
        'sort': '',
        'img': {
            type: 'file'
        }
    };
};

Service.prototype = new TableService();

module.exports = new Service();