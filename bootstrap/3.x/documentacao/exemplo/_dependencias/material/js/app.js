;(function(ng) {
  "use strict";

  ng.module('doc', ['ngRoute'])
    .config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
      $routeProvider
        .when('/', {
          templateUrl: 'views/main.html',
          controller: 'PrincipalController',
          controllerAs: 'principalCtrl'
        })
        .when('/tabelas', {
          templateUrl: 'views/tabelas.html'
        })
        .when('/modais', {
          templateUrl: 'views/modais.html'
        })
        .when('/abas', {
          templateUrl: 'views/abas.html',
          controller: 'AbasController',
          controllerAs: 'aCtrl'
        })
        .when('/cards', {
          templateUrl: 'views/cards.html'
        })
        .when('/listas', {
          templateUrl: 'views/listas.html',
          controller: 'ListasController',
          controllerAs: 'lCtrl'
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
    .controller('CabecalhoController', ['$rootScope', '$location', function($rootScope, $location) {
      this.usuario = {
        imagem: 'https://avatars0.githubusercontent.com/u/7040162?v=3&s=4i0',
        nome: 'Fulano da Silva',
        email: 'fulanosilva@gmail.com'
      }

      this.rotas = [
        {nome: 'Tabelas', path: '/tabelas', ativa: false},
        {nome: 'Modais', path: '/modais', ativa: false},
        {nome: 'Abas', path: '/abas', ativa: false},
        {nome: 'Cards', path: '/cards', ativa: false},
        {nome: 'Listas', path: '/listas', ativa: false},
        {nome: 'Forms', path: '/forms', ativa: false},
        {nome: 'Loading', path: '/loading', ativa: false},
      ]

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

      this._selecionaRota = function() {
        var _path = $location.path();

        this.rotas.forEach(function(rota) {
          rota.ativa = false;

          if (_path === rota.path) {
            rota.ativa = true;
          }
        });
      }

      $rootScope.$on('$viewContentLoaded', this._selecionaRota.bind(this));
      $rootScope.$on('$locationChangeSuccess', this._selecionaRota.bind(this));
    }])
    .controller('PrincipalController', [function() {

    }])
    .controller('AbasController', [function() {
      this.abas = [
        {
          nome: 'Aba 1',
          id: "aba-1",
          ativa: true,
          tabela: {
            head: ['A1', 'B1', 'C1'],
            body: [
              ['1', '2', '3'],
              ['1', '2', '3'],
              ['1', '2', '3']
            ]
          }
        },
        {
          nome: 'Aba 2',
          id: "aba-2",
          ativa: false,
          tabela: {
            head: ['A2', 'B2', 'C2'],
            body: [
              ['1', '2', '3'],
              ['1', '2', '3'],
              ['1', '2', '3']
            ]
          }
        },
        {
          nome: 'Aba 3',
          id: "aba-3",
          ativa: false,
          tabela: {
            head: ['A3', 'B3', 'C3'],
            body: [
              ['1', '2', '3'],
              ['1', '2', '3'],
              ['1', '2', '3']
            ]
          }
        },
        {
          nome: 'Aba 4',
          id: "aba-4",
          ativa: false,
          tabela: {
            head: ['A4', 'B4', 'C4'],
            body: [
              ['1', '2', '3'],
              ['1', '2', '3'],
              ['1', '2', '3']
            ]
          }
        },
        {
          nome: 'Aba 5',
          id: "aba-5",
          ativa: false,
          tabela: {
            head: ['A5', 'B5', 'C5'],
            body: [
              ['1', '2', '3'],
              ['1', '2', '3'],
              ['1', '2', '3']
            ]
          }
        },
        {
          nome: 'Aba 6',
          id: "aba-6",
          ativa: false,
          tabela: {
            head: ['A6', 'B6', 'C6'],
            body: [
              ['1', '2', '3'],
              ['1', '2', '3'],
              ['1', '2', '3']
            ]
          }
        }
      ]

      this.ativaAba = function(aba) {
        this.abas.forEach(function(a) {
          a.ativa = false;
        })

        aba.ativa = true;
      }
    }])
    .controller('ModaisController', [function() {

    }])
    .controller('FormsController', [function() {

    }])
    .controller('TabelasController', [function() {

    }])
    .controller('LoadingController', [function() {

    }])
    .controller('CardsController', [function() {

    }])
    .controller('BotoesController', [function() {

    }])
    .controller('ListasController', [function() {
      this.lista = [];

      for (var i = 0; i < 5; i++) {
        this.lista.push({
          imagem: 'https://avatars0.githubusercontent.com/u/7040162?v=3&s=4i0',
          mensagem: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam consectetur et risus sed congue. Sed libero ipsum, laoreet venenatis dui ac, accumsan porta dolor. Pellentesque sollicitudin lorem orci, et consectetur neque porttitor at. Vestibulum vehicula volutpat tortor, nec tincidunt diam pellentesque sed. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque scelerisque tristique dui, vel rutrum tortor molestie eu. Aliquam in efficitur mi. Interdum et malesuada fames ac ante ipsum primis in faucibus. Mauris ultrices luctus lectus vitae efficitur. Phasellus vel eros dui.',
          acao: 'Alguma coisa'
        });
      }
    }])
    .directive('exibeLoading', [function() {
      return function link(scope, element, attrs) {
        element.on('click', function() {
          $('#alt-carregando-info-container').removeClass('hidden');

          if (element.find('.fa').eq(0).hasClass('fa-refresh')) {
            element.find('.fa').eq(0).addClass('fa-spin');

            setTimeout(function() {
              element.find('.fa').eq(0).removeClass('fa-spin');
            }, 1000);
          }

          setTimeout(function() {
            $('#alt-carregando-info-container').addClass('hidden');
          }, 1000);
        });

        scope.$on('$destroy', function() {
          element.off('click');
        })
      }
    }]);
}(angular));
