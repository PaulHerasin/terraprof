if (document.querySelector('.history')) {
    var swiper = new Swiper('.history-slider .swiper-container', {
        spaceBetween: 30,
        speed: 1000,
        autoHeight: true,
        loop: true,
        navigation: {
            nextEl: '.history .slider-btn--next',
            prevEl: '.history .slider-btn--prev',
        },
        // pagination: {
        //     el: ' .swiper-pagination',
        //     clickable: true,
        // },
        breakpoints: {
            320: {
                slidesPerView: 1.8,
            },
            1025: {
                slidesPerView: 3.6,
            },
        },
        on: {
            init: function () {
                setTimeout(function () {
                    this.update();
                }.bind(this), 500);
            },
        }
    });
}