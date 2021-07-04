class scrollApp {

    constructor(animations) {

        this.animations = document.querySelectorAll(animations);
        this.scrolls = this.generateScrolls();

        if (document.querySelector('body').clientWidth < window.LARGE_TABLET) {
            window.addEventListener("touchmove", this.checkScroll.bind(this));
            let mobileDelay = document.querySelectorAll('[data-animation-mobile-delay]');
            for (var i = 0; i < mobileDelay.length; i++) {
                mobileDelay[i].removeAttribute('data-animation-delay');
            }

        }

        if (document.querySelector('body').clientWidth > window.LARGE_TABLET) {
            window.scrollbar.addListener(this.checkScroll.bind(this));
        } else {
            window.addEventListener('scroll', this.checkScroll.bind(this));
        }

        this.checkScroll();
    }
    get nowScrollTop() {
        if (document.querySelector('body').clientWidth > window.LARGE_TABLET) {
            return window.scrollbar.scrollTop;
        } else {
            return document.querySelector(window.SCROLL_EL).scrollTop;
        }
    }



    generateScrolls() {
        let scrolls = [];

        for (var i = 0; i < this.animations.length; i++) {
            this.animations[i].setAttribute('id', 'animations-' + i);

            let scroll = this.animations[i].getBoundingClientRect().top + this.animations[i].getBoundingClientRect().height;
            scroll -= 70; //шаг полосы прокрутки

            // if (this.animations[i].getBoundingClientRect().height > (document.querySelector('body').clientHeight * 0.4)) {
            //     scroll -= this.animations[i].getBoundingClientRect().height - document.querySelector('body').clientHeight * 0.4;
            // }

            // if (this.animations[i].getAttribute('data-animation-type') == "bottom") {
            //     scroll += parseInt(getComputedStyle(this.animations[i]).bottom);
            // }

            // if (this.animations[i].getAttribute('data-animation-type') == "top") {
            //     scroll += parseInt(getComputedStyle(this.animations[i]).top);
            // }

            scrolls[i] = {
                id: 'animations-' + i,
                hide: true,
                scroll: scroll,
            }
        }

        return scrolls;
    }


    checkScroll() {

        for (var i = 0; i < this.scrolls.length; i++) {
            if (this.scrolls[i]['hide']) {
                if (this.scrolls[i]['scroll'] < (this.nowScrollTop + document.querySelector('body').clientHeight)) {
                    this.scrolls[i]['hide'] = false;
                    this.checkAnimation(this.scrolls[i]['id']);
                }
            }
        }
    }

    checkAnimation(elemId) {
        let animation = "",
            animationDuration, animationDelay, animationType, elem;
        elem = document.querySelector('#' + elemId);

        if (elem.hasAttribute('data-animation-deep')) {
            let deep = elem.getAttribute('data-animation-deep');
            let deepParent = elem.closest('.animations').querySelector('[data-animation-time="' + (deep - 1) + '"]');
            if (deepParent.classList.contains('animated')) {
                this.startAnimation(elem);
            } else {

                if (deepParent.offsetParent === null) {

                    if (elem.closest('.animations').querySelector('[data-animation-time2="' + (deep - 1) + '"]')) {

                        elem.closest('.animations').querySelector('[data-animation-time2="' + (deep - 1) + '"]').addEventListener('animationend', function () {
                            this.startAnimation(elem);
                        }.bind(this));

                    }


                } else {

                    deepParent.addEventListener('animationend', function () {
                        this.startAnimation(elem);
                    }.bind(this));

                }

            }

        } else {
            this.startAnimation(elem);
        }
    }



    startAnimation(elem) {

        let animation = "",
            animationDuration, animationDelay, animationType;


        animationType = elem.getAttribute('data-animation-type');

        elem.addEventListener('animationend', function () {
            this.classList.add('animated');
        });

        // if (animationType == "overlay") {
        //     this.animationOverlay(elem);
        //     return;
        // } else if (animationType == "typing") {
        //     this.animationTyping(elem);
        //     return;
        // } else if (animationType == "creative") {
        //     this.animationCreative(elem);
        //     return;
        // } else if (animationType == "clipover") {
        //     this.animationClipover(elem);
        //     return;
        // } else if (animationType == "signature") {
        //     this.animationSignature(elem);
        //     return;
        // }

        animation += animationType;

        if (elem.hasAttribute('data-animation-duration')) {
            animationDuration = elem.getAttribute('data-animation-duration') + "ms";
            animation += " " + animationDuration;
        }

        if (elem.hasAttribute('data-animation-delay')) {
            animationDelay = elem.getAttribute('data-animation-delay') + "ms";
            animation += " linear " + animationDelay;
        }


        elem.style.animation = animation;
    }
}

document.addEventListener("DOMContentLoaded", function () {
    if (document.querySelector('body').clientWidth > window.LARGE_TABLET) {
        setTimeout(function () {
            window.animations1 = new scrollApp('[data-animation-type]');
        }, 4500)
    }
});