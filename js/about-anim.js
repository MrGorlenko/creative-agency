$(document).ready(function() {
  var scrollorama = $.scrollorama({
      blocks:'.about__push'
  });
  scrollorama.animate('#aboutScroll',{
    duration:500, property:'width', start:14 +'em', end: 95*2 + 'em', baseline: "bottom"}
    )
  scrollorama.animate('#aboutScroll',{
    duration:200, property:'height', start:7 +'em', end: 30 + 'em', baseline: "bottom"}
    )
  scrollorama.animate('#aboutScroll',{
    duration:500, property:'margin-top', start:-60 +'px', end: -455 + 'px', baseline: "bottom"}
    )

  var scrollorama_line = $.scrollorama({
      blocks:'.about__line'
  });

  scrollorama_line.animate('.about__down', {
    duration: 500, property: 'min-height', start: 0 + 'px', end: 1280 + 'px', baseline: "top"
  })

  var scrollorama_text = $.scrollorama({
    blocks:'.about__container_labels'
  });

  scrollorama_text.animate('.about__block', {
    duration: 400, property: 'opacity', start: 0 , end: 1, baseline: "top"
  })

  scrollorama_text.animate('.about__block', {
    duration: 800, property: 'left', start: -1000 + 'px' , end: 0, baseline: "bottom"
  })

  scrollorama_text.animate('.about__block_r', {
    // delay: -530,
    duration: 600, property: 'opacity', start: 0 , end: 1, 
     baseline: "top"
  })

  scrollorama_text.animate('.about__block_r', {
    delay: -530,
    duration: 1000, property: 'right', start: -1000 + 'px' , end: 0
    //  baseline: "bottom"
  })


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

});

// <span class="seventh">digital</span> <span class="eight hero__label_black">experiences</span></p>