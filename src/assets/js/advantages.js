export const Advantages = () => {
  if (document.querySelector(".advantages")) {
    if (document.querySelector('body').clientWidth > window.LARGE_TABLET) {

      let advantagesParallax = gsap.timeline({
        scrollTrigger: {
          trigger: ".advantages .advantages__wrap",
          start: "top bottom",
          end: "bottom bottom",
          scrub: 1
        },
      })

      advantagesParallax.fromTo('.advantages .advantages__item:nth-of-type(1)', {
        y: "-5%",
        duration: 0,
      }, {
        y: "0%",
      }, 0)

      advantagesParallax.fromTo('.advantages .advantages__item-title', {
        y: 35,
        duration: 0,
      }, {
        y: 0,
      }, 0)

      // advantagesParallax.fromTo('.advantages .advantages__item-img', {
      //   y: 100,
      //   duration: 0,
      // }, {
      //   y: 10,
      // }, 0)

      advantagesParallax.fromTo('.advantages .advantages__item:nth-of-type(2)', {
        y: "-5%",
        duration: 0,
      }, {
        y: "25%",
      }, 0)


      advantagesParallax.fromTo('.advantages .advantages__item:nth-of-type(3)', {
        y: "-5%",
        duration: 0,
      }, {
        y: "8%",
      }, 0)

      gsap.fromTo(".advantages .wrap", {
        scale: 0.95,
        y: 50,
        duration: 0,
      }, {
        y: 0,
        scale: 1,
        scrollTrigger: {
          trigger: ".advantages",
          start: "top bottom",
          end: "top top",
          scrub: 0.5
        },
      })

      gsap.fromTo(".advantages .advantages__title .oh-row .oh", {
        y: "100%",
        duration: 0,
        opacity: 0,
      }, {
        y: "0%",
        opacity: 1,
        delay: 0.5,
        scrollTrigger: {
          trigger: ".advantages .advantages__title",
          start: "top bottom",
          end: "bottom bottom",
        },
      })
    }
  }
}