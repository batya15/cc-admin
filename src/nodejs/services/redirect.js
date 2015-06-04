"use strict";

var dao = require('dao/daoRedirect'),
    TableService = require('services/entity/serviceTable');

var RedirectService = function () {
    this.namespace = 'redirectList';
    this.dao = dao;
    this.scheme = {
        'source': '',
        'destination': ''
    };
};

RedirectService.prototype = new TableService();

module.exports = new RedirectService();