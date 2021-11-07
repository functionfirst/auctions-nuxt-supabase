<template>
  <p
    v-show="message"
    class="text-green-600 my-6"
    role="alert"
  >
    {{ message }}
  </p>
</template>

<script>
import { defineComponent } from '@vue/composition-api'

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
