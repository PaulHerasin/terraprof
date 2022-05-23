// // function checkAnchor() {
// //     var elementid = window.location.hash.replace("#", "");
// //     if (elementid) {
// //         scrollToElement(elementid, true);
// //     }
// // }


// // document.addEventListener('DOMContentLoaded', function () {
// //     window.addLoadEvent(checkAnchor);
// // });



// // $('.anchors a:not([data-anchors]), .single-anchors').on("click", function (e) {

// //     e.preventDefault();

// //     var elementid = $(this).attr("href");

// //     if (elementid.search('#') == -1) { //element та текущей странице
// //         console.log('element та текущей странице');
// //         scrollToElement(elementid);

// //     } else { //element может бытьна другой странице
// //         console.log('elemen на текущей странице 2');
// //         var elementHref = elementid;
// //         var elementid = elementid.substr(elementid.indexOf("#") + 1);

// //         if (document.querySelector('#' + elementid)) { //element на текущей странице
// //             scrollToElement(elementid);
// //         } else { //element на другой странице
// //             location.href = elementHref;
// //         }
// //     }
// // });



// // function scrollToElement(elementId, onload) {
// //     var destination = $("#" + elementId).offset().top - 80;
// //     $('html').animate({
// //         scrollTop: destination
// //     }, 1500);
// //     if (document.querySelector('.mobile-menu__wrap--left0')) {
// //         window.hideMenu();
// //     }
// // }
// function checkAnchor() {
//     var elementid = window.location.hash.replace("#", "");
//     if (elementid) {
//         scrollToElement(elementid, true);
//     }
// }


// // document.addEventListener('DOMContentLoaded', function () {
// //     window.addLoadEvent(checkAnchor);
// // });



// $('.anchors a:not([data-anchors]), .single-anchors').on("click", function (e) {

//     e.preventDefault();

//     var elementid = $(this).attr("href");

//     if (elementid.search('#') == -1) { //element та текущей странице
//         console.log('element та текущей странице');
//         scrollToElement(elementid);

//     } else { //element может бытьна другой странице
//         console.log('elemen на текущей странице 2');
//         var elementHref = elementid;
//         var elementid = elementid.substr(elementid.indexOf("#") + 1);

//         if (document.querySelector('#' + elementid)) { //element на текущей странице
//             scrollToElement(elementid);
//         } else { //element на другой странице
//             location.href = elementHref;
//         }
//     }
// });



// function scrollToElement(elementId, onload) {
//     var destination = $("#" + elementId).offset().top - 80;
//     $('html').animate({
//         scrollTop: destination
//     }, 1500);
//     if (document.querySelector('.mobile-menu__wrap--left0')) {
//         window.hideMenu();
//     }
// }


function checkAnchor() {
    var elementid = window.location.hash.replace("#anchor", "");
    if (elementid) {
        scrollToElement(elementid, true);
    }
}

window.addLoadEvent = function (func) {
    var oldonload = window.onload;
    if (typeof window.onload != 'function') {
        window.onload = func;
    } else {
        window.onload = function () {
            if (oldonload) {
                oldonload();
            }
            func();
        }
    }
}



document.addEventListener('DOMContentLoaded', function () {
    window.addLoadEvent(checkAnchor);
});

$('.anchors a:not([data-anchors]), .single-anchors').on("click", function (e) {
    if (this.hasAttribute('data-mobile')) {
        if (document.documentElement.clientWidth < window.LARGE_TABLET) {
            return;
        }
    }

    e.preventDefault();

    var elementid = $(this).attr("href");

    if (elementid.search('#') == -1) { //element та текущей странице
        scrollToElement(elementid);

    } else { //element может бытьна другой странице

        var elementHref = elementid.substring(0, elementid.indexOf('#'));
        var elementid = elementid.substr(elementid.indexOf("#") + 1);
        elementHref += "#anchor" + elementid;

        if (document.querySelector('#' + elementid)) { //element на текущей странице
            scrollToElement(elementid);

        } else { //element на другой странице

            setTimeout(function () {
                location.href = elementHref;
            }, 250);

        }
    }
});



function scrollToElement(elementId, onload) {

    if (document.querySelector('body').clientWidth > window.LARGE_TABLET) {
        if (onload) {
            scrollbar._init();
        }
        var destination = $("#" + elementId).offset().top + scrollbar.scrollTop;
        if (document.querySelector('body').clientWidth > window.LARGE_DESKTOP) {
            scrollbar.scrollTo(0, destination - 100, 1500);
        } else if (document.querySelector('body').clientWidth > window.LARGE_TABLET) {
            scrollbar.scrollTo(0, destination - 50, 1500);
        }

        // window.hideMenu()
    } else {
        var destination = $("#" + elementId).offset().top;
        $(window.SCROLL_EL).animate({
            scrollTop: destination
        }, 1500);
        // window.hideMenu()
    }
    history.pushState("", "", window.location.pathname + window.location.search);
}