import { computed, useRouter, ref, useContext } from '@nuxtjs/composition-api'
import { IAuthData, IAuthUser } from '../entities'
// import AuthService from '@/services/auth'

function useAuth () {
  const { $services, store } = useContext()
  // const service = new AuthService()
  // const { state } = useStore()
  const router = useRouter()
  const error = ref(null)
  const session = ref(store.state.session)
  const success = ref('')
  const loading = ref(false)

  const changePassword = async (credentials: IAuthData) => {
    const { error, message } = await $services.auth.updatePassword(credentials)

    if (error) {
      return [null, error]
    } else {
      return [message]
    }
  }

  // const resetPasswordForEmail = async (email: string) => {
  //   error.value = null
  //   success.value = null
  //   loading.value = true

  //   const { error: resetPasswordError } = await $services.auth.resetPasswordForEmail(email)

  //   if (resetPasswordError) {
  //     error.value = resetPasswordError.message
  //   } else {
  //     success.value = 'We have emailed you a link to reset your account password'
  //   }

  //   loading.value = false
  // }

  const signin = async (credentials: IAuthData) => {
    const { error } = await $services.auth.signin(credentials)

    if (error) {
      throw new Error(error)
      // error.value = signinError.message
    } else {
      router.push('/account')
    }

    loading.value = false
  }

  const signout = async () => {
    const { error, message } = await $services.auth.signout()

    if (error) {
      throw new Error(error)
      // return ServiceResponse(false, error.message)
    }

    return message

    // return ServiceResponse(true, 'You have successfully signed out')
  }

  const wasConfirmationSent = (data: IAuthUser) => {
    return data && Object.prototype.hasOwnProperty.call(data, 'confirmation_sent_at')
  }

  const signup = async (credentials: IAuthData) => {
    const { email, password, confirmPassword } = credentials
    if (confirmPassword !== password) {
      throw new Error('Please ensure your passwords match')
    }

    const { data } = await $services.auth.signup({
      email,
      password
    })

    if (error) {
      return [null, error]
    }

    if (data && wasConfirmationSent(data)) {
      return [null, 'Check your email for the confirmation link']
    }

    return ['Your account has been created. A confirmation link has been emailed to you']
  }

  const updateUserWithToken = async (accessToken: string, user: IAuthData) => {
    const { error, message } = await $services.auth.updateUserWithToken(accessToken, user)

    if (error) {
      return [null, error]
    }
    return [message]
  }

  return {
    error: computed(() => error.value),
    session: computed(() => session.value),
    success: computed(() => success.value),
    loading: computed(() => loading.value),
    changePassword,
    // resetPasswordForEmail,
    signin,
    signout,
    signup,
    updateUserWithToken
  }
}

export default useAuth
