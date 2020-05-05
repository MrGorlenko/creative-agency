

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
      autoPlay: true,
      responsive: [
        {
          breakpoint: 992,
          settings: {
            arrows: true,
            dots: true
          }
        }
      ]
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




    function myFunctionCircle(k) {
      if (k.matches) { 
      

        var i = 1;
    $('#upper-menu').on('click', function(){


        i = i + 1

        if (i%2 == 0){
            $(".global-menu").addClass('global-menu_active');

            $('.line-up').addClass('global-menu_span-up');
    
            $('.line-down').addClass('global-menu_span-down');

            setTimeout(function () {
                $(".global-menu").addClass('global-menu_bg');
                $(".global-menu").removeClass('global-menu_opacity-none');
            }, 200);
            setTimeout(function () {
                $(".global-menu__link").addClass('global-menu_opacity');
                $(".global-menu__link").removeClass('global-menu_opacity-none');
            }, 200);
            } else {

            setTimeout(function () {
                $(".global-menu").removeClass('global-menu_active');
            }, 1200);

            $('.line-up').removeClass('global-menu_span-up');
    
            $('.line-down').removeClass('global-menu_span-down');
    
            $(".global-menu").addClass('global-menu_opacity-none');
            $(".global-menu__link").addClass('global-menu_opacity-none');
            }
    })

    $('.global-menu').on('click', function(event){
      setTimeout(function () {
        $(".global-menu").removeClass('global-menu_active');
    }, 1200);

    $('.line-up').removeClass('global-menu_span-up');

    $('.line-down').removeClass('global-menu_span-down');

    $(".global-menu").addClass('global-menu_opacity-none');
    $(".global-menu__link").addClass('global-menu_opacity-none');

    i = 1;

    event.preventDefault();

    var id  = $('#cases-id'),
        top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);

    })


        var j = 1;
        sliderLink.on('click', function(){

          j = -1;



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

        $('#middle-menu').on('click', function(){

          j = j + 1
  
          
  
          if (j%2 == 0 && j>0){
              $(".global-menu").addClass('global-menu_active');
  
              $('.line-up').addClass('global-menu_span-up');
      
              $('.line-down').addClass('global-menu_span-down');
      
              setTimeout(function () {
                  $(".global-menu").addClass('global-menu_bg_black');
                  $(".global-menu").removeClass('global-menu_opacity-none');
              }, 200);
              setTimeout(function () {
                  $(".global-menu__link").addClass('global-menu_opacity_black');
                  $(".global-menu__link").removeClass('global-menu_opacity-none');
              }, 200);
              } else {
  
              setTimeout(function () {
                  $(".global-menu").removeClass('global-menu_bg_black');
                  $(".global-menu").removeClass('global-menu_active');
              }, 1200);
  
              $('.line-up').removeClass('global-menu_span-up');
      
              $('.line-down').removeClass('global-menu_span-down');
      
              $(".global-menu").addClass('global-menu_opacity-none');
              $(".global-menu__link").removeClass('global-menu_opacity_black');
              $(".global-menu__link").addClass('global-menu_opacity-none');
              }
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

        $("#marketing-bk").mouseover(function(){
          $(this).addClass('slider__pic_black');
        })
        $("#marketing-bk").mouseout(function(){
          $(this).removeClass('slider__pic_black');
        })

      } else {

        var i = 0;
        sliderLink.on('click', function(){

          i = 0;

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

          $(".slick-next").addClass('top_92');

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

        $(".slick-next").removeClass('top_92');
        // hieght_width_20
        })
      
    $('#upper-menu').on('click', function(){


        i = i + 1

        if (i%2 == 0 && i>0){
            $(".global-menu").addClass('global-menu_active');

            $('.line-up').addClass('global-menu_span-up');
    
            $('.line-down').addClass('global-menu_span-down');

            setTimeout(function () {
                $(".global-menu").addClass('global-menu_bg');
                $(".global-menu").removeClass('global-menu_opacity-none');
            }, 200);
            setTimeout(function () {
                $(".global-menu__link").addClass('global-menu_opacity');
                $(".global-menu__link").removeClass('global-menu_opacity-none');
            }, 200);
            } else {

            setTimeout(function () {
                $(".global-menu").removeClass('global-menu_active');
            }, 1200);

            $('.line-up').removeClass('global-menu_span-up');
    
            $('.line-down').removeClass('global-menu_span-down');
    
            $(".global-menu").addClass('global-menu_opacity-none');
            $(".global-menu__link").addClass('global-menu_opacity-none');
            }
    })

    $('.global-menu').on('click', function(event){
      setTimeout(function () {
        $(".global-menu").removeClass('global-menu_active');
    }, 1200);

    $('.line-up').removeClass('global-menu_span-up');

    $('.line-down').removeClass('global-menu_span-down');

    $(".global-menu").addClass('global-menu_opacity-none');
    $(".global-menu__link").addClass('global-menu_opacity-none');

    i = 1;

    event.preventDefault();

    var id  = $('#cases-id'),
        top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);

    })
  
      }
    }
  
    var k = window.matchMedia("(min-width: 992px)")
    myFunctionCircle(k)
    k.addListener(myFunctionCircle)


  })

  // transform: rotate(0.6turn);
// margin-top: 10px;