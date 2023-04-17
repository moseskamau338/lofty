<template>
    <template v-if="!loading && photos.length > 0">
      <div v-if="photos.length > 0" class="spotlight-group columns-4 mt-10 space-y-2 px-20">
            <a v-for="image in photos.slice(0,7)" class="spotlight"
               :data-src="image.src">
                <img alt="" class="img-responsive w-full rounded hover:shadow-lg transition-all mb-4"
                     :src="image.thumb"/>
            </a>
        </div>
    </template>

  <div v-else class="flex flex-col items-center justify-center">
      <SvgIcons name="gallery" class="opacity-60 h-32" />
      <h2 v-if="!loading" class="text-xl font-bold text-black font-baloo">No Photos for this gallery yet</h2>
      <span v-else>
        <i class="fad fa-spinner-third animate-spin mr-2"></i>
        <span>Loading....</span>
      </span>
  </div>
</template>

<script>
 import Spotlight from "spotlight.js";
 import "spotlight.js/dist/css/spotlight.min.css";
//css
import {nextTick, onMounted, ref} from "vue";
import SvgIcons from "./SvgIcons.vue";


export default {
    components: {SvgIcons},
    setup() {
        let images = ref([])
        let loading = ref(true)
        let baseUri = import.meta.env.PUBLIC_CMS_URL+'/assets'
        let photos = ref([])

        function handleErrors(response) {
            if (!response.ok) {
                throw Error(response.statusText);
            }
            return response;
        }

        const setupPhotos = () => {
          images.value.forEach((entry) => {
             entry.images.forEach((image) => {
                 photos.value.push({
                     src:`${baseUri}/${image.directus_files_id}?quality=80`,
                     thumb:`${baseUri}/${image.directus_files_id}?fit=cover&width=240&quality=80`,
                 })
             })

          })
        }


        onMounted(async () => {
           await fetch(import.meta.env.PUBLIC_CMS_URL+'/items/home_gallery?fields=id,images.directus_files_id')
            .then(handleErrors)
            .then(async response => {
                images.value = await response.json()
                images.value = images.value.data
                setupPhotos()
            } )
            .catch(error => console.log(error) )
           .finally(() => {
               setTimeout(()=>{
                  //Spotlight.init()
                   loading.value = false
               }, 300)
           })


        })

        return {photos, loading}
    },
};
</script>

<style scoped>

</style>