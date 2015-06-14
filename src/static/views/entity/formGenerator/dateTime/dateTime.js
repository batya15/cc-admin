"use strict";

define(['backbone', './dateTime.jade'], function (Backbone, templete) {

    var NAME = 'form_datetime';

    var View = Backbone.View.extend({
        name: NAME,
        events: {
            'keyup input': 'changeValue',
            'change input': 'changeValue'
        },
        initialize: function (data) {
            if (data.value < 19) {
                var d = new Date();
                data.value = d.toISOString();
            }
            if (data.value.length > 19) {
                data.value = data.value.substring(0, data.value.length - 5);
            }
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
    };


});

