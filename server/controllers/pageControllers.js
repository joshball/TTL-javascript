'use strict';
var logger = require('../lib/logger');
var StorageService = require('../lib/StorageService');
var Q = require('q');

var indexController = function(request, response){
    var ss = new StorageService();
    logger.trace('');
    logger.trace('===> INDEX CONTROLLER <====');

    ss.get().then(function(storageData){
        logger.data('index returning with storage:', storageData);
        response.render('index', {storageData: JSON.stringify(storageData)});
    });
};

var prototypeController = function(request, response){
    logger.trace('');
    logger.trace('===> PROTOTYPE CONTROLLER <====');

    response.render('prototype');
};

module.exports = {
    index: indexController,
    prototype: prototypeController
};
