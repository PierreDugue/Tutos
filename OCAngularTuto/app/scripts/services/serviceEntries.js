'use strict';

/**
 * @ngdoc service
 * @name ocangularTutoApp.serviceEntries
 * @description
 * # serviceEntries
 * Factory in the ocangularTutoApp.
 */
angular.module('ocangularTutoApp')
  .factory('serviceEntries', function () {

    var entries = [];

    return {
      metierEntries: function (data) {
        data.forEach(function (entrie) {
          entries.push(entrie.title.toUpperCase());
        });
        return entries;
      }
    };
  });
