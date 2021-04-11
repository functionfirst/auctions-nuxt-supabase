<template>
  <div class="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
    <template v-if="session">
      Logged in as {{ session.user.email }}

      <nuxt-link
        to="/logout"
        class="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
      >
        Logout
      </nuxt-link>
    </template>

    <template v-else>
      <nuxt-link to="/login" class="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900">
        Login
      </nuxt-link>
      <nuxt-link to="/register" class="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700">
        Register
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
