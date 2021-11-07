<template>
  <p
    v-show="message"
    class="text-red-600 my-6"
    role="alert"
  >
    {{ message }}
  </p>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    message: {
      default: '',
      required: false,
      type: String
    }
  }
})
</script>
