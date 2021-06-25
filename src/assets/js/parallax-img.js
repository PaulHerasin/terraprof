gsap.utils.toArray(".img-parallax img").forEach((section) => {
  gsap.fromTo(section, {
    y: "-10%",
    scale: 1.2
  }, {
    scrollTrigger: {
      trigger: section.parentElement,
      top: "top bottom",
      end: "bottom top",
      scrub: 0.5
    },
    y: "10%",
    ease: "none"
  });
});