// $(".video").fancybox({
//     type: "iframe",
// });

let videos = document.querySelectorAll('.video-iframe');
for (let i = 0; i < videos.length; i++) {
    videos[i].addEventListener('mouseover', function () {
        let iframeSrc = this.querySelector('iframe').getAttribute('data-src');
        this.querySelector('iframe').src = iframeSrc;
    });

    videos[i].addEventListener('mouseleave', function () {
        this.querySelector('iframe').src = "";
    });
}

////////////////
// let videosImg = document.querySelectorAll('.video-img');
// for (let i = 0; i < videosImg.length; i++) {
//     videosImg[i].addEventListener('mouseover', function () {
//         let iframeSrc = this.querySelector('iframe').getAttribute('data-src');
//         this.querySelector('iframe').src = iframeSrc;
//     });

//     videosImg[i].addEventListener('mouseleave', function () {
//         this.querySelector('iframe').src = "";
//     });
// }
if (document.querySelector('.video-wrap')) {
    if (document.querySelector('html').clientWidth > window.LARGE_TABLET) {
        var video = $('.objects__video');
        $('.video-wrap').mouseover(function () {
            $(this).addClass('video-wrap--hide');
            $(this).find('img').addClass('hide');
            $(this).find(video).get(0).play();

        });
        $('.video-wrap').mouseout(function () {
            $(this).removeClass('video-wrap--hide');
            $(this).find('img').removeClass('hide');
            $(this).find(video).get(0).pause();
            $(this).find(video).get(0).currentTime = 0;
        });
    }
}

