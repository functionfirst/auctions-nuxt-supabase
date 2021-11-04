import { computed, useStore, useRoute, useRouter, reactive, ref, useContext } from '@nuxtjs/composition-api'
import AuthAPIService from '@/repositories/AuthAPIService'

function useAuth () {
  const { $supabase } = useContext()
  const authAPIService = new AuthAPIService($supabase)
  const { commit } = useStore()
  const router = useRouter()
  const route = useRoute()
  const error = ref(null)
  const loading = ref(false)
  const redirect = computed(() => (route.value.query.redirect || '/'))

  const credentials = reactive({
    email: '',
    password: ''
  })

  async function signout () {
    const { err } = await authAPIService.signout()

    if (err) {
      error.value = err
    } else {
      commit('logout')
      // @todo trigger a success toast message
      router.push('/')
    }
  }

  async function signin () {
    error.value = null
    loading.value = true

    const { err } = await authAPIService.signin(credentials)

    if (err) {
      error.value = err
    } else {
      router.push(redirect.value.toString())
    }
  }

  return {
    credentials,
    error: computed(() => error.value),
    loading: computed(() => loading.value),
    signout,
    signin
  }
}

export default useAuth
