<template>
  <footer class="bg-black">
    <div class="grid grid-cols-1 md:grid-cols-2 px-6 md:px-10 md:py-14 lg:mx-auto max-w-6xl">
      <div class="md:col-span-2 lg:col-span-1 mx-auto my-12 md:mx-0 md:mt-0 lg:mb-0">
        <img src="../assets/shared/desktop/logo.svg" alt="Logo" />
      </div>
      <ul class="md:col-span-2 lg:col-span-1 lg:place-self-center flex flex-col gap-y-4 md:flex-row md:gap-x-6 lg:justify-self-end text-center">
        <li class="uppercase font-bold text-sm tracking-widest text-white hover:text-[#D87D4A]"><NuxtLink to="/">Home</NuxtLink></li>
        <li class="uppercase font-bold text-sm tracking-widest text-white hover:text-[#D87D4A]"><NuxtLink to="/headphones">Headphones</NuxtLink></li>
        <li class="uppercase font-bold text-sm tracking-widest text-white hover:text-[#D87D4A]"><NuxtLink to="/speakers">Speakers</NuxtLink></li>
        <li class="uppercase font-bold text-sm tracking-widest text-white hover:text-[#D87D4A]"><NuxtLink to="/earphones">Earphones</NuxtLink></li>
      </ul>
      <div class="md:col-span-2 lg:col-span-1 text-center md:text-left mt-12 md:mt-8 lg:mt-9">
        <p class="font-medium text-base text-white opacity-50">
          Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we’re open 7 days a week.
        </p>
      </div>
      <div class="lg:order-2 text-center md:text-left mt-12 md:mt-20 lg:mt-14">
        <p class="font-bold text-base text-white opacity-50">Copyright {{ year }}. All Rights Reserved</p>
      </div>
      <div class="lg:order-1 flex justify-center md:justify-end lg:items-end gap-x-4 mt-12 mb-10 md:mt-20 md:mb-0 lg:mt-0">
        <a href="#"><img src="../assets/shared/desktop/icon-facebook.svg" alt="Facebook" /></a>
        <a href="#"><img src="../assets/shared/desktop/icon-twitter.svg" alt="Twitter" /></a>
        <a href="#"><img src="../assets/shared/desktop/icon-instagram.svg" alt="Instagram" /></a>
      </div>
    </div>
  </footer>
</template>

<script setup>
const year = new Date().getFullYear()
</script>