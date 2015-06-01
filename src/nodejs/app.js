"use strict";
var config = require("util/config");
var log = require("util/logger")(module);

var auth = require('endPoint/auth');
var users = require('endPoint/users');
var ping = require('endPoint/ping');
var siteSetting = require('endPoint/siteSetting');

log.info("***START ADMINISTRATION SERVER***");