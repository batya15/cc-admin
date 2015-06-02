"use strict";

define(['backbone', './input.jade'], function (Backbone, templete) {

    var NAME = 'form_input';

    var View = Backbone.View.extend({
        name: NAME,
        events: {
            'keyup input': 'changeValue',
            'change input': 'changeValue'
        },
        initialize: function (data) {
            this.setElement(templete(data));
            this.key = data.key;
            this.changeValue();
        },
        changeValue: function () {
            this.value = this.$('input').val();
            this.ready = true;
            this.trigger('change');
        }
    });

    return {
        View: View,
        name: NAME
    }


});

