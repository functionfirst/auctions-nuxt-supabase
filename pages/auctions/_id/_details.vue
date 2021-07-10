<template>
  <div class="flex flex-col h-full">
    <!--
    {{ auction.name }}

    {{ auction.description }}

    {{ auction.createdAt }}
    {{ auction.updatedAt }}
    {{ auction.startDate }}
    {{ auction.endDate }}
    {{ auction.startAmount }}
    -->
    <div class="flex-1 relative">
      <div class="flex gap-4">
        <div class="flex-1">
          <AuctionGallery />
        </div>

        <div class="flex-1">
          <h1 class="text-2xl mb-3 font-semibold text-indigo-900">
            {{ auction.name }}
          </h1>

          <AuctionWatch class="my-2" />

          <div class="flex items-center justify-between">
            <AuctionCurrentBid :minimum-bid="minimumBid" />
            <AuctionCountdown />
          </div>

          <AuctionBidForm :minimum-bid="minimumBid" />
        </div>
      </div>

      <div class="p-5">
        <div class="grid leading-loose text-gray-600">
          <p
            class="truncate"
            data-description-target="text"
          >
            {{ auction.description }}
          </p>
        </div>

        <button
          data-description-target="show"
          data-action="description#showText"
          class="text-yellow-700 hidden"
        >
          More info
        </button>

        <button
          data-description-target="hide"
          data-action="description#hideText"
          class="text-yellow-700 hidden"
        >
          Show less
        </button>
      </div>

      <AuctionBids />
    </div>
  </div>
</template>

<script lang="ts">
export default {
  // data () {
  //   return {
  //     auction: null,
  //     watching: false
  //   }
  // },

  // async fetch () {
  //   const {
  //     data: auction,
  //     error
  //   } = await this.$supabase
  //     .from('auctions')
  //     .select(`
  //       *,
  //       bids (
  //         value
  //       )
  //     `)
  //     .eq('id', this.id)
  //     // .order('bids.value', { ascending: false }) // or is this true
  //     .single()

  //   if (error) {
  //     this.error = error
  //   }

  //   this.auction = auction
  // },

  // head () {
  //   return {
  //     title: this.auction.name
  //   }
  // },

  // computed: {
  //   id () {
  //     return this.$route.params.id
  //   },

  //   highestBid () {
  //     if (this.auction.bids.length > 0) {
  //       const [highestBid] = this.auction.bids
  //       return highestBid.value
  //     }

  //     return 0
  //   },

  //   minimumBid () {
  //     // if (this.auction.bids.length > 0) {
  //     //   const [firstBid] = this.auction.bids
  //     //   return firstBid.value
  //     // }

  //     return this.highestBid || this.auction.startAmount
  //   }
  // },

  // mounted () {
  //   // check if this user is watching the auction
  //   // make an api call to wishlist endpoint using this auction id and read the user id from the req token
  // }
}
</script>
