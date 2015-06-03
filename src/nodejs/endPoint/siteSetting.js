"use strict";

var EndPoint = require('entity/endPoint'),
    Api = require('./api/siteSettingApi');

var SiteSettingEndPoint = function() {
    this.namespace = 'siteSetting';
    EndPoint.prototype.initialize.apply(this, arguments);
};

SiteSettingEndPoint.prototype = new EndPoint(Api);

module.exports = new SiteSettingEndPoint();