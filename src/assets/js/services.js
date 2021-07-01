export const Services = (timeDelay) => {
  if (document.querySelector(".services")) {
    if (document.querySelector('body').clientWidth > window.LARGE_TABLET) {

      gsap.fromTo(['.services .services__content .oh', '.services .services__content .services__text p'], {
        y: "100%",
        duration: 0,
        opacity: 0,
        scale: 0.95
      }, {
        y: "0%",
        opacity: 1,
        scale: 1,
        duration: 0.75,
        stagger: {
          each: 0.5
        },
        delay: timeDelay
      })

      gsap.from(".services .services__columns-top", {
        y: 100,
        opacity: 0,
        duration: 0.75,
        delay: timeDelay + 0.75
      })

      gsap.to(".services .services__content", {
        y: -100,
        scale: 0.9,
        scrollTrigger: {
          trigger: ".services",
          start: "1% top",
          end: "1000 top",
          scrub: 0.5
        }
      })

      setTimeout(function () {
        gsap.fromTo(".services .services__box .oh", {
          y: "100%",
          duration: 0,
          opacity: 0,
        }, {
          y: "0%",
          opacity: 1,
          scrollTrigger: {
            trigger: ".services .services__box .oh",
            start: "top bottom",
            end: "bottom bottom",
          },
        })
      }, 1000);

      if (document.querySelector(".services")) {
        document.querySelectorAll('.services .services__box').forEach(element => {

          element.addEventListener("click", function (e) {

            const servicesHidePage = () => {
              if (document.querySelector(".services__hide-page")) {
                document.querySelector(".services__hide-page").remove()
              }
              document.querySelector(".preloader").remove()
              let div = document.createElement('img');
              div.classList.add("services__hide-page")
              div.setAttribute("src", element.querySelector("img").getAttribute("src"))
              document.body.append(div)
              gsap.to(".services__hide-page", {
                scale: 1,
                duration: 1,
                delay: 0.5,
                ease: "none"
              })
            }

            $(document).on(
              'click',
              "a:not([href^='#']):not([href^='tel']):not([href^='']):not(.anchors a):not(.single-anchors):not(.fancybox):not([target='_blank'])",
              function (e) {
                e.preventDefault();
                servicesHidePage();
                var self = this;
                setTimeout(function () {
                  window.location.href = $(self).attr('href');
                }, 1500);
              }
            );
          });
        })
      }
    }
  }
}

