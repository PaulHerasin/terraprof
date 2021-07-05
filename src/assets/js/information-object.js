export const InformationObject = (timeDelay) => {
  if (document.querySelector(".information-object")) {
    gsap.to(".information-object .scroll-down", {
      scrollTrigger: {
        trigger: ".information-object .information-object__scroll",
        start: "top bottom",
        end: "bottom top",
        onEnter: () => {
          if (document.querySelector(".information-object .scroll-down--static")) {
            document.querySelector(".information-object .scroll-down").classList.remove("scroll-down--static")
          }
        },
        onEnterBack: () => {
          if (document.querySelector(".information-object .scroll-down--static")) {
            document.querySelector(".information-object .scroll-down").classList.remove("scroll-down--static")
          }
        },
        onLeave: () => {
          document.querySelector(".information-object .scroll-down").classList.add("scroll-down--static")
        },
        onLeaveBack: () => {
          document.querySelector(".information-object .scroll-down").classList.add("scroll-down--static")
        },
      }
    })

    if (document.querySelector('body').clientWidth > window.LARGE_TABLET) {

      gsap.to(".information-object .information-object__scroll", {
        scrollTrigger: {
          trigger: ".information-object .information-object__scroll",
          start: "top 10%",
          end: "bottom bottom",
          pin: ".information-object .information-object__scroll .scroll-down",
          pinSpacing: false,
          scrub: 0,
        }
      })

      gsap.fromTo(".information-object .information-object__title .oh", {
        y: "100%",
        duration: 0,
        opacity: 0,
      }, {
        y: "0%",
        opacity: 1,
        delay: 0.5,
        scrollTrigger: {
          trigger: ".information-object .information-object__title",
          start: "top bottom",
          end: "bottom bottom",
        },
      })

      gsap.fromTo(".information-object .information-object__title", {
        y: 50,
        duration: 0
      }, {
        y: -30,
        scrollTrigger: {
          trigger: ".information-object",
          start: "top bottom",
          end: "top top",
          scrub: 0.5
        },
      })

      document.querySelectorAll(".information-object .information-object__wrap").forEach((element, index) => {
        let informationObjectWrap = gsap.timeline({
          scrollTrigger: {
            trigger: element,
            start: "top bottom",
            end: "bottom top",
            scrub: 0.5
          }
        })

        informationObjectWrap.fromTo(element.querySelector(".information-object__img"), {
          y: 150,
          duration: 0,
        }, {
          y: 0,
        }, 0)

        informationObjectWrap.to(element.querySelector(".information-object__img"), {
          scale: 0.95,
          delay: 0.5,
        }, 0)

        if (index == 0) {
          informationObjectWrap.fromTo(element.querySelector(".information-object__left"), {
            y: 200,
            duration: 0,
          }, {
            y: 0,
          }, 0)
        }

        if (index >= 1) {
          informationObjectWrap.fromTo(element.querySelector(".information-object__left"), {
            y: 100,
          }, {
            y: -100,
          }, 0)
        }
      })
    }
  }
}