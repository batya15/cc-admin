"use strict";
//todo: отрефакторить вместе с файловым менеджером

define([
    'backbone',
    './file.jade',
    './itemFile/itemFile',
    'domain/fileManager'
], function (Backbone, templete, ItemFile, mFiles) {

    var NAME = 'form_file';

    var View = Backbone.View.extend({
        name: NAME,
        events: {
            'change input': 'changeValue',
            'click [data-select]': 'selectFile'
        },
        initialize: function (data) {
            this.setElement(templete(data));
            this.key = data.key;
            this.data = data;
            this.changeValue();
            this.renderItems();
        },
        changeValue: function () {
            this.value = this.$('input').val();
            this.ready = true;
            this.trigger('change');
        },
        remove: function () {
            if (this.item) this.item.remove();
            Backbone.View.prototype.remove.apply(this);
        },
        removeFile: function () {
            this.$('input').val('').trigger('change');
        },
        renderItems: function () {
            if (!this.value) return false;
            this.item = new ItemFile(this.data, this.data.value);
            this.item.$el.appendTo(this.$('#filesList'));
            this.listenTo(this.item, 'remove', _.bind(this.removeFile, this));
        },
        selectFile: function () {
            var src = (this.data.srcPath)? this.data.srcPath: '';
            mFiles.open(src, _.bind(function (err, val) {
                if (!err) {
                    console.log(val[0]);
                    this.$('input').val(val[0]).trigger('change');
                    if (this.item) this.item.remove();
                    this.renderItems();
                }
            }, this));
        }
    });

    return {
        View: View,
        name: NAME
    }


});

