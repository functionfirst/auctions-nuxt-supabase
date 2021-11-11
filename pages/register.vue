<template>
  <div>
    <h1 class="font-semibold text-4xl mb-6 tracking-tight">
      Sign Up
    </h1>

    <p class="text-gray-700 text-lg mb-6">
      Create an account to watch and bid on auctions
    </p>

    <AuthSignupForm />

    <AuthLoginLink />
  </div>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  layout: 'base',

  head: {
    title: 'Create an account to watch and bid on auctions'
  }
})
</script>
