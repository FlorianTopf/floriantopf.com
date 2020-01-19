$(document).ready(function () {
    // When ready...
    window.addEventListener("load",function() {
        // Set a timeout...
        setTimeout(function(){
            // Hide the address bar!
            window.scrollTo(0, 1);
        }, 0);
    });

    // init landing image size
    setLandingImageHeight();

    // resize landing image on window resize
    $(window).on('resize', setLandingImageHeight);

    function setLandingImageHeight () {
        var wHeight = $(window).height();
        var navHeight = $('.navigation').outerHeight(true);
        var slideHeight = wHeight - navHeight;
        $('.landing-slide').height(slideHeight);
    }
});
