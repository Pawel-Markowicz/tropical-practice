$(document).ready(function () {
    $('.reviews__boxes').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3500,
        arrows: false,
        mobileFirst: true,
        responsive: [{
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            },

            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }, 

           
        }],

    });
})