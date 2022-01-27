<template>
  <div>
    <h1 class="font-semibold text-xl">
      Welcome back
    </h1>

    <p class="text-gray-500 mt-2">
      Sign in to your account
    </p>

    <form
      class="w-full max-w-lg mt-6"
      @submit.prevent="signin(credentials)"
    >
      <BaseFormRow>
        <BaseLabel for="loginEmail">
          Email Address
        </BaseLabel>

        <BaseInput
          id="loginEmail"
          v-model="credentials.email"
          placeholder="your@email.com"
          required
        />
      </BaseFormRow>

      <BaseFormRow>
        <div class="flex mb-2 items-center">
          <BaseLabel for="loginPassword" class="flex-1">
            Password
          </BaseLabel>

          <nuxt-link
            to="/forgot-password"
            class="text-indigo-600 hover:text-indigo-800"
          >
            Forgot your password?
          </nuxt-link>
        </div>

        <BaseInput
          id="loginPassword"
          v-model="credentials.password"
          type="password"
          placeholder="******************"
          required
        />
      </BaseFormRow>

      <ErrorAlert :message="error" />

      <BaseFormRow class="text-center">
        <LoadingButton
          id="loginButton"
          :loading="loading"
        >
          Login
        </LoadingButton>
      </BaseFormRow>
    </form>

    <AuthSignupLink />
  </div>
</template>

<script>
import { defineComponent, reactive, ref, useRouter } from '@nuxtjs/composition-api'
// import AuthService from '@/services/auth'
// import useAuth from '@/composables/useAuth'

// type credentials = {
//   email: string,
//   password: string
// }

export default defineComponent({
  setup () {
    // const { error, loading, session, signin } = useAuth()
    const router = useRouter()
    const loading = ref(false)
    const error = ref(null)
    // const { $supabase } = useContext()
    // const service = new AuthService($supabase)
    const credentials = reactive({
      email: '',
      password: ''
    })

    const signin = async (credentials) => {
      const { error } = await this.$services.auth.signin(credentials)

      if (error) {
        throw new Error(error)
        // error.value = signinError.message
      } else {
        router.push('/account')
      }

      loading.value = false
    }

    return {
      credentials,
      error,
      loading,
      // session,
      signin
    }
  }
})
</script>
