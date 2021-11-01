<template>
  <nav class="hidden justify-start lg:flex space-x-4 text-sm font-medium">
    <nuxt-link
      v-for="(link, index) in links"
      :key="index"
      :to="link.to"
      class="text-gray-500 hover:text-indigo-800 px-3 py-2"
      v-bind="{ ...link.attributes }"
    >
      {{ link.name }}
    </nuxt-link>
  </nav>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  data () {
    return {
      links: [
        {
          to: '/discover',
          name: 'Discover'
        },
        {
          to: '/upcoming',
          name: 'Upcoming'
        },
        {
          to: '/favourites',
          name: 'Favourites'
        },
        {
          to: '/my-auctions',
          name: 'My Auctions',
          attributes: {
            'data-auth-required': true
          }
        }
      ]
    }
  }
})
</script>
