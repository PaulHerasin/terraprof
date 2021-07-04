// if (document.querySelector('body').clientWidth > window.LARGE_TABLET) {
//   document.querySelectorAll(".img-parallax").forEach((section) => {
//     gsap.fromTo(section.querySelector("img"), {
//       y: "-10%",
//       scale: 1.2,
//       duration: 0,
//     }, {
//       scrollTrigger: {
//         trigger: section,
//         start: "top bottom",
//         end: "bottom top",
//         scrub: 0.5
//       },
//       y: "10%",
//       ease: "none"
//     });
//   });
// }
if (document.querySelector('body').clientWidth > window.LARGE_TABLET) {
  gsap.registerPlugin(ScrollTrigger);

  setTimeout(function () {

    gsap.utils.toArray(".img-parallax .bg").forEach((section, i) => {

      const heightDiff = section.offsetHeight - section.parentElement.offsetHeight;

      gsap.fromTo(section, {
        y: -heightDiff
      }, {
        scrollTrigger: {
          trigger: section.parentElement,
          scrub: true
        },
        y: 0,
        ease: "none"
      });
    });

  }, 2000);
}