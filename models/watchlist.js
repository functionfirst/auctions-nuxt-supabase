export default {
  data () {
    return {
      loading: false,
      watching: false
    }
  },

  props: ['auctionId', 'userId'],

  computed: {
    payload () {
      return {
        auctionId: this.auctionId,
        uid: this.uid
      }
    }
  },

  async mounted () {
    const { data, error } = await this.$supabase
      .from('watchlist')
      .select()
      .eq('auctionId', this.auctionId)
      .eq('uid', this.uid)

    if (error) {
      throw new Error(error.message)
    }

    this.watching = Boolean(data)
  },

  methods: {
    async toggle () {
      // this.loading = true
      const { error } = this.watching ? await this.remove() : await this.create()
      // this.loading = false

      if (error) {
        throw new Error(error)
      }

      this.watching = !this.watching
    },

    async create () {
      return await this.$supabase
        .from('watchlist')
        .insert([this.payload])
    },

    async remove () {
      return await this.$supabase
        .from('watchlist')
        .delete()
        .match(this.payload)
    }
  },

  render () {
    return this.$scopedSlots.default({
      watching: this.watching,
      toggle: this.toggle,
      loading: this.loading
    })
  }
}
