<template>
<div class="columns-4 mt-10" id="animated-thumbnails-gallery">
      <a v-for="image in photos" data-lg-size="1600-1067" class="gallery-item"
         :data-src="image.src">
          <img alt="layers of blue." class="img-responsive w-full"
               :src="image.thumb"/>
      </a>

  </div>
</template>

<script lang="ts">
import lightGallery from "lightgallery";
import lgZoom from "lightgallery/plugins/zoom";
import lgThumbnail from "lightgallery/plugins/thumbnail";
//css
import 'lightgallery/css/lg-zoom.css'
import 'lightgallery/css/lg-thumbnail.css'
import 'lightgallery/css/lightgallery-bundle.min.css'
import {onMounted, ref} from "vue";

export default {
    props:{
      images:{default:[], type: Array},
    },
    setup(props) {
        let baseUri = import.meta.env.PUBLIC_CMS_URL+'/assets'
        let photos = []

        props.images.data.forEach((entry) => {
           entry.images.forEach((image) => {
               photos.push({
                   src:`${baseUri}/${image.directus_files_id}?quality=80`,
                   thumb:`${baseUri}/${image.directus_files_id}?fit=cover&width=240&quality=80`,
               })
           })

        })

        onMounted(() => {
            //justified gallery
            lightGallery(
              document.getElementById("animated-thumbnails-gallery"),
              {
                autoplayFirstVideo: false,
                pager: false,
                galleryId: "nature",
                plugins: [lgZoom, lgThumbnail],
                mobileSettings: {
                  controls: false,
                  showCloseIcon: false,
                  download: false,
                  rotate: false
                }
              }
            );

        })

        return {photos}
    },
};
</script>

<style scoped>

</style>