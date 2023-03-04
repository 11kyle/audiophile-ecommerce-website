<template>
  <nav class="bg-black border-b border-white border-opacity-10">
    <div class="flex items-center justify-between md:justify-start lg:justify-between px-6 py-8 mx-auto max-w-6xl">
      <div class="lg:hidden md:mr-10">
        <img src="../assets/shared/tablet/icon-hamburger.svg" alt="Menu" />
      </div>
      <div>
        <img src="../assets/shared/desktop/logo.svg" alt="Logo" />
      </div>
      <div class="hidden lg:flex">
        <ul class="md:col-span-2 lg:col-span-1 lg:place-self-center flex flex-col gap-y-4 md:flex-row md:gap-x-9 lg:justify-self-end text-center">
          <li class="uppercase font-bold text-sm tracking-widest text-white hover:text-[#D87D4A]"><NuxtLink to="/">Home</NuxtLink></li>
          <li class="uppercase font-bold text-sm tracking-widest text-white hover:text-[#D87D4A]"><NuxtLink to="/headphones">Headphones</NuxtLink></li>
          <li class="uppercase font-bold text-sm tracking-widest text-white hover:text-[#D87D4A]"><NuxtLink to="/speakers">Speakers</NuxtLink></li>
          <li class="uppercase font-bold text-sm tracking-widest text-white hover:text-[#D87D4A]"><NuxtLink to="/earphones">Earphones</NuxtLink></li>
        </ul>
      </div>
      <div class="md:ml-auto lg:ml-0">
        <img src="../assets/shared/desktop/icon-cart.svg" alt="Shopping Cart" />
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'

const showMenu = ref(false)

const toggleMenu = () => {
  showMenu.value = !showMenu.value
}
</script>