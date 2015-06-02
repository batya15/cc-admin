"use strict";
define([
    'backbone',
    './editModel.jade',
    'views/entity/formGenerator/formGenerator'
], function (Backbone, template, Form) {

    var View = Backbone.View.extend({
        events: {
            'click [data-save]'  : 'save',
            'click [data-delete]'  : 'deleteModel'
        },
        initialize: function () {
            this.$el.addClass('wrapUserEdit');

            this.listenTo(this.model, 'change', this.generateForm);
            this.listenTo(this.model, 'destroy', this.close);

            this.render();
            if (typeof this['renderMoreControls'] == 'function') {
                this['renderMoreControls'].apply(this, arguments);
            }

        },

        render: function () {
            this.$el.html(template({
                namespace: this.model.collection.namespace
            }));
            this.generateForm();
            this.saveCheck();
        },
        generateForm: function () {
            this._form = new Form(this.model.attributes, this.model.collection.scheme);
            this.$('#form').html(this._form.$el);
            this.listenTo(this._form, 'change', this.saveCheck);
        },
        remove: function () {
            this._form.remove();
            Backbone.View.prototype.remove.apply(this);
        },
        save: function () {
            var self = this;

            this.$('[data-save]').prop('disabled', true);
            this.model.save(this._form.fields.attributes , {
                success: function () {
                    self.saveCheck();
                    alert('Сохранили');
                },
                error: function () {
                    self.saveCheck();
                    alert('Не получилось');
                }
            });
        },
        deleteModel: function () {
            if (confirm('Вы действительно хотите удалить выбранную позицию')) {
                this.model.destroy();
                this.remove();
            }

        },
        saveCheck: function () {
            if (this._form.readyValue) {
                this.$('[data-save]').prop('disabled', false);
            } else {
                this.$('[data-save]').prop('disabled', true);
            }
        }
    });

    View.extend = function (child) {
        var view = Backbone.View.extend.apply(this, arguments);
        view.prototype.events = _.extend({}, this.prototype.events, child.events);
        return view;
    };

    return View;
});

