export interface IBid {
  value: number
}

export interface IWatchlist {
  auctionId: string|number,
  uid: string
}

export interface IAuction {
  id: number,
  name: string,
  bids: Array<IBid>,
  startAmount: number,
  minimumBid: number
}
