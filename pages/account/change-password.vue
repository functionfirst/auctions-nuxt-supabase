<template>
  <div>
    <h1 class="font-semibold text-2xl mb-6 tracking-tight">
      Change Password
    </h1>

    <AuthChangePasswordForm />
  </div>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  layout: 'account',

  middleware: 'requireAuth',

  head: {
    title: 'Change Password'
  }
})
</script>
