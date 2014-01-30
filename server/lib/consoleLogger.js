'use strict';
// https://github.com/medikoo/cli-color
var clc = require('cli-color');

var Logger = function(){

    this.log = function(level){
        var args = arguments[1];
        var levelConfig = levels[level];
        var printableArgs = [levelConfig.color(levelConfig.name.toUpperCase() + ': ')];
        args.forEach(function (arg) {
            if(typeof arg === 'object'){
                printableArgs.push(levelConfig.color(JSON.stringify(arg)));
            } else {
                printableArgs.push(levelConfig.color(arg));
            }
        });
        console.log.apply(console.log, printableArgs);
    };

    var levels = {
        trace: {
            name: 'trace',
            color: clc.greenBright
        },
        info: {
            name: 'info',
            color: clc.whiteBright
        },
        data: {
            name: 'data',
            color: clc.cyan
        },
        debug: {
            name: 'debug',
            color: clc.cyanBright
        },
        warn: {
            name: 'warn',
            color: clc.yellowBright
        },
        error: {
            name: 'error',
            color: clc.redBright
        }
    };

    var self = this;
    Object.keys(levels).forEach(function (level) {
        self[level] = function(a,b,c,d,e,f,g,h,i){
            var args = Array.prototype.slice.call(arguments);
            self.log(level, args);
        };
    });

    return this;
};
module.exports = {Logger:Logger};

