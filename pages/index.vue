<template>
  <div>
    <ContentHero />
  </div>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  computed: {
    redirectUrl () {
      const params = this.$route.hash.replace('#', '')
      return `/reset-password?${params}`
    },

    recoverPassword () {
      const { hash } = this.$route
      return hash.includes('recovery') || hash.includes('magiclink')
    }
  },

  mounted () {
    if (this.recoverPassword) {
      this.$router.push(this.redirectUrl)
    }
  }
})
</script>
