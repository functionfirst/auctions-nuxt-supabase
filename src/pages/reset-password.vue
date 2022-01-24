<template>
  <div>
    <h1 class="font-semibold text-4xl mb-6 tracking-tight">
      Reset your password
    </h1>

    <AuthResetPasswordForm :access-token="accessToken" />
  </div>
</template>

<script>
import { defineComponent, useRoute } from '@nuxtjs/composition-api'

export default defineComponent({
  layout: 'base',

  setup () {
    const route = useRoute()
    const accessToken = route.value.query.access_token

    return {
      accessToken
    }
  },

  head: {
    title: 'Reset your Password'
  }
})
</script>
