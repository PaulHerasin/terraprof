export const OtherProjects = () => {
  if (document.querySelector(".other-projects")) {
    if (document.querySelector('body').clientWidth > window.LARGE_TABLET) {

      gsap.fromTo(".other-projects .other-projects__title .oh", {
        y: "100%",
        duration: 0,
        opacity: 0,
      }, {
        y: "0%",
        opacity: 1,
        delay: 0.5,
        scrollTrigger: {
          trigger: ".other-projects .other-projects__title",
          start: "top bottom",
          end: "bottom bottom",
        },
      })

      gsap.fromTo(".other-projects .other-projects__title", {
        y: 50,
        duration: 0,
      }, {
        y: -150,
        scrollTrigger: {
          trigger: ".other-projects",
          start: "top bottom",
          end: "20% top",
          scrub: 0.5
        },
      })

      // gsap.fromTo(".other-projects .other-projects__title", {
      //   y: 50,
      //   duration: 0,
      // }, {
      //   y: -100,
      //   scrollTrigger: {
      //     trigger: ".other-projects",
      //     start: "top bottom",
      //     end: "top top",
      //     scrub: 0.5
      //   },
      // })

      gsap.fromTo(".other-projects .other-projects__wrap", {
        y: 100,
        duration: 0,
      }, {
        y: -150,
        scrollTrigger: {
          trigger: ".other-projects .other-projects__wrap",
          start: "top bottom",
          end: "top top",
          scrub: 0.5
        },
      })





      // advantagesParallax.fromTo('.advantages .advantages__item-title', {
      //   y: 35,
      //   duration: 0,
      // }, {
      //   y: 0,
      // }, 0)

      // advantagesParallax.fromTo('.advantages .advantages__item-img', {
      //   y: 100,
      //   duration: 0,
      // }, {
      //   y: 10,
      // }, 0)

      // advantagesParallax.fromTo('.advantages .advantages__item:nth-of-type(2)', {
      //   y: "-5%",
      //   duration: 0,
      // }, {
      //   y: "25%",
      // }, 0)


      // advantagesParallax.fromTo('.advantages .advantages__item:nth-of-type(3)', {
      //   y: "-5%",
      //   duration: 0,
      // }, {
      //   y: "8%",
      // }, 0)

      // gsap.fromTo(".advantages .wrap", {
      //   scale: 0.95,
      //   y: 50,
      //   duration: 0,
      // }, {
      //   y: 0,
      //   scale: 1,
      //   scrollTrigger: {
      //     trigger: ".advantages",
      //     start: "top bottom",
      //     end: "top top",
      //     scrub: 0.5
      //   },
      // })

      // gsap.fromTo(".advantages .advantages__title .oh-row .oh", {
      //   y: "100%",
      //   duration: 0,
      //   opacity: 0,
      // }, {
      //   y: "0%",
      //   opacity: 1,
      //   delay: 0.5,
      //   scrollTrigger: {
      //     trigger: ".advantages .advantages__title",
      //     start: "top bottom",
      //     end: "bottom bottom",
      //   },
      // })
    }
  }
}