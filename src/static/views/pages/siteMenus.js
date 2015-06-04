"use strict";

define(['domain/pages', 'views/entity/page', 'domain/net/siteMenus'], function (page, ViewPage, siteSetting) {

    var namespace = 'siteMenus';

    var fields =  {
        'caprion:3:b': 'caption',
        'menu:3': 'menu',
        'url:4': 'url'
    };

    return page.add({
        namespace: namespace,
        parent: 'site',
        icon: 'glyphicon-menu-hamburger',
        caption: 'Меню',
        Model: siteSetting,
        View: ViewPage,
        fields: fields
    });
});

