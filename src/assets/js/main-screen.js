
export const MainScreen = (timeDelay) => {
  if (document.querySelector(".main-screen")) {
    if (document.querySelector('body').clientWidth > window.LARGE_TABLET) {

      gsap.fromTo([".main-screen__title h2", ".main-screen__text", ".main-screen__top-img"], {
        opacity: 0,
        y: 100,
        scale: 0.9,
        duration: 0
      }, {
        scale: 1,
        opacity: 1,
        stagger: {
          each: 0.5
        },
        y: 0,
        duration: 0.75,
        delay: timeDelay,
      })

      ScrollTrigger.create({
        trigger: ".main-screen",
        start: 'top top',
        end: "40% top",
        pin: ".main-screen .title-line",
        pinSpacing: false,
        scrub: 0.5
      });

      gsap.to('.main-screen .title-line', {
        opacity: 0,
        // scale: 0.95,
        scrollTrigger: {
          trigger: ".main-screen",
          start: 'top top',
          end: "9% top",
          scrub: 0.5
        },
      })

      let mainScreenImg = gsap.timeline({
        scrollTrigger: {
          trigger: ".main-screen",
          start: 'top top',
          end: "bottom top",
          scrub: 0.5
        },
      })

      mainScreenImg.to('.main-screen__top', {
        y: -250,
      }, 0)

      mainScreenImg.fromTo('.main-screen__bottom-img--left', {
        y: 200,
      }, {
        y: -100,
      }, 0)

      mainScreenImg.fromTo('.main-screen__bottom-img--center', {
        y: 300,
      }, {
        y: -200,
      }, 0)

      mainScreenImg.fromTo('.main-screen__bottom-img--right', {
        y: 400,
      }, {
        y: "-100vh",
      }, 0)
    }
  }
}