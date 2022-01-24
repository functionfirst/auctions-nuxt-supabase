<template>
  <BaseButtonRound
    class="relative"
    color="primary"
    :class="loading ? 'pl-16' : null"
    :disabled="loading"
    v-bind="$attrs"
  >
    <LoadingState v-bind="{ loading, loadingText }">
      <slot />
    </LoadingState>
  </BaseButtonRound>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    loading: {
      required: false,
      type: Boolean
    },

    loadingText: {
      default: 'Loading...',
      required: false,
      type: String
    }
  }
})
</script>
