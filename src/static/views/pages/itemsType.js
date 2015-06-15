"use strict";

define(['domain/pages', 'views/entity/page', 'domain/net/itemsType'], function (page, ViewPage, model) {

    var namespace = 'itemsType';

    var fields =  {
        'Кодовое имя:5:b': 'type',
        'Описание:5': 'description'
    };

    return page.add({
        namespace: namespace,
        parent: 'directory',
        icon: 'glyphicon-duplicate',
        caption: 'Типы продукции',
        Model: model,
        View: ViewPage,
        fields: fields
    });
});

