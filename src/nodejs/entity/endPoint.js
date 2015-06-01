"use strict";

var io = require('entity/socket'),
    ClientApi =require('entity/clientApi');

var EndPoint = function (Client) {
    this.ClientClass = Client || ClientApi;
};

EndPoint.prototype = {
    initialize: function() {
        var socket = io(this.namespace, this.notAuth);
        socket.on('connection', this._onConnection.bind(this));
    },
    connection: function (client) {

    },
    _onConnection: function (client) {
        this.connection(client);
        new this.ClientClass(client);
    }
};

module.exports = EndPoint;