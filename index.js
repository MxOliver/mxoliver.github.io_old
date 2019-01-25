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

/* toggle */

$('.collapse').collapse('toggle');
