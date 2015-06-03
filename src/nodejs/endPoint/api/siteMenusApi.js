"use strict";

var siteSetting = require("services/menus"),
    TableApi = require('endPoint/entity/tableApi'),
    util = require('util');

var SiteMenusApi = function () {
    this.service = siteSetting;
    SiteMenusApi.super_.apply(this, arguments);
};

util.inherits(SiteMenusApi, TableApi);

module.exports = SiteMenusApi;