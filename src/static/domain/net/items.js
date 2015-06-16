"use strict";

define(['domain/entity/tableModel'], function (TableModel) {

    var instance;

    return function () {
        if (!instance) {
            instance = new TableModel({}, {namespace: 'items'});
        }
        return instance;
    };

});