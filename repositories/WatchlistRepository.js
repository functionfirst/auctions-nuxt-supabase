import { SupabaseClient } from '@supabase/supabase-js'
import BaseRespository from '@/repositories/BaseRepository'
import Watchlist from '@/entities/Watchlist'

export default class WatchlistRepository extends BaseRespository {
  _allowedFields= `
    uid,
    auctionId
  `

  constructor (supabase) {
    super(supabase, 'watchlist')
  }

  async get (uid, auctionId) {
    return await this._collection.select(this._allowedFields).eq('auctionId', auctionId).eq('uid', uid)
  }

  // export const create = async (payload: IWatchlist) => await supabase.from('watchlist').insert(payload).single()

  // export const remove = async (payload: any) => await supabase.from('watchlist').delete().match(payload)

  // export const get = async (payload: IWatchlist) => await supabase.from('watchlist').select().eq('auctionId', payload.auctionId).eq('uid', payload.uid)
}
