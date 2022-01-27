<template>
  <form
    class="bg-gray-100 p-4 rounded-sm"
    @submit.prevent="submit"
  >
    <BaseLabel for="bidAmount">
      Enter a bid amount
    </BaseLabel>

    <div class="flex items-stretch relative">
      <label
        for="bidAmount"
        class="cursor-pointer flex items-center px-4 absolute left-0 inset-y-0"
      >
        £
      </label>

      <BaseInput
        id="bidAmount"
        v-model="bidAmount"
        :placeholder="`Minium bid amount ${minBid}`"
        :min="minimumBid + 1"
        class="rounded-none pl-10"
        type="number"
        required
      />

      <button class="px-6 py-2 rounded-r-sm shadow-md text-sm whitespace-nowrap bg-indigo-600 text-white hover:bg-indigo-700">
        <LoadingState v-bind="{ loading }">
          Place a Bid
        </LoadingState>
      </button>
    </div>

    <ErrorAlert
      class="mt-2"
      :message="error"
    />

    <SuccessAlert
      class="mt-2"
      :message="success"
    />
  </form>
</template>

<script>
import { computed, defineComponent, useStore, ref, useContext, onDeactivated } from '@nuxtjs/composition-api'
import useFilter from '~/composables/useFilter'
// import useAuction from '@/composables/useAuction'

export default defineComponent({
  props: {
    auctionId: {
      required: true,
      type: Number
    },

    minimumBid: {
      required: true,
      type: Number
    }
  },

  setup ({ auctionId, minimumBid }) {
    const { formatCurrency } = useFilter()
    const loading = ref(false)
    const error = ref(null)
    const success = ref(null)
    const bidAmount = ref('')
    const { state } = useStore()
    const { session } = state

    const { $supabase } = useContext()

    const minBid = computed(() => formatCurrency(minimumBid + 1))

    const bidSubscription = $supabase
      .from(`bids:id=eq.${auctionId}`)
      .on('INSERT', (payload) => {
        console.log('Change received!', payload)
      })
      .subscribe()

    const mySubscription = $supabase
      .from('*')
      .on('*', (payload) => {
        console.log('Change received!', payload)
      })
      .subscribe()

    console.log(mySubscription)

    onDeactivated(() => {
      if (bidSubscription) {
        console.log('delete subscription')
        $supabase.removeSubscription(bidSubscription)
      }
    })

    const submit = async () => {
      error.value = null
      success.value = null
      loading.value = true

      const payload = [{
        auctionId,
        uid: session.user.id,
        value: bidAmount.value
      }]

      const { error: err } = await $supabase
        .from('bids')
        .insert(payload)

      if (err) {
        error.value = err.message
      } else {
        success.value = 'Bid accepted'
      }

      loading.value = false
    }

    return {
      bidAmount,
      error,
      loading,
      formatCurrency,
      // incrementAmount,
      submit,
      minBid,
      success
      // increments
    }
  }
})
</script>
