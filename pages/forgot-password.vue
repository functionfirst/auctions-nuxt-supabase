<template>
  <div>
    <h1 class="font-semibold text-xl">
      Forgot your password?
    </h1>

    <p class="text-gray-500 mt-2">
      Enter the email associated with your account and we'll send an email with a link to reset your password.
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
        <loading-button
          color="primary"
          text="Reset Password"
          :loading="loading"
        />
      </div>
    </form>
  </div>
</template>

<script>
export default {
  layout: 'base',

  data () {
    return {
      email: '',
      error: null,
      loading: false
    }
  },

  methods: {
    async resetPassword () {
      this.error = null
      this.loading = true

      try {
        const { error } = await this.$supabase.auth.api.resetPasswordForEmail(this.email)

        if (error) {
          throw new Error(error.message)
        }

        // @todo trigger a success toast message
      } catch (error) {
        this.error = error.message
      }

      this.loading = false
    }
  }
}
</script>
