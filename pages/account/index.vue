<template>
  <div>
    <p class="text-gray-500 mb-2">
      User account (authenticated)
    </p>

    {{ user.email }}
  </div>
</template>

<script>
export default {
  middleware: 'authenticated',

  computed: {
    user () {
      return this.$store.state.auth.user
    }
  }
}
</script>
