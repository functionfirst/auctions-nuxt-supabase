<template>
  <form
    class="w-full max-w-lg mt-6"
    @submit.prevent="resetPasswordForEmail(email)"
  >
    <BaseFormRow>
      <BaseLabel for="resetEmail">
        Email Address
      </BaseLabel>

      <BaseInput
        id="resetEmail"
        v-model="email"
        type="email"
        placeholder="your@email.com"
        required
      />
    </BaseFormRow>

    <ErrorAlert :message="error" />

    <SuccessAlert :message="success" />

    <BaseFormRow class="text-center">
      <LoadingButton :loading="loading">
        Send reset password instructions
      </LoadingButton>
    </BaseFormRow>
  </form>
</template>

<script>
import { defineComponent, ref } from '@nuxtjs/composition-api'
import useAuth from '@/composables/useAuth'

export default defineComponent({
  setup () {
    const { error, success, loading, resetPasswordForEmail } = useAuth()

    const email = ref('')

    return {
      email,
      error,
      success,
      loading,
      resetPasswordForEmail
    }
  }
})
</script>
