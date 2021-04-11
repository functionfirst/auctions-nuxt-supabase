<template>
  <div class="mx-auto max-w-sm mt-12 border rounded shadow-sm p-4">
    <div v-if="loading" class="fixed top-0 inset-x max-w-sm">
      [spinner] Loading...
    </div>

    <form @submit.prevent="submit">
      <h1 class="text-center text-2xl font-semibold">
        Register
      </h1>

      <label for="loginEmail">Email</label>
      <input
        id="loginEmail"
        v-model="auth.email"
        type="text"
        class="w-full mb-4 border px-3 py-2 rounded"
        required
      >

      <label for="loginPassword">Password</label>
      <input
        id="loginPassword"
        v-model="auth.password"
        type="password"
        class="w-full mb-4 border px-3 py-2 rounded"
        required
      >

      <p
        v-if="error"
        class="text-red-600 my-4"
        role="alert"
      >
        {{ error.message }}
      </p>

      <button class="bg-indigo-600 hover:bg-indigo-800 text-white px-4 py-2 rounded w-full">
        Register
      </button>
    </form>
    <p class="text-center mt-4">
      Already have an account?
      <nuxt-link to="login" class="text-indigo-600 hover:text-indigo-800">
        Login
      </nuxt-link>
    </p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      auth: {
        email: '',
        password: ''
      },
      loading: false,
      error: null
    }
  },

  methods: {
    async submit () {
      this.error = null
      this.loading = true

      try {
        await this.$store.dispatch('auth/signup', this.auth)
        this.success = true // @todo display confirmation toast message - should be global vuex
        this.$router.push('/success')
      } catch (error) {
        this.error = error.response.data // @todo display error in toast - should be global vuex
      }

      this.loading = false
    }
  }
}
</script>
