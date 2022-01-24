export default class Watchlist {
  auctionId
  uid

  constructor ({
    auctionId = '',
    uid = ''
  }) {
    this.auctionId = auctionId
    this.uid = uid
  }
}
