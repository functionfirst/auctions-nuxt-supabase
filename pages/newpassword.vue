<template>
  <div>
    <h1 class="font-semibold text-xl">
      Set your password
    </h1>

    <form
      class="w-full max-w-lg mt-6"
      @submit.prevent="updateUser"
    >
      <base-label for="newPassword" class="mb-2">
        Enter your new password
      </base-label>

      <base-input
        id="newPassword"
        v-model="auth.password"
        type="password"
      />

      <p
        v-if="error"
        class="text-red-600 mb-4"
        role="alert"
      >
        {{ error }}
      </p>

      <div class="text-center mt-6">
        <loading-button
          color="primary"
          text="Set Password"
          :loading="loading"
        />
      </div>
    </form>
  </div>
</template>

<script>
export default {
  layout: 'base',

  data () {
    return {
      auth: {
        password: null
      },
      error: null,
      loading: false
    }
  },

  computed: {
    accessToken () {
      return this.$route.query.access_token
    }
  },

  methods: {
    async updateUser () {
      this.error = null
      this.loading = true

      try {
        const { password } = this.auth

        const { error } = await this.$supabase.auth.api.updateUser(
          this.accessToken,
          {
            password
          }
        )

        if (error) {
          throw new Error(error.message)
        }

        // @todo trigger a success toast message
        this.$router.push('/')
      } catch (error) {
        this.error = error.message
      }

      this.loading = false
    }
  }
}
</script>
