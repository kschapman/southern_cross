$(document).ready(function(){

//CART
  $(".cart-icon").click(function(){
    $('#cart').show();
  });

  $(".exit").click(function(){
    $('#cart').hide();
  });

// CALLING WAITER
  $(".language-btn-english").click(function(){
    $('.container-maori').show();
    $('.container').hide();
  });

  $(".language-btn-maori").click(function(){
    $('.container').show();
    $('.container-maori').hide();
  });

  $(".waiter-btn").click(function(){
    $('#waiter-called').show();
  });

  $(".waiter-called-btn").click(function(){
    $('#waiter-called').hide();
  });

  $(".waiter-btn-maori").click(function(){
    $('#waiter-called-maori').show();
  });

  $(".waiter-called-btn").click(function(){
    $('#waiter-called-maori').hide();
  });

//ORDER COMPLETE
$(".complete-btn").click(function(){
  $('.complete').hide();
});

});
