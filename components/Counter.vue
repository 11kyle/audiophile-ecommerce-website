<template>
  <div class="flex justify-between items-center bg-[#F1F1F1] w-[120px] h-[48px]">
    <button 
      @click="decrement"
      class="font-bold text-xs opacity-25 w-12 h-12"
    >
      -
    </button>
    <span>{{ count }}</span>
    <button 
      @click="count++"
      class="font-bold text-xs opacity-25 w-12 h-12"
    >
      +
    </button>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const count = ref(0)

function increment() {
  count.value++
}
function decrement() {
  if (count.value > 0) {
    count.value--
  }
}
</script>