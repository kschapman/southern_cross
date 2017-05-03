$(document).ready(function(){


  $(".cart-icon").click(function(){
    $('#cart').show();
  });

  $(".exit").click(function(){
    $('#cart').hide();
  });

  $(".free-range").click(function(){
    alert("Would you like ")
  });

  $(".language-btn-english").click(function(){
    $('.container-maori').show();
    $('.container').hide();
  });

  $(".language-btn-maori").click(function(){
    $('.container').show();
    $('.container-maori').hide();
  });


});
