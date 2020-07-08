(function($) { 
    $(function() { 
      // main menu
      $('#slide').click(function() {
        $('.nav-main-menu').slideToggle();
      });

      // sub menu
      $('.node-sub__slide').click(function(){
        $('.nav-sub-menu').slideToggle();
      });   
    }); 
  })(jQuery);