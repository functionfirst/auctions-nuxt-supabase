<template>
  <form
    class="w-full max-w-lg mt-6"
    @submit.prevent="updateUser(user)"
  >
    <BaseLabel for="newPassword">
      Enter your new password
    </BaseLabel>

    <BaseInput
      id="newPassword"
      v-model="user.password"
      type="password"
    />

    <ErrorAlert :message="error" />

    <div class="text-center">
      <LoadingButton :loading="loading">
        Set Password
      </LoadingButton>
    </div>
  </form>
</template>

<script>
import { defineComponent, reactive } from '@vue/composition-api'
import useAuth from '@/composables/useAuth'

export default defineComponent({
  setup () {
    const { error, loading, updateUser } = useAuth()

    const user = reactive({
      password: ''
    })

    return {
      error,
      loading,
      updateUser,
      user
    }
  }
})
</script>
