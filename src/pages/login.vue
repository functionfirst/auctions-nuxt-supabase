<template>
  <AuthLoginForm :redirect="redirect" />
</template>

<script>
import { defineComponent, useRoute } from '@nuxtjs/composition-api'

export default defineComponent({
  layout: 'base',

  setup () {
    const route = useRoute()
    const redirect = route.value.query.redirect || '/'

    return {
      redirect
    }
  },

  head: {
    title: 'Sign in to your account'
  }
})
</script>
