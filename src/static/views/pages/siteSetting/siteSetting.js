"use strict";

define(['domain/pages', 'views/entity/page', 'domain/net/siteSetting'], function (page, ViewPage, siteSetting) {

    var namespace = 'sitesetting';

    var fields =  {
        'name:4:b': 'name',
        'openingTimes:4': 'openingTimes',
        'active:2': 'active'
    };

    return page.add({
        namespace: namespace,
        parent: 'site',
        icon: 'glyphicon-blackboard',
        caption: 'Основное',
        Model: siteSetting,
        View: ViewPage,
        fields: fields
    });
});

