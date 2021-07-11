import { PostgrestResponse, PostgrestSingleResponse } from '@supabase/supabase-js'

export interface IRead<T> {
  find(item: T): Promise<PostgrestResponse<T>>
  // findOne(id: string): Promise<PostgrestSingleResponse<T>>
}
