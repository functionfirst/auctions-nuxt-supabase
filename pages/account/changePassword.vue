<template>
  <div>
    <h1>
      Update Password
    </h1>

    <form @submit.prevent="submit">
      <base-label for="updateCurrentPassword">
        Password
      </base-label>

      <base-input
        id="updateCurrentPassword"
        type="password"
      />

      <hr>

      <base-label for="updatePassword">
        New Password
      </base-label>

      <base-input
        id="updatePassword"
        type="password"
      />

      <base-label for="updatePasswordConfirm">
        Confirm Password
      </base-label>

      <base-input
        id="updatePasswordConfirm"
        type="password"
      />

      <div class="text-center mt-6">
        <loading-button
          color="primary"
          text="Login"
          :loading="loading"
        />
      </div>
    </form>
  </div>
</template>

<script>
export default {
  middleware: 'requireAuth',

  methods: {
    submit () {
      // update password
    }
  }
}
</script>
