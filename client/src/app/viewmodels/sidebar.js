define(function(require) {
    'use strict';
    var ko = require('knockout');
    var sidebarVm = function () {
        this.total =  ko.observable(window.ss.total);
        this.used =  ko.observable(window.ss.used);
    };
    return sidebarVm;
});