"use strict";

var io = require('socket.io').listen(3030);
var mysql = require('mysql');
var mysqlUtilities = require('mysql-utilities');
var nconf = require('nconf');

nconf.argv()
    .env()
    .file({file: 'config.json'});

var config = nconf.get('db');

var pool = mysql.createPool({
    host: config.db_host,
    port: config.db_port,
    user: config.db_user,
    password: config.db_pass,
    database: config.db_name
});


mysqlUtilities.upgrade(pool);
mysqlUtilities.introspection(pool);

var socket = io.of('/test');

pool.on('connection', function () {
    console.info('Connect database MySQL');
});

pool.on('error', function(err){
    if(err.code == 'PROTOCOL_CONNECTION_LOST') {
        console.log('error');
    }
    else {
        throw err;
    }
});


socket.on('connection', function (s) {
    console.log('connect');
    s.emit('connect');
    s.on('mysql', function (cb) {
        pool.tables(function(err, tables) {
            var l = '';
            for(var key in tables) {
                l += key + '\n';
            }
            console.log(tables);
            cb(l);
        });

    });
});
