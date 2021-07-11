import { PostgrestResponse, PostgrestSingleResponse } from '@supabase/supabase-js'

export interface IWrite<T> {
  create(item: T): Promise<PostgrestSingleResponse<T>>
  update(query: Record<string, unknown>, item: T): Promise<PostgrestResponse<T>>
  delete(query: Record<string, unknown>): Promise<PostgrestResponse<T>>
}
