let header = document.querySelector('.header');

document.addEventListener('scroll', function () {
  let scroll = document.querySelector('html').scrollTop;
  if (scroll > 200 & !header.classList.contains('header--fixed')) {
    headerFix();
  } else if (scroll < 200 & header.classList.contains('header--fixed')) {
    headerStatic();
  }

});


setTimeout(function () {
  let blackGsap = document.querySelectorAll('.blackGsap');

  blackGsap.forEach(function (element) {
    gsap.to('.header', {
      scrollTrigger: {
        trigger: element,
        start: 'top top',
        toggleClass: {
          targets: '.header',
          className: 'header--black',
        },
      },
    });
  });
}, 1000);

if (document.querySelector('html').clientWidth > window.LARGE_TABLET) {
  setTimeout(function () {
    gsap.to(header, {
      scrollTrigger: {
        trigger: "#scrollbar",
        start: "1 top",
        onEnter: () => {
          headerFix()
        },
        onLeaveBack: () => {
          headerStatic()
        }
      },
    })
  }, 1000);
}


function headerFix() {
  header.classList.add('header--fixed');
}

function headerStatic() {
  header.classList.add('header--height0');

  function headerRemoveFix() {

    header.classList.remove('header--fixed');
    header.classList.remove('header--height0');
    header.removeEventListener('animationend', headerRemoveFix)
  }
  header.addEventListener('animationend', headerRemoveFix)
}