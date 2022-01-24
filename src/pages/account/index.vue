<template>
  <div>
    <h1 class="font-semibold text-2xl mb-6 tracking-tight">
      Profile
    </h1>

    <ProfileUpdateForm />
  </div>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'
export default defineComponent({
  layout: 'account',

  middleware: 'requireAuth',

  head: {
    title: 'Your Account'
  }
})
</script>
