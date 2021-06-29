export const Gallery = (timeDelay) => {
  if (document.querySelector(".gallery")) {
    if (document.querySelector('body').clientWidth > window.LARGE_TABLET) {
      if (document.querySelector(".gallery .gallery__content")) {

        gsap.fromTo([".gallery .gallery__title .oh", ".gallery__subtitle .oh"], {
          y: "100%",
          duration: 0,
          opacity: 0,
        }, {
          y: "0%",
          opacity: 1,
          stagger: {
            each: 0.5
          },
          delay: 0.5,
          scrollTrigger: {
            trigger: ".gallery .gallery__content",
            start: "top bottom",
          },
        })

        gsap.fromTo([".gallery .gallery__title", ".gallery__subtitle"], {
          y: 100,
          duration: 0
        }, {
          y: -50,
          scrollTrigger: {
            trigger: ".gallery .gallery__content",
            start: "top bottom",
            end: "top top",
            scrub: 0.5
          },
        })
      }
    }
  }
}