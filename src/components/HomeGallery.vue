<template>
<div v-if="photos.length > 0" class="columns-4 mt-10" id="animated-thumbnails-gallery">
      <a v-for="image in photos" data-lg-size="1600-1067" class="gallery-item"
         :data-src="image.src">
          <img alt="layers of blue." class="img-responsive w-full"
               :src="image.thumb"/>
      </a>

  </div>
  <div v-else class="flex flex-col items-center justify-center">
      <SvgIcons name="gallery" class="opacity-60 h-32" />
      <h2 class="text-xl font-bold text-black font-baloo">No Photos for this gallery yet</h2>
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
import SvgIcons from "./SvgIcons.vue";

export default {
    components: {SvgIcons},
    setup(props) {
        let images = ref([])
        let baseUri = import.meta.env.PUBLIC_CMS_URL+'/assets'
        let photos = ref([])
        function handleErrors(response) {
            if (!response.ok) {
                throw Error(response.statusText);
            }
            return response;
        }

        const setupPhotos = () => {
            console.log('Processing: ', images)
          images.value.forEach((entry) => {
              console.log('Entry imags: ', entry.images)
             entry.images.forEach((image) => {
                 photos.value.push({
                     src:`${baseUri}/${image.directus_files_id}?quality=80`,
                     thumb:`${baseUri}/${image.directus_files_id}?fit=cover&width=240&quality=80`,
                 })
             })

          })
        }

        fetch(import.meta.env.PUBLIC_CMS_URL+'/items/home_gallery?fields=id,images.directus_files_id')
        .then(handleErrors)
        .then(async response => {
            images.value = await response.json()
            images.value = images.value.data
            setupPhotos()
        } )
        .catch(error => console.log(error) );


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