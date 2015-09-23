$(function() {
  var GRAFICO_LINHA_TEMPO_REAL = '#grafico-linha-tempo-real';
  var GRAFICO_PIZZA_1 = '#grafico-pizza1';
  var GRAFICO_BARRA_1 = '#grafico-barra1';
  var GRAFICO_AREA_1 = '#grafico-area1';
  var GRAFICO_PIZZA_2 = '#grafico-pizza2';

  ;(function() {
    var info = {valores: [1, 2, 3, 4, 5]};

    setTimeout(function() {
      info.valores.push(Math.floor(Math.random() * 10));
      console.log($(GRAFICO_LINHA_TEMPO_REAL).highcharts());
    }, 1000);

    $(GRAFICO_LINHA_TEMPO_REAL)
    .highcharts({
      chart: {
        height: 300
      },
      exporting: {
        enabled: false
      },
      credits: {
        enabled: false
      },
      title: {
        text: '',
        x: -20 //center
      },
      yAxis: {
        title: {
          text: ''
        },
        gridLineWidth: 0,
        minorGridLength: 0
      },
      tooltip: {
        valuePrefix: 'R$ ',
        shared: true
      },
      legend: {
        layout: 'vertical',
        align: 'center',
        verticalAlign: 'top',
        borderWidth: 0
      },
      series: [{
        name: 'Acessos simultâneos',
        data: info.valores
      }]
    })
  }());

  ;(function() {
    var info = {valores: [1, 2, 3, 4, 5]};

    $(GRAFICO_PIZZA_1)
    .highcharts({
      chart: {
        height: 300,
        type: 'pie'
      },
      exporting: {
        enabled: false
      },
      credits: {
        enabled: false
      },
      title: {
        text: '',
        x: -20 //center
      },
      yAxis: {
        title: {
          text: ''
        },
        gridLineWidth: 0,
        minorGridLength: 0
      },
      tooltip: {
        valuePrefix: 'R$ ',
        shared: true
      },
      legend: {
        layout: 'vertical',
        align: 'center',
        verticalAlign: 'top',
        borderWidth: 0
      },
      series: [{
        name: 'Acessos simultâneos',
        data: info.valores
      }]
    })
  }());

  ;(function() {
    var info = {valores: [1, 2, 3, 4, 5, 7, 0.5, 2]};

    $(GRAFICO_BARRA_1)
    .highcharts({
      chart: {
        height: 300,
        type: 'bar'
      },
      exporting: {
        enabled: false
      },
      credits: {
        enabled: false
      },
      title: {
        text: '',
        x: -20 //center
      },
      yAxis: {
        title: {
          text: ''
        },
        gridLineWidth: 0,
        minorGridLength: 0
      },
      tooltip: {
        valuePrefix: 'R$ ',
        shared: true
      },
      legend: {
        layout: 'vertical',
        align: 'center',
        verticalAlign: 'top',
        borderWidth: 0
      },
      series: [{
        name: 'Informações',
        data: info.valores
      }]
    })
  }());

  ;(function() {
    var info = {valores1: [1, 2, 3, 4, 5],
                valores2: [0, 1, 5, 8, 2]};

    $(GRAFICO_AREA_1)
    .highcharts({
      chart: {
        height: 300,
        type: 'area'
      },
      exporting: {
        enabled: false
      },
      credits: {
        enabled: false
      },
      title: {
        text: '',
        x: -20 //center
      },
      yAxis: {
        title: {
          text: ''
        },
        gridLineWidth: 0,
        minorGridLength: 0
      },
      tooltip: {
        valuePrefix: 'R$ ',
        shared: true
      },
      legend: {
        layout: 'vertical',
        align: 'center',
        verticalAlign: 'top',
        borderWidth: 0
      },
      series: [{
        name: 'Uma informação importante',
        data: info.valores1
      },
      {
        name: 'Outra informação importante',
        data: info.valores2
      }]
    })
  }());

  ;(function() {
    var info = {valores1: [1, 2, 3, 4, 5]};

    $(GRAFICO_PIZZA_2)
    .highcharts({
      chart: {
        height: 300,
        type: 'pie'
      },
      exporting: {
        enabled: false
      },
      credits: {
        enabled: false
      },
      title: {
        text: '',
        x: -20 //center
      },
      yAxis: {
        title: {
          text: ''
        },
        gridLineWidth: 0,
        minorGridLength: 0
      },
      tooltip: {
        valuePrefix: 'R$ ',
        shared: true
      },
      legend: {
        layout: 'vertical',
        align: 'center',
        verticalAlign: 'top',
        borderWidth: 0
      },
      series: [{
        name: 'Uma informação importante',
        data: info.valores1
      }]
    })
  }());
})
