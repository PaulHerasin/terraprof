
export const About = (timeDelay) => {
  if (document.querySelector(".about")) {
    if (document.querySelector('body').clientWidth > window.LARGE_TABLET) {

      gsap.to([".about .about__title .oh", ".about .about__left .oh", ".about .about__left-text"], {
        opacity: 0,
        y: "100%",
        scale: 0.9,
        duration: 0
      })

      gsap.to(".about .about__title .oh", {
        scale: 1,
        opacity: 1,
        y: "0%",
        duration: 0.75,
        delay: timeDelay,
      })

      gsap.to([".about .about__left .oh", ".about .about__left-text"], {
        scale: 1,
        opacity: 1,
        y: "0%",
        duration: 0.75,
        stagger: {
          each: 0.5
        },
        delay: timeDelay + 0.75,
      })

      gsap.fromTo(".about .about__right", {
        opacity: 0,
        scale: 0.9,
        duration: 0
      }, {
        scale: 1,
        opacity: 1,
        duration: 0.75,
        delay: timeDelay + 0.75,
      })


      let aboutParallax = gsap.timeline({
        scrollTrigger: {
          trigger: ".about",
          start: "top top",
          end: "bottom top",
          scrub: 0.5
        }
      })

      aboutParallax.fromTo(".about .about__right-text", {
        y: 25,
        duration: 0,
      }, {
        y: -25,
      }, 0)

      aboutParallax.fromTo(".about .about__title", {
        y: 25,
        duration: 0,
      }, {
        y: -50,
      }, 0)

      aboutParallax.fromTo(".about .about__right-img", {
        y: 0,
        duration: 0,
      }, {
        y: -25,
      }, 0)

      aboutParallax.fromTo(".about .about__left-text", {
        y: 25,
        duration: 0,
      }, {
        y: -120,
      }, 0)

      aboutParallax.fromTo(".about .about__left .oh-row", {
        y: 0,
        duration: 0,
      }, {
        y: -100,
      }, 0)
    }
  }
}