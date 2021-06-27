export const Services = (timeDelay) => {
  if (document.querySelector(".services")) {
    if (document.querySelector('body').clientWidth > window.LARGE_TABLET) {

      document.querySelectorAll('.services .services__box').forEach(element => {
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
Services()