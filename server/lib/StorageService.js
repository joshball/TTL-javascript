'use strict';
var Q = require('q');
var logger = require('./logger');

var StorageService = function(){
    this.usage = function(){
        logger.trace('StorageService.usage()');
        return Q.fcall(function(){
            var mockData = {
                used: 1024* 1024 * 512,
                total: 1024* 1024 * 1024
            };
            logger.data('ss.usage() => ', mockData);
            return mockData;
        });
    }
};

module.exports = StorageService;
