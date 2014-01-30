'use strict';

var logger = require('./logger');

var StaticRouteManager = function(closedApp, closedExpress){

    var routePaths = [];

    this.add = function(route, serverPath){
        logger.trace('StaticRouteManager.add', route, serverPath);
        logger.debug('SP Add: ' + route + ' => ' + serverPath);
        routePaths.push({route: route, path: serverPath});
    };

    this.doit = function(){
        logger.trace('StaticRouteManager.doit');
        for(var i = 0; i < routePaths.length; i++){
            var rp = routePaths[i];
            console.log('SP Add: ' + rp.route + ' => ' + rp.path);
            closedApp.use(rp.route, closedExpress.static(rp.path));
        }
    }

    this.dump = function(){
        logger.trace('StaticRouteManager.dump');
        logger.data('Static Routes:');
        for(var i = 0; i < routePaths.length; i++){
            var rp = routePaths[i];
            logger.data('ROUTE: ' + rp.route + ' => ' + rp.path);
        }
    }

};

module.exports = StaticRouteManager;
