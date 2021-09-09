window.addEventListener('load', function () {
    document.querySelector('body').classList.add('loaded');
});

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
    $('.primary-menu > li >a').click(function () {
        $('.primary-menu').removeClass('active');
        $('.close-btn').removeClass('active');
    });
});

/*--equal-height-js--*/
$(document).ready(function () {
    var highestBox = 0;
    $('.work-item', this).each(function(){
        if($(this).height() > highestBox) {
          highestBox = $(this).height(); 
        }
      
      });  
            
      // Set the height of all those children to whichever was highest 
      $('.work-item',this).height(highestBox);
});