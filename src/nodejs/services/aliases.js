"use strict";

var dao = require('dao/daoAliases'),
    TableService = require('services/entity/serviceTable');

var AliasesService = function () {
    this.namespace = 'aliases';
    this.dao = dao;
    this.scheme = {
        alias: '',
        url: ''
    };
};

AliasesService.prototype = new TableService();

module.exports = new AliasesService();