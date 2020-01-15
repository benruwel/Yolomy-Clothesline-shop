$(document).ready(function() {
      $('.scroll-down').on('click', function(e) {
        $('html, body, #hero').animate({ scrollTop: $('#scroll-to').offset().top}, 500, 'linear');
      });
    }
);

$(document).ready(function(){
  $("#men-hide").on('click', function(){
    
    $("#men").toggle(1000);
  });
});

$(document).ready(function(){
    $('#men').hide();
    $('#women').hide();
})

$(document).ready(function(){
  $("#women-hide").click(function(){

    $("#women").toggle(1000, function(){
      $('html, body, #men').animate({ scrollTop: $('#women').offset().top}, 500, 'linear');
    });

  });
});

$(document).ready(function(){
  $("#show").click(function(){
    $("#men, #women").show(1000);
  });
});
