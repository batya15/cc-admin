"use strict";

var dao = require('dao/daoReviews'),
    TableService = require('services/entity/serviceTable');

var ReviewsService = function () {
    this.namespace = 'reviews';
    this.dao = dao;
};

ReviewsService.prototype = new TableService();

module.exports = new ReviewsService();