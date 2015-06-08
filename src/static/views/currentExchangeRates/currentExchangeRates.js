"use strict";

define(['backbone', './currentExchangeRates.jade', 'domain/net/exchangeRates'],
    function (Backbone, template, ExchangeRates) {

        var exchangeRates = new ExchangeRates();

        return Backbone.View.extend({
            events: {
                'click .btn': 'render'
            },
            attributes: {
                class: 'v-currentExchangeRates'
            },
            initialize: function () {
                this.render();
            },
            render: function () {
                exchangeRates.getCurrentExchangeRates(function (err, data) {
                    this.$el.html(template(data));
                }.bind(this));
            }
        });

    });
