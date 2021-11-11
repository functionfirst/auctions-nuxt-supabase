import { computed, reactive, ref, onMounted, watchEffect, useContext, useStore } from '@nuxtjs/composition-api'
import ProfileAPIService from '@/repositories/ProfileAPIService'

function useProfile () {
  const { state, commit } = useStore()
  const { $supabase } = useContext()
  const profileAPIService = new ProfileAPIService($supabase)
  const loading = ref(false)
  const error = ref(null)
  const success = ref(null)
  const profile = reactive({})

  watchEffect(() => {
    Object.assign(profile, state.profile)
  })

  const profileExists = computed(() => Object.entries(profile).length)

  async function getUserProfile () {
    if (profileExists.value) { return }
    success.value = null
    error.value = null
    loading.value = true

    const { data, error: getProfileError } = await profileAPIService.getProfile(state.session)

    if (getProfileError) {
      error.value = getProfileError.message
    } else if (data) {
      commit('profile', data)
    }

    loading.value = false
  }

  async function saveProfile () {
    error.value = null
    success.value = null
    loading.value = true

    const { error: updateProfileError } = await profileAPIService.updateProfileMinimal({
      id: state.session.user.id,
      updatedAt: new Date(), // @todo do this in supabase trigger
      ...profile
    })

    if (updateProfileError) {
      error.value = updateProfileError.message
    } else {
      success.value = 'Your changes have been saved successfully'
      commit('profile', profile)
    }

    loading.value = false
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
