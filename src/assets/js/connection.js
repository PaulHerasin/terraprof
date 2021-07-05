
if (document.querySelector(".connection")) {
  gsap.to(".connection .contact", {
    css: {
      display: "none",
      opacity: 0,
    }
  })
  gsap.to(".connection .contact__wrap", {
    y: 100
  })

  document.querySelector(".connection .connection__wrap").addEventListener("click", function (e) {
    gsap.to(".connection .contact", {
      css: {
        display: "block"
      },
    })

    gsap.to(".connection .contact", {
      opacity: 1,
      duration: 1,
      delay: 0.25
    })

    gsap.to(".connection .contact__wrap", {
      y: 0,
      duration: 1,
      delay: 0.25,
    })
  })

  document.querySelector(".connection .connection__wrap").addEventListener('mouseenter',
    function () {
      //   gsap.to(".connection .connection__bg-white", {
      //     css: {
      //       top: "100%",
      //     },
      //     ease: "power1.out",
      //   })
      //   gsap.fromTo(".connection .connection__bg", {
      //     scale: 1.3,
      //     y: 0,
      //   }, {
      //     y: 20,
      //     ease: "power1.out",
      //     duration: 0.5
      //   })
      // gsap.to(".connection__subtitle", {
      //   css: {
      //     color: "#ffffff"
      //   },
      //   ease: "power1.out",
      //   duration: 0.5
      // })

      // gsap.to(".connection__title", {
      //   css: {
      //     color: "#ffffff"
      //   },
      //   ease: "power1.out",
      //   duration: 0.5
      // })
    })
}
