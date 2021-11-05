<template>
  <div>
    <h1 class="font-semibold text-xl">
      Forgot your password?
    </h1>

    <p class="text-gray-500 mt-2">
      If you've forgotten your password, use the form below to request a link to change it.
    </p>

    <AuthForgotPasswordForm />

    <p class="text-center text-gray-500 mt-6">
      Already have an account?
      <nuxt-link to="/login" class="text-indigo-600 hover:text-indigo-800">
        Log In
      </nuxt-link>
    </p>

    <p class="text-center text-gray-500 mt-2">
      Don't have an account?
      <nuxt-link to="/register" class="text-indigo-600 hover:text-indigo-800">
        Sign up
      </nuxt-link>
    </p>
  </div>
</template>

<script>
export default {
  layout: 'base'
}
</script>
