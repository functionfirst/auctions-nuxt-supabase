<template>
  <form>
    <div v-show="!confirmPanel" key="initialPanel">
      <base-label for="bidIncrement" class="mb-2">
        Select a bid increment
      </base-label>

      <div class="flex">
        <select
          id="bidIncrement"
          v-model="incrementAmount"
          class="appearance-none border px-3 py-3 w-full text-lg"
        >
          <option
            v-for="increment in increments"
            :key="increment"
            :value="increment"
          >
            <!-- {|f| ["+ £#{('%0.2f' % f)}", f]}), -->
            + {{ formatCurrency(increment) }}
          </option>
        </select>

        <button
          type="button"
          class="bg-indigo-600 hover:bg-indigo-700 px-6 py-4 rounded-r shadow-md text-center text-sm text-white whitespace-nowrap"
          @click="confirmPanel = true"
        >
          Place a Bid

          <!-- <span class="text-2xl font-semibold">
            {{ minimumBidAmount }}
          </span> -->
        </button>
      </div>

      <p class="my-2 text-xs text-indigo-900 xtext-center">
        You will be able confirm this bid in the next step
      </p>
    </div>

    <div
      v-show="confirmPanel"
      key="confirmPanel"
      class=""
    >
      <base-label>
        You are about to place a bid for:
      </base-label>

      <span class="text-2xl font-bold mb-4">
        {{ bidAmount }}
      </span>

      <input type="hidden" name="formInput" value="0">

      <div class="flex flex-col md:flex-row items-center justify-between w-full">
        <button class="w-full bg-green-400 hover:bg-green-500 rounded py-4 flex-1 md:mr-2 mb-4 md:mb-0 text-indigo-900">
          Confirm Bid
        </button>

        <button
          type="button"
          class="w-full border border-indigo-600 text-indigo-600 hover:border-gray-200 hover:bg-indigo-700 rounded py-4 flex-1 md:ml-2"
          @click="confirmPanel = false"
        >
          Cancel
        </button>
      </div>
    </div>
  </form>
</template>

<script lang="ts">
import { computed, ref, defineComponent } from '@nuxtjs/composition-api'
import useFilter from '@/composables/useFilter'
// import useAuction from '@/composables/useAuction'

export default defineComponent({
  props: {
    minimumBid: {
      required: true,
      type: Number
    }
  },

  setup (props) {
    const { formatCurrency } = useFilter()
    // const { increments, auction } = useAuction(props.auctionId)
    const incrementAmount = ref(1) // @todo - replace this with value received via web socket?
    const confirmPanel = ref(false)
    const increments = ref([1, 5, 10, 20, 50, 100, 125, 175, 200, 250, 300, 350, 400, 450, 500, 600, 700, 800, 900, 1000])
    const bidAmount = computed(() => props.minimumBid + incrementAmount.value)

    return {
      bidAmount,
      formatCurrency,
      incrementAmount,
      confirmPanel,
      increments
    }
  }
})
</script>
