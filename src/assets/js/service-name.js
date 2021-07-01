export const ServiceName = (timeDelay) => {
  if (document.querySelector(".service-name")) {
    if (document.querySelector('body').clientWidth > window.LARGE_TABLET) {

      gsap.fromTo(".service-name .service-name__title", {
        y: "100%",
        duration: 0,
        opacity: 0,
      }, {
        y: "0%",
        opacity: 1,
        delay: 0.5,
        duration: 0.75,
        scrollTrigger: {
          trigger: ".service-name .service-name__title",
          start: "top bottom",
        },
      })

      gsap.fromTo(".service-name .oh-row", {
        y: 50,
        duration: 0
      }, {
        y: -20,
        scrollTrigger: {
          trigger: ".service-name .oh-row",
          start: "top bottom",
          end: "top top",
          scrub: 0.5
        },
      })


      gsap.fromTo(".service-name .service-name__content", {
        y: 50,
        duration: 0
      }, {
        y: 0,
        scrollTrigger: {
          trigger: ".service-name .service-name__content",
          start: "top bottom",
          end: "top top",
          scrub: 0.5
        },
      })

      gsap.fromTo(".service-name .service-name__right", {
        y: 50,
        duration: 0
      }, {
        y: -130,
        scrollTrigger: {
          trigger: ".service-name .service-name__right",
          start: "top bottom",
          end: "bottom top",
          scrub: 0.5
        },
      })


      // document.querySelectorAll(".information-object .information-object__wrap").forEach((element, index) => {
      //   let informationObjectWrap = gsap.timeline({
      //     scrollTrigger: {
      //       trigger: element,
      //       start: "top bottom",
      //       end: "bottom top",
      //       scrub: 0.5
      //     }
      //   })

      //   informationObjectWrap.fromTo(element.querySelector(".information-object__img"), {
      //     y: 150,
      //     duration: 0,
      //   }, {
      //     y: 0,
      //   }, 0)

      //   informationObjectWrap.to(element.querySelector(".information-object__img"), {
      //     scale: 0.95,
      //     delay: 0.5,
      //   }, 0)

      //   if (index == 0) {
      //     informationObjectWrap.fromTo(element.querySelector(".information-object__left"), {
      //       y: 300,
      //       duration: 0,
      //     }, {
      //       y: 0,
      //     }, 0)

      //     informationObjectWrap.fromTo(".information-object .scroll-down", {
      //       y: 400,
      //       duration: 0,
      //     }, {
      //       y: 30,
      //     }, 0)
      //   }

      //   if (index >= 1) {
      //     informationObjectWrap.fromTo(element.querySelector(".information-object__left"), {
      //       y: 100,
      //     }, {
      //       y: -100,
      //     }, 0)
      //   }
      // })
    }
  }
}