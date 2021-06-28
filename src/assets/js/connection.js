
if (document.querySelector(".connection")) {
  gsap.to(".connection .contact", {
    css: {
      display: "none"
    }
  })

  document.querySelector(".connection .connection__title").addEventListener("click", function (e) {
    gsap.to(".connection .connection__wrap", {
      css: {
        display: "none"
      }
    })

    gsap.to(".connection .contact", {
      css: {
        display: "block"
      }
    })
  })
}
