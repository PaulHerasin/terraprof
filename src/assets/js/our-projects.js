export const OurProjects = (timeDelay) => {
  if (document.querySelector(".our-projects")) {
    gsap.to(".our-projects .scroll-down", {
      scrollTrigger: {
        trigger: ".our-projects .our-projects__scroll",
        start: "top bottom",
        end: "bottom top",
        onEnter: () => {
          if (document.querySelector(".our-projects .scroll-down--static")) {
            document.querySelector(".our-projects .scroll-down").classList.remove("scroll-down--static")
          }
        },
        onEnterBack: () => {
          if (document.querySelector(".our-projects .scroll-down--static")) {
            document.querySelector(".our-projects .scroll-down").classList.remove("scroll-down--static")
          }
        },
        onLeave: () => {
          document.querySelector(".our-projects .scroll-down").classList.add("scroll-down--static")
        },
        onLeaveBack: () => {
          document.querySelector(".our-projects .scroll-down").classList.add("scroll-down--static")
        },
      }
    })

    if (document.querySelector('body').clientWidth > window.LARGE_TABLET) {
      gsap.to(".our-projects .scroll-down", {
        scrollTrigger: {
          trigger: ".our-projects .our-projects__scroll",
          start: "top center",
          end: "bottom bottom",
          pin: ".our-projects__scroll .scroll-down",
          pinSpacing: false,
          scrub: 0
        },
      })

      document.querySelectorAll(".our-projects .our-projects__box").forEach(element => {
        element.addEventListener("mouseover", function () {
          gsap.to(element, {
            scale: 0.95
          })
        })
        element.addEventListener("mouseout", function () {
          gsap.to(element, {
            scale: 1
          })
        })
      })


      gsap.fromTo(".our-projects .wrap", {
        y: 100,
        duration: 0,
        scale: 0.95,
      }, {
        scale: 1,
        y: 0,
        scrollTrigger: {
          trigger: ".our-projects",
          start: "top bottom",
          end: "top top",
          scrub: 0
        },
      })

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
          // toggleActions: "play none none reset"
        },
      })
    }
  }
}

