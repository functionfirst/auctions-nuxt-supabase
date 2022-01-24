import { computed, useStore, useRouter, ref, useContext } from '@nuxtjs/composition-api'
import AuthService from '@/services/AuthService'

function useAuth() {
  const { $supabase } = useContext()
  const service = new AuthService($supabase)
  const { state } = useStore()
  const router = useRouter()
  const error = ref(null)
  const session = ref(state.session)
  const success = ref(null)
  const loading = ref(false)

  const changePassword = async (credentials) => {
    // const loading = ref(true)
    const { success, message } = await service.updatePassword(credentials)

    if (!success) {
      error.value = message
    } else {
      success.value = message
    }
  }

  const resetPasswordForEmail = async (email) => {
    error.value = null
    success.value = null
    loading.value = true

    const { error: resetPasswordError } = await service.resetPasswordForEmail(email)

    if (resetPasswordError) {
      error.value = resetPasswordError.message
    } else {
      success.value = 'We have emailed you a link to reset your account password'
    }

    loading.value = false
  }

  const signin = async (credentials, redirectTo) => {
    const { error } = await service.signin(credentials)

    if (error) {
      throw new Error(error)
      // error.value = signinError.message
    } else {
      router.push(redirectTo.value ?? '/account')
    }

    loading.value = false
  }

  const signout = async () => {
    const { error, message } = await service.signout()

    if (error) {
      throw new Error(error)
      // return ServiceResponse(false, error.message)
    }

    return message

    // return ServiceResponse(true, 'You have successfully signed out')
  }

  const wasConfirmationSent = (data) => {
    return data && Object.prototype.hasOwnProperty.call(data, 'confirmation_sent_at')
  }

  const signup = async ({ email, password, confirmPassword }) => {
    // if (confirmPassword !== password) {
    //   return new ServiceResponse(false, 'Please ensure your passwords match')
    // }

    const { data } = await service.signup({
      email,
      password
    })

    // if (error) {
    //   return new ServiceResponse(false, error.message)
    // }

    if (wasConfirmationSent(data)) {
      console.log('Check your email for the confirmation link')
      return
      // return new ServiceResponse(false, 'Check your email for the confirmation link')
    }

    console.log('Your account has been created. A confirmation link has been emailed to you')
    // return
    // return new ServiceResponse(true, 'Your account has been created. A confirmation link has been emailed to you')
  }

  const updateUserWithToken = async (accessToken, user) => {
    error.value = null
    // success.value = null
    loading.value = null

    const { success, message } = await service.updateUserWithToken({ accessToken, user })

    if (!success) {
      error.value = message
      // throw new Error(message)
      // return new ServiceResponse(false, error.message)
    }

    loading.value = false
    // return new ServiceResponse(true, 'Your account has been updated successfully')
  }

  return {
    error: computed(() => error.value),
    session: computed(() => session.value),
    success: computed(() => success.value),
    loading: computed(() => loading.value),
    changePassword,
    resetPasswordForEmail,
    signin,
    signout,
    signup,
    updateUserWithToken
  }
}

export default useAuth
