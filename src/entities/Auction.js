import parseISO from 'date-fns/parseISO'
import toDate from 'date-fns/toDate'
import isAfter from 'date-fns/isAfter'

class Auction {
  id
  bids
  description
  endDate
  startDate
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
    endDate,
    startDate,
    estimateMin,
    estimateMax,
    name,
    slug,
    startAmount
  }) {
    this.id = id
    this.bids = bids
    this.description = description
    this.endDate = endDate
    this.startDate = startDate
    this.estimateMin = estimateMin
    this.estimateMax = estimateMax
    this.name = name
    this.slug = slug
    this.startAmount = startAmount

    const now = toDate(new Date())
    const end = parseISO(endDate)

    /**
     * Don't use getters as useFetch SSR seems to return a json object
     */
    this.hasBids = Boolean(this.bids.length)
    this.hasEnded = isAfter(now, end)
    this.totalBids = this.bids.length
    this.highestBid = this.hasBids ? this.bids[this.totalBids - 1].value : 0
    this.minimumBid = this.hasBids ? this.bids[0].value : this.startAmount
  }
}

export default Auction
