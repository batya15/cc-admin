"use strict";

var EndPoint = require('entity/endPoint'),
    AuthApi = require('./api/authApi');

var AuthEndPoint = function() {
    this.namespace = 'auth';
    this.notAuth = true;
    EndPoint.prototype.initialize.apply(this, arguments);
};

AuthEndPoint.prototype = new EndPoint(AuthApi);

module.exports = new AuthEndPoint();