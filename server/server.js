
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var pageControllers = require('./controllers/pageControllers');
var StaticRouteManager = require('./lib/StaticRouteManager');
var logger = require('./lib/logger');

var app = express();

var Config = function(){
    this.serverPort = process.env.PORT || 3000;
    this.builtAssetsRoute = '/assets';
    this.builtAssetsPath = path.join(__dirname, '..', 'build', 'assets');
    this.clientPath = path.join(__dirname, '..', 'client');
    this.devScriptPath = path.join(this.clientPath, 'src');
    this.devStylesPath = path.join(this.clientPath, 'styles');
    this.staticAssetsRoute = '/static';
    this.staticAssetsPath = path.join(__dirname, '..', 'assets');
};

var config = new Config();


// all environments
app.set('port', config.serverPort);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.favicon());
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('your secret here'));
app.use(express.session());
app.use(app.router);

var srp = new StaticRouteManager(app, express);
srp.add(config.staticAssetsRoute, config.staticAssetsPath);
srp.add(config.builtAssetsRoute, config.builtAssetsPath);

// development only
if ('development' == app.get('env')) {
    srp.add(config.builtAssetsRoute + '/scripts', config.devScriptPath)
    srp.add(config.builtAssetsRoute + '/styles', config.devStylesPath)
    //app.use(express.logger('dev'));
    app.use(express.errorHandler());
}
srp.dump();
srp.doit();
srp.dump();


app.get('/', pageControllers.index);

http.createServer(app).listen(app.get('port'), function(){
  logger.warn('Express server listening on port ' + app.get('port'));
});
