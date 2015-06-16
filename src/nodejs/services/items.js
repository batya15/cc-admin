"use strict";

var dao = require('dao/daoItems'),
    TableService = require('services/entity/serviceTable');

var Service = function () {
    this.namespace = 'items';
    this.dao = dao;
    this.scheme = {
        'id_brend': '',
        'name': '',
        'id_country': '',
        'warranty': '',
        'id_type': '',
        'quantity': '',
        'id_yandex_market': '',
        'price': '',
        'price_dollars': '',
        'price_euro': '',
        'price_delta': '',
        'price_old': '',
        'img': {
            'type': 'file'
        },
        'date_manufacture': ''
    };
};

Service.prototype = new TableService();

module.exports = new Service();