// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/strapi',
    '@pinia/nuxt'
  ],
  strapi: {
    // the following line is not needed
    // it is the default value
    // documentation has http://localhost:1337
    // gihub fix for refreshing page suggested using http://127.0.0.1:1337
    // this fix works but i do not think its completely correct
    url: process.env.STRAPI_URL || 'http://127.0.0.1:1337',
  },
})
