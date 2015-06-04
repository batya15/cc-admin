"use strict";

var _ = require('underscore'),
    ClientApi = require('entity/clientApi'),
    util = require('util');

var TableApi = function () {
    TableApi.super_.apply(this, arguments);
};

util.inherits(TableApi, ClientApi);

TableApi.prototype = _.extend(TableApi.prototype, {
    events: {
        'getCount': 'getCount',
        'getScheme': 'getScheme',
        'read': 'read',
        'create': 'create',
        'update': 'update',
        'delete': 'delete'
    },
    getScheme: function (cb) {
        this.service.getScheme(cb);
    },
    getCount: function (param, cb) {
        this.service.getCount(param, cb);
    },
    read: function(param, cb) {
        this.service.read(param, cb);
    },
    create: function (attr, cb) {
        this.service.create(attr, cb);
    },
    update: function (attr, cb) {
        this.service.update(attr, function (err, result) {
            if (!err) {
                this.client.broadcast.emit('model', attr);
            }
            cb(err, result);
        }.bind(this));
    },
    delete: function (attr, cb) {
        this.service.delete(attr, cb);
    }
});

module.exports = TableApi;