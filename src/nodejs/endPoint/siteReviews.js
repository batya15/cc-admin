"use strict";

var EndPoint = require('entity/endPoint'),
    Api = require('./api/siteReviewsApi');

var SiteReviewsEndPoint = function() {
    this.namespace = 'siteReviews';
    EndPoint.prototype.initialize.apply(this, arguments);
};

SiteReviewsEndPoint.prototype = new EndPoint(Api);

module.exports = new SiteReviewsEndPoint();