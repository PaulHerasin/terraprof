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

      gsap.to(".services .services__content", {
        y: -100,
        scrollTrigger: {
          trigger: ".services",
          start: "1% top",
          end: "center bottom",
          scrub: 0.5
        }
      })

      document.querySelectorAll('.services .services__box').forEach(element => {
        setTimeout(function () {
          gsap.fromTo(element.querySelector(".oh"), {
            y: "100%",
            duration: 0,
            opacity: 0,
          }, {
            y: "0%",
            opacity: 1,
            scrollTrigger: {
              trigger: element.querySelector(".oh"),
              start: "top bottom",
              end: "bottom bottom",
            },
          })
        }, timeDelay * 1000)

        element.addEventListener("click", function (e) {

          const hidePage = () => {
            if (document.querySelector(".services__hide-page")) {
              document.querySelector(".services__hide-page").remove()
            }
            let div = document.createElement('img');
            div.classList.add("services__hide-page")
            div.setAttribute("src", element.querySelector("img").getAttribute("src"))
            document.body.append(div)
            gsap.to(".services__hide-page", {
              scale: 1,
              duration: 1
            })
          }

          $(document).on(
            'click',
            "a:not([href^='#']):not([href^='tel']):not([href^='']):not(.anchors a):not(.single-anchors):not(.fancybox):not([target='_blank'])",
            function (e) {
              e.preventDefault();
              hidePage();
              var self = this;
              setTimeout(function () {
                window.location.href = $(self).attr('href');
              }, 2000);
            }
          );
        });
      })
    }
  }
}
