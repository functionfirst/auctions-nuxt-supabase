<template>
  <form class="bg-gray-100 p-4 rounded-sm shadow-sm">
    <div v-show="!confirmPanel">
      <BaseLabel for="bidIncrement">
        Select a bid increment
      </BaseLabel>

      <div class="flex gap-2">
        <select
          id="bidIncrement"
          v-model="incrementAmount"
          class="appearance-none border px-3 w-full rounded-sm h-12"
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
          class="bg-indigo-600 hover:bg-indigo-700 px-6 h-12 rounded-sm shadow-md text-sm text-white whitespace-nowrap"
          @click="confirmPanel = true"
        >
          Place a Bid
        </button>
      </div>

      <p class="mt-2 text-xs text-indigo-900 xtext-center">
        You will be able confirm your bid in the next step
      </p>
    </div>

    <div
      v-show="confirmPanel"
      key="confirmPanel"
      class=""
    >
      <BaseLabel>
        You are about to place a bid for:
      </BaseLabel>

      <div class="flex items-stretch gap-2">
        <div class="flex items-center text-lg flex-1 font-semibold h-12">
          {{ bidAmount }}
        </div>

        <button
          type="button"
          xclass="py-0 border border-indigo-600 text-indigo-600 hover:border-gray-200 hover:bg-indigo-700 rounded-sm px-3"
          class="bg-gray-600 hover:bg-gray-700 px-6 h-12 rounded-sm shadow-md text-center text-sm text-white"
          @click="confirmPanel = false"
        >
          Cancel
        </button>

        <button class="bg-indigo-600 hover:bg-indigo-700 px-6 h-12 rounded-sm shadow-md text-sm text-white">
          Confirm Bid
        </button>
      </div>

      <input
        type="hidden"
        name="formInput"
        value="0"
      >
    </div>
  </form>
</template>

<script>
import { defineComponent, computed, ref } from '@nuxtjs/composition-api'
import useFilter from '~/composables/useFilter'
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
    const bidAmount = computed(() => formatCurrency(props.minimumBid + incrementAmount.value))

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
