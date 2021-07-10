<template>
  <div>
    <h1 class="font-semibold text-2xl mb-4">
      Discover
    </h1>

    <AuctionList />
  </div>
</template>

<script>
import { defineComponent, useMeta } from '@nuxtjs/composition-api'

export default defineComponent({
  setup () {
    useMeta({ title: 'Discover' })
  },

  head: {}
})
</script>
