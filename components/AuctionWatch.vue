<template>
  <div>
    <button
      v-show="!watching"
      class="w-48 flex items-center justify-center shadow-sm border border-indigo-600 hover:border-indigo-800 py-2 px-3 text-xs uppercase rounded-full text-indigo-600 hover:text-indigo-800 bg-white"
      @click="toggle"
    >
      <IconSpinner v-show="loading" class="w-4 h-4 mr-2" />
      <IconHeart v-show="!loading" class="w-4 h-4 mr-2" />
      Add to Watchlist
    </button>

    <button
      v-show="watching"
      class="w-48 flex items-center justify-center shadow-sm border border-transparent py-2 px-3 text-xs uppercase rounded-full bg-indigo-600 hover:bg-indigo-800 text-white"
      @click="toggle"
    >
      <IconSpinner v-show="loading" class="w-4 h-4 mr-2" />
      <IconHeartFull v-show="!loading" class="w-4 h-4 mr-2" />
      Added to watchlist
    </button>
  </div>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'
import useWatchlist from '@/composables/useWatchlist'

export default defineComponent({
  props: {
    auctionId: {
      required: true,
      type: String
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
