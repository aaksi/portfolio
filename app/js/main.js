$(function(){

    $(window).scroll(function() {
        var sticky = $('.header'),
          scroll = $(window).scrollTop();
         
        if (scroll >= 80) { 
          sticky.addClass('fixed'); }
        else { 
         sticky.removeClass('fixed');
        }
      });

      $('.menu__list-link').on( 'click', function(){ 
        var el = $(this);
        var dest = el.attr('href'); 
        if(dest !== undefined && dest !== '') { 
            $('html').animate({ 
                scrollTop: $(dest).offset().top 
            }, 500 
            );
        }
        return false;
    });
      
    $('.menu__btn').on('click', function(){
        $(this).toggleClass('menu__btn--active');
        $('.menu__list').toggleClass('menu__list--active');
    });

  
      
});
