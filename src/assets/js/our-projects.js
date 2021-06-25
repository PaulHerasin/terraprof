export const OurProjects = (timeDelay) => {
  if (document.querySelector(".our-projects")) {
    if (document.querySelector('body').clientWidth > window.LARGE_TABLET) {
      gsap.to(".our-projects .scroll-down", {
        scrollTrigger: {
          trigger: ".our-projects__scroll",
          top: "top bottom",
          end: "bottom top",
          // pin: ".our-projects__scroll",
          pin: ".our-projects__scroll .scroll-down",
          scrub: 0
        },
      })

      let ourProjectsParallax = gsap.timeline({
        scrollTrigger: {
          trigger: ".our-projects__wrap",
          top: "top bottom",
          end: "top top",
          scrub: 0
        },
      })

      ourProjectsParallax.fromTo(".our-projects .our-projects__title", {
        y: 70,
        duration: 0
      }, {
        y: 0,
      }, 0)

      ourProjectsParallax.fromTo(".our-projects .our-projects__wrap", {
        y: "5%",
        duration: 0
      }, {
        y: "0%",
      }, 0)

      gsap.fromTo(".our-projects .our-projects__title .oh-row .oh", {
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
          trigger: ".our-projects .our-projects__title",
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