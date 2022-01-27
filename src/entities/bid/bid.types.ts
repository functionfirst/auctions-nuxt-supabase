export interface IBidData {
  readonly id?: number
  readonly amount: number
  readonly auctionId: number
  readonly userId: string // uuid
  readonly createdAt?: Date | string
}

export interface IBid extends IBidData {

}
