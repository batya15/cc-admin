"use strict";
define(['domain/entity/socket'], function(io) {


    return function(cb) {
        var socket = io('test');
        socket.on('connect', cb);
        this.mysql = function (cb) {
            socket.emit('mysql', cb);
        };
    };

});
