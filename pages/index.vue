<template>
  <div>
    <ContentHero />
  </div>
</template>

<script>
export default {
  created () {
    this.detectPasswordResetToken()
  },

  methods: {
    detectPasswordResetToken () {
      if (this.$route.query.type === 'recovery') {
        this.$router.push(`/newpassword?token=${this.$route.query.token}`)
      }
    }
  }
}
</script>
