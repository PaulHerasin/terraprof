import { StartProject } from "./scrollbarFix"

let preloader = document.querySelector('.preloader');

// if (!(location.href.indexOf('one-service') == -1)) {
//   document.querySelector(".preloader").style.display = "none"
// } else
if (!(document.referrer.indexOf('tss') == -1) || !(location.href.indexOf('localhost') == -1)) {
  // gsap.to(".preloader .oh-row .oh", {
  //   y: "0%",
  //   opacity: 1,
  //   duration: 0.75,
  //   delay: 0.5
  // })

  // gsap.to(".preloader .oh-row .oh", {
  //   opacity: 0,
  //   duration: 0.75,
  //   delay: 2
  // })

  // gsap.to(".preloader", {
  //   y: "-100%",
  //   duration: 0.75,
  //   delay: 2.5,
  //   onComplete: () => {
  //     document.querySelector(".preloader").style.display = "none"
  //   }
  // })
  document.querySelector(".preloader").style.display = "none"
  StartProject(1)
} else {
  if (preloader) {
    if (document.querySelector('body').clientWidth > window.LARGE_TABLET) {
      StartProject(4.25)
      gsap.to(".preloader .oh-row .oh", {
        y: "0%",
        opacity: 1,
        duration: 0.75,
        delay: 0.5
      })

      gsap.to(".preloader .oh-row .oh", {
        y: "-100%",
        opacity: 0,
        duration: 0.75,
        delay: 2
      })

      gsap.to(".preloader", {
        y: "-100%",
        duration: 0.75,
        delay: 3.5,
        onComplete: () => {
          document.querySelector(".preloader").style.display = "none"
        }
      })
    }
  }
}

// function hidePage() {
//   document.querySelector(".preloader").style.display = "flex"
//   gsap.to(".preloader", {
//     duration: 1,
//     y: "0%",
//     delay: 0.1
//   })
// }

// $(document).ready(function () {
//   $(document).on(
//     'click',
//     "a:not([href^='#']):not([href^='tel']):not([href^='']):not(.anchors a):not(.single-anchors):not(.fancybox):not([target='_blank'])",
//     function (e) {
//       e.preventDefault();
//       hidePage();
//       var self = this;
//       setTimeout(function () {
//         window.location.href = $(self).attr('href');
//       }, 1100);
//     }
//   );
// });

