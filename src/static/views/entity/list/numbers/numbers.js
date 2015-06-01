"use strict";

define(['jquery', 'backbone', './numbers.jade'], function ($, Backbone, template) {

    return Backbone.View.extend({
        events: {
            'click [data-num]': 'onClick'
        },
        attributes: {
            class: 'v-numbers'
        },
        initialize: function () {
            this.listenTo(this.model, 'change:currentPage', this.render);
            this.listenTo(this.model.sizeSelection, 'change', this.render);
        },
        render: function () {
            this.$el.html(template({
                currentPage: this.model.get('currentPage'),
                count: Math.ceil(this.model.sizeSelection.get('count')/this.model.get('countItemsOnPage'))
            }));
        },
        onClick: function (e) {
            var i = $(e.currentTarget).data('num');
            this.model.set('currentPage', i);
        }
    });

});

