"use strict";

var siteSetting = require("services/aliases"),
    TableApi = require('endPoint/entity/tableApi'),
    util = require('util');

var SiteAliasesApi = function () {
    this.service = siteSetting;
    SiteAliasesApi.super_.apply(this, arguments);
};

util.inherits(SiteAliasesApi, TableApi);

module.exports = SiteAliasesApi;