function galleryMasonry(){
    if ( $('#MyGallery').length ){
        $('#MyGallery').imagesLoaded( function() {
          // images have loaded
            // Activate isotope in container
            $("#MyGallery").isotope({
                itemSelector: ".singleGallery",
                layoutMode: 'masonry',
                animationOptions: {
                    duration: 750,
                    easing: 'linear'
                }
            });
        })
    }
}
galleryMasonry();