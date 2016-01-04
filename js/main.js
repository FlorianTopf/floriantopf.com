$(document).ready(function () {
    // init landing image size
	setLandingImageHeight();

	// resize landing image on window resize
	$(window).on('resize', function () {
        setLandingImageHeight()
    });

	function setLandingImageHeight () {
		var wHeight = $(window).height();
		var navHeight = $('.navigation').outerHeight(true);
		var slideHeight = wHeight - navHeight;
		$('.landing-slide').height(slideHeight);
	}
});
