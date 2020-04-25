$(document).ready(function(){
    var designTriange = $('.triangle-down_design'),
    marketingTriange = $('.triangle-down_marketing'),
    websitesTriange = $('.triangle-down_websites'),
    designLabel = $('.triangle-label_design'),
    marketingLabel = $('.triangle-label_marketing'),
    websitesLabel = $('.triangle-label_websites'),
    heroLabel = $('.hero__label_black');

    designTriange.mouseover(function() {
        designTriange.css('border-bottom', '147px solid #8523CD');
        designTriange.css('transition', '0.5s');
        marketingLabel.css('color', '#B3B2AD');
        websitesLabel.css('color', '#B3B2AD');
        marketingLabel.css('transition', '0.5s');
        websitesLabel.css('transition', '0.5s');
        heroLabel.css('color', '#B3B2AD');
        heroLabel.css('transition', '0.5s');
    });

    designTriange.mouseout(function() {
        designTriange.css('border-bottom', '147px solid white');
        designTriange.css('transition', '0.5s');
        marketingLabel.css('color', 'black');
        websitesLabel.css('color', 'black');
        marketingLabel.css('transition', '0.7s');
        websitesLabel.css('transition', '0.7s');
        heroLabel.css('color', 'black');
        heroLabel.css('transition', '0.7s');
    });

    marketingTriange.mouseover(function() {
        marketingTriange.css('border-bottom', '147px solid #8523CD');
        marketingTriange.css('transition', '0.5s');
        designLabel.css('color', '#B3B2AD');
        websitesLabel.css('color', '#B3B2AD');
        designLabel.css('transition', '0.5s');
        websitesLabel.css('transition', '0.5s');
        heroLabel.css('color', '#B3B2AD');
        heroLabel.css('transition', '0.5s');
    });

    marketingTriange.mouseout(function() {
        marketingTriange.css('border-bottom', '147px solid white');
        marketingTriange.css('transition', '0.5s');
        designLabel.css('color', 'black');
        websitesLabel.css('color', 'black');
        designLabel.css('transition', '0.7s');
        websitesLabel.css('transition', '0.7s');
        heroLabel.css('color', 'black');
        heroLabel.css('transition', '0.7s');
    });

    websitesTriange.mouseover(function() {
        websitesTriange.css('border-bottom', '147px solid #8523CD');
        websitesTriange.css('transition', '0.5s');
        designLabel.css('color', '#B3B2AD');
        marketingLabel.css('color', '#B3B2AD');
        designLabel.css('transition', '0.5s');
        marketingLabel.css('transition', '0.5s');
        heroLabel.css('color', '#B3B2AD');
        heroLabel.css('transition', '0.5s');
    });

    websitesTriange.mouseout(function() {
        websitesTriange.css('border-bottom', '147px solid white');
        websitesTriange.css('transition', '0.5s');
        designLabel.css('color', 'black');
        marketingLabel.css('color', 'black');
        designLabel.css('transition', '0.7s');
        marketingLabel.css('transition', '0.7s');
        heroLabel.css('color', 'black');
        heroLabel.css('transition', '0.7s');
    });
})