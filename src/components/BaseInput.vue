<template>
  <input
    class="block border shadow-sm border-gray-300 w-full text-gray-700 rounded-sm py-3 px-4 leading-tight focus:bg-white focus:border-gray-300"
    :type="type"
    :value="value"
    @input="$emit('input', $event.target.value)"
  >
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    type: {
      default: 'text',
      type: String
    },

    value: {
      default: '',
      type: String,
    }
  }
})
</script>
