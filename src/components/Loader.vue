<script>
import {onMounted, ref} from "vue";
export default {
    setup(){
        const loader = ref(null)
        const showing = ref(true)

        onMounted(() => {
            setTimeout(() => {
              showing.value = false
            }, 1000)
        })

        return {loader, showing}
    }
}

</script>
<template>
  <div ref="loader" v-show="showing">
    <span>Lofty Creek</span>
    <div class="preloader-container">
      <div class="dash dash-one"></div>
      <div class="dash dash-two"></div>
      <div class="dash dash-three"></div>
      <div class="dash dash-four"></div>
    </div>
</div>
</template>
