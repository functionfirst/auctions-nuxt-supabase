<template>
  <form @submit.prevent="changePassword(credentials)">
    <BaseLabel for="newPassword">
      New Password
    </BaseLabel>

    <BaseInput
      id="newPassword"
      v-model="credentials.password"
      type="password"
      minlength="6"
      required
    />

    <BaseFormRow>
      <BaseLabel for="confirmPassword">
        Confirm Password
      </BaseLabel>

      <BaseInput
        id="confirmPassword"
        v-model="credentials.confirmPassword"
        type="password"
        minlength="6"
        required
      />
    </BaseFormRow>

    <ErrorAlert :message="error" />

    <SuccessAlert :message="success" />

    <div class="text-center mt-6">
      <LoadingButton :loading="loading">
        Change Password
      </LoadingButton>
    </div>
  </form>
</template>

<script>
import { defineComponent, reactive } from '@nuxtjs/composition-api'
import useAuth from '@/composables/useAuth'

export default defineComponent({
  setup () {
    const { error, success, loading, changePassword } = useAuth()

    const credentials = reactive({
      password: '',
      confirmPassword: ''
    })

    return {
      credentials,
      error,
      success,
      loading,
      changePassword
    }
  }
})
</script>
