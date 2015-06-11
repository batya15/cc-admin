"use strict";

var _ = require('underscore'),
    ClientApi = require('entity/clientApi'),
    util = require('util'),
    ss = require('socket.io-stream'),
    fs = require('fs');

var FileServiceApi = function () {
    this.service = require('services/filesService');
    this.events = _.extend({}, this.events || {}, FileServiceApi.prototype.events);
    FileServiceApi.super_.apply(this, arguments);
};

util.inherits(FileServiceApi, ClientApi);

FileServiceApi.prototype = _.extend(FileServiceApi.prototype, {
    events: {
        'getFilenameById': 'getFilenameById'
    },
    connection: function (socket) {
        var self = this;
        ss(socket).on('loadFile', function(stream, data) {
            var tempFileName = 'temp/' + Date.now();
            stream.pipe(fs.createWriteStream(tempFileName));
            stream.on('end', function() {
                self.service.loadFile(tempFileName, data, self.emitNewId.bind(self));
            });
        });
    },
    emitNewId: function(err, data) {
        this.client.emit('newFile', err, data);
    },
    getFilenameById: function (id, cb) {
       this.service.getFilenameById(id, cb);
    }
});

module.exports = FileServiceApi;