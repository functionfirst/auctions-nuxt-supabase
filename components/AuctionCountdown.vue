<template>
  <h3 v-if="isLive" class="flex flex-col-reverse ml-3 items-end">
    <span class="text-gray-600 text-sm">
      Auction ends
    </span>

    <span class="text-indigo-900 font-medium text-xl">
      {{ endDate }}
    </span>
  </h3>
</template>

<script>
import { computed } from '@nuxtjs/composition-api'

export default {
  props: {
    isLive: {
      default: false,
      required: false,
      type: Boolean
    }
  },

  setup () {
    // <%= distance_of_time_in_words(Time.now, @auction.end_date, true, { compact: true, words_connector: ' ', two_words_connector: ' ', last_word_connector: ' ' }) %>
    const endDate = computed(() => new Date())

    //   distanceOfTimeInWords (value) {
    //     // <%= distance_of_time_in_words(Time.now, @auction.end_date, true, { compact: true, words_connector: ' ', two_words_connector: ' ', last_word_connector: ' ' }) %>
    //     return value
    //   }

    return {
      endDate
    }
  }
}
</script>
