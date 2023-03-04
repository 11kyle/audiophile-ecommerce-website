<template>
  <div class="relative bg-black">
    <div>
      <picture>
        <source media="(min-width:1024px)" srcset="../assets/home/desktop/image-hero.jpg">
        <source media="(min-width:768px)" srcset="../assets/home/tablet/image-header.jpg">
        <img class="rounded-lg" src="../assets/home/mobile/image-header.jpg" alt="" />
      </picture>
    </div>
    <div class="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 lg:-translate-x-[546px] flex flex-col items-center lg:items-start w-[328px] md:w-[380px]">
      <span class="uppercase text-sm tracking-[10px] text-white opacity-50 mb-6">New Product</span>
      <h1 class="uppercase font-bold text-4xl md:text-5xl text-center lg:text-left text-white mb-6">xx99 Mark II Headphones</h1>
      <p class="font-medium text-base text-center lg:text-left text-white opacity-75 mb-7 md:mb-10">Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
      <button class="bg-[#D87D4A] uppercase font-bold text-xs tracking-widest text-white w-40 h-12">See Product</button>
    </div>
  </div>
</template>