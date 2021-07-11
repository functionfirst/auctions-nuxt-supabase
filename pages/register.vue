<template>
  <div>
    <snackbar-error
      type="error"
      :message="error"
      @close="error = null"
    />

    <h1 class="font-semibold text-xl">
      Sign Up
    </h1>

    <p class="text-gray-500 mt-2">
      Create an account to start tracking and bidding on auctions
    </p>

    <form
      class="w-full max-w-lg mt-6"
      @submit.prevent="signup"
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

      <base-label for="loginPassword" class="mb-2 mt-6">
        Password
      </base-label>

      <base-input
        id="loginPassword"
        v-model="auth.password"
        type="password"
        placeholder="******************"
        required
      />

      <base-label for="loginPasswordConfirm" class="mb-2 mt-6">
        Confirm your password
      </base-label>

      <base-input
        id="loginPasswordConfirm"
        v-model="auth.passwordConfirm"
        type="password"
        placeholder="******************"
        required
      />

      <div class="text-center mt-6">
        <loading-button
          color="primary"
          text="Create an account"
          :loading="loading"
        />
      </div>
    </form>

    <p class="text-center text-gray-500 mt-6">
      Already have an account?
      <nuxt-link to="/login" class="text-indigo-600 hover:text-indigo-800">
        Log In
      </nuxt-link>
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, useContext, useRouter } from '@nuxtjs/composition-api'

export default defineComponent({
  layout: 'base',

  setup () {
    const auth = reactive({
      email: '',
      password: '',
      passwordConfirm: ''
    })

    const { $supabase } = useContext()
    const router = useRouter()
    const error = ref(null)
    const loading = ref(false)

    const signup = async () => {
      error.value = null
      loading.value = true

      try {
        const { email, password, passwordConfirm } = auth

        if (passwordConfirm !== password) {
          throw new Error('Password do not match')
        }

        const { error } = await $supabase.auth.signUp({ email, password })

        if (error) {
          throw new Error(error.message)
        }

        // @todo trigger a success toast message
        router.push('/success')
      } catch (err) {
        error.value = err.message
      }

      loading.value = false
    }

    return {
      auth,
      error,
      loading,
      signup
    }
  }
})
</script>
