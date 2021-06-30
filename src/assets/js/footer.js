// В футере баг, если егов идно полностью
if (document.querySelector('.footer__space') && document.querySelector('body').clientWidth > window.LARGE_TABLET) {
    document.querySelector('.footer__space').addEventListener('mouseenter', function () {
        document.querySelector('#scrollbar').classList.add('scrollbar--footer');
    });
    document.querySelector('.footer').addEventListener('mousemove', function (e) {
        let mouseFooterPosiziton = scrollbar.size.container.height - e.pageY;
        let scrollBottom = scrollbar.size.content.height - scrollbar.size.container.height - scrollbar.scrollTop;
        if (document.querySelector('footer').offsetHeight - scrollBottom < mouseFooterPosiziton) {
            document.querySelector('#scrollbar').classList.remove('scrollbar--footer');
        } else {
            document.querySelector('#scrollbar').classList.add('scrollbar--footer');
        }

    });
}
// window.scrollbar.addListener(footerShadow);

// function footerShadow() {
// 	if ( ( window.scrollbar.limit.y - scrollbar.scrollTop ) < 50 ) {
// 		document.querySelector('.scroll-content').classList.add('scroll-content--shadow0');
// 	} else {
// 		if ( document.querySelector('.scroll-content').classList.contains('scroll-content--shadow0') ) {
// 			document.querySelector('.scroll-content').classList.remove('scroll-content--shadow0');
// 		}
// 	}
// }