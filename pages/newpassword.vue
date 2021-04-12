<template>
  <div class="mx-auto max-w-sm mt-12 border rounded shadow-sm p-4">
    <div v-if="success" class="fixed top-0 inset-x max-w-sm">
      Success!
    </div>

    <h1 class="text-center text-2xl font-semibold mb-4">
      Update your password
    </h1>

    <p class="text-gray-600 text-center my-4">
      Enter your new password below
    </p>

    <form @submit.prevent="submit">
      <label for="newPassword" class="font-semibold cursor-pointer">New Password</label>

      <input
        id="newPassword"
        v-model="password"
        type="password"
        class="w-full mb-4 border px-3 py-2 rounded"
      >

      <p
        v-if="error"
        class="text-red-600 mb-4"
        role="alert"
      >
        {{ error.message }}
      </p>

      <button
        class="px-4 py-2 rounded w-full"
        :class="loading ? 'bg-gray-600 hover:bg-gray-800 text-white' : 'bg-indigo-600 hover:bg-indigo-800 text-white'"
        :disabled="loading"
      >
        Update Password
      </button>
    </form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      password: '',
      error: null,
      loading: false,
      success: false
    }
  },

  methods: {
    async submit () {
      const token = this.$route.query.token

      this.error = null
      this.loading = true
      this.success = false

      try {
        await this.$store.dispatch('auth/updateUser', { token, payload: { password: this.password } })
        this.success = true
      } catch (error) {
        this.error = error.response.data // @todo display error as toast
      }

      this.loading = false
    }
  }
}
</script>
