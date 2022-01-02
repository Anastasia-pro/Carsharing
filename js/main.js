$(function(){

    $('.top__slider').slick({
        autoplay: true,
        arrows: false,
        dots: true,
        fade: true,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    dots: false,
                }
            },
        ]
    });

    $('.reviews__slider').slick({
        arrows: false,
        dots: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1141,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 966,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 656,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    });

    $('.menu__btn').on('click', function() {
        $('.menu__list').toggleClass('menu__list--active');
    });

});
// сайт по джейквери jquery page2page.ru