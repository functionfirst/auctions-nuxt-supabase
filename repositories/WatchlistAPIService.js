class WatchListAPIService {
  allowedFields = `
    uid,
    auctionId
  `

  constructor (supabase) {
    this.collection = supabase.from('watchlist')
  }

  create (item) {
    return this.collection.insert(item).single()
  }

  update (query, item) {
    return this.collection.update(item).match(query)
  }

  delete (query){
    return this.collection.delete().match(query)
  }

  getByAuctionId (auctionId, uid) {
    return this.collection.select(this.allowedFields).eq('auctionId', auctionId).eq('uid', uid)
  }
}


export default WatchListAPIService
