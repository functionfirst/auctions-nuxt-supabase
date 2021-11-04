<template>
  <div>
    <h1 class="font-semibold text-xl">
      Forgot your password?
    </h1>

    <p class="text-gray-500 mt-2">
      If you've forgotten your password, use the form below to request a link to change it.
      <!-- Enter the email associated with your account and we'll send an email with a link to reset your password. -->
    </p>

    <form
      class="w-full max-w-lg mt-6"
      @submit.prevent="resetPassword"
    >
      <base-label for="resetEmail" class="mb-2">
        Email Address
      </base-label>

      <base-input
        id="resetEmail"
        v-model="email"
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

      <div class="text-center mt-6">
        <loading-button :loading="loading">
          Send instructions
        </loading-button>
      </div>
    </form>

    <p class="text-center text-gray-500 mt-6">
      Already have an account?
      <nuxt-link to="/login" class="text-indigo-600 hover:text-indigo-800">
        Log In
      </nuxt-link>
    </p>

    <p class="text-center text-gray-500 mt-2">
      Don't have an account?
      <nuxt-link to="/register" class="text-indigo-600 hover:text-indigo-800">
        Sign up
      </nuxt-link>
    </p>
  </div>
</template>

<script>
import { ref, useContext } from '@nuxtjs/composition-api'

export default {
  layout: 'base',

  setup () {
    const { $supabase } = useContext()
    const email = ref('')
    const error = ref(null)
    const loading = ref(false)

    const resetPassword = async () => {
      error.value = null
      loading.value = true

      try {
        const { error } = await $supabase.auth.api.resetPasswordForEmail(email.value)

        if (error) {
          throw new Error(error.message)
        }

        // @todo trigger a success toast message
      } catch (error) {
        error.value = error.message
      }

      loading.value = false
    }

    return {
      email,
      error,
      loading,
      resetPassword
    }
  }
}
</script>
