<template v-if="products">
  <div class="flex flex-col gap-y-28 lg:gap-y-40 lg:px-6 mx-6 lg:mx-auto max-w-6xl">
    <section class="grid place-content-center mt-32 lg:mt-40">
      <div v-for="product in products.data.sort((a,b) => b.id - a.id)" class="group grid grid-cols-1 lg:grid-cols-2 place-items-center mb-28 lg:mb-40 last:mb-0">
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
          <!-- <button class="bg-[#D87D4A] uppercase font-bold text-xs tracking-widest text-white w-40 h-12">See Product</button> -->
          <NuxtLink :to="`/headphones/${product.attributes.slug}`" class="grid place-content-center bg-[#D87D4A] uppercase font-bold text-xs tracking-widest text-white w-40 h-12">See Product</NuxtLink>
        </div>
      </div>
    </section>
    <CategorySection />
    <InfoSection />
  </div>
</template>

<script setup>
import { shallowReactive } from 'vue';
import { useProductStore } from '~/store/products'

definePageMeta({
  layout: "category",
})

useHead({
  title: 'Audiophile - Headphones',
  bodyAttrs: {
    class: 'bg-[#FAFAFA]'
  }
})

const { find } = useStrapi4()
const route = useRoute()

// const { data, pending, refresh, error } = await useAsyncData(
//   'products',
//   () => find('products', {
//     filters: { 
//       category: {
//         name: {
//           $eq: route.params.id 
//         }
//       }
//     },
//     populate: {
//       categoryImage: {
//         populate: '*'
//       },
//       category: {
//         namd: {
//           populate: '*'
//         }
//       }
//     },
    
//   })
// )

// console.log(data)

const { data } = await useAsyncData(
  'category',
  () => find('categories', {
    filters: { 
      name: {
        $eq: 'headphones' // this could be a variable. Tried route.params.id but didn't work
      }
    },
    populate: [
      'products',
      'products.categoryImage',
      'products.categoryImage.desktop',
      'products.categoryImage.tablet',
      'products.categoryImage.mobile'
    ],
  })
)

const category = shallowReactive(data).value.data[0]
const products = category.attributes.products

console.log(products)

// find all products

// const response = await find('products?populate=*')
// const response = await find('products?filters[category][name][$eq]=headphones&populate[categoryImage][populate]=*')

// const store = useProductStore()
// if (store.getHeadphones.length < 1) {
//   // store.$patch((state) => {
//   //   state.headphones.concat(response.data)
//   //   state.hasChanged = true
//   // })
//   store.$patch({ headphones: response.data })
// }

// console.log(response.data)
</script>