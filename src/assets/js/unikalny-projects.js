export const UnikalnyProjects = (timeDelay) => {
  if (document.querySelector(".unikalny-projects")) {
    if (document.querySelector('body').clientWidth > window.LARGE_TABLET) {

      // gsap.fromTo(".unikalny-projects__title .oh-row .oh", {
      //   // opacity: 0,
      //   y: "50%",
      //   duration: 0,
      // }, {
      //   // opacity: 1,
      //   y: "0%",
      //   duration: 0.5,
      //   stagger: {
      //     each: 0.5
      //   },
      //   scrollTrigger: {
      //     trigger: ".unikalny-projects",
      //     top: "20% bottom",
      //     end: "bottom top",
      //   },
      // })

      gsap.fromTo(".unikalny-projects .title-line .oh-row .oh", {
        y: "50%",
        duration: 0,
        opacity: 0,
      }, {
        y: "0%",
        opacity: 1,
        stagger: {
          each: 0.5
        },
        scrollTrigger: {
          trigger: ".unikalny-projects__title",
          top: "top bottom",
          end: "top center",
          scrub: 1
        },
      })

      gsap.fromTo(".unikalny-projects .unikalny-projects__text", {
        y: "50%",
        duration: 0,
        opacity: 0,
      }, {
        y: "-20%",
        opacity: 1,
        scrollTrigger: {
          trigger: ".unikalny-projects .unikalny-projects__text",
          top: "top bottom",
          end: "top center",
          scrub: 1
        },
      })

      gsap.fromTo('.unikalny-projects__slider', {
        y: "10%"
      }, {
        y: "0%",
        scrollTrigger: {
          trigger: ".unikalny-projects__slider",
          start: 'top bottom',
          end: "top center",
          scrub: 0.5
        },
      })
    }
  }
}

