import { parseISO, toDate, isAfter } from 'date-fns'
import { IAuction, IAuctionData } from './auction.types'

export class Auction implements IAuction {
  readonly id?: number
  readonly name: string
  readonly description: string
  readonly slug: string
  readonly ownerId: string // uuid
  readonly enabled: boolean
  readonly featured: boolean
  readonly estimateMin: number
  readonly estimateMax: number
  readonly startAmount: number
  readonly startDate: Date | string
  readonly endDate: string

  readonly createdAt?: Date | string
  readonly updatedAt?: Date | string

  constructor (data: IAuctionData) {
    this.id = data.id
    // this.bids = data.bids
    this.description = data.description
    this.enabled = data.enabled
    this.featured = data.featured
    this.ownerId = data.ownerId
    this.endDate = data.endDate
    this.startDate = data.startDate
    this.estimateMin = data.estimateMin
    this.estimateMax = data.estimateMax
    this.name = data.name
    this.slug = data.slug
    this.startAmount = data.startAmount
  }

  get totalBids () {
    // this.totalBids = this.bids.length
    return 0 // @tood determine this
  }

  get hasBids () {
    // this.hasBids = Boolean(this.bids.length)
    return true // @todo determine this
  }

  get hasEnded () {
    const now = toDate(new Date())
    const end = parseISO(this.endDate)
    // this.hasEnded = isAfter(now, end)
    return isAfter(now, end)
    // return true // @todo determine this
  }

  get minimumBid () {
    // this.minimumBid = this.hasBids ? this.bids[0].value : this.startAmount
    return 0 // @todo determine this
  }

  get highestBid () {
    // this.highestBid = this.hasBids ? this.bids[this.totalBids - 1].value : 0
    return 0 // @todo determine this
  }
}

export default Auction
