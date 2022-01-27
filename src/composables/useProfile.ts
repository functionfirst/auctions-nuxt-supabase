import {
  computed,
  reactive,
  ref,
  onMounted,
  watchEffect,
  useContext
} from '@nuxtjs/composition-api'

function useProfile () {
  // const { state, commit } = useStore()
  const { $services, store } = useContext()
  // const { $supabase } = useContext()
  // const profileAPIService = new ProfileService($supabase)
  const loading = ref(false)
  const error = ref(null)
  const success = ref(null)
  const profile = reactive({
    name: ''
  })

  watchEffect(() => {
    Object.assign(profile, store.state.profile)
  })

  const profileExists = computed(() => Object.entries(profile).length)

  async function getUserProfile () {
    if (profileExists.value) {
      return
    }

    const { data, error, message } = await $services.profile.get(
      store.state.session
    )

    if (error) {
      return [null, error]
    } else if (data) {
      store.commit('profile', data)
      return [message]
    }
  }

  async function saveProfile () {
    const payload = {
      id: store.state.session.user.id,
      ...profile
    }
    const { error } = await $services.profile.updateMinimal(payload)

    if (error) {
      return [null, error]
    }

    return ['Your changes have been saved successfully']
  }

  onMounted(() => {
    getUserProfile()
  })

  return {
    error: computed(() => error.value),
    success: computed(() => success.value),
    loading: computed(() => loading.value),
    profile,
    saveProfile
  }
}

export default useProfile
