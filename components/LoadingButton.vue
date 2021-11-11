<template>
  <base-button-round
    color="primary"
    class="inline-flex items-center relative"
    :class="loading ? 'pl-16' : null"
    :disabled="loading"
  >
    <span
      class="transform transition-transform duration-300 ease-in-out"
      :class="loading ? '-translate-x-6' : null"
    >
      <span v-show="loading">{{ loadingText }}</span>
      <span v-show="!loading">
        <slot />
      </span>
    </span>

    <transition
      enter-active-class="transition-all duration-300 ease-out-quad"
      leave-active-class="transition-all duration-300 ease-in-quad"
      enter-class="opacity-0 scale-70"
      enter-to-class="opacity-100 scale-100"
      leave-class="opacity-100 scale-100"
      leave-to-class="opacity-0 scale-70"
    >
      <IconSpinner
        v-show="loading"
        class="absolute right-6"
      />
    </transition>
  </base-button-round>
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
