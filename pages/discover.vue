<template>
  <div>
    <h1 class="font-semibold text-2xl mb-4">
      Discover
    </h1>

    <AuctionList :auctions="auctions" />
  </div>
</template>

<script lang="ts">
import { defineComponent, useMeta, useFetch, ref } from '@nuxtjs/composition-api'
import AuctionRepository from '@/repositories/AuctionRepository'
import { supabase } from '@/plugins/supabase'

export default defineComponent({
  setup () {
    const auctions = ref<any[]|null>([])
    const err = ref<String|null>(null)

    useFetch(async () => {
      const repository = new AuctionRepository(supabase)
      const { data, error } = await repository.discover()

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
