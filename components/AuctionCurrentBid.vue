<template>
  <div v-if="minimumBidFormatted">
    <h3>
      <span class="block text-gray-600 text-sm uppercase">
        {{ hasBids ? 'Current Bid' : 'Starting Bid' }}
      </span>

      <span class="block text-indigo-900 font-semibold text-2xl">
        {{ minimumBidFormatted }}
      </span>
    </h3>

    <div v-if="hasBids">
      <span>
        {{ bids.length }} Bids
      </span>
    </div>
  </div>
</template>

<script>
import useFilter from '~/composables/useFilter'

export default {
  props: {
    bids: {
      default: () => null,
      required: false,
      type: Array
    },

    minimumBid: {
      required: true,
      type: Number
    }
  },

  setup ({ bids, minimumBid }) {
    const { formatCurrency } = useFilter()
    const hasBids = bids.length > 0
    const minimumBidFormatted = minimumBid && formatCurrency(minimumBid)

    return {
      hasBids,
      minimumBidFormatted
    }
  }
}
</script>
