$(function(){
    $('.slider__home__items').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: $('.prev'),
        nextArrow: $('.next'),
        autoplay: true,
        autoplaySpeed: 4000,
        infinite: true
    });

    $(".my-flipster").flipster({
        /* style: 'carousel', */
        spacing: -0.9,
        nav: false,
        buttons: true,
        start: 0,
        scrollwheel: false,
        click: false
    });


    $('select').styler();

    
});


