<template>
  <div>
    <p class="text-gray-500 mb-2">
      User account (authenticated)
    </p>

    <pre>{{ user }}</pre>
  </div>
</template>

<script>
export default {
  middleware: 'requireAuth',

  computed: {
    user () {
      return this.$store.state.user
    }
  }
}
</script>
