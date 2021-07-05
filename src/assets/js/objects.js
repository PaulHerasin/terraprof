
export const Objects = (timeDelay) => {
  if (document.querySelector(".objects")) {
    gsap.to(".objects .scroll-down", {
      scrollTrigger: {
        trigger: ".objects .objects__scroll",
        start: "top bottom",
        end: "bottom top",
        onEnter: () => {
          if (document.querySelector(".objects .scroll-down--static")) {
            document.querySelector(".objects .scroll-down").classList.remove("scroll-down--static")
          }
        },
        onEnterBack: () => {
          if (document.querySelector(".objects .scroll-down--static")) {
            document.querySelector(".objects .scroll-down").classList.remove("scroll-down--static")
          }
        },
        onLeave: () => {
          document.querySelector(".objects .scroll-down").classList.add("scroll-down--static")
        },
        onLeaveBack: () => {
          document.querySelector(".objects .scroll-down").classList.add("scroll-down--static")
        },
      }
    })
    if (document.querySelector('body').clientWidth > window.LARGE_TABLET) {

      gsap.fromTo(".objects__title .oh", {
        opacity: 0,
        y: "100%",
        scale: 0.9,
        duration: 0
      }, {
        scale: 1,
        opacity: 1,
        y: "0%",
        duration: 0.75,
        delay: timeDelay,
      })

      gsap.fromTo(".objects .line", {
        opacity: 0,
        duration: 0,
      }, {
        opacity: 1,
        duration: 2,
        delay: timeDelay + 1.5,
      })

      gsap.fromTo(".objects__filter", {
        opacity: 0,
        y: "100%",
        duration: 0
      }, {
        opacity: 1,
        y: "0%",
        duration: 0.75,
        delay: timeDelay + 0.5,
      })


      gsap.fromTo(".objects__list-wrap", {
        opacity: 0,
        y: 50,
        duration: 0
      }, {
        opacity: 1,
        y: 0,
        duration: 0.75,
        delay: timeDelay + 1,
      })

      gsap.fromTo(".objects__wrap", {
        opacity: 0,
        y: 100,
        duration: 0
      }, {
        opacity: 1,
        y: 0,
        duration: 0.75,
        delay: timeDelay + 1.5,
      })

      gsap.to(".objects .objects__wrap .objects__scroll", {
        scrollTrigger: {
          trigger: ".objects .objects__scroll",
          start: "top center",
          end: "bottom bottom",
          pin: ".objects .objects__wrap .objects__scroll .scroll-down",
          pinSpacing: false,
          scrub: 0,
        }
      })
    }
  }
}