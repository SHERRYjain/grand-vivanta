(function ($) {
    "use strict";
  
    // Back to top button
    $(window).scroll(function() {
      if ($(this).scrollTop() > 100) {
        $('.back-to-top').fadeIn('slow');
      } else {
        $('.back-to-top').fadeOut('slow');
      }
    });
    $('.back-to-top').click(function(){
      $('html, body').animate({scrollTop : 0},1500, 'easeInOutExpo');
      return false;
    });
  
    // Header scroll class
    $(window).scroll(function() {
      if ($(this).scrollTop() > 100) {
        $('.header').addClass('header-scrolled');
      } else {
        $('.header').removeClass('header-scrolled');
      }
    });
  
    if ($(window).scrollTop() > 100) {
      $('.header').addClass('header-scrolled');
    }


    $('.menutrigger').click(function(){
      $('.mobile-nav').addClass('open');
      $('.body-overlay').addClass('show');
    });
    $('.closetrigger').click(function(){
      $('.mobile-nav').removeClass('open');
      $('.body-overlay').removeClass('show');
    });
    
})(jQuery);
  
  