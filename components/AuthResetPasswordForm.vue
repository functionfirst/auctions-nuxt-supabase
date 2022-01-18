<template>
  <form
    class="w-full max-w-lg mt-6"
    @submit.prevent="updateUserWithToken(accessToken, user)"
  >
    <BaseFormRow>
      <BaseLabel for="newPassword">
        Enter your new password
      </BaseLabel>

      <BaseInput
        id="newPassword"
        v-model="user.password"
        type="password"
      />
    </BaseFormRow>

    <ErrorAlert :message="error" />

    <BaseFormRow class="text-center">
      <LoadingButton :loading="loading">
        Reset Password
      </LoadingButton>
    </BaseFormRow>
  </form>
</template>

<script>
import { defineComponent, reactive } from '@nuxtjs/composition-api'
import useAuth from '@/composables/useAuth'

export default defineComponent({
  props: {
    accessToken: {
      required: true,
      type: String
    }
  },

  setup (props) {
    const { error, loading, updateUserWithToken } = useAuth()

    const user = reactive({
      password: ''
    })

    return {
      error,
      loading,
      updateUserWithToken,
      user
    }
  }
})
</script>
