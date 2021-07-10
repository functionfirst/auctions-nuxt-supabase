<template>
  <div class="grid gap-4">
    <AuctionCard
      v-for="auction in auctions"
      :key="auction.id"
      :auction="auction"
      class="w-1/3"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, useFetch, useContext, ref } from '@nuxtjs/composition-api'

type Auction = {

}

export default defineComponent({
  setup () {
    const { $supabase } = useContext()
    const err = ref<string|null>(null)
    const auctions = ref<Auction>([])

    useFetch(async () => {
      const { data, error } = await $supabase
        .from('auctions')
        .select('id, name, slug')
        .eq('enabled', true)
        .range(0, 9)

      if (error) {
        err.value = error.message
      }

      auctions.value = data
    })

    return {
      auctions,
      error: err
    }
  }
})
</script>
