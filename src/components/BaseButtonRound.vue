<template>
  <button
    :type="type || 'submit'"
    class="px-10 py-4 rounded-full uppercase tracking-wider font-semibold text-xs"
    :class="[
      color === 'primary' && !disabled ? 'bg-indigo-500 hover:bg-indigo-700 text-white' : null,
      color === 'secondary' && !disabled ? 'bg-gray-300 hover:bg-gray-500' : null,
      disabled ? 'cursor-not-allowed pointer-events-none bg-gray-300 text-gray-600' : null
    ]"
    :disabled="disabled"
    v-bind="$attrs"
  >
    <slot />
  </button>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    color: {
      default: '',
      required: false,
      type: String
    },

    disabled: {
      default: false,
      required: false,
      type: Boolean
    },

    type: {
      default: 'submit',
      required: false,
      type: String
    }
  }
})
</script>
