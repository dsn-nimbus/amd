$(function() {
  var jsMenu = '#js-menu-cabecalho';
  var ESCONDIDO = '-999px';
  var VISIVEL = '0px';

  $(jsMenu).css({'margin-left': ESCONDIDO});

  $('[data-target=' + jsMenu + '-lateral]').on('click', function() {
    var ml = $(jsMenu).css('margin-left') === VISIVEL ? ESCONDIDO : VISIVEL;
    
    $(jsMenu).css({'margin-left': ml});
  })
});
