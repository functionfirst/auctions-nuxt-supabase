<template>
  <nuxt-link
    :to="to"
    class="text-indigo-600 hover:text-indigo-800"
  >
    <slot />
  </nuxt-link>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    to: {
      required: true,
      type: String
    }
  }
})
</script>
