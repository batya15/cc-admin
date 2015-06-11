"use strict";

var db = require('entity/db');

var FilesServiceDao = function () {};

FilesServiceDao.prototype = {
    getAllFiles: function (cb) {
        db.query('SELECT * FROM `files`', cb);
    },
    getFileById: function (id, cb) {
        db.queryRow('SELECT * FROM `files` WHERE `id`=?', [id], cb);
    },
    getFileNameById: function (id, cb) {
        db.queryRow('SELECT `filename` FROM `files` WHERE `id`=?', [id], function (err, item) {
            cb(err, item.filename);
        });
    },
    checkFile: function (filename, cb) {
        db.count('files', {filename: filename}, cb);
    },
    insertFile: function (data, cb) {
        db.insert('files', data, cb);
    }
};

module.exports = new FilesServiceDao();

