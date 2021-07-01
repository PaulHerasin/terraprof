
export const MapGsap = (timeDelay) => {
  if (document.querySelector(".map")) {
    if (document.querySelector('body').clientWidth > window.LARGE_TABLET) {

      gsap.fromTo(".map .map__content .oh", {
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


      gsap.from(".map .map__body", {
        y: 50,
        opacity: 0,
        duration: 1,
        delay: timeDelay + 0.75
      })
    }
  }
}