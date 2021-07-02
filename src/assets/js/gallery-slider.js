if (document.querySelector('.gallery-slider')) {

  document.querySelectorAll(".gallery-img-parallax").forEach((section) => {
    gsap.fromTo(section.querySelector(".gallery-img-parallax > div"), {
      y: "-10%",
      scale: 1.2,
      duration: 0,
    }, {
      scrollTrigger: {
        trigger: section,
        start: "top bottom",
        end: "bottom top",
        scrub: 0.5
      },
      y: "10%",
      ease: "none"
    });
  });

  let interleaveOffset = 0.5;
  let portfolioSliderSelector1 = '.gallery-slider .swiper-container';
  let portfolioSliderOptions1 = {
    loop: true,
    slidesPerView: 1,
    loopedSlides: 4,
    centeredSlides: true,
    speed: 1000,
    // autoplay: {
    //     delay: 3000
    // },
    autoHeight: true,
    grabCursor: true,
    watchSlidesProgress: true,
    navigation: {
      nextEl: '.gallery-slider .slider-btn--next',
      prevEl: '.gallery-slider .slider-btn--prev',
    },
    pagination: {
      el: '.gallery-slider .swiper-pagination',
      type: 'fraction',

      formatFractionCurrent: function (number) {
        if (number < 10) {
          number = '0' + number;
        }
        return number;
      },
      formatFractionTotal: function (number) {
        if (number < 10) {
          number = '0' + number;
        }
        return number;
      }
    },
    breakpoints: {
      320: {
        spaceBetween: 20,
      },

      1024: {
        spaceBetween: 45,
      }
    },
    on: {
      init: function () {
        this.autoplay.stop();
        setTimeout(function () {
          this.update();
        }.bind(this), 500);
      },
      progress: function () {
        let swiper = this;
        for (let i = 0; i < swiper.slides.length; i++) {
          let slideProgress = swiper.slides[i].progress,
            innerOffset = swiper.width * interleaveOffset,
            innerTranslate = slideProgress * innerOffset;

          swiper.slides[i].querySelector(".slide-bgimg").style.transform =
            "translateX(" + innerTranslate + "px)";
        }
      },
      touchStart: function () {
        let swiper = this;
        for (let i = 0; i < swiper.slides.length; i++) {
          swiper.slides[i].style.transition = "";
        }
      },
      setTransition: function (speed) {
        let swiper = this;
        for (let i = 0; i < swiper.slides.length; i++) {
          swiper.slides[i].style.transition = speed + "ms";
          swiper.slides[i].querySelector(".slide-bgimg").style.transition =
            speed + "ms";
        }
      }
    }
  };

  document.portfolioSlider1 = new Swiper(portfolioSliderSelector1, portfolioSliderOptions1);

};