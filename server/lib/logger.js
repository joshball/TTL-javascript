'use strict';
var loggerConsole = require('./consoleLogger');
var logger = new loggerConsole.Logger();

logger.throw = function(method, errorMsg){
    logger.error('ERROR ('+ method + '): ' + errorMsg);
    throw new Error(errorMsg);
};

logger.reject = function(deferred, method, errorMsg){
    logger.error('ERROR ('+ method + '): ' + errorMsg);
    deferred.reject(new Error(errorMsg));
};

module.exports = logger;
