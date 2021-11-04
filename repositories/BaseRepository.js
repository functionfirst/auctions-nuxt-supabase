export default class BaseRespository {
  _collection

  _allowedFields = '*'

  constructor (supabase, collectionName) {
    this._collection = supabase.from(collectionName)
  }

  async create (item) {
    return await this._collection.insert(item).single()
  }

  async update (query, item) {
    return await this._collection.update(item).match(query)
  }

  async delete (query){
    return await this._collection.delete().match(query)
  }

  async find () {
    return await this._collection.select(this._allowedFields) // .eq('auctionId', item.auctionId)
  }

  // findOne (): Promise<PostgrestSingleResponse<T>> {
  //   throw new Error('Method not implemented.')
  // // return await this._collection.select(this._allowedFields).eq('id', id).single()
  // //   // export const getAuctionById = async (id: number|string) => await auctionList.eq('id', id).single()
  // //   // return await this._collection
  // }
}
