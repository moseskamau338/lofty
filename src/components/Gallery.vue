<template>
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 px-5 mt-10">
        <div id="inline-gallery-container" class="col-span-6 inline-gallery-container relative w-full h-[500px]"></div>
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
        <div class="columns-4 mt-10" id="animated-thumbnails-gallery">
            <!--
                     data-sub-html="<h4>Photo by - <a href='https://unsplash.com/@tobbes_rd' >Tobias Rademacher </a></h4><p> Location - <a href='https://unsplash.com/s/photos/puezgruppe%2C-wolkenstein-in-gr%C3%B6den%2C-s%C3%BCdtirol%2C-italien'>Puezgruppe, Wolkenstein in Gröden, Südtirol, Italien</a>layers of blue.</p>">
                 -->
            <a v-for="image in general_image_urls" data-lg-size="1600-1067" class="gallery-item"
               :data-src="image.src">
                <img alt="layers of blue." class="img-responsive w-full"
                     :src="image.thumb"/>
            </a>

        </div>
    </section>

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
      schoolImages:{default:[], type: Array},
      genImages:{default:[], type: Array},
    },
    setup(props) {
        let baseUri = import.meta.env.PUBLIC_CMS_URL+'/assets'
        let school_image_urls = [], general_image_urls = []
        props.schoolImages.data.forEach((entry) => {
           entry.images.forEach((image) => {
               school_image_urls.push({
                   src:`${baseUri}/${image.directus_files_id}?width=1400&quality=80`,
                   responsive:`${baseUri}/${image.directus_files_id}?fit=cover&width=480&quality=80 480, ${baseUri}/${image.directus_files_id}?fit=cover&width=800&quality=80 800`,
                   thumb:`${baseUri}/${image.directus_files_id}?fit=cover&width=240&height=240&quality=80`,
                   subHtml:'',

               })
           })

        })

        props.genImages.data.forEach((entry) => {
           entry.images.forEach((image) => {
               general_image_urls.push({
                   src:`${baseUri}/${image.directus_files_id}?quality=80`,
                   thumb:`${baseUri}/${image.directus_files_id}?fit=cover&width=240&quality=80`,
               })
           })

        })

        onMounted(() => {
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
                dynamicEl: school_image_urls,

                // Completely optional
                // Adding as the codepen preview is usually smaller
                thumbWidth: 60,
                thumbHeight: "40px",
                thumbMargin: 4
            });
            setTimeout(() => {
                inlineGallery.openGallery();
            }, 200);

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

        return {general_image_urls}
    },
};
</script>

<style>

</style>
