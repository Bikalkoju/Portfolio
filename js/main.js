$(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll >= 100) {
        $('.header').addClass('fixed-header');
    }
    else {
        $('.header').removeClass('fixed-header');
    }
});


$(document).ready(function () {
    $('.hamburger-menu').click(function () {
        $('.primary-menu').addClass('active');
        $('.close-btn').addClass('active');
    });
    $('.close-btn').click(function () {
        $('.primary-menu').removeClass('active');
        $('.close-btn').removeClass('active');
    });
});