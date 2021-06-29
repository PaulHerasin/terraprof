export const OtherProjects = () => {
  if (document.querySelector(".other-projects")) {
    if (document.querySelector('body').clientWidth > window.LARGE_TABLET) {

      gsap.fromTo(".other-projects .other-projects__title .oh", {
        y: "100%",
        duration: 0,
        opacity: 0,
      }, {
        y: "0%",
        opacity: 1,
        delay: 0.5,
        scrollTrigger: {
          trigger: ".other-projects .other-projects__title",
          start: "top bottom",
          end: "bottom bottom",
        },
      })

      gsap.fromTo(".other-projects .other-projects__title", {
        y: 50,
        duration: 0,
      }, {
        y: -150,
        scrollTrigger: {
          trigger: ".other-projects",
          start: "top bottom",
          end: "20% top",
          scrub: 0.5
        },
      })

      document.querySelectorAll(".other-projects .other-projects__wrap").forEach(element => {

        let otherProjectsWrap = gsap.timeline({
          scrollTrigger: {
            trigger: element,
            start: "top bottom",
            end: "bottom top",
            scrub: 0.5
          }
        })

        otherProjectsWrap.fromTo(element, {
          y: 100,
          duration: 0,
        }, {
          y: -150,
        }, 0)

        otherProjectsWrap.fromTo(element.querySelector(".other-projects__content"), {
          y: 50,
          duration: 0,
        }, {
          y: -50,
        }, 0)

        otherProjectsWrap.to(element.querySelector(".other-projects__img"), {
          scale: 0.95,
          delay: 0.5,
        }, 0)
      })
    }
  }
}