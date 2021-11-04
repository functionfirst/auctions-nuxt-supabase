export default class Auction {
  id
  bids
  name
  startAmount

  constructor ({
    id,
    bids,
    name,
    startAmount
  }) {
    this.id = String(id)
    this.bids = bids
    this.name = name
    this.startAmount = startAmount
  }

  get minimumBid () {
    if (this.bids.length > 0) {
      return this.bids[0].value
    }

    return this.startAmount
  }

  get highestBid () {
    if (this.bids.length > 0) {
      return this.bids[this.bids.length - 1].value
    }

    return 0
  }
}
