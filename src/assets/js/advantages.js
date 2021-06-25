export const Advantages = (timeDelay) => {
  if (document.querySelector(".advantages")) {
    if (document.querySelector('body').clientWidth > window.LARGE_TABLET) {

      let advantagesParallax = gsap.timeline({
        scrollTrigger: {
          trigger: ".advantages .advantages__wrap",
          top: "top bottom",
          end: "bottom bottom",
          scrub: 0
        },
      })

      advantagesParallax.fromTo('.advantages .advantages__item:nth-of-type(1)', {
        y: "-5%",
      }, {
        y: "0%",
      }, 0)

      advantagesParallax.fromTo('.advantages .advantages__item:nth-of-type(2)', {
        y: "-5%",
      }, {
        y: "25%",
      }, 0)


      advantagesParallax.fromTo('.advantages .advantages__item:nth-of-type(3)', {
        y: "-5%",
      }, {
        y: "8%",
      }, 0)

      // ourProjectsParallax.fromTo(".our-projects .our-projects__title", {
      //   y: 70,
      //   duration: 0
      // }, {
      //   y: 0,
      // }, 0)

      // ourProjectsParallax.fromTo(".our-projects .our-projects__wrap", {
      //   y: "5%",
      //   duration: 0
      // }, {
      //   y: "0%",
      // }, 0)

      gsap.fromTo(".advantages .advantages__title .oh-row .oh", {
        y: "50%",
        duration: 0,
        opacity: 0,
      }, {
        y: "0%",
        opacity: 1,
        delay: 0.5,
        stagger: {
          each: 0.5
        },
        scrollTrigger: {
          trigger: ".advantages .advantages__title",
          start: "top bottom",
          end: "bottom bottom",
          toggleActions: "play none none reset"
        },
      })

      // gsap.to(".our-projects .scroll-down", {
      //   scrollTrigger: {
      //     trigger: ".our-projects__scroll",
      //     top: "top bottom",
      //     end: "bottom center",
      //     pin: ".our-projects__scroll .scroll-down",
      //     pinSpacing: false,
      //     scrub: 0.5
      //   },
      // })
    }
  }
}