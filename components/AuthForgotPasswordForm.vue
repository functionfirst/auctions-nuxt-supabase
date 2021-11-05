<template>
  <form
    class="w-full max-w-lg mt-6"
    @submit.prevent="resetPasswordForEmail(email)"
  >
    <base-label for="resetEmail" class="mb-2">
      Email Address
    </base-label>

    <base-input
      id="resetEmail"
      v-model="email"
      type="email"
      placeholder="your@email.com"
      required
    />

    <p
      v-if="error"
      class="text-red-600 mb-4"
      role="alert"
    >
      {{ error }}
    </p>

    <p
      v-show="success"
      class="text-green-600 mb-4"
      role="alert"
    >
      {{ success }}
    </p>

    <div class="text-center mt-6">
      <loading-button :loading="loading">
        Send instructions
      </loading-button>
    </div>
  </form>
</template>

<script>
import { defineComponent, ref } from '@nuxtjs/composition-api'
import useAuth from '@/composables/useAuth'

export default defineComponent({
  setup () {
    const email = ref('')
    const { error, success, loading, resetPasswordForEmail } = useAuth()

    return {
      email,
      error,
      success,
      loading,
      resetPasswordForEmail
    }
  }
})
</script>
