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
        .when('/login', {
          templateUrl: 'views/login.html',
          controller: 'LoginController',
          controllerAs: 'loginCtrl'
        })

        .when('/tabelas', {
          templateUrl: 'views/tabelas.html',
          controller: 'TabelasController',
          controllerAs: 'tabelasCtrl'
        })
        .when('/modais', {
          templateUrl: 'views/modais.html',
          controller: 'ModaisController',
          controllerAs: 'modaisCtrl'
        })
        .when('/alertas', {
          templateUrl: 'views/alertas.html',
          controller: 'AlertasController',
          controllerAs: 'alertasCtrl'
        })
        .when('/abas', {
          templateUrl: 'views/abas.html',
          controller: 'AbasController',
          controllerAs: 'aCtrl'
        })
        .when('/cards', {
          templateUrl: 'views/cards.html',
          controller: 'CardsController',
          controllerAs: 'cardsCtrl'
        })
        .when('/listas', {
          templateUrl: 'views/listas.html',
          controller: 'ListasController',
          controllerAs: 'lCtrl'
        })
        .when('/forms', {
          templateUrl: 'views/forms.html',
          controller: 'FormsController',
          controllerAs: 'formsCtrl'
        })
        .when('/loading', {
          templateUrl: 'views/loading.html',
          controller: 'LoadingController',
          controllerAs: 'loadingCtrl'
        })
        .otherwise({redirectTo: '/'})

      $locationProvider.html5Mode(true);
    }])
    .constant('Clipboard', Clipboard)
    .controller('LoginController', [function() {
      this.exemplo = `<div class="alt-login-card">
  <form>
      <div class="alt-login-logo-container">
          <img src="https://passaporte2-hml.alterdata.com.br/images/logo_passaporte.82c1359c.svg" 
               class="alt-login-logo" />
      </div>

      <div class="alt-login-form-container">

        <div class="alt-espacamento-top">
            <label class="text-muted">Usuário</label>
            <input type="text" 
                    class="form-control"/>
        </div>

        <div class="alt-espacamento-top">
            <label class="text-muted">Senha</label>
            <input type="text" 
                    class="form-control"/>
        </div>

        <div class="alt-espacamento-top">
            <label class="text-muted">
                <input type="checkbox" />
                Manter conectado
            </label>
        </div>

        <div class="alt-espacamento-top">
            <button type="button"
                    exibe-loading
                    class="btn btn-block btn-primary">Entrar</button>
        </div>

        <div class="alt-espacamento-top text-right">
            <a href="#">Esqueci minha senha</a>                       
        </div>
      </div>
  </form>
</div>`;
    }])
    .controller('CabecalhoController', ['$rootScope', '$location', function($rootScope, $location) {
      this.usuario = {
        avatar: 'https://avatars0.githubusercontent.com/u/7040162?v=3&s=4i0',
        nomeUsuario: 'Fulano da Silva',
        emailUsuario: 'fulanosilva@gmail.com'
      }

      this.rotas = [
        {nome: 'Login', path: '/login', ativa: false},
        {nome: 'Tabelas', path: '/tabelas', ativa: false},
        {nome: 'Modais', path: '/modais', ativa: false},
        {nome: 'Alertas', path: '/alertas', ativa: false},
        {nome: 'Abas', path: '/abas', ativa: false},
        {nome: 'Cards', path: '/cards', ativa: false},
        {nome: 'Listas', path: '/listas', ativa: false},
        {nome: 'Forms', path: '/forms', ativa: false},
        {nome: 'Loading', path: '/loading', ativa: false},
      ]

      this.produtos = {
        habilitados: [
          {nome: 'Nome do Produto', urlLogo: 'https://www.w3.org/html/logo/downloads/HTML5_Logo_512.png'},
          {nome: 'Nome do Produto', urlLogo: 'https://www.w3.org/html/logo/downloads/HTML5_Logo_512.png'},
          {nome: 'Nome do Produto', urlLogo: 'https://www.w3.org/html/logo/downloads/HTML5_Logo_512.png'},
          {nome: 'Nome do Produto', urlLogo: 'https://www.w3.org/html/logo/downloads/HTML5_Logo_512.png'},
          {nome: 'Nome do Produto', urlLogo: 'https://www.w3.org/html/logo/downloads/HTML5_Logo_512.png'},
          {nome: 'Nome do Produto', urlLogo: 'https://www.w3.org/html/logo/downloads/HTML5_Logo_512.png'},
          {nome: 'Nome do Produto', urlLogo: 'https://www.w3.org/html/logo/downloads/HTML5_Logo_512.png'},
          {nome: 'Nome do Produto', urlLogo: 'https://www.w3.org/html/logo/downloads/HTML5_Logo_512.png'},
          {nome: 'Nome do Produto', urlLogo: 'https://www.w3.org/html/logo/downloads/HTML5_Logo_512.png'},
          {nome: 'Nome do Produto', urlLogo: 'https://www.w3.org/html/logo/downloads/HTML5_Logo_512.png'},
          {nome: 'Nome do Produto', urlLogo: 'https://www.w3.org/html/logo/downloads/HTML5_Logo_512.png'},
          {nome: 'Nome do Produto', urlLogo: 'https://www.w3.org/html/logo/downloads/HTML5_Logo_512.png'},
          {nome: 'Nome do Produto', urlLogo: 'https://www.w3.org/html/logo/downloads/HTML5_Logo_512.png'},
          {nome: 'Nome do Produto', urlLogo: 'https://www.w3.org/html/logo/downloads/HTML5_Logo_512.png'}
        ]
      };

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
      this.exemplo = `<div>
    <ul class="nav nav-tabs espacamento-bottom" role="tablist">
      <li role="presentation">
        <a href="#aba1">Aba1</a>
      </li>

      <li role="presentation">
        <a href="#aba2">Aba2</a>
      </li>

      <li role="presentation active">
        <a href="#aba3">Aba3</a>
      </li>
    </ul>

  <div class="tab-content">
    <div role="tabpanel" class="tab-pane" id="aba1">
      <h4 class="text-muted alt-espacamento-top">Informações Aba1</h4>
    </div>

    <div role="tabpanel" class="tab-pane" id="aba2">
      <h4 class="text-muted alt-espacamento-top">Informações Aba2</h4>
    </div>

    <div role="tabpanel" class="tab-pane active" id="aba3">
      <h4 class="text-muted alt-espacamento-top">Informações Aba3</h4>
    </div>
</div>`;

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
      this.exemplo = `<div class="modal fade" id="modal-default" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
  <div class="modal-dialog" role="document">
    <div class="modal-content">

      <div class="modal-header alt-cor-principal">
        <button type="button" 
                class="close" 
                data-dismiss="modal" 
                aria-label="Close">
                  <span aria-hidden="true">&times;</span>
        </button>
        <h4 class="modal-title" id="myModalLabel">Título do modal</h4>
      </div>

      <div class="modal-body alt-overflow-hidden">
        <div id="info-usuario-container" class="row">
          <div class="col-xs-12 alt-espacamento-bottom">
            <label>Nome</label>
            <input type="text" class="form-control" value="Fulano Silva"/>
          </div>

          <div class="col-xs-12 alt-espacamento-bottom">
            <label>Email</label>
            <input type="email" class="form-control" value=""/>
          </div>

          <div class="col-xs-12 col-sm-6 alt-espacamento-bottom">
            <label>CPF</label>
            <input type="text" class="form-control" value="123123123123"/>
          </div>

          <div class="col-xs-12 col-sm-6">
            <label>Celular</label>
            <input type="text" class="form-control" value="999575757"/>
          </div>
        </div>
      </div>

      <div class="modal-footer">
        <button type="button" class="btn btn-primary" data-dismiss="modal">Gravar</button>
        <button type="button" class="btn btn-default" data-dismiss="modal">Cancelar</button>
      </div>

    </div>
  </div>
</div>`;
    }]) 
    .controller('AlertasController', [function() {
      this.exemplo = `<div>
  <div id="alt-alerta-flutuante-blanket" style="display: none"></div>
  <div id="alt-alerta-flutuante" 
      class="alert alert-danger alt-alerta-flutuante alt-sombra-secundaria" style="display: none;">
        <button type="button" class="close">
          <span aria-hidden="true">&times;</span>
        </button>

        <span class="fa fa-warning fa-fw"></span>
        <strong>Ooops!</strong>
        <p class="alt-espacamento-top">Erro</p>
  </div>
</div>`;

      this.exibe = function(el) {
        this.fecha();
        $(el).show();

        setTimeout(function() {
          $(el).hide();
        }, 10000);
      }

      this.fecha = function() {
        $('.alert').hide();
      }
    }])
    .controller('FormsController', [function() {
      this.exemplo = `<form class="alt-sombra-secundaria alt-card alt-espacamento-bottom">
  <div class="row">
    <div class="col-xs-12">
      <label>Email</label>
      <input type="email"
             class="form-control" />
    </div>

    <div class="col-xs-12 alt-espacamento-top">
      <label>Nome</label>
      <input type="text"
             class="form-control" />
      </div>

      <div class="col-xs-12 col-sm-6 col-md-4 alt-espacamento-top">
          <div class="col-xs-12 alt-sem-padding-left alt-sem-padding-right alt-campo-data-container">
            <label>Algum input</label>
            <input type="text"
                   placeholder="__/__/____"
                   class="form-control alt-campo-data" />

              <span class="fa fa-fw fa-calendar alt-icone-data text-muted"></span>
            </div>
          </div>

      <div class="col-xs-12 col-sm-6 col-md-4 alt-espacamento-top">
          <div class="col-xs-12 alt-sem-padding-left alt-sem-padding-right alt-campo-data-container">
            <label>Algum input</label>
            <input type="text"
                   placeholder="__/__/____"
                   class="form-control alt-campo-data" />

              <span class="fa fa-fw fa-calendar alt-icone-data text-muted"></span>
            </div>
          </div>

      <div class="col-xs-12 alt-espacamento-top">
        <label>Descrição</label>
        <input type="text"
               class="form-control" />
      </div>

      <div class="col-xs-12 alt-espacamento-top">
        <label>Comentário</label>
        <textarea type="text"
                  rows="5"
                 class="form-control"></textarea>
      </div>

      <div class="col-xs-12 alt-espacamento-top text-right">
        <button type="button"
                class="btn btn-primary">Gravar</button>

        <button type="button"
                class="btn btn-default">Cancelar</button>
      </div>
  </div>
</form>
`;
    }])
    .controller('TabelasController', [function() {
      this.exemplo = `<div class="col-xs-22 col-sm-6 alt-espacamento-bottom">
  <table class="table table-condensed table-striped alt-sombra-secundaria">
    <thead>
      <tr>
        <th>Empresa</th>
        <th>CNPJ</th>
        <th>Status</th>
      </tr>
    </thead>

    <tbody>
      <tr>
        <td data-alt-titulo="Empresa">EMPRESA LTDA.</td>
        <td data-alt-titulo="CNPJ">12345678901234</td>
        <td data-alt-titulo="Status">
          <label class="label label-success">Ativa</label>
        </td>
      </tr>
    </tbody>
  </table>
</div>`;
    }])
    .controller('LoadingController', [function() {
      this.exemplo = `<div id="alt-carregando-info-container" class="hidden">
  <div id="alt-carregando-info-coberta"></div>
  <div id="alt-carregando-info-aviso">
    <p class="fa fa-fw fa-refresh fa-spin"></p>
  </div>
</div>`;
    }])
    .controller('CardsController', [function() {
      this.exemplo = `<div class="col-xs-12 col-sm-4 alt-espacamento-bottom">
  <h4 class="text-muted">Algum subtitulo 9</h4>
  <div class="alt-sombra-secundaria alt-card">
    <p>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem.</p>
    <p>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem.</p>
  </div>
</div>`;
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

      this.exemplo = `<div class="alt-lista-container alt-sombra-secundaria">
  <div class="alt-padding-medio alt-lista-item">
    <div class="alt-lista-item-imagem-container">
      <img src="https://avatars0.githubusercontent.com/u/7040162?v=3&s=4i0" />
    </div>

    <div class="alt-lista-item-acao-container">
      <button type="button"
              class="btn btn-default alt-lista-item-acao">Ação</button>
    </div>

    <div class="alt-lista-item-info-container">
      <p class="alt-lista-item-info">Mensagem</p>
    </div>
  </div>
</div>`;
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
    }])
    .directive('exibeCodigo', ['Clipboard', function(Clipboard) {
      return {
        restrict: 'E',
        templateUrl: '_dependencias/material/includes/codigo.html', 
        scope: {
          codigo: '='
        },
        link: function(scope, element, attrs) {
          scope.copiado = false;

          new Clipboard('.btn-clipboard');

          var destroi = scope.$watch('codigo', function(info) {
            if (!!info) {
              scope.codigo = info;
            }
          });

          element.find('#ativador-modal').on('click', function() {
            scope.copiado = false;
            $('#modal-codigo').modal();
          });

          scope.copiaFeita = function() {
            scope.copiado = true;
          }

          scope.$on('$destroy', function() {
            element.off('click');
            destroi();
            scope.copiado = false;
          });
        }
      }
    }])
    .directive('altToggleMenu', [function() {
        return function(scope, element, attrs) {
          var _el = ng.element(attrs.altToggleMenu);
          _el.css({height: 'auto'});

          element.on('click', function() {
            _el.toggleClass('in');
          });

          scope.$on('$destroy', function() {
            element.off('click');
          });
        }
    }]);
}(angular));
