"use strict";

var EndPoint = require('entity/endPoint'),
    Api = require('./api/dirBrandsApi');

var BrandsEndPoint = function() {
    this.namespace = 'directoryBrands';
    EndPoint.prototype.initialize.apply(this, arguments);
};

BrandsEndPoint.prototype = new EndPoint(Api);

module.exports = new BrandsEndPoint();