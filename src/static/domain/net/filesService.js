"use strict";

define(['underscore', 'backbone', 'domain/entity/socket', 'lib/socket.io-stream'],
    function (_, Backbone, io, ss) {

    var instance;

    var FilesService = function () {
        this.socket = io('filesService');
        this.socket.on('newFile', function(err, data) {
            if (!err) {
                this.trigger('newFile', data);
            }
        }.bind(this));
    };

    FilesService.prototype = _.extend({}, FilesService.prototype, Backbone.Events);


    FilesService.prototype.getFilenameById = function(id, cb) {
        if (id) {
            this.socket.emit('getFilenameById', id, function(err, res) {
                if (!err && res) {
                    cb(res);
                }
            });
        }
    };

    FilesService.prototype.loadFile = function(data, cb) {
        var file = data.e.target.files[0];
        var stream = ss.createStream();

        ss(this.socket).emit('loadFile', stream, {size: file.size, hash: data.hash, filename: data.filename});
        var blobStream= ss.createBlobReadStream(file);
        blobStream.on('data', cb);
        blobStream.pipe(stream);
    };

    return function () {
        if (!instance) {
            instance = new FilesService();
        }
        return instance;
    };

});