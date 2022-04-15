new Swiper('.image-slider', {
    navigation: {
        nextE1: '.swiper-button-next',
        prevE1: 'siper-button-prew'

    },
    slideToClickedSlide: true,

    mousewheel: {
        sensitivity: 2,
    },

    slidesPerView: 'auto',
    spaceBetween: 30,

    scrollbar: {
        el: '.swiper-scrollbar',
        hide: false
        
    },
});

new Swiper('.swiperPartner', {
  
    slideToClickedSlide: true,

    mousewheel: {
        sensitivity: 1,
    },

    slidesPerView: 'auto',
    spaceBetween: 30,

    scrollbar: {
        el: '.swiper-scrollbar1',
        hide: false
        
    },
});


$(".slider-no").on('click', function (event) {
    $(event.currentTarget).toggleClass("slider-no1"),
        $(".not").toggleClass("not1");
});


$("#1").on('click', function (event) {
    $(event.currentTarget).toggleClass("slider-AN1"),
        $("#1a").toggleClass("ant1");

});

$("#2").on('click', function (event) {
    $(event.currentTarget).toggleClass("slider-AN1"),
        $("#2a").toggleClass("ant1");

});

$("#3").on('click', function (event) {
    $(event.currentTarget).toggleClass("slider-AN1"),
        $("#3a").toggleClass("ant1");

});
