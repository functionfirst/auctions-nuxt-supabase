class AuctionAPIService {
  allowedFields = `
    id,
    name,
    slug,
    description,
    startAmount,
    bids (
      value
    )
  `

  constructor (supabase) {
    this.collection = supabase.from('auctions')
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

  findAll () {
    return this.collection.select(this.allowedFields) // .eq('auctionId', item.auctionId)
  }

  findById (id) {
    return this.collection.select(this.allowedFields).eq('id', id).single()
  }

  discover () {
    return this.collection.select(this.allowedFields).range(0, 9)
  }

  upcoming () {
    return this.collection.select(this.allowedFields).range(0, 9)
  }
}

export default AuctionAPIService
