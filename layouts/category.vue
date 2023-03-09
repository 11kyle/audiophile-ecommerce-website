<template>
  <div>
    <AppHeader />
    <div class="bg-black py-8 md:py-24">
      <h1 class="uppercase font-bold text-2xl tracking-widest text-center text-white">{{ $router.currentRoute.value.path.slice(1) }}</h1>
    </div>
    <slot />
    <AppFooter />
  </div>
</template>