import { StartProject } from "./scrollbarFix"

let preloader = document.querySelector('.preloader');


const pageHide = () => {
  gsap.to(".preloader .oh-row .oh", {
    y: "-100%",
    duration: 0,
  })

  gsap.to(".preloader", {
    y: "0%",
    duration: 0.75,
  })

  gsap.to(".preloader .oh-row .oh", {
    y: "0%",
    opacity: 1,
    duration: 0.75,
    delay: 0.75
  })
}

const pageShow = () => {
  gsap.to(".preloader .oh-row .oh", {
    y: "-100%",
    opacity: 1,
    duration: 0.75,
    delay: 1
  })

  gsap.to(".preloader", {
    y: "-100%",
    duration: 0.75,
    delay: 1.75,
  })
}

const preloaderShow = () => {
  gsap.to(".preloader .oh-row .oh", {
    y: "-100%",
    opacity: 0,
    duration: 0.75,
    delay: 2
  })

  gsap.to(".preloader", {
    y: "-100%",
    duration: 0.75,
    delay: 2.75,
  })
}


if (!(location.href.indexOf('one-service') == -1)) {
  gsap.to(".preloader", {
    y: "-100%",
    duration: 0,
  })
  StartProject()
} else if (!(document.referrer.indexOf('tss') == -1) || !(location.href.indexOf('localhost') == -1)) {
  pageShow()
  StartProject(2.5)
} else {
  if (preloader) {
    if (document.querySelector('body').clientWidth > window.LARGE_TABLET) {
      StartProject(3.5)
      preloaderShow()
    }
  }
}

$(document).ready(function () {
  $(document).on(
    'click',
    "a:not([href^='#']):not([href^='tel']):not([href^='mailto']):not(.anchors a):not(.single-anchors):not(.fancybox):not([target='_blank'])",
    function (e) {
      e.preventDefault();
      pageHide();
      var self = this;
      setTimeout(function () {
        window.location.href = $(self).attr('href');
      }, 1500);
    }
  );
});

