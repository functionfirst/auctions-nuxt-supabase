<template>
  <div class="max-w-2xl mx-auto">
    <p class="text-gray-500 mb-2">
      User account (authenticated)
    </p>

    <form @submit.prevent="saveProfile">
      <BaseLabel for="name">
        Name
      </BaseLabel>

      <BaseInput
        id="name"
        v-model="profile.name"
      />

      <ErrorAlert :message="error" />

      <SuccessAlert :message="success" />

      <div class="text-center mt-6">
        <LoadingButton
          :loading="loading"
          loading-text="Saving..."
        >
          Update profile
        </LoadingButton>
      </div>
    </form>
  </div>
</template>

<script>
import useProfile from '~/composables/useProfile'

export default {
  middleware: 'requireAuth',

  setup () {
    const { error, success, profile, loading, saveProfile } = useProfile()

    return {
      error,
      success,
      profile,
      saveProfile,
      loading
    }
  },

  head: {
    title: 'Your Account'
  }
}
</script>
