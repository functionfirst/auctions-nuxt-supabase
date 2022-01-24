<template>
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
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'
import useProfile from '~/composables/useProfile'

export default defineComponent({
  setup () {
    const { error, success, profile, loading, saveProfile } = useProfile()

    return {
      error,
      success,
      profile,
      saveProfile,
      loading
    }
  }
})
</script>
