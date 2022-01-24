<template>
  <div>
      <div class="max-w-6xl mx-auto my-12 px-4 sm:px-6">
        <div class="flex gap-16">
          <div class="flex-1">
            <AuctionGallery />
          </div>

          <div class="flex-1">
            <h1 class="text-2xl font-semibold text-gray-700">
              {{ auction.name }}
            </h1>

            <hr class="border-t border-gray-200 my-6">

            <div class="grid grid-cols-2 gap-6 text-gray-700">
              <AuctionCurrentBid
                :bids="auction.bids"
                :has-bids="auction.hasBids"
                :minimum-bid="auction.minimumBid"
              />

              <AuctionEstimate
                :estimate-min="auction.estimateMin"
                :estimate-max="auction.estimateMax"
              />
            </div>

            <AuctionCountdown
              :has-ended="auction.hasEnded"
              :start-date="auction.startDate"
              :end-date="auction.endDate"
            />

            <div class="grid gap-4 mt-6">
              <AuctionSignin
                v-show="!session"
                class="col-span-2"
              />

              <AuctionBidForm
                v-show="session && !auction.hasEnded"
                :auction-id="auction.id"
                :minimum-bid="auction.minimumBid"
                class="col-span-2"
              />

              <AuctionWatch :auction-id="auction.id" />
            </div>
          </div>
        </div>
      </div>

      <div class="bg-gray-100">
        <div class="max-w-6xl mx-auto px-4 sm:px-6 py-6">
          <h2 class="text-lg font-semibold border-b border-gray-300 p-2">
            Details
          </h2>

          <div class="py-4">
            <p class="leading-7 text-gray-700">
              {{ auction.description }}
            </p>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import { useRoute, useContext, useFetch, useMeta, ref, useStore, defineComponent } from '@nuxtjs/composition-api'
import AuctionAPIService from '@/services/AuctionAPIService'

export default defineComponent({
  setup () {
    const { state } = useStore()
    const { session } = state
    const route = useRoute()
    const { $supabase } = useContext()
    const { title, meta } = useMeta()
    const id = route.value.params.id
    const error = ref(null)
    const auction = ref(null)
    const auctionAPIService = new AuctionAPIService($supabase)

    // const auction = useAsync(async () => {
    //   const [data, auctionError] = await auctionAPIService.findById(id)

    //   if (auctionError) {
    //     error.value = auctionError.message
    //   } else {
    //     return data
    //   }
    // })

    // title.value = auction.name
    // meta.value = [
    //   {
    //     hid: 'description',
    //     name: 'description',
    //     content: auction.description
    //   }
    // ]

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
      auction,
      session
    }
  },

  head: {}
})
</script>
