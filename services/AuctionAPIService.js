import auctionFactory from '@/factories/AuctionFactory'

class AuctionAPIService {
  allowedFields = `
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

  constructor(supabase) {
    this.collection = supabase.from('auctions')
  }

  async create(item) {
    const { data, error } = await this.collection.insert(item).single()

    if (error) {
      return [null, error]
    }

    return [data]
  }

  async update(query, item) {
    const { data, error } = await this.collection.update(item).match(query)

    if (error) {
      return [null, error]
    }

    return [data]
  }

  async delete(query) {
    const { data, error } = await this.collection.delete().match(query)

    if (error) {
      return [null, error]
    }

    return [data]
  }

  async findAll() {
    const { data, error } = await this.collection.select(this.allowedFields)

    if (error) {
      return [null, error]
    }

    return [auctionFactory(data)]
  }

  async findById(id) {
    const { data, error } = await this.collection
      .select(this.allowedFields)
      .eq('id', id)
      .single()

    if (error) {
      return [null, error]
    }

    return [auctionFactory(data)]
  }

  async discover() {
    const { data, error } = await this.collection
      .select(this.allowedFields)
      .range(0, 9)

    if (error) {
      return [null, error]
    }

    return [auctionFactory(data)]
  }

  async upcoming() {
    const { data, error } = await this.collection
      .select(this.allowedFields)
      .range(0, 9)

    if (error) {
      return [null, error]
    }

    return [auctionFactory(data)]
  }
}

export default AuctionAPIService
