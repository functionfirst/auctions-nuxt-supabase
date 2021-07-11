import { IWrite } from '@/repositories/interfaces/IWrite'
import { IRead } from '@/repositories/interfaces/IRead'

import { PostgrestResponse, PostgrestSingleResponse, SupabaseClient } from '@supabase/supabase-js'
import { SupabaseQueryBuilder } from '@supabase/supabase-js/dist/main/lib/SupabaseQueryBuilder'

export default abstract class BaseRespository<T> implements IWrite<T>, IRead<T> {
  public readonly _collection: SupabaseQueryBuilder<T>

  public readonly _allowedFields: string = '*'

  constructor (supabase: SupabaseClient, collectionName: string) {
    this._collection = supabase.from(collectionName)
  }

  async create (item: T): Promise<PostgrestSingleResponse<T>> {
    return await this._collection.insert(item).single()
  }

  async update (query: Record<string, unknown>, item: T): Promise<PostgrestResponse<T>> {
    return await this._collection.update(item).match(query)
  }

  async delete (query: Record<string, unknown>): Promise<PostgrestResponse<T>> {
    return await this._collection.delete().match(query)
  }

  async find (): Promise<PostgrestResponse<T>> {
    return await this._collection.select(this._allowedFields) // .eq('auctionId', item.auctionId)
  }

  // findOne (): Promise<PostgrestSingleResponse<T>> {
  //   throw new Error('Method not implemented.')
  // // return await this._collection.select(this._allowedFields).eq('id', id).single()
  // //   // export const getAuctionById = async (id: number|string) => await auctionList.eq('id', id).single()
  // //   // return await this._collection
  // }
}
