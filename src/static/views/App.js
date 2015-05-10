define(['backbone', './app.jade', 'views/panel/Panel', 'views/SingleToneView/SingleToneView', 'domain/test'],
    function(Backbone, template) {

    var Panel = require('views/panel/Panel');
    var SingleTone = require('views/SingleToneView/SingleToneView');
    var TestNet = require('domain/test');

    return Backbone.View.extend({
        el: 'body',
        events: {
          'click #button': 'addView',
          'click #single': 'addSingle',
          'click #mysql': 'mysqltest'
        },
        mysqltest: function () {
            var self = this,
                t = Date.now();

            this.testnet.mysql(function(data) {
                self.$('textarea').val(self.$('textarea').val() + data + '\n'+
                    'Время: ' +  (Date.now() - t) + 'ms \n');
            });
        },
        initialize: function() {
            console.log('Панель');
        },
        render: function() {
            this.$el.html(template());
            var self = this,
                t = Date.now();
            self.$('textarea').val('Устанавливаем соединение с сервером' + '\n');
            this.testnet = new TestNet(function() {
                self.$('textarea').val(self.$('textarea').val() + 'Соединение WEB socket установленно' + '\n' +
                    'Время: ' +  (Date.now() - t) + 'ms \n');
            });
        },
        addView: function () {
            var v = new Panel();
            this.$('.main').append(v.$el);
            v.render();
        },
        addSingle: function () {
            var v = new SingleTone();
            this.$('.main').append(v.$el);
        }
    });

});