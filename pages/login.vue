<template>
  <div>
    <h1 class="font-semibold text-4xl mb-6 tracking-tight">
      Welcome back
    </h1>

    <p class="text-gray-700 text-lg mb-6">
      Sign in to your account
    </p>

    <AuthLoginForm :redirect="redirect" />

    <AuthSignupLink />
  </div>
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
