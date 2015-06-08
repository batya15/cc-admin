"use strict";

define(function () {

    var lang = {
        'login': 'Логин',
        'name': 'Имя',
        'lastname': 'Фамилия',
        'phone': 'Телефон',
        'description': 'Описание',
        'email': 'Почта',
        'active': 'Включить/выключить',
        'cbrActive': 'Использовать ЦБР',
        'allowance': 'Коэф. ЦБР',
        'ratesUSD': 'Ручной курс USD',
        'ratesEUR': 'Ручной курс EUR',
        'slogan': 'Слоган',
        'openingTimes': 'Время работы',
        'keywords': 'Ключевые слова',
        'source': 'Исходный',
        'destination': 'Куда'

    };

    return function (key) {
        if (lang.hasOwnProperty(key)) {
            return lang[key];
        } else {
            return key;
        }

    };

});

