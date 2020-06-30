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
        spacing: -0.9,
        nav: false,
        buttons: true,
        start: 0,
        scrollwheel: false,
        click: false
    });


    $('select').styler();

    
    $('.discoverer__wrapper .tab').on('click', function(event) {
        var id = $(this).attr('data-id');
            $('.discoverer__wrapper').find('.tab-item').removeClass('active-tab').hide();
            $('.discoverer__wrapper .tabs').find('.tab').removeClass('active');
            $(this).addClass('active');
            $('#'+id).addClass('active-tab').fadeIn();
            return false;
    });

    $('.header__menu-btn').on('click', function(){
        $('.menu__nav > ul').slideToggle();
    });


});


