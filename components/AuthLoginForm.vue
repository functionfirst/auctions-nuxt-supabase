<template>
  <form
    class="w-full max-w-lg mt-6"
    @submit.prevent="signin(credentials)"
  >
    <BaseLabel for="loginEmail">
      Email Address
    </BaseLabel>

    <BaseInput
      id="loginEmail"
      v-model="credentials.email"
      placeholder="your@email.com"
      required
    />

    <nuxt-link
      to="forgot-password"
      class="text-indigo-600 hover:text-indigo-800 float-right mb-2x"
    >
      Forgot your password?
    </nuxt-link>

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

    <ErrorAlert :message="error" />

    <div class="text-center">
      <LoadingButton :loading="loading">
        Login
      </LoadingButton>
    </div>
  </form>
</template>

<script>
import { defineComponent, reactive } from '@vue/composition-api'
import useAuth from '@/composables/useAuth'

export default defineComponent({
  setup () {
    const { error, loading, session, signin } = useAuth()

    const credentials = reactive({
      email: '',
      password: ''
    })

    return {
      credentials,
      error,
      loading,
      session,
      signin
    }
  }
})
</script>
