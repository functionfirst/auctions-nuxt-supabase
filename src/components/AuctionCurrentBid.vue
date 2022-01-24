<template>
  <dl class="flex-1">
    <dt>
      {{ bidText }}

      <span class="inline-block text-sm font-semibold bg-gray-200 rounded-full px-3 py-1">
        {{ bidCount }}
      </span>
    </dt>
    <dd class="font-semibold">
      {{ minimumBidAsCurrency }}
    </dd>
  </dl>
</template>

<script>
import { computed, defineComponent } from '@nuxtjs/composition-api'
import useFilter from '~/composables/useFilter'

export default defineComponent({
  props: {
    bids: {
      default: () => [],
      required: false,
      type: Array
    },

    hasBids: {
      required: true,
      type: Boolean
    },

    minimumBid: {
      required: true,
      type: Number
    }
  },

  setup ({ bids, hasBids, minimumBid }) {
    const { formatCurrency } = useFilter()
    const minimumBidAsCurrency = minimumBid && formatCurrency(minimumBid)

    const bidCount = computed(() => {
      if (bids.length === 1) {
        return '1 bid'
      } else if (bids.length) {
        return `${bids.length} bids`
      }

      return 'No bids'
    })

    const bidText = hasBids ? 'Current Bid' : 'Starting Bid'

    return {
      bidCount,
      bidText,
      minimumBidAsCurrency
    }
  }
})
</script>
