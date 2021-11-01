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
      @submit.prevent="signin"
    >
      <base-label for="loginEmail" class="mb-2">
        Email Address
      </base-label>

      <base-input
        id="loginEmail"
        v-model="auth.email"
        placeholder="your@email.com"
        required
      />

      <div class="flex mb-2 items-center mt-6">
        <base-label for="loginPassword" class="flex-1">
          Password
        </base-label>

        <nuxt-link to="forgot-password" class="text-indigo-600 hover:text-indigo-800">
          Forgot your password?
        </nuxt-link>
      </div>

      <base-input
        id="loginPassword"
        v-model="auth.password"
        type="password"
        placeholder="******************"
        required
      />

      <p
        v-if="error"
        class="text-red-600 my-4"
        role="alert"
      >
        {{ error }}
      </p>

      <div class="text-center mt-6">
        <loading-button :loading="loading">
          Login
        </loading-button>
      </div>
    </form>

    <p class="text-center text-gray-500 mt-6">
      Don't have an account?
      <nuxt-link to="/register" class="text-indigo-600 hover:text-indigo-800">
        Sign up
      </nuxt-link>
    </p>
  </div>
</template>

<script>
import { computed, useRoute, useRouter, ref, defineComponent, useContext, reactive } from '@nuxtjs/composition-api'

export default defineComponent({
  layout: 'base',

  setup () {
    const { $supabase } = useContext()
    const route = useRoute()
    const router = useRouter()
    const error = ref(null)
    const loading = ref(false)
    const redirect = computed(() => (route.value.query.redirect || '/'))

    const auth = reactive({
      email: '',
      password: ''
    })

    const signin = async () => {
      error.value = null
      loading.value = true

      try {
        const { email, password } = auth
        const { error } = await $supabase.auth.signIn({ email, password })

        if (error) {
          throw new Error(error.message)
        }

        // @todo trigger a success toast message
        router.push(redirect.value.toString())
      } catch (error) {
        error.value = error.message
      }

      loading.value = false
    }

    return {
      auth,
      error,
      loading,
      signin
    }
  },

  head: {
    title: 'Sign in to your account'
  }
})
</script>
