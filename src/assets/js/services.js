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

      gsap.from([".services .services__columns-top", ".services .services__left .services__box:nth-of-type(1)"], {
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

      document.querySelectorAll('.services .services__box').forEach(element => {

        element.addEventListener("click", function (e) {
          const servicesHidePage = () => {

            let coords = element.getBoundingClientRect();
            document.querySelector(".preloader").remove()

            let div = document.createElement('img');
            div.classList.add("services__hide-page")
            div.setAttribute("src", element.querySelector("img").getAttribute("src"))
            document.body.append(div)

            gsap.to(".services__hide-page", {
              css: {
                top: coords.height / 2 + coords.y + "px",
                left: coords.width / 2 + coords.x + "px",
                yPercent: -50,
                xPercent: -50,
                scale: 0.1,
                opacity: 0,
              },
              duration: 0,
            })

            gsap.to(".services__hide-page", {
              opacity: 1,
              duration: 0.3,
            })

            gsap.to(".services__hide-page", {
              css: {
                top: "0px",
                left: "0px",
                yPercent: 0,
                xPercent: 0,
                scale: 1,
              },
              duration: 1.3,
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
        })
      });
    }
  }
}



