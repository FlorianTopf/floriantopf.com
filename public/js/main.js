(function (windowRef, documentRef) {
    windowRef.addEventListener('load', setLandingImageHeight);
    windowRef.addEventListener('resize', setLandingImageHeight);

    function setLandingImageHeight () {
        const wHeight = windowRef.innerHeight;
        const navHeight = documentRef.getElementById('js-landing-header').offsetHeight;
        const slideHeight = wHeight - navHeight;
        documentRef.getElementById('js-landing-slide').style.height = slideHeight + 'px';
    }
}(window, document));
