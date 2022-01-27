export interface IAuctionData {
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
}

export interface IAuction extends IAuctionData {
  readonly totalBids: number
  readonly hasEnded: boolean
  readonly hasBids: boolean
  readonly minimumBid: number
  readonly highestBid: number
}
