<template>
  <div class="max-w-6xl mx-auto px-4 sm:px-6">
    <h1 class="font-semibold text-2xl mb-4">
      Discover
    </h1>

    <AuctionList :auctions="auctions" />
  </div>
</template>

<script>
import { useMeta, useFetch, ref } from '@nuxtjs/composition-api'
import AuctionAPIService from '~/repositories/AuctionAPIService'
import Auction from '@/entities/Auction'
import { supabase } from '@/plugins/supabase'

export default {
  setup () {
    const auctions = ref([])
    const err = ref(null)

    useFetch(async () => {
      const auctionAPIService = new AuctionAPIService(supabase)
      const { data, error } = await auctionAPIService.discover()

      if (error) {
        err.value = error.message
      } else {
        auctions.value = data.map(auction => new Auction(auction))
      }
    })

    useMeta({ title: 'Discover' })

    return {
      auctions
    }
  },

  head: {}
}
</script>
