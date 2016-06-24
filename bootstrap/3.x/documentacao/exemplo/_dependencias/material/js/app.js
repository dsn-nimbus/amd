;(function(ng) {
  "use strict";

  ng.module('doc', ['ngRoute'])
    .config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
      $routeProvider
        .when('/', {
          templateUrl: 'views/main.html'
        })
        .when('/tabelas', {
          templateUrl: 'views/tabelas.html'
        })
        .when('/modais', {
          templateUrl: 'views/modais.html'
        })
        .when('/abas', {
          templateUrl: 'views/abas.html'
        })
        .when('/cards', {
          templateUrl: 'views/cards.html'
        })
        .when('/listas', {
          templateUrl: 'views/listas.html'
        })
        .when('/forms', {
          templateUrl: 'views/forms.html'
        })
        .when('/loading', {
          templateUrl: 'views/loading.html'
        })
        .otherwise({redirectTo: '/'})

      $locationProvider.html5Mode(true);
    }]);
}(angular));
