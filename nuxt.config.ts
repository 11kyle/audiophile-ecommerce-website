// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/strapi'
  ],
  strapi: {
    // the following line is not needed
    // it is the default value
    url: process.env.STRAPI_URL || 'http://localhost:1337',
  },
})
