jQuery(window).scroll(function(){
         var $sections = $('section');
    $sections.each(function(i,el){
        var top  = $(el).offset().top-100;
        var bottom = top +$(el).height();
        var scroll = $(window).scrollTop();
        var id = $(el).attr('id');
        if( scroll > top && scroll < bottom){
            $('a.active').removeClass('active');
            $('a[href="#'+id+'"]').addClass('active');

        }
    })
 });

 jQuery(function($) {
  $(window).scroll(function(){
    if($(this).scrollTop()>560){
      $('.header-nav').addClass('fixed');
      $('.header-nav').addClass('col-md-12');
      $('.header-nav').removeClass('col-md-offset-3');
      $('.header-nav').removeClass('col-md-7');
    }
    else if ($(this).scrollTop()<560){
      $('.header-nav').removeClass('fixed');
      $('.header-nav').removeClass('col-md-12');
      $('.header-nav').addClass('col-md-offset-3');
      $('.header-nav').addClass('col-md-7');
    }
  });
});
