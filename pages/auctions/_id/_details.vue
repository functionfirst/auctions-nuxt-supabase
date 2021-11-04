<template>
  <div class="flex flex-col h-full">
    <template v-if="$fetchState.error">
      <p>Error while fetching posts: {{ $fetchState.error.message }}</p>
    </template>

    <div
      v-else-if="auction"
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
    </div>
  </div>
</template>

<script>
import { useRoute, useContext, useFetch, useMeta, reactive, ref } from '@nuxtjs/composition-api'
import AuctionRepository from '~/repositories/AuctionRepository'

export default {
  setup () {
    const route = useRoute()
    const { $supabase } = useContext()
    const id = route.value.params.id

    let auction = reactive({})
    const error = ref(null)
    const loading = ref(false)
    const repository = new AuctionRepository($supabase)

    useFetch(async () => {
      loading.value = true

      try {
        const auct = await repository.findById(id)
        auction = auct
      } catch (err) {
        error.value = err.message
      } finally {
        loading.value = false
      }
    })

    useMeta(() => ({ title: auction.name }))

    return {
      auction
    }
  },

  head: {}
}
</script>
