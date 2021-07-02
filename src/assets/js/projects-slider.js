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
            start: "top bottom",
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
    }, {
      scrollTrigger: {
        trigger: ".projects-slider",
        start: "top bottom",
        end: "top 10%",
        scrub: 0.5
      },
      y: "0%",
      ease: "none"
    })
  }

  const sliderDefaul = () => {
    gsap.to([".swiper-slide-next .projects-slider__img-small", ".swiper-slide-prev .projects-slider__img-small"], {
      opacity: 0,
      duration: 1,
      y: "0%"
    })

    gsap.to(".swiper-slide-active .projects-slider__img-small", {
      y: 200,
      opacity: 0,
      duration: 0,
    })

    gsap.to(".swiper-slide-active .projects-slider__object .oh", {
      y: "100%",
      opacity: 0,
      duration: 0,
    })
  }

  const sliderChange = () => {
    gsap.to(".swiper-slide-active .projects-slider__img-small", {
      y: 0,
      duration: 2.5,
      opacity: 1,
    })

    gsap.to(".swiper-slide-active .projects-slider__object .oh", {
      y: "0%",
      opacity: 1,
      duration: 0.75,
      stagger: {
        each: 0.35
      },
      // delay: 0.5,
      scrollTrigger: {
        trigger: ".swiper-slide-active .projects-slider__object",
        start: "top bottom",
      },
    })
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
      slideChangeTransitionStart: function () {
        sliderDefaul()
        setTimeout(function () {
          sliderChange()
        }, 1000)
      },
    }
  });
}