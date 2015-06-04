"use strict";

define(['domain/pages', 'views/entity/page', 'domain/net/siteAliases'], function (page, ViewPage, siteSetting) {

    var namespace = 'siteAliases';

    var fields =  {
        'alias:5:b': 'alias',
        'url:5': 'url'
    };

    return page.add({
        namespace: namespace,
        parent: 'site',
        icon: 'glyphicon-link',
        caption: 'Алиасы ЧПУ',
        Model: siteSetting,
        View: ViewPage,
        fields: fields
    });
});

