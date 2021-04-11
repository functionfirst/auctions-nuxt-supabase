<template>
  <div class="flex flex-wrap">
    <AuctionCard
      v-for="auction in auctions"
      :key="auction.id"
      :auction="auction"
      class="w-1/3"
    />
  </div>
</template>

<script>
import AuctionCard from '@/components/AuctionCard'

export default {
  components: {
    AuctionCard
  },

  data () {
    return {
      auctions: [],
      error: null
    }
  },

  async fetch () {
    const { data, error } = await this.$supabase
      .from('auctions')
      .select()

    if (error) {
      this.error = error
    }

    this.auctions = data
  }
}
</script>
