<template>
  <section>
    <div class="lg:px-6 lg:mx-auto max-w-6xl">
      <div class="bg-white rounded-lg px-6 py-8">
        <h1 class="uppercase font-bold text-2xl lg:text-3xl mb-8 md:mb-10">Checkout</h1>
        <form>

          <fieldset class="mb-8">
            <legend class="uppercase font-bold text-sm text-[#D87D4A] mb-6">Billing Details</legend>
            <div class="grid md:grid-cols-2 gap-x-4 gap-y-6">
              <div class="flex flex-col gap-y-2">
                <label class="font-bold text-xs tracking-tighter" for="name">Name</label>
                <input class="font-bold text-sm border border-[#CFCFCF] rounded-lg h-14 px-6" type="text" name="name" id="name">
              </div>
              <div class="flex flex-col gap-y-2">
                <label class="font-bold text-xs tracking-tighter" for="email">Email Address</label>
                <input class="font-bold text-sm border border-[#CFCFCF] rounded-lg h-14 px-6" type="email" name="email" id="email">
              </div>
              <div class="flex flex-col gap-y-2">
                <label class="font-bold text-xs tracking-tighter" for="phone">Phone Number</label>
                <input class="font-bold text-sm border border-[#CFCFCF] rounded-lg h-14 px-6" type="tel" name="phone" id="phone">
              </div>
            </div>
            
          </fieldset>
          
          <fieldset class="mb-8">
            <legend class="uppercase font-bold text-sm text-[#D87D4A] mb-6">Shipping Info</legend>
            <div class="grid md:grid-cols-2 gap-x-4 gap-y-6">
              <div class="md:col-span-2 flex flex-col gap-y-2">
                <label class="font-bold text-xs tracking-tighter" for="address">Your Address</label>
                <input class="font-bold text-sm border border-[#CFCFCF] rounded-lg h-14 px-6" type="text" name="address" id="address">
              </div>
              <div class="flex flex-col gap-y-2">
                <label class="font-bold text-xs tracking-tighter" for="zip">ZIP Code</label>
                <input class="font-bold text-sm border border-[#CFCFCF] rounded-lg h-14 px-6" type="number" name="zip" id="zip">
              </div>
              <div class="flex flex-col gap-y-2">
                <label class="font-bold text-xs tracking-tighter" for="city">City</label>
                <input class="font-bold text-sm border border-[#CFCFCF] rounded-lg h-14 px-6" type="text" name="city" id="city">
              </div>
              <div class="flex flex-col gap-y-2">
                <label class="font-bold text-xs tracking-tighter" for="country">Country</label>
                <input class="font-bold text-sm border border-[#CFCFCF] rounded-lg h-14 px-6" type="text" name="country" id="country">
              </div>
            </div>
          </fieldset>
          

          <h3 class="uppercase font-bold text-sm text-[#D87D4A]">Payment Method</h3>


        </form>
      </div>
      <div class="bg-white rounded-lg px-6 py-8">
        <h2 class="uppercase font-bold">Summary</h2>
      </div>
    </div>
  </section>
</template>

<script setup>
definePageMeta({
  layout: 'default'
})
useHead({
  title: 'Audiophile',
  bodyAttrs: {
    class: 'bg-[#FAFAFA]'
  }
})
</script>