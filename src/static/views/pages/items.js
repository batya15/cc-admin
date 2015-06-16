"use strict";

define(['domain/pages', 'views/entity/page', 'domain/net/items'], function (page, ViewPage, model) {

    var namespace = 'items';

    var fields =  {
        'Название модели:5:b': 'name',
        'Цена:5': 'price'
    };

    return page.add({
        namespace: namespace,
        parent: 'products',
        icon: 'glyphicon-book',
        caption: 'Продукция',
        Model: model,
        View: ViewPage,
        fields: fields
    });
});

