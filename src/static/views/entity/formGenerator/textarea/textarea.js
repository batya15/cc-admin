"use strict";

define(['backbone', './textarea.jade'], function (Backbone, templete) {

    var NAME = 'form_textarea';

    var View =  Backbone.View.extend({
        name: NAME,
        events: {
            'keyup textarea': 'changeValue',
            'change textarea': 'changeValue'
        },
        initialize: function (data) {
            this.setElement(templete(data));
            this.key = data.key;
            this.changeValue();
        },
        changeValue: function () {
            this.value = this.$('textarea').val();
            this.ready = true;
            this.trigger('change');
        }
    });

    return {
        View: View,
        name: NAME
    }


});

