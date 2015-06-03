"use strict";

var siteSetting = require("services/reviews"),
    TableApi = require('endPoint/entity/tableApi'),
    util = require('util');

var SiteReviewsApi = function () {
    this.service = siteSetting;
    SiteReviewsApi.super_.apply(this, arguments);
};

util.inherits(SiteReviewsApi, TableApi);

module.exports = SiteReviewsApi;