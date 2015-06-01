"use strict";

var EndPoint = require('entity/endPoint'),
    SiteSettingApi = require('./api/siteSettingApi');

var SiteSettingEndPoint = function() {
    this.namespace = 'siteSetting';
    EndPoint.prototype.initialize.apply(this, arguments);
};

SiteSettingEndPoint.prototype = new EndPoint(SiteSettingApi);

module.exports = new SiteSettingEndPoint();