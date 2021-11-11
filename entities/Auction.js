class Auction {
  id
  bids
  description
  estimateMin
  estimateMax
  name
  slug
  startAmount
  hasBids
  highestBid
  minimumBid
  totalBids

  constructor({
    id,
    bids,
    description,
    estimateMin,
    estimateMax,
    name,
    slug,
    startAmount
  }) {
    this.id = id
    this.bids = bids
    this.description = description
    this.estimateMin = estimateMin
    this.estimateMax = estimateMax
    this.name = name
    this.slug = slug
    this.startAmount = startAmount

    /**
     * Don't use getters as useFetch SSR seems to return a json object
     */
    this.hasBids = Boolean(this.bids.length)
    this.highestBid = this.hasBids ? this.bids[this.totalBids - 1].value : 0
    this.minimumBid = this.hasBids ? this.bids[0].value : this.startAmount
    this.totalBids = this.bids.length
  }
}

export default Auction
