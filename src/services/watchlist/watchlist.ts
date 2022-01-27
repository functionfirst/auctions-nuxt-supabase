import { SupabaseClient } from '@supabase/supabase-js'
import { SupabaseQueryBuilder } from '@supabase/supabase-js/dist/main/lib/SupabaseQueryBuilder'
import { Watchlist, IWatchlist } from '../../entities'
import { IWatchlistService } from './watchlist.types'
import { IServiceResponse } from '@/src/services'

export class WatchlistService implements IWatchlistService {
  readonly collection: SupabaseQueryBuilder<any>

  constructor (supabase: SupabaseClient) {
    this.collection = supabase.from('watchlist')
  }

  async toggle (auctionId: number, uid: string, create: boolean = false): IServiceResponse<IWatchlist|undefined> {
    if (create) {
      const { data } = await this.collection.insert({ auctionId, uid }).single()
      const watchlist = new Watchlist(data)
      return { data: watchlist }
    }

    await this.collection.delete().match({ auctionId, uid })

    return { data: undefined }
  }

  async getById (auctionId: number, uid: string): IServiceResponse<IWatchlist|undefined> {
    // .eq('auctionId', auctionId).eq('uid', uid)
    const { data, error } = await this.collection.select('uid, auctionId').match({ auctionId, uid }).single()

    if (error) {
      return { error: error.message }
    }

    const watchlist = new Watchlist(data)
    return { data: watchlist }
  }
}
