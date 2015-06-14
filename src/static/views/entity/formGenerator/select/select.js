"use strict";

define(['backbone', './select.jade'], function (Backbone, templete) {

    var NAME = 'form_select';

    var View = Backbone.View.extend({
        name: NAME,
        events: {
            'change select': 'changeValue'
        },
        initialize: function (data) {
            this.setElement(templete(data));
            this.key = data.key;
            this.changeValue();
        },
        changeValue: function () {
            this.value = this.$('select').val();
            this.ready = true;
            this.trigger('change');
        }
    });

    return {
        View: View,
        name: NAME
    };


});

