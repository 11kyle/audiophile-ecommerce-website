<template v-if="products">
  <div class="flex flex-col gap-y-28 lg:gap-y-40 lg:px-6 mx-6 lg:mx-auto max-w-6xl">
    <section class="grid place-content-center mt-32 lg:mt-40">
      <div 
        v-for="product in products.data.sort((a, b) => b.id - a.id)" 
        class="group grid grid-cols-1 lg:grid-cols-2 place-items-center mb-28 lg:mb-40 last:mb-0"
      >
        <div class="group-odd:lg:order-2">
          <picture>
            <source media="(min-width:1024px)" :srcset="`http://localhost:1337${product.attributes.categoryImage.desktop.data.attributes.url}`">
            <source media="(min-width:768px)" :srcset="`http://localhost:1337${product.attributes.categoryImage.tablet.data.attributes.url}`">
            <img class="rounded-lg mb-12" :srcset="`http://localhost:1337${product.attributes.categoryImage.mobile.data.attributes.url}`" alt="" />
          </picture>
        </div>
        <div class="group-odd:lg:order-1 lg:justify-self-start group-even:lg:justify-self-end flex flex-col items-center lg:items-start max-w-md">
          <h2 class="uppercase font-bold text-4xl tracking-widest text-center lg:text-left mb-8">{{ product.attributes.name }}</h2>
          <p class="font-medium text-base text-center lg:text-left opacity-50 mb-6">{{ product.attributes.description }}</p>
          <NuxtLink :to="`/speakers/${product.attributes.slug}`" class="grid place-content-center bg-[#D87D4A] uppercase font-bold text-xs tracking-widest text-white w-40 h-12">See Product</NuxtLink>
        </div>
      </div>
    </section>
    <CategorySection />
    <InfoSection />
  </div>
</template>

<script setup>
import { shallowReactive } from 'vue';
definePageMeta({
  layout: "category",
})

useHead({
  title: 'Audiophile - Speakers',
  bodyAttrs: {
    class: 'bg-[#FAFAFA]'
  }
})

// find all products
const { find } = useStrapi4()

const { data } = await useAsyncData(
  'products',
  () => find('products?filters[category][name][$eq]=speakers&populate[categoryImage][populate]=*')
)

// reactive is needed to sort the array
// shallow is used because only the first layer needs to be reactive
const products = shallowReactive(data).value
console.log(products)

// const response = await find('products?filters[category][name][$eq]=speakers&populate[categoryImage][populate]=*')

// console.log(response)
</script>