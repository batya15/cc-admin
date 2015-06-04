"use strict";
var config = require("util/config");
var log = require("util/logger")(module);

var auth = require('endPoint/auth');
var ping = require('endPoint/ping');
var siteSetting = require('endPoint/siteSetting');
var siteAliases = require('endPoint/siteAliases');
var siteMenus = require('endPoint/siteMenus');
var siteReviews = require('endPoint/siteReviews');
var siteUpdater = require('endPoint/siteUpdater');
var siteRedirect = require('endPoint/siteRedirect');

log.info("***START ADMINISTRATION SERVER***");