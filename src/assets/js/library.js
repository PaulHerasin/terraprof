export const Library = (timeDelay) => {
  if (document.querySelector(".library")) {
    if (document.querySelector('body').clientWidth > window.LARGE_TABLET) {

      gsap.fromTo(".library .library__content .oh", {
        y: "100%",
        duration: 0
      }, {
        y: "0%",
        duration: 0.75,
        delay: timeDelay,
      })

      gsap.fromTo(".library .library__content .simple-title", {
        opacity: 0,
        scale: 0.9,
        duration: 0
      }, {
        scale: 1,
        opacity: 1,
        duration: 0.75,
        delay: timeDelay,
      })

      gsap.fromTo(".library .line", {
        opacity: 0,
        duration: 0,
      }, {
        opacity: 1,
        duration: 2,
        delay: timeDelay + 1.5,
      })

      gsap.fromTo(".library .library__left", {
        opacity: 0,
        y: 100,
        duration: 0
      }, {
        y: 0,
        opacity: 1,
        duration: 0.75,
        delay: timeDelay + 0.5,
      })

      gsap.fromTo(".library .library__content .library__subtitle", {
        opacity: 0,
        duration: 0
      }, {
        opacity: 1,
        duration: 0.75,
        delay: timeDelay,
      })


      ScrollTrigger.create({
        trigger: ".library",
        start: 'top top',
        end: "40% top",
        pin: ".library .library__content",
        pinSpacing: false,
        scrub: 0.5
      });

      gsap.to('.library .library__content', {
        opacity: 0,
        scale: 0.95,
        scrollTrigger: {
          trigger: ".library",
          start: 'top top',
          end: "15% top",
          scrub: 0.5
        },
      })

      let libraryImg = gsap.timeline({
        scrollTrigger: {
          trigger: ".library",
          start: 'top top',
          end: "bottom top",
          scrub: 0.5
        },
      })

      libraryImg.to(['.library .library__right .library__video', '.library .library__right .video'], {
        y: -600,
      }, 0)
    }
  }
}