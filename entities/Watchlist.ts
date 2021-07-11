import { IWatchlist } from '@/types/types'

export default class Watchlist implements IWatchlist {
  auctionId: string
  uid: string

  constructor ({
    auctionId = '',
    uid = ''
  }) {
    this.auctionId = auctionId
    this.uid = uid
  }
}
