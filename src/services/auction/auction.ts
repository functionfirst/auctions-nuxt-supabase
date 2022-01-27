import { IAuctionService, IServiceResponse, IServiceClient, IServiceQueryBuilder } from '../'
import { Auction, IAuction, IAuctionData } from '../../entities'

export class AuctionService implements IAuctionService {
  readonly collection: IServiceQueryBuilder<any>

  // @todo need to follow open/closed principle here
  readonly allowedFields = `
    id,
    name,
    slug,
    description,
    end_date,
    start_date,
    estimate_min,
    estimate_max,
    start_amount
  `

  constructor (service: IServiceClient) {
    this.collection = service.from('auctions')
  }

  async create (payload: IAuctionData): IServiceResponse<IAuction> {
    const { data, error } = await this.collection.insert(payload).single()

    if (error) {
      return { error: error.message }
    }

    const auction = new Auction(data)
    return { data: auction }
  }

  async update (id: number, payload: IAuctionData): IServiceResponse<IAuction> {
    const { data, error } = await this.collection.update(payload).eq('id', id).single()

    if (error) {
      return { error: error.message }
    }

    const auction = new Auction(data)
    return { data: auction }
  }

  async delete (id: number): IServiceResponse<boolean> {
    const { error } = await this.collection.delete().eq('id', id)

    if (error) {
      return { error: error.message }
    }

    return {
      data: true,
      message: 'Auction deleted successfully'
    }
  }

  async findAll (): IServiceResponse<IAuction[]> {
    const { data, error } = await this.collection.select(this.allowedFields)

    if (error) {
      return { error: error.message }
    }

    const auctions = data?.map((auction: IAuctionData) => new Auction(auction))
    return { data: auctions }
  }

  async findById (id: number): IServiceResponse<IAuction> {
    const { data, error } = await this.collection
      .select(this.allowedFields)
      .eq('id', id)
      .single()

    if (error) {
      return { error: error.message }
    }

    const auction = new Auction(data)
    return { data: auction }
  }

  async discover (): IServiceResponse<IAuction[]> {
    const { data, error } = await this.collection
      .select(this.allowedFields)
      .range(0, 9)

    if (error) {
      return { error: error.message }
    }

    const auctions = data?.map((auction: IAuctionData) => new Auction(auction))
    return { data: auctions }
  }

  async upcoming (): IServiceResponse<IAuction[]> {
    const { data, error } = await this.collection
      .select(this.allowedFields)
      .range(0, 9)

    if (error) {
      return { error: error.message }
    }

    const auctions = data?.map((auction: IAuctionData) => new Auction(auction))
    return { data: auctions }
  }
}
