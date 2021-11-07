<template>
  <div>
    <h1 class="font-semibold text-2xl mb-6 tracking-tight">
      Change Password
    </h1>

    <AuthChangePasswordForm />
  </div>
</template>

<script>
export default {
  layout: 'account',

  middleware: 'requireAuth',

  head: {
    title: 'Change Password'
  }
}
</script>
