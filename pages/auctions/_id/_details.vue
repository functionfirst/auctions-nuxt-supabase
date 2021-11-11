<template>
  <div class="flex flex-col h-full">
    <p v-if="$fetchState.pending">
      Fetching auction details...
    </p>

    <p v-else-if="$fetchState.error">
      Error while fetching auction details:
      {{ $fetchState.error.message }}
    </p>

    <div
      v-else
      class="flex-1 relative"
    >
      <div class="flex gap-4">
        <div class="flex-1">
          <AuctionGallery />
        </div>

        <div class="flex-1">
          <h1 class="text-2xl mb-3 font-semibold text-indigo-900">
            {{ auction.name }}
          </h1>

          <AuctionWatch
            v-if="auction.id"
            :auction-id="auction.id"
            class="my-2"
          />

          <div class="flex items-center justify-between">
            <!-- <AuctionCurrentBid
              :bids="auction.bids"
              :minimum-bid="auction.minimumBid"
            /> -->

            <AuctionCountdown />
          </div>

          <!-- <AuctionBidForm :minimum-bid="auction.minimumBid" /> -->
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
    </template>
  </div>
</template>

<script>
import { useRoute, useContext, useFetch, useMeta, ref, defineComponent } from '@nuxtjs/composition-api'
import AuctionAPIService from '~/repositories/AuctionAPIService'

export default defineComponent({
  setup () {
    const route = useRoute()
    const { $supabase } = useContext()
    const { title, meta } = useMeta()
    const id = route.value.params.id
    const error = ref(null)
    const auction = ref(null)
    const auctionAPIService = new AuctionAPIService($supabase)

    useFetch(async () => {
      const [data, auctionError] = await auctionAPIService.findById(id)

      if (auctionError) {
        error.value = auctionError.message
      } else {
        title.value = data.name
        auction.value = data
        meta.value = [
          {
            hid: 'description',
            name: 'description',
            content: data.description
          }
        ]
      }
    })

    return {
      auction
    }
  },

  head: {}
})
</script>
