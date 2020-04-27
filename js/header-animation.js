$(document).ready(function() {
    // var scrollorama = $.scrollorama({
    //     blocks:'.about__push'
    // });
    // scrollorama.animate('#aboutScroll',{
    //   duration:500, property:'width', start:14 +'em', end: 95*2 + 'em', baseline: "bottom"}
    //   )
    // scrollorama.animate('#aboutScroll',{
    //   duration:200, property:'height', start:7 +'em', end: 30 + 'em', baseline: "bottom"}
    //   )
    // scrollorama.animate('#aboutScroll',{
    //   duration:500, property:'margin-top', start:-60 +'px', end: -465 + 'px', baseline: "bottom"}
    //   )

    var scrollHeader = $.scrollorama({
        blocks: '.about__header'
    });

    scrollHeader.animate('.about-header__container', {
        duration: 1900, property:'opacity', start:0 , end:1, basline: 'bottom'
    })

    scrollHeader.animate('.about-header__container', {
        delay: 2000,
        duration: 1900, property:'left', start:0 , end:-3000 + 'px', basline: 'top'
    })

    // scrollHeader.animate('.about-header__container', {
    //     delay: 2000,
    //     duration: 1900, property:'opacity', start:1 , end:0, basline: 'top'
    // })



    // scrollHeader.animate('.about-header__container', {
    //     delay: 600,
    //     duration: 1900, property:'opacity', start:1 , end:0, basline: 'top'
    // })

})