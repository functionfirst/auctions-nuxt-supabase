<template>
  <div
    v-if="bids"
    class="mx-4"
  >
    <h3 class="text-indigo-900 mb-2 font-semibold">
      Bidders
    </h3>

    <div
      v-for="(bid, index) in bids"
      :key="index"
      class="flex justify-between mb-4 items-center"
    >
      <div>
        <span class="block font-medium text-indigo-900">Firstname Surname</span>
        <time :datetime="bid.createdAt | toTimestamp" class="text-sm text-gray-600">
          {{ bid.createdAt | distanceOfTimeInWords }}
        </time>
      </div>
      <span class="bg-yellow-300 px-3 py-1 rounded-md">
        {{ bid.value | currency }}
      </span>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    bids: {
      default: () => null,
      required: false,
      type: Array
    }
  },

  setup () {
    // toTimestamp (value) {
    //   return value
    // },

    // toCurrency (value) {
    //   return value
    // },

    // distanceOfTimeInWords (value) {
    //   // <%= distance_of_time_in_words Time.now, bid.created_at %> ago
    //   return value
    // }

  }
}
</script>
