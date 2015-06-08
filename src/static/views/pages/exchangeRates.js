"use strict";

define(['domain/pages', 'views/entity/page', 'domain/net/exchangeRates', 'views/chartExchangeRates/exchangeRates',
        'views/currentExchangeRates/currentExchangeRates'],
    function (page, ViewPage, model, Chart, CurrentExchangeRates) {

    var namespace = 'exchangeRates';

    var View = ViewPage.extend({
        list: function () {
            var v = new Chart();
            this.addChild(v);
            this.$el.append(v.$el);

            v = new CurrentExchangeRates();
            this.addChild(v);
            this.$el.append(v.$el);

            ViewPage.prototype.list.apply(this, arguments);
        }
    });

    var fields =  {
        'Активная:2:b': 'active',
        'Из ЦБР:2': 'cbrActive',
        'Коэф.:2': 'allowance',
        'USD:2': 'ratesUSD',
        'EUR:2': 'ratesEUR'

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

