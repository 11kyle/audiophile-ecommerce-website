<template>
  <div>
    <AppHeader />
    <!-- mobile 120px desktop 160px gap between sections -->
    <div class="relative flex flex-col gap-y-28 lg:gap-y-40 lg:px-6 mx-6 lg:mx-auto max-w-6xl">
      <div class="absolute top-4 md:top-6 lg:top-20 left-0 lg:left-6">
        <a 
          class="bg-white font-medium text-base opacity-50" 
          href="" @click.prevent="$router.back()"
        >
          Go Back
        </a>
      </div>
      <slot />
      <CategorySection />
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
    <AppFooter />
  </div>
</template>