"use strict";

var siteSetting = require("services/siteSetting"),
    _ = require('underscore'),
    ClientApi = require('entity/clientApi'),
    util = require('util');

var SiteSettingApi = function () {
    SiteSettingApi.super_.apply(this, arguments);
};

util.inherits(SiteSettingApi, ClientApi);

SiteSettingApi.prototype = _.extend(SiteSettingApi.prototype, {
    events: {
        'getCount': 'getCount',
        'read': 'read',
        'create': 'create',
        'update': 'update',
        'delete': 'delete'
    },
    getCount: function (param, cb) {
        siteSetting.getCount(param, cb);
    },
    read: function(param, cb) {
        console.log(param);
        siteSetting.read(param, cb);
    },
    create: function (attr, cb) {
        console.log(attr);
        siteSetting.create(attr, cb);
    },
    update: function (attr, cb) {
        console.log(attr);
        siteSetting.update(attr, cb);
    },
    delete: function (attr, cb) {
        console.log(attr);
        siteSetting.delete(attr, cb);
    }
});

module.exports = SiteSettingApi;