<template>
  <div class="grow relative bg-[#F1F1F1] rounded-lg pt-20 pb-6 mt-16 h-[165px]">
    <!-- image absolute position top middle -->
    <div class="absolute top-0 -translate-y-1/3 left-1/2 -translate-x-1/2">
      <img v-if="title === 'headphones'" src="../assets/shared/desktop/image-category-thumbnail-headphones.png" alt="">
      <img v-if="title === 'earphones'" src="../assets/shared/desktop/image-category-thumbnail-earphones.png" alt="">
      <img v-if="title === 'speakers'" src="../assets/shared/desktop/image-category-thumbnail-speakers.png" alt="">
    </div>
    <!-- Title -->
    <!-- Headphones, Speakers, Earphones -->
    <div>
      <h2 class="uppercase font-bold text-base text-center tracking-wide">{{ title }}</h2>
    </div>
    <!-- Shop -->
    <div class="mt-4">
      <NuxtLink :to="`/${title.toLowerCase()}`" class="flex items-center justify-center gap-x-3">
        <span class="uppercase font-bold text-sm tracking-wide opacity-50">Shop</span>
        <span>
          <img src="../assets/shared/desktop/icon-arrow-right.svg" alt="Right arrow" />
        </span>
      </NuxtLink>
      <!-- <button class="flex items-center gap-x-3 mx-auto">
        <span class="uppercase font-bold text-sm tracking-wide opacity-50">Shop</span>
        <span>
          <img src="../assets/shared/desktop/icon-arrow-right.svg" alt="Right arrow" />
        </span>
      </button> -->
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
  },
  imgSrc: {
    type: String,
  }
})
</script>