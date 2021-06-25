if (document.querySelector('.partners-slider')) {
    var swiper = new Swiper('.partners-slider .swiper-container', {

        speed: 1000,
        autoHeight: true,
        loop: true,
        navigation: {
            nextEl: '.partners-slider .slider-btn--next',
            prevEl: '.partners-slider .slider-btn--prev',
        },
        breakpoints: {
            320: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
            1025: {
                slidesPerView: 4,
                spaceBetween: 80,
            },
            1750: {
                spaceBetween: 140,
            },
        },
        on: {
            init: function () {
                setTimeout(function () {
                    this.update();
                }.bind(this), 500);
            },
        }
        ///
    });
}