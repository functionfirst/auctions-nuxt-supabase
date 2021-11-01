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

<script>
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    auctions: {
      required: true,
      type: Array
    }
  }
})
</script>
