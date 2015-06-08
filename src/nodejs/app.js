"use strict";
var config = require("util/config");
var log = require("util/logger")(module);

require('endPoint/auth');
require('endPoint/ping');
require('endPoint/siteSetting');
require('endPoint/siteAliases');
require('endPoint/siteMenus');
require('endPoint/siteReviews');
require('endPoint/siteUpdater');
require('endPoint/siteRedirect');
require('endPoint/exchangeRates');


var cron = require('services/cron');

cron.on('restart', function() {
    console.log('restart');
});

cron.on('minute', function() {
    console.log('minute');
});

cron.on('hour', function() {
    console.log('hour');
});

cron.on('day', function() {
    console.log('day');
});


log.info("***START ADMINISTRATION SERVER***");