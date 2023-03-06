<template v-if="response">
  <section class="grid place-content-center mt-16 md:mt-20 lg:mt-40">

    <div v-for="product in response.data">
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
          <p>${{ product.attributes.price }}</p>
          <button class="bg-[#D87D4A] uppercase font-bold text-xs tracking-widest text-white w-40 h-12">See Product</button>
        </div>
      </div>

      <div class="lg:flex lg:gap-x-32">
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
    </div>
    <!-- <div class="lg:gird lg:grid-rows-2">
      <picture>
        <source media="(min-width:1024px)" :srcset="`http://localhost:1337${product.attributes.gallery.first.desktop.data.attributes.url}`">
        <source media="(min-width:768px)" :srcset="`http://localhost:1337${product.attributes.gallery.first.tablet.data.attributes.url}`">
        <img class="rounded-lg mb-12" :srcset="`http://localhost:1337${product.attributes.gallery.first.mobile.data.attributes.url}`" alt="" />
      </picture>
    </div> -->
  </section>
</template>

<script setup>
definePageMeta({
  layout: "product-details",
})

// {{ $router.currentRoute.value.path.slice(1) }}

const route = useRoute()
const id = route.params.id

console.log(id)

// find all products
const { find } = useStrapi()
// const response = await find('products?populate=*')
const response = await find(`products?filters[slug][$eq]=${id}&populate[image][populate]=*`)

console.log(response)
</script>