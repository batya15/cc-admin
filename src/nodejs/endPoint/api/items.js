"use strict";

var service = require("services/items"),
    TableApi = require('endPoint/entity/tableApi'),
    util = require('util');

var Api = function () {
    this.service = service;
    Api.super_.apply(this, arguments);
};

util.inherits(Api, TableApi);

module.exports = Api;