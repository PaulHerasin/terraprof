document.querySelectorAll(".img-parallax").forEach((section) => {
  gsap.fromTo(section.querySelector("img"), {
    y: "-10%",
    scale: 1.2
  }, {
    scrollTrigger: {
      trigger: section,
      start: "top bottom",
      end: "bottom top",
      scrub: 0.5
    },
    y: "10%",
    ease: "none"
  });
});