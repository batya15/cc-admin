"use strict";

define(['domain/pages', 'views/entity/page', 'domain/net/siteRedirect'], function (page, ViewPage, siteRedirect) {

    var namespace = 'siteRedirect';

    var fields =  {
        'Откуда:5:b': 'source',
        'Куда:5': 'destination'
    };

    return page.add({
        namespace: namespace,
        parent: 'site',
        icon: 'glyphicon-random',
        caption: 'Редиректы 301',
        Model: siteRedirect,
        View: ViewPage,
        fields: fields
    });
});

