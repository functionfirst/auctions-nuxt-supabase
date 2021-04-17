<template>
  <div>
    <h1 class="font-semibold text-xl">
      Login to your account
    </h1>

    <p class="text-gray-500 my-2">
      Don't have an account?
      <nuxt-link to="/register" class="text-indigo-600 hover:text-indigo-800">
        Sign up
      </nuxt-link>
    </p>

    <form
      class="w-full max-w-lg mt-6"
      @submit.prevent="signIn"
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
        {{ error }}
      </p>

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
      error: null,
      loading: false,
      auth: {
        email: null,
        password: null
      }
    }
  },

  computed: {
    redirect () {
      return this.$route.query.redirect || '/'
    }
  },

  methods: {
    async signIn () {
      this.loading = true

      try {
        const { email, password } = this.auth
        const { error } = await this.$supabase.auth.signIn({ email, password })

        if (error) {
          throw new Error(error.message)
        }

        // @todo trigger a success toast message
        this.$router.push(this.redirect)
      } catch (error) {
        this.error = error.message
      }

      this.loading = false
    }
  }
}
</script>
