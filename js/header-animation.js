$(document).ready(function() {


    var scrollHeader = $.scrollorama({
        blocks: '.about__header'
    });

    var scrollHeaderReason = $.scrollorama({
        blocks: '.reason__header'
    });

    
    scrollHeaderReason.animate('.header', {
        delay: 2000,
        duration: 300, property: 'margin-top', start: -15 + 'px', end: -65 + 'px', baseline: 'top'
     })

    // margin-top: -70px;

    function myFunctionCircle(z) {
        if (z.matches) { 
        

            scrollHeader.animate('.about-header__container', {
                delay: 200,
                duration: 1050, property:'opacity', start:0 , end:1, basline: 'bottom'
            })
        
        
        
            scrollHeader.animate('.header__icon', {
                delay: 2300,
                duration: 1900, property:'left', start:0 , end:-3000 + 'px', basline: 'top'
            })
        
            scrollHeader.animate('.header__menu_white', {
                delay: 2300,
                duration: 1900, property:'right', start:0 , end:-3000 + 'px', basline: 'top'
            })

        } else {
          
    
        }
      }
    
      var z = window.matchMedia("(min-width: 992px)")
      myFunctionCircle(z)
      z.addListener(myFunctionCircle)

})