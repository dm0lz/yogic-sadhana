
//= require jquery
//= require jquery_ujs
//= require bootstrap-sprockets
//= require lib/jquery.colorbox


$(document).bind('cbox_complete', function(){
  $('form').submit(function() {
    $("section.well.home").hide();
    $(".register_message").show();
  });
});

$(document).ready(function(){
  $(".arrow-span").bind('click', function(){
    $('html,body').animate({
      scrollTop: window.scrollY + window.innerHeight
    }, 1000);
  });
});
