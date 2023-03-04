<template v-if="response">
  <section class="grid place-content-center mt-32 lg:mt-40">
    <div v-for="item in response.data.reverse()" class="group grid grid-cols-1 lg:grid-cols-2 place-items-center mb-28 lg:mb-40 last:mb-0">
      <div class="group-odd:lg:order-2">
        <picture>
          <source media="(min-width:1024px)" :srcset="`http://localhost:1337${item.attributes.image.desktop.data.attributes.url}`">
          <source media="(min-width:768px)" :srcset="`http://localhost:1337${item.attributes.image.tablet.data.attributes.url}`">
          <img class="rounded-lg mb-12" :srcset="`http://localhost:1337${item.attributes.image.mobile.data.attributes.url}`" alt="" />
        </picture>
      </div>
      <div class="group-odd:lg:order-1 lg:justify-self-start group-even:lg:justify-self-end max-w-md">
        <h2 class="uppercase font-bold text-4xl tracking-widest text-center lg:text-left mb-8">{{ item.attributes.name }}</h2>
        <p class="font-medium text-base text-center lg:text-left opacity-50 mb-6">{{ item.attributes.description }}</p>
        <button class="bg-[#D87D4A] uppercase font-bold text-xs tracking-widest text-white w-40 h-12">See Product</button>
      </div>
    </div>
  </section>
</template>

<script setup>
definePageMeta({
  layout: "category",
})

// loop through images and use image with name including mobile and product
// image in item.attributes.image
// image.attributes.name.includes("product")
// url

// find all products
const { find } = useStrapi()
// const response = await find('products?populate=*')
const response = await find('products?filters[category][name][$eq]=earphones&populate[image][populate]=*')
//  products?populate=*
// products?filters[attributes][category][attributes][name][$eq]=headphones
// const headphones = response.filter(
//   (el) => el.attributes.category.data.attributes.name === 'headphones'
// )

console.log(response)
// console.log(headphones)

// find one product
// const { findOne } = useStrapi()
// const response2 = await findOne('products', 1)

// console.log(response2)
</script>