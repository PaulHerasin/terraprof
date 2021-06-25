import Scrollbar from 'smooth-scrollbar';
import { MainScreen } from "./main-screen"
import { UnikalnyProjects } from "./unikalny-projects"
import { OurProjects } from "./our-projects"
import { Advantages } from "./advantages"

if (document.querySelector('body').clientWidth > window.LARGE_TABLET) {
  window.scrollbar = Scrollbar.init(document.querySelector('#scrollbar'), {
    wheelEventTarget: document.querySelector('body'),
    damping: 0.05
  });

  ScrollTrigger.scrollerProxy('#scrollbar', {
    scrollTop(value) {
      if (arguments.length) {
        window.scrollbar.scrollTop = value;
      }
      return window.scrollbar.scrollTop;
    },
  });

  window.scrollbar.addListener(ScrollTrigger.update);

  ScrollTrigger.defaults({
    scroller: document.querySelector('#scrollbar'),
  });
}


let addScrollTrigger = () => {
  MainScreen(2)
  setTimeout(function () {
    UnikalnyProjects()
    Advantages()
    OurProjects()
  }, 1000)

  ScrollTrigger.refresh()
}

document.addEventListener('DOMContentLoaded', function () {
  addScrollTrigger()
});
