

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
  
  // $('.slider__labels').slick({
  //     slidesToShow: 0,
  //   slidesToScroll: 1,
  //   asNavFor: '.slider__container',
  //   // dots: true,
  //   // centerMode: true,
  //   // focusOnSelect: true,
  //   arrows: false
  //   });

  })