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

      <div v-if="error" class="flex bg-yellow-300 p-4 rounded mb-4">
        <span class="mr-2">[icon]</span>
        {{ error.data }}
      </div>

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
      error: '',
      user: {}
    }
  },

  methods: {
    async submit () {
      this.error = null
      this.loading = true

      try {
        const { user, session, error } = await this.$supabase.auth.signIn(this.auth)

        if (error) {
          throw new Error(error)
          // this.error = error
          // return
        }

        // @todo log these to vuex?
        this.user = user
        this.session = session
        this.success = true // display confirmation toast message - should be global vuex

        this.$router.push('/success')
      } catch (error) {
        this.error = error // display error in toast - should be global vuex
      }

      this.loading = false

      // try {
      //   const {
      //     data: {
      //       user,
      //       session
      //     } = {}
      //   } = await this.$axios.post('/api/auth/signup', this.auth)

      //   this.session = session
      //   this.user = user
      //   this.success = true
      //   this.$router.push('/success')
      // } catch (error) {
      //   this.error = error.response
      // }
      // this.loading = false

      // this.loading = true
      // const { user, error } = await this.$supabase.auth.signUp(this.auth)
      // this.loading = false

      // if (error) {
      //   // @todo centralise error displays using toast?
      //   this.error = error
      // }

      // // @todo do we need to store the user now?
      // this.user = user
    }
  }
}
</script>
