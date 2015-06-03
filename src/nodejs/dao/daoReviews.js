"use strict";

var DaoTable = require('dao/entity/daoTable');

var ReviewsDao = function () {
    this.table = 'site_reviews';
};

ReviewsDao.prototype = new DaoTable();

module.exports = new ReviewsDao();

