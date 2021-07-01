var url = 'https://ifeelsoaloneinmy.computer/main.html';
var animateNumber = function(element, newValue) {
  var previousNumber = element.data('num') || 0;

  // animate using jQuery
  $({ a: previousNumber }).animate({ a: newValue }, {
    duration: 300,
    step: function () {
      element.text(~~this.a);
    },
    complete: function () {
      element.text(newValue).data('num', newValue);
    }
  });
};

var updateGoSquared = function() {
  $.getJSON('https://api.gosquared.com/now/v3/pages?api_key=demo&site_token=GSN-106863-S&href=' + encodeURIComponent(url), function(data) {
    setTimeout(updateGoSquared, 5000);

    var visitors = $('#online-now').addClass('visible').find('.visitors');
    animateNumber(visitors, data.visitors);
  });
};

updateGoSquared();