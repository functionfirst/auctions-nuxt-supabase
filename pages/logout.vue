<template>
  <div />
</template>

<script>
export default {
  mounted () {
    this.signout()
  },

  methods: {
    async signout () {
      await this.$store.dispatch('auth/signout')
      this.$router.push('/')
    }
  }
}
</script>
