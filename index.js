$(document).ready(function() {
      $('.scroll-down, #products').on('click', function() {
        $('html, body, #hero').animate({ scrollTop: $('#scroll-to').offset().top}, 500, 'linear');
      });
    });

$(document).ready(function(){
    $('#women').hide();
});

$(document).ready(function(){
    $('#show').on('click', function(){
      $('#men, #women').show(1000);
      $('#men-hide, #women-hide').attr('checked', true);
    });
});

$(document).ready(function(){
  $('#men-hide').attr('checked', true).show();
  $("#men-hide").on('click', function(){
    $("#men").toggle(1000);
  });
});



$(document).ready(function(){
  $("#women-hide").click(function(){
    $("#women").toggle(1000, function(){
      $('html, body, #men').animate({ scrollTop: $('#women').offset().top}, 500, 'linear');
    });

  });
});

