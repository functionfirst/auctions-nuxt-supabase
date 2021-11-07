import { computed, useStore, useRouter, ref, useContext } from '@nuxtjs/composition-api'
import AuthAPIService from '@/repositories/AuthAPIService'

function useAuth () {
  const { $supabase } = useContext()
  const authAPIService = new AuthAPIService($supabase)
  const { state, commit } = useStore()
  const router = useRouter()

  const error = ref(null)
  const session = ref(state.session)
  const success = ref(null)
  const loading = ref(false)

  const changePassword = async ({ password, confirmPassword }) => {
    error.value = null
    success.value = null
    loading.value = true

    if (confirmPassword !== password) {
      error.value = 'Please ensure your passwords match'
    } else {
      const { error: changePasswordError } = await authAPIService.updateUser({ password })

      if (changePasswordError) {
        error.value = changePasswordError.message
      } else {
        success.value = 'Your password has been updated successfully'
      }
    }

    loading.value = false
  }

  const resetPasswordForEmail = async (email) => {
    error.value = null
    success.value = null
    loading.value = true

    const { error: resetPasswordError } = await authAPIService.resetPasswordForEmail(email)

    if (resetPasswordError) {
      error.value = resetPasswordError.message
    } else {
      success.value = 'We have emailed you a link to reset your account password'
    }

    loading.value = false
  }

  const signin = async (credentials, redirect = '/') => {
    error.value = null
    success.value = null
    loading.value = true

    const { error: signinError } = await authAPIService.signin(credentials)

    if (signinError) {
      error.value = signinError.message
    } else {
      router.push(redirect.value.toString())
    }

    loading.value = false
  }

  const signout = async () => {
    error.value = null
    success.value = null
    loading.value = true

    const { error: signoutError } = await authAPIService.signout()

    if (signoutError) {
      error.value = signoutError.message
    } else {
      commit('logout')
      success.value = 'You have successfully signed out'
      router.push('/')
    }

    loading.value = false
  }

  const signup = async ({ email, password, confirmPassword }) => {
    error.value = null
    success.value = null
    loading.value = true

    if (confirmPassword !== password) {
      error.value = 'Please ensure your passwords match'
    } else {
      const { error: signUpError, data } = await authAPIService.signup({ email, password })

      const confirmationSent = data && Object.prototype.hasOwnProperty.call(data, 'confirmation_sent_at')

      if (signUpError) {
        error.value = signUpError.message
      } else if (confirmationSent) {
        error.value = 'Check your email for the confirmation link'
      } else {
        success.value = 'Your account has been created. A confirmation link has been emailed to you'
        router.push('/success')
      }
    }

    loading.value = false
  }

  const updateUser = async (user) => {
    error.value = null
    success.value = null
    loading.value = true

    const accessToken = route.value.query.access_token

    const { error: updateUserError } = await authAPIService.updateUser(accessToken, user)

    if (updateUserError) {
      error.value = updateUserError.message
    } else {
      success.value = 'Your account has been updated successfully'
      router.push('/')
    }

    loading.value = false
  }

  return {
    error: computed(() => error.value),
    session: computed(() => session.value),
    success: computed(() => success.value),
    loading: computed(() => loading.value),
    resetPasswordForEmail,
    signin,
    signout,
    signup,
    updateUser
  }
}

export default useAuth
