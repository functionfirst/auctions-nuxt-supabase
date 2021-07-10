<template>
  <div>
    <h3>
      <span class="block text-gray-600 text-sm uppercase">
        {{ bids ? 'Current Bid' : 'Starting Bid' }}
      </span>

      <span class="block text-indigo-900 font-semibold text-2xl">
        {{ minimumBid | formatCurrency }}
      </span>
    </h3>

    <!--
      Display number of bids with alink to bid
      <span>
        0 Bids
      </span>
    -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
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

  setup () {
    return {
      formatCurrency: ''
    }
  }
})
</script>
