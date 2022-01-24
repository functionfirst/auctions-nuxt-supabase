<template>
  <div class="flex items-center"> 
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
  </div>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    loading: {
      default: false,
      type: Boolean
    },

    loadingText: {
      default: 'Loading...',
      type: String
    }
  }
})
</script>
