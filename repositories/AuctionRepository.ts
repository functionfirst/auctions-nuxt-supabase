import { SupabaseClient } from '@supabase/supabase-js'
import BaseRespository from '@/repositories/BaseRepository'
// import { PostgrestError } from '@supabase/postgrest-js'
import Auction from '@/entities/Auction'
import { IAuction } from '@/types/types'

export default class AuctionRepository extends BaseRespository<Auction> {
  public readonly _allowedFields: string = `
    id,
    name,
    slug,
    description,
    bids (
      value
    )
  `

  constructor (supabase: SupabaseClient) {
    super(supabase, 'auctions')
  }

  discover () {
    return this._collection.select(this._allowedFields).range(0, 9)
  }

  upcoming () {
    return this._collection.select(this._allowedFields).range(0, 9)
  }

  async findById (id: string): Promise<IAuction> {
    try {
      const { error, data } = await this._collection.select(this._allowedFields).eq('id', id).single()

      if (error) {
        throw new Error(error.message)
      } else if (data) {
        return new Auction(data)
      }

      throw new Error('unknown error')
    } catch (error) {
      return error
    }
  }

  // get (id: string) {
  //   return this._collection.select(this._allowedFields).eq('id', id).single()
  // }
}
