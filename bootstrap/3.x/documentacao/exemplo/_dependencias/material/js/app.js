;(function(ng) {
  ng.module('doc', ['ngRoute'])
    .config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
      $routeProvider
        .when('/', {
          templateUrl: 'views/main.html'
        })
        .otherwise({redirectTo: '/'});

      $locationProvider.html5Mode(true);
    }]);
}(angular));
