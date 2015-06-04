"use strict";

var service = require("services/redirect"),
    TableApi = require('endPoint/entity/tableApi'),
    util = require('util');

var RedirectApi = function () {
    this.service = service;
    RedirectApi.super_.apply(this, arguments);
};

util.inherits(RedirectApi, TableApi);

module.exports = RedirectApi;