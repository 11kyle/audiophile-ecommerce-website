<template>

  <AppHero />
    <div class="lg:px-6 lg:mx-auto max-w-6xl">
      <div class="flex flex-col gap-y-28 lg:gap-y-40 lg:px-6 mx-6 lg:mx-auto max-w-6xl">
        <div class="mt-[120px]">
          <CategorySection />
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 md:gap-x-2 lg:gap-x-7 gap-y-6 md:gap-y-8 lg:gap-y-12">
          <div class="relative col-span-full flex flex-col items-center bg-[#D87D4A] rounded-lg h-[600px] md:h-[720px] lg:h-[560px] overflow-hidden">
            <div class="absolute top-[52px] lg:top-28 left-1/2 -translate-x-1/2 lg:left-28 lg:translate-x-0">
              <picture>
                <source media="(min-width:1024px)" srcset="../assets/home/desktop/image-speaker-zx9.png">
                <source media="(min-width:768px)" srcset="../assets/home/tablet/image-speaker-zx9.png">
                <img class="w-44 md:w-48 lg:w-96" src="../assets/home/mobile/image-speaker-zx9.png" alt="" />
              </picture>
            </div>
            <div class="absolute bottom-14 md:bottom-16 lg:bottom-1/2 lg:translate-y-1/2 lg:right-24 flex flex-col items-center lg:items-start gap-y-6 w-[280px]">
              <h2 class="uppercase font-bold text-4xl md:text-5xl text-white text-center lg:text-left">zx9 Speaker</h2>
              <p class="font-medium text-base text-center lg:text-left text-white opacity-75">Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
              <button class="bg-black uppercase font-bold text-xs tracking-widest text-white w-40 h-12">See Product</button>
            </div>
          </div>
          <div class="relative md:col-span-full">
            <picture>
              <source media="(min-width:1024px)" srcset="../assets/home/desktop/image-speaker-zx7.jpg">
              <source media="(min-width:768px)" srcset="../assets/home/tablet/image-speaker-zx7.jpg">
              <img class="rounded-lg" src="../assets/home/mobile/image-speaker-zx7.jpg" alt="" />
            </picture>
            <div class="absolute top-1/2 -translate-y-1/2 left-6 md:left-16 lg:left-24">
              <h2 class="uppercase">zxy Speaker</h2>
              <button class="bg-transparent border border-black uppercase font-bold text-xs tracking-widest text-black w-40 h-12">See Product</button>
            </div>
          </div>
          <div>
            <picture>
              <source media="(min-width:1024px)" srcset="../assets/home/desktop/image-earphones-yx1.jpg">
              <source media="(min-width:768px)" srcset="../assets/home/tablet/image-earphones-yx1.jpg">
              <img class="rounded-lg" src="../assets/home/mobile/image-earphones-yx1.jpg" alt="" />
            </picture>
          </div>
          <div class="relative bg-[#F1F1F1] rounded-lg min-h-[200px]">
            <div class="absolute top-1/2 -translate-y-1/2 left-6 md:left-16 lg:left-24">
              <h2 class="uppercase">yx1 Earphones</h2>
              <button class="bg-transparent border border-black uppercase font-bold text-xs tracking-widest text-black w-40 h-12">See Product</button>
            </div>
          </div>
        </div>
        
        <div class="grid grid-cols-1 lg:grid-cols-2 place-items-center mb-28">
          <div class="lg:order-2 mb-10">
            <picture>
              <source media="(min-width:1024px)" srcset="../assets/shared/desktop/image-best-gear.jpg">
              <source media="(min-width:768px)" srcset="../assets/shared/tablet/image-best-gear.jpg">
              <img class="rounded" src="../assets/shared/mobile/image-best-gear.jpg" alt="" />
            </picture>
          </div>
          <div class="lg:order-1 lg:justify-self-start max-w-md">
            <h2 class="uppercase font-bold text-3xl tracking-wider text-center lg:text-left mb-8">Bringing you the <span class="text-[#D87D4A]">best</span> audio gear</h2>
            <p class="font-medium text-base text-center lg:text-left opacity-50">Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.</p>
          </div>
        </div>
      </div>
    </div>

</template>

<script setup>
definePageMeta({
  layout: 'default'
})
useHead({
  title: 'Audiophile',
  bodyAttrs: {
    class: 'bg-[#F1F1F1]'
  }
})
</script>