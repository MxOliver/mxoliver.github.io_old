/* website js code */

$(document).ready(function(){
  $('.header').height($(window).height());
})

function toggleNav() {
  var x = document.getElementById("navbarSupportedContent");
  if (x.className == "navbar") {
    x.className += " responsive";
  } else {
    x.classname = "navbar";
  }
}

$(".navbar a").click(function () {
  $("body,html").animate({
    scrollTop: $("#" + $(this).data('value')).offset().top
  }, 1000)

})

/* mobile optimized video dimensions */

 var player_width = 854;
 var player_height = 480;

 var responsiveVideo = function() {

 //see note below
  var player_window_buffer = 120;
  var window_width = $(window).width();
  var aspect_ratio = player_width/player_height;
  var player_span = $('span.vidyard_player > span');
  var player_iframe = $('iframe.vidyard_iframe');

  if (window_width >= player_width) {
   $(player_span).width(player_width)
   $(player_span).height(player_height).css('line-height', player_height + 'px');
   $(player_iframe).width(player_width);
   $(player_iframe).height(player_height);
  } else {
   $(player_span).width(window_width-player_window_buffer);
   var new_wrapper_height = $(player_span).width()/aspect_ratio;
   $(player_span).height(new_wrapper_height).css('line-height', new_wrapper_height + 'px');
   $(player_iframe).width(window_width-player_window_buffer);
   $(player_iframe).height(($(player_span).width()/aspect_ratio));
  }
 }

 $(document).ready(function(){responsiveVideo();});
 $(window).resize(function() {responsiveVideo();});
