"use strict";

define(['domain/pages', 'views/entity/page', 'domain/net/exchangeRates', 'views/chartExchangeRates/exchangeRates'],
    function (page, ViewPage, model, Chart) {

    var namespace = 'exchangeRates';

    var View = ViewPage.extend({
        list: function () {
            var v = new Chart();
            this.addChild(v);
            this.$el.append(v.$el);
            ViewPage.prototype.list.apply(this, arguments);
        }
    });

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
        View: View,
        fields: fields
    });
});

