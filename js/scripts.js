$(document).ready(function() {

    var milliseconds = 500;

    $('#main-button').click(function() {
        $('html, body').animate({
            scrollTop: $('#portfolio-section').offset().top
        }, milliseconds);
    });

    $('#portfolio-button').click(function() {
        $('html, body').animate({
            scrollTop: $('#who-am-i-section').offset().top
        }, milliseconds);
    });

    $('#who-am-i-button').click(function() {
        $('html, body').animate({
            scrollTop: $('#contact-section').offset().top
        }, milliseconds);
    });

    $('#go-up-button').click(function() {
        $('html, body').animate({
            scrollTop: $('#hero-section').offset().top
        }, milliseconds);
    });
});