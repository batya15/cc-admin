"use strict";

var auth = require("services/auth"),
    _ = require('underscore'),
    ClientApi = require('entity/clientApi'),
    util = require('util');


var AuthApi = function () {
    AuthApi.super_.apply(this, arguments);
};

util.inherits(AuthApi, ClientApi);

AuthApi.prototype = _.extend(AuthApi.prototype, {
    events: {
        'login': 'login',
        'checkLogin': 'checkLogin',
        'logout': 'logout'
    },
    login: function (data, cb) {
        var ip = this.client.handshake.address;
        auth.login(data.login, data.password, ip, cb);
    },
    checkLogin: function (cb) {
        var ip = this.client.handshake.address;
        var key = (this.client.request.headers.cookie) ? this.client.request.headers.cookie['sessionKey'] : '';
        auth.checkLoginBySID(ip, key, cb);
    },
    'logout': function (cb) {
        var ip = this.client.handshake.address;
        var key = (this.client.request.headers.cookie) ? this.client.request.headers.cookie['sessionKey'] : '';
        auth.logout(ip, key, cb);
    }
});

module.exports = AuthApi;
