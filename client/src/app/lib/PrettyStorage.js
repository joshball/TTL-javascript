define(function(/*require, exports, module*/) {

    'use strict';

    // options:
    //  - space => spacing between number and suffix (i.e. 23_GB). default: ' '
    //  - round => how many decimal places to round to. default: 1
    var PrettyStorage = function(options){
        this.pretty = function(bytes){
            return bytes + ' byte';

        };
    };
    return PrettyStorage;
});