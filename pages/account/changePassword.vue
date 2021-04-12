<template>
  <div>
    <h1>
      Update Password
    </h1>
    <form @submit.prevent="submit">
      <label for="updateCurrentPassword">Password</label>
      <input type="password" id="updateCurrentPassword">

      <hr />

      <label for="updatePassword">New Password</label>
      <input type="password" id="updatePassword">

      <label for="updatePasswordConfirm">Confirm Password</label>
      <input type="password" id="updatePasswordConfirm">

      <button
        class="px-4 py-2 rounded w-full"
        :class="loading ? 'bg-gray-600 hover:bg-gray-800 text-white' : 'bg-indigo-600 hover:bg-indigo-800 text-white'"
        :disabled="loading"
      >
        Update Password
      </button>
    </form>
  </div>
</template>

<script>
export default {
  methods: {
    submit () {
      // update password
    }
  }
}
</script>