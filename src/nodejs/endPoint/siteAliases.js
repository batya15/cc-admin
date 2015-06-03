"use strict";

var EndPoint = require('entity/endPoint'),
    Api = require('./api/siteAliasesApi');

var SiteAliasesEndPoint = function() {
    this.namespace = 'siteAliases';
    EndPoint.prototype.initialize.apply(this, arguments);
};

SiteAliasesEndPoint.prototype = new EndPoint(Api);

module.exports = new SiteAliasesEndPoint();