"use strict";

define(['domain/pages', 'views/entity/page', 'domain/net/exchangeRates'], function (page, ViewPage, model) {

    var namespace = 'exchangeRates';

    var fields =  {
        'active:2:b': 'active',
        'cbrActive:2': 'cbrActive',
        'allowance:2': 'allowance',
        'ratesUSD:2': 'ratesUSD',
        'ratesEUR:2': 'ratesEUR'

    };

    return page.add({
        namespace: namespace,
        parent: 'main',
        icon: 'glyphicon-usd',
        caption: 'Курс валют',
        Model: model,
        View: ViewPage,
        fields: fields
    });
});

