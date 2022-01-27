<template>
  <div>
    <h1 class="font-semibold text-xl">
      Forgot your password?
    </h1>

    <p class="text-gray-500 mt-2">
      If you've forgotten your password, use the form below to request a link to change it.
    </p>

    <AuthForgotPasswordForm />

    <AuthLoginLink />

    <AuthSignupLink />
  </div>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  layout: 'base',

  head: {
    title: 'Forgot your password?'
  }
})
</script>
