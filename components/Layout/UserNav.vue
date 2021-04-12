<template>
  <div class="justify-end md:flex-1 lg:w-0 text-xs hidden sm:flex flex-auto items-center">
    <template v-if="session">
      Logged in as {{ session.user.email }}

      <nuxt-link
        to="/logout"
        class="ml-8 items-center justify-center px-4 py-2 border border-transparent rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
      >
        Logout
      </nuxt-link>
    </template>

    <template v-else>
      <nuxt-link to="/login" class="px-6 py-4 uppercase tracking-wider font-semibold text-xs text-gray-500 hover:text-indigo-800 mr-2">
        Log In
      </nuxt-link>

      <nuxt-link to="/register" class="px-12 py-4 bg-indigo-500 hover:bg-indigo-400 rounded-full uppercase tracking-wider font-semibold text-white text-xs">
        Sign Up
      </nuxt-link>
    </template>
  </div>
</template>

<script>
export default {
  computed: {
    session () {
      return this.$store.state.auth.session
    }
  },

  mounted () {
    this.getSessionDetails()
  },

  methods: {
    async getSessionDetails () {
      if (this.session) {
        return
      }

      await this.$store.dispatch('auth/getSessionDetails')
    }
  }
}
</script>
