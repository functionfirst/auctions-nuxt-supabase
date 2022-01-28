<template>
  <div class="max-w-6xl mx-auto px-4 sm:px-6">
    <h1 class="font-semibold text-2xl mb-4">
      Discover
    </h1>

    <AuctionList :auctions="auctions" />
  </div>
</template>

<script>
import { defineComponent, useMeta, useFetch, ref, useContext } from '@nuxtjs/composition-api'

export default defineComponent({
  setup () {
    const { $services } = useContext()
    const auctions = ref([])
    const err = ref(null)

    useFetch(async () => {
      const { data, error } = await $services.auction.discover()

      if (error) {
        err.value = error.message
      } else {
        auctions.value = data
      }
    })

    useMeta({ title: 'Discover' })

    return {
      auctions
    }
  },

  head: {}
})
</script>
