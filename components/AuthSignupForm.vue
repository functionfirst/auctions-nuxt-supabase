<template>
  <form
    class="w-full max-w-lg mt-6"
    @submit.prevent="signup(credentials)"
  >
    <BaseLabel for="loginEmail">
      Email Address
    </BaseLabel>

    <Base-Input
      id="loginEmail"
      v-model="credentials.email"
      placeholder="your@email.com"
      required
    />

    <BaseLabel for="loginPassword">
      Password
    </BaseLabel>

    <BaseInput
      id="loginPassword"
      v-model="credentials.password"
      type="password"
      placeholder="******************"
      required
    />

    <BaseLabel for="loginPasswordConfirm">
      Confirm your password
    </BaseLabel>

    <BaseInput
      id="loginPasswordConfirm"
      v-model="credentials.passwordConfirm"
      type="password"
      placeholder="******************"
      required
    />

    <ErrorAlert :message="error" />

    <div class="text-center">
      <LoadingButton :loading="loading">
        Create an account
      </LoadingButton>
    </div>
  </form>
</template>

<script>
import { defineComponent, reactive } from '@nuxtjs/composition-api'
import useAuth from '@/composables/useAuth'

export default defineComponent({
  setup () {
    const { error, loading, signup } = useAuth()

    const credentials = reactive({
      email: '',
      password: '',
      passwordConfirm: ''
    })

    return {
      credentials,
      error,
      loading,
      signup
    }
  }
})
</script>
