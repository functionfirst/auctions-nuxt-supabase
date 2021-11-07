<template>
  <div>
    <h1 class="font-semibold text-4xl mb-6 tracking-tight">
      Forgot your password?
    </h1>

    <p class="text-gray-700 text-lg mb-6">
      If you've forgotten your password, use the form below to request a link to change it.
    </p>

    <AuthForgotPasswordForm />

    <AuthLoginLink />

    <AuthSignupLink />
  </div>
</template>

<script>
export default {
  layout: 'base',

  head: {
    title: 'Forgot your password?'
  }
}
</script>
