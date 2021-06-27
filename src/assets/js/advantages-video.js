export const AdvantagesVideo = (timeDelay) => {
  if (document.querySelector(".advantages-video")) {
    if (document.querySelector('body').clientWidth > window.LARGE_TABLET) {

      gsap.to(".advantages-video__wrap", {
        scrollTrigger: {
          trigger: ".advantages-video__wrap",
          start: "top top",
          end: "bottom top",
          scrub: 0,
          pin: ".advantages-video .advantages-video__wrap",
          pinSpacing: false
        },
      })

      gsap.fromTo(".advantages-video .advantages-video__bottom", {
        y: "0rem",
        duration: 0,
      }, {
        y: "-16rem",
        duration: 1,
        scrollTrigger: {
          trigger: ".advantages-video__wrap",
          start: "top top",
        },
      })



      // advantagesParallax.fromTo(".advantages-video .advantages-video__bottom", {
      //   y: "-16rem"
      // }, {
      //   y: "20rem"
      // })

      // advantagesParallax.fromTo('.advantages .advantages__item:nth-of-type(1)', {
      //   y: "-5%",
      // }, {
      //   y: "0%",
      // }, 0)

      // advantagesParallax.fromTo('.advantages .advantages__item:nth-of-type(2)', {
      //   y: "-5%",
      // }, {
      //   y: "25%",
      // }, 0)


      // advantagesParallax.fromTo('.advantages .advantages__item:nth-of-type(3)', {
      //   y: "-5%",
      // }, {
      //   y: "8%",
      // }, 0)

      // gsap.fromTo(".advantages .advantages__title .oh-row .oh", {
      //   y: "50%",
      //   duration: 0,
      //   opacity: 0,
      // }, {
      //   y: "0%",
      //   opacity: 1,
      //   delay: 0.5,
      //   stagger: {
      //     each: 0.5
      //   },
      //   scrollTrigger: {
      //     trigger: ".advantages .advantages__title",
      //     start: "top bottom",
      //     end: "bottom bottom",
      //     toggleActions: "play none none reset"
      //   },
      // })

    }
  }
}