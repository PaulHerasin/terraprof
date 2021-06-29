
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

  document.querySelector(".connection .connection__title").addEventListener("click", function (e) {
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
}
