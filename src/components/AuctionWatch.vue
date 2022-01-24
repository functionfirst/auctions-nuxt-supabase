<template>
  <button
    class="flex items-center justify-center shadow-sm border py-1.5 px-3 text-sm rounded-sm"
    :class="
      watching ?
      'border-transparent bg-indigo-600 text-white hover:bg-indigo-800' :
      'border-indigo-600 bg-white text-indigo-600 hover:text-indigo-900 hover:border-indigo-900'
    "
    @click="toggle"
  >
    <IconSpinner v-show="loading" class="w-4 h-4 mr-2" />
    <IconHeart v-show="!watching && !loading" class="w-4 h-4 mr-2" />
    <IconHeartFull v-show="watching && !loading" class="w-4 h-4 mr-2" />
    <span v-show="!watching">Add to Watchlist</span>
    <span v-show="watching">Added to watchlist</span>
  </button>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'
import useWatchlist from '~/composables/useWatchlist'

export default defineComponent({
  props: {
    auctionId: {
      required: true,
      type: Number
    }
  },

  setup (props) {
    const { loading, watching, toggle } = useWatchlist(props.auctionId)

    return {
      loading,
      watching,
      toggle
    }
  }
  // data () {
  //   return {
  //     // toggle: () => {},
  //     // watchlist: null,
  //     // watching: false,
  //     // watching: false,
  //     // toggle: () => {},
  //     // loading: false,
  //     error: null
  //     // loading: null
  //   }
  // },

  // computed: {
  //   // auctionId () {
  //   //   return this.$route.params.id
  //   // },

  //   // userId () {
  //   //   const user = this.$supabase.auth.user()
  //   //   return user ? user.id : null
  //   // }
  // },

  // mounted () {
  // On client load - fetch this watch list user id and auction id
  // @todo check if this is on client load only - we don't want to server render this
  // const { toggle, loading, watching } = new Watchlist({
  //   db: this.$supabase,
  //   userId: this.userId,
  //   auctionId: this.auctionId
  // })

  // this.toggle = toggle
  // this.loading = loading
  // this.watching = watching

  // this.toggle = toggle
  // this.loading = loading

  // this.watching = this.watchlist.init()

  // this.watchlist = new Watchlist({
  //   db: this.$supabase,
  //   userId: this.userId,
  //   auctionId: this.auctionId
  // })

  // this.watching = this.watchlist?.isWatching
  // }
  // methods: {
  //   async toggleWatchlist () {
  //     this.loading = true
  //     this.watching = await this.watchlist.toggle()
  //     this.loading = false
  //     // this.watching = this.watchlist?.isWatching
  //   }
  // }
})
</script>
