export const TypesRobot = (timeDelay) => {
  if (document.querySelector(".types-robot")) {
    if (document.querySelector('body').clientWidth > window.LARGE_TABLET) {
      gsap.fromTo(".types-robot .types-robot__title .oh", {
        y: "100%",
        duration: 0,
        opacity: 0,
      }, {
        y: "0%",
        opacity: 1,
        delay: 0.5,
        scrollTrigger: {
          trigger: ".types-robot .types-robot__title",
          start: "top bottom",
        },
      })
      gsap.fromTo(".types-robot .types-robot__title", {
        y: 10,
        duration: 0,
      }, {
        y: -20,
        scrollTrigger: {
          trigger: ".types-robot .types-robot__title",
          start: "top bottom",
          end: "bottom top",
          scrub: 0.5
        },
      })
    }
  }
}