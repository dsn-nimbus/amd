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
    }])
    .controller('CabecalhoController', [function() {
      this.usuario = {
        imagem: 'https://avatars0.githubusercontent.com/u/7040162?v=3&s=4i0',
        nome: 'Fulano da Silva',
        email: 'fulanosilva@gmail.com'
      }

      this.produtos = [
        {nome: 'Nome do Produto', logo: 'https://www.w3.org/html/logo/downloads/HTML5_Logo_512.png'},
        {nome: 'Nome do Produto', logo: 'https://www.w3.org/html/logo/downloads/HTML5_Logo_512.png'},
        {nome: 'Nome do Produto', logo: 'https://www.w3.org/html/logo/downloads/HTML5_Logo_512.png'},
        {nome: 'Nome do Produto', logo: 'https://www.w3.org/html/logo/downloads/HTML5_Logo_512.png'},
        {nome: 'Nome do Produto', logo: 'https://www.w3.org/html/logo/downloads/HTML5_Logo_512.png'},
        {nome: 'Nome do Produto', logo: 'https://www.w3.org/html/logo/downloads/HTML5_Logo_512.png'},
        {nome: 'Nome do Produto', logo: 'https://www.w3.org/html/logo/downloads/HTML5_Logo_512.png'},
        {nome: 'Nome do Produto', logo: 'https://www.w3.org/html/logo/downloads/HTML5_Logo_512.png'},
        {nome: 'Nome do Produto', logo: 'https://www.w3.org/html/logo/downloads/HTML5_Logo_512.png'},
        {nome: 'Nome do Produto', logo: 'https://www.w3.org/html/logo/downloads/HTML5_Logo_512.png'},
        {nome: 'Nome do Produto', logo: 'https://www.w3.org/html/logo/downloads/HTML5_Logo_512.png'},
        {nome: 'Nome do Produto', logo: 'https://www.w3.org/html/logo/downloads/HTML5_Logo_512.png'},
        {nome: 'Nome do Produto', logo: 'https://www.w3.org/html/logo/downloads/HTML5_Logo_512.png'},
        {nome: 'Nome do Produto', logo: 'https://www.w3.org/html/logo/downloads/HTML5_Logo_512.png'}
      ]
    }]);
}(angular));
