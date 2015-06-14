"use strict";

define([
    'backbone',
    './file.jade',
    'domain/net/filesService'
], function (Backbone, templete, FilesService) {

    var service = new FilesService();

    var NAME = 'form_file';

    var View = Backbone.View.extend({
        name: NAME,
        events: {
            'change #value': 'changeValue',
            'click [data-remove]': 'removeFile',
            'click [data-fileload]': 'fileOpenDialog',
            'change #userFile': 'loadFile'
        },
        initialize: function (data) {
            this.setElement(templete(data));
            this.key = data.key;
            this.data = data;
            this.changeValue();
            this.listenTo(service, 'newFile', function (data) {
                console.log(data);
                if (this.hash === data.hash) {
                    this.$('#value').val(data.id);
                    this.$('#userFile').val('');
                    this.changeValue();
                }
            });
        },
        loadFile: function (e) {
            var size = 0, data;
            if (this.$('#userFile').val()) {
                data = {
                    e: e,
                    filename: e.target.files[0].name.replace(/[^\w|.]/g, "_"),
                    hash: Date.now()
                };
                this.hash = data.hash;
                service.loadFile(data, function (chunk) {
                    size += chunk.length;
                    this.$('#file').text('Загружено: ' + Math.floor(size / e.target.files[0].size * 100) + '%');
                }.bind(this));
            }
        },
        fileOpenDialog: function () {
            this.$('#userFile').click();
        },
        changeValue: function () {
            this.$('#file').empty();
            this.value = this.$('input').val();
            this.ready = true;
            this.trigger('change');
            service.getFilenameById(this.value, function (name) {
                if (name) {
                    var img = new Image();
                    img.src = name;
                    this.$('#file').append(img);
                }
            }.bind(this));
        },
        remove: function () {
            if (this.item) {
                this.item.remove();
            }
            Backbone.View.prototype.remove.apply(this);
        },
        removeFile: function () {
            this.$('input').val('').trigger('change');
        }
    });

    return {
        View: View,
        name: NAME
    };


});

