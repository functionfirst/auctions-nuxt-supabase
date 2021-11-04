<template>
  <nav class="hidden justify-start lg:flex space-x-4 text-sm font-medium">
    <nuxt-link
      to="/discover"
      class="text-gray-500 hover:text-indigo-800 px-3 py-2"
    >
      Discover
    </nuxt-link>

    <nuxt-link
      to="/upcoming"
      class="text-gray-500 hover:text-indigo-800 px-3 py-2"
    >
      Upcoming
    </nuxt-link>

    <nuxt-link
      to="/favourites"
      class="text-gray-500 hover:text-indigo-800 px-3 py-2"
    >
      Favourites
    </nuxt-link>

    <nuxt-link
      v-show="session"
      to="/my-auctions"
      class="text-gray-500 hover:text-indigo-800 px-3 py-2"
    >
      My Auctions
    </nuxt-link>
  </nav>
</template>

<script>
import { useStore } from '@nuxtjs/composition-api'

export default {
  setup () {
    const { state } = useStore()
    const { session } = state

    return {
      session
    }
  }
}
</script>
