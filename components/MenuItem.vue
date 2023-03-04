<template>
  <li class="uppercase font-bold text-sm tracking-widest text-white"><NuxtLink :to="`/${path}`">{{ title }}</NuxtLink></li>
</template>

<script setup>
defineProps({
  title: {
    type: String
  },
  path: {
    type: String,
    required: true
  }
})
</script>