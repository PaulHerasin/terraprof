if (document.querySelector('.projects-slider')) {
  const projectsSliderActive = () => {
    gsap.utils.toArray(
      [".projects-slider .swiper-slide-active .projects-slider__img img",
        ".projects-slider .swiper-slide-active .projects-slider__img-small img"
      ]).forEach((section) => {
        gsap.fromTo(section, {
          y: "-10%",
          scale: 1.2,
          duration: 0
        }, {
          scrollTrigger: {
            trigger: section.parentElement,
            top: "top bottom",
            end: "bottom top",
            scrub: 0.5
          },
          y: "0%",
          ease: "none"
        });
      });

    gsap.fromTo(".projects-slider .swiper-slide-active .projects-slider__img-small", {
      y: "50%",
      duration: 0,
      opacity: 0
    }, {
      scrollTrigger: {
        trigger: ".projects-slider",
        top: "top bottom",
        end: "top 10%",
        scrub: 0.5
      },
      opacity: 1,
      y: "0%",
      ease: "none"
    })
    // gsap.to(".projects-slider .swiper-slide .projects-slider__img img", {
    //   scrollTrigger: {
    //     trigger: ".projects-slider .swiper-slide .projects-slider__img",
    //     top: "top bottom",
    //     end: "bottom top",
    //     scrub: 0.5
    //   },
    //   y: "10%",
    //   ease: "none"
    // })
  }

  var swiper = new Swiper('.projects-slider .swiper-container', {
    slidesPerView: 1,
    spaceBetween: 30,
    speed: 1000,
    //autoplay: {
    //delay: 2000,
    //},
    autoHeight: true,
    loop: true,
    //centeredSlides: true,
    //initialSlide: 1,
    //slideToClickedSlide: true,
    navigation: {
      nextEl: '.projects-slider .slider-btn--next',
      prevEl: '.projects-slider .slider-btn--prev',
    },
    // breakpoints: {
    //     320: {
    //         slidesPerView: 1,
    //     },
    //     1025: {
    //         slidesPerView: 4,
    //     },
    // },
    on: {
      init: function () {
        setTimeout(function () {
          projectsSliderActive()
          this.update();
        }.bind(this), 500);
      },
    }
    ///
  });
}