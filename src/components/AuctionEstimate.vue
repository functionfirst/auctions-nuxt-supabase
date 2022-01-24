<template>
  <dl>
    <dt>
      Estimate
    </dt>
    <dd class="font-semibold">
      {{ min }} - {{ max }}
    </dd>
  </dl>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'
import useFilter from '~/composables/useFilter'

export default defineComponent({
  props: {
    estimateMin: {
      default: 0,
      required: false,
      type: Number
    },

    estimateMax: {
      default: 0,
      required: false,
      type: Number
    }
  },

  setup ({ estimateMin, estimateMax }) {
    const { formatCurrency } = useFilter()
    const min = formatCurrency(estimateMin)
    const max = formatCurrency(estimateMax)

    return {
      min,
      max
    }
  }
})
</script>
