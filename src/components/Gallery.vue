<template>
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 px-5 mt-10">
        <div v-if="school_image_urls.length > 0" id="inline-gallery-container" class="col-span-6 inline-gallery-container relative w-full h-[500px]"></div>
        <div v-else class="col-span-6 flex flex-col items-center justify-center">
          <SvgIcons name="gallery" class="opacity-60 h-32" />
          <h2 class="text-xl font-bold text-black font-baloo">No Photos for this gallery yet</h2>
        </div>

        <div class="col-span-6 px-3 py-10">
            <h1 class="text-4xl font-bold font-baloo text-black">Our School</h1>
            <p>Lofty Creek Christian School is an integrated Edu-care center for children from all walks of life aged between 2 and 5 years. We are located along Wambaa road, 0.5km off the Nairobi- Nakuru Highway at Muthiga’s Munyua road. Designed with kids in mind, LCCS observes very high standards of learning with a holistic child development approach. Given the varied capabilities of our children, we have integrated Competency-Based and Montessori Curricula, all with a Christian worldview.</p>
        </div>
    </div>

    <section class="py-20 px-5 lg:px-32">
            <div class="text-center">
                <h1 class="text-4xl font-bold font-baloo text-brown">More photos</h1>
                <p>Explore all that the children do daily</p>
            </div>
            <template v-if="general_image_urls.length > 0">
                <div v-if="general_image_urls.length > 0" class="spotlight-group columns-4 mt-10 space-y-2 px-20">
                    <a v-for="image in general_image_urls.slice(0,7)" class="spotlight"
                       :data-src="image.src">
                        <img alt="" class="img-responsive w-full rounded hover:shadow-lg transition-all mb-4"
                             :src="image.thumb"/>
                    </a>
                </div>
            </template>
            <div v-else class="columns-12 mt-10 flex flex-col items-center justify-center">
              <SvgIcons name="gallery" class="opacity-60 h-32" />
              <h2 class="text-xl font-bold text-black font-baloo">No Photos for this gallery yet</h2>
            </div>
        </section>

</template>

<script>
import lightGallery from "lightgallery";
import lgZoom from "lightgallery/plugins/zoom";
import lgThumbnail from "lightgallery/plugins/thumbnail";
 import Spotlight from "spotlight.js";
//css
import 'lightgallery/css/lg-zoom.css'
import 'lightgallery/css/lg-thumbnail.css'
import 'lightgallery/css/lightgallery-bundle.min.css'
 import "spotlight.js/dist/css/spotlight.min.css";

import {onMounted, ref, watch} from "vue";
import SvgIcons from "./SvgIcons.vue";

export default {
    components: {SvgIcons},
    setup() {
        let baseUri = import.meta.env.PUBLIC_CMS_URL+'/assets'
        let school_image_urls = ref([]), general_image_urls = ref([])

        let genImages = ref([]), schoolImages = ref([])

        function handleErrors(response) {
            if (!response.ok) {
                throw Error(response.statusText);
            }
            return response;
        }

        function processGenImages(){
            genImages.value.data.forEach((entry) => {
               entry.images.forEach((image) => {
                   general_image_urls.value.push({
                       src:`${baseUri}/${image.directus_files_id}?quality=80`,
                       thumb:`${baseUri}/${image.directus_files_id}?quality=80`,
                   })
               })

            })
        }

        function processSchoolImages(){
            schoolImages.value.data.forEach((entry) => {
               entry.images.forEach((image) => {
                   school_image_urls.value.push({
                       src:`${baseUri}/${image.directus_files_id}?width=1400&quality=80`,
                       responsive:`${baseUri}/${image.directus_files_id}?fit=cover&width=480&quality=80 480, ${baseUri}/${image.directus_files_id}?fit=cover&width=800&quality=80 800`,
                       thumb:`${baseUri}/${image.directus_files_id}?fit=cover&width=240&height=240&quality=80`,
                       subHtml:'',

                   })
               })

            })

        }

        function setupSchoolGallery(){
            const $lgContainer = document.getElementById("inline-gallery-container");

                const inlineGallery = lightGallery($lgContainer, {
                    container: $lgContainer,
                    dynamic: true,
                    // Turn off hash plugin in case if you are using it
                    // as we don't want to change the url on slide change
                    hash: false,
                    // Do not allow users to close the gallery
                    closable: false,
                    // Add maximize icon to enlarge the gallery
                    showMaximizeIcon: true,
                    // Append caption inside the slide item
                    // to apply some animation for the captions (Optional)
                    appendSubHtmlTo: ".lg-item",
                    // Delay slide transition to complete captions animations
                    // before navigating to different slides (Optional)
                    // You can find caption animation demo on the captions demo page
                    slideDelay: 400,
                    plugins: [lgZoom, lgThumbnail],
                    dynamicEl: school_image_urls.value,

                    // Completely optional
                    // Adding as the codepen preview is usually smaller
                    thumbWidth: 60,
                    thumbHeight: "40px",
                    thumbMargin: 4
                });
                setTimeout(() => {
                    inlineGallery.openGallery();
                }, 200);
        }



        onMounted(() => {
            fetch(import.meta.env.PUBLIC_CMS_URL+'/items/general_gallery?fields=id,images.directus_files_id')
                .then(handleErrors)
                .then(async response => {
                    genImages.value = await response.json()
                    processGenImages()
                } )
                .catch(error => console.log(error) );


            fetch(import.meta.env.PUBLIC_CMS_URL+'/items/school_photos?fields=id,images.directus_files_id')
                .then(handleErrors)
                .then(async response => {
                    schoolImages.value = await response.json()
                    processSchoolImages()
                } )
                .catch(error => console.log(error) );

            setTimeout(() => setupSchoolGallery(), 300)

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

        return {general_image_urls, school_image_urls}
    },
};
</script>

<style>

</style>
