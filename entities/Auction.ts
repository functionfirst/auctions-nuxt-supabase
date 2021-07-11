import { IAuction, IBid } from '@/types/types'

export default class Auction implements IAuction {
  id: number
  name: string
  startAmount: number
  bids: Array<IBid>

  constructor (auction: IAuction) {
    this.id = Number(auction.id)
    this.name = auction.name
    this.bids = auction.bids
    this.startAmount = auction.startAmount
  }

  get minimumBid () {
    if (this.bids.length > 0) {
      return this.bids[0].value
    }

    return this.startAmount
  }

  // get highestBid () {
  //   if (this.bids.length > 0) {
  //     // const  = this.bids
  //     return this.bids[0].value
  //   }

  //   return 0
  // }
}
