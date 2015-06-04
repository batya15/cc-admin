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
        'avatar': '',
        'time': '',
        'approved': {
            type: 'checkbox'
        },
        'sex': ''
    };
};

ReviewsService.prototype = new TableService();

module.exports = new ReviewsService();