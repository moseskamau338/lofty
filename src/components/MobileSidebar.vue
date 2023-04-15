<template>
<button
        @click="isOpen = !isOpen"
        :class="{ 'opacity-100 pointer-events-auto': isOpen }"
        class="md:hidden bg-white/40 hover:bg-white/50 focus:ring-white focus:ring-2 hover:scale-105 mt-5 flex justify-center items-center h-8 w-8 shrink-0 grow-0 rounded-full text-brand-navy">
    <i class="fas fa-bars"></i>
</button>

<aside
        :class="{ '-translate-x-full': !isOpen }"
        class="fixed md:hidden inset-0 w-screen z-10 h-screen bg-slate-400/40 transition duration-100 transform">
    <div class="w-[70%] bg-white text-slate-700 fixed inset-0 h-screen border-r-4 border-navy/50 py-3">
        <div class="px-3 py-2 flex justify-between">
          <img src="/img/logos/logo-wide.png" class="w-[60%]" alt="">
            <button @click="isOpen = !isOpen" class="border font-medium p-1 h-fit rounded text-lg px-3 hover:bg-slate-200">
                <i class="fas fa-close"></i>
            </button>
        </div>
      <nav class="flex flex-col space-y-4 px-20 sm:px-32 border-t">
        <a href="/" class="group text-2xl font-baloo font-bold flex flex-col text-center items-center before:bg-purple before:h-1.5 before:w-[120%] hover:before:w-[130%] before:duration-300 before:transition-all before:text-center before:rounded-full">
            <span class="py-2 group-hover:text-purple transition-all">Home</span>
        </a>

        <a href="/about-us" class="group text-2xl font-baloo font-bold flex flex-col text-center items-center before:bg-success before:h-1.5 before:w-[120%] hover:before:w-[130%] before:duration-300 before:transition-all before:text-center before:rounded-full">
            <span class="py-2 group-hover:text-success transition-all">About Us</span>
        </a>

        <a href="/contact-us" class="group text-2xl font-baloo font-bold flex flex-col text-center items-center before:bg-orange before:h-1.5 before:w-[120%] hover:before:w-[130%] before:duration-300 before:transition-all before:text-center before:rounded-full">
            <span class="py-2 group-hover:text-orange transition-all">Contact Us</span>
        </a>

        <a href="/gallery" class="group text-2xl font-baloo font-bold flex flex-col text-center items-center before:bg-light-red before:h-1.5 before:w-[120%] hover:before:w-[130%] before:duration-300 before:transition-all before:text-center before:rounded-full">
            <span class="py-2 group-hover:text-light-red transition-all">Gallery</span>
        </a>

          <!--<button type="button" class="relative mt-5 text-white bg-light-red hover:bg-light-red font-bold w-fit font-baloo focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-md px-5 py-2 text-center inline-flex items-center-->
          <!-- after:w-[26%] after:h-full after:absolute-->
          <!-- after:bg-slate-800/20 after:right-0 after:rounded-r-md-->
          <!-- hover:after:w-[100%] hover:after:rounded-l-md-->
          <!-- after:transition-all after:duration-700-->
          <!-- ">-->
          <!--    <span class="z-10">Portal</span>-->
          <!--    <svg aria-hidden="true" class="w-5 h-5 ml-8 z-10 -mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>-->
          <!--</button>-->

    </nav>
    </div>
</aside>
</template>

<script setup lang="ts">
  import {ref} from "vue";

  let isOpen = ref(false)
</script>

<style scoped>

</style>