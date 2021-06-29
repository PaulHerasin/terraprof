export const UnikalnyProjects = (timeDelay) => {
  if (document.querySelector(".unikalny-projects")) {
    if (document.querySelector('body').clientWidth > window.LARGE_TABLET) {
      gsap.fromTo([".unikalny-projects .title-line", ".unikalny-projects__slider"], {
        y: 150,
        duration: 0,
      }, {
        y: 0,
        scrollTrigger: {
          trigger: ".unikalny-projects",
          start: "top bottom",
          end: "center center",
          scrub: 0.5
        },
      })

      gsap.fromTo([".unikalny-projects .title-line .oh-row .oh", ".unikalny-projects .unikalny-projects__text p"], {
        y: "50%",
        duration: 0,
        opacity: 0,
      }, {
        y: "0%",
        opacity: 1,
        stagger: {
          each: 0.5
        },
        delay: 0.5,
        duration: 0.75,
        scrollTrigger: {
          trigger: ".unikalny-projects__title",
          start: "top bottom",
          // toggleActions: "play none none reset"
        },
      })
    }
  }
}

