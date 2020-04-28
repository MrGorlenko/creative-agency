

  $(document).ready(function() {
    $('.slider__container').slick({
      arrows: false,
      dots: true,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      draggable: false,
      fade: true,
      cssEase: 'linear',
      lazyLoad: 'progressive',
      autoPlay: true
      // vertical: true
      // asNavFor: '.slider__labels'
      // appendDots: $('.slider__dots'),
      // pauseOnDotsHover:true
      // adaptiveHeight: true
    });
  
    var sliderLink = $('.slider__link'),
    lineUp = $(".line-up"),
    lineDown = $(".line-down"),
    menuWhite = $('.header__menu_white'),
    menuMobile = $('.header__menu'),
    sliderServices = $('.slider__services'),
    sliderPeregraph = $('.slider__paragraph'),
    sliderLine = $('.slider__line'),
    sliderList = $('.slider__list'),
    sliderPortfolio = $('.slider__portfolio'),
    sliderTitle = $('.slider__title'),
    sliderNextLabel = $('.slider__next-label'),
    sliderPictures = $('.slider__pictures'),
    sliderContent = $('.slider__content'),
    sliderLineWhite = $('.slider__line_white'),
    slickDots = $('.slick-dots'),
    sliderCollage = $('.slider__picture');

    // sliderLink.on('click', function(){
    //   lineUp.addClass('line_up');
    //   lineDown.addClass('line_down');


    //   sliderLink.addClass('text_none');
    //   sliderServices.addClass('text_none');
    //   sliderPeregraph.addClass('text_none');
    //   sliderLine.addClass('text_none');
    //   sliderList.addClass('text_none');
    //   sliderPortfolio.removeClass('text_none');


    //   sliderLink.removeClass('text_active');
    //   sliderServices.removeClass('text_active');
    //   sliderPeregraph.removeClass('text_active');
    //   sliderLine.removeClass('text_active');
    //   sliderList.removeClass('text_active');


    //   sliderTitle.addClass('text_up');
    //   sliderTitle.addClass('fz_40');

    //   sliderNextLabel.addClass('text_up_340');

    //   sliderPictures.removeClass('text_none');
    //   sliderPictures.addClass('top_120');

    //   sliderContent.addClass('height_900');

    //   sliderLineWhite.addClass('text_up_860');

    //   slickDots.addClass('text_up_330');

    //   sliderCollage.addClass('text_none');
    //   sliderCollage.addClass('hieght_width_20');

    //   $(".slider__next-label_d").addClass('margin_top_15');
    //   $(".slider__next-label_p").addClass('padding_top_0');
    //   $(".slider__next-label_m").addClass('padding_top_0');
    // })


    // menuWhite.on('click', function(){
    //   lineUp.removeClass('line_up');
    //   lineDown.removeClass('line_down');


    //   sliderLink.addClass('text_active');
    //   sliderServices.addClass('text_active');
    //   sliderPeregraph.addClass('text_active');
    //   sliderLine.addClass('text_active');
    //   sliderList.addClass('text_active');


    //   sliderLink.removeClass('text_none');
    //   sliderPortfolio.addClass('text_none');
    //   sliderServices.removeClass('text_none');
    //   sliderPeregraph.removeClass('text_none');
    //   sliderLine.removeClass('text_none');
    //   sliderList.removeClass('text_none');

    //   sliderTitle.removeClass('text_up');
    //   sliderTitle.removeClass('fz_40');

    //   sliderNextLabel.removeClass('text_up_340');

    //   sliderPictures.addClass('text_none');
    //   setTimeout(function () {
    //     sliderPictures.removeClass('top_120');
    // }, 1000);

    // sliderContent.removeClass('height_900');

    // sliderLineWhite.removeClass('text_up_860');
    // slickDots.removeClass('text_up_330');

    // sliderCollage.removeClass('text_none');
    // sliderCollage.removeClass('hieght_width_20');

    // $(".slider__next-label_d").removeClass('margin_top_15');
    // $(".slider__next-label_p").removeClass('padding_top_0');
    // $(".slider__next-label_m").removeClass('padding_top_0');
    // // hieght_width_20
    // })

    // menuMobile.on('click', function(){
    //   lineUp.removeClass('line_up');
    //   lineDown.removeClass('line_down');


    //   sliderLink.addClass('text_active');
    //   sliderServices.addClass('text_active');
    //   sliderPeregraph.addClass('text_active');
    //   sliderLine.addClass('text_active');
    //   sliderList.addClass('text_active');


    //   sliderLink.removeClass('text_none');
    //   sliderPortfolio.addClass('text_none');
    //   sliderServices.removeClass('text_none');
    //   sliderPeregraph.removeClass('text_none');
    //   sliderLine.removeClass('text_none');
    //   sliderList.removeClass('text_none');

    //   sliderTitle.removeClass('text_up');
    //   sliderTitle.removeClass('fz_40');

    //   sliderNextLabel.removeClass('text_up_340');

    //   sliderPictures.addClass('text_none');
    //   setTimeout(function () {
    //     sliderPictures.removeClass('top_120');
    // }, 1000);

    // sliderContent.removeClass('height_900');

    // sliderLineWhite.removeClass('text_up_860');
    // slickDots.removeClass('text_up_330');

    // sliderCollage.removeClass('text_none');
    // sliderCollage.removeClass('hieght_width_20');

    // $(".slider__next-label_d").removeClass('margin_top_15');
    // $(".slider__next-label_p").removeClass('padding_top_0');
    // $(".slider__next-label_m").removeClass('padding_top_0');
    // // hieght_width_20
    // })


    function myFunctionCircle(k) {
      if (k.matches) { 
      
        sliderLink.on('click', function(){
          lineUp.addClass('line_up');
          lineDown.addClass('line_down');
    
    
          sliderLink.addClass('text_none');
          sliderServices.addClass('text_none');
          sliderPeregraph.addClass('text_none');
          sliderLine.addClass('text_none');
          sliderList.addClass('text_none');
          sliderPortfolio.removeClass('text_none');
    
    
          sliderLink.removeClass('text_active');
          sliderServices.removeClass('text_active');
          sliderPeregraph.removeClass('text_active');
          sliderLine.removeClass('text_active');
          sliderList.removeClass('text_active');
    
    
          sliderTitle.addClass('text_up');
          sliderTitle.addClass('fz_40');
    
          sliderNextLabel.addClass('text_up_340');
    
          sliderPictures.removeClass('text_none');
          sliderPictures.addClass('top_120');
    
          sliderContent.addClass('height_900');
    
          sliderLineWhite.addClass('text_up_860');
    
          slickDots.addClass('text_up_330');
    
          sliderCollage.addClass('text_none');
          sliderCollage.addClass('hieght_width_20');
    
          $(".slider__next-label_d").addClass('margin_top_15');
          $(".slider__next-label_p").addClass('padding_top_0');
          $(".slider__next-label_m").addClass('padding_top_0');
        })

        menuWhite.on('click', function(){
          lineUp.removeClass('line_up');
          lineDown.removeClass('line_down');
    
    
          sliderLink.addClass('text_active');
          sliderServices.addClass('text_active');
          sliderPeregraph.addClass('text_active');
          sliderLine.addClass('text_active');
          sliderList.addClass('text_active');
    
    
          sliderLink.removeClass('text_none');
          sliderPortfolio.addClass('text_none');
          sliderServices.removeClass('text_none');
          sliderPeregraph.removeClass('text_none');
          sliderLine.removeClass('text_none');
          sliderList.removeClass('text_none');
    
          sliderTitle.removeClass('text_up');
          sliderTitle.removeClass('fz_40');
    
          sliderNextLabel.removeClass('text_up_340');
    
          sliderPictures.addClass('text_none');
          setTimeout(function () {
            sliderPictures.removeClass('top_120');
        }, 1000);
    
        sliderContent.removeClass('height_900');
    
        sliderLineWhite.removeClass('text_up_860');
        slickDots.removeClass('text_up_330');
    
        sliderCollage.removeClass('text_none');
        sliderCollage.removeClass('hieght_width_20');
    
        $(".slider__next-label_d").removeClass('margin_top_15');
        $(".slider__next-label_p").removeClass('padding_top_0');
        $(".slider__next-label_m").removeClass('padding_top_0');
        // hieght_width_20
        })

      } else {

        sliderLink.on('click', function(){
          lineUp.addClass('line_up');
          lineDown.addClass('line_down');
    
    
          sliderLink.addClass('text_none');
          sliderServices.addClass('text_none');
          sliderPeregraph.addClass('text_none');
          sliderLine.addClass('text_none');
          sliderList.addClass('text_none');
          sliderPortfolio.removeClass('text_none');
    
    
          sliderLink.removeClass('text_active');
          sliderServices.removeClass('text_active');
          sliderPeregraph.removeClass('text_active');
          sliderLine.removeClass('text_active');
          sliderList.removeClass('text_active');
    
    
          sliderTitle.addClass('text_up');
          sliderTitle.addClass('fz_24');
    
          sliderNextLabel.addClass('text_up_340');
    
          sliderPictures.removeClass('text_none');
          sliderPictures.addClass('top_120');
    
          sliderContent.addClass('height_900');
    
          sliderLineWhite.addClass('text_up_860');
    
          slickDots.addClass('top_915');
    
          sliderCollage.addClass('text_none');
          sliderCollage.addClass('hieght_width_20');
    
          $(".slider__next-label_d").addClass('margin_top_15');
          $(".slider__next-label_p").addClass('padding_top_0');
          $(".slider__next-label_m").addClass('padding_top_0');
        })

        menuMobile.on('click', function(){
          lineUp.removeClass('line_up');
          lineDown.removeClass('line_down');
    
    
          sliderLink.addClass('text_active');
          sliderServices.addClass('text_active');
          sliderPeregraph.addClass('text_active');
          sliderLine.addClass('text_active');
          sliderList.addClass('text_active');
    
    
          sliderLink.removeClass('text_none');
          sliderPortfolio.addClass('text_none');
          sliderServices.removeClass('text_none');
          sliderPeregraph.removeClass('text_none');
          sliderLine.removeClass('text_none');
          sliderList.removeClass('text_none');
    
          sliderTitle.removeClass('text_up');
          sliderTitle.removeClass('fz_24');
    
          sliderNextLabel.removeClass('text_up_340');
    
          sliderPictures.addClass('text_none');
          setTimeout(function () {
            sliderPictures.removeClass('top_120');
        }, 1000);
    
        sliderContent.removeClass('height_900');
    
        sliderLineWhite.removeClass('text_up_860');
        slickDots.removeClass('top_915');;
    
        sliderCollage.removeClass('text_none');
        sliderCollage.removeClass('hieght_width_20');
    
        $(".slider__next-label_d").removeClass('margin_top_15');
        $(".slider__next-label_p").removeClass('padding_top_0');
        $(".slider__next-label_m").removeClass('padding_top_0');
        // hieght_width_20
        })
        
  
      }
    }
  
    var k = window.matchMedia("(min-width: 992px)")
    myFunctionCircle(k)
    k.addListener(myFunctionCircle)


  })

  // transform: rotate(0.6turn);
// margin-top: 10px;