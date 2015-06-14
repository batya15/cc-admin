"use strict";

var fs = require('fs'),
    async = require('async'),
    dao = require('dao/daoFilesService'),
    log = require("util/logger")(module),
    staticPath = require('util/config').get('staticPath'),
    staticUrl = require('util/config').get('staticUrl'),
    siteUpdater = require('endPoint/siteUpdater');

var FileService = function () {

};

var encodeFileBase64 = function (data, cb) {
    var bitmap = new Buffer(data.fileBase64, 'base64');
    fs.writeFile(staticPath + data.filename, bitmap, function (err) {
        if (typeof cb === 'function') {
            cb(err);
        }
    });
};

FileService.prototype = {
    loadFile : function (filename, data, cb) {
        var self = this;
        fs.readFile(filename, function (err, file) {
            if (err) {
                throw err;
            }
            var base64 = new Buffer(file).toString('base64');
            dao.checkFile(data.filename, function(err, res) {
                if (res) {
                    data.filename = Date.now() + data.filename;
                }
                data.fileBase64 = base64;
                dao.insertFile(data, function(err, id) {
                    siteUpdater.emit('files', id);
                    self._newFile(id, function() {
                        cb(null, {hash: data.hash, id: id});
                    });
                });
                fs.unlink(filename, function (err) {
                    if (err) {
                        throw err;
                    }
                });
            });
        });
    },
    getFilenameById: function(id, cb) {
        dao.getFileNameById(id, function(err, filename) {
            var name = (filename)? staticUrl + filename : null;
            cb(err, name);
        });
    },
    _newFile: function (id, cb) {
        dao.getFileById(id, function (err, row) {
            if (row && !err) {
                encodeFileBase64(row, function() {
                    if (typeof cb === 'function') {
                        cb(err);
                    }
                });
            }
        })
    },
    init: function(cb) {
        dao.getAllFiles(function (err, row) {
            if (err) {
                if (typeof cb === 'function') {
                    cb(err);
                }
            } else {
                async.map(row, encodeFileBase64, function (err) {
                    log.info('all static files encoding');
                    if (typeof cb === 'function') {
                        cb(err);
                    }
                });
            }
        }.bind(this));
    }
};

module.exports = new FileService();

