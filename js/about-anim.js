$(document).ready(function() {
  var scrollorama = $.scrollorama({
      blocks:'.about__push'
  });

  




  var scrollorama_line = $.scrollorama({
      blocks:'.about__line'
  });

  scrollorama_line.animate('.about__down', {
    delay: -500,
    duration: 500, property: 'min-height', start: 0 + 'px', end: 1280 + 'px', baseline: "top"
  })

  var scrollorama_text = $.scrollorama({
    blocks:'.about__container_labels'
  });



  gsap.from(".first", {
    duration: 2,
    scale: 0.5, 
    opacity: 0, 
    left: -400,
    delay: 0.5, 
    // stagger: 0.2,
  });

  gsap.from(".second", {
    duration: 2,
    scale: 0.5, 
    opacity: 0, 
    left: -400,
    delay: 0.7, 
    // stagger: 0.2,
  });

  gsap.from(".third", {
    duration: 2,
    scale: 0.5, 
    opacity: 0, 
    left: -400,
    delay: 0.9, 
    // stagger: 0.2,
  });

  gsap.from(".forth", {
    duration: 2,
    scale: 0.5, 
    opacity: 0, 
    left: -400,
    delay: 1.2, 
    // stagger: 0.2,
  });

  gsap.from(".fifth", {
    duration: 2,
    scale: 0.5, 
    opacity: 0, 
    left: -400,
    delay: 1.4, 
    // stagger: 0.2,
  });

  gsap.from(".sixth", {
    duration: 2,
    scale: 0.5, 
    opacity: 0, 
    left: -400,
    delay: 1.6, 
    // stagger: 0.2,
  });

  gsap.from(".seventh", {
    duration: 2,
    scale: 0.5, 
    opacity: 0, 
    left: -400,
    delay: 1.8, 
    // stagger: 0.2,
  });

gsap.from(".eight", {
    duration: 2,
    scale: 0.5, 
    opacity: 0, 
    left: -400,
    delay: 2, 
    // stagger: 0.2,
  });

  gsap.from(".first-r", {
    duration: 2,
    scale: 0.5, 
    opacity: 0, 
    left: -400,
    delay: 2.2, 
    // stagger: 0.2,
  });

  gsap.from(".second-r", {
    duration: 2,
    scale: 0.5, 
    opacity: 0, 
    left: -400,
    delay: 2.4, 
    // stagger: 0.2,
  });

  gsap.from(".third-r", {
    duration: 2,
    scale: 0.5, 
    opacity: 0, 
    left: -400,
    delay: 2.6, 
    // stagger: 0.2,
  });

  gsap.from(".forth-r", {
    duration: 2,
    scale: 0.5, 
    opacity: 0, 
    left: -400,
    delay: 2.8, 
    // stagger: 0.2,
  });

  gsap.from(".fifth-r", {
    duration: 2,
    scale: 0.5, 
    opacity: 0, 
    left: -400,
    delay: 3.0, 
    // stagger: 0.2,
  });

  gsap.from(".sixth-r", {
    duration: 2,
    scale: 0.5, 
    opacity: 0, 
    left: -400,
    delay: 3.2, 
    // stagger: 0.2,
  });

  gsap.from(".seventh-r", {
    duration: 2,
    scale: 0.5, 
    opacity: 0, 
    left: -400,
    delay: 3.4, 
    // stagger: 0.2,
  });

gsap.from(".eight-r", {
    duration: 2,
    scale: 0.5, 
    opacity: 0, 
    left: -400,
    delay: 3.6, 
    // stagger: 0.2,
  });

  gsap.from(".ninth-r", {
    duration: 2,
    scale: 0.5, 
    opacity: 0, 
    left: -400,
    delay: 3.8, 
    // stagger: 0.2,
  });


  function myFunctionCircle(y) {
    if (y.matches) { 
    scrollorama.animate('#aboutScroll',{
      duration:500, property:'width', start:14 +'em', end: 95*2 + 'em', baseline: "bottom"}
      )
    scrollorama.animate('#aboutScroll',{
      duration:200, property:'height', start:7 +'em', end: 30 + 'em', baseline: "bottom"}
      )
    scrollorama.animate('#aboutScroll',{
      delay:100,
      duration:500, property:'margin-top', start:-60 +'px', end: -255 + 'px', baseline: "bottom"}
      )
    
    
      scrollorama_text.animate('.about__block', {
        delay:300,
        duration: 400, property: 'left', start: -300 + 'px' , end: 0, baseline: "bottom"
      })

      scrollorama_text.animate('.about__block', {
        delay:300,
        duration: 400, property: 'opacity', start: 0 , end: 1, baseline: "bottom"
      })
    
      scrollorama_text.animate('.about__block_r', {
        // delay: -530,
        duration: 300, property: 'opacity', start: 0 , end: 1, 
         baseline: "top"
      })
    
      scrollorama_text.animate('.about__block_r', {
        // delay: -530,
        delay:0,
        duration: 400, property: 'right', start: -200 + 'px' , end: 0
        //  baseline: "bottom"
      })
    } else {
      scrollorama.animate('#aboutScroll',{
        // delay: -100,
        duration:500, property:'width', start:15 +'em', end: 35*2 + 'em', 
        baseline: "bottom"
      }
        )
      scrollorama.animate('#aboutScroll',{
        // delay: -100,
        duration:200, property:'height', start:5 +'em', end: 13 + 'em',
         baseline: "bottom"
        }
        )
      scrollorama.animate('#aboutScroll',{
        duration:500, property:'margin-top', start:45 +'px', end: -180 + 'px', baseline: "bottom"}
        )


        scrollorama_text.animate('.about__block', {
          duration: 400, property: 'opacity', start: 0 , end: 1, baseline: "bottom"
        })
      
        scrollorama_text.animate('.about__block', {
          delay: -250,
          duration: 800, property: 'left', start: -800 + 'px' , end: 0, baseline: "bottom"
        })
      
        scrollorama_text.animate('.about__block_r', {
          delay: 50,
          duration: 800, property: 'opacity', start: 0 , end: 1, 
           baseline: "bottom"
        })
      
        scrollorama_text.animate('.about__block_r', {
          delay: 50,
          duration: 800, 
          property: 'right', start: -450 + 'px' , end: 0,
           baseline: "bottom"
        })


    }
  }

  var y = window.matchMedia("(min-width: 992px)")
  myFunctionCircle(y)
  y.addListener(myFunctionCircle)

  $("#individuals").on("click", function (event) {
            //отменяем стандартную обработку нажатия по ссылке
            event.preventDefault();
     
            // //забираем идентификатор бока с атрибута href
            // var id  = $(this).attr('href'),
            var id = $("#reason-id"),
            // //узнаем высоту от начала страницы до блока на который ссылается якорь
                top = $(id).offset().top;
             
            // //анимируем переход на расстояние - top за 1500 мс
            $('body,html').animate({scrollTop: top}, 1500);
        });
    

});

// <span class="seventh">digital</span> <span class="eight hero__label_black">experiences</span></p>