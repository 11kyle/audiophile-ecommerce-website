<template v-if="productReadonly">
  <section class="grid place-content-center mt-16 md:mt-20 lg:mt-40">

    <!-- add pending component -->

    <div v-for="product in productReadonly.data">
      <div class="grid grid-cols-1 md:grid-cols-2 place-items-center mb-28 lg:mb-40">
        <div class="md:justify-self-start">
          <picture>
            <source media="(min-width:1024px)" :srcset="`http://localhost:1337${product.attributes.image.desktop.data.attributes.url}`">
            <source media="(min-width:768px)" :srcset="`http://localhost:1337${product.attributes.image.tablet.data.attributes.url}`">
            <img class="rounded-lg mb-12 md:mb-0 md:max-w-[280px] lg:max-w-full" :srcset="`http://localhost:1337${product.attributes.image.mobile.data.attributes.url}`" alt="" />
          </picture>
        </div>
        <div class="md:justify-self-end md:max-w-[340px]">
          <h2 class="uppercase font-bold text-4xl tracking-widest mb-8">{{ product.attributes.name }}</h2>
          <p class="font-medium text-base opacity-50 mb-6">{{ product.attributes.description }}</p>
          <p class="font-bold text-lg mb-6">$ {{ product.attributes.price }}</p>
          <div class="flex gap-x-4">
            <Counter />
            <button class="bg-[#D87D4A] uppercase font-bold text-xs tracking-widest text-white w-40 h-12">Add to cart</button>
          </div>
        </div>
      </div>

      <div class="lg:flex lg:gap-x-32 mb-28 lg:mb-40">
        <div class="lg:basis-2/3 mb-20 lg:mb-0">
          <h2 class="uppercase font-bold text-2xl lg:text-3xl mb-6 md:mb-8">Features</h2>
          <p class="font-medium text-base opacity-50">{{ product.attributes.features }}</p>
        </div>
        <div class="lg:basis-1/3">
          <h2 class="uppercase font-bold text-2xl lg:text-3xl mb-6 md:mb-8">In the box</h2>
          <ul class="flex flex-col gap-y-2">
            <li 
              v-for="item in product.attributes.includes"
              class="flex gap-x-5 md:gap-x-6 font-medium text-base"
            >
              <span class="text-[#D87D4A]">{{ item.quantity }}x</span>
              <span class="opacity-50">{{ item.item }}</span>
            </li>
          </ul>
        </div>
      </div>

      <!-- 57.246377 -->
      <!-- 40.144928 -->

      <div class="grid md:grid-cols-7 md:grid-flow-row gap-[20px]">
        <div class="md:col-start-1 md:col-span-3">
          <picture>
            <source media="(min-width:1024px)" :srcset="`http://localhost:1337${product.attributes.gallery.first.desktop.data.attributes.url}`">
            <source media="(min-width:768px)" :srcset="`http://localhost:1337${product.attributes.gallery.first.tablet.data.attributes.url}`">
            <img class="rounded-lg" :srcset="`http://localhost:1337${product.attributes.gallery.first.mobile.data.attributes.url}`" alt="" />
          </picture>
        </div>
        <div class="md:order-3 md:col-span-3">
          <picture>
            <source media="(min-width:1024px)" :srcset="`http://localhost:1337${product.attributes.gallery.second.desktop.data.attributes.url}`">
            <source media="(min-width:768px)" :srcset="`http://localhost:1337${product.attributes.gallery.second.tablet.data.attributes.url}`">
            <img class="rounded-lg" :srcset="`http://localhost:1337${product.attributes.gallery.second.mobile.data.attributes.url}`" alt="" />
          </picture>
        </div>
        <div class="md:order-2 md:col-start-4 md:col-span-4 md:row-span-2">
          <picture>
            <source media="(min-width:1024px)" :srcset="`http://localhost:1337${product.attributes.gallery.third.desktop.data.attributes.url}`">
            <source media="(min-width:768px)" :srcset="`http://localhost:1337${product.attributes.gallery.third.tablet.data.attributes.url}`">
            <img class="rounded-lg object-fill h-full" :srcset="`http://localhost:1337${product.attributes.gallery.third.mobile.data.attributes.url}`" alt="" />
          </picture>
        </div>
      </div>

    </div>
    
  </section>
</template>

<script setup>
import { 
  ref, 
  reactive, 
  readonly, 
  shallowReadonly 
} from 'vue';

definePageMeta({
  layout: "product-details",
})

useHead({
  title: '',
  bodyAttrs: {
    class: 'bg-[#F1F1F1]'
  }
})

const route = useRoute()

// find one product
const { find, findOne } = useStrapi4()

const { data, pending, refresh, error } = await useAsyncData(
  'products',
  () => find('products', {
    populate: {
      image: {
        populate: '*'
      },
      gallery: {
        populate: {
          first: {
            populate: '*'
          },
          second: {
            populate: '*'
          },
          third: {
            populate: '*'
          }
        }
      }
    },
    filters: { 
      slug: { 
        $eq: route.params.id 
      }
    }
  })
)

// console.log(reactive(data).value.data[0])
// const product = reactive(data).value.data
// console.log(product)
// const product = shallowReactive(data).value
// console.log(product)
const productReadonly = readonly(data).value
console.log(productReadonly)
// const productShallowReadonly = shallowReadonly(data).value
// console.log(productReadonly)

// const response = await find('products', {
//   populate: {
//     image: {
//       populate: '*'
//     },
//     gallery: {
//       populate: {
//         first: {
//           populate: '*'
//         },
//         second: {
//           populate: '*'
//         },
//         third: {
//           populate: '*'
//         }
//       }
//     }
//   },
//   filters: { 
//     slug: { 
//       $eq: route.params.id 
//     }
//   }
// })

// console.log(response)

// localStorage.setItem('product', JSON.stringify(response))
</script>