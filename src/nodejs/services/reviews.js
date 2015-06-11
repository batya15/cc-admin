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
        'time': '',
        'approved': {
            type: 'checkbox'
        },
        'sex': '',
        'img': {
            type: 'file'
        }
    };
};

ReviewsService.prototype = new TableService();

module.exports = new ReviewsService();