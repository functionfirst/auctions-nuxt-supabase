<template>
  <div>
    <h1 class="font-semibold text-4xl mb-6 tracking-tight">
      Welcome back
    </h1>

    <p class="text-gray-700 text-lg mb-6">
      Sign in to your account
    </p>

    <AuthLoginForm />

    <AuthSignupLink />
  </div>
</template>

<script>
export default {
  layout: 'base',

  head: {
    title: 'Sign in to your account'
  }
}
</script>
