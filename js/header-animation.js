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
        blocks: '.header'
    });

    scrollHeader.animate('.header__container', {
        duration: 300, property:'opacity', start:1 , end:0, basline: 'top'
    })

})