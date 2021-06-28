import Scrollbar from 'smooth-scrollbar';
import { MainScreen } from "./main-screen"
import { UnikalnyProjects } from "./unikalny-projects"
import { OurProjects } from "./our-projects"
import { Advantages } from "./advantages"
import { AdvantagesVideo } from "./advantages-video"

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


export const StartProject = (timeDelay) => {
  MainScreen(timeDelay)
  setTimeout(function () {
    UnikalnyProjects()
    Advantages()
    OurProjects()
    AdvantagesVideo()
  }, 1000)

  ScrollTrigger.refresh()
}
