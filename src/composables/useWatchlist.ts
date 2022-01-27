import { computed, ref, useContext } from '@nuxtjs/composition-api'

export default function useWatchlist (auctionId: number) {
  const { $services } = useContext()
  const user = $services.auth.user()
  const uid = computed(() => user ? user.id : '')
  const err = ref('')
  const loading = ref(false)
  const watching = ref(false)

  const fetch = async () => {
    if (loading.value) { return }
    loading.value = true

    const { data, error } = await $services.auction.findById(auctionId)

    if (error) {
      err.value = error
    } else {
      watching.value = Boolean(data)
    }

    loading.value = false
  }

  const toggle = async () => {
    if (loading.value) { return }
    loading.value = true
    const create = Boolean(watching.value)
    const { data, error } = await $services.watchlist.toggle(auctionId, uid.value, create)

    if (error) {
      err.value = error
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
