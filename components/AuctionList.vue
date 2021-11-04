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
export default {
  props: {
    auctions: {
      required: true,
      type: Array
    }
  }
}
</script>
