"use strict";

define(['domain/pages', 'views/entity/page', 'domain/net/directoryCountry'], function (page, ViewPage, siteSetting) {

    var namespace = 'directoryCountry';

    var fields =  {
        'Название:5:b': 'name_ru',
        'Название (en):5:b': 'name_en'
    };

    return page.add({
        namespace: namespace,
        parent: 'directory',
        icon: 'glyphicon-globe',
        caption: 'Страны',
        Model: siteSetting,
        View: ViewPage,
        fields: fields
    });
});

