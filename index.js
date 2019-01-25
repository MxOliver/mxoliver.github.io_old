/* website js code */

$(document).ready(function() {
    $('.header').height($(window).height());
})

/* scroll from nav function */

$(".navbar a").click(function() {
    $("body,html").animate({
        scrollTop: $("#" + $(this).data('value')).offset().top
    }, 1000)

})

$('.collapse').collapse()

/* mobile optimized video dimensions */

var player_width = 854;
var player_height = 480;

var responsiveVideo = function() {

    //see note below
    var player_window_buffer = 120;
    var window_width = $(window).width();
    var aspect_ratio = player_width / player_height;
    var player_span = $('span.vidyard_player > span');
    var player_iframe = $('iframe.vidyard_iframe');

    if (window_width >= player_width) {
        $(player_span).width(player_width)
        $(player_span).height(player_height).css('line-height', player_height + 'px');
        $(player_iframe).width(player_width);
        $(player_iframe).height(player_height);
    } else {
        $(player_span).width(window_width - player_window_buffer);
        var new_wrapper_height = $(player_span).width() / aspect_ratio;
        $(player_span).height(new_wrapper_height).css('line-height', new_wrapper_height + 'px');
        $(player_iframe).width(window_width - player_window_buffer);
        $(player_iframe).height(($(player_span).width() / aspect_ratio));
    }
}

$(document).ready(function() { responsiveVideo(); });
$(window).resize(function() { responsiveVideo(); });


/* progress bars */

/* 

var ProgressBar = require('progressbar.js')

var bar = new ProgressBar.Circle('.skills-bar #container', {
    strokeWidth: 6,
    easing: 'easeInOut',
    duration: 1400,
    color: '#FFEA82',
    trailColor: '#eee',
    trailWidth: 1,
    svgStyle: null
});

bar.animate(1.0); // Number from 0.0 to 1.0 

*/