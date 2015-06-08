"use strict";

define(['domain/pages', 'views/entity/page', 'domain/net/siteReviews'], function (page, ViewPage, siteSetting) {

    var namespace = 'siteReviews';

    var fields =  {
        'ФИО:5:b': 'name',
        'Контакт:5': 'contact'
    };

    return page.add({
        namespace: namespace,
        parent: 'community',
        icon: 'glyphicon-thumbs-up',
        caption: 'Отзывы',
        Model: siteSetting,
        View: ViewPage,
        fields: fields
    });
});

