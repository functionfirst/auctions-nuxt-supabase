import { computed, reactive, ref, onMounted, watchEffect, useContext, useStore } from '@nuxtjs/composition-api'
import ProfileAPIService from '@/repositories/ProfileAPIService'

function useProfile () {
  const { state, commit } = useStore()
  const { $supabase } = useContext()
  const profileAPIService = new ProfileAPIService($supabase)
  const loading = ref(false)
  const error = ref(null)
  const profile = reactive({})

  watchEffect(() => {
    Object.assign(profile, state.profile)
  })

  const profileExists = computed(() => Object.entries(profile).length)

  async function getUserProfile () {
    if (profileExists.value) { return }
    loading.value = true
    error.value = null

    const { data, error: err } = await profileAPIService.getProfile(state.session)

    if (err) {
      error.value = err
    } else if (data) {
      commit('profile', data)
    }

    loading.value = false
  }

  async function saveProfile () {
    loading.value = true
    error.value = null

    const { error: err } = await profileAPIService.updateProfileMinimal({
      id: state.session.user.id,
      updated_at: new Date(),
      ...profile
    })

    if (err) {
      error.value = err
    } else {
      // @todo replace this with a snackbar
      alert('profile updated')
      commit('profile', profile)
    }

    loading.value = false
  }

  onMounted(() => {
    getUserProfile()
  })

  return {
    error: computed(() => error.value),
    loading: computed(() => loading.value),
    profile,
    saveProfile
  }
}

export default useProfile
