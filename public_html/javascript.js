$('.carousel').carousel()

// function switchStyle() {
//     if (document.getElementById('styleSwitch').checked) {
//         document.getElementById('gallery').classList.add("custom");
//         document.getElementById('exampleModal').classList.add("custom");
//     } else {
//         document.getElementById('gallery').classList.remove("custom");
//         document.getElementById('exampleModal').classList.remove("custom");
//     }
// }


// $(document).ready(function() {
//     $("#lightGallery").lightGallery();
// });
//
// $("#lightGallery").lightGallery({
//     mode: 'lg-slide',
//
//     // Ex : 'ease'
//     cssEasing: 'ease',
//
//     //'for jquery animation'
//     easing: 'linear',
//     speed: 600,
//     height: '100%',
//     width: '100%',
//     addClass: '',
//     startClass: 'lg-start-zoom',
//     backdropDuration: 150,
//
//     // Set 0, if u don't want to hide the controls
//     hideBarsDelay: 6000,
//
//     useLeft: false,
//
//     // aria-labelledby attribute fot gallery
//     ariaLabelledby: '',
//
//     //aria-describedby attribute for gallery
//     ariaDescribedby: '',
//
//     closable: true,
//     loop: true,
//     escKey: true,
//     keyPress: true,
//     controls: true,
//     slideEndAnimatoin: true,
//     hideControlOnEnd: false,
//     mousewheel: true,
//
//     getCaptionFromTitleOrAlt: true,
//
//     // .lg-item || '.lg-sub-html'
//     appendSubHtmlTo: '.lg-sub-html',
//
//     subHtmlSelectorRelative: false,
//
//     /**
//      * @desc number of preload slides
//      * will execute only after the current slide is fully loaded.
//      *
//      * @ex you clicked on 4th image and if preload = 1 then 3rd slide and 5th
//      * slide will be loaded in the background after the 4th slide is fully loaded..
//      * if preload is 2 then 2nd 3rd 5th 6th slides will be preloaded.. ... ...
//      *
//      */
//     preload: 1,
//     showAfterLoad: true,
//     selector: '',
//     selectWithin: '',
//     nextHtml: '',
//     prevHtml: '',
//
//     // 0, 1
//     index: false,
//
//     iframeMaxWidth: '100%',
//
//     download: true,
//     counter: true,
//     appendCounterTo: '.lg-toolbar',
//
//     swipeThreshold: 50,
//     enableSwipe: true,
//     enableDrag: true,
//
//     dynamic: false,
//     dynamicEl: [],
//     galleryId: 1,
//     supportLegacyBrowser: true
// });