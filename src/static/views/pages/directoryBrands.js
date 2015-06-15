"use strict";

define(['domain/pages', 'views/entity/page', 'domain/net/directoryBrands'], function (page, ViewPage, siteSetting) {

    var namespace = 'directoryBrands';

    var fields =  {
        'Название:8:b': 'name',
        'Вес:2:b': 'sort'
    };

    return page.add({
        namespace: namespace,
        parent: 'directory',
        icon: 'glyphicon-tags',
        caption: 'Бренды',
        Model: siteSetting,
        View: ViewPage,
        fields: fields
    });
});

