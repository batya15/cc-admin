"use strict";

var EndPoint = require('entity/endPoint'),
    Api = require('./api/siteMenusApi');

var SiteMenusEndPoint = function() {
    this.namespace = 'siteMenus';
    EndPoint.prototype.initialize.apply(this, arguments);
};

SiteMenusEndPoint.prototype = new EndPoint(Api);

module.exports = new SiteMenusEndPoint();