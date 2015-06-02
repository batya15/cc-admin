"use strict";

define(['backbone', './checkbox.jade'], function (Backbone, templete) {

    var NAME = 'form_checkbox';

    var View = Backbone.View.extend({
        name: NAME,
        events: {
            'change input': 'changeValue'
        },
        initialize: function (data) {
            this.setElement(templete(data));
            this.key = data.key;
            this.changeValue();
        },
        changeValue: function () {
            this.value = this.$('input').is(':checked');
            this.ready = true;
            this.trigger('change');
        }
    });

    return {
        View: View,
        name: NAME
    };

});

