export const ProcessRobots = (timeDelay) => {
  if (document.querySelector(".process-robots")) {
    if (document.querySelector('body').clientWidth > window.LARGE_TABLET) {
      gsap.fromTo(".process-robots .process-robots__title .oh", {
        y: "100%",
        duration: 0,
        opacity: 0,
      }, {
        y: "0%",
        opacity: 1,
        delay: 0.5,
        scrollTrigger: {
          trigger: ".process-robots .process-robots__title",
          start: "top bottom",
        },
      })
      gsap.fromTo(".process-robots .process-robots__title .oh", {
        y: 10,
        duration: 0,
      }, {
        y: -20,
        scrollTrigger: {
          trigger: ".process-robots .process-robots__title",
          start: "top bottom",
          end: "bottom top",
          scrub: 0.5
        },
      })
    }
  }
}