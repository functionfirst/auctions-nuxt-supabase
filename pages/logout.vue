<template>
  <div />
</template>

<script>
export default {
  mounted () {
    this.logout()
  },

  methods: {
    async logout () {
      await this.$supabase.auth.signOut()
      this.$store.commit('auth/user', null)
      this.$store.commit('auth/session', null)
      // await this.$store.dispatch('auth/logout')
      // await this.$axios.post('/api/auth/signout', this.auth)
      this.$router.push('/')
    }
  }
}
</script>
