"use strict";

define(['backbone', 'underscore', 'vendor/js/Chart', 'domain/net/exchangeRates'], function (Backbone, _, Chart, ExchangeRates) {

        var usd = {
                label: "USD",
                fillColor: "rgba(220,220,0,0)",
                strokeColor: "rgba(220,220,0,1)",
                pointColor: "rgba(220,220,0,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(220,220,0,1)",
                data: []
            },
            eur = {
                label: "EUR",
                fillColor: "rgba(151,0,205,0)",
                strokeColor: "rgba(151,187,205,0.9)",
                pointColor: "rgba(151,187,205,0.9)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(151,187,205,0.9)",
                data: []
            };

    var exchangeRates = new ExchangeRates();

    return Backbone.View.extend({
        tagName: 'canvas',
        events: {
            'DOMNodeInsertedIntoDocument': 'chartRender'
        },
        attributes: {
            id: '#exchangeRatesChart',
            style: 'width: 100%; height: 250px; margin-bottom: 20px'
        },
        chartRender: function () {
            var ctx = this.$el.get(0).getContext("2d"),
                data= {
                    labels: [],
                    datasets: [usd, eur]
                };

            exchangeRates.getLastsExchangeRates(function (err, res) {
                if (res) {
                    res.reverse();
                }
                _.each(res, function (val) {
                    data.labels.push(val.date);
                    usd.data.push(val.USD);
                    eur.data.push(val.EUR);
                });

                new Chart(ctx).Line(data, {
                    multiTooltipTemplate: "<%if (datasetLabel){%><%=datasetLabel%>: <%}%><%= value %>"
                });
            });


        }
    });

});