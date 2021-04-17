<template>
  <div>
    <transition
      enter-active-class="transition-all transform duration-300 ease-out-quad"
      leave-active-class="transition-all transform duration-300 ease-in-quad"
      enter-class="opacity-0 -translate-y-12"
      enter-to-class="opacity-100 translate-y-0"
      leave-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-12"
    >
      <div
        v-if="error"
        class="bg-indigo-900 text-white absolute flex items-center top-0 my-4 w-full mx-auto max-w-md rounded-md shadow-lg py-2 px-4"
        role="alert"
      >
        <p class="flex-1">
          {{ error.message }}
        </p>

        <button class="w-12 h-12 -m-4" @click="error = null">
          &times;
        </button>
      </div>
    </transition>

    <h1 class="font-semibold">
      Create your account
    </h1>

    <p class="text-gray-500 my-2">
      Already have an account?
      <nuxt-link to="/login" class="text-indigo-600 hover:text-indigo-800">
        Log In
      </nuxt-link>
    </p>

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

      <base-label for="loginPassword" class="mb-2 mt-6">
        Password
      </base-label>

      <base-input
        id="loginPassword"
        v-model="auth.password"
        type="password"
        placeholder="******************"
        required
      />

      <base-label for="loginPasswordConfirm" class="mb-2 mt-6">
        Confirm Password
      </base-label>

      <base-input
        id="loginPasswordConfirm"
        v-model="auth.passwordConfirm"
        type="password"
        placeholder="******************"
        required
      />

      <div class="text-center mt-6">
        <loading-button
          color="primary"
          text="Create Account"
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
        password: null,
        passwordConfirm: null
      }
    }
  },

  methods: {
    async signUp () {
      this.loading = true

      try {
        const { email, password, passwordConfirm } = this.auth

        if (passwordConfirm !== password) {
          throw new Error('Password do not match')
        }

        const { error } = await this.$supabase.auth.signUp({ email, password })

        if (error) {
          throw new Error(error.message)
        }

        // @todo trigger a success toast message
        this.$router.push('/success')
      } catch (error) {
        this.error = error.message
      }

      this.loading = false
    }
  }
}
</script>
