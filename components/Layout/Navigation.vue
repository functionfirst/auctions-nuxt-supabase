<template>
  <nav class="hidden justify-start lg:flex space-x-10 uppercase text-xs font-medium">
    <nuxt-link
      v-for="(link, index) in links"
      :key="index"
      :to="link.to"
      class="text-gray-500 hover:text-indigo-800"
    >
      {{ link.name }}
    </nuxt-link>
  </nav>
</template>

<script>
export default {
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
          name: 'My Auctions'
        }
      ]
    }
  }
}
</script>
