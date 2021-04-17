<template>
  <div>
    <div v-if="success" class="fixed top-0 inset-x max-w-sm">
      Success!
    </div>

    <h1 class="font-semibold text-xl">
      Forgot your password?
    </h1>

    <form
      class="w-full max-w-lg mt-6"
      @submit.prevent="submit"
    >
      <base-label for="resetEmail" class="mb-2">
        Email
      </base-label>

      <base-input
        id="resetEmail"
        v-model="email"
        placeholder="your@email.com"
      />

      <p
        v-if="error"
        class="text-red-600 mb-4"
        role="alert"
      >
        {{ error.message }}
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
      loading: false,
      success: false
    }
  },

  head () {
    return {
      title: 'Forgot your password? - Krimsa'
    }
  },

  methods: {
    async submit () {
      this.error = null
      this.loading = true
      this.success = false

      try {
        await this.$store.dispatch('auth/resetPassword', { email: this.email })
        this.success = true
      } catch (error) {
        this.error = error.response.data // @todo display error as toast
      }

      this.loading = false
    }
  }
}
</script>
