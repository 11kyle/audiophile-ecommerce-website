<template v-if="response">
  <section class="grid place-content-center mt-32 lg:mt-40">
    <div v-for="item in response.data.reverse()" class="group grid grid-cols-1 lg:grid-cols-2 place-items-center mb-28 lg:mb-40 last:mb-0">
      <div class="group-odd:lg:order-2">
        <picture>
          <source media="(min-width:1024px)" :srcset="`http://localhost:1337${item.attributes.categoryImage.desktop.data.attributes.url}`">
          <source media="(min-width:768px)" :srcset="`http://localhost:1337${item.attributes.categoryImage.tablet.data.attributes.url}`">
          <img class="rounded-lg mb-12" :srcset="`http://localhost:1337${item.attributes.categoryImage.mobile.data.attributes.url}`" alt="" />
        </picture>
      </div>
      <div class="group-odd:lg:order-1 lg:justify-self-start group-even:lg:justify-self-end flex flex-col items-center lg:items-start max-w-md">
        <h2 class="uppercase font-bold text-4xl tracking-widest text-center lg:text-left mb-8">{{ item.attributes.name }}</h2>
        <p class="font-medium text-base text-center lg:text-left opacity-50 mb-6">{{ item.attributes.description }}</p>
        <!-- <button class="bg-[#D87D4A] uppercase font-bold text-xs tracking-widest text-white w-40 h-12">See Product</button> -->
        <NuxtLink :to="`/headphones/${item.attributes.slug}`" class="grid place-content-center bg-[#D87D4A] uppercase font-bold text-xs tracking-widest text-white w-40 h-12">See Product</NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup>
import { toRaw } from 'vue';
import { useProductStore } from '~/store/products'

definePageMeta({
  layout: "category",
})

// const { data, pending, refresh, error } = await useAsyncData(
//   'products', 
//   () => find('products?filters[category][name][$eq]=headphones&populate[categoryImage][populate]=*')
// )

// const { data, pending, refresh, error } = await useAsyncData(
//   'product',
//   () => findOne('products', {
//     populate: {
//       image: {
//         populate: '*'
//       },
//       gallery: {
//         populate: {
//           first: {
//             populate: '*'
//           },
//           second: {
//             populate: '*'
//           },
//           third: {
//             populate: '*'
//           }
//         }
//       }
//     },
//     filters: { 
//       slug: { 
//         $eq: route.params.id 
//       }
//     }
//   })
// )

// console.log(data)

// find all products
const { find } = useStrapi4()
// const response = await find('products?populate=*')
const response = await find('products?filters[category][name][$eq]=headphones&populate[categoryImage][populate]=*')

// const store = useProductStore()
// if (store.getHeadphones.length < 1) {
//   // store.$patch((state) => {
//   //   state.headphones.concat(response.data)
//   //   state.hasChanged = true
//   // })
//   store.$patch({ headphones: response.data })
// }

console.log(response.data)
// console.log(toRaw(store.getHeadphones))
</script>