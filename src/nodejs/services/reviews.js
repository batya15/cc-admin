"use strict";

var dao = require('dao/daoReviews'),
    TableService = require('services/entity/serviceTable');

var ReviewsService = function () {
    this.namespace = 'reviews';
    this.dao = dao;
    this.scheme = {
        'name': '',
        'contact': '',
        'text': {
            type: 'textarea'
        },
        'time': {
            "type": "datetime"
        },
        'approved': {
            type: 'checkbox'
        },
        'sex': {
            type: 'select',
            options: {
                0: 'Неопределен',
                1: 'Мужской',
                2: 'Женский'
            }
        },
        'img': {
            type: 'file'
        }
    };
};

ReviewsService.prototype = new TableService();

module.exports = new ReviewsService();