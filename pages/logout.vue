<template>
  <div v-if="error">
    {{ error }}
  </div>
</template>

<script>
export default {
  data () {
    return {
      error: null
    }
  },

  mounted () {
    this.signout()
  },

  methods: {
    async signout () {
      try {
        const { error } = await this.$supabase.auth.signOut()

        if (error) {
          throw new Error(error.message)
        }

        // @todo trigger a success toast message
        this.$router.push('/')
      } catch (error) {
        this.error = error.message
      }
    }
  }
}
</script>
