define(function(require) {
    'use strict';
    var ko = require('knockout');
    var piclistVm = function () {
        this.total =  ko.observable(window.ss.total);
        this.used =  ko.observable(window.ss.used);
        this.pics = ko.observableArray(window.ss.pics);
    };
    return piclistVm;
});