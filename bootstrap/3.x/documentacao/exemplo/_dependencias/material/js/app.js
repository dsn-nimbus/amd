;(function(ng) {
  ng.module('doc', ['ngRoute'])
    .config(['$routeProvider', function($routeProvider) {
      $routeProvider
        .when('/', {
          templateUrl: 'views/main.html'
        })
        .otherwise({redirectTo: '/'})
    }]);
}(angular));
