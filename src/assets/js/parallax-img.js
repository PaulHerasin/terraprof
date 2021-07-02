document.querySelectorAll(".img-parallax-wrap").forEach((section) => {
  gsap.fromTo(section.querySelector(".img-parallax"), {
    y: "-10%",
    scale: 1.2,
    duration: 0,
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

