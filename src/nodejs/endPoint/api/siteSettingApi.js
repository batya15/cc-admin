"use strict";

var siteSetting = require("services/siteSetting"),
    TableApi = require('endPoint/entity/tableApi'),
    util = require('util');

var SiteSettingApi = function () {
    this.service = siteSetting;
    SiteSettingApi.super_.apply(this, arguments);
};

util.inherits(SiteSettingApi, TableApi);

module.exports = SiteSettingApi;