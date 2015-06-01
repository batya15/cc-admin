"use strict";

var _ = require("underscore");

var ClientApi = function (client) {
    this.client = client;
    this.connection(client);
    this.events = _.extend({}, this.events || {}, ClientApi.prototype.events);
    for (var key in this.events) {
        if (this.events.hasOwnProperty(key)) {
            this.client.on(key, this[this.events[key]].bind(this));
        }
    }
};

ClientApi.prototype = {
    events: {
        'ping': '_ping'
    },
    connection: function () {

    },
    _ping: function (cb) {
        cb('pong', {time: Date.now()});
    }
};

module.exports = ClientApi;