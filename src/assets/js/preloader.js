if (document.querySelector(".preloader")) {
  if (document.querySelector('body').clientWidth > window.LARGE_TABLET) {
    gsap.to(".preloader .oh-row .oh", {
      y: "0%",
      opacity: 1,
      duration: 0.75,
      delay: 1
    })

    gsap.to(".preloader .oh-row .oh", {
      // y: "-100%",
      opacity: 0,
      duration: 0.75,
      delay: 3
    })

    gsap.to(".preloader", {
      y: "-100%",
      duration: 0.75,
      delay: 3.5,
      onComplete: () => {
        document.querySelector(".preloader").remove()
      }
    })
  }
}