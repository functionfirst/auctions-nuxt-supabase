// import { defineNuxtConfig } from '@nuxt/bridge'

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Realtime Auctions',
    titleTemplate: '%s - Realtime Auctions',
    htmlAttrs: {
      lang: 'en'
    },
    bodyAttrs: {
      class: 'antialiased'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  srcDir: 'src/',

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['~/plugins/supabase', '~/plugins/auth.client'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxt/typescript-build', // https://typescript.nuxtjs.org/guide/setup
    '@nuxtjs/composition-api/module', // https://composition-api.nuxtjs.org/getting-started/setup
    '@nuxtjs/eslint-module', // https://go.nuxtjs.dev/eslint
    '@nuxtjs/tailwindcss' // https://go.nuxtjs.dev/tailwindcss
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  // axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {}
}
