"use strict";

var dao = require('dao/daoSiteSetting'),
    TableService = require('services/entity/serviceTable');

var SiteSettingService = function () {
    this.namespace = 'setting';
    this.dao = dao;
    this.scheme = {
        'name': '',
        'active': {
            type: 'checkbox'
        },
        'slogan': '',
        'phone': '',
        'openingTimes': '',
        'keywords': {
            type: 'textarea'
        },
        'description': {
            type: 'textarea'
        },
        'yandexShare': {
            type: 'textarea'
        },
        'robots': {
            type: 'textarea'
        },
        'googleAnalytics': {
            type: 'textarea'
        },
        'yandexMetrika': {
            type: 'textarea'
        },
        'scripts': {
            type: 'textarea'
        },
        'metaTags': {
            type: 'textarea'
        },
        'email': ''
    };
};

SiteSettingService.prototype = new TableService();

module.exports = new SiteSettingService();
