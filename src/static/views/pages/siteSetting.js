"use strict";

define(['domain/pages', 'views/entity/page', 'domain/net/siteSetting'], function (page, ViewPage, siteSetting) {

    var namespace = 'sitesetting';

    var fields =  {
        'Название:4:b': 'name',
        'Время работы:4': 'openingTimes',
        'Вкл/Выкл:2': 'active'
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

