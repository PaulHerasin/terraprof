
export const MainScreen = (timeDelay) => {
  let mainScreen = document.querySelector(".main-screen")

  if (mainScreen) {
    if (document.querySelector('body').clientWidth > window.LARGE_TABLET) {

      // gsap.fromTo(".main-screen__title h2", {
      //   opacity: 0,
      //   y: 100,

      // }, {
      //   opacity: 1,
      //   y: 0,
      //   delay: timeDelay
      // })

      gsap.fromTo(".main-screen__text", {
        opacity: 0,
        y: 100,
        duration: 0,
      }, {
        opacity: 1,
        y: 0,
        duration: 2,
        delay: timeDelay + 0.5
      })

      // setTimeout(function () {
      // }, 1000)

      let titleBack = gsap.timeline({
        scrollTrigger: {
          trigger: ".main-screen",
          start: 'top top',
          end: "40% top",
          pin: ".main-screen .title-line",
          pinSpacing: false,
          scrub: 0.5
        },
      })

      titleBack.to('.main-screen .title-line', {
        opacity: 0,
        duration: 0.5
      })

      titleBack.to('.main-screen .title-line', {
        opacity: 0,
        duration: 0.5
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