<template>
  <div class="flex flex-col h-full">
    <template v-if="$fetchState.error">
      <p>Error while fetching posts: {{ $fetchState.error.message }}</p>
    </template>

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

          <!-- <AuctionWatch :auction-id="auction.id" class="my-2" /> -->

          <div class="flex items-center justify-between">
            <!-- <AuctionCurrentBid :minimum-bid="auction.minimumBid" /> -->
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

<script lang="ts">
import { defineComponent, useRoute, useContext, useFetch, useMeta, ref } from '@nuxtjs/composition-api'
import { IAuction } from '@/types/types'
import AuctionRepository from '@/repositories/AuctionRepository'

export default defineComponent({
  setup () {
    const route = useRoute()
    const { $supabase } = useContext()
    const id = route.value.params.id

    const auction = ref<IAuction|null>(null)
    const error = ref<string|null>(null)
    const loading = ref<boolean>(false)
    const repository = new AuctionRepository($supabase)

    useFetch(async () => {
      loading.value = true

      try {
        auction.value = await repository.findById(id)
        useMeta(() => ({ title: auction?.value?.name }))
      } catch (err) {
        error.value = err.message
      } finally {
        loading.value = false
      }
    })

    // useMeta(() => ({ title: auction.value?.name }))

    return {
      auction
    }
  },

  head: {}
})
</script>
