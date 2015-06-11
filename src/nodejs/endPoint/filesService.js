"use strict";

var EndPoint = require('entity/endPoint'),
    Api = require('./api/filesServiceApi');

var FilesServiceEndPoint = function() {
    this.namespace = 'filesService';
    EndPoint.prototype.initialize.apply(this, arguments);
};

FilesServiceEndPoint.prototype = new EndPoint(Api);

module.exports = new FilesServiceEndPoint();