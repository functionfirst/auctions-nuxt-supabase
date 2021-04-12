<template>
  <div>
    <div v-if="success" class="fixed top-0 inset-x max-w-sm">
      Success!
    </div>

    <h1 class="font-semibold">
      Login to your account
    </h1>

    <form
      class="w-full max-w-lg mt-6"
      @submit.prevent="submit"
    >
      <base-label for="loginEmail" class="mb-2">
        Email
      </base-label>

      <base-input
        id="loginEmail"
        v-model="auth.email"
        placeholder="your@email.com"
        required
      />

      <div class="flex mb-2 items-center mt-6">
        <base-label for="loginPassword" class="flex-1">
          Password
        </base-label>

        <nuxt-link to="forgot-password" class="text-indigo-600 hover:text-indigo-800">
          Forgot your password?
        </nuxt-link>
      </div>

      <base-input
        id="loginPassword"
        v-model="auth.password"
        type="password"
        placeholder="******************"
        required
      />

      <p
        v-if="error"
        class="text-red-600 my-4"
        role="alert"
      >
        {{ error.message }}
      </p>

      <!-- <button type="button" @click="loading = !loading">Toggle Loader</button> -->

      <div class="text-center mt-6">
        <loading-button
          color="primary"
          text="Login"
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
      auth: {
        email: '',
        password: ''
      },
      loading: false,
      error: null,
      success: false,
      session: {},
      user: {}
    }
  },

  methods: {
    async submit () {
      this.error = null
      this.loading = true // @todo display loading as toast

      try {
        await this.$store.dispatch('auth/signin', this.auth)
        this.success = true // @todo display success as toast
        this.$router.push('/')
      } catch (error) {
        this.error = error.response.data // @todo display error as toast
      }

      this.loading = false
    }
  }
}
</script>
