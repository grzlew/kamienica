'use strict';

var appServices = angular.module('appServices', ['ngResource']);

appServices.factory('Room', ['$resource',
    function ($resource) {
        var lang = localStorage.getItem(lang_key);

        if (lang !== 'en' && lang !== 'pl') {
            lang = 'pl'
        }
        return $resource('/static/web/data/rooms_' + lang + '.json', {}, {
            query: {method: 'GET', isArray: true}
        });
    }]);
