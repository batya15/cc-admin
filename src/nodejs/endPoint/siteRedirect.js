"use strict";

var EndPoint = require('entity/endPoint'),
    Api = require('./api/siteRedirectApi');

var RedirectListEndPoint = function() {
    this.namespace = 'siteRedirect';
    EndPoint.prototype.initialize.apply(this, arguments);
};

RedirectListEndPoint.prototype = new EndPoint(Api);

module.exports = new RedirectListEndPoint();