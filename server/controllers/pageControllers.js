'use strict';
var logger = require('../lib/logger');
var StorageService = require('../lib/StorageService');
var Q = require('q');

var indexController = function(request, response){
    var ss = new StorageService();
    logger.trace('');
    logger.trace('===> INDEX CONTROLLER <====');

    ss.usage().then(function(storage){
        logger.trace('index.ss.usage returned storage: ', storage);
        logger.data('index returning with storage:', storage);
        response.render('index', {storage: storage});
    });
};

module.exports = {
    index: indexController
};
