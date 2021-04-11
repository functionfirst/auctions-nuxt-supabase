<template>
  <div>
    <h1 class="font-semibold text-2xl mb-4">
      Most Recent Auctions
    </h1>

    <AuctionList />
  </div>
</template>

<script>
import AuctionList from '@/components/AuctionList'

export default {
  components: {
    AuctionList
  }
}
</script>
