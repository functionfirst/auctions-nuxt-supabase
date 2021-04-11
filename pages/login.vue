<template>
  <div class="mx-auto max-w-sm mt-12 border rounded shadow-sm p-4">
    <div v-if="loading" class="fixed top-0 inset-x max-w-sm">
      [spinner] Loading...
    </div>

    <div v-if="success" class="fixed top-0 inset-x max-w-sm">
      Success!
    </div>

    <form @submit.prevent="submit">
      <h1 class="text-center text-2xl font-semibold">
        Login
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

      <div v-if="error" class="flex bg-yellow-300 p-4 rounded mb-4">
        <span class="mr-2">[icon]</span>
        {{ error.data }}
      </div>

      <button
        class="px-4 py-2 rounded w-full"
        :class="loading ? 'bg-gray-600 hover:bg-gray-800 text-white' : 'bg-indigo-600 hover:bg-indigo-800 text-white'"
        :disabled="loading"
      >
        Login
      </button>
    </form>

    <p class="text-center mt-4">
      <nuxt-link to="register" class="text-indigo-600 hover:text-indigo-800">
        Register an account
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
      error: null,
      success: false,
      session: {},
      user: {}
    }
  },

  methods: {
    async submit () {
      this.error = null
      this.loading = true

      try {
        // const {
        //   data: {
        //     user,
        //     session
        //   } = {}
        // } = await this.$supabase.auth.signin(this.auth)
        await this.$store.dispatch('auth/login', this.auth)

        // this.$store.commit('auth/user', user)
        // this.$store.commit('auth/session', session)
        this.success = true
        this.$router.push('/')
      } catch (error) {
        this.error = error.response
      }

      this.loading = false
    }
  }
}
</script>
