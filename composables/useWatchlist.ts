import { computed, ref } from '@nuxtjs/composition-api'
import { supabase } from '@/plugins/supabase'
// import { create, remove, get } from '@/api/watchlist'
import WatchlistRepository from '@/repositories/WatchlistRepository'

export default function useWatchlist (auctionId: string) {
  // @todo replace this $supabase with injected context variable for user
  // const { $supabase } = useContext()
  const repository = new WatchlistRepository(supabase)

  const user = computed(() => supabase.auth.user() || null)
  const uid = computed(() => user.value ? user.value.id : '')
  const err = ref<String|null>(null)
  const loading = ref(false)
  const watching = ref(false)
  const payload = computed(() => {
    return {
      auctionId,
      uid: uid.value
    }
  })

  const fetch = async () => {
    if (loading.value) { return }
    loading.value = true

    const { data, error } = await repository.get(auctionId, uid.value)

    if (error) {
      err.value = error.message
    } else {
      watching.value = Boolean(data)
    }

    loading.value = false
  }

  const toggle = async () => {
    if (loading.value) { return }
    loading.value = true

    const fn = watching.value ? repository.delete : repository.create
    const { data, error } = await fn(payload.value)

    if (error) {
      err.value = error.message
    } else {
      watching.value = Boolean(data)
    }

    loading.value = false
  }

  return {
    watching,
    fetch,
    toggle,
    error: computed(() => err.value),
    loading: computed(() => loading.value)
  }
}
