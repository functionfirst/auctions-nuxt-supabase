import BaseRespository from '@/repositories/BaseRepository'
import Auction from '@/entities/Auction'

export default class AuctionRepository extends BaseRespository {
  _allowedFields = `
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
    super(supabase, 'auctions')
  }

  discover () {
    return this._collection.select(this._allowedFields).range(0, 9)
  }

  upcoming () {
    return this._collection.select(this._allowedFields).range(0, 9)
  }

  async findById (id) {
    // try {
    const { error, data } = await this._collection.select(this._allowedFields).eq('id', id).single()

    if (error) {
      throw new Error(error.message)
    } else if (data) {
      return new Auction(data)
    }

    throw new Error('unknown error')
    // } catch (error) {
    //   return error
    // }
  }

  // get (id: string) {
  //   return this._collection.select(this._allowedFields).eq('id', id).single()
  // }
}
