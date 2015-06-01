"use strict";

define(['backbone', './column.jade'], function (Backbone, template) {

    return Backbone.View.extend({
        attributes: {
            class: 'v-column'
        },
        events: {
            'click [data-key]': 'onClick'
        },
        initialize: function (data) {
            this.listenTo(this.model, 'change', this.render);
            this.opt = data.opt;
        },
        render: function () {
            this.$el.html(template({
                columns: this.opt,
                sortBy: this.model.get('sortBy'),
                revert: this.model.get('sortRevert')
            }));
        },
        onClick: function (e) {
            var key = Backbone.$(e.currentTarget).data('key');
            this.model.set({
                sortBy: key,
                sortRevert: (this.model.get('sortBy') === key)? !this.model.get('sortRevert'): this.model.get('sortRevert')
            });
        }
    });

});

