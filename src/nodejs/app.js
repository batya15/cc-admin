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
require('endPoint/dirBrands');
require('endPoint/dirCountry');
require('endPoint/filesService');
require('endPoint/itemsType');
require('endPoint/items');
var filesService = require('services/filesService');

filesService.init();

log.info("***START ADMINISTRATION SERVER***");