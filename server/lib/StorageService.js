'use strict';
var Q = require('q');
var logger = require('./logger');

var StorageService = function(){
    var kb = 1024,
        mb = 1024 * 1024,
        allocated = 1024 * 1024 * 1024;
    var mockData = {
        pics: [
            { id: 1, size: 100 * mb, title: 'surf', thumbnail: '/pics/1.jpg', url: '/pics/1.jpg' },
            { id: 2, size: 100 * mb, title: 'ski', thumbnail: '/pics/2.jpg', url: '/pics/2.jpg' },
            { id: 3, size: 100 * mb, title: 'bike', thumbnail: '/pics/3.jpg', url: '/pics/3.jpg' }
        ],
        used: 300 * mb,
        total: allocated
    };

    this.get = function(){
        logger.trace('StorageService.get()');
        return Q.fcall(function(){
            logger.data('ss.usage() => ', mockData);
            return mockData;
        });
    }
    this.usage = function(){
        logger.trace('StorageService.usage()');
        return Q.fcall(function(){
            logger.data('ss.usage() => ', mockData);
            return mockData;
        });
    }
};

module.exports = StorageService;
