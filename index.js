$(document).ready(function(){

  var btn = $('.scroll-down') ;
  var btn = $('#products');
  var $elem = $('.aboutus')

  btn.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({scrollTop:$elem.height()}, '300');
  });

});
