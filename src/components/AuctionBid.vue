<template>
  <div class="flex justify-between mb-4 items-center">
    <div>
      <span class="block font-medium text-indigo-900">Firstname Surname</span>

      <time :datetime="createdAt" class="text-sm text-gray-600">
        {{ createdAtAsWords }}
      </time>
    </div>

    <span class="bg-yellow-300 px-3 py-1 rounded-md">
      {{ bidAsCurrency }}
    </span>
  </div>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    bid: {
      required: true,
      type: Object
    }
  },

  setup ({ bid }) {
    const toTimestamp = date => date // @todo implement this as a filter
    const distanceOfTimeInWords = date => date // @todo implement this as a filter
    const currency = val => val // @todo implement this as a filter

    const createdAt = toTimestamp(bid.createdAt)
    const createdAtAsWords = distanceOfTimeInWords(bid.createdAt)
    const bidAsCurrency = currency(bid.value)

    return {
      bidAsCurrency,
      createdAt,
      createdAtAsWords
    }
  }
})
</script>
